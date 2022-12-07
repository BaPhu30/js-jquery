function getValue() {
    let divValue = document.createElement("div")
    divValue.setAttribute("class", "main__div-value")
    let img = document.createElement("img")
    let buttonEdit = document.createElement("button")
    buttonEdit.setAttribute("class", "fa-solid fa-wrench main__button-edit")
    let buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("class", "fa-solid fa-trash-can main__button-delete")
    let li = document.createElement("li")
    let getValue = document.getElementById("header__get-value").value
    img.setAttribute("src", `./images/${getValue.slice(12)}`)
    divValue.appendChild(img)
    li.appendChild(divValue)
    li.appendChild(buttonEdit)
    li.appendChild(buttonDelete)
    if (getValue == "") {
        alert("Please enter the image")
    } else {
        document.getElementById("main").appendChild(li)
    }
    document.getElementById("header__get-value").value = ""

    buttonEdit.onclick = function () {
        let inputEdit = document.createElement("input")
        inputEdit.setAttribute("id", "main__get-value-edit")
        inputEdit.setAttribute("type", "file")
        inputEdit.setAttribute("placeholder", "...")
        let buttonEditSave = document.createElement("button")
        buttonEditSave.setAttribute("class", "main__button-edit-save")
        buttonEditSave.appendChild(document.createTextNode("SAVE"))
        divValue.appendChild(inputEdit)
        divValue.appendChild(buttonEditSave)
        buttonEdit.style.display = 'none'

        buttonEditSave.addEventListener("click", function () {
            let getValueEdit = document.getElementById("main__get-value-edit").value
            if (getValueEdit == "") {
                alert("Please enter the image edit")
            } else {
                img.setAttribute("src", `./images/${getValueEdit.slice(12)}`)
            }
            inputEdit.remove()
            buttonEditSave.remove()
            buttonEdit.style.display = 'block'
        })
    }

    buttonDelete.addEventListener("click", function () {
        li.remove()
    })
}