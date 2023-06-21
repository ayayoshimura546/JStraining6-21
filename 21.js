// #Task1 create an object variable with mulitple key and values, where each values should be of different dataType(boolean,string,number, array,object,null)

let object = {
    apple : true,
    banana : "yellow",
    orange : 3,
    color : ["bulue","red","green"],
    sakura : {
        gender : 1,
        occupation : "ninja",
    }

}

console.log(object.orange);
console.log(object.sakura.occupation);

// for the null I could not figure out how to do it.

// #task2 Using for loop print only odd numbers from 1 to 300
for(let i = 1; i<301; i++){
    console.log(i);
}


// #task3 using while loop print only even numbers from 1 to 300

let i =1;
while (i<301) {
    console.log(i);
    i++
}

// #task_4 using for loop print multiples of five from 5 to 250

for(let i =5; i<251; i++){
    console.log(i);
}

// #task5 create an array of five random numbers from 1 to 20, and find which number is the greatest one
// →this one I cound not do it bymyself complete it by reffering internet.
const numbers = [5,35,10,1550,30];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));





