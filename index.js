const loadPhone = async () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=samsung';
    const res = await fetch(url)
    const data = res.json();
    console.log(data);
}
loadPhone();