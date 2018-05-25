//////////////////// SOAL NOMOR 1///////////
function shoutOut(){
    return ("hallo function");
  }
  console.log (shoutOut())
  

//////////////////// SOAL NOMOR 2///////////
function calculateMultiply(){
    return num1*num2; 
}
var num1 =3 ;
var num2=4 ;
var hasilPerkalian = calculateMultiply(num1*num2);
console.log(calculateMultiply());


//////////////////// SOAL NOMOR 3///////////
function processSentence(){
    var fullSentence = "Nama Saya " + name + ",umur saya " + age + " ,alamat saya " + address + " dan saya punya hobi " + hobby; 
    return fullSentence
}
  
var name = "Sherlock Holmes";
var age = 35;
var address = "221B Baker Street ";
var hobby = "Membaca ";
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);