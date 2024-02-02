function addSong() {
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var errMessage = document.getElementById("errMessage");

    if (title === "" && artist === "") {
        errMessage.textContent = "Please enter both the title and artist.";
        return;
    }

    if (title === "") {
        errMessage.textContent = "Please enter the title.";
        return;
    }

    if (artist === "") {
        errMessage.textContent = "Please enter the artist.";
        return;
    }

    errMessage.textContent = "";

    var songList = document.getElementById("songList");
    var listItem = document.createElement("li");

    listItem.classList.add("song-item");
    listItem.innerHTML = "Title: " + title + "<br>" + "Artist: " + artist;

    songList.appendChild(listItem);

    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
}




if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) =>  {
        // console.log('Registered successfully!', registration)
        })
        .catch((error) => {
        console.log('Registartion unsuccessful!', error)
        });
        }
        else{
        console.log("Service worker is not available")
    }

//Load post from the web
    function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => response.json())
    .then( json => renderPost(json));
}

window.addEventListener ('load', () => {
loadPosts();
});

    //Render post on the page
function renderPost (posts){
     const output = document.getElementById('post-output');
        output.innerHTML = '';

        const topPost = posts.slice(0, 10);
        topPost.forEach((post) => {
        output.innerHTML += `
        <div class="post-item">
            <h5>${post.title}</h5>
            <div class = "text">${post.body}</div>
        </div>
        `;
    });
}