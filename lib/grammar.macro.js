import { i } from '@bablr/boot/shorthand.macro';
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Space from '@bablr/language-en-blank-space';
import * as productions from '@bablr/helpers/productions';

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';

export const dependencies = { Space };

export function* eatMatchTrivia() {
  if (yield i`match(/[ \t\n]/)`) {
    return yield i`eat(<#*Space:Space />)`;
  }
  return null;
}

export const grammar = class BABLRVMInstructionGrammar {
  @Node
  *Call() {
    yield i`eat(<*Identifier /> 'callee$')`;
    yield* eatMatchTrivia();
    yield i`eat(<Tuple /> 'arguments$')`;
  }

  *Expression() {
    yield i`eat(<Any /> null [
        <Array '[' />
        <Object '{' />
        <Tuple '(' />
        <*Boolean /true|false/ />
        <*Null 'null' />
        <*Identifier /[a-zA-Z]+/ />
        <Number /[\d]|[+-]?Infinity/ />
      ])`;
  }

  @CoveredBy('Expression')
  @Node
  *Array() {
    yield i`eat(<*Punctuator '[' balanced=']' /> 'openToken')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Expression /> 'elements[]$')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator ']' balancer /> 'closeToken')`;
  }

  @CoveredBy('Expression')
  @Node
  *Object() {
    yield i`eat(<*Punctuator '{' balanced='}' /> 'openToken')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Property /> 'properties[]$')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator '}' balancer /> 'closeToken')`;
  }

  @Node
  *Property() {
    yield i`eat(<*Identifier /> 'key$')`;
    yield* eatMatchTrivia();
    yield i`eat(<*Punctuator ':' /> 'mapToken')`;
    yield* eatMatchTrivia();
    yield i`eat(<Expression /> 'value$')`;
  }

  @CoveredBy('Expression')
  @Node
  *Tuple() {
    yield i`eat(<*Punctuator '(' balanced=')' /> 'openToken')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Expression /> 'values[]$')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator ')' balancer /> 'closeToken')`;
  }

  @CoveredBy('Expression')
  @Node
  *Boolean() {
    yield i`eat(<*Keyword /true|false/ /> 'sigilToken')`;
  }

  @CoveredBy('Expression')
  @Node
  *Null() {
    yield i`eat(<*Keyword 'null' /> 'sigilToken')`;
  }

  @CoveredBy('Expression')
  @Node
  *Identifier() {
    yield i`eat(/[a-zA-Z]+/)`;
  }

  *Number() {
    yield i`eat(<Any /> null [
      <Integer /-?\d/ />
      <Infinity /[+-]I/ />
    ])`;
  }

  @Node
  *UnsignedInteger() {
    yield i`eat(<Digits /> 'digits[]')`;
  }

  @CoveredBy('Number')
  @Node
  *Integer() {
    yield i`eatMatch(<*Punctuator '-' /> 'negativeToken')`;
    yield i`eat(<Digits /> 'digits[]$')`;
  }

  *Digits() {
    while (yield i`eatMatch(<*Digit /\d/ />)`);
  }

  @Node
  *Digit() {
    yield i`eat(/\d/)`;
  }

  @CoveredBy('Number')
  @Node
  *Infinity() {
    yield i`eatMatch(<*Punctuator /[+-]/ /> 'signToken')`;
    yield i`eat(<*Keyword 'Infinity' /> 'sigilToken')`;
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
