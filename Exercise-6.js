console.log("Soal Nomor 1")
console.log ("LOPPING PERTAMA ");
var i=2;
while (i<=20){
  console.log ( i + " -i love coding ");
  i+=2;
}

console.log ("LOPPING KEDUA")
var i=20; 
while (i>0){
    console.log(i + "- I will become fullstack developer");
    i-=2;
}
//////////////////////////////////////////
console.log ("Soal Nomor 2")
console.log ("Lopping pertama");
var i;
for (i = 1; i <= 20; i++) {
    console.log (i + "- I love Coding");
} 

console.log ("LOOPING KEDUA");
var i;
for (i =20; i >= 1; i--) {
    console.log (i + "- I will become fullstack developer");
}
//////////////////////////////////////////////////

console.log ("SOAL NOMOR 3 ")
var counter;
for (counter=1 ; counter<100; counter++){
  if (counter % 2 ==0) {
    console.log (counter + " GENAP")
  } else {
    console.log(counter + " GANJIL")
  }
}

var counter1;
for (counter1=1 ; counter1<100 ; counter1+=2) {
    if (counter1 % 3==0){
      console.log (counter1 + " kelipatan " + counter1)
    } else {
      console.log (" ");
    }
} 

var counter2;
for (counter2=1 ; counter2<100 ; counter2+=5) {
    if (counter2 % 6==0){
      console.log (counter2 + " kelipatan " + counter2)
    } else {
      console.log (" ");
    }
} 

var counter3;
for (counter3=1 ; counter3<100 ; counter3+=9) {
    if (counter3 % 10==0){
      console.log (counter3 + " kelipatan " + counter3)
    } else {
      console.log (" ");
    }
}
