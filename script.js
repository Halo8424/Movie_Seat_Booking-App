// Dom Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

// Event listener
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && ! 
    e.target.classList.contains('occupied')){
        console.log(e.target);
    };
});