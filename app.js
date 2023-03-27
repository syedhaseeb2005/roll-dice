let player1score=document.querySelector('.player1Score')
let player1DiceScore=document.querySelector('.player1DiceScore')
let player2score=document.querySelector('.player2Score')
let player2DiceScore=document.querySelector('.player2DiceScore')
let player1=document.querySelector('.player1')
let player2=document.querySelector('.player2')
let newgamebtn=document.querySelector('.GameBtn')
let diceimg=document.querySelector('.dice-img')
let rollbtn=document.querySelector('.rollDicebtn')
let holdbtn=document.querySelector('.holdbtn')

rollbtn.addEventListener('click' , Rolldicehandler)

var activeplayer = 1

function Rolldicehandler() {
    var dicenumber = Math.round(Math.random() * 5) +1
    diceimg.classList.remove('hidden')
    diceimg.src = `./images/${dicenumber}.png`
    console.log(diceimg)
    if(dicenumber ==1 ){
        if(activeplayer == 1){
            player1DiceScore.textContent = 0;
            activeplayer = 2
        }else{
            activeplayer = 1
            player2DiceScore.textContent = 0;
        }
        player1.classList.toggle('active')
        player2.classList.toggle('active')
    }else{
        if(activeplayer == 1){
            player1DiceScore.textContent = Number(player1DiceScore.textContent) + dicenumber
        }else{
            player2DiceScore.textContent = Number(player2DiceScore.textContent) + dicenumber
        }
    }
}

holdbtn.addEventListener('click' , holdhandler)

function holdhandler(){
    player1.classList.toggle('active')
    player2.classList.toggle('active')

    if(activeplayer == 1){
        activeplayer = 2
        player1score.textContent = Number(player1score.textContent) +Number(player1DiceScore.textContent)
        player1DiceScore.textContent = 0;
        if(Number(player1score.textContent) >=50){
            alert('Player 1 win')
        }
    }else{
        activeplayer = 1;
        player2score.textContent = Number(player2score.textContent) + Number(player2DiceScore.textContent)
        player2DiceScore.textContent = 0 ;
        if(Number(player2score.textContent) >=50){
            alert('Player 2 win')
        }
    }
}

newgamebtn.addEventListener('click' , () => {
    location.reload();
})
 
