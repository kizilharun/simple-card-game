document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray =[
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
]

cardArray.sort(()=> 0.5 - Math.random());    

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardWon = [];

function createboard(){

    for(let i=0 ; i < cardArray.length ; i++) {
        var card = document.createElement('img');
        card.setAttribute('src','images/stars.jpg');
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
        
        cards[optionOneId].setAttribute('src','images/stars.jpg');
        cards[optionTwoId].setAttribute('src','images/stars.jpg');
        alert('You have clicked same image');

    }else 
    if(cardsChosen[0] === cardsChosen[1]){
        alert("You found a match");
        cards[optionOneId].setAttribute('src','images/white.jpg');
        cards[optionTwoId].setAttribute('src','images/white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/stars.jpg');
        cards[optionTwoId].setAttribute('src', 'images/stars.jpg');
        alert('Sorry, try again');

    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardWon.length ;
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textcontent = 'WOW, YOU FIND THEM ALL!!';
    }
}
 
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500);
    }
}
createboard();
})