function getHistory(){
  
    
    return document.getElementById("historytxt").innerText;

}
function printHistory(num){
     document.getElementById("historytxt").innerText=num
}
function getOutput(){
  
    
    return document.getElementById("output-value").innerText;
    

}
function printOutput(num){
    if(num==""){
    document.getElementById("output-value").innerText= num;
    }
    else{
        document.getElementById("output-value").innerText= getFormatNumber(num);
    }
}

function getFormatNumber(num){
    if(num=="-"){
        return "";
    }
var n=Number(num)
var val=n.toLocaleString("en");
return val
}
function reverseFormatNumber(num){
 return Number(num.replace(/,/g,''));
}
//alert(getOutput())
var operator=document.getElementsByClassName("operator");
var strlen=operator.length;
for(let i=0;i<strlen;i++){
    operator[i].addEventListener('click',function(){
       // alert("clicked operator is:"+this.id);
       if(this.id=="clear"){
           printHistory("");
           printOutput("");
       }
       else if(this.id=="backspace"){
           var output=reverseFormatNumber(getOutput()).toString();
           console.log(output);
           if(output){
              output= output.substr(0,output.length-1);
              printOutput(output);
           }

       }
       else {
        var output=getOutput();
        var history=getHistory();
        if(output!=""){
            output=reverseFormatNumber(output);
            history=history+output;
            if(this.id=="="){
                var result=eval(history);
                printOutput(result);
                printHistory("");
            }
            else{
                history=history+this.id;
                printHistory(history);
                printOutput("")
            }
        }
    }

    })
}
var number=document.getElementsByClassName("number");
var strlen2=number.length;
for(let i=0;i<strlen2;i++){
    number[i].addEventListener('click',function(){
        //alert("clicked operator is:"+this.id);
        let output=reverseFormatNumber(getOutput());
        
        console.log(output)
        if(output!=NaN){
            output=output+this.id;
            console.log(output)
            printOutput(output)
        }
    })
}


