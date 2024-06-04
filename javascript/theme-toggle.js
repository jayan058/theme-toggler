var toggleTheme = () => {
  
    var isDarkMode = document.documentElement.classList.toggle('dark-mode');
    if(document.documentElement.classList.contains('dark-mode')){
        image.innerHTML='🌝'
    }
    else{
        image.innerHTML='🌚'
    }
    
 
   
};

var image = document.querySelector('.theme-toggler');
image.addEventListener('click', toggleTheme);