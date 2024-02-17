/* 
Функция должна быть запущена из консоли браузера.
Чтобы удалить абсолютно все закладки, нужно запустить скрипт в разделе https://vk.com/bookmarks.
Если требуется удалить закладки определенного типа, напр. видео, нужно перейти в соответствующий раздел https://vk.com/bookmarks?type=video.
Фунция находит на странице кнопки удаления закладки и имитирует нажатие кнопки.
Функция выполняет сама себя каждые 3 секунды.
*/

// объявляем функцию deleteFn()
let deleteFn = () => {
  // находим на странице все кнопки, связанные с действиями с закладкой
  document.querySelectorAll('.bookmarks_row .ui_actions_menu a')
    // проходимся по найденным кнопкам циклом foreach
    .forEach(a => {
      // если кнопка отвечает за удаление
      if (a.textContent.includes("Удалить из закладок")) 
        // имитируем нажатие кнопки
        a.click();
    }); 
  // функция deleteFn() рекурсивно запускает сама себя каждые 3 секунды
  setTimeout(deleteFn, 3000);
}
// выполняем функцию
deleteFn();

// одной строкой для вставки в консоль
let deleteFn = () => {document.querySelectorAll('.bookmarks_row .ui_actions_menu a').forEach(a => {if (a.textContent.includes("Удалить из закладок")) a.click();}); setTimeout(deleteFn, 3000);} deleteFn();
