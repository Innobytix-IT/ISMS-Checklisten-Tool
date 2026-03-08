// script.js (VOLLSTÄNDIGE VERSION - angepasst für lokale PDF)
document.addEventListener('DOMContentLoaded', () => {
    // ISMS Steps data (as provided)
    let ismsSteps = [
        // Kapitel 3: Initiierung des Sicherheitsprozesses (im JS als Kapitel 1 nummeriert)
        { id: '1.1', chapter: '3.1', text: 'Übernahme von Verantwortung durch die Leitungsebene', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.2.1', chapter: '3.2.1', text: 'Ermittlung von Rahmenbedingungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.2.2', chapter: '3.2.2', text: 'Formulierung von allgemeinen Informationssicherheitszielen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.2.3', chapter: '3.2.3', text: 'Bestimmung des angemessenen Sicherheitsniveaus der Geschäftsprozesse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.2.4', chapter: '3.2.4', text: 'Ersterfassung der Prozesse, Anwendungen und IT-Systeme', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.3.1', chapter: '3.3.1', text: 'Basis-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.3.2', chapter: '3.3.2', text: 'Kern-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.3.3', chapter: '3.3.3', text: 'Standard-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.3.4', chapter: '3.3.4', text: 'Festlegung des Geltungsbereichs', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.3.5', chapter: '3.3.5', text: 'Management-Entscheidung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.4.1', chapter: '3.4.1', text: 'Verantwortung der Behörden- bzw. Unternehmensleitung für die Sicherheitsleitlinie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.4.2', chapter: '3.4.2', text: 'Einberufung einer Entwicklungsgruppe für die Sicherheitsleitlinie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.4.3', chapter: '3.4.3', text: 'Festlegung des Geltungsbereichs und Inhalt der Sicherheitsleitlinie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.4.4', chapter: '3.4.4', text: 'Bekanntgabe der Sicherheitsleitlinie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '1.4.5', chapter: '3.4.5', text: 'Aktualisierung der Sicherheitsleitlinie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.1', chapter: '4.1', text: 'Integration der Informationssicherheit in organisationsweite Abläufe und Prozesse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.2', chapter: '4.2', text: 'Aufbau der Informationssicherheitsorganisation', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.3', chapter: '4.3', text: 'Aufgaben, Verantwortungen und Kompetenzen in der IS-Organisation', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.4', chapter: '4.4', text: 'Der Informationssicherheitsbeauftragte', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.5', chapter: '4.5', text: 'Das IS-Management-Team', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.6', chapter: '4.6', text: 'Bereichs- und Projekt-Sicherheitsbeauftragte bzw. Beauftragter für IT-Sicherheit', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.7', chapter: '4.7', text: 'Der ICS-Informationssicherheitsbeauftragte (ICS-ISB)', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.8', chapter: '4.8', text: 'IS-Koordinierungsausschuss', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.9', chapter: '4.9', text: 'Der Datenschutzbeauftragte', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.10', chapter: '4.10', text: 'Zusammenspiel mit anderen Organisationseinheiten und Managementdisziplinen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '2.11', chapter: '4.11', text: 'Einbindung externer Dienstleister', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '3.1_doc', chapter: '5.1', text: 'Klassifikation von Informationen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '3.2.1_doc', chapter: '5.2.1', text: 'Berichte an die Leitungsebene', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '3.2.2_doc', chapter: '5.2.2', text: 'Dokumentation im Informationssicherheitsprozess', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '3.2.3_doc', chapter: '5.2.3', text: 'Anforderungen an die Dokumentation', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '3.2.4_doc', chapter: '5.2.4', text: 'Informationsfluss und Meldewege', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.1_basis', chapter: '6.1', text: 'Festlegung des Geltungsbereichs für die Basis-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.2.1_basis', chapter: '6.2.1', text: 'Modellierung nach IT-Grundschutz', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.2.2_basis', chapter: '6.2.2', text: 'Reihenfolge der Baustein-Umsetzung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.2.3_basis', chapter: '6.2.3', text: 'Zuordnung von Bausteinen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.2.4_basis', chapter: '6.2.4', text: 'Ermittlung konkreter Maßnahmen aus Anforderungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.3_basis', chapter: '6.3', text: 'IT-Grundschutz-Check für Basis-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.4_basis', chapter: '6.4', text: 'Realisierung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '4.5_basis', chapter: '6.5', text: 'Auswahl einer folgenden Vorgehensweise', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.1_kern', chapter: '7.1', text: 'Die Methodik der Kern-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.2_kern', chapter: '7.2', text: 'Festlegung des Geltungsbereichs für die Kern-Absicherung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.3_kern', chapter: '7.3', text: 'Identifikation und Festlegung der kritischen Assets (Kronjuwelen)', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.4_kern', chapter: '7.4', text: 'Strukturanalyse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.5_kern', chapter: '7.5', text: 'Schutzbedarfsfeststellung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.6_kern', chapter: '7.6', text: 'Modellierung: Auswahl und Anpassung von Anforderungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.7_kern', chapter: '7.7', text: 'IT-Grundschutz-Check', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.8_kern', chapter: '7.8', text: 'Risikoanalyse und weiterführende Sicherheitsmaßnahmen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '5.9_kern', chapter: '7.9', text: 'Umsetzung und weitere Schritte', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.1_standard', chapter: '8.1.1', text: 'Komplexitätsreduktion durch Gruppenbildung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.2_standard', chapter: '8.1.2', text: 'Erfassung der Geschäftsprozesse und der zugehörigen Informationen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.3_standard', chapter: '8.1.3', text: 'Erfassung der Anwendungen und der zugehörigen Informationen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.4_standard', chapter: '8.1.4', text: 'Netzplanerhebung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.5_standard', chapter: '8.1.5', text: 'Erhebung der IT-Systeme', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.6_standard', chapter: '8.1.6', text: 'Erhebung der ICS-Systeme', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.7_standard', chapter: '8.1.7', text: 'Erhebung sonstiger Geräte', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.1.8_standard', chapter: '8.1.8', text: 'Erfassung der Räume', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.1_standard', chapter: '8.2.1', text: 'Definition der Schutzbedarfskategorien', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.2_standard', chapter: '8.2.2', text: 'Vorgehen bei der Schutzbedarfsfeststellung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.3_standard', chapter: '8.2.3', text: 'Schutzbedarfsfeststellung für Geschäftsprozesse und Anwendungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.4_standard', chapter: '8.2.4', text: 'Schutzbedarfsfeststellung für IT-Systeme', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.5_standard', chapter: '8.2.5', text: 'Schutzbedarfsfeststellung für ICS-Systeme', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.6_standard', chapter: '8.2.6', text: 'Schutzbedarfsfeststellung für sonstige Geräte', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.7_standard', chapter: '8.2.7', text: 'Schutzbedarfsfeststellung für Räume', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.8_standard', chapter: '8.2.8', text: 'Schutzbedarfsfeststellung für Kommunikationsverbindungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.2.9_standard', chapter: '8.2.9', text: 'Schlussfolgerungen aus den Ergebnissen der Schutzbedarfsfeststellung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.1_standard', chapter: '8.3.1', text: 'Das IT-Grundschutz-Kompendium', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.2_standard', chapter: '8.3.2', text: 'Modellierung eines Informationsverbunds: Auswahl von Bausteinen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.3_standard', chapter: '8.3.3', text: 'Reihenfolge der Baustein-Umsetzung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.4_standard', chapter: '8.3.4', text: 'Zuordnung von Bausteinen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.5_standard', chapter: '8.3.5', text: 'Modellierung bei Virtualisierung und Cloud-Systemen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.6_standard', chapter: '8.3.6', text: 'Anpassung der Baustein-Anforderungen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.3.7_standard', chapter: '8.3.7', text: 'Einbindung externer Dienstleister', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.4.1_standard', chapter: '8.4.1', text: 'Organisatorische Vorarbeiten für den IT-Grundschutz-Check', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.4.2_standard', chapter: '8.4.2', text: 'Durchführung des Soll-Ist-Vergleichs', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.4.3_standard', chapter: '8.4.3', text: 'Dokumentation der Ergebnisse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '6.5_standard', chapter: '8.5', text: 'Risikoanalyse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '7.1_umsetzung', chapter: '9.1', text: 'Sichtung der Untersuchungsergebnisse', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '7.2_umsetzung', chapter: '9.2', text: 'Kosten- und Aufwandsschätzung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '7.3_umsetzung', chapter: '9.3', text: 'Festlegung der Umsetzungsreihenfolge der Maßnahmen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '7.4_umsetzung', chapter: '9.4', text: 'Festlegung der Aufgaben und der Verantwortung', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '7.5_umsetzung', chapter: '9.5', text: 'Realisierungsbegleitende Maßnahmen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.1.1_aufrecht', chapter: '10.1.1', text: 'Überprüfung anhand von Kennzahlen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.1.2_aufrecht', chapter: '10.1.2', text: 'Bewertung des ISMS mit Hilfe eines Reifegradmodells', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.1.3_aufrecht', chapter: '10.1.3', text: 'Überprüfung der Umsetzung der Sicherheitsmaßnahmen', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.1.4_aufrecht', chapter: '10.1.4', text: 'Zertifizierung nach ISO 27001 auf Basis von IT-Grundschutz', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.2_aufrecht', chapter: '10.2', text: 'Eignung der Informationssicherheitsstrategie', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '8.3_aufrecht', chapter: '10.3', text: 'Übernahme der Ergebnisse in den Informationssicherheitsprozess', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '9.0_zert', chapter: '11', text: 'Zertifizierung nach ISO 27001 auf der Basis von IT-Grundschutz', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '10.1_anhang', chapter: '12.1', text: 'Erläuterungen zu den Schadensszenarien', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
        { id: '10.2_anhang', chapter: '12.2', text: 'Literaturverzeichnis', bsiReferenceText: '', status: 'Offen', docPaths: [''], notes: '' },
    ];

    const tableBody = document.getElementById('checklist-table').getElementsByTagName('tbody')[0];
    const exportButton = document.getElementById('export-data');
    const importFileElement = document.getElementById('import-file');
    const downloadPdfButton = document.getElementById('download-pdf');

    // *** WICHTIG: Passe diesen Dateinamen an deine lokale PDF-Datei an! ***
    const PDF_URL = 'BSI_Standard_200-2.pdf'; // Beispiel: 'BSI-Standard_200-2_Grundschutz.pdf'
    // *******************************************************************

    const LOCAL_STORAGE_KEY = 'ismsChecklistData';
    const statusOptions = ["Offen", "In Bearbeitung", "Erledigt", "N/A"];

    function saveToLocalStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ismsSteps));
    }

    function loadFromLocalStorage() {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (data) {
            try {
                const parsedData = JSON.parse(data);
                if (Array.isArray(parsedData) && parsedData.length > 0 && parsedData[0].hasOwnProperty('id') && parsedData[0].hasOwnProperty('chapter')) {
                    ismsSteps = parsedData;
                } else {
                    console.warn("Local storage data is not in the expected format. Using default data.");
                }
            } catch (e) {
                console.error("Error parsing data from local storage:", e);
            }
        }
    }
    
    function updateRowStatusClass(row, status) {
        row.classList.remove('status-offen', 'status-in-bearbeitung', 'status-erledigt', 'status-na');
        if (status === "Offen") row.classList.add('status-offen');
        else if (status === "In Bearbeitung") row.classList.add('status-in-bearbeitung');
        else if (status === "Erledigt") row.classList.add('status-erledigt');
        else if (status === "N/A") row.classList.add('status-na');
    }

    function populateTable() {
        tableBody.innerHTML = '';
        ismsSteps.forEach(step => {
            const row = tableBody.insertRow();
            row.setAttribute('data-step-id', step.id);
            updateRowStatusClass(row, step.status);

            row.insertCell().textContent = step.chapter;

            const cellStepBsi = row.insertCell();
            const stepTextDiv = document.createElement('div');
            stepTextDiv.className = 'step-text-container';
            stepTextDiv.textContent = step.text;
            cellStepBsi.appendChild(stepTextDiv);
            const bsiRefTextarea = document.createElement('textarea');
            bsiRefTextarea.className = 'bsi-reference-input';
            bsiRefTextarea.value = step.bsiReferenceText;
            bsiRefTextarea.setAttribute('data-field', 'bsiReferenceText');
            bsiRefTextarea.placeholder = "BSI Referenz / Details...";
            cellStepBsi.appendChild(bsiRefTextarea);

            const cellStatus = row.insertCell();
            const statusSelect = document.createElement('select');
            statusSelect.setAttribute('data-field', 'status');
            statusOptions.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                if (step.status === opt) option.selected = true;
                statusSelect.appendChild(option);
            });
            cellStatus.appendChild(statusSelect);

            const cellDocPaths = row.insertCell();
            const docPathsContainer = document.createElement('div');
            docPathsContainer.className = 'doc-paths-container';
            if (!Array.isArray(step.docPaths)) {
                step.docPaths = [''];
            }
            if (step.docPaths.length === 0) {
                step.docPaths.push('');
            }
            step.docPaths.forEach((path, index) => {
                docPathsContainer.appendChild(createDocPathElementDOM(path, step.id, index));
            });
            const addPathBtn = document.createElement('button');
            addPathBtn.textContent = '+ Pfad';
            addPathBtn.className = 'add-path-btn';
            addPathBtn.setAttribute('data-action', 'add-doc-path');
            cellDocPaths.appendChild(docPathsContainer);
            cellDocPaths.appendChild(addPathBtn);

            const cellNotes = row.insertCell();
            const notesTextarea = document.createElement('textarea');
            notesTextarea.className = 'notes-input';
            notesTextarea.value = step.notes;
            notesTextarea.setAttribute('data-field', 'notes');
            notesTextarea.placeholder = "Notizen...";
            cellNotes.appendChild(notesTextarea);
        });
    }

    function createDocPathElementDOM(pathValue, stepId, pathIndex) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'doc-path-item';
        itemDiv.setAttribute('data-path-index', pathIndex);
        const input = document.createElement('input');
        input.type = 'text';
        input.value = pathValue;
        input.setAttribute('data-field', 'docPath');
        input.placeholder = "Dokumentenpfad oder Link";
        itemDiv.appendChild(input);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '-';
        removeBtn.className = 'remove-path-btn';
        removeBtn.setAttribute('data-action', 'remove-doc-path');
        itemDiv.appendChild(removeBtn);
        return itemDiv;
    }

    function updateStepData(stepId, field, value, pathIndex = -1) {
        const step = ismsSteps.find(s => s.id === stepId);
        if (!step) return;

        if (field === 'docPath' && pathIndex > -1) {
            if (!Array.isArray(step.docPaths)) {
                step.docPaths = [];
            }
            while (step.docPaths.length <= pathIndex) {
                step.docPaths.push('');
            }
            step.docPaths[pathIndex] = value;
        } else if (field === 'status') {
            step[field] = value;
            const row = tableBody.querySelector(`tr[data-step-id="${stepId}"]`);
            if(row) updateRowStatusClass(row, value);
        } else {
            step[field] = value;
        }
        saveToLocalStorage();
    }

    tableBody.addEventListener('change', (e) => {
        const target = e.target;
        const row = target.closest('tr');
        if (!row) return;
        const stepId = row.dataset.stepId;
        const field = target.dataset.field;
        if (field) {
            if (field === 'docPath') {
                const pathItem = target.closest('.doc-path-item');
                if (!pathItem) return;
                const pathIndex = parseInt(pathItem.dataset.pathIndex, 10);
                updateStepData(stepId, field, target.value, pathIndex);
            } else {
                updateStepData(stepId, field, target.value);
            }
        }
    });

    tableBody.addEventListener('input', (e) => {
        const target = e.target;
        const row = target.closest('tr');
        if (!row) return;
        const stepId = row.dataset.stepId;
        const field = target.dataset.field;
        if (field) {
            if (field === 'docPath') {
                 const pathItem = target.closest('.doc-path-item');
                 if (!pathItem) return;
                 const pathIndex = parseInt(pathItem.dataset.pathIndex, 10);
                 updateStepData(stepId, field, target.value, pathIndex);
            } else if (target.tagName === 'TEXTAREA') {
                 updateStepData(stepId, field, target.value);
            }
        }
    });

    tableBody.addEventListener('click', (e) => {
        const target = e.target;
        const action = target.dataset.action;
        const row = target.closest('tr');
        if (!row) return;
        const stepId = row.dataset.stepId;
        const step = ismsSteps.find(s => s.id === stepId);
        if (!step) return;

        if (action === 'add-doc-path') {
            if (!Array.isArray(step.docPaths)) {
                step.docPaths = [];
            }
            step.docPaths.push('');
            const newPathIndex = step.docPaths.length - 1;
            const docPathsContainer = row.querySelector('.doc-paths-container');
            docPathsContainer.appendChild(createDocPathElementDOM('', step.id, newPathIndex));
            saveToLocalStorage();
        } else if (action === 'remove-doc-path') {
            const pathItem = target.closest('.doc-path-item');
            if (!pathItem) return;
            const pathIndex = parseInt(pathItem.dataset.pathIndex, 10);
            if (Array.isArray(step.docPaths) && step.docPaths.length > pathIndex) {
                step.docPaths.splice(pathIndex, 1);
            }
            pathItem.remove();
            const docPathsContainer = row.querySelector('.doc-paths-container');
            Array.from(docPathsContainer.children).forEach((item, newIndex) => {
                if (item.classList.contains('doc-path-item')) {
                    item.setAttribute('data-path-index', newIndex);
                }
            });
            saveToLocalStorage();
        }
    });

    exportButton.addEventListener('click', () => {
        const dataStr = JSON.stringify(ismsSteps, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'isms_checklist_data.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        linkElement.remove();
    });

    importFileElement.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    if (Array.isArray(importedData) && 
                        importedData.length > 0 && 
                        importedData[0].hasOwnProperty('id') && 
                        importedData[0].hasOwnProperty('chapter') &&
                        importedData[0].hasOwnProperty('text') &&
                        importedData[0].hasOwnProperty('bsiReferenceText') &&
                        importedData[0].hasOwnProperty('status') &&
                        importedData[0].hasOwnProperty('docPaths') &&
                        importedData[0].hasOwnProperty('notes')
                       ) {
                        ismsSteps = importedData.map(step => ({
                            ...step,
                            docPaths: Array.isArray(step.docPaths) ? step.docPaths : ['']
                        }));
                        populateTable();
                        saveToLocalStorage();
                        alert('Daten erfolgreich importiert!');
                    } else {
                        alert('Fehler: Die importierte Datei hat nicht das erwartete Format oder wichtige Felder fehlen.');
                    }
                } catch (error) {
                    alert('Fehler beim Lesen der JSON-Datei: ' + error.message);
                    console.error("Error parsing imported JSON:", error);
                }
                importFileElement.value = '';
            };
            reader.onerror = () => {
                alert('Fehler beim Lesen der Datei.');
                importFileElement.value = '';
            };
            reader.readAsText(file);
        }
    });

    // Download PDF (angepasst für lokale Datei)
    downloadPdfButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = PDF_URL; // Verwendet jetzt den lokalen Dateinamen
        link.download = PDF_URL; // Dieser Name wird dem Benutzer beim Speichern vorgeschlagen
        document.body.appendChild(link); // Link muss im DOM sein, damit .click() funktioniert
        link.click();
        document.body.removeChild(link); // Den temporären Link wieder entfernen
    });

    loadFromLocalStorage();
    populateTable();
});