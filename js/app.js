function addToHistory(text, audioUrl) {
  const historyContainer = document.getElementById("history");

  // Создаем новый элемент истории с кнопками "Удалить" и "Показать всё"
  const historyItem = document.createElement("div");
  historyItem.classList.add("history-item");
  historyItem.innerHTML = `
        <audio controls src="${audioUrl}"></audio>
        <div class="text-container">
            <p class="transcribed-text">${text}</p>
            <button class="show-more-button" onclick="toggleText(this)">Показать всё</button>
        </div>
        <button class="delete-history-button" onclick="deleteHistoryItem(this)">Удалить</button>
    `;

  historyContainer.prepend(historyItem);
}

function deleteHistoryItem(button) {
  // Удаляем запись из истории
  const historyItem = button.parentElement;
  historyItem.remove();
}

function toggleText(button) {
  const textContainer = button.previousElementSibling;
  if (textContainer.classList.contains('expanded')) {
    textContainer.classList.remove('expanded');
    button.textContent = 'Показать всё';
  } else {
    textContainer.classList.add('expanded');
    button.textContent = 'Скрыть';
  }
}
