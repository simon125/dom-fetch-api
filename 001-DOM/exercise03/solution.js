/**
 * Przed rozpoczęciem kilka słów o tym jak pracować z tym plikiem
 *
 * 1) zadania możesz uruchomić dzięki uruchomieniu pliku index.html w przeglądarce
 *    - możesz przeciągnąć plik index.html do okna przegladarki
 *    - możesz odapilić plik html za pomocą rozszerzenia live server
 * 2) Do rozwiązywania zadań możesz praktycznie wszystko (chyba że w zadaniu jest opisane co można a co nie) tzn.
 *    - tworzyć zmienne
 *    - tworzyć funkcje
 *    - korzystać z internenetu
 *    - etc.
 * 3) każde zadanie posiada przykładowe rozwiązanie w pliku który często nazywa się solution.js użyj go jeżeli:
 *    - nie wiesz jak ruszyć zadania
 *    - chcesz sprawdzić moją przykładową implementację
 * 4) jeżeli Twoje rozwiązanie różni się od zaproponowanego przezemnie nie musi to oznaczać że Twoje jest złe/gorsze
 *    problemy w programowaniu mają często wiele rozwiązań
 * 5) czasem zadania posiadają w treści sekcje z ⭐ są to zadania dodatkowe dla chętnych - oczywiście są one nieco trudniejsze
 *
 * Powodzenia!
 */

/**
 * Zadanie
 *
 * Twoim zadaniem jest implementacja statycznej aplikacji typu todo lista
 *
 * do zaimplementowania są następująca zachowania:
 *
 * - submit formularza
 * - dodawnie nowego elementu do tabelki po submicie
 * - usunięcie elmentu/wiersza w momencie kliknięcia przycisku z "x"
 *
 * formularz składa się z kilku elmentów których wartości należy odczytać w momencie kliknięcia
 * przycisku submi i na podstawie tych wartości dodać nowy wiersz w tabelce (document.appendChild)
 *
 *
 */

const addTodoForm = document.querySelector("#addTodoForm");
const todoList = document.querySelector("#todo-list");

addTodoForm.addEventListener("submit", (e) => {
  // wyłączenie defaultowego zachowania przeglądarki w momencie submitu formularza - tj. przeładowanie storny
  e.preventDefault();
  // stworzenie obiektu reprezentującego wartości formularza
  const formData = new FormData(e.target);
  // pobranie wartości z formularza i przypisanie do zmiennych tak żeby łatwiej się z nich korzystało w następnych linijkach
  const title = formData.get("title");
  const description = formData.get("description");
  const priority = formData.get("priority");

  // stworzenie nowego elementu HTMLowego i przypisanie go do zmiennej
  // później w tym elemencie umieścimy dynamicznie stworzony kontent - komórki tabelki
  const newTableRow = document.createElement("tr");

  // Tworzenie dynamicznej struktury HTML w zmiennej typu string - komórki tabelki
  const tds = `
        <td>${document.querySelectorAll("tr").length}</td>
        <td>${title}</td>
        <td>${description}</td>
        <td>${priority}</td>
        <td><button class="btn">&times;</button></td>
    `;

  // umieszczenie komórek w wierszu
  newTableRow.innerHTML = tds;

  // umieszczenie wiersza w dokumencie HTML od tej pory nowy wiersz powinien być widoczny w przeglądarce
  todoList.appendChild(newTableRow);

  // wyczyszczenie pól w formularzu
  e.target.reset();
});

// event listener z delegają zdarzeń
// nie nadajemy X event listenerów do wszystkich przycisków osobno
// dodajemy jeden event listener do elementu który jest rodzicem w strukturze HTML
// i sprawdzamy czy kliknięty element wewnątrz parenta to przycisk jeżeli tak
// możemy wykonać logikę którą chcemy wykonać
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.parentElement.parentElement.remove();
  }
});
