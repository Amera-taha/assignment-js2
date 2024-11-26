const quotes = [
    {
    quote : `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    writer : `― Marilyn Monroe`
},
    {
    quote : `“So many books, so little time.”`,
    writer : `― Frank Zappa`
},
    {
    quote : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
`,
    writer : `― Albert Einstein`
},
    {
    quote : `“A room without books is like a body without a soul.”
`,
    writer : `― Marcus Tullius Cicero`
},
    {
    quote : `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
`,
    writer : `― Bernard M. Baruch`
},
    {
    quote : `“
“Be the change that you wish to see in the world.”`,
    writer : `― Mahatma Gandhi`
},
    {
    quote : `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    writer : `― J.K. Rowling, Harry Potter and the Goblet of Fire`
},
    
]

let btn = document.querySelector("#btn");
let  quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click" , function() {
    let random = Math.floor(Math.random() * quotes.length );

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
}) 
