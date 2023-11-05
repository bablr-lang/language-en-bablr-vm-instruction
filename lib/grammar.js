import { i } from '@bablr/boot/shorthand.macro';
import { InjectFrom, Cover, CoveredBy } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/helpers/productions';
import * as Spamex from '@bablr/language-spamex';

export const name = 'Instruction';

export const dependencies = { Spamex };

const Node = Symbol.for('@bablr/node');

export const grammar = class BABLRVMInstructionGrammar {
  @InjectFrom(productions)
  List() {}

  @InjectFrom(productions)
  All() {}

  @InjectFrom(productions)
  Optional() {}

  @Node
  *Call() {
    yield i`eat(<Identifier .callee>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<Tuple .arguments>)`;
  }

  @Cover
  Expression() {}

  *Separator() {
    const sp = yield i`eatMatch(<| |>)`;
    const cm = yield i`eatMatch(<All> [
      <| Punctuator ',' .[separators] |>
      (eatMatch <| |>)
    ])`;
    if (!sp && !cm) yield i`fail()`;
  }

  @CoveredBy('Expression')
  @Node
  *Array() {
    yield i`eat(<| Punctuator '[' .open balanced=']' |>)`;
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
                      matchable: <Expression .[elements]>
                    })`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ']' .close balancer |>)`;
  }

  @CoveredBy('Expression')
  @Node
  *Object() {
    yield i`eat(<| Punctuator '{' .open balanced='}' |>)`;
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
                  matchable: <Property .[properties]>
                })`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '}' .close balancer |>)`;
  }

  @Node
  *Property() {
    yield i`eat(<Identifier .key>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ':' .mapOperator |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<Expression .value>)`;
  }

  @CoveredBy('Expression')
  @Node
  *Tuple() {
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
                  matchable: <Expression .[values]>
                })`;

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ')' .close balancer |>)`;
  }

  @CoveredBy('Expression')
  @Node
  *Boolean() {
    yield i`eat(/true|false/)`;
  }
};
