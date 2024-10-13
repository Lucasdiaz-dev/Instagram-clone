const nameEl = document.getElementById("name-el")
const locationEl = document.getElementById("location-el")
const likesEl = document.getElementById("like-el")
const usernameEl = document.getElementById("username-el")
const commentEl = document.getElementById("comment-el")
const imgEl = document.getElementById("post-el")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {

    nameEl.innerHTML = posts[0].name;
    locationEl.innerHTML = posts[0].location;
    imgEl.src = posts[0].post;
    likesEl.innerHTML = posts[0].likes + " likes";
    usernameEl.innerHTML = posts[0].username;
    commentEl.innerHTML = posts[0].comment;
}

