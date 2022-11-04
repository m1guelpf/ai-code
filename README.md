![banner](https://user-images.githubusercontent.com/23558090/199871945-c142a172-fe8a-4a87-baf8-50b8a25e99db.jpg)


# Automagically-generated functions for any occasion

This package uses [OpenAI's Codex](https://openai.com/blog/openai-codex/) to generate and run Javascript code from a function name and argument types. 

> **Warning** plz don't use in prod lmeow

## Installation

You can install `ai-code` by running `npm install ai-code` on your terminal.

You'll also need to set the `OPENAI_API_KEY` environment variable to an [OpenAI API key](https://beta.openai.com/) with access to the [Codex private beta](http://beta.openai.com/codex-waitlist) (API calls will fail otherwise).

## Usage

Import the package and call any function, passing any number of arguments. The package will call Codex's API to try to figure out what you're trying to do, generate the code for it, and run it.

```js
import AI from 'ai-code'

await AI.randomNumberBetween(1, 10) // 4
await AI.slugify('My Article') // my-article
await AI.hasProfanityRegex('f*ck this lol') // false
await AI.shortenETHAddress(ethAddress) // 0xE340...b39D
await AI.extractHashtags('this is #really cool! #ai #code') // ['#really', '#ai', '#code']
await AI.getProgrammerJoke() // Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25
```

## License

This project is open-sourced under the MIT license. See [the License file](LICENSE) for more information.
