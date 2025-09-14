
export const SEARCH_FIELDS = [
  "All Fields",
  "Title",
  "Abstract",
  "Author",
  "MeSH Terms",
  "Journal",
];

export const PUBLICATION_TYPES = [
  "Journal Article",
  "Review",
  "Meta-Analysis",
  "Systematic Review",
  "Case Reports",
  "Clinical Trial",
];

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';

export const ADVANCED_API_BASE = BACKEND_URL;
export const CHATBOT_API_BASE = BACKEND_URL;
export const GROQ_API_BASE = BACKEND_URL; // unified server
