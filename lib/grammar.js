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
    yield i`eat(<Identifier .callee>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '(' .open balanced=')' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<List> {
                  separator: (<Any> [
                    (<All> [
                      (eatMatch <| |>)
                      <| Punctuator ',' .[separators] |>
                      (eatMatch <| |>)
                    ])
                    <| |>
                  ])
                  matchable: <Spamex:Expression .[arguments]>
                })`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ')' .close balancer |>)`;
  }

  *Separator() {
    const sp = yield i`eatMatch(<| |>)`;
    const cm = yield i`eatMatch(<All> [
      <| Punctuator ',' .[separators] |>
      (eatMatch <| |>)
    ])`;
    if (!sp && !cm) yield i`fail()`;
  }
};
