import { re, spam as m } from '@bablr/boot';
import { eat, eatMatch, match } from '@bablr/helpers/grammar';
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Space from '@bablr/language-en-blank-space';
import * as productions from '@bablr/helpers/productions';

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';

export const dependencies = { Space };

export function* eatMatchTrivia() {
  if (yield match(re`/[ \t\n]/`)) {
    return yield eat(m`#: <*Space:Space />`);
  }
  return null;
}

export const grammar = class BABLRVMInstructionGrammar {
  @Node
  *Call() {
    yield eat(m`callee$: <*Identifier />`);
    yield* eatMatchTrivia();
    yield eat(m`arguments$: <Tuple />`);
  }

  *Expression() {
    yield eat(m`<Any />`, [
      m`<Array '[' />`,
      m`<Object '{' />`,
      m`<Tuple '(' />`,
      m`<*Boolean /true|false/ />`,
      m`<*Null 'null' />`,
      m`<Number /[\d]|[+-]?Infinity/ />`,
      m`<SpamexString /m["'\`]/ />`,
      m`<CSTMLString /c["'\`]/ />`,
    ]);
  }

  @Node
  *SpamexString() {
    yield eat(m`sigilToken: <*Keyword 'm' />`);
    let quot = match(re`/['"\`]/`);
    yield eat(m`openToken: <*Punctuator ${quot} balanced=${quot} />`);
    yield eat(m`content: <Spamex:Matcher />`);
    yield eat(m`closeToken: <*Punctuator ${quot} balancer />`);
  }

  @Node
  *CSTMLString() {
    yield eat(m`sigilToken: <*Keyword 'c' />`);
    let quot = match(re`/['"\`]/`);
    yield eat(m`openToken: <*Punctuator ${quot} balanced=${quot} />`);
    yield eat(m`content: <CSTML:Stream />`);
    yield eat(m`closeToken: <*Punctuator ${quot} balancer />`);
  }

  @CoveredBy('Expression')
  @Node
  *Array() {
    yield eat(m`openToken: <*Punctuator '[' balanced=']' />`);
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./`))) {
      yield eat(m`elements[]$: <Expression />`);
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield eat(m`closeToken: <*Punctuator ']' balancer />`);
  }

  @CoveredBy('Expression')
  @Node
  *Object() {
    yield eat(m`openToken: <*Punctuator '{' balanced='}' />`);
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./`))) {
      yield eat(m`properties[]$: <Property />`);
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield eat(m`closeToken: <*Punctuator '}' balancer />`);
  }

  @Node
  *Property() {
    yield eat(m`key$: <*Identifier />`);
    yield* eatMatchTrivia();
    yield eat(m`mapToken: <*Punctuator ':' />`);
    yield* eatMatchTrivia();
    yield eat(m`value$: <Expression />`);
  }

  @CoveredBy('Expression')
  @Node
  *Tuple() {
    yield eat(m`openToken: <*Punctuator '(' balanced=')' />`);
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./`))) {
      yield eat(m`values[]$: <Expression />`);
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield eat(m`closeToken: <*Punctuator ')' balancer />`);
  }

  @CoveredBy('Expression')
  @Node
  *Boolean() {
    yield eat(m`sigilToken: <*Keyword /true|false/ />`);
  }

  @CoveredBy('Expression')
  @Node
  *Null() {
    yield eat(m`sigilToken: <*Keyword 'null' />`);
  }

  @Node
  *Identifier() {
    yield eat(m`/[a-zA-Z]+/`);
  }

  *Number() {
    yield eat(m`<Any />`, [m`<Integer /-?\d/ />`, m`<Infinity /[+-]I/ />`]);
  }

  @Node
  *UnsignedInteger() {
    yield eat(m`digits[]: <Digits />`);
  }

  @CoveredBy('Number')
  @Node
  *Integer() {
    yield eatMatch(m`negativeToken: <*Punctuator '-' />`);
    yield eat(m`digits[]$: <Digits />`);
  }

  *Digits() {
    while (yield eatMatch(m`<*Digit /\d/ />`));
  }

  @Node
  *Digit() {
    yield eat(re`/\d/`);
  }

  @CoveredBy('Number')
  @Node
  *Infinity() {
    yield eatMatch(m`signToken: <*Punctuator /[+-]/ />`);
    yield eat(m`sigilToken: <*Keyword 'Infinity' />`);
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
