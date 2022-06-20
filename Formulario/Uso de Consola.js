
 const materias = {

 		fisica: [70,6,4,"fisica"],
 		quimica: [60,7,4,"quimica"],
 		matematica: [90,7,2,"matematica"],
 		logica: [20,3,4,"logica"]
 }

const aprobo = ()=>{

	for(materia in materias){

		let asistencias = materias[materia][0];
		let promedio =  materias[materia][1];
		let trabajos = materias[materia][2];

		console.log(materias[materia][3]);

		if (asistencias >= 90){
			
			console.log("%cAsistencias en Orden","color:green");
		}else{
			
			console.log("%cAsistencias flojas","color:red");
		}

		if (promedio >= 7){
			
			console.log("%cPromedio en Orden","color:green");
		}else{
			
			console.log("%cPromedio flojo","color:red");
		}

		if (trabajos >= 3){
			
			console.log("%cTrabajos en Orden","color:green");
		}else{
			
			console.log("%cTrabajos flojos","color:red");
		}



	}

}

aprobo();