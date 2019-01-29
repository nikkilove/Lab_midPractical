// getting list of data...

function list() {
	//body of the main function...
	let getIt = XMLHttpRequest();
	let scol = getElementById('list'){ 
		getIt.onreadystatechange = function(){
			if(getIT.readystate == 4 && getIt == 200){
				console.log (json.parse(getIt.response));
				let scol = json.parse(getIt.response);
				let yolo= "",
				for (let i = 0; i < data.lenght; i ++){
					yolo += "<ul>" + data[i].address+"</ul>"//displaying the list of address in ul mode...					
				}
			scol.innerHTML = yolo;
		}

		}
	getIt.open("GET","https://jsonplaceholder.typecode.com/todos", true)
	geIt.send
	}
	//end of the main function...
}

	





