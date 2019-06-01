var NombreP, CostoP, Seccion, DetallesP, NombreC, CostoC,DetallesC;

function NuevosD(){


	//Agregar Un Plato al Menú

	db.collection("Menu").doc(NombreP.toUpperCase()).set({
    Seccion: Seccion,
    Costo: CostoP,
    Detalles: DetallesP
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});




	//Agregar Un Plato a Combos

	db.collection("Combos").doc(NombreC.toUpperCase()).set({
    Costo: CostoC,
    Detalles: DetallesC

	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});
}	

function EditarD(){

	var id = Consulta();

	//Editar Menu

	var EditarMenu = db.collection("Menu").doc("");

	// Set the "capital" field of the city 'DC'
	return EditarMenu.update({
	    capital: true
	})
	.then(function() {
	    console.log("Document successfully updated!");
	})
	.catch(function(error) {
	    // The document probably doesn't exist.
	    console.error("Error updating document: ", error);
	});
	test.firestore.js

	//Editar Combos

	var EditarCombo = db.collection("cities").doc("DC");

	// Set the "capital" field of the city 'DC'
	return EditarCombo.update({
	    
	})
	.then(function() {
	    console.log("Document successfully updated!");
	})
	.catch(function(error) {
	    // The document probably doesn't exist.
	    console.error("Error updating document: ", error);
	});


}

function  EliminarD(){
	// body...
}

function ConsultaE(){

	var docRef = db.collection(Seccion).doc(); 
	docRef.get().then(function(doc) {
	    if (doc.exists) {
	        doc.data();
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});

}

function ConsultaWeb(){
	var MenuT;
	db.collection("Menu").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        MenuT = doc.data();
        console.log(doc.id, " => ", doc.data());
        return MenuT;
    });
});


}

function CargarTablas(){

	var TDesayuno = document.getElementById('TDesayuno');
	var TAlmuerzo = document.getElementById('TAlmuerzo');
	var TBebidas = document.getElementById('TBebidas');
	var TPostres = document.getElementById('TPostres');
	var Menu = document.getElementById('MTotal');


	var doc = ConsultaWeb();
	console.log("hola");
	


	tr = document.createElement("tr");
	th = document.createElement("th");
	tdn = document.createElement("td");
	tdd = document.createElement("td");
	tdc = document.createElement("td");


}