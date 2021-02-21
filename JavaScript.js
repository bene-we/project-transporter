
//editable "site"
function ToggleEditable (button) {
	var div = document.getElementById("inhalte");
	
	if (div.contentEditable == "true") {
			div.contentEditable = "false";
			content.innerHTML = "Bearbeiten";
		} else {
			div.contentEditable = "true";
			content.innerHTML = "<strong>Bearbeiten</strong>";
			blockquote.contentEditable = "false";
		}
	}
	
	


	



  
  
