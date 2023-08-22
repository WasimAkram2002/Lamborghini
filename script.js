const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    let audio = document.createElement('audio')
    audio.setAttribute('src', 'sound.mp3')
    audio.loop = true
    audio.play()   
})