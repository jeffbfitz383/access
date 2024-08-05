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
        console.log(event);

        let eventList = document.querySelector("#event-list");
        if (eventList) {
            let eventTitle = document.createElement("h1");
            eventTitle.textContent = event.title;
            eventList.appendChild(eventTitle);
        } else {
            console.error("#event-list element not found");
        }

        let detailTitle = document.querySelector("#detail-title");
        if (detailTitle) {
            detailTitle.textContent = event.title;
        } else {
            console.error("#detail-title element not found");
        }
    }
});
