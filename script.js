
// TODO: Create a key listener
// TODO: Connect key press to play a beat
// TODO: Create a database of beats
// TODO: Set the colors programatically

window.onload = ()=>{
    setButtons();
}

let beats = {
    "a":{
        beat:"./asset/beat1.wav",
        color:" #DB3EB1"
    },
    "s":{
        beat:"./asset/beat2.wav",
        color:" #DB3EB1"
    },
    "d":{
        beat:"./asset/beat3.wav",
        color:" #DB3EB1"
    },
    "f":{
        beat:"./asset/beat4.wav",
        color:"#4D4DFF"
    },
    "g":{
        beat:"./asset/beat5.wav",
        color:"#4D4DFF"
    },
    "h":{
        beat:"./asset/beat6.mp3",
        color:"#4D4DFF"
    },
    "j":{
        beat:"./asset/beat7.wav",
        color:"#4D4DFF"
    },
    "k":{
        beat:"./asset/beat8.mp3",
        color:"#FFAD00 "
    },
    "l":{
        beat:"./asset/beat9.mp3",
        color:"#FFAD00"
    }

}

const setButtons = () =>{
    for(let beatKey in beats){
        let beat = beats[beatKey];
        let element = document.getElementById(beatKey);
        element.style.borderColor = beat.color;
        element.addEventListener("transitionend", ()=>{
            element.style.backgroundColor = "transparent";
            element.style.boxShadow="none";
            console.log("done");
        });
    }

}

const onButtonPress = (buttonKey)=>{
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    element.style.borderColor = beats[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px ${beats[buttonKey].color} `
}

const playBeat = (buttonKey)=>{
    let audioScr = beats[buttonKey].beat;
        let audio = new Audio(audioScr);
        audio.currentTime = 0;
        audio.play();


}

document.addEventListener('keydown', (event)=>{
    playBeat(event.key);
    onButtonPress(event.key);
})