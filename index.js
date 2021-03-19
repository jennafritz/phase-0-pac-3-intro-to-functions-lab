function shout(string) {
 return string.toUpperCase();   
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());   
   }
   
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    let greeting;
    if (string === string.toLowerCase()) {
        greeting = "I can't hear you!"
    } else if (string===string.toUpperCase()) {
        greeting = "YES INDEED!"
    }else if (string==="I love you, Grandma.") {
        greeting = "I love you, too."
    }
    return greeting;
}