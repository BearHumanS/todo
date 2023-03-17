const quotes = [
    {
        quote: "니가 지금 잠을잔다면, 너는 꿈을 꿀 것이다. 니가 지금 공부한다면, 너는 꿈을 이룰것이다",
        author: "미상",
    },
    {
        quote: "니가 낭비한 오늘은 어제 죽은이가 소망하던 내일이다.",
        author: "미상"
    },
    {
        quote: "니가 늦었다고 생각할 때, 너는 가장 빠른 것이다.",
        author: "미상"
    },
    {
        quote: "오늘의 일을 내일로 미루지 마라.",
        author: "미상"
    },
    {
        quote: "공부에 대하여 말하자면, 시간이 부족한 것이 아니다, 노력이 부족한 것이다.",
        author: "미상"
    },
    {
        quote: "피할 수 없다면 즐기는 것이 좋다.",
        author: "미상"
    },
    {
        quote: "To taste success, you must be earlier and more diligent.",
        author: "unknown"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes [Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;