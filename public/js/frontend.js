const loca = document.querySelector('#loc');
const alert = document.getElementById('alertmsg');
loca.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.getElementById('location');
    if (input.value == "") {
        alert.innerHTML=`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should enter correct location'.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }
    else {
        address = input.value;
        const insert = document.getElementById('insert');
        fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    // console.log(data.error);
                    insert.innerHTML = `
                    <h1>Weather Info</h1>
                    <p>Error :<strong>${data.error}</strong></p>`;
                }
                else {
                    // console.log(data.temperature);
                    // console.log(data.feelslike);
                    // console.log(data.location); 
                    insert.innerHTML = `
                    <h1>Weather Info</h1>
                    <p>Temprature :<strong>${data.temperature}</strong></p>
                   <p>Feelslike :<strong>${data.feelslike}</strong></p>
                   <p>Location :<strong>${data.location}</strong></p>
                   `;

                }
            })
        })
        input.value = "";
    }
})


