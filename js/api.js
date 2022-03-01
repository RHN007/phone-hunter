const allPhones = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((info) => showPhoneDtails(info.data));
};

const showPhoneDtails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById("phone-container");
        const div = document.createElement("div");
        div.innerHTML = ` 
        <div class="col">
                <div class="card">
                    <img src="${data.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${data.brand}</h5>
                        <h6>Phone Name: ${data.phone_name} </h6>
                        <p class="card-text">  </p>
                        <div class="button">
                              <button onclick="details('${data.slug}')" class="btn btn-success">Details</button>
                        </div>
                    </div>
                </div>
            </div>`;
        parent.appendChild(div);
    }
};