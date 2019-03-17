let typed = document.querySelector(".typed");

let words = ["I'm a Conservationist,",
    " With an interest in: ",
    " the Environment,", " Politics", " and Society."
];


let delay = 40;
let baseline = 0;

typed.textContent = ""

for (let i = 0; i < words.length; i++) {

    for (let j = 0; j < words[i].length; j++) {

        (function () {
            setTimeout(function () {
                typed.textContent += words[i][j];

            }, baseline + (delay * j));
        })(j);

    }

    baseline += (delay * words[i].length) * 4;

}