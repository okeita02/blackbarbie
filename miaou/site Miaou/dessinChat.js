function Chat() {
  this.bouche = [78, 108, 74, 121, 97, 127, 100, 112];
  this.oreilleD = [56, 95, 52, 39, 58, 0, 82, 59];
  this.oreilleG = [116, 64, 142, 40, 147, 29, 129, 94];
  this.patteAvDdeb = [86, 310, 102, 274, 39, 196, 93, 194];
  this.patteAvDfin = [93, 194, 134, 200, 131, 244, 107, 329];
  this.patteArGdeb = [138, 323, 134, 259, 128, 205, 161, 214];
  this.patteArGfin = [161, 214, 162, 213, 222, 245, 172, 330];
  this.corpsDeb = [93, 139, 87, 176, 150, 142, 180, 193];
  this.corpsFin = [180, 193, 159, 165, 211, 217, 201, 309];
  this.queueDeb = [204, 314, 231, 333, 270, 318, 300, 308];
  this.queueFin = [300, 308, 330, 298, 379, 272, 340, 245];
  this.dessin = createGraphics(394, 356);

  this.marron;
  this.roux;
  this.rougeClair;
  
    this.dessine = function() {
    this.dessin.colorMode(HSL);
    this.marron = color(20, 100, 25);
    this.roux = color(30, 100, 80)
    this.rougeClair = color(0, 75, 71);
    this.dessin.ellipseMode(CENTER);
    this.dessin.strokeWeight(4);
    this.dessin.stroke(this.marron);
    this.dessin.noFill();
    this.afficheTete();
    this.afficheOreilleD();
    this.afficheOreilleG();
    this.afficheYeux();
    this.afficheBouche();
    this.afficheMoustacheD();
    this.afficheMoustacheG();
    this.affichePatteAv();
    this.affichePatteAr();
    this.affichePatteAvD();
    this.affichePatteAvG();
    this.affichePatteArD();
    this.affichePatteArG();
    this.afficheCorps();
    this.afficheQueue();
  }
  this.afficheMoustacheD = function() {
    //this.dessin.push();
    //this.dessin.strokeWeight(1);
    this.dessin.line(38, 100, 70, 108);
    this.dessin.line(38, 120, 70, 108);
    //this.dessin.pop();
  }
  this.afficheMoustacheG = function() {
    //push();
    //strokeWeight(1);
    this.dessin.line(138, 110, 108, 112);
    this.dessin.line(138, 125, 108, 112);
    //pop();
  }
  this.afficheQueue = function() {
    this.dessin.bezier(this.queueDeb[0], this.queueDeb[1], this.queueDeb[2], this.queueDeb[3], this.queueDeb[4], this.queueDeb[5], this.queueDeb[6], this.queueDeb[7]);
    this.dessin.bezier(this.queueFin[0], this.queueFin[1], this.queueFin[2], this.queueFin[3], this.queueFin[4], this.queueFin[5], this.queueFin[6], this.queueFin[7]);
  }
  this.afficheCorps = function() {
    this.dessin.bezier(this.corpsDeb[0], this.corpsDeb[1], this.corpsDeb[2], this.corpsDeb[3], this.corpsDeb[4], this.corpsDeb[5], this.corpsDeb[6], this.corpsDeb[7]);
    this.dessin.bezier(this.corpsFin[0], this.corpsFin[1], this.corpsFin[2], this.corpsFin[3], this.corpsFin[4], this.corpsFin[5], this.corpsFin[6], this.corpsFin[7]);
  }
  this.affichePatteAv = function() {
    this.dessin.push();
    this.dessin.fill(this.roux);
    this.dessin.bezier(this.patteAvDdeb[0], this.patteAvDdeb[1], this.patteAvDdeb[2], this.patteAvDdeb[3], this.patteAvDdeb[4], this.patteAvDdeb[5], this.patteAvDdeb[6], this.patteAvDdeb[7]);
    this.dessin.bezier(this.patteAvDfin[0], this.patteAvDfin[1], this.patteAvDfin[2], this.patteAvDfin[3], this.patteAvDfin[4], this.patteAvDfin[5], this.patteAvDfin[6], this.patteAvDfin[7]);
  }
  this.affichePatteAr = function() {
    this.dessin.bezier(this.patteArGdeb[0], this.patteArGdeb[1], this.patteArGdeb[2], this.patteArGdeb[3], this.patteArGdeb[4], this.patteArGdeb[5], this.patteArGdeb[6], this.patteArGdeb[7]);
    this.dessin.bezier(this.patteArGfin[0], this.patteArGfin[1], this.patteArGfin[2], this.patteArGfin[3], this.patteArGfin[4], this.patteArGfin[5], this.patteArGfin[6], this.patteArGfin[7])
    this.dessin.pop();
  }
  this.affichePatteAvD = function() {
    this.dessin.push();
    this.dessin.noStroke();
    this.dessin.fill(this.roux);
    this.dessin.ellipse(86, 310, 20, 6);
  }
  this.affichePatteAvG = function() {
    this.dessin.ellipse(107, 329, 20, 6);
  }
  this.affichePatteArD = function() {
    this.dessin.ellipse(138, 323, 20, 6);
  }
  this.affichePatteArG = function() {
    this.dessin.ellipse(172, 330, 20, 6);
    this.dessin.pop();
  }
  this.afficheYeux = function() {
    this.dessin.push();
    strokeWeight(4);
    this.dessin.stroke(this.rougeClair);
    this.dessin.line(80, 91, 80, 97);
    this.dessin.line(100, 91, 100, 97);
    this.dessin.pop();
  }
  this.afficheBouche = function() {
    this.dessin.bezier(this.bouche[0], this.bouche[1], this.bouche[2], this.bouche[3], this.bouche[4], this.bouche[5], this.bouche[6], this.bouche[7]);
  }
  this.afficheTete = function() {
    this.dessin.push()
    this.dessin.noStroke();
    this.dessin.fill(this.roux);
    this.dessin.ellipse(92, 96, 74);
    this.dessin.pop();
  }
  this.afficheOreilleD = function() {
    this.dessin.push();
    this.dessin.fill(this.roux);
    //strokeWeight(0);
    this.dessin.bezier(this.oreilleD[0], this.oreilleD[1], this.oreilleD[2], this.oreilleD[3], this.oreilleD[4], this.oreilleD[5], this.oreilleD[6], this.oreilleD[7]);
    //this.dessin.pop();
  }
  this.afficheOreilleG = function() {
    //push();
    //fill(this.roux);
    //strokeWeight(0);
    this.dessin.bezier(this.oreilleG[0], this.oreilleG[1], this.oreilleG[2], this.oreilleG[3], this.oreilleG[4], this.oreilleG[5], this.oreilleG[6], this.oreilleG[7]);
    this.dessin.pop();
  }

}