//declaration
let myInput = document.getElementById("myInput")
let myAddBtn = document.getElementById("myBtn")
let myList = document.getElementById("myList")
let myErrorText= document.getElementById("textError")

//add Button Click

myAddBtn.addEventListener("click",()=>{
    // get value from the user
    myInputValue=document.getElementById("myInput").value
    if(myInputValue!=""){
        myErrorText.classList.add("hide")
        myErrorText.classList.remove("play")
        myInput.classList.remove("outline")
        //create div and adding styles
        let taskBare=document.createElement("div")
        taskBare.classList.add("taskBare")
        //create li and adding styles
        let myLi=document.createElement("li")
        myLi.classList.add("myLi")
        myLi.textContent=myInputValue

        //create Btns div
        let btns = document.createElement("div")
        btns.classList.add("btns")

        //create Buttons


        //create delete button
        let dltBtn=document.createElement("button")
        dltBtn.innerText="Delete"
        dltBtn.classList.add("dltBtn")


        //create Update button
        let updBtn=document.createElement("button")
        updBtn.innerText="Update"
        updBtn.classList.add("updBtn")


        //create Check button
        let chkBtn=document.createElement("button")
        chkBtn.innerText="Check"
        chkBtn.classList.add("chkBtn")


        //Link parents with Child

        //1 link buttons with btns div

        btns.appendChild(dltBtn)
        btns.appendChild(updBtn)
        btns.appendChild(chkBtn)
        
        //2 link li and btns div with taskBare div
        taskBare.appendChild(myLi)
        taskBare.appendChild(btns) 

        // 3 link taskBare div with his parent

        myList.appendChild(taskBare)

        //new task
        myInput.value = ""

    }

    else{
        myErrorText.classList.add("play")
        myErrorText.classList.remove("hide")
        myInput.classList.add("outline")
    }
})
myList.addEventListener("click",(event)=>{

    if(event.target.classList.contains("dltBtn")){
        event.target.parentElement.parentElement.remove()
    }
    if(event.target.classList.contains("updBtn")){

        let myLi = event.target.parentElement.parentElement.querySelector(".myLi")
        let newValue = prompt("update your task", myLi.innerText)

        if(newValue != null && newValue != ""){

            myErrorText.classList.add("hide")
            myErrorText.classList.remove("play")
            myInput.classList.remove("outline")

            myLi.innerText=newValue
        }
        else{
            myErrorText.classList.add("play")
            myErrorText.classList.remove("hide")
            myInput.classList.add("outline")
        }
    }
    if(event.target.classList.contains("chkBtn")){
        if(event.target.innerHTML=="Check"){
            event.target.parentElement.parentElement.classList.add("greenCheck")
            event.target.innerHTML="notYet"
        }
        else{
            event.target.parentElement.parentElement.classList.remove("greenCheck")
            event.target.innerHTML="Check"
        }
    }


})
