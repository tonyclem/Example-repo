// Promise Example 
console.log("Start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("now will have the data updata");
            resolve({ userEmail: email });
        }, 3000);
    }); 
}

function getUserVideo(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Video1", "Video2", "video3"]);
        }, 2000);
    })
}

function VideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["title of the video"]);
        }, 2000);
    })
}

// Await Syntax
// async function displayUser() {
//     try {
//         const loggedUser = await loginUser("Clementa143@gmail", 122345456);
//         const video = await getUserVideo(loggedUser.userEmail);
//         const detail = await VideoDetails(video[0]);
//         console.log(detail);
//     } catch(err) {
//         console.log("we could get it")
//     }
// }
// displayUser();

loginUser("clement", "1234556")
.then(user => getUserVideo(user.email))
.then(videos => VideoDetails(videos[1]))


console.log("Finish")

