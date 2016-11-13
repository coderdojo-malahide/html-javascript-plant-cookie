/*
	The init function below is called in the '<body onload="init">' in the html.
*/

function init() {
	/*
		This function tells the page what to do when the button is clicked.
		The id on the button is "plant-cookie-button". Check the id on the
		button in the html file.

		We'll use the id to identify the button to the page.
	*/

	/* 
		This line uses the document.getElementById() method to load the button
		into the theButton variable, so that we can use it in JavaScript.
	*/
	var theButton = document.getElementById("plant-cookie-button");

	
	/*
		Here's where we use that variable. We use the addEventListener() method
		(set to a "click" type) to launch the addCookie function.
	*/

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

function getCookie() {

	/*
		We use document.cookie.length to check if there are any cookies for our domain.
		The domain is the name for your website.
		Google.com is the domain of that website.
		On your local server, the domain is called "localhost".
	*/

    if (document.cookie.length > 0) {

    	/*
			We are using document.getElementById() again to get the p tag
			that we have in the html that has an id of "result".

			We are assigning the object that we get to a varable called 
			"resultDisplay".
    	*/

		var resultDisplay = document.getElementById("result");

		/*
			Then we set a property of the resultDisplay object as the 
			text we want to show when we've found a cookie.
		*/

		resultDisplay.innerHTML = "Cookie found! You can do something different on this page."
    }
}