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
 * stwórz funkcje addStrings która w parametrach przyjmie zmienne string1 oraz string2
 * funkcja powinna konkatenować stringi (połączyć w jeden string),
 * dodatkowo niech funkcja wstawi znak średnika pomiędzy łączone stringi
 *
 * tzn. mając string1 = "hej" oraz string2 = "kup se klej" po połączeniu tych dwóch stringów
 * rezultat powinien być równy "hej;kup se klej" - zauważ średnik jest po słowie "hej"
 *
 * niech funkcja zwraca ten nowo stworzony string
 *
 * wywołaj funkcje przekazując odpowiednie argumenty a rezultat wyświetl za pomocą znanej Ci metody
 * np. console.log
 *
 * UWAGA: upewnij się że skrypt jest podpięty do pliku index.html
 *
 *
 * ⭐⭐ niech funkcja ma możliwość przyjęcia jako parametr oprócz dwóch oddzielnych stringów
 * tablicę stringów tzn że wywołanie tej funkcji może wyglądać następująco:
 *
 * 1) addStrings('hej', 'kup se klej');
 * 2) addStrings(['hej', 'kup', 'se', 'klej', 'albo nie kupuj']);
 *
 * jeżeli do funkcji przekażemy dwa stringi funkcjia powinna działać tak jak działała
 * jeżeli do funckji przekażemy tablice stringów funkcja powinna również połączyć stringi znajdujące się w
 * tablicy z średnikiem pomiędzy każdym słowem w tablicy
 *
 * czyli jeżeli weźmiemy w/w przykład 2 spodziewany rezultat powinien wyglądać jak poniżej:
 * 'hej;kup;se;klej;albo nie kupuj'
 */
