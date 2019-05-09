  const url = window.location.pathname.split("/");

  if (typeof(Storage) !== "undefined") {
    if (!localStorage.session) {
      localStorage.session = "";
    }
    else if(url[url.length-1] != "profile.html"){
      console.log(window.location.pathname);
      
      console.log(url[url.length-1]);    	
      window.location.replace("./profile.html");
    }


  }

  function setName(){

  	if(document.getElementById("username").value.length > 0)
  		if(document.getElementById("recuerdame").checked){
  			console.log(document.getElementById("recuerdame").checked);
  			localStorage.session = document.getElementById("username").value;
  		}

  	
  }

  function cerrarSesion(){
    if (localStorage.session) {
      localStorage.session = "";
    }
    
    window.location.replace("./login.html");
    
  }