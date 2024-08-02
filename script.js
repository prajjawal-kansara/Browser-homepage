const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        searchInput.value = '';
    }
};

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') performSearch();
});
searchButton.addEventListener('click', performSearch);

// Bookmarks
const bookmarks = [
    {
        label: "Social",
        bookmarks: [
            { label: "linkedin", url: "https://www.linkedin.com/feed/" },
            { label: "Discord", url: "https://discord.com/channels/@me" },
            { label: "X", url: "https://x.com/home" }
        ]
    },
    {
        label: "Galgotias",
        bookmarks: [
            { label: "GU-icloud", url: "https://gu.icloudems.com/corecampus/index.php" },
            { label: "Galgotias LMS", url: "https://lms.galgotiasuniversity.org/" }
        ]
    },
    {
        label: "Coding",
        bookmarks: [
            { label: "Github", url: "https://github.com/prajjawal-kansara" },
            { label: "HackerRank", url: "https://www.hackerrank.com/dashboard" },
            { label: "CodeChef", url: "https://www.codechef.com/dashboard" },
            { label: "LeetCode", url: "https://leetcode.com/problemset/" }
        ]
    },
    {
        label: "AI",
        bookmarks: [
            { label: "ChatGPT", url: "https://chatgpt.com/" },
            { label: "Gemini", url: "https://gemini.google.com/app?hl=en-IN" },
            { label: "Claude", url: "https://claude.ai/new" }
        ]
    },
    {
        label: "Resources",
        bookmarks: [
            { label: "100xDev", url: "https://app.100xdevs.com/" },
            { label: "DailyCode", url: "https://projects.100xdevs.com/" },
            { label: "Dev Roadmap", url: "https://roadmap.sh/" },
            { label: "DevDoc APIs", url: "https://devdocs.io/" }
        ]
    },
    {
        label: "Tools",
        bookmarks: [
            { label: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
            { label: "Youtube", url: "https://www.youtube.com/" },
            { label: "Neetcode", url: "https://neetcode.io/" }
        ]
    }
];

const injectBookmarks = () => {
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarks.forEach(group => {
        bookmarksContainer.innerHTML += `
            <div class="bookmark-group">
                <h2>${group.label}</h2>
                <ul>
                    ${group.bookmarks.map(({ url, label }) => `<li><a href="${url}">${label}</a></li>`).join('')}
                </ul>
            </div>
        `;
    });
};

injectBookmarks();
