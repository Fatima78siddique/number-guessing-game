import inquirer from "inquirer";

async function startGame() {
    const secretNum= Math.floor(Math.random() *10+1);

    async function playRound() {
        const userInput = await inquirer.prompt({
            type : "number",
            name : "userNum",
            message : "Enter Your Number "

        })


        const userNum = userInput.userNum
        if (userNum === secretNum){
            console.log(` congratulations!Your guessed Number is correct `);
            return true;
        }else{
            if(userNum>secretNum){
                console.log(`\n Your gussed number is greater than the actual number `);
            
            }else if(userNum < secretNum){
                console.log(`\n Your guessed number is less than the actual number `);
            

            }
            return false

            


        
        }
    }

    let isguessed = false;
    let attempts = 0;
     console.log(`\n Number guessing game!`)
      while(!isguessed){
        attempts++
        console.log( `Your attempt No.${attempts}`);
        isguessed = await playRound();
      }
      console.log(`You attempted ${attempts} times to guess the right Number `)

    }
    startGame();
