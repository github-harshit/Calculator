var buttons= document.querySelectorAll(".box"); 
 var display = document.getElementById("display"); 
 var op1 = ""; 
 var op2=""; 
 var operator= ""; 

 



 


    var equals =false; 
    var operatorcheck  =false; 
    var check = true;  // operand 1 fill hora hai 
 for(var i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
     // instead of this you can also use event.target; 
     // use event.target 
     

     var val = this.getAttribute("data-val"); 
      
     if(val=='+' || val=='-' || val=='*'|| val=="/"){ 
        operatorcheck = true; 
        if(op1!=""){

        
             operator= val;  
             display.innerText=val;
           
           
             // if condition hai isliye ki ab value operand 1 me na add ho 
              if(check==true){
        
               check= false; 

             
        }
    }
        
       
        
          

     }else if(val=="="){
        equals= true; 
        console.log(op1);
        console.log(op2); 
        var t1 = parseFloat(op1); 
        var t2 = parseFloat(op2); 
        var ans; 

    if(operator=="+"){
       ans = t1+t2; 
    }else if(operator=="-"){
        ans = t1-t2; 
    }else if(operator=="*"){
        ans = t1*t2; 
    }else if(operator=="/"){
        ans = t1/t2; 
    }
        
        display.innerHTML=ans; 



        op1 = display.innerText;
        check = false; 
        op2="";  

     }else if(val=="AC"){
        op1=""; 
        op2=""; 
        operator=""; 
        display.innerText=""; 
        check=true; 
      }else if(val=="CE"){
        var store = display.innerText; 
        if(store==op1){
            op1=store.slice(0,store.length-1);

        }else if(store==op2){
            op2=store.slice(0,store.length-1);

        }else if(store==operator){
            operator="";
            check = true; 

        }
        display.innerText=store.slice(0,store.length-1); 
      }else if(val=="+/-"){
       var v = display.innerText;
       var nv= "-" +v; 
       display.innerText=nv; 
       if(v==op1){
         op1 = nv; 
         
       }else if(v==op2){
        op2 = nv; 
       }


      }
     else{
        if(equals==true && operatorcheck==true){
            op1=val; 
            display.innerText=op1; 
            equals=false;
        }else{
             if(check==false){
             op2+=val; 
             display.innerText+=val; 
        }else{
              op1+=val; 
        display.innerText+=val; 
        }
        }
       

      
      
     }
    });
 }
  function checkGit(){
    console.log("just checking git"); 
  }
   function checkingTerminak(){
    console.log("checking from terminal ")
   }
    function checkingPassword(){
        console.log("checking password "); 
    }