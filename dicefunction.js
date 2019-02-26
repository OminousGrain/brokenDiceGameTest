


//create a dice game that rolls and adds a dice when you reach 20 it resets
console.log('heeeeee')



let diceGame={
   dice:0,

//function that rolls dice

//    rollDice(){
//     let roll = Math.floor(Math.random()*6+1)
//     return roll
//     },

//function that adds dice


    addDice(){
        let adding = this.rollDice()
        // diceDisplay.src = `diceImages/dice${diceGame.rollDice()}.png`
        
        scoreHandler.innerText=`${adding}`
        
        console.log(`dice sum is ${this.dice}`)
        console.log(`dice rolled is ${adding}`)
        console.log('*********************************************')
        

        //LANDING ON A ONE///////////////////////////////////////////
        if(adding===1){
            this.dice===0;
            scoreHandler.innerText=`${0}`
            console.log(scoreHandler.innerText)
            console.log(`OOPS! YOU LANDED ON A !dice sum is now  ${this.dice}`)
            diceDisplay.src = '';

            console.log('*********************************************')
        }
        ///adding to dice sum
        else{
            this.dice+=adding;

            console.log(`dice sum is now  ${this.dice}`)
        }
       this.checkSum(this.dice)
    
    },

    //function that checks if dice are greater than 20 if it is reset
    checkSum:function(diceSum){
        if(diceSum>=21){
            console.log('you have won')
            this.dice=0;
            scoreHandler.innerText=`${0}`
            console.log(scoreHandler.innerText)
            console.log(`dice sum is RESET  ${0}`)
            diceDisplay.src = '';
            console.log('*********************************************')
        }
    }
};




let diceDisplay=document.getElementById("diceImage");
let myHeading=document.getElementById("myHeading");
let clickHandler=document.getElementById("rollDice");
let scoreHandler=document.getElementById("score")




clickHandler.addEventListener( 'click',()=>{
    myHeading.style.color='red';

    let roll = Math.floor(Math.random()*6+1)
    console.log(roll)

    diceDisplay.src = 'diceImages/dice' + roll + '.png'

   
    
    

 
    diceGame.addDice();
});







// //Testing Dice role 
// console.log(diceGame.rollDice())

// console.log(diceGame.rollDice())

// console.log(diceGame.rollDice())

// console.log(diceGame.rollDice())




