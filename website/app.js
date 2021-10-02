/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?lang=ar&units=metric&zip=";
const apiKey = "&appid=531fea044858b5d8459bfaac25035ec3";



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {

    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById("feelings").value;
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    //if the zipCode and userResponse both have values 
    if (zipCode != "" && userResponse != "") {
        getZipCode(baseURL, zipCode, apiKey).then(data => {
            // in case of invalid entry
            if (typeof data.cod === 'object') {
                alert(data.message)
            } else {
                postData("/weather", { temperature: data.main.temp, date: newDate, userResponse }).then(data => {
                    if (data.status) {
                        getData("/weather").then(data => {
                            changeUI(data)
                        });
                    };
                });
            }
        });
    } else {
        alert("Please fill all fields")
    }
};

// async function to get the data from the external API
const getZipCode = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + zipCode + apiKey)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

const getData = async (url = '') => {
    const res = await fetch(url)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}
const changeUI = (data) => {

    console.log(data.temperature)
    console.log(data.date)
    console.log(data.userResponse)

    document.getElementById('date').innerHTML = `Today ${data.date}`;
    document.getElementById('temp').innerHTML = `Temperature is ${data.temperature} °C`;
    document.getElementById('content').innerHTML = `You are feelig ${data.userResponse}`;
}



async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'

        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    // parses JSON response into native JavaScript objects
    return response.json();
}
