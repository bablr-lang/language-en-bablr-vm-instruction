import { m, eat, match, eatMatch, startSpan, endSpan } from '@bablr/helpers/grammar';
import Space from '@bablr/language-en-blank-space';
import CSTML from '@bablr/language-en-cstml';
import Spamex from '@bablr/language-en-spamex';
import Regex from '@bablr/language-en-regex-vm-pattern';
import JSON from '@bablr/language-en-cstml-json';
import { buildString } from '@bablr/helpers/builders';
import { printSource } from '@bablr/agast-helpers/tree';
import * as BSet from '@bablr/agast-helpers/b-set';
import { freezeRecord, freeze, freezeClass } from '@bablr/agast-helpers/object';

export function* eatMatchTrivia() {
  let trivia = null;
  while (yield match(m`/[ \t\n]/`)) {
    trivia = yield eat(m`#: :Space: <_Blank />`);
  }
  return trivia;
}

class IJSON extends JSON.grammar {
  static canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction-json';

  *Expression(props) {
    if (yield match(m`/(?:m|re|t|i)['"\u0060]/`)) {
      yield eat(m`:..: <_Expression />`);
    } else {
      yield* super.Expression(props);
    }
  }
}

export default class BABLRVMInstruction {
  static canonicalURL = 'https://bablr.org/languages/core/en/bablr-vm-instruction';
  static dependencies = freeze({ Space, CSTML, Spamex, Regex, JSON, IJSON });
  static defaultMatcher = m`<Call />`;
  static fragmentProduction = null;
  static context = freezeRecord({});

  constructor() {
    this.literals = BSet.from('Keyword');
  }

  *Call() {
    yield eat(m`callee$: <*Identifier />`);
    yield* eatMatchTrivia();

    yield eat(m`openToken*: <* '(' />`);
    yield startSpan('Bare', ')');
    let sp = yield* eatMatchTrivia();
    let first = true;
    while ((first || sp) && (yield match(m`/./s`))) {
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
    let res = yield match(
      m`/[+-]Infinity|[\d[{'"-]|null|undefined|true|false|(?:m|t|n|re|i)\u0060/`,
    );
    // prettier-ignore
    switch (printSource(res)) {
      case '+Infinity':
      case '-Infinity':
      case 'Infinity': return void(yield eat(m`:IJSON: <Infinity />`));
      case '[': return void(yield eat(m`:IJSON: <Array />`));
      case '{': return void(yield eat(m`:IJSON: <Object />`));
      case "'":
      case '"': return void(yield eat(m`:IJSON: <String />`));
      case 'true':
      case 'false': return void(yield eat(m`:IJSON: <Boolean />`));
      case 'null': return void(yield eat(m`:IJSON: <Null />`));
      case 'undefined': return void(yield eat(m`:IJSON: <Undefined />`));
      case 'm`': return void(yield eat(m`<SpamexString  />`));
      case 't`': return void(yield eat(m`<TagString />`));
      case 'n`': return void(yield eat(m`<NodeString />`));
      case 'i`': return void(yield eat(m`<InstructionString />`));
      default: return void(yield eat(m`:IJSON: <Number />`));
    }
  }

  *SpamexString() {
    yield eat(m`sigilToken*: <*Keyword 'm' />`);
    let quot = buildString(printSource(yield match(m`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :Spamex: <_Matcher />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *TagString() {
    yield eat(m`sigilToken*: <*Keyword 't' />`);
    let quot = buildString(printSource(yield match(m`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :CSTML: <_Tag />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *NodeString() {
    yield eat(m`sigilToken*: <*Keyword 'n' />`);
    let quot = buildString(printSource(yield match(m`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: :CSTML: <_Node />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *InstructionString() {
    yield eat(m`sigilToken*: <*Keyword 'i' />`);
    let quot = buildString(printSource(yield match(m`/['"\u0060]/`)));
    yield eat(m`openToken*: <* ${quot} />`);
    yield eat(m`content$: <Call />`);
    yield eat(m`closeToken*: <* ${quot} />`);
  }

  *String() {
    yield eat(m`:IJSON: <__String />`);
  }

  *Identifier() {
    yield eat(m`/[a-zA-Z]+/`);
  }
}

freezeClass(BABLRVMInstruction);
