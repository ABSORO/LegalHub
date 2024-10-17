document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('q');  // 'q' is the search parameter for the search term

  if (searchQuery) {
    const regex = new RegExp(searchQuery, 'gi');  // Regular expression to match the search term, case-insensitive
    document.body.innerHTML = document.body.innerHTML.replace(regex, function(matched) {
      return `<span style="background-color: yellow;">${matched}</span>`;
    });

    const firstMatch = document.querySelector('span[style*="background-color: yellow;"]');
    if (firstMatch) {
      firstMatch.scrollIntoView();  // Scroll to the first match
    }
  }
});
