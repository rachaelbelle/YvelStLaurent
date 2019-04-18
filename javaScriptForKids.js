var randomBodyParts = [
  "Face",
  "Nose",
  "Hair",
  "Butt",
  "Ears",
]

var randomAdjectives = [
  "Smelly",
  "Stupid",
  "Boring",
  "Ugly",
]

var randomWords = [
  "Fly",
  "Marmot",
  "Stick",
  "Monkey",
  "Rat",
]

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];

var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
