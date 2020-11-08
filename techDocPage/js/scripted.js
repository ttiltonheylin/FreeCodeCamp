// JavaScript Document
/*WHAT I GOT*/
/*eslint-env es6*/

//TOGGLE BAR SWITCH
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    toggleBars.classList.toggle('z8');
    mainNav.classList.toggle('active');
});


//ALTERNATE CSS

//HANDLERS
var themeToggle = document.getElementById('theme-toggle');
var toggleSwitch = document.querySelector('.switch');
var toggleSwitchButton = document.querySelector('.switch-button');

// LINK ELEMENT
var head = document.getElementsByTagName('head')[0];
var mainCss = document.getElementsByTagName('link')[0];
var link = document.createElement('link');
// RESOURCES
var headerImg = document.getElementById('header-img');
var toggleBars = document.getElementById("toggle-bars");
//ATTRIBUTES
var squidward = { 
    cssHref: "css/squidward.css",
    headerImg: "resources/cutout.png",
    toggleBars: "resources/toggle-bars-squid.png",
                };
var doodlebob = {
    cssHref: "css/doodlebob.css",
    headerImg: "resources/projector.png",
    toggleBars: "resources/toggle-bars-tri-color.png"
                }

//CSS CHANGE FUNCTION
function alternateCss() {
    console.log("class: "+mainCss.className);
    console.log("id: "+mainCss.id);
    
    if (mainCss.className == 'squidward'){
        console.log(doodlebob);
        // CHANGE THE CSS STYLING
        mainCss.setAttribute('class', "doodlebob")
        mainCss.setAttribute('href', doodlebob.cssHref);
        
        //CHANGE THE HEADER IMG + TOGGLE BARS
        headerImg.setAttribute('src', doodlebob.headerImg);
        toggleBars.setAttribute('src', doodlebob.toggleBars)
        
        //RELOAD WINDOW AND DOUBLE CHECK ATTRIBUTES
        console.log("New CSS: "+mainCss.className);
    }else {
        console.log(squidward);
        // CHANGE THE CSS STYLING
        mainCss.setAttribute('class', 'squidward');
        mainCss.setAttribute('href', squidward.cssHref);
        
        //CHANGE THE HEADER IMG + TOGGLE BARS
        headerImg.setAttribute('src', squidward.headerImg);
        toggleBars.setAttribute('src', squidward.toggleBars);
        
         //RELOAD WINDOW AND DOUBLE CHECK ATTRIBUTES
        console.log("New CSS: "+mainCss.className);
    }
}


function toggler() {
        toggleSwitchButton.classList.toggle('switched')
        toggleSwitchButton.ontransitionend = alternateCss(); 
        }

