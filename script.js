const shoppingList = document.querySelector("ul");
        const input = document.querySelector("input");
        const addButton = document.querySelector("button");

        addButton.addEventListener('click', (event) => {
          event.preventDefault();

          const inputValue = input.value;
          input.value = "";
          const listItem = document.createElement("li");
          const spanItem = document.createElement("span");
          const deleteButton = document.createElement("button");

          listItem.appendChild(spanItem);
          listItem.appendChild(deleteButton);

          spanItem.textContent = inputValue;
          deleteButton.textContent = "Delete";

          shoppingList.appendChild(listItem);

          deleteButton.addEventListener('click', () => {
            shoppingList.removeChild(listItem);
          });

          input.focus();
        });