/* chiedere email (input mail) e controllare che appartenga (if) ad una lista (array) 

stampare messaggio di conferma/negazione accesso (alert)

generare numero da 1 a 6 (math) per giocatore (var1) e cpu (var2)

confrontare i due valori (if) e decretare il maggiore */

var listaMail = ["fabiobianchi@gmail.com", "mariorossi@gmail.com", "simonaverdi@gmail.com", "carlabruni@gmail.com"];

var invia = document.getElementById("invia");
invia.addEventListener('click',
    function() {
        var email = document.getElementById("email").value;
        if (listaMail.includes(email)) {
            alert ('Benvenuto, preparati a lanciare i dadi');
/*  Attiva la Diceboard e nascondi la Mailbox */
            var mainContainer = document.getElementById("main_container");
            mainContainer.className ="visible";
            var mailBox = document.getElementById("mailbox");
            mailbox.className ="hidden";

        } else {
            alert ('Accesso non autorizzato');
        }
    }

)

var playerDice = document.getElementById("player_output");
var cpuDice = document.getElementById("cpu_output");
var result = document.getElementById("result");

/*  Lancia il dado del giocatore */
var playerButton = document.getElementById("player_button");
playerButton.addEventListener('click',
    function() {
/*  Genera il numero da 1 a 6 e stampa nel container */
    playerDice = Math.floor(Math.random()*5+1);
    console.log(playerDice);
    document.getElementById("player_output").innerHTML = playerDice;  
    }
)
/*  Lancia il dado del computer */
var cpuButton = document.getElementById("cpu_button");
cpuButton.addEventListener('click',
    function() {
/*  Genera il numero da 1 a 6 e stampa nel container */
    cpuDice = Math.floor(Math.random()*5+1);
    console.log(cpuDice);
    document.getElementById("cpu_output").innerHTML = cpuDice;
    }
)

var resultButton = document.getElementById("result_button");
resultButton.addEventListener('click',

    function() {
    if (playerDice > cpuDice) {
    result = "You win!";
    console.log(result);
    }
    
    else if (playerDice == cpuDice) {
    result = "Draw!";
    console.log(result);    
    }
    
    else {
    result = "You lose!";
    console.log(result);    
    }

    document.getElementById("result").innerHTML = result;
    result = document.getElementById("result");
    result.className = "visible";

    }


)



var refresh = document.getElementById("refresh_button");
refresh.addEventListener('click',

    function() {
    playerDice = document.getElementById("player_output").innerHTML="";  
    cpuDice = document.getElementById("cpu_output").innerHTML="";  
    result = document.getElementById("result").innerHTML="";
    result.className ="hidden";
    }

)

