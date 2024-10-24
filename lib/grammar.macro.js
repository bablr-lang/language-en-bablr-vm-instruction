import { i } from '@bablr/boot/shorthand.macro';
import { Node } from '@bablr/helpers/decorators';
import * as Space from '@bablr/language-en-blank-space';

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
    yield i`eat(<*CSTML:Identifier /> 'callee$')`;
    yield* eatMatchTrivia();
    yield i`eat(<CSTML:Tuple /> 'arguments$')`;
  }
};
