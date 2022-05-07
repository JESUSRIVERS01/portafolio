var body=document.getElementById("fondo_body");
var saludo = document.getElementById("saludo");
var descripcionUno=document.getElementById("descripcionUno");
var descripcionDos=document.getElementById("descripcionDos");
var memorama=[...document.querySelectorAll(".imgTecnologias")];
var puerta = document.querySelectorAll(".portal");
var bloques=[...document.querySelectorAll(".bloques")];
var cortina= [...document.querySelectorAll(".cortina")];
var rayo= [...document.querySelectorAll(".rayo")];
var cubo=document.getElementById("logo");
var btn=[...document.querySelectorAll(".btn")];
var btnNavegar=[...document.querySelectorAll(".underline")];
var adelante=document.getElementById("adelante");
var regresar=document.getElementById("regresar");
var galeriaUno=[...document.querySelectorAll(".imgSobreMi")];
var formulario=document.getElementById("form");
var tecnologiaCubos=[...document.querySelectorAll(".imgTecnologias")];
var aumento=0;
galeriaUno[aumento].classList.toggle("efectoImagen");
puerta.forEach((e,p)=>puerta[p].classList.toggle("puerta"));
function click (elemento,funcion){
elemento.forEach((e,p)=>elemento[p].addEventListener("click",funcion))
}
function estadopagina(elemento){
	btnNavegar.forEach((e,p)=>btnNavegar[p].classList.remove("underlineActive"));
	elemento.classList.add("underlineActive");
}
function estadoNav(e){
	estadopagina(this)
}
function posicion (conteo,visible){
	galeriaUno[conteo].classList.toggle("efectoImagen");
	visible.addEventListener("click",comparador);
	visible.classList.remove("efectoBoton");
}
function imprimir(e) {
this.classList.toggle("visto")
}
function texto (elementoTitulo,elementoDescripcion){
	saludo.textContent=elementoTitulo
	descripcionUno.innerHTML=elementoDescripcion
}
function memoramaF(){
	mem(this.id)
	function mem (id) {
		descripcionDos.innerHTML=habilidadesTexto[id].texto;
	}
}

var textos={
	0:{
		titulo:"Hola!",
		texto:`<p>Mi nombe es jesus rivera y hago <a href="#seccionTres">Front-End</a></p>`
	},
	1:{
		titulo:"a rodar!",
		texto:`<p>de vez en cuando salgo a rodar por mi ciudad en mi <a target="_blank" href="https://es.wikipedia.org/wiki/Bicicleta_de_pi%C3%B1%C3%B3n_fijo">fixie</a>,
		esta foto la tome en la estela de luz ubicada afuera del bosque de chapultepec</p>`
	},
	2:{
		titulo:"cocina",
		texto:`<p>Aprendi a hacer <a target="_blank" href="https://www.facebook.com/santarosacarnitas/">carnitas</a> tan bien que termine haciendo eventos,sin duda cocinar es un don que tengo</p>`
	},
	3:{
		titulo:"lectura",
		texto:`<p>que nunca mueran mis ganas de querer seguir superandome, un poco de <a target="_blank" href="https://bibliotecavasconcelos.gob.mx/">lectura</a> siempre termina siendo benefico.Biblioteca jose vasconcelos</p>`
	}
}
var habilidadesTexto={
	html:{
		texto:`<p>Qué es el HTML5
		Todo lo que ves en Internet está programado con un código interno, 
		y cuando accedes a una web, a tu navegador le llega este código, 
		y lo traduce de forma visual para que veas lo que el creador de la web ha diseñado que puedas ver.
		Este código es el que decide la estructura de una página web, colocando sus diferentes elementos en los puntos correspondientes, y un fallo dentro de él hará que no se vea bien.</p>`
	},
	css:{
		texto:`<p> Se trata de una tecnología utilizada para dotar de cualidades visuales y estéticas a una página web.
		sencillamente me permite estilizar tu sitio</p>`
	},
	js:{
		texto:`<p>En pocas palabras, JavaScript es un popular lenguaje de programación de scripts para añadir funcionalidades interactivas y otros contenidos web dinámicos a las páginas web.
		Algunos ejemplos conocidos de contenido en JavaScript son los formularios rellenables,
		las presentaciones de galerías de fotos y los gráficos animados.</p>`
	},
	solidWorks:{			
		texto:`<p>SOLIDWORKS es un software de diseño CAD 3D (diseño asistido por computadora) para modelar piezas y ensamblajes en 3D y planos en 2D. El software que ofrece un abanico de soluciones para cubrir los aspectos implicados en el proceso de desarrollo del producto.
		Sus productos ofrecen la posibilidad de crear, diseñar, simular, fabricar, publicar y gestionar los datos del proceso de diseño.</p>`
	}
	
}
descripcionDos.innerHTML=habilidadesTexto.html.texto;
click(memorama,memoramaF)
texto(textos[aumento].titulo,textos[aumento].texto)
click(tecnologiaCubos,imprimir)
click(btn,comparador);
click(btnNavegar,estadoNav);
regresar.classList.toggle("efectoBoton")
regresar.removeEventListener("click",comparador);
window.addEventListener("scroll",pantalla)
formulario.addEventListener("submit",enviar)
function pantalla(e) {
	var alturaViewport = self.innerHeight;
	var posicionScrollY = window.scrollY;
	if(posicionScrollY<alturaViewport * .56){
		estadopagina(document.getElementById("sobremi"));
	}
	else if(posicionScrollY>=alturaViewport * .56 && posicionScrollY<=alturaViewport * 1.4){ 
		estadopagina(document.getElementById("habilidades"))
	}
	else if(posicionScrollY>alturaViewport * 1.4  ){ 
		estadopagina(document.getElementById("contacto"))
	}
}
async function enviar(e) {
	e.preventDefault()
	const formal = new FormData(this)
	const response = await fetch (this.action,{
		method:this.method,
		body:formal,
		headers:{"accept":"application/json"}
	})
	if(response.ok){
		this.reset()
		alert("ok")
	}
}
function comparador(e) {
	if (this.id=="botonBrillante") {
		cortina.forEach((e,p)=> {cortina[p].classList.add("cortinas"), rayo[p].classList.add("brio")} )
		setTimeout(()=>botonBrillante.classList.add("ocultar"),1000);
		setTimeout(()=>bloques.forEach((e,p)=>bloques[p].classList.remove("ocultar")),1250);
		setTimeout(()=>body.classList.add("overflow"),1260);
	}
	else if (this.id=="adelante"){
		
		posicion(aumento,regresar);
		aumento++
		texto(textos[aumento].titulo,textos[aumento].texto)
		galeriaUno[aumento].classList.toggle("efectoImagen");
		if(aumento===galeriaUno.length-1){ 	
			this.classList.toggle("efectoBoton")
			this.removeEventListener("click",comparador);
		}
	}
	else if (this.id=="regresar"){
		posicion(aumento,adelante)
		aumento--
		texto(textos[aumento].titulo,textos[aumento].texto)
		galeriaUno[aumento].classList.toggle("efectoImagen");
		if(aumento===0){ 
			this.classList.toggle("efectoBoton")
			this.removeEventListener("click",comparador);
		}
	}	
}
// cubo.classList.add("cubx");











	function iniciar() {
	}
// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
// requirejs.config({
// 	baseUrl: "assets/js/owner",
// 	paths: { a: "../animaciones", l: "../librerias", n: "/assets/node_modules"},
// });
// requirejs(["l/modernizr", "precarga", "validaciones", "alertas", "peticiones", "n/animejs/lib/anime.min"], iniciar);

