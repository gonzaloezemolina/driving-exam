const carQuestions = [
    {
        id: "signal0",
        question: "¿Que indica la siguiente señal?",
        img: "./img/contramano.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Detención obligatoria",
            "Ceda el paso",
            "Contramano",
        ],
        correctAnswer: 2
    },
    {
        id: "signal1",
        question: "¿Que indica la siguiente señal?",
        img: "./img/noadelantar.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Prohibido circular autos",
            "Precaución via de un solo carril",
            "Prohibido adelantarse",
        ],
        correctAnswer: 2
    },
    {
        id: "signal2",
        question: "¿Que indica la siguiente señal?",
        img: "./img/ferrocarril.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Proximidad de cementerio",
            "Cruce ferroviario",
            "Cruce de caminos",
        ],
        correctAnswer: 1
    },
    {
        id: "signal3",
        question: "¿Que indica la siguiente señal?",
        img: "./img/noestacionardetenerse.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Prohibido estacionar y detenerse",
            "Prohibido estacionar",
            "Estacionamiento exclusivo",
        ],
        correctAnswer: 0
    },
    {
        id: "signal4",
        question: "¿Que indica la siguiente señal?",
        img: "./img/pare.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Prioridad de paso de la via de circulación interceptada",
            "Disminuir la velocidad",
            "Detencion obligatoria",
        ],
        correctAnswer: 2
    },
    {
        id: "signal5",
        question: "¿Que indica la siguiente señal?",
        img: "./img/bocina.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Prohibido emanar gases",
            "Prohibido tocar bocina",
            "Detenerse. Punto muerto",
        ],
        correctAnswer: 1
    },
    {
        id: "signal6",
        question: "¿Que indica la siguiente señal?",
        img: "./img/proximidadsemaforo.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Semaforo detencion obligatoria",
            "Zona controlada por semaforizacion automatica",
            "Proximidad de semaforo",
        ],
        correctAnswer: 2
    },
    {
        id: "signal7",
        question: "¿Que indica la siguiente señal?",
        img: "./img/puente.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Proximidad de puente",
            "Puente angosto",
            "Puente movil",
        ],
        correctAnswer: 1
    },
    {
        id: "multiple0",
        question: "El apoyacabezas debe regularse a la altura de:",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "El cuello",
            "Los hombros",
            "La cabeza",
        ],
        correctAnswer: 2
    },
    {
        id: "input0",
        question: "Según la Ley Nacional Nº 24.449,¿cuál es la velocidad máxima para automotores en autopistas?",
        category: "B2",
        type: "input",
        correctAnswer: "130"
    },
    {
        id: "multiple1",
        question: "¿Qué es el alcohol?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Es un estimulante, que aporta calorías al organismo",
            "Es una sustancia que deprime el sistema nervioso central.",
            "Sirve para combatir el frío y no produce efectos superando los 500 miligramos por litro de sangre.",
        ],
        correctAnswer: 1
    },
    {
        id: "input1",
        question: "¿Cuál es la velocidad máxima para un automóvil en avenidas?",
        category: "B2",
        type:"input",
        correctAnswer: "60"
    },
    {
        id: "multiple2",
        question: "En el vehículo que usted conduce va a viajar como pasajero su hijo de 2 años; está permitido que lo haga en el asiento trasero?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            " Sí, pero se debe utilizar una silla o dispositivo especial de retención infantil.",
            "No, porque por su corta edad tiene que viajar junto a sus padres, en el asiento delantero.",
            "Es indistinto, puede viajar en el asiento delantero o en el trasero.",
        ],
        correctAnswer: 0
    },
    {
        id: "multiple3",
        question: "Ante la luz intermitente de color rojo en un semáforo, ¿qué se debe hacer?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Detener hasta que cambie de color.",
            "Detener la marcha, observar y continuar.",
            "Pasar porque al estar intermitente nos habilita.",
        ],
        correctAnswer: 1
    },
    {
        id: "multiple4",
        question: "El conductor de un vehículo que se negare a someterse a las pruebas destinadas a determinar su estado de intoxicación alcohólica, de ser hallado responsable debe ser sancionado por el juez:",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Con pena de inhabilitación para conducir, en cuyo caso no se aplica multa alguna.",
            "Con pena de multa más inhabilitación para conducir.",
            "Sólo con pena de multa",
        ],
        correctAnswer: 1
    },
    {
        id: "multiple5",
        question: "El freno de mano es el dispositivo que actúa:",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Sólo en las ruedas traseras.",
            "En las ruedas delanteras únicamente.",
            "Tanto en las ruedas traseras como en las delanteras.",
        ],
        correctAnswer: 0
    },
    {
        id: "input2",
        question: "Para efectuar las maniobras de adelantamiento por el carril izquierdo en una autopista, ¿cuál es la velocidad máxima que puede alcanzar?:",
        category: "B2",
        type:"input",
        correctAnswer: "130"
    },
    {
        id: "multiple6",
        question: "¿Cuál es la forma correcta en que debe colocarse el cinturón de seguridad para que sea efectivo?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "La correa del cinturón se debe pasar entre la base del cuello y el hombro, y estar firme.",
            "Si la correa del cinturón está muy ajustada, hay que pasarla por debajo del brazo.",
            "Todas las opciones son correctas.",
        ],
        correctAnswer: 0
    },
    {
        id: "multiple7",
        question: "¿A qué se denomina vehículo estacionado?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            " Al vehículo apagado.",
            "El que permanece detenido sin su conductor.",
            "El que permanece detenido por más tiempo del necesario para el ascenso descenso de pasajeros o carga, o del impuesto por circunstancias de la circulación o cuando tenga al conductor fuera de su puesto.",
        ],
        correctAnswer: 2
    },
    {
        id: "multiple8",
        question: "¿Qué indica la luz amarilla intermitente de un semáforo?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Indica 'alto', es decir, que hay que detenerse antes de la línea de detención o la senda peatonal.",
            "Indica cruce riesgoso, por lo que se debe circular con precaución.",
            "Indica que hay que detenerse si se estima que no se alcanzará a trasponer la encrucijada.",
        ],
        correctAnswer: 1
    },
    {
        id: "input3",
        question: "¿Cuál es la velocidad máxima en ciudad para un automóvil en calles?",
        category: "B2",
        type:"input",
        correctAnswer: "40"
    },
    {
        id: "multiple9",
        question: "¿Qué elemento contra incendios es reglamentario para automóviles?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Matafuegos de cualquier tipo",
            "Matafuegos de cualquier tipo sin indicador de presión de carga",
            "Matafuegos de 1 kilogramo mínimo con indicador de presión de carga.",
        ],
        correctAnswer: 2
    },
    {
        id: "multiple10",
        question: "¿De qué color deben ser los faros delanteros de un automóvil?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            " Blancos o amarillos.",
            "Pueden tener el color del vehículo.",
            "Amarillos o verdes",
        ],
        correctAnswer: 0
    },
    {
        id: "input4",
        question: "¿Cuántos días está habilitado a circular un vehículo sin placas patentes?",
        category: "B2",
        type:"input",
        correctAnswer: "0"
    },
    {
        id: "multiple11",
        question: "¿Qué significa la señal horizontal de doble línea continua amarilla?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Es una señalización que se utiliza únicamente para dividir los sentidos de circulación.",
            "Indica para ambos sentidos de circulación que no debe ser traspasada ni se puede circular sobre ella",
            "Significa que sólo pueden circular vehículos particulares.",
        ],
        correctAnswer: 1
    },
    {
        id: "multiple12",
        question: "¿De qué color debe ser la luz de retroceso?",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Roja",
            "Blanca",
            "Roja adelante y blanca atras",
        ],
        correctAnswer: 1
    },
    {
        id: "signal8",
        question: "¿Que indica la siguiente señal?",
        img: "./img/lomada.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Pendiente peligrosa bajada",
            "Depresión transversal badén",
            "Elevación transversal lomo de burro",
        ],
        correctAnswer: 2
    },
    {
        id: "signal9",
        question: "¿Que indica la siguiente señal?",
        img: "./img/curvapeligrosa.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Curva",
            "Curva peligrosa",
            "Giro obligatorio",
        ],
        correctAnswer: 1
    },
    {
        id: "signal10",
        question: "¿Que indica la siguiente señal?",
        img: "./img/rotonda.png",
        category: "B2",
        type:"multiple-choice",
        answers:[
            "Rotonda",
            "Giro",
            "Curva y contracurva",
        ],
        correctAnswer: 0
    },
];


// let selectedQuestions = [];

// if (carQuestions.length === 29) {
//     while (selectedQuestions.length !== 20) {
//         const random = carQuestions[Math.floor(Math.random()* carQuestions.length)];
//         if (selectedQuestions.find(question => question.id === random.id)) {
//             console.log("El ID se repite");
//         } else {
//             selectedQuestions.push(random);
//             console.log(selectedQuestions.length);            
//         }
//     }
// };

// const gettingID = selectedQuestions.values();

// for (const iterator of gettingID) {
//     console.log(iterator.id);
// };


// let indexOfSelectedQuestions = 0;


// for (let index = 0; index < 3; index++) {
//     const element = carQuestions[index];
//     console.log(element);
// }



