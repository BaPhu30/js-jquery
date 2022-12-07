function getValue() {
    let divValue = document.createElement("div")
    divValue.setAttribute("class", "main__div-value")
    let h2 = document.createElement("h2")
    h2.setAttribute("id", "h2")
    let buttonEdit = document.createElement("button")
    buttonEdit.setAttribute("class", "fa-solid fa-wrench main__button-edit")
    let buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("class", "fa-solid fa-trash-can main__button-delete")
    let li = document.createElement("li")
    let input = document.getElementById("header__get-value").value
    h2.appendChild(document.createTextNode(input))
    divValue.appendChild(h2)
    li.appendChild(divValue)
    li.appendChild(buttonEdit)
    li.appendChild(buttonDelete)
    if (input == "") {
        alert("Please enter the job")
    } else {
        document.getElementById("main").appendChild(li)
    }
    document.getElementById("header__get-value").value = ""

    buttonEdit.addEventListener("click", function () {
        let inputEdit = document.createElement("input")
        inputEdit.setAttribute("id", "main__get-value-edit")
        inputEdit.setAttribute("placeholder", "...")
        let buttonEditSave = document.createElement("button")
        buttonEditSave.setAttribute("class", "main__button-edit-save")
        buttonEditSave.appendChild(document.createTextNode("SAVE"))
        divValue.appendChild(inputEdit)
        divValue.appendChild(buttonEditSave)
        let h2 = li.getElementsByTagName("h2")[0]
        inputEdit.value = h2.textContent
        buttonEdit.style.display = 'none'

        buttonEditSave.addEventListener("click", function () {
            let getValueEdit = document.getElementById("main__get-value-edit").value
            if (getValueEdit == "") {
                alert("Please enter the job edit")
            } else {
                divValue.getElementsByTagName("h2")[0].innerHTML = getValueEdit
            }
            inputEdit.remove()
            buttonEditSave.remove()
            buttonEdit.style.display = 'block'
        })
    })

    buttonDelete.addEventListener("click", function () {
        li.remove()
    })
}


$(document).ready(function () {
    $("#btnValue").click(function () {
        var input = $("#getValue").val()
        var span = $('<span> </span>')
        $(span).append(input)
        var deletee = $('<button><i class="fa-solid fa-trash-can"></i></button>')
        var edit = $('<button>Chỉnh sửa</button>')
        // $('ul').append('<li>' + xAray + '<button id="delete">Xóa</button>' + '</li>');
        var li = $('<li> </li>')
        $(li).append(span).append(deletee).append(edit)
        $('#result').append(li)
        $(deletee).on('click', function () {
            $(this).parent('li')[0].remove()
        })

        $(edit).on('click', function () {
            var newinput = $('<input type = "text">')
            var newbutton = $('<button>Lưu</button>')
            var thisli = $(this).closest('li')
            $(thisli).append(newinput).append(newbutton)

            //+++ đưa value vào newinput:
            var pa = $(this).parent(li)[0]
            // Gọi ra span
            var elementa = pa.getElementsByTagName('span')[0]
            // lấy text trong spann ra       
            elementa = $(elementa).text()
            // đưa vào newinput
            $(newinput).val(elementa)
            // ẩn edit
            $(edit).hide()
 
            $(newbutton).on('click', function () {
                var saveli = $(newinput).val()
                var getvalua = $(this).parent(li)[0]
                var p = getvalua.getElementsByTagName('span')[0]
                $(p).html(saveli)
                $(newinput).remove()
                $(newbutton).remove()
                $(edit).show()
            })
        })
    });
});
