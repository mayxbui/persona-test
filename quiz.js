function startQuiz() {
    const intro1 = [
        "You wake up and find yourself standing in a place that looks like Bến Thành Market. The only reason that holds you back to reality is that it is not the real Bến Thành market because it has no exit or entrance.",
        "Standing still, you can smell the air filled with the rich aroma of grilled pork, fresh herbs, and fish sauce. Vendors are calling out, and steam rises from bubbling pots.",
        "The last thing you remember is looking out the window, and now, you're here. Something feels off. A small envelope is tucked in your pocket with a letter inside: 'Find the dish that best represents your soul, and you shall return home.'"
    ];

    const quiz = [
        {   //1
            question: "It seems like you will stuck here for a while, but it is magical and fun here, especially since the food looks so amazing. How will you plan for the day?"
            choices: [
                "Plan everything ahead: the routes, what to eat, when to figure the way out.",
                "Go with the flow and see where it takes me, I might come back home in a second then why waste a second?"
            ]
            weight: [
                {J: +3, P: 0}, //FIX SCORING
                {P: +1, J: 0},
            ]
        },
        {   //2
            question: "You rub your eyes and take in your surroundings. An elderly woman selling bánh tráng nướng (Vietnamese grilled rice paper) waves you over. She offers you a bite. What do you do?"
            choices: [
                "A warm snack from a kind elder is always a good idea!",
                "Politely decline and try to figure out where I am first."
            ]
            weight: [
                {N: +3, S: 0}, //FIX SCORING
                {S: +1, N: 0},
            ]
        },
        {   //3
            question: "As you wander deeper into the market, you notice a hidden alleyway leading with a sign that says: 'Dare to taste the unknown.' Do you enter?"
            choices: [
                "It does not hurt to take a sneak peek inside.",
                "I'll stick to the main market for now. No idea if I could return."
            ]
            weight: [
                {N: +3, S: 0}, //FIX SCORING
                {S: +1, N: 0},
            ]
        },
        {   //4a
            question: "As you enter the dark alley, you see a familiar scene. “Omg, it looks exactly like Hoi An ancient town, except it is smaller!” Suddenly a little girl runs across you and drops a lotus lantern. You pick it up and chase after the girl. However, she is too fast, and you don’t see which turn she takes..."
            choices: [
                "Maybe she turns right to let's check that out first, if not, I'll go back to turn left.",
                "*Pull out the map to check where the roads lead to*"
            ]
            weight: [
                {N: +3, S: 0}, //FIX SCORING
                {S: +1, N: 0},
            ]
        },
        {   //4b
            question: "As you enter deeper into the market, you realize it's bigger than you think and feel like it's endless. Not sure where to go, you will..."
            choices: [
                "*Enjoy the walk, no matter where it takes you*",
                "*Pull out the map to check where the roads lead to*"
            ]
            weight: [
                {J: +3, P: 0}, //FIX SCORING
                {P: +1, J: 0},
            ]
        },
        {   //5
            question: "You come across a Vietnamese sauce-making workshop and decide to take part in it. There are so many ingredients and options to choose from, what do you do?"
            choices: [
                "Follow what mom taught me and remember how the sauce base should be to make a correct traditional sauce.",
                "Definitely gives it a twist. What if I happen to create a new popular sauce?"
            ]
            weight: [
                {S: +3, N: 0}, //FIX SCORING
                {N: +1, S: 0}
            ]
        },
        {   //6
            question: "Suddenly, something catches your eye. A vendor is selling a rare food you've never seen before. It looks so delicious, and you want to try it out. But first, you will…"
            choices: [
                "*Ask a vendor about the food and the origin of it*",
                "*Stand from a distance and observe to know what other people say about it before buying*"
            ]
            weight: [
                {E: +3, I: 0}, //FIX SCORING
                {I: +1, E: 0}
            ]
        },
        {   //7
            question: "An uncle hands out a flyer to you, convincing you that his Phở vendor is a must-try because his family has mastered the flavor over 3 generations."
            choices: [
                "*Ask him what's special about  his recipe, the flavor, cooking time, and broth-making to see if it is true*",
                "He seems very passionate, maybe I'll give it a try."
            ]
            weight: [
                {T: +3, F: 0}, //FIX SCORING
                {F: +1, T: 0}
            ]
        },
        {   //8
            question: "A tourist bumps into you and asks for some recommendations on the best Vietnamese dishes. How do you respond? "
            choices: [
                "Give them a list of traditional must-tries!",
                "Ask about their preferences first, then suggest dishes that suit them."
            ]
            weight: [
                {T: +3, F: 0}, //FIX SCORING
                {F: +1, T: 0}
            ]
        },
        {   //9
            question: "One of the foods that you suggest is bún đậu mắm tôm (fermented shrimp noodles), but the tourist say they have tried it and don’t like it at all. How will you react?"
            choices: [
                "*Explain why it's the most beloved cuisine and highlight its cultural significance*",
                "*Laugh and tell them it's okay, not everyone can bear the shrimp paste*"
            ]
            weight: [
                {T: +3, F: 0}, //FIX SCORING
                {F: +1, T: 0}
            ]
        },
        {   //10
            question: "As you walk, there is a big crowd in front of you, everyone is cheering and clapping nonstop."
            choices: [
                "I better take another turn to avoid the crowd.",
                "*Curious* Let's see what they are cheering for."
            ]
            weight: [
                {I: +3, E: 0}, //FIX SCORING
                {E: +1, I: 0}
            ]
        },
        {   //11
            question: "You realize the crowd is cheering for a 7-spicy-level Bún bò Huế (Hue beef noodles) eating challenge. The prize for the winner is a golden lotus, plus, you are a spicy eating expert at home."
            choices: [
                "I have to join this challenge. I'm confident in my skills.",
                "*Hesitate* What if I don't win and embarrass myself?"
            ]
            weight: [
                {P: +3, J: 0}, //FIX SCORING
                {J: +1, P: 0}
            ]
        },
        {   //12a
            question: "You can't believe in your eyes as you win the challenge. The organizer invites you to come for a short TikTok interview later or write down some thoughts about your experience and achievement."
            choices: [
                "Do the TikTok as you want to be viral.",
                "Jot down your experience instead as you don't want to public your face."
            ]
            weight: [
                {E: +1, I: 0},
                {I: +3, E: 0} //FIX SCORING
            ]
        },
        {   //12b
            question: "A group of surveyors stops you and invites you to come for a short TikTok interview or write down some thoughts about your experience of the market."
            choices: [
                "",
                ""
            ]
            weight: [
                {I: +3, E: 0}, //FIX SCORING
                {E: +1, I: 0}
            ]
        },
        {   //13
            question: "One of the surveyors asks you, “What do you look for in the food that you eat?”"
            choices: [
                "A dish that tells a story or is rich with memory.",
                "A dish that excites and constantly evolves."
            ]
            weight: [
                {I: +3, S: +3, N: 0, E: 0}, //FIX SCORING
                {E: +1, I: 0, S: 0, N: +3}
            ]
        },
        {   //14
            question: "The surveyors smile and give you an envelope as a thank-you gift. As you open it, a golden light surrounds you, and suddenly, you are sitting on your bed. Surprisingly, the exact envelope is in your hands. You take a deep breath and open it, and a small note inside says, “‘Now that you have found your dish, what will you do next?”"
            choices: [
                "Share it with others. Good food is meant to be enjoyed together.",
                "Try out a few more, this is just the beginning of my journey."
            ]
            weight: [
                //FIX SCORING
                {E: +1, I: 0, F: +3, T: 0},
                {I: +3, E: 0, F: 0, T: +3}
            ]
        }
    ]
    
}