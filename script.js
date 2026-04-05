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
    displayMsg();
    selectOutputWord();
    console.log(outputWord);
    console.log(attempt);
}

function restartPlaying(){
    outputWord = "";
    attempt = -1;
    clearWordle();
    startPlaying();
}

function clearWordle(){
    for(let j=0; j<5; j++){
        for(let i=0; i<5; i++){
            var a = document.getElementById(`w${j}l${i}`);
            a.innerHTML = '';
            a.style.backgroundColor = "#457b9d"
        }
    }
}

function addInWordle(){
    const inputWord = document.getElementById('word').value.toUpperCase();

    if(!isValid(inputWord))
        return alert("You entered an invalid input");

    attempt++;
    displayMsg();

    for(let i=0; i<5; i++){
        if(attempt>=5){
            displayMsg("Game Over!!! You Lost :(");
            return;
        }

        var a = document.getElementById(`w${attempt}l${i}`);
        a.innerHTML = inputWord[i];
        if(outputWord[i] == inputWord[i])
            a.style.backgroundColor = "#81b29a"
        else if(outputWord.indexOf(inputWord[i]) != -1)
            a.style.backgroundColor = "#f2cc8f"
        else
            continue;
    }

    if(outputWord==inputWord){
        attempt = 5;
        displayMsg("You Won :)");
        return;
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


function displayMsg(customMsg){
    const disMsg = document.getElementById('msg');
    if(customMsg){
        disMsg.innerHTML = customMsg;
    }
    else{
        const left = 5 - (attempt+1);
        disMsg.innerHTML = `Attempt Left: ${left}`;
    }
}