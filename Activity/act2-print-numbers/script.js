let start_range = prompt("What is the start of your number range? (Numbers Only Please!)");
let end_range = prompt("What is the end of your number range? (Numbers Only Please!)");


if(start_range.typeOf === Number || end_range.typeOf === Number){
    console.log("Please input a valid number");
}
else{
    for(i = start_range; i <= end_range; i++){
        console.log(i);
    }
    
}
