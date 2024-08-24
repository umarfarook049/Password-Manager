
//logic to fill
const deletePass = (website) =>
{
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data)
    arrupdated = arr.filter((e)=>{
        return e.website!=website
    })
    localStorage.setItem("passwords", JSON.stringify(arrupdated))
    alert(`Deleted....${website}`)
    showPass();
}
const showPass =  () =>
{
let tb = document.querySelector("table")
let data = localStorage.getItem("passwords")
 if(data == null){
    tb.innerHTML = "No Data To Be Shown"
 }
else{
    tb.innerHTML = `<tr>
    <th>Websites</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
</tr>`
    let arr = JSON.parse(data)
    let str = ""
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        str += `<tr>
<td>${element.website}  <img src="copy.svg"  alt="Copy Icon" id="copyIcon" onclick="copyToClipboard(${element.website})"   height="10" width="10"></td>
<td>${element.username}  <img src="copy.svg"  alt="Copy Icon" id="copyIcon" onclick="copyToClipboard(${element.username})" height="10" width="10"></td>
<td>${element.Password}  <img src="copy.svg"  alt="Copy Icon" id="copyIcon" onclick="copyToClipboard(${element.Password})" height="10" width="10"></td>
<td><button class="btnsm" onclick="deletePass('${element.website}')">Delete</button></td>
</tr>`
    }
         tb.innerHTML = tb.innerHTML + str
}
website.value = ""
username.value = ""
Password.value = ""

}
console.log("ALhamdulliah");
showPass();
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Done");
    console.log(username.value,Password.value)
    let Passwords = localStorage.getItem("passwords")
    console.log(Passwords)
    if(Passwords == null){
        let json = []
        json.push({website:website.value,username:username.value,Password:Password.value})
        alert("Submitted...")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else{
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({website:website.value,username:username.value,Password:Password.value})
        alert("Saved...")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showPass();
})
