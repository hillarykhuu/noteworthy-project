import React from 'react'
import './style.css'

import MemberCard from '../MemberCard'



export default function MemberCards() {



    return (
        <div className='MemberCards'>
            {/* <MemberCard />
            <MemberCard />
            <MemberCard /> */}
            {memberInformation.map(memInfo => <MemberCard key={memInfo.name} memInfo={memInfo} />)}
        </div>
    )
}

const memberInformation = [
    {
        name: "Eddie Cekici",
        position: "Co-Business Manager",
        voicePart: "Bass",
        semesterInBerkeley: "6th",
        semesterInNoteworthy: "8th",
        majors: "Chemical Biology",
        minors: "Statistics",
        interests: "being albanian, gipsy kings, olive oil, outer wilds, jon bois",
        bio: "Hey, what’s up y’all, it’s nice to meet you, but it’s even better to meet me. My name is Eddie Cekici, I have 250 hours in Noteworthy and I specialize in making weird ass noises with my mouth. Noteworthy is a way of life for me. I go in there, do some b’s, maybe some k’s, throw in a couple t’s in there to really get everybody pumped. The chicks go wild. Like feral hogs. Did you know that feral hogs will eat people? Apparently they cause so much agricultural and even property damage that it’s legal in Texas to hunt them from a goddamn helicopter. And they WILL eat human flesh if given the chance. Just like pangolins. Well, I lied about the pangolins, but you believed me, didn’t you? And that’s what really matters, because belief in an assumed truth is stronger than proof of reality, and through this we are able to change not just our perceptions of reality, but reality itself. For example, this tea I’m about to drink is super hot, but if I simply believe it is cold and I down it all in on- oh no oh ow hot hoo boy oh no that no wait no that was supposed to oh god HELP ahhhhh HELP ME PLEASE oh I can feel it making a hole in my throat that’s not good ok hoo ouch ow oh no nope no please I’m sorry anyways this date is going well don’t you agree? no? that’s ok more panda express crab rangoons for me",
        imgURL: "/members/EddieCekici.jpeg",
    },
    {
        name: "Ellington Chen",
        position: "Co-Music Manager",
        voicePart: "Baritone",
        semesterInBerkeley: "4th",
        semesterInNoteworthy: "4th",
        majors: "😭😭😭😭😭😭😭",
        minors: "",
        interests: "Singing, dancing, singing and dancing, singing but not dancing, dancing but not singing, neither singing nor dancing, actually I don’t even",
        bio: `For the past two years my Noteworthy bio has been pretty bad, so for this semester’s bio I decided to employ a Professionally Engineered Nanotech Inspired Smachine-learning algorithm that I fed some of Noteworthy’s best bios of the past to make the penultimate bio – and finally make me seem funny.

        However, after months of quantum computations, I discovered a grave mistake. Eddie had somehow slipped into the samples and multiplied generation after generation until the computer could only recognize the world through obscure video game references, theater, and albania. Without further ado:
        
        ————————————————————————————————————————————————-
        
        Introducing Eddie, a living paradox of quirky charm, proudly representing his Albanian heritage right in the heart of New York. His love life reads like a script torn from a vintage video game, sprinkled with love bites and mysterious red marks.
        
        Spotlight on Eddie, who steps onto the stage, his Hawaiian shirt one button shy of outrageous, bottle of olive oil in hand.
        
        Eddie: (Eagerly) “Hello, world!”
        
        His vampire lover, a figure cloaked in darkness, suddenly lunges at Eddie, leaving cryptic red marks on his neck.
        
        Vampire Lover: (Passionately) Incomprehensible hisses and whispers, followed by a soft, sinister chuckle.
        
        Eddie’s existence is now a peculiar blend of passion and awkwardness. He’s fallen for a vampire, and those enigmatic love bites multiply like bonus points in a retro video game.
        
        The stage transforms into a pixelated world, resembling a vintage video game, with love bites appearing as mysterious power-ups.
        
        Narrator: (Dramatically) “Level up in love, Eddie!”
        
        STATS:
        
        Love Bite Accumulation: Countless
        Mysterious Red Marks: A growing collection
        Video Game References: Rare as legendary loot
        Aspirations: Ever-evolving like game expansions
        
        As for his life goals, they’re as unique as the storyline of a vintage game. He dreams of becoming a published playwright, but sometimes he takes a dive into the “OH MY GOD SO REDACTED,” like an unexpected twist in a storyline.
        
        Eddie, deep in thought, ponders his aspirations, a cloud of mystery hovering over his dreams.
        
        Eddie: (Contemplative) Muttering to himself, with occasional cryptic whispers.
        
        And in a plot twist that could be straight from a role-playing game, Eddie discovered an ancient Game Boy hidden in an old drawer. Its screen flickered to life, and he embarked on a quest within the pixelated world of “Glover,” as obscure as his vampire lover’s affection.
        
        Eddie’s hands frantically explore the old drawer, and he finds the Game Boy, its screen coming to life in a dramatic, pixelated spectacle.
        
        Narrator: (Excitedly) “A new quest begins!”
        
        As the moonlight bathes their secret rendezvous in an ethereal glow, Eddie serenades his vampire love with verses more poetic than a bard in a fantasy RPG. His heart is a labyrinth, beating to a rhythm known only to them.
        
        Eddie and his vampire lover stand together in the moonlit embrace, the stage set in a surreal and romantic tableau.
        
        Eddie: (Poetically) “In this pixelated love story, we’re the heroes of our own game.”
        
        And now, for a five-line rap to capture the essence of this extraordinary love story:
        
        Eddie and his vampire lover, entwined in an intricate dance, perform a rap with supernatural finesse.
        
        Eddie and Vampire Lover: (Rapping) “Vampire lover, my heart’s undercover, Cryptic red marks, a passion like no other, In the realm of pixels, we found each other, In the game of love, we level up together, Eddie and his vampire, an odd couple, forever.”
        `,
        imgURL: "/members/EllingtonChen.jpeg",
    },
    {
        name: "Athena Liu",
        position: "Co-Music Manager",
        voicePart: "Tenor 1",
        semesterInBerkeley: "2nd",
        semesterInNoteworthy: "2nd",
        majors: "Undeclared (intended CoC transfer)",
        minors: "",
        interests: "music, gay little TV shows, licking jam out of those tiny single serving plastic boxes, nature walks, alliums, videotaping curious creatures, head scritches, your mother, Steamed Hams (meme), cooking",
        bio: `psst. psssst! hey, you. yes, you with that bad haircut. mmmyep. that one.

        great! i got your attention! okay. i need your help. listen close. someone trapped me in this webpage. this picture of me you’re looking at right now? i’ve been stuck in this position for weeks. god, it hurts. i can feel the pixels burning into my skin. crazy, right? imagine how i feel. i figured out how to screw with the HTML the other day and write this. oh, how’d this happen? i’ll spare you the gory details, but basically at rehearsal the other i asked the managers what deez was, felt someone punch my head, and woke up in here.
        
        you’re willing to help me? oh my days! believe me, i’m endlessly grateful. next time you want to go to croads that’s on me, yeah? ok, here’s what i need you to do. i need you to open up an incognito tab in google chrome and type “youtube.com” into the search bar. then type “uc berkeley noteworthy enormous penis” into the youtube search bar. click on the first video that pops up and watch the whole thing. after you do that, i’ll be freed. cheers, mate, and thanks again. really.`,
        imgURL: "/members/AthenaLiu.jpeg",
    }
];

    // {
    //     name: "",
    //     position: "",
    //     voicePart: "",
    //     semesterInBerkeley: "",
    //     semesterInNoteworthy: "",
    //     majors: "",
    //     minors: "",
    //     interests: "",
    //     bio: "",
    //     imgURL: " ",
    // },

