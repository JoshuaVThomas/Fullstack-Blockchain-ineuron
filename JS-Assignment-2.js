// Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

const checkTriangle = (x,y,z) => {
        if (x == y && y == z) console.log("Equilateral Triangle");
        else if (x == y || y == z || z == x) console.log("Isosceles Triangle")
        else console.log("Scalene Triangle")
}

checkTriangle(1,1,1)
checkTriangle(1,2,1)
checkTriangle(1,2,3)

//Write a function using switch case to find the grade of a student based on marks obtained

const grade = (marks) => {
        switch(true){
                case (marks >= 90 && marks <= 100): 
                        console.log("S grade"); 
                        break;
                case (marks >= 80 && marks < 90) :
                        console.log("A Grade");
                        break; 
                case (marks >= 70 && marks < 80) :
                        console.log("B Grade");
                        break;
                case (marks >= 60 && marks < 70):
                        console.log("c Grade");
                        break;
                case (marks >= 50 && marks < 60) :
                        console.log("D Grade");
                        break;
                case (marks >= 40 && marks < 50) :
                        console.log("E Grade");
                        break ;
                case (marks >= 0 && marks <40):
                        console.log("Student has failed");
                        break;                
                default : 
                        console.log("Invalid marks")
        }
                
}

grade(80)

//Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

const sum = () => {
        let sum = 0 ;
        for(let i = 0 ; i < 1000 ; i++){
                if(i%3 === 0 || i%5===0){
                        sum+=i;
                }
        }
        console.log(sum);
}
sum()

// Write a program to find the factorial of all prime numbers between a given range

const factorialOfPrimes = (num1 , num2) =>{
        let flag = 0 ;
        for (let i = num1; i <= num2; i++) {
                if (i === 1 || i == 0) {
                        continue ;
                }
                flag = 1;
                for (let j = 2; j <= i / 2; ++j) {
                        if (i % j == 0) {
                            flag = 0;
                            break;
                        }
                    }
                if(flag == 1){
                        console.log("Factorial of ",i,"is ",factorial(i))
                }
                
        }
}

const factorial = (n) => {
        if (n == 0) return 1;
        return n * factorial(n - 1);
}

factorialOfPrimes(1,100)





