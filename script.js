const userContainer = document.querySelector('main')

window.onload = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(displayUsers)
}

function displayUsers(data) {
    console.log(data.results)
    userContainer.innerHTML = data.results
        .filter(user => user.dob.age > 60)
        // .map(userToHTML)
        .map(user => /*html*/`
            <div class="list-group-item list-group-item-action d-flex gap-2 px-2 py-3">
                <div>
                    <img src=${user.picture.large} class="rounded-circle">
                </div>
                <div>
                    <h4>
                        ${user.name.title} ${user.name.first} ${user.name.last}
                    </h4>
                    <p>
                        Age: ${user.dob.age}
                    </p>
                </div>
            </div>
        `)
        .join("")
}

// function userToHTML(user) {
//     return /*html*/`
//         <div class="list-group-item list-group-item-action d-flex gap-2 px-2 py-3">
//             <div>
//                 <img src=${user.picture.large} class="rounded-circle">
//             </div>
//             <div>
//                 <h4>
//                     ${user.name.title} ${user.name.first} ${user.name.last}
//                 </h4>
//                 <p>
//                     Age: ${user.dob.age}
//                 </p>
//             </div>
//         </div>
//     `
// }