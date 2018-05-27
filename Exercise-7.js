// Exercise 7 Looping - Asteriks

// 1. Menyusun barisan bintang
var rows=5;
for (rows=1 ; rows<=5 ; rows++) {
  console.log ("*")
} 


// 2. Menyusun barisan bintang dengan nested LOOPING
var rows2 = 5
for (var i=0; i<rows2; i++){
  var print =''
  for (j=0; j<rows2; j++){
    print =print + '*'
  }
  console.log(print)
}
// 2. Menyusun barisan bintang dengan nested LOOPING

for(rows3=1; rows3 <=6; rows3++)
{
   for (column=1; column < rows3; column++)
     {
    print=print+("*");        
      }
 console.log(print);
 print ='';    
} 
