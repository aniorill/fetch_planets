
window.addEventListener("load", function () {
    alert("Page has loaded.")

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (data) {
            console.log(data)

            const container = document.querySelector("#container")
            let display = data.length
            data.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });



            for (let i = 0; i < data.length; i++) {

                if (data[i].active) {
                    display += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${data[i].firstName + " " + data[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data[i].hoursInSpace}</li>
                            <li class="green">Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                </div>
                `
                } else {
                    display += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${data[i].firstName + " " + data[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data[i].hoursInSpace}</li>
                            <li>Active: ${data[i].active}</li>
                            <li>Skills: ${data[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                </div>
                `
                }

            }
            console.log(display)
            container.innerHTML = display

        })
    })
})