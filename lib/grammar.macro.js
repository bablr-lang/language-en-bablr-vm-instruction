import { re, spam as m } from '@bablr/boot';
import { extendLanguage, o, eat, match, eatMatch } from '@bablr/helpers/grammar';
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Space from '@bablr/language-en-blank-space';
import * as CSTML from '@bablr/language-en-cstml';
import * as Spamex from '@bablr/language-en-spamex';
import * as Regex from '@bablr/language-en-regex-vm-pattern';
import * as JSON from '@bablr/language-en-cstml-json';
import * as productions from '@bablr/helpers/productions';
import { buildString } from '@bablr/helpers/builders';

export const type = Symbol.for('@bablr/language');

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';

export function* eatMatchTrivia() {
  if (yield match(re`/[ \t\n]/`)) {
    return yield eat(m`#: <*Space:Space />`);
  }
  return null;
}

const IJSON = extendLanguage(JSON, {
  canonicalURL: 'https://bablr.org/languages/core/en/bablr-vm-instruction-json',
  dependencies: {
    Instruction: canonicalURL,
  },
  grammar: class IJSON extends JSON.grammar {
    *Expression(props) {
      if (yield match(re`/(m|re|t|i)['"\u0060]/`)) {
        yield eat(m`<__Instruction:Expression />`);
      } else {
        yield* super.Expression(props);
      }
    }
  },
});

export const dependencies = { Space, CSTML, Spamex, Regex, JSON, IJSON };

export const grammar = class BABLRVMInstructionGrammar {
  @Node
  *Call() {
    yield eat(m`callee$: <*Identifier />`);
    yield* eatMatchTrivia();

    yield eat(m`openToken: <*Punctuator '(' { balanced: ')' } />`);
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./s`))) {
      yield eat(m`values[]$: <__Expression />`);
      yield* eatMatchTrivia();
      sp = yield eatMatch(m`separatorTokens[]: <*Punctuator ',' />`);
      yield* eatMatchTrivia();
      first = false;
    }
    yield eat(m`closeToken: <*Punctuator ')' { balancer: true } />`);
  }

  *Expression() {
    yield eat(m`<_Any />`, [
      m`<IJSON:Array '[' />`,
      m`<IJSON:Object '{' />`,
      m`<JSON:Boolean /true|false/ />`,
      m`<JSON:Null 'null' />`,
      m`<JSON:Number /[\d]/ />`,
      m`<JSON:Infinity /[+-]?Infinity/ />`,
      m`<SpamexString /m["'\u0060]/ />`,
      m`<CSTMLString /t["'\u0060]/ />`,
      m`<RegexString /re["'\u0060]/ />`,
      m`<InstructionString /i["'\u0060]/ />`,
      m`<JSON:String /["']/ />`,
    ]);
  }

  @Node
  *SpamexString({ ctx }) {
    yield eat(m`sigilToken: <*Keyword 'm' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content: <__Spamex:Matcher />`);
    yield eat(m`closeToken: <*Punctuator ${quot} { balancer: true } />`);
  }

  @Node
  *CSTMLString({ ctx }) {
    yield eat(m`sigilToken: <*Keyword 't' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content: <__CSTML:Tag />`);
    yield eat(m`closeToken: <*Punctuator ${quot} { balancer: true } />`);
  }

  @Node
  *RegexString({ ctx }) {
    yield eat(m`sigilToken: <*Keyword 're' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content: <Regex:Pattern />`);
    yield eat(m`closeToken: <*Punctuator ${quot} { balancer: true } />`);
  }

  @Node
  *InstructionString({ ctx }) {
    yield eat(m`sigilToken: <*Keyword 'i' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content: <Call />`);
    yield eat(m`closeToken: <*Punctuator ${quot} { balancer: true } />`);
  }

  @CoveredBy('IJSONExpression')
  @CoveredBy('Expression')
  @Node
  *String() {
    yield eat(m`<_IJSON:String />`);
  }

  @Node
  *Identifier() {
    yield eat(re`/[a-zA-Z]+/`);
  }

  @Node
  @InjectFrom(productions)
  *Punctuator() {}

  @Node
  @InjectFrom(productions)
  *Keyword() {}

  @InjectFrom(productions)
  *Any() {}
};
