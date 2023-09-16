import { i } from '@bablr/helpers/shorthand';

export default class RegexTokenGrammar {
  // @Token
  *Punctuator({ value }) {
    yield i`eat(${value})`;
  }

  // @Token
  *Identifier() {
    yield i`eat(/\w+/)`;
  }
}
