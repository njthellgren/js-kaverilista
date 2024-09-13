let namesArray = [];

document.querySelector('#formFriends').addEventListener('submit', function(event) {
    event.preventDefault();
    const buttonClicked = event.submitter.value;

    if (buttonClicked === 'Lisää kaveri') {newListElement();} 
    else if (buttonClicked === 'Poista Kaveri') {removeFriend();} 
    else if (buttonClicked === 'Järjestä Kaverit') {organizeFriends();}
});

function newListElement() {
    let elementName = document.querySelector('#nameInput').value;

    if (elementName.length > 0) {        
        namesArray.push(elementName);
        updateFriendList();
        document.querySelector('#nameInput').value ='';
    }
}

function updateFriendList() {

    let friendList = document.querySelector('#friendList2');
    
    friendList.innerHTML = '';

    namesArray.forEach(name => {
        let newElement = document.createElement('li');
        let newElementText = document.createTextNode(name);
        newElement.appendChild(newElementText);
        newElement.className = 'list-item';
        friendList.appendChild(newElement);
    });
}

function removeFriend(){

    let removeName = document.querySelector('#nameInput').value;
    let index = namesArray.indexOf(removeName);

    if (index !== -1) {
        namesArray.splice(index, 1);
        updateFriendList();
    }
}

function organizeFriends(){
    namesArray.sort();
    updateFriendList();
}
