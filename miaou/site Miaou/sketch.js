//-- variables liées au DOM
var element; // p premier paragraphe de article
var article; // div article
var tailleArticle; // tailles du div article
var canvasLateral; // balise canvas
var largeurCanvas;
var hauteurCanvas;
var largeurCanvasInit;
var hauteurCanvasInit;
var tailleContenu ; // tailles du div contenu
var tailleCanvasAnim; // taille du div canvasAnim
var unit=1; // unité de longueur
var yPourcent = 0;

// -- variables pour la gestion du 1° paragraphe
var oldTexte; // texte initial du 1° paragraphe de article
var init=0; //si 1° paragraphe initial affiché



// -- variables pour l'animation
var Miaou; // objet chat
var rapport; // rapport de taille du dessin
var YChat; // position Y du centre du chat


function setup(){ 
	// création du canvas
	largeurCanvas = windowWidth/3-10;
	largeurCanvasInit=largeurCanvas;
	hauteurCanvas = windowHeight-180;
	hauteurCanvasInit=hauteurCanvas;
	canvasLateral = createCanvas(largeurCanvas,hauteurCanvas);
	canvasLateral.parent("canvasAnim");
	
	//initialisation de l'article
	initialiser(); 
	article = document.getElementById ("article");
	article.style.height = (hauteurCanvas)+"px";
	
	tailles();
	
	// setup courant
	colorMode(HSL);
	background(30,100,70);
	frameRate(15);
	imageMode(CENTER);
	Miaou = new Chat();
	Miaou.dessine();
	calculTailleDessin();
	
	  // position verticale du centre du chat pour que sa base soit à 5 pixels du bottom
	image(Miaou.dessin,Miaou.dessin.width*rapport/2,YChat,Miaou.dessin.width*rapport,Miaou.dessin.height*rapport);
}

function draw(){
	background (30,100,70);
	image(Miaou.dessin,Miaou.dessin.width*rapport/2,YChat,Miaou.dessin.width*rapport,Miaou.dessin.height*rapport);
}

// fonctions liées au canvas
function calculTailleDessin(){
  // détermination de la dimension limitante
  var rapportX = (largeurCanvas)/Miaou.dessin.width;
  var rapportY = (hauteurCanvas-5)/(Miaou.dessin.height);//*rapport); // la base du chat sera à 5 pixels du bord
  rapport = min(rapportX,rapportY);
  YChat = hauteurCanvas - 5 - Miaou.dessin.height*rapport/2; 
}

// fonctions liées au redimentionnement de la fenêtre ou de l'écran
function tailles(){ // inutile si textes importants
	// récupération des tailles
	var w = article.offsetWidth;
	var h = article.offsetHeight;
	tailleArticle = {width:w, height:h};
	w = document.getElementById("canvasAnim").offsetWidth;
	h = document.getElementById("canvasAnim").offsetHeight;
	tailleCanvasAnim = {width:w, height:h};
	w = document.getElementById("contenu").offsetWidth;
	h = document.getElementById("contenu").offsetHeight;
	tailleContenu = {width:w, height:h};
}
function imposeTailles(){// inutile : ne règle pas le problème
	document.getElementById("contenu").style.width = tailleContenu.width;
	document.getElementById("contenu").style.height = tailleContenu.height;
	document.getElementById("canvasAnim").style.width = tailleCanvasAnim.width;
	document.getElementById("canvasAnim").style.height = tailleCanvasAnim.height;
	article.style.width = tailleArticle.width;
	article.style.height = tailleArticle.height;
}

function windowResized(){
	largeurCanvas = windowWidth/3-10;
	hauteurCanvas = windowHeight-180;
	article.style.height = (largeurCanvas,hauteurCanvas)+"px";
	calculUnit();
	resizeCanvas(largeurCanvas,hauteurCanvas);
	largeurCanvas = windowWidth/3-10; 
		// on redouble le resize car seule 1 dimension de la fenêtre à la fois est mise à jour
	hauteurCanvas = windowHeight-180;
	resizeCanvas(largeurCanvas,hauteurCanvas);
		// on impose la marge car le resize crée parfois une marge en haut
	document.getElementById("defaultCanvas0").style.margin = 0+"px";
	calculTailleDessin();
	tailles();
}
function calculUnit(){
	unit = min(largeurCanvas/largeurCanvasInit,hauteurCanvas/hauteurCanvasInit);
	if (unit <1) {
		var old=hauteurCanvas;
		largeurCanvas*=unit;
		hauteurCanvas*=unit;
		if (hauteurCanvas<old){// on recentre le canvas verticalement
			var H=(old-hauteurCanvas)/2;
			document.getElementById("defaultCanvas0").style.marginTop= H+"px";
			y=yPourcent*hauteurCanvas;
		}
	}else{
		largeurCanvas=largeurCanvasInit;
		hauteurCanvas=hauteurCanvasInit;
		unit=1;
	}
}
/*
function mouseClicked(){
	if (encours){
		noLoop();
	}else{
			loop();
	}
	encours = !encours;
}
*/

// fonctions liées à la navigation
function initialiser(){
	element = document.getElementById("textInit");
	//oldTexte = element.textContent||element.innerText||"erreur";
	oldTexte = element.innerHTML;
}
/*
function generer(){ // appellé par bouton suivant
//fonction test;

	if (init){
		element.innerHTML = H3.titre;
		var texteH = document.getElementById("texteHistoire");
		texteH.innerHTML =H3.texte;
	} else {
		element.innerHTML = oldTexte;
		var texteH = document.getElementById("texteHistoire");
		texteH.innerHTML = "";	
	}
	
	init=!init;
}
*/
function generer(){ // appellé par bouton suivant
	init++;
	switch (init){
		case 1:
			element.innerHTML = H1.titre;
			var texteH = document.getElementById("texteHistoire");
			texteH.innerHTML =H1.texte;
			break;
		case 2:
			element.innerHTML = H2.titre;
			var texteH = document.getElementById("texteHistoire");
			texteH.innerHTML =H2.texte;
			break;
		case 3:
			element.innerHTML = H3.titre;
			var texteH = document.getElementById("texteHistoire");
			texteH.innerHTML =H3.texte;
			break;
		default:
		element.innerHTML = "FIN";
		var texteH = document.getElementById("texteHistoire");
		texteH.innerHTML ="provisoire et de toute façon pas définitive. Non que je tienne absolument à continuer à vous causer histoires plus que soucis, mais sait-on jamais... ";
	}
}