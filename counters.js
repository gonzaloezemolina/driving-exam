
let time = (20*60) + 0;

const counter = () => {

    const interval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('counter').innerText = `${minutes}:${seconds}`;

        time--

        
    if (time < 0 ) {
        clearInterval(interval);
        getContainer.innerHTML = `El tiempo de examén ha finalizado
                                <button>Reiniciar</button>
        `
    }
    },1000);
}