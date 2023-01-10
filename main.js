const form = document.getElementById("message-type")
const addForm = document.getElementById("add-form")

const displayWindow = document.querySelector(".display-window")

const resetButton = document.querySelector(".reset")
const addMessageButton = document.querySelector(".add-message")

const addMessageDiv = document.querySelector(".add-message-popup")

const affirmations = ["When faced with a problem, just say hisashiburi dana",
    "if the div won't center, just close the computer",
    "On passe notre vie à tout prendre, au final on va tout rendre",
    "A life without pain, Is a life without growth",
    "La nuit porte conseil que quand tu dors",
    "stand tall then i can't fall"]
const mantras = ["just act like you know",
                "take a step forward",
                "pourquoi t'as commencé",
                "j'me lève et j'me bats",
                "Le monde tourne"]


const randomElement = array => {
    return array[Math.floor(Math.random() * array.length)]
}
function sleep(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
}

resetButton.addEventListener("click", () => {
    const content = document.querySelector(".display-window :first-child")
    content.classList.add("fade-out")
    sleep(1000).then(() => {
        content.remove()
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
    e.preventDefault(); // before the code prevent reload on submit

    const radioMantra = document.getElementById("mantra")
    const radioAffirmation = document.getElementById("affirmation")

    const addMessageFromArray = arr => {
        let tag = document.createElement("p")
        let node = document.createTextNode(`"${randomElement(arr)}"`)
        tag.appendChild(node)
        displayWindow.appendChild(tag)
    }

    if (radioMantra.checked || radioAffirmation.checked) {
        const content = document.querySelector(".display-window :first-child")
        content.classList.add("fade-out")

        sleep(1000).then(() => {
            content.remove()
            return radioMantra.checked ? addMessageFromArray(mantras): addMessageFromArray(affirmations)
        })
    } else {
        throw new Error(alert("choose a message type to get some self care"))
    }
})

addForm.addEventListener("submit", e => {
        e.preventDefault();

        const radioMantra = document.getElementById("add-mantra")
        const radioAffirmation = document.getElementById("add-affirmation")
        const inputMessage = document.getElementById("message")

        const addMessageFromInput = arr => {
            arr.push(inputMessage.value)
            let tag = document.createElement("p")
            let node = document.createTextNode(`"${inputMessage.value}"`)
            tag.appendChild(node)
            displayWindow.appendChild(tag)
        }

        if (inputMessage.value !== "") {
            if (radioMantra.checked || radioAffirmation.checked) {

                const content = document.querySelector(".display-window :first-child")
                content.classList.add("fade-out")

                sleep(1000).then(() => {
                    content.remove()
                    return radioMantra.checked ? addMessageFromInput(mantras): addMessageFromInput(affirmations)
                })
            } else {
                throw new Error(alert("What is the type of the message to add"))
            }
        } else {
            throw new Error(alert("what message"))
        }
        addMessageDiv.classList.toggle("none")
    }
)
;