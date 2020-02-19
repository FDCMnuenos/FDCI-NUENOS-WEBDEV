/*Part 1*/
//declare array for profile
	var person = [];

function profile(e) {
	//to stop form from resubmitting
	e.preventDefault(); 

	//Objects - Keys -Values
	var pProfile = {
		name: document.getElementById('name').value,
		age: document.getElementById('age').value
	}

	//Validations for Name and Age
	if (!/^[a-zA-Z]*$/g.test(pProfile.name) && isNaN(pProfile.age)){
		alert("You are only allowed to enter: \n Name - Letters Only \n Age - Numbers Only");
		return false;
	}
	else if(!/^[a-zA-Z]*$/g.test(pProfile.name) && /^\d+(?:\.\d{1,2})?$/g.test(pProfile.age)){
		alert("You are only allowed to enter: \n Name - Letters Only \n Age - Numbers Only");
	}
	else if(!/^[a-zA-Z]*$/g.test(pProfile.name)){
		alert("Please Enter Letters only.");
		return false;
	}
	else if(isNaN(pProfile.age)){
		alert("Please Enter Whole Numbers only.");
	}
	else if (/^\d+(?:\.\d{1,2})?$/g.test(pProfile.age)){
		alert("Please Enter Whole Numbers only - decimal.");
	}
	else{
		//push to Object
		person.push(pProfile);
		//used to convert result to string
		var myJSON = JSON.stringify(person);
		document.forms[0].reset();

		//display in Final Obejct div 
		document.getElementById("fObject").innerHTML = myJSON;

		 //to refresh display
		document.getElementById("rFormat").innerHTML = "";
		//display for Readable Format
		for (let x in person){
			 document.getElementById("rFormat").innerHTML += "name: " + person[x].name + " , " + "age : " + person[x].age + "<br>";
			 console.log(person);
		}
	  }
}


/*Part 2*/
var prodInventory = []; 
function inventory(e){
	e.preventDefault();

	//Objects - Keys -Values
	var products = {
		prodName: document.getElementById('productName').value,
		prodStock: document.getElementById('productStock').value,
		prodPrice: document.getElementById('prodPrice').value
	}

	//Validations for Product Name, Stock (Whole Numbers Only) and Price
    if(!/^[a-zA-Z]*$/g.test(products.prodName) && /^[a-zA-Z]*$/g.test(products.prodPrice)){
		alert("You are only allowed to enter: \n *Name - Letters Only \n *Price - Numbers (with decimails) Only");
		return false;
	}
	else if(/^[a-zA-Z]*$/g.test(products.prodPrice)){
		alert("You are only allowed to enter: \n *Price - Numbers (with decimails) Only");
		return false;
	}
	else if(!/^[a-zA-Z]*$/g.test(products.prodName)){
		alert("You are only allowed to enter: \n *Name - Letters Only");
		return false;
	}
	else{
		//push to Object
		prodInventory.push(products);
				//used to convert result to string
		var myJSON = JSON. stringify(products);
		document.forms[0].reset();

	        //Display of Inventory List
	        document.getElementById("inventoryList").innerHTML = "";
	        for (let x in prodInventory) {
	            document.getElementById("inventoryList").innerHTML += "name: " + prodInventory[x].prodName + " , " + "stocks : " +  prodInventory[x].prodStock + " , " + "price: " + prodInventory[x].prodPrice + "<br>";
	            console.log(prodInventory)
	        }
	        return false;
	    }
}

    function compute() {
    	//declare variable to old the result of each product price
        var resProdPrice = 0;
        var sum = 0;
        for (let x in prodInventory) {
        	//equation to get the total
        	resProdPrice = prodInventory[x].prodStock * prodInventory[x].prodPrice;
        	//display each product
            document.getElementById("inventorytotal1").innerHTML += prodInventory[x].prodName + " will have a total value of " + resProdPrice + "<br>";
            sum += resProdPrice;
        }
        	//display total
        	document.getElementById("inventorytotal2").innerHTML = "Total Value: " + sum ;
    }