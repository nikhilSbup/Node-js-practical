function isPrime(num){
    if (num==1){
        return true;
    }
    for (i=2;i<=0.5*num;i++){
        return false
    }
}

function isPerfect(num){
    sum= 0
    for(i=1;i<num;i++){
        sum+=i
    }
    if (sum == num){
        return "Perfect Number"
    }
    else{
        return "Not a perfect Number"
    }
}
module .exports={isPrime, isPerfect}