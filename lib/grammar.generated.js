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
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`[arguments]`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      arguments: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`callee`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      })],
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`[arguments]`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      arguments: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`(`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`balanced`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`)`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      })],
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.trivia` `, _t.ref`[arguments]`, _t.trivia` `, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      arguments: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`List`], {}),
        props: _t.node("Spamex", "ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{`], {}),
          values: [_t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
              type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
              props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
                values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Spamex", "Identifier", [_t.str`Optional`], {}),
                  props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
                  value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
                    value: _t.node("Spamex", "Literal", [_t.str`,`], {}),
                    close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
                  }),
                  attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
                    key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
                    mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
                    value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
                      value: _t.node("Spamex", "Literal", [_t.str`[separators]`], {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
                    })
                  })],
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  type: _t.node("Spamex", "Identifier", [_t.str`Optional`], {}),
                  props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
                    values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                      value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                    })],
                    close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
                  }),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                })],
                close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
              }),
              close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
            })
          }), _t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`matchable`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
              type: _t.node("Spamex", "GlobalIdentifier", [_t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`], {
                language: _t.node("Spamex", "Identifier", [_t.str`Spamex`], {}),
                namespaceOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
                type: _t.node("Spamex", "Identifier", [_t.str`Expression`], {})
              }),
              attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
                key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
                mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
                value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
                  value: _t.node("Spamex", "Literal", [_t.str`[arguments]`], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
                })
              })],
              close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
            })
          })],
          separators: [_t.node("Spamex", "Punctuator", [_t.str`,`], {})],
          close: _t.node("Spamex", "Punctuator", [_t.str`}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      })],
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`[arguments]`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      arguments: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`)`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
          key: _t.node("Spamex", "Literal", [_t.str`balancer`], {})
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      })],
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
});
