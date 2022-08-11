// GET BLOG POSTS FROM DATABASE AND DISPLAY BLOG POST

const blogDiv = document.getElementById("blog");

database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    const blogPost = rowData.val();
    console.log(blogPost);

    let messageDiv = makeBlogPost(blogPost.topic, blogPost.username, blogPost.content);

    blogDiv.appendChild(messageDiv);
}

function makeBlogPost(topicTxt, nameTxt, contentTxt) {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("blog-post");

    let topicP = document.createElement("p");
    topicP.classList.add("single-message-topic");
    topicP.innerHTML = `Topic: ${topicTxt}`;
    parentDiv.appendChild(topicP);

    let nameP = document.createElement("p");
    nameP.classList.add("single-message-name");
    nameP.innerHTML = `Name: ${nameTxt}`;
    parentDiv.appendChild(nameP);

    let contentP = document.createElement("p");
    contentP.innerHTML = contentTxt;
    parentDiv.appendChild(contentP);

    return parentDiv
}