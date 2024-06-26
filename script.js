document.getElementById('search-input').setAttribute('autocomplete', 'off');

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = this.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            this.value = ''; // Clear the input field
        }
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input');
    const query = input.value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        input.value = ''; // Clear the input field
    }
});
