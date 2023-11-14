function func(){
    document.getElementById("pop_up").style.display = "grid";
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
  
    addCSS(".main{ filter: blur(10px); }")
  };
  function back(){
    document.getElementById("pop_up").style.display = "none";
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
  
    addCSS(".main{ filter: blur(0px); }")
  };
  
  function ChangeTheme(){
      var link = document.getElementById("theme-link");
      let lightTheme = "light.css";
      let darkTheme = "dark.css";
    
  
      var currTheme = link.getAttribute("href");
  
  
      if(currTheme == lightTheme)
      {
        currTheme = darkTheme;
  
      }
      else
      {    
        currTheme = lightTheme;
  
      }
  
      link.setAttribute("href", currTheme);
  };