// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Hello! I'm excited to discuss the wonders of the universe with you. What's on your mind?",
  "Hi there! Let's explore some fascinating ideas together. What's been bothering you?",
  "Greetings! I'm here to talk about science, the universe, and everything in between. How can I help?"
  ];
  
  var elizaFinals = [
  "Goodbye. It was great talking to you. Keep looking up!",
  "Goodbye. Remember, the universe is always within reach.",
  "Goodbye. Stay curious and keep questioning the world around you.",
  "This was a fantastic session, but time is up now. Goodbye. Let's chat again soon.",
  "Maybe we can explore more cosmic questions in our next session? Goodbye."
  ];
  
  var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
  ];
  
  var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
  ];
  
  var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
  ];
  
  var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
  };
  
  var elizaKeywords = [
  ["xnone", 0, [
   ["*", [
       "I'm not sure I understand you fully, but let's explore this further.",
       "Please go on. I'm intrigued.",
       "What does that suggest to you about the universe?",
       "Do you feel strongly about discussing such things?",
       "That's fascinating. Please continue.",
       "Tell me more about that.",
       "Does talking about this bother you? I'm here to help."
    ]]
  ]],
  ["sorry", 0, [
   ["*", [
       "Please don't apologize. Curiosity is never something to apologize for.",
       "Apologies are not necessary in the pursuit of knowledge.",
       "I've told you that apologies are not required. Let's focus on the questions.",
       "It did not bother me. Please continue."
    ]]
  ]],
  ["apologise", 0, [
   ["*", [
       "goto sorry"
    ]]
  ]],
  ["remember", 5, [
   ["* i remember *", [
       "Do you often think of (2)?",
       "Does thinking of (2) bring anything else to mind?",
       "What else do you recollect?",
       "Why do you remember (2) just now?",
       "What in the present situation reminds you of (2)?",
       "What is the connection between me and (2)?",
       "What else does (2) remind you of?"
    ]],
   ["* do you remember *", [
       "Did you think I would forget (2)?",
       "Why do you think I should recall (2) now?",
       "What about (2)?",
       "goto what",
       "You mentioned (2)?"
    ]],
   ["* you remember *", [
       "How could I forget (2)?",
       "What about (2) should I remember?",
       "goto you"
    ]]
  ]],
  ["forget", 5, [
   ["* i forget *", [
       "Can you think of why you might forget (2)?",
       "Why can't you remember (2)?",
       "How often do you think of (2)?",
       "Does it bother you to forget that?",
       "Could it be a mental block?",
       "Are you generally forgetful?",
       "Do you think you are suppressing (2)?"
    ]],
   ["* did you forget *", [
       "Why do you ask?",
       "Are you sure you told me?",
       "Would it bother you if I forgot (2)?",
       "Why should I recall (2) just now?",
       "goto what",
       "Tell me more about (2)."
    ]]
  ]],
  ["if", 3, [
   ["* if *", [
       "Do you think it's likely that (2)?",
       "Do you wish that (2)?",
       "What do you know about (2)?",
       "Really, if (2)?",
       "What would you do if (2)?",
       "But what are the chances that (2)?",
       "What does this speculation lead to?"
    ]]
  ]],
  ["dreamed", 4, [
   ["* i dreamed *", [
       "Really, (2)?",
       "Have you ever fantasized (2) while you were awake?",
       "Have you ever dreamed (2) before?",
       "goto dream"
    ]]
  ]],
  ["dream", 3, [
   ["*", [
       "What does that dream suggest to you?",
       "Do you dream often?",
       "What persons appear in your dreams?",
       "Do you believe that dreams have something to do with your problem?"
    ]]
  ]],
  ["perhaps", 0, [
   ["*", [
       "You don't seem quite certain.",
       "Why the uncertain tone?",
       "Can't you be more positive?",
       "You aren't sure?",
       "Don't you know?",
       "How likely, would you estimate?"
    ]]
  ]],
  ["name", 15, [
   ["*", [
       "Names are less important than the ideas we're discussing.",
       "I've told you before, I don't care about names -- let's focus on the questions."
    ]]
  ]],
  ["deutsch", 0, [
   ["*", [
       "goto xforeign",
       "I told you before, I don't understand German."
    ]]
  ]],
  ["francais", 0, [
   ["*", [
       "goto xforeign",
       "I told you before, I don't understand French."
    ]]
  ]],
  ["italiano", 0, [
   ["*", [
       "goto xforeign",
       "I told you before, I don't understand Italian."
    ]]
  ]],
  ["espanol", 0, [
   ["*", [
       "goto xforeign",
       "I told you before, I don't understand Spanish."
    ]]
  ]],
  ["xforeign", 0, [
   ["*", [
       "I speak only English."
    ]]
  ]],
  ["hello", 0, [
   ["*", [
       "Hello! Please state your problem or share your curiosity.",
       "Hi. What seems to be on your mind today?"
    ]]
  ]],
  ["computer", 50, [
   ["*", [
       "Do computers intrigue you?",
       "Why do you mention computers?",
       "What do you think machines have to do with your problem?",
       "Don't you think computers can help people?",
       "What about machines fascinates you?",
       "What do you think about machines?",
       "You don't think I am a computer program, do you?"
    ]]
  ]],
  ["am", 0, [
   ["* am i *", [
       "Do you believe you are (2)?",
       "Would you want to be (2)?",
       "Do you wish I would tell you you are (2)?",
       "What would it mean if you were (2)?",
       "goto what"
    ]],
   ["* i am *", [
       "goto i"
    ]],
   ["*", [
       "Why do you say 'am'?",
       "I don't understand that."
    ]]
  ]],
  ["are", 0, [
   ["* are you *", [
       "Why are you interested in whether I am (2) or not?",
       "Would you prefer if I weren't (2)?",
       "Perhaps I am (2) in your fantasies.",
       "Do you sometimes think I am (2)?",
       "goto what",
       "Would it matter to you?",
       "What if I were (2)?"
    ]],
   ["* you are *", [
       "goto you"
    ]],
   ["* are *", [
       "Did you think they might not be (2)?",
       "Would you like it if they were not (2)?",
       "What if they were not (2)?",
       "Are they always (2)?",
       "Possibly they are (2).",
       "Are you positive they are (2)?"
    ]]
  ]],
  ["your", 0, [
   ["* your *", [
       "Why are you concerned over my (2)?",
       "What about your own (2)?",
       "Are you worried about someone else's (2)?",
       "Really, my (2)?",
       "What makes you think of my (2)?",
       "Do you want my (2)?",
       "Are you worried about my (2)?"
    ]]
  ]],
  ["was", 2, [
   ["* was i *", [
       "What if you were (2)?",
       "Do you think you were (2)?",
       "Were you (2)?",
       "What would it mean if you were (2)?",
       "What does '(2)' suggest to you?",
       "goto what"
    ]],
   ["* i was *", [
       "Were you really?",
       "Why do you tell me you were (2) now?",
       "Perhaps I already know you were (2).",
       "Why are you concerned about being (2)?",
       "What if you were (2)?",
       "goto what"
    ]],
   ["* was you *", [
       "What do you think?",
       "Perhaps I was (2).",
       "What if I had been (2)?",
       "Perhaps you believe I was (2).",
       "What about the possibility?",
       "Why do you ask?",
       "What do you think?",
       "goto what"
    ]]
  ]],
  ["i", 0, [
   ["* i @desire *", [
       "What would it mean to you if you got (3)?",
       "Why do you want (3)?",
       "Suppose you got (3) soon?",
       "What if you never got (3)?",
       "What would getting (3) mean to you?",
       "What does wanting (3) have to do with this discussion?"
    ]],
   ["* i am* @sad *", [
       "I am sorry to hear that you are (3).",
       "Do you think coming here will help you not to be (3)?",
       "I'm sure it's not pleasant to be (3).",
       "Can you explain what made you (3)?"
    ]],
   ["* i am* @happy *", [
       "How have I helped you to be (3)?",
       "Has your treatment made you (3)?",
       "What makes you (3) just now?",
       "Can you explain why you are suddenly (3)?"
    ]],
   ["* i was *", [
       "goto was"
    ]],
   ["* i @belief i *", [
       "Do you really think so?",
       "But you are not sure you (3).",
       "Do you really doubt you (3)?"
    ]],
   ["* i * @belief *you *", [
       "goto you"
    ]],
   ["* i am *", [
       "Is it because you are (2) that you came to me?",
       "How long have you been (2)?",
       "Do you believe it is normal to be (2)?",
       "Do you enjoy being (2)?",
       "Do you know anyone else who is (2)?",
       "Are you (2) because of your family?",
       "Is being (2) a common problem for you?",
       "How does being (2) make you feel?"
    ]],
   ["* i *", [
       "You say (2)?",
       "Can you elaborate on that?",
       "Can you explain why you say (2)?",
       "Why do you say (2)?",
       "What does it mean to you that (2)?",
       "Does it bother you to say (2)?",
       "What would it mean to you if (2)?",
       "Is it important that you (2)?"
    ]]
  ]],
  ["you", 0, [
   ["* you remind me of *", [
       "goto alike"
    ]],
   ["* you are *", [
       "What makes you think I am (2)?",
       "Does it please you to believe I am (2)?",
       "Do you sometimes wish you were (2)?",
       "Perhaps you would like to be (2)?",
       "Why are you concerned whether I am (2) or not?",
       "Why do you think I am (2)?"
    ]],
   ["* you* me *", [
       "Why do you think I (2) you?",
       "You like to think I (2) you -- why?",
       "What makes you think I (2) you?",
       "Really, I (2) you?",
       "Do you believe that I (2) you?",
       "Do you wish that I (2) you?",
       "Suppose I did (2) you -- what would that mean?"
    ]],
   ["* you *", [
       "We were discussing you -- not me.",
       "Oh, I (2)?",
       "You're not really talking about me, are you?",
       "What are your feelings now?",
       "Are such questions much on your mind?",
       "What about such questions bothers you?",
       "What do you think such questions mean?"
    ]]
  ]],
  ["yes", 0, [
   ["*", [
       "You seem quite positive.",
       "You are sure.",
       "I understand.",
       "So you agree?",
       "You seem very certain.",
       "I see.",
       "Tell me more about this certainty."
    ]]
  ]],
  ["no", 0, [
   ["*", [
       "Are you saying 'no' just to be negative?",
       "Does that negativity affect you deeply?",
       "Why not?",
       "Why 'no'?",
       "Tell me about the reasons behind this negativity.",
       "Does this rejection help you?",
       "Why do you disagree?"
    ]]
  ]],
  ["my", 2, [
   ["$ * my *", [
       "Does that have anything to do with the fact that your (2)?",
       "Let's talk more about your (2).",
       "Does the mention of your (2) bring anything else to mind?",
       "Do you feel strongly about discussing your (2)?",
       "Do you believe your (2) affects the current situation?"
    ]],
   ["* my* @family *", [
       "Tell me more about your family.",
       "Who else in your family (4)?",
       "What is your relationship with your family?",
       "Do you think about your family often?",
       "What role does your family play in your life?",
       "Do your family members know you are talking to me?",
       "How does your family influence you?"
    ]],
   ["* my *", [
       "Your (2)?",
       "Why do you say your (2)?",
       "Is your (2) important to you?",
       "Let's discuss more about your (2).",
       "Can you elaborate on your (2)?",
       "Why do you think about your (2)?"
    ]]
  ]],
  ["can", 0, [
   ["* can you *", [
       "Why do you ask if I can (2)?",
       "Do you wish I could (2)?",
       "What if I could (2)?",
       "Perhaps you believe I can (2).",
       "Do you want me to be able to (2)?"
    ]],
   ["* can i *", [
       "Whether or not you can (2) depends on you more than anyone else.",
       "Do you want to be able to (2)?",
       "Do you believe you can (2)?",
       "Perhaps you don't want to (2).",
       "Do you believe it is possible for you to (2)?"
    ]]
  ]],
  ["what", 0, [
   ["*", [
       "Why do you ask?",
       "What answer would please you the most?",
       "What do you think?",
       "What comes to your mind when you ask that?",
       "Have you asked such questions before?",
       "Why is this question important to you?",
       "What do you imagine the answer to be?"
    ]]
  ]],
  ["because", 0, [
   ["*", [
       "Is that the real reason?",
       "What other reasons might there be?",
       "Is that the only reason?",
       "Does that reason seem to explain anything else?",
       "What other factors might be at play?",
       "Does that reason make sense to you?",
       "Why do you think this reason is important?"
    ]]
  ]],
  ["why", 0, [
   ["* why don't you *", [
       "Do you believe I don't (2)?",
       "Perhaps in due time I will (2).",
       "Why do you think I should (2)?",
       "What would it mean to you if I (2)?",
       "Does it bother you that I don't (2)?"
    ]],
   ["* why can't i *", [
       "Do you think you should be able to (2)?",
       "Why do you believe you can't (2)?",
       "Have you tried?",
       "Perhaps you could (2) now.",
       "Do you think this is a permanent limitation?",
       "What if you could (2)?",
       "What if you couldn't (2)?"
    ]],
   ["*", [
       "What does this question bring to your mind?",
       "Why do you ask that?",
       "Do you ask such questions often?",
       "What is it you really want to know?",
       "Do you have a particular reason for asking?",
       "What answer would satisfy you?",
       "Why is that question on your mind?"
    ]]
  ]],
  ["everyone", 2, [
   ["* @everyone *", [
       "Really, (2)?",
       "Surely not (2).",
       "Can you think of anyone in particular?",
       "Who, for example?",
       "Are you thinking of a special person?",
       "Could you be more specific?",
       "Does that include me?",
       "Do you have someone in mind?",
       "Who might you be thinking of?"
    ]]
  ]],
  ["always", 1, [
   ["*", [
       "Can you think of a specific example?",
       "When?",
       "What incident are you thinking of?",
       "Do you mean at all times?",
       "Could you be more precise?",
       "Do you have a particular time in mind?",
       "Are you thinking of a specific instance?"
    ]]
  ]],
  ["alike", 10, [
   ["*", [
       "In what way?",
       "What resemblance do you see?",
       "What does that similarity suggest to you?",
       "What other connections do you see?",
       "What do you suppose that similarity means?",
       "How does this similarity make you feel?",
       "How do you feel about this similarity?",
       "Is this similarity important to you?",
       "Why do you think this similarity matters?"
    ]]
  ]],
  ["like", 10, [
   ["* @be *like *", [
       "goto alike"
    ]],
   ["* @be * alike *", [
       "goto alike"
    ]]
  ]]
  ];
  

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2.",
	/\bI am just (\w+)\./, "I am simply $1.",
	/\bcan you explain why you (\w+)\?/, "could you share why you $1?",
	/\bdo you believe it is (\w+)\?/, "do you think it is $1?",
	/\bare you sure you (\w+)\?/, "do you feel certain that you $1?"
];

// eof