const getContainer = document.getElementById("main_container");

getContainer.innerHTML = `<h1 class="text-center text-xl text-black py-10" id="title">Simulador de examén teorico para la obtención de licencia de conducir.</h1>
            <button class="bg-yellow-400 text-black rounded-lg w-40 h-10 hover:bg-blue-400 hover:text-white transition duration-500" id="btn_start">Comenzar</button>`;

const getBtn = document.getElementById("btn_start");

const idAuto = "idAuto";
const idMoto = "idMoto";

getBtn.addEventListener("click", async function () {
  getContainer.innerHTML = `<h1 class="text-xl">Reglas del examén</h1>
                            <p>El tiempo del examén es un total de 15 minutos y se deberan contestar un total de 20 preguntas que cambiaran según la categoria elegida. Para aprobar deberás contestar correctamente 16 preguntas. El formato varia dependiendo de la pregunta y al final del examén veras tu resultado. El mismo esta basado en las leyes de Argentina. En caso de existir alguna discordancia se recomienda discreción. </p>
                            
                            <h2><strong>Seleccione una categoría</strong></h2>

                            <div class="py-10 flex justify-center items-center w-full gap-20">

                            <button class= "w-25 flex justify-center items-center border-solid border-2 border-yellow-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-yellow-400 transition duration 500" id=${idAuto}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16" class="border-blue-400 rounded-lg">
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg>
                            </button>

                            <button id=${idMoto} class= "w-25 flex justify-center items-center border-solid border-2 border-yellow-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-yellow-400 transition duration 500">
                            <i class="fa-solid fa-motorcycle"></i>
                            </button>

            <div>
    `;

  //   Si escoge autos
  const getBtnAuto = document.getElementById("idAuto");

  const carChosen = getBtnAuto.addEventListener("click", function () {
    let counter = 5;
    function contador() {
      getContainer.innerHTML = `<h1 class="border-solid border-2 border-black rounded-full w-20 h-20 text-xl text-center flex items-center justify-center">${counter}</h1>`;
      counter--;

      if (counter < 0) {
        clearInterval(actualizar);
        getContainer.innerHTML = ``;
        // carQuestions.forEach(question => {
        //   const answers = question.answers.forEach(options => {
        //     const div = document.createElement("div");
        //     div.innerHTML = `<h2>${options}</h2>`
        //   });
        
        //   const format = document.createElement("div");
        //   const updateFormat = format.innerHTML = `<h1>${question.question}</h1>
        //                                               <section>${question.answers.toString()}</section>
        //   `
        //   getContainer.innerHTML = `${updateFormat}`;
        // })
        // Este codigo renderizaria una pregunta despues de que el counter llegue a 0. Pero antes de renderizar
        //Deberiamos tener un lugar para depositar esas preguntas
      }
    }

    let actualizar = setInterval(contador, 1000);
    
            // const sortearPregunta = arrayDePreguntas[Math.floor(Math.random()*arrayDePreguntas.length)];
  });

  

  //   Si escoge moto
  const getBtnMoto = document.getElementById("idMoto");

  const motoChosen = getBtnMoto.addEventListener("click", function () {
    let counter = 5;
    function contador() {
      getContainer.innerHTML = `<h1 class="border-solid border-2 border-black rounded-full w-20 h-20 text-xl text-center flex items-center justify-center">${counter}</h1>`;
      counter--;
      if (counter < 0) {
        clearInterval(actualizar);
        getContainer.innerHTML = ``;
      }
    }
    let actualizar = setInterval(contador, 1000);
  });
});


