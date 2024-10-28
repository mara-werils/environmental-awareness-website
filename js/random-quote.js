document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "The Earth is what we all have in common. - Wendell Berry",
        "In every walk with nature, one receives far more than he seeks. - John Muir",
        "Nature is not a place to visit. It is home. - Gary Snyder",
        "To leave the world better than you found it, sometimes you have to pick up other people's trash. - Bill Nye"
    ];

    const quoteBtn = document.getElementById('getQuoteBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');

    quoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    });
});
