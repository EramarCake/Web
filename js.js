var NombreP, CostoP, Seccion, DetallesP, NombreC, CostoC,DetallesC,Protocolo,Datos,CostoPequeño,CostoMediano,CostoGrande,Menu = new Array(100);
var i = 0;
function NuevosD(){


	ConsultaDatos();

	NombreP = document.getElementById('AGMNombre').value.toUpperCase().toString();
	Seccion = document.getElementById('AGMSeccion').value.toString();
	CostoP = document.getElementById('AGMCosto').value.toString();
	DetallesP = document.getElementById('AGMDetalles').value.toString();
	NombreC = document.getElementById('AGMNombreC').value.toUpperCase().toString();
	CostoC = document.getElementById('AGMCostoC').value.toString();
	DetallesC = document.getElementById('AGMDetallesC').value.toString();
	if (Seccion === "Pizzas") {
	CostoPequeño =document.getElementById('AGMPizzas1').value.toString();
	CostoMediano =document.getElementById('AGMPizzas2').value.toString();
	CostoGrande =document.getElementById('AGMPizzas3').value.toString();
		Datos = [NombreP,CostoPequeño,CostoMediano,CostoGrande, DetallesP,Seccion];
	}else{
		Datos = [NombreP,CostoP, DetallesP,Seccion];
	}
		
	
	//Agregar Un Plato al Menú
	if (NombreP != "") { 
	var docRef = db.collection("Menu").doc(NombreP);

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		

	        console.log("Este Producto ya existe");
	    } else {
	    	
	    	docRef.set({

					 	Datos

					})
					.then(function(docRef) {
					    alert("Nuevo Elemento agregado",NombreP);
					})
					.catch(function(error) {
					    alert("Error adding document: ", error);
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
		Seccion = "Combos";
		NombreC = document.getElementById('AGMNombreC').value.toUpperCase();
		CostoC = document.getElementById('AGMCostoC').value;
		DetallesC = document.getElementById('AGMDetallesC').value;
		var docRef = db.collection("Menu").doc(NombreC);
		docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		

	        alert("Este Producto ya existe");
	    } else {

	    	Datos = [NombreC,CostoC,DetallesC,Seccion];
	    	Menu = Datos;
	    	docRef.set({

					 	Datos

					})
					.then(function(docRef) {
					    alert("Nuevo Elemento agregado",NombreC);
					})
					.catch(function(error) {
					    alert("Error adding document: ", error);
					});
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	}
	


function VerificarM() {
		var DatosV;
	 var NombreP = document.getElementById('AGMNombreE').value.toUpperCase().toString();
		 docRef = db.collection("Menu").doc(NombreP);
		 docRef.get().then(function(doc) {
    if (doc.exists) {
        DatosV  = doc.data();
        console.log(DatosV);
        if (!(DatosV === undefined)) {
        	if ((document.getElementById('AGMSeccionE').value.toString() === "Pizzas") || (DatosV.Datos[5] === "Pizzas")) {
        		document.getElementById('AGMSeccionE').value = DatosV.Datos[5];
				document.getElementById('AGMEPizzas1').value = DatosV.Datos[1];
				document.getElementById('AGMEPizzas2').value = DatosV.Datos[2];
				document.getElementById('AGMEPizzas3').value = DatosV.Datos[3];
				document.getElementById('AGMDetallesE').value = DatosV.Datos[4];
				Pizzas();
        	} else{
	document.getElementById('AGMSeccionE').value = DatosV.Datos[3];
	document.getElementById('AGMCostoE').value = DatosV.Datos[1];
	document.getElementById('AGMDetallesE').value = DatosV.Datos[2];
		}
	}
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
	
}

function VerificarC() {
	 var DatosV;
	 var NombreC = document.getElementById('AGMNombreEC').value.toUpperCase().toString();
		 docRef = db.collection("Menu").doc(NombreC);
		 docRef.get().then(function(doc) {
    if (doc.exists) {
        DatosV  = doc.data();
        console.log(DatosV);
        if (!(DatosV === undefined)) {
	document.getElementById('AGMCostoEC').value = DatosV.Datos[1];
	document.getElementById('AGMDetallesEC').value = DatosV.Datos[2];
	}
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
	
}

function Limpiar() {
	document.getElementById('AGMNombre').value="";
	document.getElementById('AGMSeccion').value="";
	document.getElementById('AGMCosto').value="";
	document.getElementById('AGMDetalles').value="";
	document.getElementById('AGMNombreC').value="";
	document.getElementById('AGMCostoC').value="";
	document.getElementById('AGMDetallesC').value="";
	document.getElementById('AGMPizzas1').value="";
	document.getElementById('AGMPizzas2').value="";
	document.getElementById('AGMPizzas3').value="";
	document.getElementById('AGMNombreE').value="";
	document.getElementById('AGMSeccionE').value="";
	document.getElementById('AGMCostoE').value="";
	document.getElementById('AGMDetallesE').value="";
	document.getElementById('AGMNombreEC').value="";
	document.getElementById('AGMCostoEC').value="";
	document.getElementById('AGMDetallesEC').value;
	document.getElementById('AGMEPizzas1').value="";
	document.getElementById('AGMEPizzas2').value="";
	document.getElementById('AGMEPizzas3').value="";
}

function EditarD(){


	//Editar Menu


	



	NombreP = document.getElementById('AGMNombreE').value.toUpperCase().toString();
	if (!(NombreP === "")) {
		 docRef = db.collection("Menu").doc(NombreP);
		 }


	Seccion = document.getElementById('AGMSeccionE').value.toString();
	CostoP = document.getElementById('AGMCostoE').value.toString();
	DetallesP = document.getElementById('AGMDetallesE').value.toString();
	NombreC = document.getElementById('AGMNombreEC').value.toUpperCase().toString();
	CostoC = document.getElementById('AGMCostoEC').value.toString();
	DetallesC = " "
	if (document.getElementById('AGMSeccionE').value.toString() === "Pizzas") {
	CostoPequeño =document.getElementById('AGMEPizzas1').value.toString();
	CostoMediano =document.getElementById('AGMEPizzas2').value.toString();
	CostoGrande =document.getElementById('AGMEPizzas3').value.toString();
		Datos = [NombreP,CostoPequeño,CostoMediano,CostoGrande, DetallesP,Seccion];
	}else{
		Datos = [NombreP,CostoP, DetallesP,Seccion];
	}
	

	// Set the "capital" field of the city 'DC'
	if (NombreP != "") {

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		DatosV = doc.data();
	    		console.log(DatosV);
	    		docRef.set({
					 Datos		

					})
					.then(function(docRef) {
					   alert("Datos Actualizados",NombreP);
					})
					.catch(function(error) {
					    alert("Error adding document: ", error);
					});

	        console.log("Datos Actualizados", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	        alert("No se encontró el Producto!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	}
 


	if (NombreC != "") {

	Datos = [NombreC,CostoC, DetallesC,"Combos"];

	var docRef = db.collection("Menu").doc(NombreC);

	docRef.get().then(function(doc) {
	    if (doc.exists) {
	    		docRef.set({
					 Datos		

					})
					.then(function(docRef) {
					    alert("Datos Actualizados",NombreC);
					})
					.catch(function(error) {
					    alert("Error adding document: ", error);
					});

	        console.log("Datos Actualizados", doc.data());
	    } else {
	        // doc.data() will be undefined in this case
	      	alert("No se encontró el Producto!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
	
 
	}
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
	    alert("Elemento elminiado!");
	}).catch(function(error) {
	    console.error("Error removing document: ", error);
	});
	}
	if (NombreC != "") {
	db.collection("Menu").doc(NombreC).delete().then(function() {
	    alert("Elemento elminiado!");
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




function CargarTablasD(){
	

	var Tabla = document.getElementById("TDesayuno");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Desayunos") {	
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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


function CargarTablasCA(){
	

	var Tabla = document.getElementById("TAlmuerzo");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Almuerzos") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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
var control = document.getElementById("aComidas").onclick = "";
}

function CargarTablasP(){
	

	var Tabla = document.getElementById("TPostres");
	
	for ( a = 0; a < i ; a++) {
	if (Menu[a].Datos[3] == "Postres") {		
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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

function CargarTablasPZ(){
	


	var Tabla = document.getElementById("TPizzas");
	
	for ( a = 0; a < 200; a++) {
	if (!(Menu[a] === undefined)) {
	if (Menu[a].Datos[5] == "Pizzas") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[4]);

var	tr = document.createElement("tr");
	var bt = document.createElement("button");
	bt.innerHTML="ver";
	bt.className="btn btn-success";
	bt.setAttribute("data-target","#Info");
	bt.setAttribute("data-toggle","modal");
	bt.setAttribute("onclick","MostrarInfo(this.parentNode.parentNode,this)");
	bt.class="aInfo";
	tr.setAttribute("id",Menu[a].Datos[0]);	
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(bt);
	tdn.appendChild(textn);
	tdd.appendChild(textd);
	
	Tabla.appendChild(tr);
	tr.appendChild(th);
	tr.appendChild(tdn);
	tr.appendChild(tdd);
	
	
	
	}
	}
}

var control = document.getElementById("aPizzas").onclick = "";

}
function MostrarInfo(Producto,Control) {
		console.log(Producto)
		var Tabla = document.getElementById("TInfo");
		

	for ( var a = 0; a < 100 ; a++) {
	if (!(Menu[a] === undefined)){
	if (Menu[a].Datos[0] === Producto.id) {
var x = 0;		
		for (var j = 0; j < 3; j++) {
var k = ["Pequeña","Mediana","Grande"];

x++;
var textn = document.createTextNode("Pizza " +  k[j] + " " + Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[4]);
var textc = document.createTextNode(Menu[a].Datos[x]);
var	tr = document.createElement("tr");
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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
}
	
	


}
Control.onclick="";
}
function CargarTablasA(){
	


	var Tabla = document.getElementById("TAlmuerzo");
	
	for ( a = 0; a < i ; a++) {
	
	if (Menu[a].Datos[3] == "Almuerzos") {
var textn = document.createTextNode(Menu[a].Datos[0]);
var textd = document.createTextNode(Menu[a].Datos[2]);
var textc = document.createTextNode(Menu[a].Datos[1]);
var	tr = document.createElement("tr");
	tr.setAttribute("id",Menu[a].Datos[0]);
	tr.setAttribute("onclick","AñadirCarrito(this)");
var	th = document.createElement("th");
var ticono = document.createElement("i");
var	tdn = document.createElement("td");
var	tdd = document.createElement("td");
var	tdc = document.createElement("td");
	ticono.setAttribute('class','material-icons');
	ticono.innerHTML = "add_circle_outline";
	th.appendChild(ticono);
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
var control = document.getElementById("aAlmuerzos").onclick = "";

}
function Pizzas() {
	if (document.getElementsByTagName('select')[0].value === "Pizzas") {
	document.getElementById('CP').hidden=true;
	document.getElementById('PizzasC').hidden=false;
	}else{
		document.getElementById('CP').hidden=false;
	document.getElementById('PizzasC').hidden=true;
	}
	if (document.getElementsByTagName('select')[1].value === "Pizzas") {
	document.getElementById('CPE').hidden=true;
	document.getElementById('PizzasCE').hidden=false;
	}else{
		document.getElementById('CPE').hidden=false;
	document.getElementById('PizzasCE').hidden=true;
	}
}
var s;
var a;
var controlP = false;

	function AñadirCarrito(Producto){
		
		s = Producto.children[0].children[0].innerHTML.toString();
		a = Producto;
		if (s == "clear") {
			Producto.children[0].children[0].innerHTML = "add_circle_outline";
			Producto.className ="";
			if (document.getElementById("MPedidoss").children[0] === undefined) {
		controlP = false;	
		}

		}else{
		Producto.children[0].children[0].innerHTML = "clear";
		console.log(Producto);
		Producto.className ="AGG";
			controlP = true;
		}
		
	}
		var Cumple = true;
	function Comprar (numero){
		var Tabla = document.getElementById('MPedidoss');
		if (!(Tabla.children[0] === undefined)) {
		for (var v = 0; v < 20; v++) {
			
				
				
					
				if (!(Tabla.children[0] === undefined)) {		
				  Tabla.removeChild(Tabla.firstChild);
				  }
					
		}
		}
		var Listado = new Array(100);
		var TablaD = document.getElementById('TDesayuno');
		var TablaA = document.getElementById('TAlmuerzo');
		var TablaPZ = document.getElementById('TInfo');
		var TablaB = document.getElementById('TBebidas');
		var TablaP = document.getElementById('TPostres');
		var TablaC = document.getElementById('TCombos');

        var m=0;
		 if (controlP === false) {
		 	alert("Agregue primero productos al Menú");
		 } else{
		for (var i = 0; i < 100; i++) {

			if (TablaPZ.children[i] === undefined) {
					
			}else{
				if (TablaPZ.children[i].className === "AGG") {
					Listado[m] = TablaPZ.children[i].children[1].innerHTML;
					
					m++;
				}
					
			}
			
			if (TablaD.children[i] === undefined) {
					
			}else{
				if (TablaD.children[i].className === "AGG") {
					Listado[m] = TablaD.children[i].id;
					
					m++;
				}
					
			}
			if (TablaA.children[i] === undefined) {
					
			} else{
				if (TablaA.children[i].className === "AGG") {
					Listado[m] = TablaA.children[i].id;
					

					m++;
				}
					
			}
			if (TablaB.children[i] === undefined) {
			
			}else{
				if (TablaB.children[i].className === "AGG") {
					Listado[m] = TablaB.children[i].id;
										

					m++;
				}
					
			}
			if (TablaP.children[i] === undefined) {
			
			}else{
				if (TablaP.children[i].className === "AGG") {
					Listado[m] = TablaP.children[i].id;
					

					m++;					
				}
					
			}
			if (TablaC.children[i] === undefined) {
			
			}else{
				if (TablaC.children[i].className === "AGG") {
					Listado[m] = TablaC.children[i].id;
					

					m++;
					}
					
				}
				}
			}
				
		

	s = -1;
	
	for (var f = 0; f < 10 ; f++ ) {
			
			 
		
	for ( a = 0; a < 100 ; a++) {
		
		if (!(undefined === Menu[a]) && (!(Listado[f] === undefined))) {
			console.log(Listado[f]);
       
         		 if (Listado[f].split(' ')[2] === Menu[a].Datos[0]) {
					

	if ((Tabla)) {
		
						
				if (!(Listado[f] === undefined)) {
					if (!(Menu[a].Datos[5] === undefined)) {
					var textn = document.createTextNode(Listado[f]);
					if (!(Listado[f].indexOf("Pequeña") === -1)){
						var x = 1;

					}
				    if (!(Listado[f].indexOf("Mediana") === -1)) {
						var x = 2;
					}
				    if (!(Listado[f].indexOf("Grande") === -1)) {
						var x = 3;
					}
					var textc = document.createTextNode(Menu[a].Datos[x]);
					var text = document.createElement("input");
						text.type = "number";
						text.style.width = "8vh";
						text.className = "cantidad"
						var	tr = document.createElement("tr");
						
						var	tdn = document.createElement("td");
						var	tdd = document.createElement("td");
						var	tdc = document.createElement("td");
							tdn.appendChild(textn);
							tdd.appendChild(text);
							tdc.appendChild(textc);
							Tabla.appendChild(tr);
							
							tr.appendChild(tdn);
							tr.appendChild(tdd);
							tr.appendChild(tdc);	
					
				s++;
				console.log(s);
				}else{
				var textn = Menu[a].Datos[0];
				var textc = Menu[a].Datos[1];	
				var text = document.createElement("input");
				text.type = "number";
				text.style.width = "5vh";
				text.className = "cantidad"
				var	tr = document.createElement("tr");
				
				var	tdn = document.createElement("td");
				var	tdd = document.createElement("td");
				var	tdc = document.createElement("td");
					tdn.appendChild(textn);
					tdd.appendChild(text);
					tdc.appendChild(textc);
					Tabla.appendChild(tr);
					
					tr.appendChild(tdn);
					tr.appendChild(tdd);
					tr.appendChild(tdc);
				}
		
												
													}
		}
			}

  				}		

 	     	
 	   
		 }
		
		}

		
		
	}
			
var Productos =" ";
		function Pagar(Opcion) {

			var CostoT = 0;
			Tabla = document.getElementById("MPedidoss");
			Encargados = document.getElementById("MEncargados");

			if (!(Encargados.children[0] === undefined)) {
			for (var v = 0; v < 20; v++) {
				
					
					
						
					if (!(Encargados.children[0] === undefined)) {		
					  Encargados.removeChild(Encargados.firstChild);
					  }
						
			}
			}
			
			for (var i = 0; i < 30; i++) {
			if (!(Tabla.children[i] === undefined )) {
		 		for (var a = 0; a <100 ; a++) {
				if ((Tabla.children[i].children[0].innerHTML.split(' ')[0] === "Pizza") && (!(Menu[a] === undefined))) {	
					console.log("asd");
				
					if (!(Menu[a] === undefined) && (Menu[a].Datos[0] === Tabla.children[i].children[0].innerHTML.split(' ')[2])) {
						var Cantidad= document.getElementsByClassName("cantidad");
							if (!(Cantidad[s] === undefined)) {
									Menu[a].Datos[5] = Cantidad[i].value;

									Productos = Productos + Menu[a].Datos[5] + " " + Menu[a].Datos[0]+", ";
									if (Tabla.children[i].children[0].innerHTML.split(' ')[1] === "Pequeña") {
									CostoP = Number(Menu[a].Datos[1]);
									CostoT = CostoT + Number(Menu[a].Datos[5])*CostoP ;
								} if (Tabla.children[i].children[0].innerHTML.split(' ')[1] === "Mediana"){
									 CostoP = Number(Menu[a].Datos[2]);
									CostoT = CostoT + Number(Menu[a].Datos[5])*CostoP ;
									
								} if (Tabla.children[i].children[0].innerHTML.split(' ')[1] === "Grande") {
									CostoP = Number(Menu[a].Datos[3]);
									CostoT = CostoT + Number(Menu[a].Datos[5])*CostoP ;
									
								}
									console.log(Productos);
								}
								
							
							document.getElementById('CostoT').innerHTML = CostoT*1000;
			
				var textn = document.createTextNode(Tabla.children[i].children[0].innerHTML);
				var textc = document.createTextNode(Tabla.children[i].children[2].innerHTML);
				var text = document.createTextNode(Menu[a].Datos[5]);
				var	tr = document.createElement("tr");
				
				var	tdn = document.createElement("td");
				var	tdd = document.createElement("td");
				var	tdc = document.createElement("td");
					tdn.appendChild(textn);
					tdd.appendChild(text);
					tdc.appendChild(textc);
					Encargados.appendChild(tr);
					
					tr.appendChild(tdn);
					tr.appendChild(tdd);
					tr.appendChild(tdc);
			console.log(Tabla.children[i].children[1].children[0].value);
			  }
							} 
				}
			  
			  
					if (!(Tabla.children[i].children[0].innerHTML.split(' ')[0] === "Pizza")) {

							for (var a = 0; a <100 ; a++) {
								if (!(Menu[a] === undefined) && (Menu[a].Datos[0] === Tabla.children[i].children[0].innerHTML)) {
									var Cantidad= document.getElementsByClassName("cantidad");
										if (!(Cantidad[s] === undefined)) {
												Menu[a].Datos[4] = Cantidad[i].value;
												Productos = Productos + Menu[a].Datos[4] + " " + Menu[a].Datos[0]+", ";
												CostoT = CostoT + Number(Menu[a].Datos[4])*Number(Menu[a].Datos[1]) ;
												console.log(Productos);
										} 
										
										document.getElementById('CostoT').innerHTML = CostoT*1000;
								
							var textn = document.createTextNode(Menu[a].Datos[0]);
							var textc = document.createTextNode(Menu[a].Datos[1]);
							var text = document.createTextNode(Menu[a].Datos[4]);
							var	tr = document.createElement("tr");
							
							var	tdn = document.createElement("td");
							var	tdd = document.createElement("td");
							var	tdc = document.createElement("td");
								tdn.appendChild(textn);
								tdd.appendChild(text);
								tdc.appendChild(textc);
								Encargados.appendChild(tr);
								
								tr.appendChild(tdn);
								tr.appendChild(tdd);
								tr.appendChild(tdc);
						console.log(Tabla.children[i].children[1].children[0].value);
						  
							}
						  }
						  }
						   }
				}
			} 
		


		function Enviar(){
			
				
				
			
	    	var NReferencia="";
	    	var TipoP = "Punto de Venta";
	    	var NombreB="";  
	    	var NombreCom= document.getElementById('NC').value;
	    	var NumeroContacto= document.getElementById('NDC').value;
	    	var DiaT =String(document.getElementById('DiaT').value);
	    	if (!(document.getElementById('NReferencia0').value === undefined) &&(!(document.getElementById('NReferencia0').value === ""))) {
	    			NReferencia = document.getElementById('NReferencia0').value;
	    			TipoP = "Pago Movil";
	    			NombreB = String(document.getElementById('Nbanco0').value);
	    			NombreCom = String(document.getElementById('NC0').value);
	    			NumeroContacto = String(document.getElementById('NDC0').value);
	    			DiaT = String(document.getElementById('DiaT0').value); 
	    	}else if(!(document.getElementById('NReferencia1').value === undefined) && !(document.getElementById('NReferencia0').value === "")) {
	    			NReferencia = String(document.getElementById('NReferencia1').value);
	    			TipoP = "Transferencia";
	    			NombreB = String(document.getElementById('Nbanco1').value);
	    			NombreCom =String( document.getElementById('NC1').value);
	    			NumeroContacto = String(document.getElementById('NDC1').value);
	    			DiaT = String(document.getElementById('DiaT1').value);
	    	}	
				 db.collection("Pedidos").add({
					    Productos: Productos,
					 	Costo: Number(CostoT.innerText),
					 	NReferencia: NReferencia,
					 	TipoP: TipoP,
					 	NombreB :NombreB,
					 	NombreCom : NombreCom ,
					 	NumeroContacto : NumeroContacto,
					 	DiaT : DiaT,
					})
					.then(function(docRef) {
					    console.log("Document written with ID: ", docRef.id);
					    alert("Tu pedido se ha registrado exitosamente a tu nombre.")
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});
					db.collection("Menu").doc("Activar")({
					    Activar : "Activar",
					})
					.then(function(docRef) {
					    console.log("Document written with ID: ", docRef.id);
					    alert("Tu pedido se ha registrado exitosamente a tu nombre.")
					})
					.catch(function(error) {
					    console.error("Error adding document: ", error);
					});


	
			}
	var Pedidos = new Array(100);
			function ImprimirPedidos(){

					var a = 0;
					db.collection("Menu").doc("Activar") //utilizar la llamada no para realizar la opracion sino como activador del codigo siguiente.
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());

    				 if (!(document.getElementById('TablaPedidos').children[0] ===undefined)) {
    				 		for (var c = 0; c < 100; c++) {
		
								if (!(document.getElementById('TablaPedidos').children[0]=== undefined)){

									document.getElementById('TablaPedidos').removeChild(document.getElementById('TablaPedidos').firstChild);

								}
							}
    				 }
					db.collection("Pedidos").get().then(function(querySnapshot) {
				    querySnapshot.forEach(function(doc) {
				        // doc.data() is never undefined for query doc snapshots
				        
				        Pedidos[a] = doc.data();
				        console.log(Pedidos);
				        

						if (!(Pedidos[a] === undefined)) {
				var Tabla = document.getElementById('TablaPedidos');		
				var texta = document.createTextNode(Pedidos[a].Costo);
				var textb = document.createTextNode(Pedidos[a].TipoP);
				var textc = document.createTextNode(Pedidos[a].DiaT);
				var textf = document.createTextNode(Pedidos[a].NombreCom);
				var	tdi = document.createElement("button");
				var	tdg = document.createElement("td");
				var textg = document.createTextNode("Ver Detalles");
				tdg.appendChild(tdi);
				tdi.appendChild(textg);
				tdi.className ='class="btn btn-primary"';
				tdi.type ="button";
				tdi.setAttribute("data-toggle","modal");
				tdi.setAttribute("data-target","#informe");
				var	tr = document.createElement("tr");
				
				var	tda = document.createElement("td");
				var	tdb = document.createElement("td");
				var	tdc = document.createElement("td");
				var	tdf = document.createElement("td");
				var	tdg = document.createElement("td");
					tda.appendChild(texta);
					tdb.appendChild(textb);
					tdc.appendChild(textc);
					tdf.appendChild(textf);
					Tabla.appendChild(tr);
					
					tr.appendChild(tdc);
					tr.appendChild(tdf);
					tr.appendChild(tdb);
					tr.appendChild(tda);
					tr.appendChild(tdi);
				
						a++;	
					}

				    });
				});

		
		

});


			}


