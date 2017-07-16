function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.setTimeout(function() {
	var host = getParameterByName('host');

	if(host !== null && window.config.urls[host] !== undefined){
		window.location = window.config.urls[host];
	}else{
		console.log("You will never leave this place bro");
		document.write("ERROR: redirection hash was incorrect");
	}
}, 2000);