var icon = document.getElementById("icon") ;
var showBox = document.getElementById('popup-box') ;
var title = document.getElementById("title") ;
var description = document.getElementById("description") ;
var add = document.getElementById("add") ;
console.log(add.innerHTML)
var dataPro ;
var mood = "Add Note" ;
var tmp;
// add 
// Save LocalStorage 
if(localStorage.getItem("notes") != null ) {

    dataPro  = JSON.parse(localStorage.getItem("notes")) ;
}
 else {
    dataPro = [] ;
 }
add.onclick = function() {
    var data = {
        title : title.value,
        description:description.value,
    }
    if(mood === "Add Note") {
        dataPro.push(data) ;
    } else {

        dataPro[tmp] = data ;
        mood = "Add Note" ;
        add.innerHTML ="Add Note" ;

    }
    localStorage.setItem("notes" , JSON.stringify(dataPro)) ;
    ShowData(dataPro) ;
}

function ShowData(list) {
    var card = `` ;
    for(var i = 0 ; i < list.length ; i++) {
        card+=` 
         <div class=" col-md-4 col-xl-4 col-xl-4 ">
        <div class="card mt-5">
            <div class="card-body">
            <p class="fw-bold">${list[i].title}</p>
            <span>${list[i].description}</span>
            </div>
            
            <div class="card-footer">
            <button class="btn" onclick="updateData(${i})">Edit</button>
            <button class="btn" onclick="deleteData(${i})">Delete</button>
            </div>
        </div>
        </div>
        `;
    }
 document.getElementById("cardData").innerHTML = card ;
}
ShowData(dataPro) ;

// Delete 

function deleteData(i) {

dataPro.splice(i , 1) ;
localStorage.setItem("notes" , JSON.stringify(dataPro)) ;
ShowData(dataPro) ;
}

function updateData(i) {

    title.value = dataPro[i].title ;
    description.value  =dataPro[i].description ;
    showBox.style.visibility = "visible" ;
    mood = "Update Note" ;
    add.innerHTML = "Update Note" ;
    tmp = i ;
    }

icon.onclick = function() {
    showBox.style.visibility = "visible" ;
}
var close = document.getElementById("close") ;
close.onclick = function() {
    showBox.style.visibility = "hidden" ;
    
}  

// Search 
var submit = document.getElementById("submit") ;

function searchData(value) 
{
    var searchInputs = [] ;

    for(var i = 0 ; i < dataPro.length ; i++) {

        if(dataPro[i].title.toLowerCase().includes(value.toLowerCase()) == true) 
        {
            searchInputs.push(dataPro[i]) ;
        }
    }
    ShowData(searchInputs);
}
