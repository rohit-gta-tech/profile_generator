const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
    "What's your name? Nicknames are also acceptable :)   ",
    "What's an activity you like doing?   ",
    "What do you listen to while doing that?   ",
    "Which meal is your favourite (eg: dinner, brunch, etc.)   ",
    "What's your favourite thing to eat for that meal?   ",
    "Which sport is your absolute favourite?   ",
    "What is your superpower? In a few words, tell us what you are amazing at!   "
]

let output = [];

rl.question(questions[0], (answer) => {
    output.push(`My name is: ${answer}`);
    rl.question(questions[1], (answer) => {
        output.push(`I like doing: ${answer}`);
        rl.question(questions[2], (answer) => {
            output.push(`I listen to: ${answer}`);
            rl.question(questions[3], (answer) => {
                output.push(`I like to eat: ${answer}`);
                rl.question(questions[4], (answer) => {
                    output.push(`My favorite thing to eat is: ${answer}`);
                    rl.question(questions[5], (answer) => {
                        output.push(`My favorite sport is: ${answer}`);
                        rl.question(questions[6], (answer) => {
                            output.push(`I am great at: ${answer}`);
                            for (let i = 0; i < output.length; i++) {
                                console.log(output[i])
                            }
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});

