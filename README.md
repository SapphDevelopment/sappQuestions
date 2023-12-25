# sappQuestions

<p align="left"><a href="https://nodei.co/npm/sappquestions"><img src="https://nodei.co/npm/sappquestions.png?mini=true"></a></p>
<p align="left"><a href="https://ko-fi.com/J3J1FVEH0"><img src="https://ko-fi.com/img/githubbutton_sm.svg"></a></p>

<div align="left">
    <a href="https://discord.gg/75QR5duadJ"> <img src="https://img.shields.io/discord/1129153558898540684?color=5865F2&logo=discord&logoColor=white" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquestions"> <img src="https://img.shields.io/npm/v/sappquestions.svg?maxAge=3600" alt="npm version"/> </a>
    <a href="https://www.npmjs.com/package/sappquestions"> <img src="https://img.shields.io/npm/dt/sappquestions.svg?maxAge=3600" alt="npm downloads"/> </a>
</div>

sappQuestions is a very lightweight npm package that provides a collection of questions with various categories. It allows you to retrieve random questions or questions from specific categories. All questions were manually curated, ensuring no duplicates, no API reliance, and no downtime.

## Installation

You can install sappQuestions using npm:

```shh
npm install sappquestions@latest
```

## Usage

Here's an example how to use sappQuestions:

```typescript
/* JavaScript */ const { Language, getRandomQuestion, fetchCategories, fetchQuestions } = require("sappquestions")
/* TypeScrippt */ import { Language, getRandomQuestion, fetchCategories, fetchQuestions } from "sappquestions"

// Fetch and display a random quote
await getRandomQuestion().then((question) => {
    console.log(`"${question.question}" - ${question.category}`);
  });

// Fetch and display a random quote from a specific category
const category = "coding";
await getRandomQuestion(category).then((question) => {
  console.log(`"${question.question}" - ${question.category}`);
});

// Fetch and display available categories
await fetchCategories().then((categories) => {
  console.log("Available categories:", categories);
});

// Fetch and display available quotes
await fetchQuestions(Language["en-US"]).then((quotes) => {
  console.log("Available quotes:", quotes);
});
```

## API

The sappQuestions package provides the following functions:

### `getRandomQuestion(category?: string, language: Language)`

Retrieve a random question from a specific category.

- `category?`: The category from which to retrieve the question.
- `language`: The language from which to retrieve the question.

### `fetchCategories`

Retrieve all available quotes.

### `fetchQuestions(Language)`

Retrieve all available questions.

- `language`: The language from which to retrieve the question.

### `Languages`

All available languages

- Arabic, Egypt (العربية، مصر)
- Bulgarian (български)
- ChineseCN (简体中文)
- ChineseTW (繁體中文)
- Croatian (Hrvatski)
- Czech (čeština)
- Danish (Dansk)
- Dutch (Nederlands)
- English (United Kingdom)
- English (United States)
- Finnish (Suomi)
- French (Français)
- German (Deutsch)
- Greek (Ελληνικά)
- Hindi (हिन्दी)
- Hungarian (Magyar)
- Indonesian (Bahasa Indonesia)
- Italian (Italiano)
- Japanese (日本語)
- Korean (한국어)
- Lithuanian (Lietuvių)
- Norwegian (Norsk)
- Polish (Polski)
- PortugueseBR (Português)
- Romanian (Română)
- Russian (Русский)
- SpanishES (Español)
- Swedish (Svenska)
- Thai (ไทย)
- Turkish (Türkçe)
- Ukrainian (Українська)
- Vietnamese (Tiếng Việt)

## License

[License](https://raw.githubusercontent.com/SapphDevelopment/.github/main/profile/LICENSE)
