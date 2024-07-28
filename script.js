
let humanScore = 0 
let computerScore = 0 
for (i = 1; i<= 5; i++){
    function getComputerChoice(){
        choice = Math.floor(Math.random() * 3)
        if (choice === 0){
          return "Rock"
        } else if (choice === 1){
            return "Paper"
        } else{
            return "Scissors"
        }
    }

    function getHumanChoice(){
        let Hchoice = prompt("Enter Rock, Paper or Scissors")
        let Humanpick = Hchoice[0].toUpperCase() + Hchoice.slice(1).toLowerCase()
        return Humanpick
    }

    function playGame(){
        function playRound(humanChoice, computerChoice){

            if (humanChoice === "Rock" && computerChoice === "Scissors"){
                 humanScore ++

            } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
                 humanScore ++

            } else if (humanChoice === "Paper" && computerChoice === "Rock"){ 
                humanScore ++
                
            } else if (computerChoice === "Rock" && humanChoice === "Scissors"){
                computerScore ++

            } else if (computerChoice === "Scissors" && humanChoice === "Paper"){
                computerScore ++

            } else if (computerChoice === "Paper" && humanChoice === "Rock"){
                 computerScore ++
            
            } else if (computerChoice === humanChoice){
                console.log ("It's a draw") 
            }

        }

        
        

        const humanselection = getHumanChoice()
        const computerselection = getComputerChoice()
        playRound(humanselection, computerselection)
        console.log("You played " + humanselection + " and Computer played " + computerselection)    
    }

    console.log(playGame())
   
}

console.log ("Final Score: Your score is " + humanScore + " and Computer score is " + computerScore )

if (humanScore < computerScore){
    console.log ("Computer Wins!")
} else if (humanScore > computerScore){
    console.log("You won!")
} else{
    console.log("Its a tie!")
}