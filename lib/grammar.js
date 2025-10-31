import { re, spam as m } from '@bablr/boot';
import { extendLanguage, eat, match, eatMatch } from '@bablr/helpers/grammar';
import * as Space from '@bablr/language-en-blank-space';
import * as CSTML from '@bablr/language-en-cstml';
import * as Spamex from '@bablr/language-en-spamex';
import * as Regex from '@bablr/language-en-regex-vm-pattern';
import * as JSON from '@bablr/language-en-cstml-json';
import { buildString } from '@bablr/helpers/builders';

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';

export const defaultMatcher = m`<Call />`;

export function* eatMatchTrivia() {
  let trivia = null;
  while (yield match(re`/[ \t\n]/`)) {
    trivia = yield eat(m`#: :Space: <_Blank />`);
  }
  return trivia;
}

const IJSON = extendLanguage(JSON, {
  canonicalURL: 'https://bablr.org/languages/core/en/bablr-vm-instruction-json',
  dependencies: {
    Instruction: canonicalURL,
  },
  grammar: class IJSON extends JSON.grammar {
    *Expression(props) {
      if (yield match(re`/(?:m|re|t|i)['"\u0060]/`)) {
        yield eat(m`:Instruction: <_Expression />`);
      } else {
        yield* super.Expression(props);
      }
    }
  },
});

export const dependencies = { Space, CSTML, Spamex, Regex, JSON, IJSON };

export const grammar = class BABLRVMInstructionGrammar {
  constructor() {
    this.literals = new Set(['Punctuator', 'Keyword']);
  }

  *Call() {
    yield eat(m`callee$: <*Identifier />`);
    yield* eatMatchTrivia();

    yield eat(m`openToken*: <*Punctuator '(' { balanced: ')' } />`);
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./s`))) {
      yield eat(m`values[]$: <_Expression />`);
      yield* eatMatchTrivia();
      sp = yield eatMatch(m`#separatorTokens[]: <*Punctuator ',' />`);
      yield* eatMatchTrivia();
      first = false;
    }
    yield eat(m`closeToken*: <*Punctuator ')' { balancer: true } />`);
  }

  *Expression() {
    if (yield eatMatch(m`:IJSON: <Array '[' />`)) {
    } else if (yield eatMatch(m`:IJSON: <Object '{' />`)) {
    } else if (yield eatMatch(m`:JSON: <Boolean /true|false/ />`)) {
    } else if (yield eatMatch(m`:JSON: <Null 'null' />`)) {
    } else if (yield eatMatch(m`:JSON: <Number /[\d]/ />`)) {
    } else if (yield eatMatch(m`:JSON: <Infinity /[+-]?Infinity/ />`)) {
    } else if (yield eatMatch(m`<SpamexString /m["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<CSTMLString /t["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<RegexString /re["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<InstructionString /i["'\u0060]/ />`)) {
    } else {
      yield eat(m`:JSON: <String /["']/ />`);
    }
  }

  *SpamexString({ ctx }) {
    yield eat(m`sigilToken*: <*Keyword 'm' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content*: :Spamex: <_Matcher />`);
    yield eat(m`closeToken*: <*Punctuator ${quot} { balancer: true } />`);
  }

  *CSTMLString({ ctx }) {
    yield eat(m`sigilToken*: <*Keyword 't' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content*: :CSTML: <_Tag />`);
    yield eat(m`closeToken*: <*Punctuator ${quot} { balancer: true } />`);
  }

  *RegexString({ ctx }) {
    yield eat(m`sigilToken*: <*Keyword 're' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content*: :Regex: <Pattern />`);
    yield eat(m`closeToken*: <*Punctuator ${quot} { balancer: true } />`);
  }

  *InstructionString({ ctx }) {
    yield eat(m`sigilToken*: <*Keyword 'i' />`);
    let quot = buildString(ctx.sourceTextFor(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <*Punctuator ${quot} { balanced: ${quot} } />`);
    yield eat(m`content*: <Call />`);
    yield eat(m`closeToken*: <*Punctuator ${quot} { balancer: true } />`);
  }

  *String() {
    yield eat(m`:IJSON: <__String />`);
  }

  *Identifier() {
    yield eat(re`/[a-zA-Z]+/`);
  }
};
