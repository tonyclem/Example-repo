// Async Example one
const youtube = new Promise(resolve => {
    setTimeout(() => {
        console.table("getting stuff from youtube");
        resolve({ videos: [1, 2, 3, 4, 5]});
    }, 2000);
});

const facebook = new Promise(resolve => {
    setTimeout(() => {
        console.table("stuff from facebook");
        resolve({ user: "Name : Clement"});
    }, 2000);
});

Promise.all([youtube, facebook]).then(result => console.table(result));

// Async / Await Example 2
const posts = [
    {title: 'Post one', body: 'this is Post one'},
    {title: 'Post two', body: 'this is Post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post, callback) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
    posts.push(post);

    const error = false;

    if(!error) {
        resolve();
    } else {
        reject('Error: Something went wrong');
    }
}, 2000);
   });
}

// calling the async with difference methods 
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});

//     getPosts();
// }

// init()

// async / await / fetch
// calling the async with difference methods 
async function fetchUser() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
        
    const data = await res.json();

    console.log(data);
}

fetchUser();
