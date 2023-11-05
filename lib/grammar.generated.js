import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/boot-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/boot-helpers/template";
import * as _t from "@bablr/boot-helpers/types";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _initProto;
import { InjectFrom, Cover, CoveredBy } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/helpers/productions';
import * as Spamex from '@bablr/language-spamex';
export const name = 'Instruction';
export const dependencies = {
  Spamex
};
const Node = Symbol.for('@bablr/node');
export const grammar = (_dec = InjectFrom(productions), _dec2 = InjectFrom(productions), _dec3 = InjectFrom(productions), _dec4 = CoveredBy('Expression'), _dec5 = CoveredBy('Expression'), _dec6 = CoveredBy('Expression'), _dec7 = CoveredBy('Expression'), class BABLRVMInstructionGrammar {
  static {
    [_initProto] = _applyDecs(this, [[_dec, 2, "List"], [_dec2, 2, "All"], [_dec3, 2, "Optional"], [Node, 2, "Call"], [Cover, 2, "Expression"], [[_dec4, Node], 2, "Array"], [[_dec5, Node], 2, "Object"], [Node, 2, "Property"], [[_dec6, Node], 2, "Tuple"], [[_dec7, Node], 2, "Boolean"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  List() {}
  All() {}
  Optional() {}
  *Call() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Identifier`], {}, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`callee`], {}, {})
          }, {
            isArray: false
          }),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Tuple`], {}, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`arguments`], {}, {})
          }, {
            isArray: false
          }),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  Expression() {}
  *Separator() {
    const sp = yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    const cm = yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`All`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
          elements: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
            type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
              open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
              fragments: [_t.node("String", "Fragment", [_t.lit`,`], {}, {})],
              close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
            }, {}),
            path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
              accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
              openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
              value: _t.node("Spamex", "Identifier", [_t.lit`separators`], {}, {}),
              closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
            }, {
              isArray: true
            }),
            close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
          }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
            open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
            values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
              value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
              close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
            }, {})],
            close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
          }, {})],
          close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    if (!sp && !cm) yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`fail`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  *Array() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`[`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`open`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balanced`], {}, {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.lit`=`], {}, {}),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
              open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
              fragments: [_t.node("String", "Fragment", [_t.lit`]`], {}, {})],
              close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`List`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {}), _t.node("Instruction", "Object", [_t.ref`open`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Instruction", "Punctuator", [_t.lit`{`], {}, {}),
          properties: [_t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`separator`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
              open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
              values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                type: _t.node("Spamex", "Identifier", [_t.lit`Any`], {}, {}),
                close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
              }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                  open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                  values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                    type: _t.node("Spamex", "Identifier", [_t.lit`All`], {}, {}),
                    close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
                  }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                    elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {}), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                      type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
                      value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
                        open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
                        fragments: [_t.node("String", "Fragment", [_t.lit`,`], {}, {})],
                        close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
                      }, {}),
                      path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                        accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                        openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                        value: _t.node("Spamex", "Identifier", [_t.lit`separators`], {}, {}),
                        closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
                      }, {
                        isArray: true
                      }),
                      close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                    }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {})],
                    close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
                  }, {})],
                  close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                }, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                  value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                  close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                }, {})],
                close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
              }, {})],
              close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
            }, {})
          }, {}), _t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`matchable`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
              type: _t.node("Spamex", "Identifier", [_t.lit`Expression`], {}, {}),
              path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                value: _t.node("Spamex", "Identifier", [_t.lit`elements`], {}, {}),
                closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
              }, {
                isArray: true
              }),
              close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Instruction", "Punctuator", [_t.lit`}`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`]`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`close`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balancer`], {}, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  *Object() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`{`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`open`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balanced`], {}, {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.lit`=`], {}, {}),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
              open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
              fragments: [_t.node("String", "Fragment", [_t.lit`}`], {}, {})],
              close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`List`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {}), _t.node("Instruction", "Object", [_t.ref`open`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Instruction", "Punctuator", [_t.lit`{`], {}, {}),
          properties: [_t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`separator`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
              open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
              values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                type: _t.node("Spamex", "Identifier", [_t.lit`Any`], {}, {}),
                close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
              }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                  open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                  values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                    type: _t.node("Spamex", "Identifier", [_t.lit`All`], {}, {}),
                    close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
                  }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                    elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {}), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                      type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
                      value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
                        open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
                        fragments: [_t.node("String", "Fragment", [_t.lit`,`], {}, {})],
                        close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
                      }, {}),
                      path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                        accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                        openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                        value: _t.node("Spamex", "Identifier", [_t.lit`separators`], {}, {}),
                        closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
                      }, {
                        isArray: true
                      }),
                      close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                    }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {})],
                    close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
                  }, {})],
                  close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                }, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                  value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                  close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                }, {})],
                close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
              }, {})],
              close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
            }, {})
          }, {}), _t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`matchable`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
              type: _t.node("Spamex", "Identifier", [_t.lit`Property`], {}, {}),
              path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                value: _t.node("Spamex", "Identifier", [_t.lit`properties`], {}, {}),
                closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
              }, {
                isArray: true
              }),
              close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Instruction", "Punctuator", [_t.lit`}`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`}`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`close`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balancer`], {}, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  *Property() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Identifier`], {}, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`key`], {}, {})
          }, {
            isArray: false
          }),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`:`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`mapOperator`], {}, {})
          }, {
            isArray: false
          }),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Expression`], {}, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`value`], {}, {})
          }, {
            isArray: false
          }),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  *Tuple() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`(`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`open`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balanced`], {}, {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.lit`=`], {}, {}),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
              open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
              fragments: [_t.node("String", "Fragment", [_t.lit`)`], {}, {})],
              close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`List`], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
        }, {}), _t.node("Instruction", "Object", [_t.ref`open`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`[properties]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Instruction", "Punctuator", [_t.lit`{`], {}, {}),
          properties: [_t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`separator`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
              open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
              values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                type: _t.node("Spamex", "Identifier", [_t.lit`Any`], {}, {}),
                close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
              }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                  open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                  values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
                    open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
                    type: _t.node("Spamex", "Identifier", [_t.lit`All`], {}, {}),
                    close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
                  }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`[elements]`, _t.trivia` `, _t.ref`close`], {
                    open: _t.node("Instruction", "Punctuator", [_t.lit`[`], {}, {}),
                    elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {}), _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`close`], {
                      open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                      type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
                      value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
                        open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
                        fragments: [_t.node("String", "Fragment", [_t.lit`,`], {}, {})],
                        close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
                      }, {}),
                      path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                        accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                        openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                        value: _t.node("Spamex", "Identifier", [_t.lit`separators`], {}, {}),
                        closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
                      }, {
                        isArray: true
                      }),
                      close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                    }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.ref`close`], {
                      open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
                      values: [_t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                        open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                        value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                        close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                      }, {})],
                      close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                    }, {})],
                    close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
                  }, {})],
                  close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
                }, {}), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
                  value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
                  close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
                }, {})],
                close: _t.node("Instruction", "Punctuator", [_t.lit`]`], {}, {})
              }, {})],
              close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
            }, {})
          }, {}), _t.node("Instruction", "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Instruction", "Literal", [_t.lit`matchable`], {}, {}),
            mapOperator: _t.node("Instruction", "Punctuator", [_t.lit`:`], {}, {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`path`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.lit`<`], {}, {}),
              type: _t.node("Spamex", "Identifier", [_t.lit`Expression`], {}, {}),
              path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`openArrayBracket`, _t.ref`value`, _t.ref`closeArrayBracket`], {
                accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
                openArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`[`], {}, {}),
                value: _t.node("Spamex", "Identifier", [_t.lit`values`], {}, {}),
                closeArrayBracket: _t.node("Spamex", "Punctuator", [_t.lit`]`], {}, {})
              }, {
                isArray: true
              }),
              close: _t.node("Spamex", "Punctuator", [_t.lit`>`], {}, {})
            }, {})
          }, {})],
          close: _t.node("Instruction", "Punctuator", [_t.lit`}`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eatMatch`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          value: _t.node("Spamex", "Keyword", [_t.lit` `], {}, {}),
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`path`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.lit`<|`], {}, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit`Punctuator`], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`[fragments]`, _t.ref`close`], {
            open: _t.node("String", "Punctuator", [_t.lit`'`], {}, {}),
            fragments: [_t.node("String", "Fragment", [_t.lit`)`], {}, {})],
            close: _t.node("String", "Punctuator", [_t.lit`'`], {}, {})
          }, {}),
          path: _t.node("Spamex", "Path", [_t.ref`accessOperator`, _t.ref`value`], {
            accessOperator: _t.node("Spamex", "Punctuator", [_t.lit`.`], {}, {}),
            value: _t.node("Spamex", "Identifier", [_t.lit`close`], {}, {})
          }, {
            isArray: false
          }),
          attributes: [_t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
            key: _t.node("Spamex", "Literal", [_t.lit`balancer`], {}, {})
          }, {})],
          close: _t.node("Spamex", "Punctuator", [_t.lit`|>`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
  *Boolean() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit`eat`], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`[values]`, _t.ref`close`], {
        open: _t.node("Instruction", "Punctuator", [_t.lit`(`], {}, {}),
        values: [_t.node("Regex", "Pattern", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`[separators]`, _t.ref`[alternatives]`, _t.ref`close`], {
          open: _t.node("Regex", "Punctuator", [_t.lit`/`], {}, {}),
          alternatives: [_t.node("Regex", "Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Regex", "Character", [_t.lit`t`], {}, {}), _t.node("Regex", "Character", [_t.lit`r`], {}, {}), _t.node("Regex", "Character", [_t.lit`u`], {}, {}), _t.node("Regex", "Character", [_t.lit`e`], {}, {})]
          }, {}), _t.node("Regex", "Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Regex", "Character", [_t.lit`f`], {}, {}), _t.node("Regex", "Character", [_t.lit`a`], {}, {}), _t.node("Regex", "Character", [_t.lit`l`], {}, {}), _t.node("Regex", "Character", [_t.lit`s`], {}, {}), _t.node("Regex", "Character", [_t.lit`e`], {}, {})]
          }, {})],
          separators: [_t.node("Regex", "Punctuator", [_t.lit`|`], {}, {})],
          close: _t.node("Regex", "Punctuator", [_t.lit`/`], {}, {})
        }, {})],
        close: _t.node("Instruction", "Punctuator", [_t.lit`)`], {}, {})
      }, {})
    }, {});
  }
});
