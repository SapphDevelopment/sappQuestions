import {
  Language,
  getRandomQuestion,
  fetchCategories,
  fetchQuestions,
} from "./index.js";

async function main() {
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
}

main();
