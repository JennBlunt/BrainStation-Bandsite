

let comments = fetch('https://project-1-api.herokuapp.com/comments/?api_key=ef8d641b-d549-47f4-9575-8bf153a0c9e6');
comments.then((response) => {
    return response.json();
}).then((data) => {
   return displayComments(data);
}).catch(function(error){
    console.log(error);
})

//creates comment when submit button clicked
let postButton = document.getElementById("post-button");
postButton.addEventListener("click", function(event) {
    event.preventDefault();
    let commentName = document.getElementById("comment-name").value; 
    let commentBlock = document.getElementById("comment-block").value;
    let newComment = {
        name: commentName,
        comment: commentBlock
    };

    
    const init = {
        body: JSON.stringify(newComment),
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        }
    }       

    fetch('https://project-1-api.herokuapp.com/comments/?api_key=ef8d641b-d549-47f4-9575-8bf153a0c9e6', init)
    .then((response) => {
        return response.json();
    }).then((data) => {
        return createComment(data);
    }).catch(function(error){
        console.log(error);
    })

    document.getElementById("comment-name").value = '';
    document.getElementById("comment-block").value = '';
});

//creates comment from existing list
function createComment(commentObject) {
    let displayComment = document.getElementById("display-comment");
    let newCommentDiv = document.createElement("div");
    let newCommentH5 = document.createElement("h5");
    newCommentH5.classList.add("display-comment"); 
    let newCommentP = document.createElement("p");
    newCommentP.classList.add("comment-p");
    newCommentDiv.appendChild(newCommentH5);
    newCommentDiv.appendChild(newCommentP);
    displayComment.appendChild(newCommentDiv);
    newCommentH5.innerHTML = commentObject.name;
    newCommentP.innerHTML = commentObject.comment;
    
} 

function displayComments(commentsArray) {
    document.getElementById("display-comment").innerHTML = '';
    for (let i = commentsArray.length - 1; i < commentsArray.length; i-- ) {
        createComment(commentsArray[i]);
    }
}
