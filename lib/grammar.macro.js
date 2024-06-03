import { i } from '@bablr/boot/shorthand.macro';
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Spamex from '@bablr/language-spamex';
import * as Comment from '@bablr/language-c-comments';
import * as productions from '@bablr/helpers/productions';

export const canonicalURL = 'https://bablr.org/languages/core/bablr-vm-instruction';

export const dependencies = { Spamex, Comment };

export function* eatMatchTrivia() {
  if (yield i`match(/[ \t\n]|\/\*|\/\//)`) {
    return yield i`eat(<Comment:Trivia>)`;
  }
  return null;
}

export const grammar = class BABLRVMInstructionGrammar {
  @Node
  *Call() {
    yield i`eat(<*Identifier> 'callee')`;
    yield* eatMatchTrivia();
    yield i`eat(<Tuple> 'arguments')`;
  }

  *Expression() {
    yield i`eat(<Any> null [
        <Array '['>
        <Object '{'>
        <Tuple '('>
        <*Boolean /true|false/>
        <*Null 'null'>
        <*Gap '<//>'>
        <*Identifier /\w/>
        <Spamex:Matcher /[<'"/]/>
      ])`;
  }

  @CoveredBy('Expression')
  @Node
  *Array() {
    yield i`eat(<*Punctuator '[' balanced=']'> 'open')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Expression> 'elements[]')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator ']' balancer> 'close')`;
  }

  @CoveredBy('Expression')
  @Node
  *Object() {
    yield i`eat(<*Punctuator '{' balanced='}'> 'open')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Property> 'properties[]')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator '}' balancer> 'close')`;
  }

  @Node
  *Property() {
    yield i`eat(<*Identifier> 'key')`;
    yield* eatMatchTrivia();
    yield i`eat(<*Punctuator ':'> 'mapOperator')`;
    yield* eatMatchTrivia();
    yield i`eat(<Expression> 'value')`;
  }

  @CoveredBy('Expression')
  @Node
  *Tuple() {
    yield i`eat(<*Punctuator '(' balanced=')'> 'open')`;
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield i`match(/./y)`)) {
      yield i`eat(<Expression> 'values[]')`;
      sp = yield* eatMatchTrivia();
      first = false;
    }
    yield i`eat(<*Punctuator ')' balancer> 'close')`;
  }

  @CoveredBy('Expression')
  @Node
  *Boolean() {
    yield i`eat(/true|false/)`;
  }

  @CoveredBy('Expression')
  @Node
  *Null() {
    yield i`eat('null')`;
  }

  @CoveredBy('Expression')
  @Node
  *Identifier() {
    yield i`eat(/\w+/)`;
  }

  @Node
  @InjectFrom(productions)
  *Punctuator() {}

  @InjectFrom(productions)
  *Any() {}
};
