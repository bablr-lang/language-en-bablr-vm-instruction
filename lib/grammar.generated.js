import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import * as _t from "@bablr/boot-helpers/types";
var _dec, _dec2, _dec3, _initProto;
import { InjectFrom } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/boot-helpers/productions';
import * as Spamex from '@bablr/language-spamex';
export const name = 'Instruction';
export const dependencies = {
  Spamex
};
const Node = Symbol.for('@bablr/node');
export const grammar = (_dec = InjectFrom(productions), _dec2 = InjectFrom(productions), _dec3 = InjectFrom(productions), class BABLRVMInstructionGrammar {
  static {
    [_initProto] = _applyDecs(this, [[_dec, 2, "List"], [_dec2, 2, "All"], [_dec3, 2, "Optional"]], []).e;
  }
  constructor() {
    _initProto(this);
    this.aliases = new Map([[Node, new Set(['Call'])]]);
  }
  List() {}
  All() {}
  Optional() {}

  // @Node
  *Call() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`callee`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`(`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`balanced`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`)`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.trivia` `, _t.ref`argument`, _t.trivia` `, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`List`], {}),
        props: _t.node("ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{`], {}),
          values: [_t.node("Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
            value: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`<|`], {}),
              type: _t.node("Identifier", [_t.str`All`], {}),
              props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Punctuator", [_t.str`{[`], {}),
                values: [_t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                }), _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                }), _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                })],
                close: _t.node("Punctuator", [_t.str`]}`], {})
              }),
              close: _t.node("Punctuator", [_t.str`|>`], {})
            })
          }), _t.node("Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
            value: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`<|`], {}),
              type: _t.node("Identifier", [_t.str`All`], {}),
              props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Punctuator", [_t.str`{[`], {}),
                values: [_t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                }), _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                }), _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Identifier", [_t.str`Optional`], {}),
                  props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Keyword", [_t.str` `], {}),
                      close: _t.node("Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Punctuator", [_t.str`|>`], {})
                })],
                close: _t.node("Punctuator", [_t.str`]}`], {})
              }),
              close: _t.node("Punctuator", [_t.str`|>`], {})
            })
          })],
          separators: [_t.node("Punctuator", [_t.str`,`], {})],
          close: _t.node("Punctuator", [_t.str`}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`)`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("BooleanAttribute", [_t.ref`key`], {
          key: _t.node("Literal", [_t.str`balancer`], {})
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
});
