# ISMS-Checklisten-Tool
### Release v2.0.0 - Die einfache ISMS-Checkliste für den BSI 200-2 Standard

Dies ist das erste große Release unseres einfachen und effektiven ISMS-Checklisten-Tools. Es wurde entwickelt, um den Prozess der Implementierung eines Informationssicherheits-Managementsystems (ISMS) nach dem **BSI-Standard 200-2 (IT-Grundschutz-Methodik)** zu vereinfachen und zu dokumentieren.

Das gesamte Tool läuft vollständig clientseitig in Ihrem Browser. Es ist keine Installation und kein Server erforderlich. Alle Ihre Daten werden sicher und privat in Ihrem lokalen Browser-Speicher abgelegt.

### ✨ Hauptmerkmale

*   **Vollständige Checkliste:** Beinhaltet alle relevanten Schritte und Kapitel des BSI-Standards 200-2.
*   **Status-Tracking:** Verfolgen Sie den Fortschritt jedes einzelnen Schrittes mit den Statusoptionen: "Offen", "In Bearbeitung", "Erledigt" und "N/A".
*   **Detaillierte Dokumentation:** Fügen Sie zu jedem Schritt wichtige Informationen hinzu, wie z.B. Pfade zu relevanten Dokumenten, detaillierte Notizen und spezifische BSI-Referenzen.
*   **Lokale Speicherung:** Alle Eingaben werden automatisch im `localStorage` Ihres Browsers gespeichert. Sie können die Seite jederzeit schließen und später weiterarbeiten.
*   **Daten-Portabilität:**
    *   **JSON-Export:** Sichern Sie Ihre Daten oder teilen Sie Ihren Fortschritt, indem Sie den gesamten Zustand der Checkliste als JSON-Datei exportieren.
    *   **JSON-Import:** Laden Sie zuvor exportierte Daten einfach wieder in das Tool, um an einem früheren Stand weiterzuarbeiten oder die Daten auf einen anderen Computer zu übertragen.
*   **Direkter PDF-Download:** Laden Sie den offiziellen BSI-Standard 200-2 direkt aus der Anwendung herunter, um schnell darauf zugreifen zu können.

### 🚀 Wie man es benutzt

1.  Laden Sie die Dateien `Index.html`, `script.js` und `style.css` aus diesem Release herunter.
2.  Öffnen Sie die `Index.html`-Datei in einem modernen Webbrowser (z.B. Chrome, Firefox, Edge).
3.  Beginnen Sie mit der Bearbeitung der Checkliste. Ihre Änderungen werden automatisch gespeichert.
4.  Nutzen Sie die Schaltflächen "Daten Exportieren" und "Daten Importieren", um Ihre Arbeit zu sichern oder auf andere Geräte zu übertragen.

### Der Gedanke hinter dem Tool: Einfachheit, Kontrolle und ein praktischer Startpunkt

Der Weg zu einem funktionierenden Informationssicherheits-Managementsystem (ISMS) nach dem BSI IT-Grundschutz ist oft komplex und kann gerade für kleinere oder mittlere Unternehmen (KMU) oder für neu ernannte Sicherheitsbeauftragte überwältigend wirken. Man steht vor einem Berg an Anforderungen, Dokumenten und Prozessen.

Der Kerngedanke hinter diesem Tool ist, diesen Prozess zu entmystifizieren und eine **niedrigschwellige, pragmatische und sichere Lösung** anzubieten, die sich auf das Wesentliche konzentriert: Den Prozess strukturiert abzuarbeiten und den Fortschritt zu dokumentieren.

Im Detail verfolgt das Tool folgende Prinzipien:

*   **Einfachheit und Fokus:** Anstatt einer komplexen Software mit unzähligen Funktionen, die erst erlernt werden müssen, bietet das Tool eine simple Checkliste. Sie dient als roter Faden, der den Anwender Schritt für Schritt durch die IT-Grundschutz-Methodik führt. Der Fokus liegt rein auf der Abarbeitung und Dokumentation des Prozesses.

*   **Keine Einstiegshürden:** Sie müssen nichts installieren, sich nirgends registrieren oder einen Server einrichten. Das Tool ist eine einfache HTML-Datei, die in jedem modernen Browser läuft – sogar von einem USB-Stick. Jeder kann sofort loslegen.

*   **Datenhoheit und Datenschutz (ganz wichtig!):** In der Informationssicherheit arbeitet man mit sensiblen Daten über die eigene IT-Infrastruktur und Organisation. Es wäre paradox, diese Daten einem externen Cloud-Dienst anzuvertrauen. Deshalb war die oberste Priorität: **Alle Daten bleiben beim Nutzer.** Das Tool speichert alles ausschließlich im lokalen Speicher (`localStorage`) des Webbrowsers auf Ihrem Computer. Es wird niemals eine Verbindung zu einem externen Server aufgebaut. Ihre Daten verlassen Ihren Rechner nicht, es sei denn, Sie exportieren sie selbst.

*   **Praxisnähe und Flexibilität:** Das Tool ist für die praktische Arbeit gemacht. Man kann Verweise auf eigene Dokumente im Netzwerk eintragen, Notizen machen und den Status pflegen. Die Import- und Export-Funktion (via `JSON`) ist der Schlüssel zur Flexibilität:
    *   **Backups:** Erstellen Sie jederzeit eine Sicherungskopie Ihres Fortschritts.
    *   **Zusammenarbeit:** Ein Kollege kann den aktuellen Stand als Datei exportieren und Ihnen schicken. Sie importieren sie und arbeiten weiter.
    *   **Geräteunabhängigkeit:** Arbeiten Sie auf Ihrem Bürorechner, exportieren Sie die Daten und importieren Sie sie auf Ihrem Laptop, um woanders weiterzuarbeiten.

#### Für wen ist das Tool gedacht?

Dieses Tool richtet sich vor allem an:

*   **Kleine und mittlere Unternehmen (KMU),** die mit der Umsetzung des IT-Grundschutzes beginnen und eine einfache Lösung ohne hohe Lizenzkosten suchen.
*   **Informationssicherheitsbeauftragte (ISB) und IT-Verantwortliche,** die ein pragmatisches Werkzeug zur Steuerung und Dokumentation des ISMS-Prozesses benötigen.
*   **Berater,** die bei Kunden den ISMS-Prozess initiieren und den Fortschritt auf einfache Weise festhalten und übergeben möchten.
*   **Jeden, der den BSI-Standard 200-2 praktisch kennenlernen und durcharbeiten will.**

Zusammengefasst ist das Ziel, den Einstieg in den ISMS-Prozess so einfach wie möglich zu gestalten und dem Anwender die volle Kontrolle über seine Daten zu geben. Es soll ermutigen, den ersten Schritt zu machen, anstatt vor der Komplexität des Themas zurückzuschrecken.

Wir hoffen, dieses Tool ist eine wertvolle Hilfe bei der Umsetzung Ihres ISMS. Feedback und Vorschläge sind jederzeit willkommen!
