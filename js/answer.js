var todoInputEle    = document.getElementById("todo-input") ;
var submitBtnEle    = document.getElementById("todo-submit") ;

var todoListEle     = document.getElementById("todo-todoList") ;
var validateHintEle = document.getElementById("hint") ;

var todoDataArray = [] ;



function validateValue (todoInputEleValue){
	return todoInputEleValue && todoInputEleValue.length > 3 ;
}
function createTodoElement (todoData){
	return $("<div>",{
		class : todoData.done ? "list-group-item list-group-item-success" : "list-group-item",
		text  : todoData.title ,
		on    : {
			click : function (e){
				todoData.done = true ;
				localStorage["todoDataArray"] = JSON.stringify(todoDataArray);

				// requirement 4
				$(this).transition({
					x       : 30 ,
					opacity : 0 ,
					color   : "rgb(0,255,0)"
					// scale : 2
				},function(clickeEvent){
					updatetodoListEle(todoDataArray) ;
				});
			}
		}
	});
}
function updatetodoListEle (todoDataArray){
	todoListEle.innerHTML = "";
	for (var i = 0 ; i < todoDataArray.length ; i++){
		var todoData = todoDataArray[i] ;
		createTodoElement(todoData).appendTo(todoListEle) ;;
	}
}

// Requirement 4
function updateBG (){
	var apiUrl = getKeywordApiUrl("wonderful") ;
	$.getJSON(apiUrl , function(s){
		console.log (s);
		var photos  = s.photos.photo ;
		var randomI = Math.floor(Math.random() * 100 ) ;
		var photo   = photos[randomI];
		$("body").css("background-image", "url(" + getPhotoUrl(photo)+ ")") ;
	});
}
function getKeywordApiUrl (keyword){
	var api_key = "e578cd73f66ee04dd6ae6c88cc9380bc" ;
	return  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+ api_key + "&text=" + keyword + "&format=json&nojsoncallback=1";
}
function getPhotoUrl( photo ){
	return "https://farm"+ photo.farm +".staticflickr.com/"+ photo.server +"/" + photo.id+ "_" + photo.secret + "_b.jpg" ;
}


// main program

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
		todoDataArray.push(todoData);

		updatetodoListEle(todoData) ;

		todoInputEle.value        = "" ;
		validateHintEle.className = "" ;

		// save to localStorage
		localStorage["todoDataArray"] = JSON.stringify(todoDataArray);

	}
});


$("#clearAllBtn").on("click",updateBG);

updateBG() ;
