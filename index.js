const Jokes=require("give-me-a-joke");
const Colors=require("colors");
Jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow);
})