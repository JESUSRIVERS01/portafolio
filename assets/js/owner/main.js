
function iniciar() {
window.anime=arguments[5];
console.log(arguments);
}
var botonBrillante=document.getElementById("botonBrillante");
var cortinaA=document.getElementById("cU");
var cortinaB=document.getElementById("cD");
var brioA=document.getElementById("bU");
var brioB=document.getElementById("bD");
var cubo=document.getElementById("logo");
var ct=document.getElementById("ct");
var cts=document.getElementById("cts");
var ctc=document.getElementById("ctc");
botonBrillante.addEventListener("click",function () {
	botonBrillante.classList.remove("activar");
	cortinaA.classList.add("cortinas");
	cortinaB.classList.add("cortinas");
	brioA.classList.add("brio");
	brioB.classList.add("brio");
	cubo.classList.add("cubx");
	ct.classList.add("ctA");
	cts.classList.add("ctA");
	ctc.classList.add("ctA");

	
	setTimeout(() => {
		var textWrapper = document.querySelector('.text');
		anime.timeline({loop: false})
		.add({
		targets: '.text ',
		opacity: [0,1],
		easing: "easeInOutQuad",
		duration: 3000,
		delay: (el, i) => 500 * (i+1)
		}).add({
		targets: '.text',
		opacity: 1,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
		});
			}, 1000);
})




// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/assets/node_modules"},
});
requirejs(["l/modernizr", "precarga", "validaciones", "alertas", "peticiones", "n/animejs/lib/anime.min"], iniciar);

