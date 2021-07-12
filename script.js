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
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });
    // local storage save
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    // console.log(seatsIndex);
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

};
// Movie select listener
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    console.log(e.target.selectedIndex)
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