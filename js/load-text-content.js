
let contentPath = "../assets/text-content/";

// Globales Objekt zum Speichern der geladenen Texte
window.loadedContent = {};

/* 
 * Erklärung des Codes:
 * 1. loadContent(): 
 *    Lädt die Datei 'water.txt' und speichert die Abschnitte in 'window.loadedContent'.
 */
async function loadContent(fileName) {
    try {
        const response = await fetch(contentPath + fileName);
        if (!response.ok) throw new Error(`HTTP Fehler! Status: ${response.status}`);

        const data = await response.text();
        parseContent(data);

    } catch (error) {
        console.error('Fehler beim Laden des Inhalts:', error);
    }
}

// Funktion zum Zerlegen des Textes
function parseContent(textData) {
    for (let i = 1; i <= 4; i++) {
        // Ki Genariert den Regex
        const regex = new RegExp(`:${i}:([\\s\\S]*?):<${i}>:`);
        const match = textData.match(regex);

        if (match && match[1]) {
            // Speichere den Inhalt im globalen Objekt unter dem Schlüssel 1, 2, 3, 4
            window.loadedContent[i] = match[1].trim();
        }
    }
    console.log("Texte geladen:", window.loadedContent);
}
