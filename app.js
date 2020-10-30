
function encryption(){

    var inputVal = document.getElementById("myInput").value;
    var inputArray = new Array();

    var cipher= new Array();
    //var usingSplit = inputVal.split(" ");
    var Val = Array.from(inputVal);
    var c=0,j=0,i=0; 
    var finalCipher= new Array();
    var table=[
        ["00",11,22,33,44,55,66,77,88,99],
        ["01",10,20,30,40,50,60,70,80,90],
        ["02",12,32,42,52,62,72,82,92,"09"],
        ["03",13,23,43,53,63,73,83,93,19],
        ["04",14,24,34,54,64,74,84,94,29],
        ["05",15,25,35,45,65,75,85,95,39],
        ["06",16,26,36,46,56,76,86,96,49],
        ["07",17,27,37,47,57,67,87,97,59],
        ["08",18,28,38,48,58,68,78,98,69],
            ]
    var newCipher= new Array();
    var newCipher1= new Array();
    var newCipher2= new Array();
    var newCipher3= new Array();
    
    var lengths = inputVal.length;
    
        while( j < lengths)    
        {    
            if(Val[j] ==="A" ||Val[j] === "a")
             {
                var a = 36+lengths;
                var b = 35+lengths;
                cipher.push(a);
                cipher.push(b);   
               
            } 
               else if(Val[j] === "B" ||Val[j] ===  "b") {
              var a = 36+lengths
              var b = 36+lengths
               
               cipher.push(a);
                cipher.push(b);
            }
            else if(Val[j] === "C" ||Val[j] === "c") {
              var a = 36+lengths
              var b = 37+lengths
              cipher.push(a);
              cipher.push(b);
            
            } else if(Val[j] === "D" ||Val[j] === "d") {
                var a = 36+lengths;
                var b = 38+lengths;
                cipher.push(a);
                cipher.push(b);
            }   
            else if(Val[j] ==="E" ||Val[j] === "e") {
                var a = 36+lengths;
                var b = 39+lengths;
                cipher.push(a);
                cipher.push(b);
            }  
             else if(Val[j] === "F" ||Val[j] === "f") {
                var a = 37+lengths;
                var b = 30+lengths;
                cipher.push(a);
                cipher.push(b);
            }  
             else if(Val[j] === "G" ||Val[j] === "g") {
                var a = 37+lengths;
                var b = 31+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "H" ||Val[j] === "h") {
                var a = 37+lengths;
                var b = 32+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "I" ||Val[j] === "i") {
                var a = 37+lengths;
                var b = 33+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "J" ||Val[j] === "j") {
                var a = 37+lengths;
                var b = 34+lengths;
                var c =a +b.toString();
                //cipher [i]=c;
            }   else if(Val[j] ==="K" ||Val[j] === "k") {
                var a = 37+lengths;
                var b = 35+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="L" ||Val[j] === "l") {
                var a = 37+lengths;
                var b = 36+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "M" ||Val[j] === "m") {
                var a = 37+lengths;
                var b = 37+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="N" ||Val[j] === "n") {
                var a = 37+lengths;
                var b = 38+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "O" ||Val[j] === "o") {
                var a = 37+lengths;
                var b = 39+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="P" ||Val[j] === "p") {
                var a = 38+lengths;
                var b = 30+lengths;
                cipher.push(a);
                cipher.push(b);
            }    else if(Val[j] ==="Q" ||Val[j] === "q") {
                var a = 38+lengths;
                var b = 31+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "R" ||Val[j] === "r") {
                var a = 38+lengths;
                var b = 32+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="S" ||Val[j] === "s") {
                var a = 38+lengths;
                var b = 33+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="T" ||Val[j] === "t") {
                var a = 38+lengths;
                var b = 34+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="U" ||Val[j] ==="u") {
                var a = 38+lengths;
                var b = 35+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="V" ||Val[j] === "v") {
                var a = 38+lengths;
                var b = 36+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="W" ||Val[j] === "w") {
                var a = 38+lengths;
                var b = 37+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] === "X" ||Val[j] === "x") {
                var a = 38+lengths;
                var b = 38+lengths;
                cipher.push(a);
                cipher.push(b);
            }  else if(Val[j] ==="Y" ||Val[j] === "y") {
                var a = 38+lengths;
                var b = 39+lengths;
                cipher.push(a);
                cipher.push(b);
            }   else if(Val[j] ==="Z" ||Val[j] === "z") {
                var a = 39+lengths;
                var b = 30+lengths;
                cipher.push(a);
                cipher.push(b);
                
            }
            else{
             alert("Incorrect input");
             }
        
            
            j++;
       }   
console.log(cipher)
var len = cipher.length;

console.log(cipher[0]);
var i=0,q=0;
while(i<len){
    var valu=cipher[i];
    r1=[valu-20];
    r2=[(valu-21)];
    r3=[(valu-18)];
    r4=[(valu-19)];
    
    //r1=[valu-20,"01",12,"07"];
    //r2=[11,"08",(valu-21),"02"];
    //r3=["05",10,"03",(valu-18)];
    //r4=["04",(valu-19),"06","09"];
    i++;


//console.log(r2[2]);
//console.log(r3[3]);
//console.log(r4[1]);
finalCipher.push(r1,r2,r3,r4);

}

    document.getElementById("textP").innerHTML = finalCipher.toString().replace(/,/ig, " ");
}






