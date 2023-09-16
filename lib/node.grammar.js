import * as productions from '@bablr/helpers/productions';
import { i } from '@bablr/helpers/shorthand';

const Node = Symbol.for('@bablr/node');

export default class BABLRVMInstructionNodeGrammar {
  constructor() {
    this.aliases = new Map([[Node, new Set(['Call'])]]);
  }

  List(...args) {
    return productions.List(...args);
  }

  All(...args) {
    return productions.All(...args);
  }

  Optional(...args) {
    return productions.Optional(...args);
  }

  // @Node
  *Call() {
    yield i`eat(<| Identifier path='callee' |>)`;
    yield i`eat(<| Punctuator '(' balanced=')' |>)`;
    yield i`eat(
              <List {
                separator: <| All {|
                    <| Optional { <| |> } |>
                    <| Punctuator ',' |>
                    <| Optional { <| |> } |>
                  |} |>,
                matchable: <Spamex:Matchable path='arguments'>
              }>
            )`;
    yield i`eat(<| Punctuator ')' balanced |>)`;
  }
}
