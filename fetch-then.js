// ดึงข้อมูลจากไฟล์ user.json ไปแสดงผล
const list = document.querySelector("#list");
let output =''
fetch("user.json")
.then(res=>res.json())
.then(json=>{
   json.users.forEach(item=>{
    output += "<li>"+ item.name + "</li>";
   })
   list.innerHTML = output;
}).catch(err=>{
    console.log(err)
})