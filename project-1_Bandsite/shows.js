
let shows = fetch('https://project-1-api.herokuapp.com/showdates/?api_key=ef8d641b-d549-47f4-9575-8bf153a0c9e6');
shows.then((response) => {
    return response.json();
}).then((data) => {
    displayTable(data);
}).catch(function(error){
    console.log(error);
})

function createShowsTable(showsObject) {
    let displayTable = document.getElementById('shows-table');
    let newTr = document.createElement('tr');
    let dateTh = document.createElement('th');
    let venueTd = document.createElement('td');
    let locationTd = document.createElement('td');
    let ticketTd = document.createElement('td');
    let ticketButton = document.createElement('button');

    newTr.classList.add();
    dateTh.classList.add('date');
    venueTd.classList.add('venue');
    locationTd.classList.add('location');
    ticketButton.classList.add('ticket-button')

    newTr.appendChild(dateTh);
    newTr.appendChild(venueTd);
    newTr.appendChild(locationTd);
    newTr.appendChild(ticketTd);
    ticketTd.appendChild(ticketButton);
    displayTable.appendChild(newTr);

    dateTh.innerHTML = showsObject.date;
    venueTd.innerHTML = showsObject.place;
    locationTd.innerHTML = showsObject.location;
    ticketButton.innerHTML = 'GET TICKETS';
}

function displayTable(showsArray) {
    for (let i = 0; i < showsArray.length; i++ ) {
        createShowsTable(showsArray[i]);
    }
};

displayTable(shows);