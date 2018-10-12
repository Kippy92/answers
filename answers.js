//Setting and Swapping
		
		myNumber = 42;
		myName = "Nick";

		temp = myNumber;
		myNumber = myName;
		myName = temp;

		//print -52 to 1066 
		
		for(var i = -52; i <= 1066; i++) {
			console.log(i)
		};
		
		//Don't Worry Be Happy
		function beCheerful() {
			for (var i = 0; i < 98; i++) {
				if (i < 98) {
					console.log('good morning');
				}
			}
		}
		beCheerful();
		
		//Multiples of Three - but Not All
	for(var i = -300; i <= 0; i+= 3) {
		if (i == -3 || i == -6) {
			continue;
		}
		console.log(i);
	}
	
	//Printing Integers with While
	var i = 2000;
	while (i <= 5280) {
		console.log(i++);
	}
	
	//You Say It's Your Birthday
	var x = 20;
	var y = 5;
	if((x == 20 && y == 5) || (y == 20 && x == 5)) {
		console.log("How did you know?");
	} else {
		console.log("Just another day....");
	}
	
	//Leap Year
	function leapYear() {
		var year = 1900;
		if (((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)))
		{
			console.log("Leap Year!");
		} else {
			console.log("Not a Leap Year!");
		}
	}
	leapYear();

	//Print and Count
	var x = 0;
	for (var i = 512; i <= 4096; i+= 5) {
		console.log(i);
		x++;
	}
	console.log(x);
	
	//Multiples of Six
	var i = 0
	while (i < 60000){
		console.log(i += 6)
	}
	
	//Counting, the Dojo Way
	for(var i = 1; i <= 100; i++) {
  		if ((i % 5 == 0) && (i % 10 == 0)) {
    		console.log("Coding Dojo");
  		}
  		else if (i % 5 == 0) {
    		console.log("Coding");
  		}
  		else {
    		console.log(i);
  		}
	}
	
	//What Do You Know?
	function know(incoming) {
		console.log(incoming);
	}
	know("thing");

	//Whoa, That Sucker's Huge...
	var x = 0;
	for(var i = -300000; i <= 300000; i++) {
		if(i % 2 != 0) {
			x += i;
		}
	}
	console.log(x);
	
	//Countdown by Fours
	var i = 2020;
	while (i > 4) {
		console.log(i -= 4);
	}
	
	//Flexible Countdown
	function countDown(lowNum, highNum, mult) {
  		for(var x = highNum; x > lowNum; x--) {
			if (x % mult == 0) {
				console.log(x);
			}
		}
	};
	countDown(2, 9, 3);

	//The Final Countdown
	function finalCount(param1, param2, param3, param4) {
		var x = param2;
			while (x < param3) {
				if (x % param1 == 0 && x != param4) {
						console.log(x);
					}
					x++;
				}
			};
	finalCount(3,5,17,9);
	
	//Countdown
	function count(number) {
		var x = [];
		for (var i = number; i >= 0; i--) {
			x.push(i);
		}
		return console.log(x);
	}
	count(5);
	
	//Print and Return
	function print(num1, num2) {
		console.log(num1);
		return num2;
	}
	print(7,3);
	console.log(print(7,3));
	
	//First Plus Length
	function first(arr) {
		return arr[0] + arr.length;
	}
	console.log(first([4,3,4]));
	
	//Values Greater than Second
	var x = 0;
	function greaterValues(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[1]) {
				console.log(arr[i]);
				x++
			}
		}
		console.log(x);
	}
	greaterValues([1,3,5,7,9,13]);
	
	//Values Greater than Second, Generalized
	var x = 0;
	function greaterValues(arr) {
		if (arr.length > 1) {	
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] > arr[1]) {
					console.log(arr[i]);
					x++
				}
			}
			console.log(x);
		} else {
			console.log("There's only one value in this array!")
		}
	}
	greaterValues([1,2,4,7]);
	greaterValues([1]);

	//This Length, That Value
	function valueLength(num1, num2) {
		if (num1 == num2) {
			console.log("Jinx!");
		} else {
			var x = [];
			for(var i = 0; i < num1; i++){
				x.push(num2);
			};
			x.length = num1;
			console.log(x);
		}
	}
	valueLength(5,5);
	
	//Fit the First Value
	function fit(arr) {
		if (arr[0] > arr.length) {
			console.log("Too big!");
		} else if (arr[0] < arr.length) {
			console.log("Too small!");
		} else {
			console.log("Just right!");
		}
	}
	fit([4,2,3,3]);
	
	//Fahrenheit to Celsius
	function fahrenheitToCelsius(fDegrees) {
		console.log((fDegrees - 32)/(9/5));
	}
	//fahrenheitToCelsius(98);
	
	//Celsius to Fahrenheit
	function celsiusToFahrenheit(cDegrees) {
		console.log(((9/5) * cDegrees) + 32);
	}
	//celsiusToFahrenheit(4);

	//Where Celsius and Fahrenheit Meet
	for (var i = -200; i < 200; i++) {
		if (((i - 32)/(9/5)) == ((9/5) * i) + 32) {
			console.log(i);
		}
	}
	
	//Biggie Size
	function makeBig(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				arr[i] = "big";
			}
			}
			return arr;
		}
	console.log(makeBig([3,-2,-3,4,5]));
	
	//Print Low, Return High
	function lowHigh(arr) {
		var max = arr[0];
		var min = arr[0];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		console.log(min);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return max;
	}

	lowHigh([2,4,6,8]);
	
	//Print One, Return Another
	function printOne(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (i = (arr.length - 2)) {
				console.log(arr[i]);
			}
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] % 2 != 0) {
				return arr[i];
			}
		}
		}
	}
	
	// Double Vision
	function double(arr) {
		var x = [];
		for (var i = 0; i < arr.length; i++) {
			x.push((arr[i] * 2));
		}
		return x;
	}
	double([4,8,5,5]);
	
	//Count Positives
	function countPositives(arr) {
		var x = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				x++
			}
		}
		arr[arr.length - 1] = x;
		return arr;
	}
	console.log(countPositives([-2,-2,1,3,4,0]));
	
	//Evens and Odds
	function evensOdds(arr) {
		var odd = 0;
		var even = 0;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] % 2 != 0) {
				odd++;
			}
			else {
				odd = 0;
			}
			if (odd == 3) {
				console.log("That's odd!");
			}
		}
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] % 2 == 0) {
				even++;
			}
			else {
				even = 0;
			}
			if (even == 3) {
				console.log("Even more so!");
			}
		}
	}
	evensOdds([2,3,3,3,6,6,6,3,3,3,6,6,6,8,7,6,6,6]);
	
	//Increment the Seconds
	function increment(arr) {
		for(i = 0; i < arr.length; i++) {
			if (i % 2 != 0) {
				arr[i] ++;
			}
		}
		return arr;
	}
	console.log(increment([7,2,2,8,5,6]));
	
	//Previous Lengths
	function previous(arr) {
		for(var i = arr.length - 1; i > 0; i--) {
			arr[i] = (arr[i - 1]).length;
		}
		return arr;
	}
	console.log(previous(['hi','hey','hello']));
	
	//Add Seven to Most
	function addSeven(arr) {
		var x = [];
		for (var i = 1; i < arr.length; i++) {
			x.push(arr[i] + 7);
		}
		
		return x;
	}
	console.log(addSeven([6,6,6,5,4,3]));
	
	//Reverse Array
	function reverseArray(arr){
		for(var i = 0; i < arr.length / 2; i++) {
			var x = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			 arr[arr.length - 1 - i] = x;
		}
		return arr;
	}
	console.log(reverseArray([6,4,3,5]));
	
	//Outlook: Negative
	function outlook(arr) {
		x = [];
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] >= 0) {
				x.push(-arr[i]);
			}
			else {
				x.push(arr[i]);
			}
		}
		return x;
	}
	console.log(outlook([-3,2,4,-6,7]));
	
	//Always Hungry
	function alwaysHungry(arr) {
		var tasty = 0;
			for(i = 0; i < arr.length; i++) {
				if (arr[i] == "food") {
					console.log("yummy");
					tasty++;
				}
			}		
				if(tasty == 0) {
					console.log("I'm hungry");
			}
		}	
	
	alwaysHungry([1,4,5,6,7,"food","food"]);
	
	//Swap Toward the Center
	function swap(arr) {
		for(var i = 0; i < arr.length / 2; i+= 2) {
			var x = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = x;
		}
		return arr;
	}
	console.log(swap([true,42,"Ada",2,"pizza"]));
	console.log(swap([1,2,3,4,5,6]));
	
	//Scale the Array
	function scale(arr, num) {
		for (i = 0; i < arr.length; i++) {
			arr[i] *= num;
		}
		return arr;
	}
	console.log(scale([1,2,3,5,7], 6));