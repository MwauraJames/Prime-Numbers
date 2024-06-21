function prime(){
  let no=document.getElementById("enter").value;

  let primes=[2,3,5,7];
  let ref=[2,3,5,7];
  let i;

  for(i=2;i<=no;i++){

    if(i%2!==0&&i%5!==0&&i%3!==0&&i%7!==0){
      primes.push(i);
        }

       
  }

  document.getElementById("disp").innerHTML=primes;
  
}
 