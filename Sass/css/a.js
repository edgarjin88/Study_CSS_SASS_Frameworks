

function star(turn) {
  let mid = Math.ceil(turn/2)-1
  let total=(turn*2) -1;
  console.log('lenth : ', mid);
  console.log('total : ', total);
   
  let x = turn/2; 
  let star=[]

  for(i=0; i < turn; i++){

    if(i < mid){

      star.push("*")
      console.log(star.join(""));;
      // console.log('this  is concat', star);
    }

    if(i >mid){
      star.pop();
      console.log(star.join(""))
    }
    

  }

  
}

star(5)