var last_card = null;
var names_cards = ["centaure", "centaure", "licorne", "licorne", "renard", "renard", "dragon", "dragon", "sphynx", "sphynx", "sirene", "sirene"];
shuffleCards();

document.addEventListener("click", play);

function play(event){
  console.log(this);
  let new_card = event.target;
  var nom_class = new_card.getAttribute("class");
  new_card.setAttribute("src", "img/"+nom_class+".jpg");
  if (last_card == null) {
    last_card = new_card;
  } else {
    var nom_class_last_card = last_card.getAttribute("class");
    if (nom_class_last_card == nom_class) {
      last_card = null;
    } else {
      setTimeout(function(){
        new_card.setAttribute("src", "img/mystery.jpg");
        last_card.setAttribute("src", "img/mystery.jpg");
        last_card = null;
      }, 1000);
    }
  }
};

function shuffleCards(){
  let images = document.getElementsByTagName("img");
  for(let img of images){
    let indice = entierAleatoire(names_cards.length);
    img.setAttribute("class", names_cards[indice])
    names_cards.splice(indice, 1);
  }
}

function entierAleatoire(max) {
  return Math.floor(Math.random() * max);
}
