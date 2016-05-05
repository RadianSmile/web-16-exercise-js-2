var todoInputEle    = document.getElementById("todo-input") ;
var submitBtnEle    = document.getElementById("todo-submit") ;

var todoListEle     = document.getElementById("todo-todoList") ;
console.log (todoListEle);
var validateHintEle = document.getElementById("hint") ;

var todoDataArray = [] ;


if (localStorage["todoDataArray"] && updatetodoListEle){
	todoDataArray = JSON.parse( localStorage["todoDataArray"] ) ;
	updatetodoListEle (todoDataArray);
}

todoInputEle.addEventListener("input",function(changeEvent){
	if ( validateValue( todoInputEle.value ) ){
		validateHintEle.className = "has-success" ;
	}else {
		validateHintEle.className = "has-error" ;
	}
});


submitBtnEle.addEventListener("click",function(clickEvent){   // 2. 10mins
	var value = todoInputEle.value;

	if ( validateValue(value) ){

		var todoData   = {} ;
		todoData.title = value ;
		todoData.done	 = false ;
		console.log (todoDataArray);
		todoDataArray.push(todoData);

		var todoEle = createTodoElement(todoData) ;
		todoListEle.appendChild(todoEle);


		todoInputEle.value = "" ;
		validateHintEle.className = "" ;

		localStorage["todoDataArray"] = JSON.stringify(todoDataArray);

	}
});


function validateValue (todoInputEleValue){
	return todoInputEleValue && todoInputEleValue.length > 3
}

function updatetodoListEle (todoDataArray){
	todoListEle.innerHTML = "";
	for (var i = 0 ; i < todoDataArray.length ; i++){
		var todoData = todoDataArray[i] ;
		var todoEle = createTodoElement(todoData);
		todoListEle.appendChild(todoEle);
	}
}

function createTodoElement (todoData){
	var todoEle = document.createElement("a") ;
	todoEle.className = "list-group-item" ;
	todoEle.textContent = todoData.title ;

	if (todoData.done){
		todoEle.className += " list-group-item-success" ;
	}

	todoEle.addEventListener("click",function(e){
		console.log ("todo");
		todoData.done = true ;

		localStorage["todoDataArray"] = JSON.stringify(todoDataArray);
		updatetodoListEle(todoDataArray) ;
	});

	return todoEle ;
}
