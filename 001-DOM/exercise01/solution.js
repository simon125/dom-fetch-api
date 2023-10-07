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
 * Twoim zadaniem jest implementacja mini apki typu counter
 * aplikacja powinna wyglądać mniej więcej tak jak na designie dostępnym
 * w pliku desing.png (pamiętaj nie style są ważne a działanie apki - JS)
 *
 * counter powinien działać następująco:
 *
 * klikając w przycisk z labelką -1 wartość outputu powinna być zmniejszana o 1
 * klikając w przycisk z labelką +1 wartość outputu powinna być zwiększana o 1
 *
 * pamietaj że przy każdym kliknięciu wartość na ekranie musi być zaktualizowana
 *
 * ⭐⭐ do dokumentu dodaj kolejne przyciski z labelkami +5 oraz -5 zaimplementuj odpowiednie
 * zachowanie w momencie kliknięcia nowych przycisków
 * spróbuj stworzyć jedną funkcje licząco--aktualizującą którą użyjesz we wszystkich event listenerach
 * działanie będzie oparte o przekazany argument - przykłady wywołania takiej funkcji:
 * calcAndUpdate(1);
 * calcAndUpdate(-5);
 * w Twoim przypadku funkcje te będą musiały być wywołane w event listenerach
 *
 *
 * hints:
 * do rozwiązania zadania możesz użyć dwóch elementów typu button oraz elmentu który posłuży jako
 * output może być to też input z atrybutami disabled oraz readonly co uniemożliwi ręcznej
 * zmiany wartości outputu
 *
 */

const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const output = document.querySelector("#output");

incrementBtn.addEventListener("click", () => {
  output.value = output.value * 1 + 1;
});

decrementBtn.addEventListener("click", () => {
  output.value = output.value * 1 - 1;
});
