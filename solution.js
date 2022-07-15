//BMI  calculator as function:
function calculateBMI(name, weight, height){
    let BMI = weight/(height*height);
    return {name, BMI};
    }  
function whoIsBiggest(name1,name2,BMI1,BMI2){
    if(BMI2>BMI1)
    return name2;
    else if(BMI1>BMI2)
    return name1;
    else if (BMI1==BMI2)
    return 'neither';
    else 
    return 0;
    }
//Bonus
function whoIsBiggestB(name1,name2,weight1,weight2,height1,height2){
    BMI1 = calculateBMI(name1, weight1, height1);
    BMI2 = calculateBMI(name2, weight2, height2);
    if(BMI2.BMI>BMI1.BMI)
    return BMI2.name;
    else if(BMI1.BMI>BMI2.BMI)
    return BMI1.name;
    else if (BMI1.BMI==BMI2.BMI)
    return 'neither';
    else 
    return 0;
    }

let markHeight = 1.65;
let markMass = 72.5;
let johnHeight = 1.74;
let johnMass = 95;

console.log(whoIsBiggestB('Saleem', 'Tala', 100, 50, 1.5,1.8));

console.log(whoIsBiggestB('Mark', 'John', markMass, johnMass, markHeight, johnHeight));



//Q1 Store Mark's and John's mass and height in variables.




//Q2 Calculate both their BMIs and store their BMIs in variables. 

// markBMI = markMass / (markHeight*markHeight) ;
// johnBMI = johnMass / (johnHeight*johnHeight);


//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

// markMoreBeefCake = markBMI > johnBMI;


//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

// console.log("Q4: Is Mark's BMI higher than John's? Why", markMoreBeefCake ? 'yes' : 'no', "it's", markMoreBeefCake, "it is", markMoreBeefCake ? '' : 'not');


//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

// if(markMoreBeefCake)
// console.log('Q5: Mark', (markBMI).toFixed(2));
// else
//console.log('Q5: John', (johnBMI).toFixed(2));
