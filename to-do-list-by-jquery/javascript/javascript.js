$(document).ready(function () {
    $(".header__add").click(function () {
        let valueInputUsername = $("#header__value--username").val()
        let valueInputAvatar = $("#header__get--avatar").val()
        let valueInputEmail = $("#header__value--email").val()
        let valueInputPhone = $("#header__value--phone").val()
        let valueInputAddress = $("#header__value--address").val()
        let valueInputNote = $("#header__value--note").val()

        let pUsername = $('<p></p>')
        let imgAvatar = $('<img>')
        let divAvatar = $('<div></div>')
        let pEmail = $('<p class="main__email"></p>')
        let pPhone = $('<p></p>')
        let pAddress = $('<p></p>')
        let pNote = $('<p></p>')
        let buttonDelete = $("<button>Delete</button>")
        let buttonEdit = $("<button>Edit</button>")
        let divButton = $('<div></div>')
        let li = $('<li></li>')

        $(pUsername).append(valueInputUsername)
        $(imgAvatar).attr("src", `./images/${valueInputAvatar.slice(12)}`)
        $(divAvatar).append(imgAvatar)
        $(pEmail).append(valueInputEmail)
        $(pPhone).append(valueInputPhone)
        $(pAddress).append(valueInputAddress)
        $(pNote).append(valueInputNote)
        $(divButton).append(buttonEdit).append(buttonDelete)
        $(li).append(pUsername).append(divAvatar).append(pEmail).append(pPhone).append(pAddress).append(pNote).append(divButton)

        if (valueInputUsername == "") {
            alert("Please enter username")
        } else if (valueInputAvatar == "") {
            alert("Please enter avatar")
        } else if (valueInputEmail == "") {
            alert("Please enter email")
        } else if (valueInputPhone == "") {
            alert("Please enter phone")
        } else if (valueInputAddress == "") {
            alert("Please enter address")
        } else {
            $("#main").append(li)
        }

        $("#header__value--username").val("")
        $("#header__get--avatar").val("")
        $("#header__value--email").val("")
        $("#header__value--phone").val("")
        $("#header__value--address").val("")
        $("#header__value--note").val("")

        $(buttonEdit).click(function () {
            let inputEditUsername = $('<input>')
            let inputEditAvatar = $('<label for="main__edit--avatar">CHOOSE AVATAR</label> <input type="file" accept="image/png, image/jpg" id="main__edit--avatar">')
            let inputEditEmail = $('<input placeholder="Ex: tabaphu0@gmail.com">')
            let inputEditPhone = $('<input type="number" placeholder="Ex: 0763853612">')
            let inputEditAddress = $('<input placeholder="Ex: Da Nang, Viet Nam">')
            let inputEditNote = $('<input placeholder="Ex: Hello...">')
            let buttonEditSave = $('<button>Save</button>')

            $(inputEditUsername).val($(pUsername).text())
            $(inputEditEmail).val($(pEmail).text())
            $(inputEditPhone).val($(pPhone).text())
            $(inputEditAddress).val($(pAddress).text())
            $(inputEditNote).val($(pNote).text())

            $(pUsername).html(inputEditUsername)
            $(divAvatar).html(inputEditAvatar)
            $(pEmail).html(inputEditEmail)
            $(pPhone).html(inputEditPhone)
            $(pAddress).html(inputEditAddress)
            $(pNote).html(inputEditNote)
            $(buttonEdit).css("display", "none")
            $(divButton).prepend(buttonEditSave)

            $(buttonEditSave).click(function () {
                let valueEditUsername = $(inputEditUsername).val()
                let valueEditAvatar = $("#main__edit--avatar").val()
                let valueEditEmail = $(inputEditEmail).val()
                let valueEditPhone = $(inputEditPhone).val()
                let valueEditAddress = $(inputEditAddress).val()
                let valueEditNote = $(inputEditNote).val()

                if (valueEditUsername == "") {
                    alert("Please enter username")
                } else if (valueEditAvatar == "") {
                    alert("Please enter avatar")
                } else if (valueEditEmail == "") {
                    alert("Please enter email")
                } else if (valueEditPhone == "") {
                    alert("Please enter phone")
                } else if (valueEditAddress == "") {
                    alert("Please enter address")
                } else {
                    $(pUsername).html(valueEditUsername)
                    $(imgAvatar).attr("src", `./images/${$("#main__edit--avatar").val().slice(12)}`)
                    $(divAvatar).html(imgAvatar)
                    $(pEmail).html(valueEditEmail)
                    $(pPhone).html(valueEditPhone)
                    $(pAddress).html(valueEditAddress)
                    $(pNote).html(valueEditNote)
                    $(buttonEditSave).remove()
                    $(buttonEdit).css("display", "block")
                }
            })
        })

        $(buttonDelete).click(function () {
            $(li).remove()
        })
    })
})