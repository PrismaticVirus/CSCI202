fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').append(data.number);

        const namesList = data.people.map(person => person.name);

        const list = document.getElementById('peopleInSpace');
        namesList.forEach(name => {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

listContainer = document.getElementById('listContainer');

function showList() {
    document.getElementById('listContainer').style.display = "block";
    document.getElementById('peopleInSpace').style.display = "block";
    document.getElementById('header').style.display = "block";
}

function hideList() {
    document.getElementById('listContainer').style.display = "none";
    document.getElementById('peopleInSpace').style.display = "none";
    document.getElementById('header').style.display = "none";

}

iss.addEventListener("mouseover", showList);
iss.addEventListener("mouseout", hideList);