// HARRY POTTER SORTING QUIZ

// Total global counter variables for each house
let gryffindor = 0;
let ravenclaw = 0;
let hufflepuff = 0;
let slytherin = 0;


// FUNCTION TO PLAY BUTTON CLICK AUDIO
function playAudio() {
  let buttonClick = document.getElementById("buttonAudio");
  buttonClick.play();
};

// FUNCTION TO OPEN START OF GAME MODAL SCREEN
function openStartModal() {
  var modal = document.getElementById("startModal");
  var span = document.getElementsByClassName("close1")[0];
  var restart = document.getElementById("playGame");
  modal.style.display = "block";
    // FUNCTION TO CLOSE MODAL WHEN CLOSE (X) BUTTON CLICKED
  span.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN RESTART BUTTON CLICKED
  restart.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN USER CLICKS OUTSIDE OF MODAL
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      restartGame();
    }
  };
};


/*============================================================= QUESTION 1 ===================================================================*/
// QUESTION 1: MOON OR STARS?
// MOON:
function answer1A() {
  displayQ2();
  gryffindor += 27;
  ravenclaw += 74;
  hufflepuff += 33;
  slytherin += 72;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// STARS:
function answer1B() {
  displayQ2();
  gryffindor += 73;
  ravenclaw += 26;
  hufflepuff += 67;
  slytherin += 28;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// FUNCTION TO DISPLAY QUESTION 2 TEXT
function displayQ2() {
  let question1Div = document.querySelector('.question1');
  let question2Div = document.querySelector('.question2');
  question1Div.setAttribute('style', 'display: none');
  document.getElementById('question-count1').textContent = "2 / 9";
  document.getElementById('question-count2').textContent = "2 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/woods-photo-zack-silver.jpg) no-repeat center fixed;');
    document.getElementById('question-2').textContent = "Forest or River?";
    document.getElementById('answer-2A').textContent = "Forest";
    document.getElementById('answer-2B').textContent = "River";
  } else if (randQuestion >= 50) {
    question2Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/daw-dusk-chris-galbraith.jpg) no-repeat fixed;');
    document.getElementById('question-2').textContent = "Dawn or Dusk?";
    document.getElementById('answer-2A').textContent = "Dawn";
    document.getElementById('answer-2B').textContent = "Dusk";
  }
};

/*============================================================= QUESTION 2 ===================================================================*/
// QUESTION 2: DAWN OR DUSK? | FOREST OR RIVER?
// DAWN | FOREST
function answer2A() {
  displayQ3();
  gryffindor += 73;
  ravenclaw += 73;
  hufflepuff += 30;
  slytherin += 26;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// DUSK | RIVER
function answer2B() {
  displayQ3();
  gryffindor += 27;
  ravenclaw += 27;
  hufflepuff += 70;
  slytherin += 74;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 3 TEXT
function displayQ3() {
  let question2Div = document.querySelector('.question2');
  let question3Div = document.querySelector('.question3');
  question2Div.setAttribute('style', 'display: none');
  question3Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "3 / 9";
  document.getElementById('question-count2').textContent = "3 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question3Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/treasure-chest-jouwen-wang.jpg) no-repeat center fixed;');
    document.getElementById('question-3').textContent = "Four boxes are placed before you. Which would you try and open?";
    document.getElementById('answer-3A').textContent = "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.";
    document.getElementById('answer-3B').textContent = "The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.";
    document.getElementById('answer-3C').textContent = "The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.";
    document.getElementById('answer-3D').textContent = "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’";
  } else if (randQuestion >= 50) {
    question3Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/goblet-james-coleman.jpg) no-repeat fixed;');
    document.getElementById('question-3').textContent = "Four goblets are placed before you. Which would you choose to drink?";
    document.getElementById('answer-3A').textContent = "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.";
    document.getElementById('answer-3B').textContent = "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.";
    document.getElementById('answer-3C').textContent = "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.";
    document.getElementById('answer-3D').textContent = "The mysterious black liquid that gleams like ink, and gives off fumes that make you see strange visions.";
  }
};

