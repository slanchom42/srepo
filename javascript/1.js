var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// Retorna la suma de los números que son estrictamente mayores que 18
function greaterThan18(elements) {
  var mayor18 = 0
  for ( i = 0; i < elements.length; i++){
    if ( elements[i] > 18){
      mayor18 = mayor18 + elements[i];
    } else {
      console.log("Insertar números menores a 18");
  }
}
return mayor18;
}

document.getElementById("A").innerHTML = greaterThan18(elements);


// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares
function greaterThan18Odd(elements) {

  // Escriviu aquí el vostre codi:
  return 0;
}

document.getElementById("B").innerHTML = greaterThan18Odd(elements);

// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones impares del vector
function greaterThan18OddEvenPositions(elements) {

  // Escriviu aquí el vostre codi:
  return 0;
}


document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);
