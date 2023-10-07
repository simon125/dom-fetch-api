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
 * Zadanie 1
 *
 * Twoim zadaniem jest stworzenie apki typu flexbox playground
 * Zasada działania jest następująca:
 * aplikacja wyświetla kontener z trzema kwadratami ustawionymi w jednej lini
 * kontener jest flex kontenerem tzn że właściwość CSSowa display = 'flex'
 * nad kontenerem znajduje się element typu select który powinien mieć wszystkie opcje
 * pozycjonowania elementów w flex kontenerze
 * tzn. start, center, space-between, space-around itd.
 *
 * Uwaga dokument HTML jest nie kompletny - brakuje tam opcji wyboru (option) oraz odpowiednich
 * atrybutów value w optionach - do poprawnego działania apki będzie to wymagane
 *
 * dodatkowo możliwe jest że będziesz chciał/a dodać atrybuty id do elementów żeby móc je pobrać - śmiało :)
 *
 * zachowania apki:
 * w momencie gdy user zmienia wartość w selecie zadaniem programu jest zmiana stylów w flex contenerze
 * zgodnie z wybranym optionem
 *
 * np. jeżeli wybierzemy opcje space between to skrypt powinien ustawić taką klasę css-ową w flex conterze żeby
 * elmenty ustawiły się zgodnie z tą wartością
 *
 * możesz bezpośrednio edytować atrubut style w flex containerze w momencie zmiany opcji w selecie
 * lub możesz edytować klasy jakie są ustawione w elemencie flex-container (style i odpowiednie klasy są dostępne
 * w pliku style.css)
 *
 *
 *
 * Zadanie 2 - rozszerzenie funkcjonalności apki z zadania 1
 *
 * Twoim zadaniem jest obsługa kliknięcia w niebieski kwadracik (flex-item)
 * w momencie kliknięcia w element powinien zostać on usunięty
 *
 * hinty: skorzystaj z delegacji eventów
 *
 * ⭐⭐⭐
 * Zadanie 3 - rozszerzenie funcjonalności apki z zadania 1
 * Na podstawie designu dostępnego w pliku design-advanced.png
 * rozszerz istniejącą aplikację o sterowanie stylami w osi Y (align-items)
 * oraz dodaj możliwość dodawania i usuwania kwadracików (flex-itemów) za pomocą przycisków
 * add box/delete box
 *
 */

const justifyContent = document.querySelector("#justifyContent");
const flexContainer = document.querySelector("#flex-container");

justifyContent.addEventListener("change", (event) => {
  flexContainer.classList = `flex-container ${event.target.value}`;
});

flexContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("flex-item")) {
    event.target.remove();
  }
});
