// Beispiel-Videos (ersetze mit deinen echten Daten)
const videos = [
    {
        title: "Mein erstes Video",
        thumbnail: "https://img.youtube.com/vi/VIDEO_ID/0.jpg", // Ersetze VIDEO_ID mit echten IDs
        url: "https://www.youtube.com/watch?v=VIDEO_ID",
        description: "Beschreibung hier...",
        downloads: ["Welt-Download: link", "Mod: link"]
    },
    // Füge mehr Videos hinzu
];

function displayVideos(videosToShow) {
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = '';
    videosToShow.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        `;
        card.onclick = () => showVideoDetails(video);
        gallery.appendChild(card);
    });
}

function showVideoDetails(video) {
    // Einfache Detail-Seite (du kannst eine separate Seite erstellen)
    alert(`Titel: ${video.title}\nBeschreibung: ${video.description}\nLink: ${video.url}\nDownloads: ${video.downloads.join(', ')}`);
    // Alternativ: Öffne eine neue Seite oder Modal
}

// Suchfunktion
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = videos.filter(v => v.title.toLowerCase().includes(query));
    displayVideos(filtered);
});

// Initial load
displayVideos(videos);