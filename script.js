const quote = document.getElementById('quote');
const name = document.getElementById('name');
const generate = document.getElementById('generate');

let quotes = {
    stuff: [
      { say: '"The best thing software can be is easy, but the way to do this is to get the defaults right, not to limit user choices."', sayer: "- Paul Graham (programmer)" },
      { say: '"Muddy water is best cleared by leaving it alone."', sayer: "-Alan Watts" },
      { say: '"Happiness does not consist in pastimes and amusements but in virtuous activities."', sayer: "- Aristotle" },
      {say:'"We are still masters of our fate. We are still captains of our souls."', sayer:"-Winston Churchill"},
      {say:'"If we do not discipline ourselves, the world will do it for us."', sayer:"-William Feather"},
      {say:'"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will."', sayer:"-Vince Lombardi Jr."},
      {say:'"This is your life and its ending one minute at a time."', sayer:"-Tyler Durden, Fight Club"},
      {say:'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe."', sayer:"-Albert Einstein "},
      {say:' “Be the change that you wish to see in the world.” ', sayer:" -Mahatma Gandhi "},
      {say:' “To live is the rarest thing in the world. Most people exist, that is all.” ', sayer:"-Oscar Wilde"},

    ]
  };

  generate.addEventListener("click", function() {
    let index = Math.floor(Math.random() * quotes.stuff.length);
    quote.innerHTML = quotes.stuff[index].say;
    name.innerHTML = quotes.stuff[index].sayer;
    
});
  


