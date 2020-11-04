/*WHAT I GOT*/
/*eslint-env es6*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});


//1. IDENTIFY TOGGLE ELEMENT
let toggleSwitch = document.getElementById('theme-toggle');
let cssSheet = document.getElementsByTagName('link')[0];
let cssHref = cssSheet.href;
let cssTitle = cssSheet.title;
let headerImg = document.getElementsByTagName('img')[2];
let headerImgSrc = headerImg.src;
	console.log(cssSheet);
	console.log("href: "+cssHref);
	console.log("title: "+cssTitle);
	console.log(headerImg);
	console.log("img source:"+headerImgSrc);
//2. ADD LISTENER FOR .CHECKED	
toggleSwitch.addEventListener('change', function() {
	if(cssTitle=='squidward'){
		cssSheet.setAttribute('href', 'css/doodlebob.css');
		cssSheet.setAttribute('title', 'doodlebob')
		headerImg.setAttribute('src', 'resources/projector.png')
		console.log(cssHref);
		console.log(cssSheet);
		console.log(headerImg);
		console.log(headerImgSrc);
	}else if (cssTitle=="doodlebob"){
		cssSheet.setAttribute('href', 'css/squidward.css');
		cssSheet.setAttribute('title', 'squidward')
		headerImg.setAttribute('src', 'resources/cutout.png')
		console.log(cssHref);
		console.log(cssSheet);
		console.log(headerImg);
		console.log(headerImgSrc);	  
	}
});

//
//
//

