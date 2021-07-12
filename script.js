// Dom Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Function, updates count and total
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    // capturing the number of selected seats
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

};
// Movie select listener
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});
// Event listener for Seats
container.addEventListener('click',(e)=>{
    if  (
        e.target.classList.contains('seat') && 
        ! e.target.classList.contains('occupied')
        ){
        e.target.classList.toggle('selected')
        updateSelectedCount()
    };
});