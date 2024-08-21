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
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        let taskText = document.createElement("span");
        taskText.textContent = inputvalue;
        let newdel=document.createElement("button");
        newdel.textContent="Delete";
        newdel.addEventListener("click",()=>{
            notelist.removeChild(newlist);

        })
        
        newlist.appendChild(checkbox);
        newlist.appendChild(taskText);
        newlist.appendChild(newdel);

        notelist.appendChild(newlist);

        inputField.value = ""; 
}
    
    
    
}