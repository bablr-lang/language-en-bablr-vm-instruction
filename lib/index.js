import * as sym from '@bablr/helpers/symbols';
import spamex from '@bablr/language-spamex';
import NodeGrammar from './node.grammar.js';
import TokenGrammar from './token.grammar.js';

export const grammars = {
  [sym.node]: NodeGrammar,
  [sym.token]: TokenGrammar,
};

export const dependencies = new Map([['Spamex', spamex]]);
