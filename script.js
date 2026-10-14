function cancel(){
    $("#input").val("")
    sedangEdit = false
    teksDiedit = null
}

let sedangEdit = false
let teksDiedit = null

function simpan(){
    const teks = $("#input").val()

    if (teks.trim() !== ""){
        if (sedangEdit) {
            teksDiedit.text(teks)

            sedangEdit = false
            teksDiedit = null

        } else {
            const hasil = $("#hasil")
        
            const wadah = $("<div>")
            const divTeks = $("<p>")
            const divButton = $("<div>")
            const editButton = $("<button>")
            const deleteButton = $("<button>")
        
        
            wadah.addClass("border border-gray-300 w-full h-fit break-words rounded")
            divTeks.addClass("p-2")
            editButton.addClass("border border-yellow-700 bg-yellow-500 rounded p-1 mr-2")
            deleteButton.addClass("border border-red-700 bg-red-500 rounded p-1 text-white")
            divButton.addClass("border border-red-300 p-2 bg-red-100")
        
            divTeks.text(teks)
            editButton.text("Edit")
            deleteButton.text("Delete")
            
            divButton.append(editButton)
            divButton.append(deleteButton)
    
            wadah.append(divTeks)
            wadah.append(divButton)
            hasil.append(wadah)
    
            deleteButton.click(function(){
                wadah.remove()
            })
    
            editButton.click(function(){
                $("#input").val(divTeks.text())
    
                sedangEdit = true
                teksDiedit = divTeks
            })  
        }
    }

    $("#input").val("")
}




$("#cancel").click(function(){
    cancel()
})

$("#save").click(function(){
    simpan()
})