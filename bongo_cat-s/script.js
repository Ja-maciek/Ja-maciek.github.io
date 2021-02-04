import Tone from "./lib/Tone.js";

pawNames = ["left", "right", "mouth"];

nameLib = {
    "a": {"instrument": "bongo", "nr": 0, "paw": 1, "side": false},
    "d": {"instrument": "bongo", "nr": 1, "paw": 0, "side": false},
    "g": {"instrument": "saxophone", "nr": 0, "paw": 1, "side": true},
    "h": {"instrument": "saxophone", "nr": 1, "paw": 1, "side": true},
    "j": {"instrument": "saxophone", "nr": 2, "paw": 1, "side": true},
    "k": {"instrument": "saxophone", "nr": 3, "paw": 0, "side": true},
    "l": {"instrument": "saxophone", "nr": 4, "paw": 0, "side": true},
    "c": {"instrument": "cymbal", "nr": 0, "paw": 0, "side": false},
    "f": {"instrument": "cowbell", "nr": 0, "paw": 0, "side": false},
    "b": {"instrument": "tambourine", "nr": 0, "paw": 0, "side": false},
    " ": {"instrument": "meow", "nr": 0, "paw": 2, "side": false},
    "1": {"instrument": "keyboard", "nr": 0, "paw": 0, "side": false},
    "2": {"instrument": "keyboard", "nr": 1, "paw": 0, "side": false},
    "3": {"instrument": "keyboard", "nr": 2, "paw": 0, "side": false},
    "4": {"instrument": "keyboard", "nr": 3, "paw": 0, "side": false},
    "5": {"instrument": "keyboard", "nr": 4, "paw": 0, "side": false},
    "6": {"instrument": "keyboard", "nr": 5, "paw": 1, "side": false},
    "7": {"instrument": "keyboard", "nr": 6, "paw": 1, "side": false},
    "8": {"instrument": "keyboard", "nr": 7, "paw": 1, "side": false},
    "9": {"instrument": "keyboard", "nr": 8, "paw": 1, "side": false},
    "0": {"instrument": "keyboard", "nr": 9, "paw": 1, "side": false},
    "q": {"instrument": "marimba", "nr": 0, "paw": 0, "side": false},
    "w": {"instrument": "marimba", "nr": 1, "paw": 0, "side": false},
    "e": {"instrument": "marimba", "nr": 2, "paw": 0, "side": false},
    "r": {"instrument": "marimba", "nr": 3, "paw": 0, "side": false},
    "t": {"instrument": "marimba", "nr": 4, "paw": 0, "side": false},
    "y": {"instrument": "marimba", "nr": 5, "paw": 1, "side": false},
    "u": {"instrument": "marimba", "nr": 6, "paw": 1, "side": false},
    "i": {"instrument": "marimba", "nr": 7, "paw": 1, "side": false},
    "o": {"instrument": "marimba", "nr": 8, "paw": 1, "side": false},
    "p": {"instrument": "marimba", "nr": 9, "paw": 1, "side": false}
};

catBodyPratsSrc = "https://ja-maciek.github.io/bongo_cat-s/images/cat/B/B";
soundSrc = "https://ja-maciek.github.io/bongo_cat-s/sounds/";

function setInstrumentTo(instrumentName){
    instrumentElements = document.getElementsByClassName("instruments")[0].children;
    console.log(instrumentName);
    if(instrumentName=="meow"){
        document.getElementById("mouth").children[0].src = `${catBodyPratsSrc}o-mouth.png`;
        console.log("a");
    }else{
        for(i=0;i<instrumentElements.length;i++){
            instrumentElements[i].style.display = instrumentElements[i].id==instrumentName ? null : "none";
        }
    }
}

function setPawsTo(pawsType, pawsState, ifSidePaws=false){// left/right up/down
    //Elements = document.getElementById("")[0].children;

    paw_leftElement = document.getElementById("paw-left");
    paw_rightElement = document.getElementById("paw-right");
    console.log(`${catBodyPratsSrc}${pawsState=="up"?"up": (ifSidePaws?"side":"down")}-paw-${pawsType}.png`);
    eval(`paw_${pawsType}Element`).children[0].src = `${catBodyPratsSrc}${pawsState=="up"?"up": (ifSidePaws?"side":"down")}-paw-${pawsType}.png`;
}

window.onload = () => {
    const sampler = new Tone.Sampler({
        urls: {
            "C4": "saxophone0.mp3",
            "D#4": "saxophone1.mp3",
            "F#4": "saxophone2.mp3",
            "A4": "saxophone3.mp3",
        },
        release: 1,
        baseUrl: soundSrc,
    }).toDestination();
    
    Tone.loaded().then(() => {
        setInstrumentTo("bongo");

        document.addEventListener("keydown", (event) => {
            const letter = event.key.toLowerCase();
            instrument = nameLib[letter]["instrument"];

            setInstrumentTo(instrument);
            sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);

            if(pawNames[nameLib[letter]["paw"]]!="mouth"){
                setPawsTo(pawNames[nameLib[letter]["paw"]], "down", ifSidePaws=nameLib[letter]["side"]);
            }
        });

        document.addEventListener("keyup", (event) => {
            const letter = event.key.toLowerCase();

            if(pawNames[nameLib[letter]["paw"]]!="mouth"){
                setPawsTo(pawNames[nameLib[letter]["paw"]], "up");
            }else{
                document.getElementById("mouth").children[0].src = `${catBodyPratsSrc}m-mouth.png`;
                console.log(catBodyPratsSrc+"m-mouth.png");
            }
        });
    });
}