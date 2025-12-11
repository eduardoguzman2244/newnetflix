// TMDb API configuration (v3 key version)
// Keep this file private — do not upload to GitHub.

const TMDB_API_KEY = "999a204e67855911f5fe6b41d925639d";

// Optional helper to build full URLs easily:
function tmdbUrl(endpoint, query = "") {
  return `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
}
