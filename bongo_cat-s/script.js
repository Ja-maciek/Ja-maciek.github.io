pawNames = ["left", "right", "mouth"];

nameLib = {
    "a": {"instrument": "bongo", "nr": 0, "paw": 1, "side": false, sound: "A1"},
    "d": {"instrument": "bongo", "nr": 1, "paw": 0, "side": false, sound: "A2"},
    "g": {"instrument": "saxophone", "nr": 0, "paw": 1, "side": true, sound: "A3"},
    "h": {"instrument": "saxophone", "nr": 1, "paw": 1, "side": true, sound: "A4"},
    "j": {"instrument": "saxophone", "nr": 2, "paw": 1, "side": true, sound: "A5"},
    "k": {"instrument": "saxophone", "nr": 3, "paw": 0, "side": true, sound: "A6"},
    "l": {"instrument": "saxophone", "nr": 4, "paw": 0, "side": true, sound: "A7"},
    "c": {"instrument": "cymbal", "nr": 0, "paw": 0, "side": false, sound: "A8"},
    "f": {"instrument": "cowbell", "nr": 0, "paw": 0, "side": false, sound: "B1"},
    "b": {"instrument": "tambourine", "nr": 0, "paw": 0, "side": false, sound: "B2"},
    " ": {"instrument": "meow", "nr": 0, "paw": 2, "side": false, sound: "B3"},
    "1": {"instrument": "keyboard", "nr": 0, "paw": 0, "side": false, sound: "B4"},
    "2": {"instrument": "keyboard", "nr": 1, "paw": 0, "side": false, sound: "B5"},
    "3": {"instrument": "keyboard", "nr": 2, "paw": 0, "side": false, sound: "B6"},
    "4": {"instrument": "keyboard", "nr": 3, "paw": 0, "side": false, sound: "B7"},
    "5": {"instrument": "keyboard", "nr": 4, "paw": 0, "side": false, sound: "B8"},
    "6": {"instrument": "keyboard", "nr": 5, "paw": 1, "side": false, sound: "C1"},
    "7": {"instrument": "keyboard", "nr": 6, "paw": 1, "side": false, sound: "C2"},
    "8": {"instrument": "keyboard", "nr": 7, "paw": 1, "side": false, sound: "C3"},
    "9": {"instrument": "keyboard", "nr": 8, "paw": 1, "side": false, sound: "C4"},
    "0": {"instrument": "keyboard", "nr": 9, "paw": 1, "side": false, sound: "C5"},
    "q": {"instrument": "marimba", "nr": 0, "paw": 0, "side": false, sound: "C6"},
    "w": {"instrument": "marimba", "nr": 1, "paw": 0, "side": false, sound: "C7"},
    "e": {"instrument": "marimba", "nr": 2, "paw": 0, "side": false, sound: "C8"},
    "r": {"instrument": "marimba", "nr": 3, "paw": 0, "side": false, sound: "D1"},
    "t": {"instrument": "marimba", "nr": 4, "paw": 0, "side": false, sound: "D2"},
    "y": {"instrument": "marimba", "nr": 5, "paw": 1, "side": false, sound: "D3"},
    "u": {"instrument": "marimba", "nr": 6, "paw": 1, "side": false, sound: "D4"},
    "i": {"instrument": "marimba", "nr": 7, "paw": 1, "side": false, sound: "D5"},
    "o": {"instrument": "marimba", "nr": 8, "paw": 1, "side": false, sound: "D6"},
    "p": {"instrument": "marimba", "nr": 9, "paw": 1, "side": false, sound: "D7"}
};

catBodyPratsSrc = "https://ja-maciek.github.io/bongo_cat-s/images/cat/B/B";
soundSrc = "https://ja-maciek.github.io/bongo_cat-s/sounds/";

fPressed = false;

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
            "A1": "bongo0.mp3",
            "A2": "bongo1.mp3",
            "A3": "saxophone0.mp3",
            "A4": "saxophone1.mp3",
            "A5": "saxophone2.mp3",
            "A6": "saxophone3.mp3",
            "A7": "saxophone4.mp3",
            "A8": "cymbal0.mp3",
            "B1": "cowbell0.mp3",
            "B2": "tambourine0.mp3",
            "B3": "meow0.mp3",
            "B4": "keyboard0.mp3",
            "B5": "keyboard1.mp3",
            "B6": "keyboard2.mp3",
            "B7": "keyboard3.mp3",
            "B8": "keyboard4.mp3",
            "C1": "keyboard5.mp3",
            "C2": "keyboard6.mp3",
            "C3": "keyboard7.mp3",
            "C4": "keyboard8.mp3",
            "C5": "keyboard9.mp3",
            "C6": "marimba0.mp3",
            "C7": "marimba1.mp3",
            "C8": "marimba2.mp3",
            "D1": "marimba3.mp3",
            "D2": "marimba4.mp3",
            "D3": "marimba5.mp3",
            "D4": "marimba6.mp3",
            "D5": "marimba7.mp3",
            "D6": "marimba8.mp3",
            "D7": "marimba9.mp3"
        },
        release: 1,
        baseUrl: soundSrc,
    }).toDestination();
    
    Tone.loaded().then(() => {
        setInstrumentTo("bongo");

        document.addEventListener("keydown", (event) => {
            if(!fPressed){
                fPressed = true;
                const letter = event.key.toLowerCase();
                instrument = nameLib[letter]["instrument"];

                setInstrumentTo(instrument);
                if(pawNames[nameLib[letter]["paw"]]!="mouth"){
                    setPawsTo(pawNames[nameLib[letter]["paw"]], "down", ifSidePaws=nameLib[letter]["side"]);
                }
                sampler.triggerAttackRelease(nameLib[letter]["sound"]);
            }
        });

        document.addEventListener("keyup", (event) => {
            if(fPressed){
                const letter = event.key.toLowerCase();

                if(pawNames[nameLib[letter]["paw"]]!="mouth"){
                    setPawsTo(pawNames[nameLib[letter]["paw"]], "up");
                }else{
                    document.getElementById("mouth").children[0].src = `${catBodyPratsSrc}m-mouth.png`;
                    console.log(catBodyPratsSrc+"m-mouth.png");
                }

                fPressed = false;
            }
        });
    });
}