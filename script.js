// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherWidget = document.getElementById('weather-widget');
const bookmarksContainer = document.getElementById("bookmarks");

// Constants
const API_KEY = 'cc1132a09c959c92752a7424100015b0'; // Replace with your API key
const CITY = 'Greater Noida'; // Replace with your city

// Search functionality
const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        searchInput.value = '';
    }
};

searchInput.addEventListener('keydown', (e) => e.key === 'Enter' && performSearch());
searchButton.addEventListener('click', performSearch);

// Weather functionality
const fetchWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('Weather data fetch failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
};

const displayWeather = (data) => {
    if (!data) {
        weatherWidget.innerHTML = '<p>Weather data unavailable</p>';
        return;
    }
    const { main: { temp }, weather: [{ description }] } = data;
    weatherWidget.innerHTML = `
        <div class="weather-info">  
            <p>Temperature: ${temp} °C</p>
            <p>Weather: ${description}</p>
        </div>
    `;
};

// Bookmarks data
const bookmarks = [
    {
        label: "Social",
        bookmarks: [
            { label: "LinkedIn", url: "https://www.linkedin.com/feed/" },
            { label: "Discord", url: "https://discord.com/channels/@me" },
            { label: "X", url: "https://x.com/home" }
        ]
    },
    {
        label: "Coding",
        bookmarks: [
            { label: "HackerRank", url: "https://www.hackerrank.com/dashboard" },
            { label: "CodeChef", url: "https://www.codechef.com/dashboard" },
            { label: "LeetCode", url: "https://leetcode.com/problemset/" }
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
        label: "AI",
        bookmarks: [
            { label: "ChatGPT", url: "https://chatgpt.com/" },
            { label: "Gemini", url: "https://gemini.google.com/app?hl=en-IN" },
            { label: "Claude", url: "https://claude.ai/new" }
        ]
    },
    {
        label: "Tools",
        bookmarks: [
            { label: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
            { label: "Github", url: "https://github.com/prajjawal-kansara" }
        ]
    },
    {
        label: "Docs.",
        bookmarks: [
            { label: "DailyCode", url: "https://projects.100xdevs.com/" },
            { label: "Dev Roadmap", url: "https://roadmap.sh/" },
            { label: "DevDoc APIs", url: "https://devdocs.io/" },
            { label: "QuickRef", url: "https://quickref.me/" }
        ]
    },
    {
        label: "Resources",
        bookmarks: [
            { label: "100xDev", url: "https://app.100xdevs.com/" },
            { label: "Youtube", url: "https://www.youtube.com/" },
            { label: "Neetcode", url: "https://neetcode.io/" },
            { label: "TUF", url: "https://takeuforward.org/" }
        ]
    },
    {
        label: "Escape",
        bookmarks: [
            { label: "Anime", url: "https://hianime.to/" },
            { label: "Manga", url: "https://comick.io/home" },
            { label: "Movies", url: "https://binged.to/" },
            { label: "Pinterest", url: "https://in.pinterest.com/" }
        ]
    }
];

// Inject bookmarks
const injectBookmarks = () => {
    const bookmarkHTML = bookmarks.map(group => `
        <div class="bookmark-group">
            <h2>${group.label}</h2>
            <ul>
                ${group.bookmarks.map(({ url, label }) => `<li><a href="${url}">${label}</a></li>`).join('')}
            </ul>
        </div>
    `).join('');
    bookmarksContainer.innerHTML = bookmarkHTML;
};

// Initialize
const init = async () => {
    injectBookmarks();
    const weatherData = await fetchWeather();
    displayWeather(weatherData);
};

// Run initialization
document.addEventListener('DOMContentLoaded', init);