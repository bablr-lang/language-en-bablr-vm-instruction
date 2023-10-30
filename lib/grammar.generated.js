import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateArray as _interpolateArray } from "@bablr/boot-helpers/template";
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
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}, {}),
        path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
          accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
          value: _t.node("Spamex", "Identifier", [_t.str`callee`], {}, {})
        }, {
          isArray: null
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}, {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {}),
          value: _t.node("Spamex", "Literal", [_t.str`(`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {})
        }, {}),
        path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
          accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
          value: _t.node("Spamex", "Identifier", [_t.str`open`], {}, {})
        }, {
          isArray: null
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`balanced`], {}, {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}, {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {}),
            value: _t.node("Spamex", "Literal", [_t.str`)`], {}, {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {})
          }, {})
        }, {})],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
      0: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
        type: _t.node("Spamex", "Identifier", [_t.str`List`], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
      }, {}),
      1: _t.node("Instruction", "Object", [_t.ref`open`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.str`{`], {}, {}),
        properties: [_t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
          key: _t.node("Instruction", "Literal", [_t.str`separator`], {}, {}),
          mapOperator: _t.node("Instruction", "Punctuator", [_t.str`:`], {}, {}),
          value: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
            0: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
              type: _t.node("Spamex", "Identifier", [_t.str`Any`], {}, {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
            }, {}),
            1: _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
              open: _t.node("Instruction", "Punctuator", [_t.str`[`], {}, {}),
              elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
                0: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
                  type: _t.node("Spamex", "Identifier", [_t.str`All`], {}, {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
                }, {}),
                1: _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                  open: _t.node("Instruction", "Punctuator", [_t.str`[`], {}, {}),
                  elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
                    0: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
                    1: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
                      value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
                    }, {}),
                    open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
                    close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
                  }, {
                    length: 2
                  }), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
                    type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}, {}),
                    value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {}),
                      value: _t.node("Spamex", "Literal", [_t.str`,`], {}, {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {})
                    }, {}),
                    path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                      accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
                      openArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`[`], {}, {}),
                      value: _t.node("Spamex", "Identifier", [_t.str`separators`], {}, {}),
                      closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`]`], {}, {})
                    }, {
                      isArray: "["
                    }),
                    close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
                  }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
                    0: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
                    1: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
                      value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
                      close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
                    }, {}),
                    open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
                    close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
                  }, {
                    length: 2
                  })],
                  close: _t.node("Instruction", "Punctuator", [_t.str`]`], {}, {})
                }, {}),
                open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
                close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
              }, {
                length: 2
              }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
                value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
                close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
              }, {})],
              close: _t.node("Instruction", "Punctuator", [_t.str`]`], {}, {})
            }, {}),
            open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
            close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
          }, {
            length: 2
          })
        }, {}), _t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
          key: _t.node("Instruction", "Literal", [_t.str`matchable`], {}, {}),
          mapOperator: _t.node("Instruction", "Punctuator", [_t.str`:`], {}, {}),
          value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
            type: _t.node("Spamex", "GlobalIdentifier", [_t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`], {
              language: _t.node("Spamex", "Identifier", [_t.str`Spamex`], {}, {}),
              namespaceOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}, {}),
              type: _t.node("Spamex", "Identifier", [_t.str`Expression`], {}, {})
            }, {}),
            path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
              accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
              openArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`[`], {}, {}),
              value: _t.node("Spamex", "Identifier", [_t.str`arguments`], {}, {}),
              closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`]`], {}, {})
            }, {
              isArray: "["
            }),
            close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
          }, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.str`}`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 2
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}, {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {}),
          value: _t.node("Spamex", "Literal", [_t.str`)`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {})
        }, {}),
        path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
          accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
          value: _t.node("Spamex", "Identifier", [_t.str`close`], {}, {})
        }, {
          isArray: null
        }),
        attributes: [_t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
          key: _t.node("Spamex", "Literal", [_t.str`balancer`], {}, {})
        }, {})],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
  }
  *Separator() {
    const sp = yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.ref`close`], {
      0: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
    const cm = yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
      0: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}, {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}, {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {}, {})
      }, {}),
      1: _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.str`[`], {}, {}),
        elements: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}, {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {}),
            value: _t.node("Spamex", "Literal", [_t.str`,`], {}, {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.str`.`], {}, {}),
            openArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`[`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.str`separators`], {}, {}),
            closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.str`]`], {}, {})
          }, {
            isArray: "["
          }),
          close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
        }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`0`, _t.trivia` `, _t.ref`1`, _t.ref`close`], {
          0: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
          1: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}, {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}, {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {}, {})
          }, {}),
          open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
          close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
        }, {
          length: 2
        })],
        close: _t.node("Instruction", "Punctuator", [_t.str`]`], {}, {})
      }, {}),
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 2
    });
    if (!sp && !cm) yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`fail`], {}, {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}, {}),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {}, {})
    }, {
      length: 1
    });
  }
});
