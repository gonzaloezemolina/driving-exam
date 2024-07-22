const getContainer = document.getElementById("main_container");

getContainer.innerHTML = `<h1 class="text-center text-xl text-black py-10 flex justify-center items-center flex-col" id="title">Simulador de examén teorico para la obtención de licencia de conducir.</h1>
            <button class="bg-yellow-400 text-black rounded-lg w-40 h-10 hover:bg-blue-400 hover:text-white transition duration-500" id="btn_start">Comenzar</button>`;

const getBtn = document.getElementById("btn_start");

const idAuto = "b2";
const idMoto = "a1";

const simulator = () => {
  getBtn.addEventListener("click", function () {
    getContainer.innerHTML = `<h1 class="text-xl">Reglas del examén</h1>
                            <p>El tiempo del examén es un total de 15 minutos y se deberan contestar un total de 20 preguntas que cambiaran según la categoria elegida. Para aprobar deberás contestar correctamente 16 preguntas. El formato varia dependiendo de la pregunta y al final del examén veras tu resultado. El mismo esta basado en las leyes de Argentina. En caso de existir alguna discordancia se recomienda discreción. </p>
                            
                            <h2><strong>Seleccione una categoría</strong></h2>

                            <div class="py-10 flex justify-center items-center w-full gap-20">

                            <button id=${idAuto} class= "w-25 flex justify-center items-center border-solid border-2 border-yellow-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-yellow-400 transition duration 500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16" class="border-blue-400 rounded-lg">
  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
</svg>
                            </button>

                            <button id=${idMoto} class= "w-25 flex justify-center items-center border-solid border-2 border-yellow-400 rounded-lg px-4 py-4 cursor-pointer hover:bg-yellow-400 transition duration 500">
                            <i class="fa-solid fa-motorcycle"></i>
                            </button>
            <div>
    `;
    selectCategory();
  });
};

simulator();

const selectCategory = () => {
  getContainer.addEventListener("click", function (event) {
    const click = event.target.id;
    console.log(click);
    switch (click) {
      case "a1":
        initializer(a1Manager);
        break;

      case "b2":
        initializer(b2Manager);
        break;
      default:
        break;
    }
  });
};

const initializer = (test) => {
  let counter = 5;
  const interval = setInterval(() => {
    getContainer.innerHTML = `<h1 class="text-xl">${counter}</h1>`;
    counter = counter - 1;

    if (counter < 0) {
      clearInterval(interval);
      test();
    }
  }, 1000);
};

function b2Manager(params) {
  getContainer.innerHTML = `<nav class="w-full flex justify-end items-end bg-yellow-400 gap-4">
  <div>
    <h1 id="counter" class="text-black"></h1>
  </div>
  <div>
    <h1 id="counterOfQuestions"></h1>
  </div>
  </nav>
  
  <div id="pregunta"></div>
  <div id="imagen"></div>
  <section id="options"></section>
  <div id="DidntSelect"><h2></h2></div>
  <button id="next">Siguiente</button>
  `;

  counter(); //Function counter from counters.js

  let selectedQuestions = [];

  //Array from carQuestions.js
  if (carQuestions.length === 29) {
    while (selectedQuestions.length !== 20) {
      const random =
        carQuestions[Math.floor(Math.random() * carQuestions.length)];
      if (selectedQuestions.find((question) => question.id === random.id)) {
        console.log("El ID se repite");
      } else {
        selectedQuestions.push(random);
        console.log(selectedQuestions.length);
      }
    }
  }

  const gettingValues = selectedQuestions.values();
  for (const iterator of gettingValues) {
    console.log(iterator.id);
  }

  let num = 0;
  let saveQuestions = [];
  let userAnswers = [];

  const selectFirst = selectedQuestions.find(
    (nextQuestion) => nextQuestion === selectedQuestions[num]
  );
  saveQuestions.push(selectFirst);
  console.log(saveQuestions);
  const values = saveQuestions.values();
  for (const iterator of values) {
    const QuestionsCounter = document.getElementById("counterOfQuestions");
    QuestionsCounter.innerHTML = `${saveQuestions.length}/20`;
    const getQuestionID = document.getElementById("pregunta");
    getQuestionID.innerHTML = `<h1>${iterator.question}</h1>`;
    iterator.answers.forEach((option) => {
      const response = document.createElement("div");
      response.innerHTML = `<h2>${option}</h2>`;
      const section = document.getElementById("options");
      section.appendChild(response);
    });
  }

  const getNext = document.getElementById("next");
  getNext.addEventListener("click", loadQuestions);

  function loadQuestions(getResponses) {
    if (saveQuestions.length === 19) {
      //Manejar para cuando se completen todas las preguntas
      getNext.innerText = `Finalizar`;
      getNext.addEventListener("click", function () {
        getContainer.innerHTML = `<h1>Este es tu resultado</h1>`;
      });
    }
    num++;
    if (num < 20) {
      const selectFirst = selectedQuestions.find(
        (nextQuestion) => nextQuestion === selectedQuestions[num]
      );
      if (
        saveQuestions.find((sameQuestion) => sameQuestion === selectFirst.id)
      ) {
        console.log("ID repeated");
      } else {
        saveQuestions.push(selectFirst);
        console.log(num);
        console.log(saveQuestions);
        const values = saveQuestions.values();
        for (const iterator of values) {
          const QuestionsCounter =
          document.getElementById("counterOfQuestions");
          QuestionsCounter.innerHTML = `${saveQuestions.length}/20`;
          const getQuestionID = document.getElementById("pregunta");
          getQuestionID.innerHTML = `<h1>${iterator.question}</h1>`;
          if (iterator.img) {
            const getDivOfImage = document.getElementById("imagen");
            getDivOfImage.innerHTML = `<img src=${iterator.img}></img>` 
          } else{
            console.log("No contiene imagen");
            const getDivOfImage = document.getElementById("imagen");
            getDivOfImage.innerHTML = ``
          }
          if (iterator.type === "multiple-choice") {
            const section = document.getElementById("options");
            section.innerHTML = ``;
            section.addEventListener("click", function(){}) //Podriamos agregar una funcion aca, para no alargar la función. El problema es si accede a los iteradores.
            iterator.answers.forEach((option,index) => {
              const response = document.createElement("div");
              response.id = `${index}`;
              response.className = "cursor-pointer"
              response.innerHTML = `<h2>${option}</h2>`;
              section.appendChild(response);
            });
          } else if (iterator.type === "input") {
            const section = document.getElementById("options");
            section.innerHTML = ``;
            const input = document.createElement("input");
            input.className = "border-2 border-solid border-blue-400 rounded-lg px-4 py-2"
            section.appendChild(input);
          }
        }
      }
    }
  }

  //Si el indice, length de la opcion del array de answers es igual a correctAnswer. Debemos hacer que ese elemento/opcion se empuje a un array de  

              //Lo ideal seria que esta funcion este dentro de loadQuestions. 
              //Tengo que poder seleccionar una opcion. Para posteriormente, dependiendo que ID
              //haya sido seleccionado, subir esa opcion al array de userAnswers. Una idea es agregar un parametro 
              //En loadquestion, y hacer un callback con esta funcion. El problema es como acceder a las opciones, probablemente de undefined.
              //Esta funcion, mas bien que acompañar/integrarse al button next, debe ser la funcion para seleccionar respuesta.
}





function a1Manager(params) {
  getContainer.innerHTML = `Esta categoria se encuentra en proceso`;
}

userAnswers = [];
questionsGiven = [];
