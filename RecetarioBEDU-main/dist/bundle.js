(()=>{const e=new XMLHttpRequest;
    e.addEventListener("load",(function(){
        if(4===this.readyState&&200===this.status) {
            console.log(this.response);
    const e=Object.entries(JSON.parse(this.response));
    console.log(Array.isArray(e)),console.log(e);
    const s = document.querySelector("#app"),t=e.map((e=>
        `<li>${e.strMeal}</li>`));
    s.innerHTML=`<ul>${t}</ul>`}})),e.open("GET","https://www.themealdb.com/api/json/v1/1/random.php"),e.send()})();

    