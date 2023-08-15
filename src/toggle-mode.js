import { buttonPressAudio } from "./FocusTimer/sounds.js";

let darkMode = true

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    buttonPressAudio.play()

    document.documentElement.classList.toggle('light')


    const mode = darkMode ? 'Light' : 'Dark '

    event.currentTarget.querySelector('span')
    .textContent = `${mode} mode ativado`

    darkMode = !darkMode
});