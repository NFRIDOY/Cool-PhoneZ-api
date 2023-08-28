const loadPhone = async (search) => {
    if (true) {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url)
        const data = await res.json();
        showData(data.data);
    }
    else{
        alert("Phone Not Found")
    }
}
function showData(data) {
    // Parent Element
    const phonesCard = document.getElementById("cardContainer");
    console.log(data);
    for (const phone of data) {
        console.log(phone);
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="${phone["image"]}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone["phone_name"]}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        </div>
        `
        phonesCard.appendChild(div);
        console.log(phone["phone_name"]);
    }


}
// const getData = loadPhone();

function searchHandler() {
    // console.log(getData);
    const searchBox = document.getElementById("searchBox");
    const searchBoxValue = searchBox.value;
    console.log(searchBoxValue);
    loadPhone(searchBoxValue);


}