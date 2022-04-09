function rollFunction(){
    let x = Math.floor((Math.random() * 6) + 1);
    document.querySelector("#m1").innerText = x;
    let y = Math.floor((Math.random() * 6) + 1);
    document.querySelector("#m2").innerText = y;
    let z = Math.floor((Math.random() * 6) + 1);
    document.querySelector("#m3").innerText = z;
    console.log(x)
    
    if(x > y && x > z){
       document.querySelector("#member-1").style.backgroundColor="green";
       document.querySelector("#winner").innerText ="WINNER IS Member A ";
    //    document.querySelector("#win").innerText = "Member A"
       console.log("x",x)
    }
    else if(x < y && x < z){
        document.querySelector("#member-1").style.backgroundColor="red";
        // document.querySelector("#winner").innerText = x;
        console.log("x",x)
     }
     else if (x == y || x == z){
        document.querySelector("#member-1").style.backgroundColor="blue";

     }
     else{
        document.querySelector("#member-1").style.backgroundColor="yellow";
     }
//###########----Member-2----##############

     if(y > x && y > z){
        document.querySelector("#member-2").style.backgroundColor="green";
        document.querySelector("#winner").innerText ="WINNER IS Member B ";
        //document.querySelector("#win").innerText = "Member B"
        console.log("x",x)
     }
     else if(y < x && y < z){
         document.querySelector("#member-2").style.backgroundColor="red";
        //  document.querySelector("#winner").innerText = y;
         console.log("x",x)
      }
      else if (x == y || y == z){
         document.querySelector("#member-2").style.backgroundColor="blue";
 
      }
      else{
         document.querySelector("#member-2").style.backgroundColor="Yellow";
      }
//##############Member 3################

      if(z > x && z > y){
        document.querySelector("#member-3").style.backgroundColor="green";
        document.querySelector("#winner").innerText = "WINNER IS Member C ";
        //document.querySelector("#win").innerText = "Member C"
        console.log("x",x)
     }
     else if(z < x && z < y){
         document.querySelector("#member-3").style.backgroundColor="red";
        //  document.querySelector("#winner").innerText = y;
         console.log("x",x)
      }
      else if (x == z || y == z){
         document.querySelector("#member-3").style.backgroundColor="blue";
 
      }
      else{
         document.querySelector("#member-3").style.backgroundColor="yellow";
      }

/////#######--For DRaw Match---#######

if(y == z && y >x ){
   document.querySelector("#winner").innerText =" MATCH DRAW"
}
else if(x == y && y > z){
   document.querySelector("#winner").innerText =" MATCH DRAW"
}
else if(z == x && z > y){
   document.querySelector("#winner").innerText =" MATCH DRAW"
}




}
