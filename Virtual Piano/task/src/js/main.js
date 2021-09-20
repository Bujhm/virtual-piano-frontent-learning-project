document.addEventListener("keydown", (event) => {
    {
        let allowedLetters = ['A','S','D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
        let input = event.key.toUpperCase();
        if ( allowedLetters.includes(input)){
            let audio = new Audio('audio/' + input + '.mp3');
            audio.play();
        } else {
            console.log('Warning')
        }
    }
});