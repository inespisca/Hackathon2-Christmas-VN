// bg
const microphone = require("./bg/microphone.jpeg");
const entrance = require("./bg/entrance.jpeg");
// speakers
const b = "Block";
// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");

let story = [
  {
    bg: microphone,
    sprite: bn,
    speaker: b,
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
    receiveJump: "yes/no"
  },
  {
    routeBegins: "Yes",
    text: "Thank you! I knew I could count on you!"
  },
    // choice that leads to the continuation of the story
  { 
    text: "Finding Santa won’t be easy but I believe we can do it!" 
  },
  { 
    text: "Do you think that woman over there is Santa Claus?" 
  },
  { 
    choicesExist: true, 
    receiveJump: "SantaIsAMan"
  },
  { 
    routeBegins: "Not really, isn’t Santa Claus a man? ",
    text: "Yeah, you’re right." 
  },
  {
    text: "Though even women dress up as Santa Claus sometimes too."
  },

  { 
    text: "But I guess the real Santa is a man." 
  },
 
  //{
  //  text: "Just write the class in the effects.css file and set the effect value to that in a string.",
  //  jumpTo: "yes/no" // jumps back to a "recieveJump"
  //}
  //spriteLeft: "",
  //spriteRight: "",
  // Jumping back to main menu
  // {
  //  routeBegins: "leave",
  //  sprite: bh,
  //  spriteEffect: "shake",
  //  text: "Thank you for trying out the demo.",
  //  jumpTo: "title-screen"
  //}
];

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
