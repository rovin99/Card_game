const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
]
/*
<div class="card">
                <div class="card-inner">
                    <div class="card-front">
                       <img src="images/card-AceSpades.png" class="card-img">
                    </div>
                    <div class="card-back">
                        <img src="images/card-back-Blue.png" class="card-img">
                    </div>
                </div>
</div>
*/

function createCards(){

    const card = createElement('div');
    const cardInner = createElement('div');
    const cardFront = createElement('div');
    const cardBack = createElement('div');

    //give class name

    giveClassname(card, "card");
    giveClassname(cardInner, "card-inner");
    giveClassname(cardFront, "card-front");
    giveClassname(cardBack, "card-back");
    
    //give id's

    giveids(cardFront, "front");
    giveids(cardBack, "back");
    //add image

    addimg("front", "/images/card-AceSpades.png");
    addimg("back", "/images/card-back-Blue.png");

    //parent-child tree struct
    parentChild(cardInner,cardFront);
    parentChild(cardInner,cardBack);
    parentChild(card,cardInner);

}


function createElement(ele){
   return document.createElement(ele);
}

function giveClassname(element, className){
   element.classList.add(className);
}

function giveids(element, id){
   element.setAttribute("id", id);
}

function addimg(id, src){
   var parent = document.getElementById(id);
   var image = document.createElement('img');
   image.src = src;
   parent.appendChild(image);
}
function  parentChild(ele1,ele2){
    ele1.appendChild(ele2);
}
