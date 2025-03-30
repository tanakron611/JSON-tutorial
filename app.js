// ดึงข้อมูลจาก link api ไปแสดงผล
// https://jsonplaceholder.typicode.com/users
const list  = document.querySelector("#list")
let output = ''

async function getDataFromAPI(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
    const json = await res.json()
   json.forEach(item =>{
    output += "<li>" +  item.title + "</li>";
   })
   list.innerHTML = output;

}
getDataFromAPI() 
