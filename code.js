let maxNum = parseInt(prompt("Please enter a maximum number:"));


if ( !isNaN(maxNum)) {
    alert("A L R I G H T !!")
} else {
    alert("You should enter a number")
}

let goal = Math.floor(Math.random() * maxNum) + 1;

let count = 0;
let guess = 0;

do {
    guess = parseInt(prompt(`Guess the number between 1 and ${maxNum} `))
    if (guess == goal) {
        alert(`AMAZING!! IT ONLY TOOK YOU ${count} TRIES ♡(ﾐ ᵕ̣̣̣̣̣̣ ﻌ ᵕ̣̣̣̣̣̣ ﾐ)ﾉ`);
    } else if (guess < goal) {
        alert(`GUESS H I G H E R ! ! ୧(๑•̀ᗝ•́)૭`)
        count++;
    } else if (guess > goal) {
        alert(`GUESS L O W E R ! ! ୧༼ಠ益ಠ༽୨`)
        count++;
    }  else {
        alert("THIS ISN'T A NUMBER ! ! (ノಠ益ಠ)ノ彡┻━┻")
    }
} while (guess != goal);