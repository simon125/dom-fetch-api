/**
 * Zadanie
 * Twoim zadaniem jest storzenie funkcji "importantCalculcations"
 * która nie będzie nic liczyć co prawda ale będzie symulować
 * akcje asynchorniczną która będzie musiała wykorzystać Promise
 * żeby obłużyć moment w którym 'kalkulacje' się powiodą
 * moment w którym nie powiodą i sam koniec
 *
 * w tym celu niech funkcja zwraca nową Promisę
 * która w środku będzie miała setTimeout ustawiony np na 3 sekundy
 *
 * poinformuj użytkownika np console.logiem że akcja się zaczęłą
 * następnie wylosuj liczbę od 0 do 1 (wykorzystaj obiekt Math)
 * jeżeli wylosowana wartość będzie większa niż 0.5 wywołaj funkcję resolve
 * jeżeli wylosowana wartość będzie mniejsza lub równa niż 0.5 wywołaj funkcję reject
 *
 * do funckji resolve i reject przekaż jakiś argument np wiadomość w stringu
 * i następnie wykonsoluj te wiadomości odpowiednio w bloku catch i then
 *
 * na koniec użyj bloku finally do poinformowania usera że proces się zakończył
 */
