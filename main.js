const form = document.getElementById("message-type")
const addForm = document.getElementById("add-form")
const displayWindow = document.querySelector(".display-window")
const resetButton = document.querySelector(".reset")
const addMessageDiv = document.querySelector(".add-message-popup")
const addMessageButton = document.querySelector(".add-message")

const affirmations = ["When faced with a problem, just say hisashiburi dana", "if the div won't center, just close the computer", "On passe notre vie à tout prendre, au final on va tout rendre"]
const mantras = ["just act like you know", "🧎"]
const randomIndex = array => {
    return array[Math.floor(Math.random() * array.length)]
}

function sleep(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
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

    addMessageButton.addEventListener("click", () => {
        addMessageDiv.classList.toggle("none")
    })

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // before the code
        /* do what you want with the form */
        // Should be triggered on form submit
        const mantra = document.getElementById("mantra")
        const affirmation = document.getElementById("affirmation")
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
        } else {
            alert("choose a message type to get some self care")
        }
    })

    addForm.addEventListener("submit", e => {
        e.preventDefault();

        const addMantra = document.getElementById("add-mantra")
        const addAffirmation = document.getElementById("add-affirmation")
        const inputMessage = document.getElementById("message")


        if (addMantra.checked || addAffirmation.checked) {
            if (inputMessage.value !== "") {
                const content = document.querySelector(".display-window :first-child")
                content.classList.add("fade-out")
                console.log(inputMessage.value)
                sleep(1000).then(() => {
                    content.parentNode.removeChild(content)
                    if (addMantra.checked) {
                        mantras.push(inputMessage.value)
                        let tag = document.createElement("p")
                        let node = document.createTextNode(`"${inputMessage.value}"`)
                        tag.appendChild(node)
                        displayWindow.appendChild(tag)
                    }
                    if (addAffirmation.checked) {
                        affirmations.push(inputMessage.value)
                        let tag = document.createElement("p")
                        let node = document.createTextNode(`"${inputMessage.value}"`)
                        tag.appendChild(node)
                        displayWindow.appendChild(tag)
                    }
                })
            } else {
                alert("what message")
            }
        } else {
            alert("what is the type of your message")
        }
    })
});