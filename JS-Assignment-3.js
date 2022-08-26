// Using for loops, write a Javascript program to output the following pattern
let count = 1 ;
for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
                process.stdout.write(`${count} `);
                count++                
        } 
        console.log("\n");       
}

// Write a program to find whether a given number is armstrong number or not

const armstrong = (num) => {
        let local = num
        let finalNum = 0
        while (local > 0) {
 
                let rem = local % 10;
                finalNum = (finalNum) + (rem * rem * rem);
                local = Math.floor(local / 10);
        }
        if(num === finalNum) console.log("Is armstrong");
        else console.log("Not Armstrong");
}
armstrong(153)

// Write a program to find whether a given number is special number or not

const specialNumber = (n) => {
        let num, number, lastdigit, sumOfFact = 0;  
        number = n ;  
        num = number;  
        while (number > 0)  
        {              
        lastdigit = number % 10;   
        let fact=1;   
        for(let i=1; i<=lastdigit; i++){    
        fact=fact*i;  
        }  
        sumOfFact = sumOfFact + fact; 
        number = Math.floor(number / 10);  
        }    
        if(num===sumOfFact){  
        console.log(num+ " is a special number.");
        }  
        else{  
        console.log(num+ " is not a special number.")
        }  
}  

specialNumber(145)