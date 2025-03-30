// ดึงข้อมูลจากไฟล์ user.json ไปแสดงผล
const list = document.querySelector("#list");
let output =''
async function getUsers(){
   const res = await fetch("user.json")
    const json =  await  res.json()
       json.users.forEach(item=>{
    output += "<li>"+ item.name + "</li>";
   })
   list.innerHTML = output;
}
getUsers()