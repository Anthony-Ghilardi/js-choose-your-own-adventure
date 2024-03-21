let answer1 = window.prompt("Do you head left, or right? Type left or right");
    if(answer1 === 'left'){
        goLeft()
    } else if (answer1 === 'right') {
        goRight()
    }

function start() {
    let answer1 = window.prompt(`Do you head left, or right? Type left or right`)
    if(answer1 === 'left') {
        goLeft()
    } else if(answer1 === 'right') {
        goRight()
    }
}

function goLeft() {
    let answer2 = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path? Type follow it or continue`)
    if (answer2 === 'back') {
        start()
    } else if (answer2 === 'follow it') {
        followIt()
    } else if(answer2 ==='continue') {
        onward()
    }  
}


function followIt() {
    let answer3 = window.prompt(`You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you stay, spread the word, or go back? Type stay, spread the word, or go back`)
    if (answer3 === 'stay') {
        stay()
    } else if (answer3 === 'spread the word') {
        leave()
    } else if(answer3 === 'go back') {
        goLeft()
    }
}

function stay(){
    window.prompt(`You live happily amongst the cats for the rest of your days.`);
    start()
}

function leave(){
    let answer4 = window.prompt(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless. Do you want to continue your story? Type yes to continue`)
    if (answer4 === 'yes') {
        onward()
    }
}
onward()

function onward(){
    let answer5 = window.prompt(`You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take? Type ladder or staircase`)
    if (answer5 === 'ladder'){
        climb()
    } else if (answer5 === 'staircase') {
        climbStairs()
    }
}

function climb(){
    window.prompt(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home. End of jounrey click ok to restart`)
    start()
}

function climbStairs(){
    window.prompt(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever. End of journey click ok to restart`)
    start()
}

function goRight(){
    let answer6 = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Which do your take? Type treasure or path`)
    if (answer6 === 'back') {
        start()
    } else if (answer6 === 'treasure') {
        alert()
    } else if (answer6 === 'path') {
       toFlower() 
    }
}

function alert() {
    let answer7 = window.prompt(`The dragon awakes and sits upright. You only have a moment to respond, to stay or to run: Type stay or run`)
    if (answer7 ==='stay') {
        conversation()
    } else if (answer7 === 'run') {
        ranHome()
    }
}

function conversation(){
    window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
    start()
}

function ranHome() {
    window.prompt (`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
    start()
}

function toFlower() {
    let answer8 = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw a picture of it or pick it. Which do you do? Type draw it or pick it`)
    if (answer8 === 'draw it') {
        draw()
    } else if (answer8 === 'pick it') {
        pick()
    }
}

function draw() {
    window.prompt (`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.`)
    start()
}

function pick() {
    window.prompt (`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
    start()
}

/* 
let firstAnswer = window.prompt("Do you head left, or right?");
    if(firstAnswer === 'left'){
        let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?`)
    } else if (firstAnswer === 'right') {
        let secondAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Antoher path would lead you away from the dragon all together. Which do your take?`);  
    }

function start() {
    let firstAnswer = window.prompt(`Do you head left, or right?`)
    if(firstAnswer === 'left') {
        goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    }
}

function goLeft() {
    let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?`)
    if (secondAnswer === 'back') {
        start()
    } else if (secondAnswer === 'follow it')
        followIt()
}
followIt()

function followIt() {
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you stay, spread the word, or go back?`)
    if (thirdAnswer === 'stay') {
        stay()
    } else if (thirdAnswer === 'spread the word') {
        leave()
    } else if(thirdAnswer === 'go back') {
        goLeft()
    }
}

function stay(){
    window.prompt(`You live happily amongst the cats for the rest of your days.`);
}

function leave(){
    let fourthAnswer = window.prompt(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless. Do you want to continue your story?`)
    if (fourthAnswer === 'yes') {
        onward()
    }
}

function onward(){
    let fifthAnswer = window.prompt(`You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?`)
    if (fifthAnswer === 'ladder'){
        climb()
    } else if (fifthAnswer === 'staircase') {
        climbStairs()
    }
}

function climb(){
    window.prompt(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home. End of jounrey click ok to restart`)
}

function climbStairs(){
    window.prompt(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever. End of journey click ok to restart`)
}

function goRight(){
    let seventhAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Antoher path would lead you away from the dragon all together. Which do your take?`)
    if (seventhAnswer === 'back') {
        start()
    } else if (seventhAnswer === 'treasure') {
        alert()
    } else if (seventhAnswer === 'path') {
        
    }
}

function alert() {
    let sixthAnswer = window.prompt(`The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:`)
    if (sixthAnswer ==='stay') {
        conversation()
    } else if (sixthAnswer === 'run') {
        ranHome()
    }
}

function conversation(){
    window.prompt(`You and the dragon have an uplifting conversation about local politics and become lifelong friends. Click ok to restart your journey`)
}

function ranHome() {
    window.prompt (`Quickly, you run back to the cave's entrance. Sheepish, you return home. Click ok to restart your journey.`)
}

*/