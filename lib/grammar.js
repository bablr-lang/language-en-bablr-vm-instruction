import { i } from '@bablr/boot/shorthand.macro';
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Spamex from '@bablr/language-spamex';
import * as productions from '@bablr/helpers/productions';

export const canonicalURL = 'https://github.com/bablr-lang/language-bablr-vm-instruction';

export const dependencies = { Spamex };

export const grammar = class BABLRVMInstructionGrammar {
  @Node
  *Call() {
    yield i`eat(<*Identifier> 'callee')`;
    yield i`eat(<Tuple> 'arguments')`;
  }

  *Expression() {
    yield i`eat(<Match> null [
        (<Array> '[')
        (<Object> '{')
        (<Tuple> '(')
        (<Boolean> /true|false/)
        (<Null> 'null')
        (<*Identifier> /\w/)
        (<Spamex:Matcher> /[<'"/]/)
      ])`;
  }

  @CoveredBy('Expression')
  @Node
  *Array() {
    yield i`eat(<*Punctuator '[' balanced=']'> 'open')`;
    while (yield i`match(/./y)`) {
      yield i`eat(<Expression> 'elements[]')`;
    }
    yield i`eat(<*Punctuator ']' balancer> 'close')`;
  }

  @CoveredBy('Expression')
  @Node
  *Object() {
    yield i`eat(<*Punctuator '{' balanced='}'> 'open')`;
    while (yield i`match(/./y)`) {
      yield i`eat(<Expression> 'properties[]')`;
    }
    yield i`eat(<*Punctuator '}' balancer> 'close')`;
  }

  @Node
  *Property() {
    yield i`eat(<*Identifier> 'key')`;
    yield i`eat(<*Punctuator ':'> 'mapOperator')`;
    yield i`eat(<Expression> 'value')`;
  }

  @CoveredBy('Expression')
  @Node
  *Tuple() {
    yield i`eat(<*Punctuator '(' balanced=')'> 'open')`;
    while (yield i`match(/./y)`) {
      yield i`eat(<Expression> 'values[]')`;
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
  *Match() {}
};
