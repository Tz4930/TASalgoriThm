
function encryption(){

    var inputVal = document.getElementById("myInput").value;
    var inputArray = new Array();
    var cipher= new Array();
    const usingSplit = inputVal.split(" ");
    var i=0; 
    
    var lengths = inputVal.length;
    
        for(j = 0; j < lengths; j++)    
         {    
           if(usingSplit[j] == "A" || "a")
            {
               var a = 36+lengths;
               var b = 35+lengths;
               var c =a+b.toString();
               
                  
           } 
            else if(usingSplit[j] == "B" || "b") {
            var a = 36+lengths;
            var b = 36+lengths;
            var c =a+b.toString();
            
          }else if(usingSplit[i] == "C" || "c") {
            var a = 36+lengths;
            var b = 37+lengths;
            var c =a +b.toString();
            // cipher [i]=c;
               
        }   else if(usingSplit[i] == "D" || "d") {
            var a = 36+lengths;
            var b = 38+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "E" || "e") {
            var a = 36+lengths;
            var b = 39+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "F" || "f") {
            var a = 37+lengths;
            var b = 30+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "G" || "g") {
            var a = 37+lengths;
            var b = 31+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "H" || "h") {
            var a = 37+lengths;
            var b = 32+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "I" || "i") {
            var a = 37+lengths;
            var b = 33+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "J" || "j") {
            var a = 37+lengths;
            var b = 34+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "K" || "k") {
            var a = 37+lengths;
            var b = 35+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "L" || "l") {
            var a = 37+lengths;
            var b = 36+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "M" || "m") {
            var a = 37+lengths;
            var b = 37+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "N" || "n") {
            var a = 37+lengths;
            var b = 38+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "O" || "o") {
            var a = 37+lengths;
            var b = 39+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "P" || "p") {
            var a = 38+lengths;
            var b = 30+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }    else if(usingSplit[i] == "Q" || "q") {
            var a = 38+lengths;
            var b = 31+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "R" || "r") {
            var a = 38+lengths;
            var b = 32+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "S" || "s") {
            var a = 38+lengths;
            var b = 33+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "T" || "t") {
            var a = 38+lengths;
            var b = 34+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "U" || "u") {
            var a = 38+lengths;
            var b = 35+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "V" || "v") {
            var a = 38+lengths;
            var b = 36+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "W" || "w") {
            var a = 38+lengths;
            var b = 37+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "X" || "x") {
            var a = 38+lengths;
            var b = 38+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }  else if(usingSplit[i] == "Y" || "y") {
            var a = 38+lengths;
            var b = 39+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
        }   else if(usingSplit[i] == "Z" || "z") {
            var a = 39+lengths;
            var b = 30+lengths;
            var c =a +b.toString();
            //cipher [i]=c;
            
        }  
        else{
            alert("Incorrect input");
        }
        i++;
        cipher.push(c);
    }   
    console.log(i)
    console.log(cipher)
    
}

