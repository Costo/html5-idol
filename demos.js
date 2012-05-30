(function(){


	var DOMContentLoaded = function() {
		Array.prototype.forEach.call(document.querySelectorAll('[contenteditable]'), toggleKeyboardNavigation);
	}

	var toggleKeyboardNavigation = function(elm) {
		elm.addEventListener( "focus", function(){
  			document.removeEventListener('keydown', window.handleBodyKeyDown, false);  
		}, false );
		elm.addEventListener( "blur", function(){
  			document.addEventListener('keydown', window.handleBodyKeyDown, false);  
		}, false );

	}


document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

}())



