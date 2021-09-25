document.addEventListener('DOMContentLoaded', ()=>{

const cardArrayLevel2 =[
        {
            name: 'butterfly',
            img: 'images/butterfly.jpg'
        },
        {
            name: 'butterfly',
            img: 'images/butterfly.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'flower',
            img: 'images/flower.jpg'
        },
        {
            name: 'hedgehog',
            img: 'images/hedgehog.jpg'
        },
        {
            name: 'hedgehog',
            img: 'images/hedgehog.jpg'
        },
        {
            name: 'istanbul',
            img: 'images/istanbul.jpg'
        },
        {
            name: 'istanbul',
            img: 'images/istanbul.jpg'
        },
        {
            name: 'leaf',
            img: 'images/leaf.jpg'
        },{
            name: 'leaf',
            img: 'images/leaf.jpg'
        },
        {
            name: 'sun',
            img: 'images/sun.jpg'
        },
        {
            name: 'sun',
            img: 'images/sun.jpg'
        },
        {
            name: 'mesut',
            img: 'images/mesut.jpg'
        },
        {
            name: 'mesut',
            img: 'images/mesut.jpg'
        },
        {
            name: 'snowman',
            img: 'images/snowman.jpg'
        },
        {
            name: 'snowman',
            img: 'images/snowman.jpg'
        },
        {
            name: 'ladybird',
            img: 'images/ladybird.jpg'
        },
        {
            name: 'ladybird',
            img: 'images/ladybird.jpg'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
]    

cardArrayLevel2.sort(()=> 0.5 - Math.random());    

const grid = document.querySelector('.level2');
//const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardWon = [];

function createboardlevel2(){
    for(let i=0 ; i < cardArrayLevel2.length ; i++) {
        var card = document.createElement('img');
        card.setAttribute('src','images/galaxy.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
    }
}


function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if(optionOneId == optionTwoId){
        
        cards[optionOneId].setAttribute('src','images/galaxy.jpg');
        cards[optionTwoId].setAttribute('src','images/galaxy.jpg');
       // alert('You have clicked same image');

    }else 
    if(cardsChosen[0] === cardsChosen[1]){
        //alert("You found a match");
        cards[optionOneId].setAttribute('src','images/white.jpg');
        cards[optionTwoId].setAttribute('src','images/white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/galaxy.jpg');
        cards[optionTwoId].setAttribute('src', 'images/galaxy.jpg');
        //alert('Sorry, try again');

    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardWon.length ;
    if(cardWon.length === cardArrayLevel2.length/2){
        resultDisplay.textcontent = 'WOW, YOU FIND THEM ALL!!';
        window.location.href = "simplecardgame/index.html";
    }
}
 
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArrayLevel2[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArrayLevel2[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,300);
    }
}

createboardlevel2();


})