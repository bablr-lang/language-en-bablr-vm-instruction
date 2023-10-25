import { i } from '@bablr/boot/shorthand.macro';
import { InjectFrom } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/boot-helpers/productions';
import * as Spamex from '@bablr/language-spamex';

export const name = 'Instruction';

export const dependencies = { Spamex };

const Node = Symbol.for('@bablr/node');

export const grammar = class BABLRVMInstructionGrammar {
  constructor() {
    this.aliases = new Map([[Node, new Set(['Call'])]]);
  }

  @InjectFrom(productions)
  List() {}

  @InjectFrom(productions)
  All() {}

  @InjectFrom(productions)
  Optional() {}

  // @Node
  *Call() {
    yield i`eat(<Identifier path='callee'>)`;
    yield i`eat(<| Punctuator '(' path='open' balanced=')' |>)`;
    yield i`eat(
              <List {
                separator: <All {[
                  <| Optional {[ <| |> ]} |>
                  <| Punctuator ',' path='[separators]' |>
                  <| Optional {[ <| |> ]} |>
                ]}>,
                matchable: <Spamex:Expression path='[arguments]'>
              }>
            )`;
    yield i`eat(<| Punctuator ')' path='close' balancer |>)`;
  }
};
