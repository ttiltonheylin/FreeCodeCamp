/*LANDING PAGE*/
/*eslint-env es6*/

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/*TOGGLE MOBILE MENU*/
function toggleMenu() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		
		//ADDS THE MENU (HAMBURGER) ICON
		toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
		
	} else {
		menu.classList.add("active");
		
		//ADDS THE (X) ICON
		toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
	}
}

/*EVENT LISTENER*/
window.onload=function() {
toggle.addEventListener("click", toggleMenu, false);
}

/*DROPDOWN FUNCTIONALITY*/
const items = document.querySelectorAll(".item");

/*ACTIVATE SUBMENU*/
function toggleItem() {
	if (this.classList.contains("submenu-active")) {
		this.classList.remove("submenu-active");
	} else if (menu.querySelector(".submenu-active")) {
		menu.querySelector(".submenu-active").classList.remove("submenu-active");
		this.classList.add("submenu-active");
	} else {
		this.classList.add("submenu-active");
	}
		
}

/*EVENT LISTENERS*/
for (let item of items) {
	if (item.querySelector(".submenu")){
		item.addEventListener("click", toggleItem, false);
		item.addEventListener("keypress", toggleItem, false);
	}
}