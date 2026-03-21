const database =
    [
        {
            questions: "Name the national bird of India.",
            options: {
                a: "Peacock",
                b: "Crow",
                c: "Pigeon",
                d: "Sparrow"
            },
            correctAnswer: "a"
        },
        {
            questions: "What is the capital of India?",
            options: {
                a: "Mumbai",
                b: "Delhi",
                c: "Kolkata",
                d: "Chennai"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which planet is known as the Red Planet?",
            options: {
                a: "Earth",
                b: "Venus",
                c: "Mars",
                d: "Jupiter"
            },
            correctAnswer: "c"
        },
        {
            questions: "What is the largest mammal in the world?",
            options: {
                a: "Elephant",
                b: "Blue Whale",
                c: "Giraffe",
                d: "Shark"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which is the smallest continent by land area?",
            options: {
                a: "Europe",
                b: "Australia",
                c: "Antarctica",
                d: "South America"
            },
            correctAnswer: "b"
        },
        {
            questions: "Who wrote the national anthem of India?",
            options: {
                a: "Rabindranath Tagore",
                b: "Bankim Chandra Chatterjee",
                c: "Subhas Chandra Bose",
                d: "Mahatma Gandhi"
            },
            correctAnswer: "a"
        },
        {
            questions: "Which gas do plants absorb from the atmosphere?",
            options: {
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon Dioxide",
                d: "Hydrogen"
            },
            correctAnswer: "c"
        },
        {
            questions: "What is the boiling point of water at sea level?",
            options: {
                a: "100°C",
                b: "90°C",
                c: "120°C",
                d: "80°C"
            },
            correctAnswer: "a"
        },
        {
            questions: "Which is the tallest mountain in the world?",
            options: {
                a: "K2",
                b: "Mount Everest",
                c: "Kangchenjunga",
                d: "Makalu"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which is the fastest land animal?",
            options: {
                a: "Cheetah",
                b: "Lion",
                c: "Horse",
                d: "Leopard"
            },
            correctAnswer: "a"
        }
    ];


let current = 0;
let score = 0;
const showQuestion = () => {
    let q = document.getElementById("question");
    q.innerText = database[current].questions;
    let o = document.getElementById("options");
    o.innerHTML = "";
    for (const a of Object.keys(database[current].options)) {
        let button = document.createElement("button");
        button.innerText = `${database[current].options[a]}`;
        o.appendChild(button);
        button.addEventListener("click", () => {
            let allbtn = document.querySelectorAll("#options button");
            allbtn.forEach(btn=>btn.disabled=true);
            if (database[current].correctAnswer === a) {
                button.style.backgroundColor = "green";
                score = score + 5;
            }
            else {
                button.style.backgroundColor = "red";
                let d=database[current].correctAnswer;
                let c = database[current].options[d];
                allbtn.forEach((btn)=>{
                    if(c===btn.innerHTML){
                        btn.style.backgroundColor="green";
                    }
                })
            }
        })
    }
}

const next = () => {
    current++;
    if (current < database.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
const showScore = () => {
    document.getElementById("next").remove();
    document.getElementById("question").remove();
    document.getElementById("options").remove();
    document.getElementById("score-value").innerText = score;
    let w=document.getElementById("score");
    w.classList.add("show");
}
showQuestion();