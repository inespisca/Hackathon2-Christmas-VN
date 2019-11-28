// bg
const microphone = require("./bg/microphone.jpeg");
// speakers
const Ines = "Inês";
const Woman = "Woman who isn't Santa";
const Santa = "Santa Claus";
const Narrator = "";
// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");

let story = [
  {
    bg: microphone,
    speaker: Ines,
    text: "Hey [name], nice to meet you!"
  },
  {
    text: "My name is Inês and today I’m on a mission to look for Santa Claus!"
  },
  {
    text: "But because of my web developer classes at Wild Code School, I don’t have much time to carry on this mission so I need your help!"
  },
  {
    text: "Can you help me?"
  },
  { 
    choicesExist: true,
    receiveJump: "option1"
  },
  {
    routeBegins: "Yes",
    text: "Thank you! I knew I could count on you!"
  },
  { 
    text: "Finding Santa won’t be easy but I believe we can do it!" 
  },
  { 
    text: "Do you think that woman over there is Santa Claus?" 
  },
  {
    receiveJump: "option2"
  },
  { 
    choicesExist: true, 
  },
  { 
    routeBegins: "Not really, isn’t Santa Claus a man?",
    text: "Yeah, you’re right." 
  },
  {
    text: "Though even women dress up as Santa Claus sometimes too."
  },

  { 
    text: "But I guess the real Santa is a man." 
  },
  {
    receiveJump: "option3"
  },
  { 
    choicesExist: true, 
  },
  {
    routeBegins: "I think we got our man!",
    text: "I’ll go ask him right now. Who knows, we may actually get gifts for asking him!"
  },
  { 
    text: "Hey, are you Santa?" 
  },
  { 
    speaker: Santa,
    text: "Inês! [Name]! You recognized me!" 
  },
  { 
    text: "Because this was a great year, the both of you deserve your gifts!" 
  },
  { 
    speaker: Narrator,
    text: "Santa hands the gifts." 
  },
  { 
    speaker: Santa,
    text: "Here you go." 
  },
  { 
    speaker: Ines,
    text: "Wow, is this really my gift?" 
  },
  { 
    speaker: Santa,
    text: "Yes, it is. Your gift is this visual novel you’re playing right now." 
  },
  { 
    text: "If you are reading this part, it means you got it all to work." 
  },
  { 
    text: "Congratulations on finishing your hackathon, Inês!" 
  },
  {
    speaker: Ines,
    text: "Yay!",
    jumpTo: "title-screen" 
  },

// End of the correct route
// Bad end portions come below

// Bad end 1
  { 
    routeBegins: "No",
    text: "Alright, thank you anyway. I’ll go ask somebody else then.",
    jumpTo: "title-screen"
  },

// Bad end 2
  { 
    routeBegins: "Oh you’re right, she could be Santa!",
    text: "Thank you! I’ll go ask her if she is Santa",
  },
  { 
    speaker: Narrator,
    text: "Inês runs to talk to the woman" 
  },
  { 
    speaker: Ines,
    text: "Excuse me, are you Santa Claus?" 
  },
  { 
    speaker: Woman,
    text: "Of course not" 
  },
  { 
    speaker: Ines,
    text: "Whoops, sorry." 
  },
  { 
    speaker: Narrator,
    text: "This isn’t a bad end but it feels like one.", 
    jumpTo: "title-screen"
  },
  // Bad end 3
  { 
    routeBegins: "It’ll happen like it did with the woman",
    speaker: Ines,
    text: "You’re right, not all men are Santa Claus",
  },
  { 
    text: "If we asked him about it, he’d likely say he was just pretending to be Santa" 
  },
  { 
    text: "However… Isn’t that… A red-nosed reeindeer?" 
  },
  { 
    speaker: Narrator,
    text: "Maybe he is Santa after all?" 
  },
  { 
    speaker: Ines,
    text: "I’ll go ask him!" 
  },
  { 
    text: "Hey! Are you Santa?" 
  },
  { 
    speaker: Santa,
    text: "Yes I am. And you are… Umm… Inês?" 
  },
  { 
    speaker: Ines,
    text: "Yes, it’s me!" 
  },
  { 
    speaker: Santa,
    text: "I would have a gift for you but you are in my naughty list because you thought I wasn’t Santa." 
  },
  { 
    speaker: Narrator, //needs to be changed to the person's name later
    text: "I want a gift too!" 
  },
  { 
    speaker: Santa,
    text: "[name], you’re who told Inês I wasn’t Santa. You are definitely on my naughty list.",
    jumpTo: "title-screen"
  },

];
// routeBegins sets that we're started a new route and that this route is the response to the specified option.
// AKA, if it says "routeBegins: Yes", it means we're getting the sequence that unfolds after pressing the "yes" option.
// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
