// const wicon=require('./weatherIcon');
const cloudHtml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" width="64"
    height="64" viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05" />
            </feComponentTransfer>
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>

    </defs>
    <g filter="url(#blur)" id="cloudy-day-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                            transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2" />
            </g>
            <g class="am-weather-cloud-2">
                <path
                    d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                    fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2"
                    transform="translate(-20,-11)" />
            </g>
        </g>
    </g>
</svg>`;


const sunHtml=` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="64"
height="64" viewbox="0 0 64 64">
<defs>
    <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="4" result="offsetblur" />
        <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
        </feComponentTransfer>
        <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
    </filter>

</defs>
<g filter="url(#blur)" id="day">
    <g transform="translate(32,32)">
        <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
            <g>
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(45)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(90)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(135)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(180)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(225)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(270)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
            <g transform="rotate(315)">
                <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2"
                    transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
            </g>
        </g>
        <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2" />
    </g>
</g>
</svg>`;
 


const rainHtml=` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="64"
height="64" viewbox="0 0 64 64">
<defs>
    <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="4" result="offsetblur" />
        <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
        </feComponentTransfer>
        <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
    </filter>

</defs>
<g filter="url(#blur)" id="rainy-4">
    <g transform="translate(20,10)">
        <g>
            <path
                d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z"
                fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2"
                transform="translate(-20,-11)" />
        </g>
    </g>
    <g transform="translate(37,45), rotate(10)">
        <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7"
            stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0"
            y2="8" />
    </g>
</g>
</svg>`;
const loca = document.querySelector('#loc');
const alert = document.getElementById('alertmsg');
loca.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.getElementById('location');
    if (input.value == "") {
        alert.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should enter correct location'.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }
    else {
        address = input.value;
        const insert = document.getElementById('insert');
        insert.innerHTML = `<p>Loading.....</p>`;
        fetch(`/weather?address=${address}`).then((response) => {
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
                    
                    let ch=data.description;
                    let check=ch.toString();
                    check =check.toLocaleLowerCase();
                    let charr=check.split(' ');
                    let cloud='cloudy overcast clouded overcloude dark darkened grey black leaden dull murky sombre dismal dreary cheerless heavy gloomy dim louring  hazy misty foggy threatening menacing claggy';
                    let rain='rain rainfall precipitation raindrops rainwater wetweather the wet sprinkle drizzle mizzle Scotch mist shower rainstorm cloudburst torrent downpour deluge squall thunderstorm';
                    let sun='sunny bright sunshiny sunlit brilliant clear fine fair balmy summery clement';
                    let iconHtml='';
                    if(cloud.match(charr[charr.length-1]))
                    {
                        iconHtml=cloudHtml;
                    }
                   else if(rain.match(charr[charr.length-1]))
                    {
                        iconHtml=rainHtml;
                    }
                   else if(sun.match(charr[charr.length-1]))
                    {
                        iconHtml=sunHtml; 
                    }
                    insert.innerHTML = ` <div class="row border border-secondary border-3 rounded bg-light">
                    <h1>Weather Info</h1>
                    <p><strong>${data.description}</strong>${iconHtml} </p>
                    <p>Temprature :<strong>${data.temperature}</strong></p>
                   <p>Feelslike :<strong>${data.feelslike}</strong></p>
                   <p>Location :<strong>${data.location}</strong></p>
                   </div>
                   `;

                }
            })
        })
        input.value = "";
    }
})


