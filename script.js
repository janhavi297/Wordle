var outputWord = "";
var attempt = -1;

function selectOutputWord(){
    const outputList = [
        "HELLO", "APPLE", "MANGO", "SOLAR", "POWER", "WORLD", "INDIA", "MOUSE", "CAMEL", "BOOKS", "NOTES", "CHALK", "WRITE", "MATHS", "CREAM", "CABLE"
    ]

    const n = outputList.length;

    const j = Math.floor(Math.random() * n);
    outputWord = outputList[j]
}

function startPlaying(){
    selectOutputWord();
    console.log(outputWord);
    console.log(attempt);
}

function addInWordle(){
    const inputWord = document.getElementById('word').value;

    if(!isValid(inputWord))
        return alert("You entered an invalid input");

    attempt++;

    for(let i=0; i<5; i++){
        if(attempt>=5) 
            return alert("Game Over!!!")

        var a = document.getElementById(`w${attempt}l${i}`);
        a.innerHTML = inputWord[i];
        if(outputWord[i] == inputWord[i])
            a.style.backgroundColor = "#5cd65c"
        else if(outputWord.indexOf(inputWord[i]) != -1)
            a.style.backgroundColor = "#ffff4d"
        else
            continue;

        if(outputWord==inputWord){
            attempt = 5;
            return alert("You Won!!!");
        }
    }
}

function isValid(word){
    if(word.length!=5)
        return false;
    for(let i=0; i<5; i++){
        const j = word.charCodeAt(i);
        if(j>= 65 && j<= 90)
            continue;
        else
            return false;
    }

    return true;
}