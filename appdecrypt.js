function decryption(){

    var inputVal = document.getElementById("myInput").value;
    var finalCipher2= new Array();
    var finalCipher3= new Array();
    var finalCipher4= new Array();
    var result = new Array();
    var cipher= new Array();
    var Val = Array.from(inputVal);
    var c=0,j=0,i=0,k=0,d=0,e=0; 
    var finalCipher= new Array(); 

    var lengths = inputVal.length;
  
   conVal=Val.length;
   console.log(nLength);
    var i=0;
    //["1", "8", "1", "7", "2", "0", "1", "9", "1", "7", "1", "6", "1", "9", "1", "8", "1", "8", "1", "7", "2", "0", "1", "9", "1", "8", "1", "7", "2", "0", "1", "9"]
   
    while( i<conVal){
       var newval = (Val[i])+(Val[i+1]);
       cipher.push(newval);
        i++;
        i++;
    }
    var nLength=cipher.length;
    console.log(nLength);
    while(j<nLength){
       var secVal= parseInt(cipher[j])+20;
        finalCipher.push(secVal);
       j++;
       j++;
       j++; 
       j++;  
    }
    var len=nLength/8;
    var nleng=nLength/4;
    while(c<nleng){
        var secVal1=finalCipher[c]-30;
        finalCipher2.push(secVal1);
        c++;
    }
    //var usingSplit = inputVal.split(" ");
    var nleng1=finalCipher2.length;
    while(d<nleng1){
         secVal2=finalCipher2[d]-len;
        finalCipher3.push(secVal2);
        d++;
    }
    var data=finalCipher3.toString().split(",");
     while( e<(len*2)){
        var newval12 = (data[e])+(data[e+1]);
        finalCipher4.push(newval12);
          e++;
          e++
      }
      

    while( k<=len){


        if(finalCipher4[k] === "65" ){
            result.push("A");
        }
 
        else if(finalCipher4[k] === "66" ){
            result.push("B");
        }
 
        else if(finalCipher4[k] === "67" ){
            result.push("C");
        }
 
        else if(finalCipher4[k] === "68" ){
            result.push("D");
        }
 
        else if(finalCipher4[k] === "69" ){
            result.push("E");
        }
 
        else if(finalCipher4[k] === "70" ){
            result.push("F");
        }
 
        else if(finalCipher4[k] === "71" ){
            result.push("G");
        }
 
        else if(finalCipher4[k] === "72" ){
            result.push("H");
        }
 
        else if(finalCipher4[k] === "73" ){
            result.push("I");
        }
 
        else if(finalCipher4[k] === "74" ){
            result.push("J");
        }
 
        else if(finalCipher4[k] === "75" ){
            result.push("K");
        }
 
        else if(finalCipher4[k] === "76" ){
            result.push("L");
        }
 
        else if(finalCipher4[k] === "77" ){
            result.push("M");
        }
        
        else if(finalCipher4[k] === "78" ){
            result.push("N");
        }
 
        else if(finalCipher4[k] === "79" ){
            result.push("O");
        }
 
        else if(finalCipher4[k] === "80" ){
            result.push("P");
        }
 
        else if(finalCipher4[k] === "81" ){
            result.push("Q");
        }
 
        else if(finalCipher4[k] === "82" ){
            result.push("R");
        }
 
        else if(finalCipher4[k] === "83" ){
            result.push("S");
        }
 
        else if(finalCipher4[k] === "84" ){
            result.push("T");
        }
 
        else if(finalCipher4[k] === "85" ){
            result.push("U");
        }
 
        else if(finalCipher4[k] === "86" ){
            result.push("V");
        }
 
        else if(finalCipher4[k] === "87" ){
            result.push("W");
        }
 
        else if(finalCipher4[k] === "88" ){
            result.push("X");
        }
 
        else if(finalCipher4[k] === "89" ){
            result.push("Y");
        }
 
        else if(finalCipher4[k] === "90" ){
            result.push("Z");
        }
        else
        {
            alert("You insert the wrong Value");
        }
        k++;
        
     }
         //console.log(cipher);
    //console.log(finalCipher3);
    console.log(finalCipher4);
    console.log(result);
    document.getElementById("textP").innerHTML = result.toString().replace(/,/ig, " ");
    
 
}