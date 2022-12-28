const form = document.getElementById("message-type")
const mantra = document.getElementById("mantra")
const affirmation = document.getElementById("affirmation")
const displayWindow = document.querySelector(".display-window")
const resetButton = document.querySelector(".reset")

const affirmations = ["When faced with a problem, just say hisashiburi dana", "if the div won't center, just close the computer", "On passe notre vie à tout prendre, au final on va tout rendre"]
const mantras = ["just act like you know", "🧎"]
const randomIndex = array => {
    return array[Math.floor(Math.random()*array.length)]
}

function sleep(ms){
    return new Promise( resolver => setTimeout(resolver, ms));
}

window.addEventListener("DOMContentLoaded", () => {

    resetButton.addEventListener("click", () => {
        const content = document.querySelector(".display-window :first-child")
        content.classList.add("fade-out")
        sleep(1000).then(() => {
            content.parentNode.removeChild(content)
            let meditateImage = document.createElement("img");
            meditateImage.src = "assets/meditate.svg";
            meditateImage.alt = "i am zen"
            displayWindow.appendChild(meditateImage)
        })
    })

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        // Should be triggered on form submit
        if (mantra.checked || affirmation.checked) {
            const content = document.querySelector(".display-window :first-child")
            content.classList.add("fade-out")
            sleep(1000).then(() => {
                content.parentNode.removeChild(content)
                if (mantra.checked) {
                    let tag = document.createElement("p")
                    let node = document.createTextNode(`"${randomIndex(mantras)}"`)
                    tag.appendChild(node)
                    displayWindow.appendChild(tag)
                }
                if (affirmation.checked) {
                    let tag = document.createElement("p")
                    let node = document.createTextNode(`"${randomIndex(affirmations)}"`)
                    tag.appendChild(node)
                    displayWindow.appendChild(tag)
                }
            })
        }
    })
});