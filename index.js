/*
	The init function below is called in the '<body onload="init">' in the html.
*/

function init() {
	/*
		This function adds the onclick behaviour to the button with the 'id="plant-cookie-button"'
	*/

	// Loads the button into the theButton variable, so that we can use it later.
	var theButton = document.getElementById("plant-cookie-button");

	// Uses an onclick
	theButton.addEventListener("click",addCookie);

}

function addCookie() {

	/*
		Cookies can sometimes have an expiry. This one doesn't.
		That means that it will disappear once your browser session is over.
		That's good enough for now.
	*/

    document.cookie = "mycookie=1; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
		var resultDisplay = document.getElementById("result");
		resultDisplay.innerHTML = "Cookie found! You can do something different on this page."
    }
}