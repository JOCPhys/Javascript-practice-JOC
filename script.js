document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItemButton');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

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
        const li = document.createElement('li');
        li.textContent = itemText;

        const checkContainer = document.createElement('div');
        checkContainer.className = 'button-container';
        const checkSpan = document.createElement('span');
        checkSpan.textContent = 'Check';
        const checkButton = document.createElement('button');
        checkContainer.appendChild(checkSpan);
        checkContainer.appendChild(checkButton);

        const removeContainer = document.createElement('div');
        removeContainer.className = 'button-container';
        const removeSpan = document.createElement('span');
        removeSpan.textContent = 'Remove';
        const removeButton = document.createElement('button');
        removeButton.addEventListener('click', () => {
            shoppingList.removeChild(li);
        });
        removeContainer.appendChild(removeSpan);
        removeContainer.appendChild(removeButton);

        li.appendChild(checkContainer);
        li.appendChild(removeContainer);

        shoppingList.appendChild(li);
    }
});