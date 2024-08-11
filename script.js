let inputField=document.getElementById("input");
let buttons=document.getElementById("addButton");
let delbutton=document.getElementById("addDelete");
let notelist=document.getElementById("list");
function addnotes(){
    let inputvalue=inputField.value.trim();
    if(inputvalue!=="")
    {
        let newlist=document.createElement("li");
        newlist.textContent=inputField.value.trim();
        notelist.appendChild(newlist);
        let newdel=document.createElement("button");
        newdel.textContent="Delete";
        newdel.addEventListener("click",()=>{
            notelist.removeChild(newlist);

        })
        
        newlist.appendChild(newdel);
}
    
    
    
}