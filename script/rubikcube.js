const stepsElement = document.getElementById('steps');
const cubeElement = document.getElementById('cube');

let steps = [];
let currentStep = 0;

function scrambleCube() {
    // Simulate scrambling the cube
    steps = ['R', 'U', 'R\'', 'U\'', 'L', 'D', 'L\'', 'D\'']; // Example scramble moves
    currentStep = 0;
    stepsElement.innerHTML = 'Scrambled! Steps: ' + steps.join(', ');
}

function solveCube() {
    if (currentStep < steps.length) {
        stepsElement.innerHTML = 'Solving... Step: ' + steps[currentStep];
        currentStep++;
        setTimeout(solveCube, 1000); // Simulate time taken to solve each step
    } else {
        stepsElement.innerHTML = 'Solved! Scrambling again...';
        setTimeout(scrambleCube, 2000);
    }
}

// Start the process
scrambleCube();
setTimeout(solveCube, 2000);