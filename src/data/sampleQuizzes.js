const sampleQuizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "Programming",
    questions: [
      {
        question: "Which keyword declares a block scoped variable?",
        options: ["var", "let", "function", "static"],
        answer: "let",
      },
      {
        question: "Which company created JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Oracle"],
        answer: "Netscape",
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "<!--", "**"],
        answer: "//",
      },
    ],
  },

  {
    id: 2,
    title: "World Geography",
    category: "General Knowledge",
    questions: [
      {
        question: "Capital of Japan?",
        options: ["Tokyo", "Delhi", "Paris", "Beijing"],
        answer: "Tokyo",
      },
      {
        question: "Largest continent?",
        options: ["Africa", "Europe", "Asia", "Australia"],
        answer: "Asia",
      },
    ],
  },
];

export default sampleQuizzes;