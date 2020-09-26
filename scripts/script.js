
// get all elements that represents the theater 
const container = document.querySelector('.container');

// Get nodeList with all the seats that are not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

// Get the counters (Selected seats and total price)
const count = document.getElementById('count');
const total = document.getElementById('total');

// Get movie dropdown menu
const movieSelect = document.getElementById('movie');

// Get the ticket price as a number
let ticketPrice = parseInt(movieSelect.value);

//console.log(ticketPrice);
//console.log(typeof ticketPrice);

/***************************************************************/
/*                         FUNCTIONS                           */
/***************************************************************/
// Select or deselect a seat
function selectSeat(event) {
    // Check if a free seat was clicked
    if (event.target.classList.contains('seat') &&
    !event.target.classList.contains('occupied')) {
        //console.log(event.target);

        //event.target.classList.add    <-- to add a Clas
        //event.target.classList.remove <-- to remove a Class
        
        // Remove if exists a class or add it if it doesnt exists
        event.target.classList.toggle('selected');

        // Update total seats selected and its price
        updatedSelectedCount();
    }
}

// Update total and count
function updatedSelectedCount() {
    // Get all selected seats (nodeList)
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    //console.log(selectedSeats);
    //console.log(selectedSeatsCount);

    // Update total and prices
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;


}



/***************************************************************/
/*                      EVENT LISTENERS                        */
/***************************************************************/
/* 
    Add an onClick listener to container div, then we
    have to check if a seat was clicked
*/
container.addEventListener('click', (event) => {
    //console.log(event.target);
    
    // Select or deselect a seat
    selectSeat(event);

});

// Movie select event
movieSelect.addEventListener('change', (event) => {
    // Update ticket price with selected movie price
    ticketPrice = +event.target.value ;

    // Update totals
    updatedSelectedCount();
} );
