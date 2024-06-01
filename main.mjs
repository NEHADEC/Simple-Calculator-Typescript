import inquirer from 'inquirer';
//Asking Question From Users Through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNamber" },
    {
        message: "Select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Maltiplication", "Division", "Modulus", "Exponentiation", "Equal to", "Not equal to",
            "Logical AND", "Logical OR", "Assignment"
        ],
    },
]);
// conditional statement If-ELse
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNamber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNamber);
}
else if (answers.operator === "Maltiplication") {
    console.log(answers.firstNumber * answers.secondNamber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNamber);
}
else if (answers.operator === "Modulus") {
    console.log(answers.firstNumber % answers.secondNamber);
}
else if (answers.operator === "Exponentiation") {
    console.log(answers.firstNumber ** answers.secondNamber);
}
else if (answers.operator === "Equal to") {
    console.log(answers.firstNumber == answers.secondNamber);
}
else if (answers.operator === "Not equal to") {
    console.log(answers.firstNumber != answers.secondNamber);
}
else if (answers.operator === "Logical AND") {
    console.log(answers.firstNumber && answers.secondNamber);
}
else if (answers.operator === "Logical OR") {
    console.log(answers.firstNumber || answers.secondNamber);
}
else if (answers.operator === "Assignment") {
    console.log(answers.firstNumber = answers.secondNamber);
}
else {
    console.log("Invalid Input");
}
