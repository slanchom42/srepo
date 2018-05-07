var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// Retorna la suma de los números que son estrictamente mayores que 18
function greaterThan18(elements) {
  var mayor18 = 0
  for ( i = 0; i < elements.length; i++){
    if ( elements[i] > 18){
      mayor18 = mayor18 + elements[i];
    }
}
return mayor18;
}

document.getElementById("A").innerHTML = greaterThan18(elements);


// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares
function greaterThan18Odd(elements) {
  var más18par = 0
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
        más18par = más18par + elements[i];
      }
    }
  }
return más18par;
}


document.getElementById("B").innerHTML = greaterThan18Odd(elements);

// Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones impares del vector
function greaterThan18OddEvenPositions(elements) {

  // Escriviu aquí el vostre codi:
  var más18parposimpar = 0
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
        if (i % 2 == 1){
        más18parposimpar = más18parposimpar + elements[i];
      }
    }
    }
    }
    return más18parposimpar;
    }


document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);




// Retorna la multiplicación de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones pares del vector
function Multiplicación(elements) {

  // Escriviu aquí el vostre codi:
  var mult = 1
  for ( i = 0; i < elements.length; i ++){
    if ( elements[i] > 18){
      if (elements[i] % 2 == 0){
        if (i % 2 == 0){
        mult = mult * elements[i];
      }
    }
    }
    }
    return mult;
    }


document.getElementById("D").innerHTML = Multiplicación(elements);
