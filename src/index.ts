import axios from "axios";

export enum Categories {
  coding = "coding",
  halloween = "halloween",
  christmas = "christmas",
  science = "science",
  history = "history",
  sports = "sports",
  music = "music",
  technology = "technology",
}

export enum Language {
  "ar-EG" = "ar-EG",
  id = "id",
  da = "da",
  de = "de",
  "en-GB" = "en-GB",
  "en-US" = "en-US",
  "es-ES" = "es-ES",
  fr = "fr",
  hr = "hr",
  it = "it",
  lt = "lt",
  hu = "hu",
  nl = "nl",
  no = "no",
  pl = "pl",
  "pt-BR" = "pt-BR",
  ro = "ro",
  fi = "fi",
  "sv-SE" = "sv-SE",
  vi = "vi",
  tr = "tr",
  cs = "cs",
  el = "el",
  bg = "bg",
  ru = "ru",
  uk = "uk",
  hi = "hi",
  th = "th",
  "zh-CN" = "zh-CN",
  ja = "ja",
  "zh-TW" = "zh-TW",
  ko = "ko",
}

interface Question {
  question: string;
  category: Categories;
}

const baseUrl: string =
  "https://raw.githubusercontent.com/SapphDevelopment/questions/main";

export async function fetchCategories(): Promise<string[]> {
  return Object.values(Categories);
}

export async function fetchQuestions(language: Language = Language["en-US"]): Promise<Question[]> {
  const url: string = `${baseUrl}/${language}/questions.ts`;

  const response = await axios.get(url);

  const regex = /const questions: Question\[\] = (\[[\s\S]*?\]);/;
  const match = RegExp(regex).exec(response.data);

  if (!match || !match[1]) {
    throw new Error("Failed to parse questions file");
  }

  const questions = eval(match[1]) as Question[];
  return questions;
}

export async function getRandomQuestion(
  category?: string,
  language: Language = Language["en-US"]
): Promise<Question> {
  const questions = await fetchQuestions(language);
  let filteredQuestions: Question[] = questions;
  if (category) {
    const categories = await fetchCategories();
    const lowercaseCategory = category.toLowerCase();
    if (!categories.map((c) => c.toLowerCase()).includes(lowercaseCategory)) {
      throw new Error(`Invalid category: ${category}`);
    }
    filteredQuestions = questions.filter(
      (question) => question.category.toLowerCase() === lowercaseCategory
    );
  }
  if (filteredQuestions.length === 0) {
    return {
      question: `No questions found for the specified category: ${category}`,
      category: category as Categories,
    };
  }

  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
}
