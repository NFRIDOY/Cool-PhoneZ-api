const loadPhone = async (search = "iphone") => {
    if (true) {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url)
        const data = await res.json();
        showData(data.data,search.toLowerCase());
    }
    else {
        alert("Phone Not Found")
    }
}
// function showData(data) {
//     // Parent Element
//     const phonesCard = document.getElementById("cardContainer");
//     console.log(data);
//     phonesCard.innerHTML=``;
//     for (const phone of data) {
//         console.log(phone);
//         const div = document.createElement("div");
//         const CardStyles = "bg-blue-400"
//         div.innerHTML = `
//         <div class="card w-96 bg-base-100 shadow-xl">
//                     <figure><img src="${phone["image"]}" alt="Shoes" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title">${phone["phone_name"]}</h2>
//                         <p>If a dog chews shoes whose shoes does he choose?</p>
//                         <div class="card-actions justify-end">
//                             <button class="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>
//         </div>
//         `
//         div.classList = "rounded-lg drop-shadow-sm";
//         phonesCard.appendChild(div);
//         // console.log(phone["phone_name"]);
//         // div.innerHTML =``;
//     }


// }
function showData(data,searchPd) {
    // Parent Element
    const phonesCard = document.getElementById("cardContainer");
    console.log(data);
    phonesCard.innerHTML = ``;
    for (const phone of data) {
        console.log(phone);
        const div = document.createElement("div");
        const CardStyles = "bg-base-400";
        
        const {phone_name} = phone;
        if (phone_name.includes(searchPd)) {
            div.innerHTML = `
            <div class="card w-96 ${CardStyles} shadow-xl">
                    <figure><img src="${phone["image"]}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone["phone_name"]}</h2>
                        <p>${phone["slug"]}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
            </div>
        `
        }
        else {
            div.innerHTML = `
        <div class="card w-96 ${CardStyles} shadow-xl">
                    <figure><img src="${phone["image"]}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone["phone_name"]}</h2>
                        <p>${phone["slug"]}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        </div>
        `
        }
        div.classList = "rounded-lg drop-shadow-sm";
        phonesCard.appendChild(div);
        // console.log(phone["phone_name"]);
        // div.innerHTML =``;
    }


}
// const getData = loadPhone();


function searchHandler() {

    // console.log(getData);
    const searchBox = document.getElementById("searchBox");
    const searchBoxValue = searchBox.value;
    const defaultValue = "samsung";
    console.log(searchBoxValue);
    loadPhone(searchBoxValue || defaultValue, showData);

}

function searchProduct() {
    const searchProductBox = document.getElementById("searchProductBox");
    const searchProductValue = searchProductBox.value;
    const defaultValue = "samsung";
    console.log(searchProductValue);
    loadPhone(searchProductValue.toLowerCase() || defaultValue, showData);

}
const loadSliderIphone = async (search = "iphone") => {
    if (true) {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url)
        const data = await res.json();
        showData(data.data);
    }
    else {
        alert("Phone Not Found");
    }
}
const loadSliderSam = async (search = "samsung") => {
    if (true) {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url)
        const data = await res.json();
        showData(data.data);
    }
    else {
        alert("Phone Not Found");
    }
}