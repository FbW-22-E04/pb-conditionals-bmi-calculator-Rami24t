//Q1 Store Mark's and John's mass and height in variables.

markHeight = 1.65;
markMass = 72.5;
johnHeight = 1.74;
johnMass = 95;


//Q2 Calculate both their BMIs and store their BMIs in variables. 

markBMI = markMass / (markHeight*markHeight) ;
johnBMI = johnMass / (johnHeight*johnHeight);


//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

markMoreBeefCake = markBMI > johnBMI;


//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 

console.log("Q4: Is Mark's BMI higher than John's? Why", markMoreBeefCake ? 'yes' : 'no', "it's", markMoreBeefCake, "it is", markMoreBeefCake ? '' : 'not');


//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if(markMoreBeefCake)
console.log('Q5: Mark', (markBMI).toFixed(2));
else
console.log('Q5: John', (johnBMI).toFixed(2));
