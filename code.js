function Solution6(){
	
	
currentNum=1 * 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
	document.getElementById("solution5").innerHTML="Smallest product = "+currentNum;
};function Solution5(){
	
	
currentNum=1 * 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
	document.getElementById("solution5").innerHTML="Smallest product = "+currentNum;
};


function Solution4(){
	
	var currentNum="12345";
	var currentInverse="";
	var largest = 0;
	
	
	for (var j = 999; j > 500; j--) {
		for (var k = 999; k > 500; k--) {
			currentNum=j*k;
			currentNum=currentNum.toString();
			currentInverse="";
			for (i=currentNum.length; i>=0; i--){
				currentInverse=currentInverse+currentNum.charAt(i);
				if(currentNum===currentInverse &&currentInverse>largest){
				largest=currentNum;
			}


	}
		}		

	}

	
	document.getElementById("solution4").innerHTML="Largest palindromic number which is product of 2 three digit numbers = "+largest;
}

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