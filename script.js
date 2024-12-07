document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');
    const title = document.querySelector('h1');

    // Prompt the user for their name
    let userName = '';
    while (!userName.match(/^[a-zA-Z]+$/)) {
        userName = prompt("Please enter your name (letters only):");
    }
    title.textContent = `${userName}'s Shopping List`;

    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            addItemToList(itemText);
            itemInput.value = '';
        }
    });

    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItemButton.click();
        }
    });

    function addItemToList(itemText) {
        const tr = document.createElement('tr');

        const tdItem = document.createElement('td');
        tdItem.textContent = itemText;

        const tdActions = document.createElement('td');
        tdActions.className = 'text-end';

        const checkContainer = document.createElement('div');
        checkContainer.className = 'button-container';
        const checkSpan = document.createElement('span');
        checkSpan.textContent = 'Check';
        checkSpan.className = 'me-2';
        const checkRadio = document.createElement('input');
        checkRadio.type = 'radio';
        checkRadio.name = `action-${itemText}`;
        checkContainer.appendChild(checkSpan);
        checkContainer.appendChild(checkRadio);

        const removeContainer = document.createElement('div');
        removeContainer.className = 'button-container';
        const removeSpan = document.createElement('span');
        removeSpan.textContent = 'Remove';
        removeSpan.className = 'me-2';
        const removeRadio = document.createElement('input');
        removeRadio.type = 'radio';
        removeRadio.name = `action-${itemText}`;
        removeRadio.addEventListener('click', () => {
            shoppingList.removeChild(tr);
        });
        removeContainer.appendChild(removeSpan);
        removeContainer.appendChild(removeRadio);

        tdActions.appendChild(checkContainer);
        tdActions.appendChild(removeContainer);

        tr.appendChild(tdItem);
        tr.appendChild(tdActions);

        shoppingList.appendChild(tr);
    }
});