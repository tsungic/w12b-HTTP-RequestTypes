function sendPost() {
    let postTitle = document.getElementById("post-title").value;
    let postContent = document.getElementById("post-content").value;

    let postData = {
        title: postTitle,
        body: postContent,
        userId: 1

    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            document.getElementById("post-status").innerHTML = "Post Success!";
        } else if (this.readyState !=4) {
            document.getElementById("post-status").innerHTML = "Uploading";
        } else {
            document.getElementById("post-status").innerHTML = "Post Failure";
        }
    }
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts",true);
    //when POSTING data need to tell backend to expect JSON code form us
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));
}
document.getElementById("post-submit").addEventListener("click", sendPost);



function updatePost() {
    let postData = {
        title: "foo",
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if (this.readyState !=4) {
            console.log("Patch Loading");
        } else {
            console.log("Patch Error " + this.status);
        }
    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(postData));
}
//dont need a submit button, will update on reload
updatePost();



function deletePost(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if (this.readyState !=4) {
            console.log("Delete Loading");
        } else {
            console.log("Delete Error " + this.status);
        }
    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.send
}
deletePost();



function getPosts() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            document.getElementById("posts-container").innerHTML = "";
            //loop through posts and make content on page
            for(let i=0; i<posts.length; i++) {
                //creating page content, =+ continuously appends to post container (each post need to append to post conatiner)
                document.getElementById("posts-container").innerHTML += "<h4>" + posts[i].title + "</h4>";
                document.getElementById("posts-container").innerHTML += "<p>" + posts[i].body + "</p><br><br>";
            }
        } else if (this.readyState !=4) {
            document.getElementById("posts-container").innerHTML = "<h3> Loading Posts </h3>";
        } else {
            document.getElementById("posts-container").innerHTML = "<h3> Error Loading Posts </h3>";
        }
    }
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.send();
}

getPosts();