/*============================================================= QUESTION 3 ===================================================================*/
// QUESTION 3A: FOUR BOXES ARE PLACED BEFORE YOU. WHICH DO YOU OPEN?
// 3A: SMALL TORTOISESHELL BOX
// QUESTION 3B: FOUR GOBLETS ARE PLACED BEFORE YOU. WHICH DO YOU CHOOSE?
// 3B: SMOOTH THICK RICHLY PURPLE DRINK
function answer3A() {
  displayQ4();
  gryffindor += 17;
  ravenclaw += 19;
  hufflepuff += 45;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 3A: GLEAMING JET BLACK BOX
// 3B: MYSTERIOUS BLACK LIQUID
function answer3B() {
  displayQ4();
  gryffindor += 18;
  ravenclaw += 19;
  hufflepuff += 17;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 3A: ORNATE GOLDEN CASKET
// 3B: FOAMING FROTHING SILVERY LIQUID
function answer3C() {
  displayQ4();
  gryffindor += 20;
  ravenclaw += 44;
  hufflepuff += 20;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 3A: SMALL PEWTER BOX
// 3B: GOLDEN LIQUID
function answer3D() {
  displayQ4();
  gryffindor += 45;
  ravenclaw += 18;
  hufflepuff += 17;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 4 TEXT
function displayQ4() {
  let question3Div = document.querySelector('.question3');
  let question4Div = document.querySelector('.question4');
  question3Div.setAttribute('style', 'display: none');
  question4Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "4 / 9";
  document.getElementById('question-count2').textContent = "4 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question4Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/troll-fight.png) no-repeat fixed;');
    document.getElementById('question-4').textContent = "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:";
    document.getElementById('answer-4A').textContent = "Attempt to confuse the troll into letting all three of you pass without fighting?";
    document.getElementById('answer-4B').textContent = "Suggest drawing lots to decide which of you will fight?";
    document.getElementById('answer-4C').textContent = "Suggest that all three of you should fight (without telling the troll)?";
    document.getElementById('answer-4D').textContent = "Volunteer to fight?";
  } else if (randQuestion >= 50) {
    question4Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/Magical-Garden_1920x1080.png) no-repeat fixed');
    document.getElementById('question-4').textContent = "You enter an enchanted garden. What would you be most curious to examine first?";
    document.getElementById('answer-4A').textContent = "The silver leafed tree bearing golden apples";
    document.getElementById('answer-4B').textContent = "The fat red toadstools that appear to be talking to each other";
    document.getElementById('answer-4C').textContent = "The bubbling pool, in the depths of which something luminous is swirling";
    document.getElementById('answer-4D').textContent = "The statue of an old wizard with a strangely twinkling eye";
  }
};

/*============================================================= QUESTION 4 ===================================================================*/
// QUESTION 4A: YOU AND TWO FRIENDS CONFRONT A TROLL. DO YOU:
// 4A: ATTEMPT TO CONFUSE IT
// QUESTION 4B: YOU ENTER AN ENCHANTED GARDEN. WHAT WOULD YOU EXAMINE FIRST?
// 4B: SILVER LEAFED TREE
function answer4A() {
  displayQ5();
  gryffindor += 19;
  ravenclaw += 45;
  hufflepuff += 18;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 4A: SUGGEST DRAWING LOTS
// 4B: FAT RED TOADSTOOLS
function answer4B() {
  displayQ5();
  gryffindor += 17;
  ravenclaw += 16;
  hufflepuff += 45;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 4A: ALL THREE FIGHT
// 4B: THE BUBBLING POOL
function answer4C() {
  displayQ5();
  gryffindor += 17;
  ravenclaw += 20;
  hufflepuff += 19;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 4A: VOLUNTEER TO FIGHT
// 4B: STATUE OF AN OLD WIZARD
function answer4D() {
  displayQ5();
  gryffindor += 47;
  ravenclaw += 19;
  hufflepuff += 19;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 5 TEXT
function displayQ5() {
  let question4Div = document.querySelector('.question4');
  let question5Div = document.querySelector('.question5');
  question4Div.setAttribute('style', 'display: none');
  question5Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "5 / 9";
  document.getElementById('question-count2').textContent = "5 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question5Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/cobblestones-leif-niemczik.jpg) no-repeat center fixed;');
    document.getElementById('question-5').textContent = "After you have died, what would you most like people to do when they hear your name?";
    document.getElementById('answer-5A').textContent = "Miss you, but smile";
    document.getElementById('answer-5B').textContent = "Ask for more stories about your adventures";
    document.getElementById('answer-5C').textContent = "Think with admiration of your achievements";
    document.getElementById('answer-5D').textContent = "I don't care what people think of me after I'm dead; it's what they think of me while I'm alive that counts";
  } else if (randQuestion >= 50) {
    question5Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/shrunken-heads-aditya-vyas.jpg) no-repeat center fixed;');
    document.getElementById('question-5').textContent = "Which nightmare would frighten you most?";
    document.getElementById('answer-5A').textContent = "Waking up to find that neither your friends nor your family have any idea who you are.";
    document.getElementById('answer-5B').textContent = "An eye at the keyhole of the dark, windowless room in which you are locked.";
    document.getElementById('answer-5C').textContent = "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.";
    document.getElementById('answer-5D').textContent = "Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.";
  }
};

/*============================================================= QUESTION 5 ===================================================================*/
// QUESTION 5A: AFTER YOU HAVE DIED. WHAT WOULD YOU LIKE PEOPLE TO RESPOND TO YOUR NAME BY:
// 5A: MISS YOU, BUT SMILE
// QUESTION 5B: wHICH NIGHTMARE WOULD FRIGHTEN YOU MOST?
// 5B: WAKING UP AND YOUR LOVED ONES DO NOT KNOW YOU
function answer5A() {
  displayQ6();
  gryffindor += 17;
  ravenclaw += 15;
  hufflepuff += 45;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 5A: ASK FOR MORE STORIES ABOUT YOUR ADVENTURES
// 5B: AN EYE AT THE KEYHOLE
function answer5B() {
  displayQ6();
  gryffindor += 45;
  ravenclaw += 18;
  hufflepuff += 16;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 5A: THINK WITH ADMIRATION OF YOUR ACHIEVEMENTS
// 5B: STANDING ON TOP OF SOMETHING VERY HIGH
function answer5C() {
  displayQ6();
  gryffindor += 19;
  ravenclaw += 45;
  hufflepuff += 20;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 5A: I DON'T CARE, IT'S WHAT THEY THINK OF ME WHEN I'M ALIVE
// 5B: BEING FORCED TO SPEAK IN A SILLY VOICE
function answer5D() {
  displayQ6();
  gryffindor += 18;
  ravenclaw += 20;
  hufflepuff += 21;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 6 TEXT
function displayQ6() {
  let question5Div = document.querySelector('.question5');
  let question6Div = document.querySelector('.question6');
  question5Div.setAttribute('style', 'display: none');
  question6Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "6 / 9";
  document.getElementById('question-count2').textContent = "6 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question6Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/dursleys-2.png) no-repeat center fixed;');
    document.getElementById('question-6').textContent = "A Muggle confronts you and says that they are sure you are a witch or wizard. Do you:";
    document.getElementById('answer-6A').textContent = "Ask what makes them think so?";
    document.getElementById('answer-6B').textContent = "Agree, and ask whether they’d like a free sample of a jinx?";
    document.getElementById('answer-6C').textContent = "Agree, and walk away, leaving them to wonder whether you are bluffing?";
    document.getElementById('answer-6D').textContent = "Tell them that you are worried about their mental health, and offer to call a doctor.";
  } else if (randQuestion >= 50) {
    question6Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/fantasy-large.jpg) no-repeat center fixed;');
    document.getElementById('question-6').textContent = "Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:";
    document.getElementById('answer-6A').textContent = "Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur?";
    document.getElementById('answer-6B').textContent = "Draw your wand and stand your ground?";
    document.getElementById('answer-6C').textContent = "Draw your wand and try to discover the source of the noise?";
    document.getElementById('answer-6D').textContent = "Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance?";
  }
};

/*============================================================= QUESTION 6 ===================================================================*/
// QUESTION 6A: A MUGGLE CONFRONTS YOU AND ACCUSES YOU OF BEING A WITCH/WIZARD...
// 6A: ASK THEM WHAT MAKES THEM THINK SO?
// QUESTION 6B: LATE AT NIGHT YOU HEAR A MAGICAL CRY...
// 6B: WITHDRAW INTO THE SHADOWS TO ANALYZE THE SITUATION
function answer6A() {
  displayQ7();
  gryffindor += 18;
  ravenclaw += 45;
  hufflepuff += 20;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 6A: AGREE, AND ASK WHETHER THEY WOULD LIKE A FREE SAMPLE OF A JINX?
// 6B: DRAW YOUR WAND AND STAND YOUR GROUND?
function answer6B() {
  displayQ7();
  gryffindor += 19;
  ravenclaw += 18;
  hufflepuff += 19;
  slytherin += 42;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 6A: AGREE, AND WALK AWAY, LEAVING THEM WONDERING WHETHER YOU ARE BLUFFING
// 6B: DRAW YOUR WAND AND TRY TO DISCOVER THE SOURCE OF THE NOISE?
function answer6C() {
  displayQ7();
  gryffindor += 45;
  ravenclaw += 20;
  hufflepuff += 16;
  slytherin += 21;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 6A: TELL THEM THAT YOU ARE WORRIED ABOUT THEIR MENTAL HEALTH
// 6B: PROCEED WITH CAUTION, KEEPING  LOOK OUT FOR DISTURBANCES.
function answer6D() {
  displayQ7();
  gryffindor += 18;
  ravenclaw += 17;
  hufflepuff += 45;
  slytherin += 20;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 7 TEXT
function displayQ7() {
  let question6Div = document.querySelector('.question6');
  let question7Div = document.querySelector('.question7');
  question6Div.setAttribute('style', 'display: none');
  question7Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "7 / 9";
  document.getElementById('question-count2').textContent = "7 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question7Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/hogwarts-photo-aditya-vyas.jpg) no-repeat center fixed;');
    document.getElementById('question-7').textContent = "Which road tempts you most?";
    document.getElementById('answer-7A').textContent = "The wide, sunny, grassy lane";
    document.getElementById('answer-7B').textContent = "The narrow, dark, lantern-lit alley";
    document.getElementById('answer-7C').textContent = "The twisting, leaf-strewn path through the woods";
    document.getElementById('answer-7D').textContent = "The cobbled street lined with ancient buildings";
  } else if (randQuestion >= 50) {
    question7Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/potion-artem-maltsev.jpg) no-repeat center fixed;');
    document.getElementById('question-7').textContent = "Given the choice, would you rather invent a potion that would guarantee you:";
    document.getElementById('answer-7A').textContent = "Love?";
    document.getElementById('answer-7B').textContent = "Power?";
    document.getElementById('answer-7C').textContent = "Glory?";
    document.getElementById('answer-7D').textContent = "Wisdom?";
  }
};

/*============================================================= QUESTION 7 ===================================================================*/
// QUESTION 7A: WHICH ROAD TEMPTS YOU MOST?
// 7A: THE WIDE, SUNNY GRASSY LANE
// QUESTION 7B: GIVEN THE CHOICE, WOULD YOU RATHER INVENT A POTION...
// 7B: LOVE?
function answer7A() {
  displayQ8();
  gryffindor += 18;
  ravenclaw += 16;
  hufflepuff += 45;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 7A: THE NARRO, DARK, LANTERN-LIT ALLEY
// 7B: POWER?
function answer7B() {
  displayQ8();
  gryffindor += 18;
  ravenclaw += 20;
  hufflepuff += 19;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 7A: THE TWISTING, LEAF-STREWN PATH THROUGH THE WOODS
// 7B: GLORY?
function answer7C() {
  displayQ8();
  gryffindor += 45;
  ravenclaw += 20;
  hufflepuff += 18;
  slytherin += 19;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 7A: THE COBBLED STREET LINED WITH ANCIENT BUILDINGS
// 7B: WISDOM?
function answer7D() {
  displayQ8();
  gryffindor += 18;
  ravenclaw += 43;
  hufflepuff += 22;
  slytherin += 16;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 8 TEXT
function displayQ8() {
  let question7Div = document.querySelector('.question7');
  let question8Div = document.querySelector('.question8');
  question7Div.setAttribute('style', 'display: none');
  question8Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "8 / 9";
  document.getElementById('question-count2').textContent = "8 / 9";
  let randQuestion = Math.floor((Math.random() * 100) + 1);
  if (randQuestion < 50) {
    question8Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/great-hall-2.png) no-repeat center fixed;');
    document.getElementById('question-8').textContent = "Which of the following would you most hate people to call you?";
    document.getElementById('answer-8A').textContent = "Ordinary";
    document.getElementById('answer-8B').textContent = "Ignorant";
    document.getElementById('answer-8C').textContent = "Cowardly";
    document.getElementById('answer-8D').textContent = "Selfish";
  } else if (randQuestion >= 50) {
    question8Div.setAttribute('style', 'display: flex; visibility: visible; background: url(images/library-statues-giammarco.jpg) no-repeat center fixed;');
    document.getElementById('question-8').textContent = "How would you like to be known to history?";
    document.getElementById('answer-8A').textContent = "The Great";
    document.getElementById('answer-8B').textContent = "The Wise";
    document.getElementById('answer-8C').textContent = "The Bold";
    document.getElementById('answer-8D').textContent = "The Good";
  }
};

/*============================================================= QUESTION 8 ===================================================================*/
// QUESTION 8A: WHICH OF THE FOLLOWING WOULD YOU MOST HATE PEOPLE TO CALL YOU?
// 8A: ORDINARY
// QUESTION 8B: HOW WOULD YOU LIKE TO BE KNOWN TO HISTORY?
// 8B: THE GREAT
function answer8A() {
  displayQ9();
  gryffindor += 19;
  ravenclaw += 20;
  hufflepuff += 21;
  slytherin += 45;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 8A: IGNORANT
// 8B: THE WISE
function answer8B() {
  displayQ9();
  gryffindor += 19;
  ravenclaw += 50;
  hufflepuff += 19;
  slytherin += 17;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 8A: COWARDLY
// 8B: THE BOLD
function answer8C() {
  displayQ9();
  gryffindor += 45;
  ravenclaw += 17;
  hufflepuff += 17;
  slytherin += 21;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 8A: SELFISH
// 8B: THE GOOD
function answer8D() {
  displayQ9();
  gryffindor += 17;
  ravenclaw += 15;
  hufflepuff += 44;
  slytherin += 18;
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};

// FUNCTION TO DISPLAY QUESTION 9 TEXT
function displayQ9() {
  let question8Div = document.querySelector('.question8');
  let question9Div = document.querySelector('.question9');
  question8Div.setAttribute('style', 'display: none');
  question9Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "9 / 9";
  document.getElementById('question-count2').textContent = "9 / 9";
};

/*============================================================= QUESTION 9 ==================================================================*/
// QUESTION 9: DID YOU PUT YOUR NAME IN THE GOBLET OF FIRE?
// 9: NO SIR!:
function answer9A() {
  gryffindor += 25;
  ravenclaw += 25;
  hufflepuff += 25;
  slytherin += 25;
  gameResult(gryffindor, ravenclaw, hufflepuff, slytherin);
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};
// 9: SO WHAT IF I DID 'BIG AL'?:
function answer9B() {
  gryffindor += 25;
  ravenclaw += 25;
  hufflepuff += 25;
  slytherin += 25;
  gameResult(gryffindor, ravenclaw, hufflepuff, slytherin);
  return gryffindor, ravenclaw, hufflepuff, slytherin;
};




/*============================================================ GAME FUNCTIONS =================================================================*/
  
// FUNCTION TO OPEN END OF GAME MODAL SCREEN
function openModal() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var restart = document.getElementById("playAgain");
  modal.style.display = "block";
    // FUNCTION TO CLOSE MODAL WHEN CLOSE (X) BUTTON CLICKED
  span.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN RESTART BUTTON CLICKED
  restart.onclick = function() {
    modal.style.display = "none";
    restartGame();
  };
  // FUNCTION TO CLOSE MODAL WHEN USER CLICKS OUTSIDE OF MODAL
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      restartGame();
    }
  };
};


/* FUNCTION TO RESTART AND RESET GAME */
function restartGame() {
  let gryffSound = document.getElementById("gryffindorAudio");
  let ravenSound = document.getElementById("ravenclawAudio");
  let huffleSound = document.getElementById("hufflepuffAudio");
  let slythSound = document.getElementById("slytherinAudio");
  let restartSound = document.getElementById("restartAudio");
  gryffSound.pause();
  ravenSound.pause();
  huffleSound.pause();
  slythSound.pause();
  restartSound.play();
  gryffindor = 0;
  ravenclaw = 0;
  hufflepuff = 0;
  slytherin = 0;
  let question9Div = document.querySelector('.question9');
  question9Div.setAttribute('style', 'display: none');
  let question1Div = document.querySelector('.question1');
  question1Div.setAttribute('style', 'display: flex; visibility: visible');
  document.getElementById('question-count1').textContent = "1 / 9";
  document.getElementById('question-count2').textContent = "1 / 9";
}


// FUNCTION TO TAKE FINAL HOUSE COUNTER TOTALS AND DISPLAY RESULTS ON ENDGAME MODAL
function gameResult(gryffindor, ravenclaw, hufflepuff, slytherin) {
  // OPEN ENDGAME MODAL
  openModal();
  // VARIABLES TO CALCULATE HOUSE PERCENTAGES FROM TOTAL RESULTS 
  let gryffindorPercent = Math.floor(((gryffindor) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let ravenclawPercent = Math.floor(((ravenclaw) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let hufflepuffPercent = Math.floor(((hufflepuff) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  let slytherinPercent = Math.floor(((slytherin) / (gryffindor + ravenclaw + hufflepuff + slytherin)) * 100);
  // VARIABLES TO STORE SOUND EFFECTS
  let gryffSound = document.getElementById("gryffindorAudio");
  let ravenSound = document.getElementById("ravenclawAudio");
  let huffleSound = document.getElementById("hufflepuffAudio");
  let slythSound = document.getElementById("slytherinAudio");
  // IF GRYFFINDOR WINS; PLAY SOUND, DISPLAY CREST, COLOR AND TEXT
  if ((gryffindor >= ravenclaw) && (gryffindor >= hufflepuff) && (gryffindor >= slytherin)) {
    gryffSound.play();
    document.getElementById('threeTraits').textContent = "Courage, Bravery, Determination";
    document.getElementById('finalResult').innerHTML = "GRYFFINDOR!";
    document.getElementById('houseCrest').src="images/icons8-gryffindor-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Gryffindor";
    document.getElementById('houseDescription').textContent = "You probably know that some of Gryffindor's most renowned members include Albus Dumbledore and Harry Potter. But did you know the sword of Gryffindor was made a thousand years ago by goblins. or that Head of House Minerva McGonagall's hobbies include correcting articles in Transfiguration Today and supporting the Montrose Magpies?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"You might belong in Gryffindor, Where dwell the brave at heart, Their daring, nerve and chivalry Set Gryffindors apart"';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("endScreen").style.backgroundImage = "linear-gradient(rgba(161, 17, 17, 0.957), rgb(67, 1, 1))";
    // IF RAVENCLAW WINS; PLAY SOUND, DISPLAY CREST, COLOR AND TEXT
  } else if ((ravenclaw >= gryffindor) && (ravenclaw >= hufflepuff) && (ravenclaw >= slytherin)) {
    ravenSound.play();
    document.getElementById('threeTraits').textContent = "Wit, Learning, Wisdom";
    document.getElementById('finalResult').innerHTML = "RAVENCLAW!";
    document.getElementById('houseCrest').src="images/icons8-ravenclaw-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Ravenclaw";
    document.getElementById('houseDescription').textContent = "You probably know that some of Ravenclaw’s most renowned members include Gilderoy Lockhart and Luna Lovegood. But did you know Ravenclaw’s Grey Lady is the least talkative Hogwarts house ghost, or that Ravenclaw’s common room boasts the most stunning views of the castle grounds?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"Or yet in wise old Ravenclaw, If you’ve a ready mind, Where those of wit and learning, Will always find their kind."';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("endScreen").style.backgroundImage = "linear-gradient(rgb(0, 73, 79), rgb(0, 0, 78))";
    // IF HUFFLEPUFF WINS; PLAY SOUND, DISPLAY CREST, COLOR AND TEXT
  } else if ((hufflepuff >= gryffindor) && (hufflepuff >= ravenclaw) && (hufflepuff >= slytherin)) {
    huffleSound.play();
    document.getElementById('threeTraits').textContent = "Dedication, Patience, Loyalty";
    document.getElementById('finalResult').innerHTML = "HUFFLEPUFF!";
    document.getElementById('houseCrest').src="images/icons8-hufflepuff-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Hufflepuff";
    document.getElementById('houseDescription').textContent = "You probably know that some of Hufflepuff’s most renowned members include Nymphadora Tonks and Cedric Diggory. But did you know that Hufflepuff’s house ghost, the Fat Friar, still resents the fact he was never made a cardinal? Or that Hufflepuff has produced the fewest Dark wizards of any house at Hogwarts?";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true And unafraid of toil"';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("endScreen").style.backgroundImage = "linear-gradient(goldenrod, rgb(101, 39, 0))";
    // IF SLYTHERIN WINS; PLAY SOUND, DISPLAY CREST, COLOR AND TEXT
  } else if ((slytherin >= gryffindor) && (slytherin >= ravenclaw) && (slytherin >= hufflepuff)) {
    slythSound.play();
    document.getElementById('threeTraits').textContent = "Pride, Ambition, Cunning";
    document.getElementById('finalResult').innerHTML = "SLYTHERIN!";
    document.getElementById('houseDescription').textContent = "You probably know that some of Slytherin’s most renowned members include Severus Snape and Bellatrix Lestrange. But did you know Merlin himself was a Slytherin, or that according to legend, the ribbon of a First Class Order of Merlin is green to reflect his Hogwarts house?";
    document.getElementById('houseCrest').src="images/icons8-slytherin-100.png";
    document.getElementById('welcomeMessage').textContent = "Welcome to Slytherin";
    document.getElementById('gryffindor').innerHTML = "Gryffindor: <br>" + gryffindorPercent + "%";
    document.getElementById('ravenclaw').innerHTML = "Ravenclaw: <br>" + ravenclawPercent + "%";
    document.getElementById('hufflepuff').innerHTML = "Hufflepuff: <br>" + hufflepuffPercent + "%";
    document.getElementById('slytherin').innerHTML = "Slytherin: <br>" + slytherinPercent + "%";
    document.getElementById('quoteContent').textContent = '"Or perhaps in Slytherin, You\'ll make your real friends, These cunning folks use any means To achieve their ends."';
    document.getElementById('quotePerson').textContent = "THE SORTING HAT";
    document.getElementById('quoteSource').textContent = "Harry Potter and the Philosopher's Stone";
    document.getElementById("endScreen").style.backgroundImage = "linear-gradient(#002009, rgb(1, 59, 38))";
  }
};
