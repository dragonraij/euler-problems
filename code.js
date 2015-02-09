function Solution8(){
	
	
var number = "73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450";

for (var i = 0; i < 996; i++) {
	1000
};


	document.getElementById("solution8").innerHTML="Value of product is "+(primes.pop());
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