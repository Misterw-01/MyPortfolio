const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item= document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
	var scroll_position= window.scrollY;
	if(scroll_position>100){
		header.style.backgroundColor = "#29323c";
	} else{
		header.style.backgroundColor = "transparent";
	}
});

menu_item.forEach(item=>{
	item.addEventListener('click',()=>{
		hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
});

//slider 
let span = document.getElementsByClassName('select');
let product = document.getElementsByClassName('product');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

//mobile view
let mobile_view = window.matchMedia("(max-width: 768px)");
if(mobile_view.matches)
{
	movePer = 50.36;
	maxMove = 504;
}

let right_mover =()=>{
	l = l + movePer;
	if (product == 1){l = 0}
		for(const i of product)
		{
			if(l > maxMove){l = l - movePer;}
			i.style.left ='-' + l + '%';
		}
}

let left_mover = ()=>{
	l = l - movePer;
	if (l<=0){l=0;}
	for(const i of product)
		{
			if(product_page > 1)
			i.style.left ='-' + l + '%';
		}
}

span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}
