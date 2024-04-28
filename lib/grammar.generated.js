import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArrayChildren as _interpolateArrayChildren } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _l from "@bablr/agast-vm-helpers/languages";
import * as _t from "@bablr/agast-helpers/shorthand";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _initProto;
import { CoveredBy, Node, InjectFrom } from '@bablr/helpers/decorators';
import * as Spamex from '@bablr/language-spamex';
import * as productions from '@bablr/helpers/productions';
export const canonicalURL = 'https://github.com/bablr-lang/language-bablr-vm-instruction';
export const dependencies = {
  Spamex
};
export const grammar = (_dec = CoveredBy('Expression'), _dec2 = CoveredBy('Expression'), _dec3 = CoveredBy('Expression'), _dec4 = CoveredBy('Expression'), _dec5 = CoveredBy('Expression'), _dec6 = CoveredBy('Expression'), _dec7 = InjectFrom(productions), _dec8 = InjectFrom(productions), class BABLRVMInstructionGrammar {
  static {
    [_initProto] = _applyDecs(this, [[Node, 2, "Call"], [[_dec, Node], 2, "Array"], [[_dec2, Node], 2, "Object"], [Node, 2, "Property"], [[_dec3, Node], 2, "Tuple"], [[_dec4, Node], 2, "Boolean"], [[_dec5, Node], 2, "Null"], [[_dec6, Node], 2, "Identifier"], [[Node, _dec7], 2, "Punctuator"], [_dec8, 2, "Match"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Call() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("callee")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Tuple"),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("arguments")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Expression() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Match"),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.Instruction, "Null", [_t.ref`value`], {
          value: _t.s_node(_l.Instruction, "Keyword", "null")
        }, {}), _t.node(_l.Instruction, "Array", [_t.ref`open`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n      ")], {}, {})), _t.ref`close`], {
          open: _t.s_node(_l.Instruction, "Punctuator", "["),
          elements: [_t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Array"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("[")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Object"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("{")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Tuple"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("(")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Boolean"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`separators[]`, _t.ref`alternatives[]`, _t.ref`close`], {
              open: _t.s_node(_l.Regex, "Punctuator", "/"),
              alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`], {
                elements: [_t.node(_l.Regex, "Character", [_t.lit("t")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("r")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("u")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("e")], {}, {})]
              }, {}), _t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`], {
                elements: [_t.node(_l.Regex, "Character", [_t.lit("f")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("a")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("l")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("s")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("e")], {}, {})]
              }, {})],
              separators: [_t.s_node(_l.Regex, "Punctuator", "|")],
              close: _t.s_node(_l.Regex, "Punctuator", "/")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Null"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("null")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
                token: _t.s_node(_l.CSTML, "Punctuator", "*")
              }, {}),
              type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
              open: _t.s_node(_l.Regex, "Punctuator", "/"),
              alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
                elements: [_t.node(_l.Regex, "WordCharacterSet", [_t.ref`escape`, _t.ref`value`], {
                  escape: _t.s_node(_l.Regex, "Punctuator", "\\"),
                  value: _t.s_node(_l.Regex, "Keyword", "w")
                }, {})]
              }, {})],
              close: _t.s_node(_l.Regex, "Punctuator", "/")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node(_l.Spamex, "Punctuator", "<"),
              language: _t.s_node(_l.Spamex, "Identifier", "Spamex"),
              namespaceOperator: _t.s_node(_l.Spamex, "Punctuator", ":"),
              type: _t.s_node(_l.Spamex, "Identifier", "Matcher"),
              close: _t.s_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
              open: _t.s_node(_l.Regex, "Punctuator", "/"),
              alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
                elements: [_t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`close`], {
                  open: _t.s_node(_l.Regex, "Punctuator", "["),
                  elements: [_t.node(_l.Regex, "Character", [_t.lit("<")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("'")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("\"")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("/")], {}, {})],
                  close: _t.s_node(_l.Regex, "Punctuator", "]")
                }, {})]
              }, {})],
              close: _t.s_node(_l.Regex, "Punctuator", "/")
            }, {})],
            close: _t.s_node(_l.Instruction, "Punctuator", ")")
          }, {})],
          close: _t.s_node(_l.Instruction, "Punctuator", "]")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Array() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("[")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("]")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    while (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`, _t.ref`flags[]`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "AnyCharacterSet", [_t.ref`value`], {
              value: _t.s_node(_l.Regex, "Keyword", ".")
            }, {})]
          }, {})],
          close: _t.s_node(_l.Regex, "Punctuator", "/"),
          flags: [_t.node(_l.Regex, "Flag", [_t.ref`value`], {
            value: _t.s_node(_l.Regex, "Keyword", "y")
          }, {
            kind: "sticky"
          })]
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "Expression"),
            close: _t.s_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("elements[]")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("]")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Object() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("{")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("}")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    while (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`, _t.ref`flags[]`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "AnyCharacterSet", [_t.ref`value`], {
              value: _t.s_node(_l.Regex, "Keyword", ".")
            }, {})]
          }, {})],
          close: _t.s_node(_l.Regex, "Punctuator", "/"),
          flags: [_t.node(_l.Regex, "Flag", [_t.ref`value`], {
            value: _t.s_node(_l.Regex, "Keyword", "y")
          }, {
            kind: "sticky"
          })]
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "Expression"),
            close: _t.s_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("properties[]")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("}")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Property() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("key")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit(":")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("mapOperator")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Expression"),
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("value")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Tuple() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("(")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit(")")], {}, {}),
              close: _t.s_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    while (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`, _t.ref`flags[]`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "AnyCharacterSet", [_t.ref`value`], {
              value: _t.s_node(_l.Regex, "Keyword", ".")
            }, {})]
          }, {})],
          close: _t.s_node(_l.Regex, "Punctuator", "/"),
          flags: [_t.node(_l.Regex, "Flag", [_t.ref`value`], {
            value: _t.s_node(_l.Regex, "Keyword", "y")
          }, {
            kind: "sticky"
          })]
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "Expression"),
            close: _t.s_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("values[]")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node(_l.Spamex, "Punctuator", "<"),
          flags: _t.node(_l.CSTML, "Flags", [_t.ref`token`], {
            token: _t.s_node(_l.CSTML, "Punctuator", "*")
          }, {}),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit(")")], {}, {}),
            close: _t.s_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Boolean() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`separators[]`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Character", [_t.lit("t")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("r")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("u")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("e")], {}, {})]
          }, {}), _t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Character", [_t.lit("f")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("a")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("l")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("s")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("e")], {}, {})]
          }, {})],
          separators: [_t.s_node(_l.Regex, "Punctuator", "|")],
          close: _t.s_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Null() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("null")], {}, {}),
          close: _t.s_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Identifier() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
              element: _t.node(_l.Regex, "WordCharacterSet", [_t.ref`escape`, _t.ref`value`], {
                escape: _t.s_node(_l.Regex, "Punctuator", "\\"),
                value: _t.s_node(_l.Regex, "Keyword", "w")
              }, {}),
              value: _t.s_node(_l.Regex, "Keyword", "+")
            }, {
              min: 1,
              max: Infinity,
              greedy: true
            })]
          }, {})],
          close: _t.s_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Punctuator() {}
  *Match() {}
});
