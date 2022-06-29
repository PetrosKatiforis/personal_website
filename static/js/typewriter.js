const textElement = document.getElementById("typewritter")

const phrases = [
  "Find my projects on Github",
  "Take a look around.",
  "Check out the books section!",
  "Welcome to my website!",
]

class Typewriter {
  constructor(element, phrases, speed = 50, pause = 3000) {
    // Pause between characters
    this.typeSpeed = speed

    // Pause between each word
    this.wordPause = pause

    this.element = element
    this.phrases = phrases

    // Typewritter state variables
    this.wordIndex = 0

    this.startWordDomino()
  }

  async startWordDomino() {
    const word = this.phrases[this.wordIndex]

    for (let i = 0; i <= word.length; i++) {
      this.element.innerText = word.slice(0, i)

      await this.delay(this.typeSpeed)
    }

    // Increment wordIndex and wrap if necessary
    if (++this.wordIndex == phrases.length) {
      this.wordIndex = 0
    }

    setTimeout(() => this.startWordDomino(), this.wordPause)
  }

  // Basic delay function using promises
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// Creating typewriter for central heading element
new Typewriter(textElement, phrases)


