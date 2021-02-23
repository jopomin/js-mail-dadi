/* chiedere email (input mail) e controllare che appartenga (if) ad una lista (array) 

stampare messaggio di conferma/negazione accesso (alert)

generare numero da 1 a 6 (math) per giocatore (var1) e cpu (var2)

confrontare i due valori (if) e decretare il maggiore */

var listaMail = ["fabiobianchi@gmail.com", "mariorossi@gmail.com", "simonaverdi@gmail.com", "carlabruni@gmail.com"];
console.log(listaMail);

var email = prompt('inserisci la tua mail');
console.log(email);

if (listaMail.includes(email)) {
    alert ('Benvenuto, preparati a lanciare i dadi');
    var player = Math.floor(Math.random()*5+1);
    console.log(player);
    var cpu = Math.floor(Math.random()*5+1);
    console.log(cpu);

    if (player > cpu) {
        console.log("Hai vinto");
    }
    else if (player == cpu) {
        console.log("Pareggio");
    }
    else {
        console.log("Hai perso");
    }
    
    } else {
        alert ('Accesso non autorizzato');
    }
    

/* invia = document.getElementById("invia");
invia.addEventListener ('click',
    function() {
        email = document.getElementById("email").value;
        console.log(email);
    }

) */

/* if listaMail.includes() */
