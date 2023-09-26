let input = document.querySelector("input") ;
let checkButton = document.querySelector("#button") ;
let guess = document.querySelector("#guess") ;
var remainChances = document.querySelector("#chances") ;
var chance = 10 ;
var randomNum = Math.floor(Math.random()*100) ;
input.focus();



checkButton.addEventListener('click', function(){
    if(chance > 0){
    chance--   ;
    remainChances.innerHTML = chance ;
    let inputValue = input.value;

    if(inputValue==randomNum){
        [guess.textContent, input.disabled ] = ["Congratulations You Win" , true],
        [guess.style.color, checkButton.textContent] = ["green", 'Replay'] ;
        checkButton.addEventListener("click", function(){window.location.reload()}) ;
        
    }else if(inputValue > randomNum && inputValue < 100){
        [guess.textContent, remainChances.textContent ] = ["Your guess is high" , chance] ;

    }else if(inputValue < randomNum && inputValue > 0){
        [guess.textContent, remainChances.textContent ] = ["Your guess is low" , chance] ;

    }else{
        [guess.textContent, remainChances.textContent ] = ["Your Number is Invalid" , chance] ;
        [guess.style.color] = ["red"] ;
    }

    }else if (chance < 1){
        [ input.disabled ,guess.textContent] = [true,  "You Lost the Game!"], 
        [guess.style.color, checkButton.textContent] = ["red", 'Replay'] ;
        checkButton.addEventListener("click", function(){window.location.reload()}) ;
    }
})
















