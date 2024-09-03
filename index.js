document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/events")
    .then(r => r.json())
    .then(json => {
        eventData = json;
        console.log(eventData);

        eventData.forEach(event => {
            showCards(event);
            
        });
    });

    function showCards(event) {
        
        let eventCard = document.querySelector("#event-card");
        

        let eTitle = document.createElement("H1");
        let eDate = document.createElement("h1");

        eTitle.id = `title-${event.id}`;
        eDate.id = `date-${event.id}`;
        
        eTitle.textContent = event.title;
        eDate.textContent = event.date;
        
        eventCard.appendChild(eTitle);
        eventCard.appendChild(eDate);
        
        
    }
});