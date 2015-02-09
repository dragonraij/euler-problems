function Solution8(){

var current =1;
var max ="";

	
var number = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

for (var i = 0; i < 996; i++) {
	current=1
	max=0;
	for (var j = i; j <=(i+3) ; j++) {
		current=current*parseInt(number.charAt(j));
		
	};		
	if(current>max){max=current};
};


	document.getElementById("solution8").innerHTML=max+" Value of product is "+current;
};

function Solution7(){
	
	
var primes = new Array();
primes.push(2);
var current=3;

while(primes.length<=10000) {
	prime=1 // flag current number as prime	
	
	for	(index = 0; index < primes.length; index++) {
    	if (current%primes[index]==0) {
			prime=0; // if divisible number is not prime
		};
	
	};	
		
	if(prime==1){
		primes.push(current)	// add prime number to list
	}
	current=current+1;// increment current number
}


	document.getElementById("solution7").innerHTML="10001st prime number is "+(primes.pop());
};

function Solution6(){
	
	
var sum =0;
var squares=0;

for (var i = 0; i <= 100; i++) {
	sum=sum+i;
	squares= squares + (i*i);
	
};
sum=sum*sum;// square the sums 
	document.getElementById("solution6").innerHTML="Difference of first 100 square sums and sum squares = "+(sum-squares);
};

function Solution5(){
	
	
currentNum=1 * 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
	document.getElementById("solution5").innerHTML="Difference of first 100 square sums and sum squares = "+currentNum;
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