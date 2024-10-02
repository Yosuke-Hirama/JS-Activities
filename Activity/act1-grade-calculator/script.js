let user_input = Number(prompt("What is your grade?"))


if(user_input >= 90){
    console.log("Congratulations, You have a remarkable score!");
}
else if(user_input >= 80 && user_input <= 89){
    console.log("You have a above average score!");
}
else if(user_input >= 70 && user_input <= 79){
    console.log("You have a passing score!");
}
else if(user_input >= 60 && user_input <= 69){
    console.log("I'm sorry you did not have a passing score!");
}
else if(user_input < 60){
    console.log("I'm sorry but you did not pass");
}
else{
    console.log("Please input valid numbers only!")
}