"use strict"
// const image = document.querySelector(".title-image")
// console.log(image)
// const btn = document.querySelector(".for-activating")
// console.log(btn)
// const btnDeactivate = document.querySelector(".for-deactivate")
// btn.addEventListener("click",function(){
//     image.classList.remove("title-image")
//     image.classList.add("title-image-animation")
// })
// btnDeactivate.addEventListener("click",function(){
//     image.classList.remove("title-image-animation")
//     image.classList.add("title-image")
// })
// console.log(image)

// LOOPING = jonas's course

// console.log("lifting weights 1")
// console.log("lifting weights 2")
// console.log("lifting weights 3")
// console.log("lifting weights 4")
// console.log("lifting weights 5")
// console.log("lifting weights 6")
// console.log("lifting weights 7")
// console.log("lifting weights 8")
// console.log("lifting weights 9")
// console.log("lifting weights 10")

// intital value - number, logical condition and the last one is increment or decrement
// for loop keeps running while condition is true
// for (let number = 1; number <= 10; number++) {
//     // console.log("lifting weights 1")
//     console.log(`lifting weights ${number}`)   
// }

// const husein = ["husein", "softic", 2030 - 2003, "student", ["belmin", "eman","kemal"], true]

// for(let i = 0; i < 5; i++){
//     console.log(husein[i]);
    // true is not logged here because we hard-coded the value insted of using the length of the array
// }

// const types = [];
// 0 because array is zero based, because that is the first element of the array
// for(let i = 0; i < husein.length; i++){
//     // console.log(`${husein[i]}`)
//     // we use the counter variable
//     // console.log(husein[i])
//     // console.log(husein[i], typeof husein[i])

//     // FILLING TYPES ARRAY
//     // types[i] = typeof husein[i]
//     types.push(typeof husein[i])
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages)

// continue and break

// continue is used is to exit the current iteration of the loop and continue to the next one

// break is used to completely terminate the whole loop
// console.log("only strings")
// for(let i = 0; i < husein.length; i++){

//     if(typeof husein[i] !== "string") continue;

//     console.log(husein[i], typeof husein[i]);
// }

// console.log("break with boolean")

// for(let i = 0; i < husein.length; i++){

//     if(typeof husein[i] === "boolean") break;

//     console.log(husein[i], typeof husein[i]);
// }


// backwards
// const husein = ["husein", "softic", 2030 - 2003, "student", ["belmin", "eman","kemal"], true]

// for(let i = husein.length - 1; i >= 0; i--){
//     console.log(i, husein[i]);
// }
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`=== starting exercise === ${exercise}`)

//     for(let exercise2 = 1; exercise2 < 4; exercise2++){
//         console.log(`push ups ${exercise2}`)
//     }
// }


// for(let cucnjevi = 1; cucnjevi <= 5; cucnjevi++){
//     console.log(`${cucnjevi} cucanj`)

//     for(let sklekovi = 1; sklekovi <= 3; sklekovi++){
//         console.log(`${sklekovi} sklek`)
//     }

// }

// for(let exercise = 1; exercise <= 10; exercise++){
//     console.log(`=== starting exercise === ${exercise}`)
// }

// let exercise = 0;
// // condition is only needed
// while (exercise <= 10) {
//     console.log(`${exercise}`);
//     exercise++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// whenever u need a loop without a counter, you can reach for a "while" loop
// whenever u don't know how many iterations the loop will have, use while loop
// while(dice !== 6){
//     console.log(`your random number is: ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log(`finally you got ${dice}`)
// }

// CODING CHALLENGE ARRAYS

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// for(let i = 0; i < bills.length; i++){

//     // for tips
//     // const tip = calcTip(bills[i]) - jer se ponavlja
//     tips.push(calcTip(bills[i]))

//     // for totals
//     totals.push(calcTip(bills[i]) + bills[i])

//     // console.log(`${bills[i]}`)
// }
// console.log(totals)

// const calcAverage = function(arr){

//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
//     // console.log(sum);   

// }  

// console.log(calcAverage(totals));