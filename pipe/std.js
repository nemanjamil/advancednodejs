const questions = [
    "What is your name?",
    "What is your favorite hobby?",
    "What is yours preferred programming language?"
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data : ', function (data) {
    process.stdout.write('\n data' + data.toString().trim() + ' \n');
})

//ask(0)

//process.stdin.pipe(process.stdout);