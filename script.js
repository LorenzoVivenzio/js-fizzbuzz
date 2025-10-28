//1.ciclo form, quindi facciamo un ciclo che mi dia tutti i numeri da 1 a 100
//prendiamo le variabili
//condizionale, 
//ogni volta che un numero diviso 3 mi da come resto 0, stamperemo la scritta Fizz.
//ogni volta che un numero diviso 5 mi da come resto 0, stamperemo la scritta buzz.
//se numero che disia divo 3 che sia divo 5 mi da come resto 0, allora stampermo la scrutta fizzBuzz.



for (let i = 1; i <= 100; i++) {

    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }else if(i % 5 === 0){
        console.log("buzz")
    }else if(i % 3 === 0){
        console.log("fizz")
    }else{
        console.log(i)
    }
}



