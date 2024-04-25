let checkStates = JSON.parse(localStorage.getItem('checkStates')) || {};

// Add a checkbox to all list items
function listify() {
    const sections = document.querySelectorAll('.primary-section');
    let sectionIndex = 0;

    sections.forEach(section => {
        const checklists = section.querySelectorAll('.checklist');
        let checklistIndex = 0;

        checklists.forEach(checklist => {
            const listItems = checklist.querySelectorAll('li');
            let itemIndex = 0;

            listItems.forEach(listItem => {
                const key = `check-${sectionIndex}-${checklistIndex}-${itemIndex}`;

                // Put the existing contents of the list item inside a label
                const label = document.createElement('label');
                label.innerHTML = listItem.innerHTML;
                label.htmlFor = key;
                listItem.innerHTML = '';

                // Create a checkbox for the list item
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;

                checkbox.addEventListener('change', (event) => {
                    // Store state of checkbox
                    checkStates[key] = event.target.checked;
                    localStorage.setItem('checkStates', JSON.stringify(checkStates));
                });

                // Set initial state of checkbox
                if (checkStates[key]) {
                    checkbox.checked = true;
                }

                // Append the checkbox and span to the list item
                listItem.appendChild(checkbox);
                listItem.appendChild(label);

                itemIndex++;
            });

            checklistIndex++;
        });

        sectionIndex++;
    });
}
