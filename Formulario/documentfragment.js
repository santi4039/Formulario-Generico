
var paises = [  //array de objetos
{
nombre: "Argentina",
codigo: "ar",
},
{
nombre: "España",
codigo: "es",	
},
{
nombre: "Francia",
codigo: "fr",	
},

];

var enlace = document.createElement("a"); //<a></a>
enlace.textContent = "VOLVER"; //<a>volver</a>
enlace.href = "#"; //<a href="#">volver</a>

document.body.appendChild(enlace);

var selector = document.getElementById('cboPaises');

/*paises.forEach(function(pais){
	var optionAux = document.createElement("option");
	optionAux.value = pais.codigo;
	optionAux.textContent = pais.nombre;

	selector.appendChild(optionAux);

});*/

var frag = document.createDocumentFragment();

paises.forEach(function(pais){
	var optionAux = document.createElement("option");
	optionAux.value = pais.codigo;
	optionAux.textContent = pais.nombre;

	frag.appendChild(optionAux);

});

selector.appendChild(frag);