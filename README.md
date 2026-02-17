# Minecraft Julian YouTube Kanal Website

Eine moderne, responsive Website für den Minecraft Julian YouTube Kanal.

## Features

- 🎨 Modernes, responsives Design
- 📱 Mobilfreundlich
- 🎬 YouTube Video Integration
- 📧 Kontakt & Social Media Links
- ⚡ Schnell und leichtgewichtig

## Verwendung

### Lokale Entwicklung

1. Klone das Repository:
```bash
git clone https://github.com/Minecraft-Julian/Home.git
cd Home
```

2. Öffne `index.html` in deinem Browser

Oder starte einen lokalen Webserver:
```bash
# Mit Python
python3 -m http.server 8000

# Mit Node.js (http-server)
npx http-server
```

3. Öffne http://localhost:8000 in deinem Browser

## Anpassung

### YouTube Kanal Link ändern

Ersetze `@minecraft-julian` in den folgenden Dateien mit deinem YouTube Kanal Handle:
- `index.html` (mehrere Vorkommen)

### YouTube Videos hinzufügen

Um deine eigenen Videos einzubinden:

1. Öffne ein YouTube Video
2. Klicke auf "Teilen" → "Einbetten"
3. Kopiere die Video-ID aus der URL (z.B. `dQw4w9WgXcQ` aus `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
4. Ersetze `VIDEO_ID` in `index.html` mit deiner Video-ID
5. Für mehrere Videos, dupliziere einfach den `<div class="youtube-embed">` Block

### Farben anpassen

Bearbeite die CSS-Variablen in `styles.css`:
```css
:root {
    --primary-color: #ff0000;    /* YouTube Rot */
    --secondary-color: #282828;  /* Dunkelgrau */
    /* ... weitere Farben */
}
```

### Inhalte ändern

Bearbeite `index.html` um:
- Texte zu ändern
- Abschnitte hinzuzufügen/entfernen
- Links zu aktualisieren

## Deployment

### GitHub Pages

1. Gehe zu Repository Settings
2. Navigiere zu "Pages" 
3. Wähle "main" branch als Quelle
4. Speichern

Die Website wird dann unter `https://minecraft-julian.github.io/Home/` verfügbar sein.

### Andere Hosting-Optionen

- Netlify: Verbinde dein GitHub Repository
- Vercel: Verbinde dein GitHub Repository
- Traditionelles Webhosting: Lade alle Dateien via FTP hoch

## Struktur

```
Home/
├── index.html    # Hauptseite
├── styles.css    # Styling
└── README.md     # Diese Datei
```

## Technologien

- HTML5
- CSS3
- Responsive Design
- YouTube Embed API

## Lizenz

© 2026 Minecraft Julian. Alle Rechte vorbehalten.
