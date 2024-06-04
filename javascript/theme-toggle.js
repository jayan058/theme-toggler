var toggleTheme = () => {
    console.log("hello");
    var isDarkMode = document.documentElement.classList.toggle('dark-mode');
    
 
   
};

var image = document.querySelector('.theme-toggler');
image.addEventListener('click', toggleTheme);
var image1 = document.querySelector('.theme-toggler1');
image1.addEventListener('click', toggleTheme);
