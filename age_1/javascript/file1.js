
const age = parseInt( 
   prompt('How old are you?'),
);

if (age <= 2){
    console.log('Hi, You are a kid');
} else if ((age >= 12) && (age < 18)){
    console.log('Hi, You are a teenager');
} else if ((age >= 18) && (age <= 60)){
    console.log('Hi, You are an adult');
} else if (age > 60){
    console.log('Hi, You are an retired');
}

