import { i } from '@bablr/helpers/shorthand';

const Token = Symbol.for('@bablr/token');

export default class BABLRVMInstructionTokenGrammar {
  constructor() {
    this.aliases = new Map([[Token, new Set(['Punctuator', 'Identifier'])]]);
  }

  // @Token
  *Punctuator({ value }) {
    yield i`eat(${value})`;
  }

  // @Token
  *Identifier() {
    yield i`eat(/\w+/)`;
  }
}
