var NombreP, CostoP, Seccion, DetallesP, NombreC, CostoC,DetallesC,Protocolo,Datos,Menu = new Array(100);
var i = 0;
function NuevosD(){


	ConsultaDatos();

	NombreP = document.getElementById('AGMNombre').value.toUpperCase().toString();
	Seccion = document.getElementById('AGMSeccion').value.toString();
	CostoP = document.getElementById('AGMCosto').value.toString();
	DetallesP = document.getElementById('AGMDetalles').value.toString();


	
	//Agregar Un Plato al Menú
	if (NombreP != "") { 
	var docRef = db.collection("Menu").doc(NombreP);

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		

	        console.log("Este Producto ya existe");
	    } else {
	    	Datos = [NombreP,CostoP, DetallesP,Seccion];
	    	docRef.set({

					 	Datos

					})
					.then(function(docRef) {
					    console.log("Nuevo Elemento agregado",NombreP);
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});

}	

 
}
function NuevoCombo(){
		NombreC = document.getElementById('AGMNombreC').value.toUpperCase().toString();
	CostoC = document.getElementById('AGMCostoC').value.toString();
	DetallesC = document.getElementById('AGMDetallesC').value.toString();
		Seccion = "Combos";
		var docRef = db.collection("Menu").doc(NombreC);
		docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		

	        console.log("Este Producto ya existe");
	    } else {
	    	Datos = [NombreC,CostoC,DetallesC,Seccion];
	    	Menu = Datos;
	    	docRef.set({

					 	Datos

					})
					.then(function(docRef) {
					    console.log("Nuevo Elemento agregado",NombreC);
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	}
	


function EditarD(){

	//Editar Menu


	
	NombreP = document.getElementById('AGMNombreE').value.toUpperCase().toString();
	Seccion = document.getElementById('AGMSeccionE').value.toString();
	CostoP = document.getElementById('AGMCostoE').value.toString();
	DetallesP = document.getElementById('AGMDetallesE').value.toString();

	
	// Set the "capital" field of the city 'DC'
	if (NombreP != "") {

	var docRef = db.collection("Menu").doc(NombreP);

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		Datos = [NombreP,CostoP, DetallesP,Seccion];
	    		docRef.set({
					 Datos		

					})
					.then(function(docRef) {
					    console.log("Datos Actualizados",NombreP);
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});

	        console.log("Datos Actualizados", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	}
 

 }

 function EditarC(){
 		NombreC = document.getElementById('AGMNombreEC').value.toUpperCase().toString();
	CostoC = document.getElementById('AGMCostoEC').value.toString();
	DetallesC = document.getElementById('AGMDetallesEC').value.toString();

 	Datos = [NombreC,CostoC, DetallesC,"Combos"];

	var docRef = db.collection("Menu").doc(NombreC);

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		docRef.set({
					 Datos		

					})
					.then(function(docRef) {
					    console.log("Datos Actualizados",NombreC);
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});

	        console.log("Datos Actualizados", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	
 }

function  EliminarD(){
	NombreP = document.getElementById('AGMNombreE').value.toUpperCase().toString();
	Seccion = document.getElementById('AGMSeccionE').value.toString();
	CostoP = document.getElementById('AGMCostoE').value.toString();
	DetallesP = document.getElementById('AGMDetallesEC').value.toString();
	NombreC = document.getElementById('AGMNombreEC').value.toUpperCase().toString();
	CostoC = document.getElementById('AGMCostoEC').value.toString();
	DetallesC = document.getElementById('AGMDetallesEC').value.toString();
	if (NombreP != "") {
	db.collection("Menu").doc(NombreP).delete().then(function() {
	    console.log("Document successfully deleted!");
	}).catch(function(error) {
	    console.error("Error removing document: ", error);
	});
	}
	if (NombreC != "") {
	db.collection("Menu").doc(NombreC).delete().then(function() {
	    console.log("Document successfully deleted!");
	}).catch(function(error) {
	    console.error("Error removing document: ", error);
	});
	}
}

function ConsultaDatos(){
 
	db.collection("Menu").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	    	
	    	Menu[i] = doc.data();
	    	
	        console.log(doc.data());
	        i++;
	        
	    });
	});
	
}

function Recorrer(item, index){


	console.log(item," => ",index);
}


function CargarTablasD(){
	

	var Tabla = document.getElementById("TDesayuno");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Desayunos") {	
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
var	th = document.createElement("th");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	tdc.appendChild(textc);
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	tr.appendChild(tdc);

	}
	}
var control = document.getElementById("aDesayuno").onclick = "";

}

function CargarTablasA(){
	

	var Tabla = document.getElementById("TAlmuerzo");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Almuerzos") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
var	th = document.createElement("th");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	tdc.appendChild(textc);
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	tr.appendChild(tdc);
	}
}
var control = document.getElementById("aAlmuerzo").onclick = "";
}

function CargarTablasP(){
	

	var Tabla = document.getElementById("TPostres");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Postres") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
var	th = document.createElement("th");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	tdc.appendChild(textc);
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	tr.appendChild(tdc);

	}
}
var control = document.getElementById("aPostres").onclick = "";

}
function CargarTablasB(){
	


	var Tabla = document.getElementById("TBebidas");
	
	for ( a = 0; a < i ; a++) {
	
	if (Menu[a].Datos[3] == "Bebidas") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
var	th = document.createElement("th");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	tdc.appendChild(textc);
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	tr.appendChild(tdc);
	
	
	}
}
var control = document.getElementById("aBebidas").onclick = "";

}

function CargarTablasC(){
	


	var Tabla = document.getElementById("TCombos");
	
	for ( a = 0; a < i ; a++) {
	
	if (Menu[a].Datos[3] == "Combos") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
var	th = document.createElement("th");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	tdc.appendChild(textc);
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	tr.appendChild(tdc);
	
	
	}
}
var control = document.getElementById("aCombos").onclick = "";

}