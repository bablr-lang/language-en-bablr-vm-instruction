import { i } from '@bablr/boot/shorthand.macro';
import * as Spamex from '@bablr/language-spamex';
import * as Instruction from './grammar.js';

export const canonicalURL = 'https://bablr.org/languages/core/bablr-vm-spamex-instruction';

export const dependencies = { ...Instruction.dependencies, Spamex };

export const grammar = class BABLRVMSpamexInstructionGrammar extends Instruction.grammar {
  *Expression() {
    if (yield i`eatMatch(<Spamex:Matcher /[<'"/]/>)`) {
      // done
    } else {
      yield* super.Expression();
    }
  }
};
