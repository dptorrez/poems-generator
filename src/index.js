function generatePoem(event) {
    event.preventDefault()
    

    new Typewriter('#poem', {
        strings: "Love is like a river, <br/> A never ending stream. ",
        autoStart: true,
        delay: 10,
      });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);