function Solution3(){
	
	var largestFactor=1;
	var currentPrime=1;
	var number = 600851475143;
	var isPrime=1;
	
	for (i=2; i<number; i++){
		isPrime=1;
		for (var j = 2; j < i; j++) {
			if(i%j===0){
				isPrime=0;
			}
			
		}

		if(isPrime&&number%i===0){
					largestFactor=i;
		}
			
		


	}
	document.getElementById("solution3").innerHTML="Largest Prime factor of "+ number+" = "+largestFactor;
}

function Solution2(){
	
	var total=0;
	var previous=1;
	var current=2;
	var sum = 0;
	while (current <4000000){
		if(current%2===0){
			total=total+current;
		}
		sum=previous+current;
		previous=current;
		current=sum;
	}
	document.getElementById("solution2").innerHTML="Sum of even Fibonacci = "+total;
}

function Solution1(){
	
	var total=0;
	for (i=0; i<100; i++){
		if(i%3===0 || i%5===0){
			total=total+i;
		}
	}
	document.getElementById("solution1").innerHTML="Sum of multiples = "+total;
}