const posts = [
    {title: 'Posts One', body: 'This is Post One'},
    {title: 'Posts Two', body: 'This is Post Two'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}



createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);