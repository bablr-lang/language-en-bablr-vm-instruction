import { i } from '@bablr/boot/shorthand.macro';
import * as CSTML from '@bablr/language-en-cstml';
import * as Instruction from './grammar.js';

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-cstml-instruction';

export const dependencies = { ...Instruction.dependencies, CSTML };

export const grammar = class BABLRVMSpamexInstructionGrammar extends Instruction.grammar {
  *Expression() {
    if (yield i`eatMatch(<CSTML:Tag />)`) {
      // done
    } else {
      yield* super.Expression();
    }
  }
};
