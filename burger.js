let burgerOpen = document.getElementById('my-burger');
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger-close');

burgerOpen.onclick = function(){
	burger.style.display = 'block';
}
burgerClose.onclick = function(){
	burger.style.display = 'none';
}