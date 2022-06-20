
class calculadora{

constructor(){

}

sumar(num1,num2){
	return parseInt(num1) + parseInt(num2);
}
 restar(num1,num2){
	return parseInt(num1) - parseInt(num2);
}
 multiplicar(num1,num2){
	return parseInt(num1) * parseInt(num2);
}
 dividir(num1,num2){
	return parseInt(num1) / parseInt(num2);
}
potencia(num1,num2){
	return num1**num2;
}

raiz(num1){
	return parseInt(Math.sqrt(num1));
}

raizcubica(num1){

	return parseInt(Math.cbrt(num1));
}

}

const calculator = new calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3:multipicacion, 4: division, 5: potencia, 6: raiz, 7: raiz cubica");

if(operacion == 1){
	let num1 = prompt("ingrese numero 1");
	let num2 = prompt("ingrese numero 2");
	let resultado = calculator.sumar(num1,num2);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 2){
	let num1 = prompt("ingrese numero 1");
	let num2 = prompt("ingrese numero 2");
	let resultado = calculator.restar(num1,num2);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 3){
	let num1 = prompt("ingrese numero 1");
	let num2 = prompt("ingrese numero 2");
	let resultado = calculator.multiplicar(num1,num2);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 4){
	let num1 = prompt("ingrese numero 1");
	let num2 = prompt("ingrese numero 2");
	let resultado = calculator.dividir(num1,num2);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 5){
	let num1 = prompt("ingrese numero base de la potencia");
	let num2 = prompt("ingrese exponente");
	let resultado = calculator.potencia(num1,num2);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 6){
	let num1 = prompt("ingrese numero para raiz cuadrada");
	let resultado = calculator.raiz(num1);
	alert(`Resultado: ${resultado}`);
}

if(operacion == 7){
	let num1 = prompt("ingrese numero para raiz cubica");
	let resultado = calculator.raizcubica(num1);
	alert(`Resultado: ${resultado}`);
}


