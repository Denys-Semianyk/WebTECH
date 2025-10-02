var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

console.log("FIRST task");
for (let name of names) {
    if (name.charAt(0).toLowerCase() === "j") {
        goodBye(name);
    } else {
        hello(name);
    }
}

console.log("SECOND task");

function convert(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let bin = input[i].charCodeAt(0).toString(2).padStart(7, '0');
        output += bin + " ";
    }
    return output.trim();
}

for (let name of names) {
    let binName = convert(name);

    let ones = 0;
    for (let i = 0; i < binName.length; i++) {
        if (binName[i] === '1') {
            ones++;
        }
    }

    console.log(`${name} in binary: ${binName}`);
    console.log(`Number of ones in ${name}: ${ones}`);

    if (ones % 2 === 0) {
        hello(name);
    } else {
        goodBye(name);
    }
}

