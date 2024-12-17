function generatePoem(event) {
    event.preventDefault()

    let poemInstructions = document.querySelector("#poem-instructions");
    let apiKey = "bd9741tbdfabbd3bc4c44f3o556466c0";
    let prompt = `Users instructions: Generate a romance poem about ${poemInstructions.value}`;
    let context = "You are a love poem expert who is passionate about writing short poems. Your task is to generate a short 4 line poem and separate each line with a <br />. Make sure to stay on topic and follow the users instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(revealPoem);

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="blink"> Generating a love poem about ${poemInstructions.value}...</div>`;

}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);



function revealPoem(response) {

    new Typewriter('#poem', {
        strings: response.data.answer ,
        autoStart: true,
        delay: 10,
      });
}
            