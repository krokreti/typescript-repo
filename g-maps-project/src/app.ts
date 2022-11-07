// Code goes here!
// const input = document.getElementById('address')! as HTMLInputElement;
// const button = document.querySelector('button')! as HTMLButtonElement;

// button.addEventListener('click', () => {
//     console.log(input.value)
// })

import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyBNNR2XFJVWrR259-5Tq9vGnspSGzlxFRU';

declare var google: any;

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredValue = addressInput.value;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredValue)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: coordinates,
            zoom: 8,
        });

        new google.maps.Marker({position: coordinates, map: map});
    })
    .catch(err => {
        console.error(err)
    });
}

form.addEventListener('submit', searchAddressHandler)