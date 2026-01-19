import { re, spam as m } from '@bablr/boot';
import { extendLanguage, eat, match, eatMatch, startSpan, endSpan } from '@bablr/helpers/grammar';
import Space from '@bablr/language-en-blank-space';
import CSTML from '@bablr/language-en-cstml';
import Spamex from '@bablr/language-en-spamex';
import Regex from '@bablr/language-en-regex-vm-pattern';
import JSON from '@bablr/language-en-cstml-json';
import { buildString } from '@bablr/helpers/builders';
import { printSource } from '@bablr/agast-helpers/tree';

export const canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';

export const defaultMatcher = m`<Call />`;

export function* eatMatchTrivia() {
  let trivia = null;
  while (yield match(re`/[ \t\n]/`)) {
    trivia = yield eat(m`#: :Space: <_Blank />`);
  }
  return trivia;
}

const IJSON = extendLanguage(JSON, {
  canonicalURL: 'https://bablr.org/languages/core/en/bablr-vm-instruction-json',
  grammar: class IJSON extends JSON.grammar {
    *Expression(props) {
      if (yield match(re`/(?:m|re|t|i)['"\u0060]/`)) {
        yield eat(m`:..: <_Expression />`);
      } else {
        yield* super.Expression(props);
      }
    }
  },
});

export const dependencies = { Space, CSTML, Spamex, Regex, JSON, IJSON };

export const grammar = class BABLRVMInstructionGrammar {
  constructor() {
    this.literals = new Set(['Keyword']);
  }

  *Call() {
    yield eat(m`callee$: <*Identifier />`);
    yield* eatMatchTrivia();

    yield eat(m`openToken*: <* '(' />`);
    yield startSpan('Bare', ')');
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(re`/./s`))) {
      yield eat(m`values[]$: <_Expression />`);
      yield* eatMatchTrivia();
      sp = yield eatMatch(m`#separatorTokens: <* ',' />`);
      yield* eatMatchTrivia();
      first = false;
    }
    yield endSpan();
    yield eat(m`closeToken*: <* ')' />`);
  }

  *Expression() {
    if (yield eatMatch(m`:IJSON: <Array '[' />`)) {
    } else if (yield eatMatch(m`:IJSON: <Object '{' />`)) {
    } else if (yield eatMatch(m`:JSON: <Boolean /true|false/ />`)) {
    } else if (yield eatMatch(m`:JSON: <Null 'null' />`)) {
    } else if (yield eatMatch(m`:JSON: <Undefined 'undefined' />`)) {
    } else if (yield eatMatch(m`:JSON: <Number /[\d]/ />`)) {
    } else if (yield eatMatch(m`:JSON: <Infinity /[+-]?Infinity/ />`)) {
    } else if (yield eatMatch(m`<SpamexString /m["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<TagString /t["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<NodeString /n["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<RegexString /re["'\u0060]/ />`)) {
    } else if (yield eatMatch(m`<InstructionString /i["'\u0060]/ />`)) {
    } else {
      yield eat(m`:JSON: <String /["']/ />`);
    }
  }

  *SpamexString() {
    yield eat(m`sigilToken*: <*Keyword 'm' />`);
    let quot = buildString(printSource(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :Spamex: <_Matcher />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *TagString() {
    yield eat(m`sigilToken*: <*Keyword 't' />`);
    let quot = buildString(printSource(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :CSTML: <_Tag />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *NodeString() {
    yield eat(m`sigilToken*: <*Keyword 'n' />`);
    let quot = buildString(printSource(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :CSTML: <_Node />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *RegexString() {
    yield eat(m`sigilToken*: <*Keyword 're' />`);
    let quot = buildString(printSource(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :Regex: <Pattern />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *InstructionString() {
    yield eat(m`sigilToken*: <*Keyword 'i' />`);
    let quot = buildString(printSource(yield match(re`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: <Call />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *String() {
    yield eat(m`:IJSON: <__String />`);
  }

  *Identifier() {
    yield eat(re`/[a-zA-Z]+/`);
  }
};

export default { canonicalURL, dependencies, grammar, defaultMatcher };
