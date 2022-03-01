const allPhones = () => {
    document.getElementById("phone-container").innerHTML = "";

    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((info) => showPhoneDetails(info.data));
};

const showPhoneDetails = (phones) => {
    const parent = document.getElementById("phone-container");
    phones.forEach((data) => {
        const div = document.createElement("div");
        div.innerHTML = ` 
        <div class="col">
                <div class="card">
                    <img src="${data.image}" class="card-img-top w-50 mx-auto p" alt="..." />
                    <div class="card-body mx-auto">
                        <h5 class="card-title">${data.brand}</h5>
                        <h6 class="fw-bolder"> ${data.phone_name} </h6>
                        <p class="card-text"> </p>
                        <div class="button">
                              <button onclick="details('${data.slug}')" class="btn btn-success data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                        </div>
                    </div>
                </div>
            </div>`;
        parent.appendChild(div);
    });
};

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((info) => setDetails(info.data));
};

const setDetails = (phoneDetails) => {
    document.getElementById("phone-container").innerHTML = `
    <div class="card w-auto mx-auto">
                    <img src="${phoneDetails.image}" class="card-img-top w-50 mx-auto p" alt="..." />
                    <div class="card-body mx-auto">
                        <h5 class="card-title fw-bolder">${phoneDetails.brand}</h5>
                        <h6 class="fw-bolder">Phone Name:  ${phoneDetails.name} </h6>
                        
                        <h6 class="fw-bolder">Release Dat:  ${phoneDetails.releaseDate} </h6>
                    <div >

                <h4 class="fw-bolder" >Main Features</h4>
                    <p class="fw-bolder">Storage: ${phoneDetails.mainFeatures.storage} </p>
                    <p class="fw-bolder">Display Size: ${phoneDetails.mainFeatures.displaySize} </p>
                    <p class="fw-bolder">Chipset: ${phoneDetails.mainFeatures.chipSet} </p>
                    <p class="fw-bolder">Memory: ${phoneDetails.mainFeatures.memory} </p>
                    <p class="fw-bolder">Sensors: ${phoneDetails.mainFeatures.sensors} </p>
                    </div>
                <h4 class="fw-bolder">Other Feautres</h4>       
                    <p class="fw-bolder">WLAN: ${phoneDetails.others.WLAN} </p>
                    <p class="fw-bolder">Bluetooth: ${phoneDetails.others.Bluetooth} </p>
                    <p class="fw-bolder">GPS: ${phoneDetails.others.GPS} </p>
                    <p class="fw-bolder">NFC: ${phoneDetails.others.NFC} </p>
                    <p class="fw-bolder">Radio: ${phoneDetails.others.Radio} </p>
                     <p class="fw-bolder">USB: ${phoneDetails.others.USB} </p>
                    </div>`;
};