// Esce l'alert coi numeri da memorizzare; :memo:
// L'utente memorizza (o cerca di memorizzare) i numeri; :confounded:
// L'utente chiude l'alert; :open_mouth:
// L'utente per 30 secondi non vede nulla....e quindi cercherà immagino di ripetersi mentalmente i numeri :stuck_out_tongue:
// L'utente prova a inserire, uno alla volta, tutti e 5 i numeri :muscle:


var arrayRandom = [];


while (arrayRandom.length < 5){

  var numbers = randomNumber(1,10);

if (arrayRandom.includes(numbers)==false){
  arrayRandom.push(numbers);
}

}
console.log(arrayRandom);

alert(`you have 3 secs to remember the number you see now!! ${arrayRandom}`);

setTimeout(userchoice,20000);


// function for genrated number
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function for genrated number

// function userchoice
function userchoice(){
  var arrayuserChoice = [];

  for(var i=0;i < 5; i++){
    var usernum = parseInt(prompt('inser the number you recently viewed'));

    if (!arrayuserChoice.includes(usernum)){
    arrayuserChoice.push(usernum);
  }

}
  console.log(`the number you guess  is ${arrayuserChoice}`);
  console.log(`random number generated earlier is  ${arrayRandom}`);



}
