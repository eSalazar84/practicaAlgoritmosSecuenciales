let btnEnv = document.getElementById("btnEnviar");
let base = document.getElementById("datos1");
let altura = document.getElementById("datos2");
let rotuloBase = document.getElementById("base");
let rotuloAltura = document.getElementById("altura");
let btnMas = document.getElementById("btnPlus");
let btnPor = document.getElementById("btnMultip");

rotuloBase.innerHTML = "Indique la base: ";
rotuloAltura.innerHTML = "Indique la altura: ";

/* btnEnv.addEventListener("click", () => {
  let rectangulo: number = base.value * altura.value;
  console.log("El area del rectangulo es de", rectangulo, "cm");
}); */

btnEnv.addEventListener("click", () => {
  console.log(
    "Los numeros que ingresó fueron ",
    base.value,
    " y ",
    altura.value
  );
});

btnMas.addEventListener("click", () => {
  let suma: number = base.value + altura.value;
  console.log("la suma es de ", suma.value);
});

btnPor.addEventListener("click", () => {
  let porPor: number = base.value * altura.value;
  console.log("la multiplicacion es de ", porPor.value);
});
