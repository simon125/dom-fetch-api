/**
 * Zadanie
 *
 * Stwórz funkcje która przyjmie w parametrze liczbę i zwróci promise
 * niech ta promisa w zależności od parametru przekazanego do funkcji
 * się zresolvuje lub zrejectuje
 *
 * niech promisa się zresolvuje gdy liczba przekazana w parametrze będzie parzysta
 * w przeciwnym przypadku niech promisa się zrejectuje
 *
 *
 * wywołaj funckje kilka razy z różymi liczbami
 * dołącz do wywołania bloki then i catch z console logami które wyświetlą to co funckje resolve/reject
 * zwróciły
 *
 */

const numberBasedPromise = (number) =>
  new Promise((res, rej) => {
    if (number % 2) {
      rej(`${number} to jest liczba nie parzysta`);
    } else {
      res(`${number} to jest liczba parzysta`);
    }
  });

numberBasedPromise(2).then(console.log);

numberBasedPromise(5).then(console.log).catch(console.log);
