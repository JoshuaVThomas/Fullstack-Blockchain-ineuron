// Write a program to find whether a given year is a leap year or not.

const findLeapYear = (year) =>{
      if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
        console.log("It is a leap year");
      else
        console.log("It is not a leap year");
}

findLeapYear(2000)

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit

let CtoF = (celsius) => {
    return celsius * 1.8 + 32
}

let FtoC = (farenheit) => {
    return (farenheit - 32) * 5 / 9 
}

console.log(CtoF(60))
console.log(FtoC(45))
 
// Write a program to find the factorial of a number

const factorial = (number) => {
    if(number === 0){
      return 1
    }else{
      return number*factorial(number-1)
    }
}

console.log(factorial(5))
