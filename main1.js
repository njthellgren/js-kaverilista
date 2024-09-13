let form = document.forms['formNewFriends'];
form.addEventListener('submit', newListElement)

function newListElement(event){

    event.preventDefault()

    let elementName = document.querySelector('#namesInput').value;

    let namesArray = elementName.split(',').map(name => name.trim()). filter(name => name.length > 0);

    let friendList = document.querySelector('#friendList1');
    friendList.innerHTML = '';

    namesArray.forEach(name => {
        let newElement = document.createElement('li')
        let newElementText = document.createTextNode(name)
        newElement.appendChild(newElementText)
        newElement.className = 'list-item';
        friendList.appendChild(newElement);
    });
}