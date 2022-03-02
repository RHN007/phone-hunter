const allPhones = () => {
    //    Cleaning
    document.getElementById("phone-container").innerHTML = "";

    // Input Area
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

    fetch(url)
        .then((res) => res.json())
        .then((info) => {
            if (info.data == null || info.data == "") {
                document.getElementById("error").style.display = "block";
            } else {
                showPhone(info.data);
                document.getElementById("error").style.display = "none";
            }
        });
};

// Showing Mobile phone

const showPhone = (phones) => {
    const parent = document.getElementById("phone-container");
    phones.slice(0, 20).forEach((data) => {
        const div = document.createElement("div");
        div.innerHTML = ` 
        <div class="col">
                <div class="card shadow rounded">
                    <img src="${data.image}" class="card-img-top w-50 mx-auto p-3" alt="..." />
                    <div class="card-body mx-auto">
                        <h5 class="card-title">${data.brand}</h5>
                        <h6 class="fw-bolder"> ${data.phone_name} </h6>
                        <p class="card-text"> </p>
                        <div class="button">
                              <button onclick="details('${data.slug}')" class="btn btn-success href="#details-container">Details</button>
                        </div>
                    </div>
                </div>
            </div>`;
        parent.appendChild(div);
    });
    // CLeaning Area
    document.getElementById("search-box").value = "";
};

// Phone ID area

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((info) => setDetails(info.data));
};

const setDetails = (phoneDetails) => {
    //Destructuring
    const { storage, displaySize, chipSet, memory } = phoneDetails.mainFeatures;
    const { WLAN, Bluetooth, GPS, NFC, Radio, USB } = phoneDetails.others;

    document.getElementById("details-container").innerHTML = `   
    <div class="col shadow-lg rounded ">
    <div class="card w-50 mx-auto p-3 h-10 border-0 ">
                    <img src="${
                      phoneDetails.image
                    }" class="card-img-top w-50 h-50 mx-auto p-3" alt="..." />
                    <div class="card-body mx-auto">
                        <h5 class="card-title fw-bolder fs-3 text-success">${
                          phoneDetails.brand
                        }</h5>
                        <h6 class="fw-bolder">Phone Name:  ${
                          phoneDetails.name
                        } </h6>
                        <h6 class="fw-bolder">Release Date:  "${
                          phoneDetails.releaseDate
                            ? phoneDetails.releaseDate
                            : "Upcomming Phone"
                        }" </h6>
                    <div>

                <h4 class="fw-bolder text-success " >Main Features</h4>
                    <p> <span class="fw-bold">Storage:</span>  ${storage} </p>
                    <p> <span class="fw-bold">Display Size:</span>  ${displaySize} </p>
                    <p> <span class="fw-bold">Chipset:</span>  ${chipSet} </p>
                    <p> <span class="fw-bold">Memory:</span>  ${memory} </p>
                    <p> <span class="fw-bold">Sensors:</span>  ${
                      phoneDetails.mainFeatures.sensors
                    }</p>
                    </div>
                <h4 class="fw-bolder text-success">Other Feautres</h4>       
                    <p> <span class="fw-bold">WLAN:</span>  ${WLAN} </p>
                    <p> <span class="fw-bold">Bluetooth:</span>   ${Bluetooth} </p>
                    <p> <span class="fw-bold">GPS:</span>   ${GPS} </p>
                    <p> <span class="fw-bold"> NFC:</span>  ${NFC} </p>
                    <p> <span class="fw-bold">Radio:</span>   ${Radio} </p>
                    <p> <span class="fw-bold">USB:</span>  ${USB} </p>
                    </div> 
                    </div>`;
};