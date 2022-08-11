// CODE TO SAVE POST TO DATABASE

const database = firebase.database().ref();

const topicInput = document.getElementById("topic");
const nameInput = document.getElementById("name");
const contentInput = document.getElementById("post");
const submitButton = document.getElementById("submit");

submitButton.onclick = updateDB;

function updateDB(event) {
    event.preventDefault();

    const entry = {
        topic: topicInput.value,
        username: nameInput.value,
        content: contentInput.value
    };

    database.push(entry);
    console.log(entry);

    topicInput.value = "";
    nameInput.value = "";
    contentInput.value = "";
}