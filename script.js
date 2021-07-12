// Saving Dom Elements To Declared Variables
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// Function: To PopulateUI With Saved Data From LocalStorage
populateUI();

// Sets ticket price from number 'value' of Current picked movie
let ticketPrice = +movieSelect.value;

// Sets the picked movie index & price of movie to localStorage
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Function, updates count and total
function updateSelectedCount(){
    // Variable holds a NodeList of selected elements with a class of '.row, .seat, .selected'
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // Converting NodeList => Array of selected seats index
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });
    // local storage save
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    // Saves # of selected seats from the length of the NodeList saved to 'selectedSeats'
    const selectedSeatsCount = selectedSeats.length;
    // Displays the number of selected seats & total cost of tickets
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};
// Populate Ui from local storage
function populateUI(){
    // Save localStorage 'String' => 'Array' To A Variable
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    // Checks If 'null' & Array length is > 0
    if(selectedSeats !== null && selectedSeats.length > 0){
        // Loop over each unoccupied seat 
        seats.forEach(function(seat, index){
            // If looped over seat is part off array inded
            if(selectedSeats.indexOf(index) > -1){
                // Add 'selected' class to that seat
                seat.classList.add('selected');
            };
        });
    }
    // Grabing the saved selected movie pick from local strorage
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    // Checks variable for data
    if(selectedMovieIndex !== null){
        // Assign that index value to 'movieSelect' variable
        movieSelect.selectedIndex = selectedMovieIndex;
    };
};


// Movie select listener
movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Event listener on the container
container.addEventListener('click',(e)=>{
    // Check the click element has a class of 'seat' & does NOT have the class of 'occupied'
    if  (
        e.target.classList.contains('seat') && 
        ! e.target.classList.contains('occupied')
        ){
        // Toggles the 'selected' class onto the clicked element
        e.target.classList.toggle('selected')
        updateSelectedCount()
    };
});

// Inital count and total
updateSelectedCount();