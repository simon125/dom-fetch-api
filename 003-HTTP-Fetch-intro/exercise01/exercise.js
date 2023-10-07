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
 * stwórz funkcje o nazwie get todos (lub funkcje z dowolną nazwą określoną na podstawie pobieranje kolekcji)
 * która wykona (request HTTP) funkcje fetch kótra pobierze listę zadań z następującego endpointu
 * https://jsonplaceholder.typicode.com/todos
 *
 *
 * wywołaj funckje i następnie
 * przeanalizuj response i na jego podstawie wyświetl w dowolny znany Ci sposób ilość zadań
 * zrobionych oraz nie (completed)
 *
 * dodaj blok catch który będzie czuwał gdy coś pójdzie nie tak - na tą chwilę możesz wyświetlić
 * alert z informacją o sytuacji
 *
 * ⭐ policz zrobione i nie zrobione zadania osobno dla każdego usera (na podstawie userId)
 * i wyświetl w znany Ci sposób
 *
 *
 *
 * dokumentacja: https://jsonplaceholder.typicode.com/
 */

/**
 * Zadanie
 *
 * stwórz funkcje o nazwie createTodo która w parametrze przyjmie obiekt o takim kształcie
 * jak pobrane todosy tzn przekazany obiekt musi mieć userId, title oraz pole completed
 *
 * ⭐ walidacja - jeżeli któreś pole nie istnieje powiadom użytkownika alertem
 *
 * wykonaj request HTTP uzywając metody POST do stworzenia nowego rekorkdu w bazie danych
 * request należy wkonać pod ten endpoint: https://jsonplaceholder.typicode.com/todos
 * pamiętaj w requescie musisz
 * przekazać dane przekazane do parametru funkcji oraz następnie zamienić je na format JSON
 * określić content-type
 * wywołaj funckję kilkukrotnie a jej wynik przeanalizuj w devtoolasch
 *
 * dodaj blok catch który będzie czuwał gdy coś pójdzie nie tak - na tą chwilę możesz wyświetlić
 * alert z informacją o sytuacji
 *
 *
 * dokumentacja: https://jsonplaceholder.typicode.com/
 */
