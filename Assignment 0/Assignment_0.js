//Task 1
var conditionalSum = function(values, condition){
console.log(values);

var print=0;

for(i=0; i<values.length; i++){
        if(condition==="even"){
                if(values[i]%2===0){
                print=print+values[i];
                }
        }else if(condition==="odd"){
                if(values[i]%2!==0){
                print= print+values[i];
                }
        }
}

return print;
};
console.log(conditionalSum([1,2,3,4,5],"even"));
console.log(conditionalSum([1,2,3,4,5],"odd"));
console.log(conditionalSum([13,88,12,44,99],"even"));
console.log(conditionalSum([],"odd"));
//Task 2
var conditionalSum = function(values, condition){
  console.log(values);
  
  var print ="";
  for (i=0; i<values.length; i++){
    if(condition==="even"){
      if(values[i]%2===0){
        print=print+values[i];
      }
    }else if(condition==="odd"){
        if(values[i]%2!==0){
        print=print+values[i];
      }
    }
    
  }
 return print; 
}

console.log(conditionalSum(["1,2,3,4,5"],"even"));
console.log(conditionalSum(["1,2,3,4,5"],"odd"));
console.log(conditionalSum(["13,88,12,44,99"],"even"));
console.log(conditionalSum([],"odd"));
//Task 3
var talkingCalendar = function(date) {
  var print = new Date(date);
  var options = { month: "long", day:"numeric", year:"numeric" };

  console.log(print.toLocaleDateString("en-US",options));
  //console.log(print.toLocaleDateString('ko-KR',options));
  //console.log(print.toLocaleDateString('ar-EG',options));
  //console.log(print.toLocaleDateString('de-DE',options));
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
//Task 4
var calculateChange = function (total, cash) {
	
	if (cash > total) {
		
		var print = " { ";
		
		var change = cash - total;
		
		var moneyBills = [ 
						{ denomination: "twentyDollar",  value: 2000 }, 
						{ denomination: "tenDollar",  value: 1000 },
						{ denomination: "fiveDollar",  value: 500 }, 
						{ denomination: "twoDollar",  value: 200 },
						{ denomination: "oneDollar",  value: 100 }, 
						{ denomination: "quarter",  value: 25 },
						{ denomination: "dime",  value: 10 }, 
						{ denomination: "nickel",  value: 5 },
						{ denomination: "penny",  value: 1 }
					];
		
		for (var i = 0; i < moneyBills.length; i++) {
			if (change > 0) {
				var nummoneyBills = Math.floor(change/moneyBills[i].value);
								if (nummoneyBills > 0){
					print = print + " " + moneyBills[i].denomination + ": " + nummoneyBills.toString() + ",";
					change = change - nummoneyBills*moneyBills[i].value;
				}
			}
		}
		
		print = print.substr(0, print.length - 1);
		print = print + " } ";
		return print;
		} else {
		return console.log("Insufficient Funds");
	}	
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));