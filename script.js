const writeBox = document.querySelector("#write");
const intro = document.querySelector("#content");
const save_button = document.querySelector("#save");
const texttarea = document.querySelector("textarea");
const updateBox = document.querySelector("#box-for-save-note");
let body = document.querySelector("body");
// let theme = document.querySelector("#menu");


let welcome_button = document.querySelector("#welcome_button");
let akl = document.querySelector("#this_is_responsive")
// let element = document.querySelector("#element");
// let welcome_page = document.querySelector("#welcome_page");

welcome_button.addEventListener("click", () => {
    welcome_page.style.display = "none";
    akl.style.display = "block";

});





updateBox.innerHTML = localStorage.getItem("saveme");



let bb = document.querySelectorAll(".delete_button_design ");
for (let i = 0; i < bb.length; i++) {
    bb[i].addEventListener("click", () => {
        bb[i].parentElement.classList.add("exit");
        setTimeout(() => {
            bb[i].parentElement.remove();
            localStorage.setItem("saveme", updateBox.innerHTML);
        }, 200
        );

    });
}




// let gettingTheme = localStorage.getItem("mytheme")
// if (gettingTheme === "mycolordark") {
//     body.classList.add("dark-mode");
//     theme.innerHTML = "Light";
// }
// else {
//     theme.innerHTML = "Dark";
// }










// theme.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//         theme.innerHTML = "Light";
//         localStorage.setItem("mytheme", "mycolordark");
//     }
//     else {
//         theme.innerHTML = "Dark";
//         localStorage.setItem("mytheme", "mycolorlight");
//     }

// });







function new_note() {
    writeBox.classList.remove("t");
    intro.classList.remove("forContent");
    writeBox.classList.add("text_area_animation");
    writeBox.style.display = "flex";
    writeBox.classList.add("text_area_center");
    intro.style.display = "none";
    updateBox.style.display = "none";
}

function close_note() {
    writeBox.classList.remove("text_area_animation");
    writeBox.classList.add("t");
    setTimeout(
        function () {

            writeBox.style.display = "none";
        }, 5
    )
    intro.classList.add("forContent");
    updateBox.style.display = "none";
    intro.style.display = "flex";
}

function saving() {
    if (texttarea.value.trim() === "") {
        alert("Text Area Can't Be Empty");
    }
    else {
        writeBox.style.display = "none";
        intro.style.display = "none";
        updateBox.style.display = "flex";
        let update = document.createElement("div");
        updateBox.append(update);
        update.innerText = texttarea.value;
        update.classList.add("update");
        texttarea.value = "";




        let delete_update_box = document.createElement("button");

        update.append(delete_update_box);
        delete_update_box.textContent = "Delete";
        delete_update_box.classList.add("delete_button_design");
        delete_update_box.addEventListener("click", () => {
            update.classList.add("exit");
            setTimeout(() => {
                update.remove();
                localStorage.setItem("saveme", updateBox.innerHTML);
            }, 200
            );

        }

        );

        let date = document.createElement("div");
        date.classList.add("date_class");
        date.textContent = new Date().toLocaleString();
        update.append(date);

        localStorage.setItem("saveme", updateBox.innerHTML);


    }
}

function mysavenotes() {
    let xxz = document.querySelector(".update");
    if (xxz) {
        writeBox.style.display = "none";
        intro.style.display = "none";
        updateBox.style.display = "flex";
    }
    else {
        alert("No Notes Exist.");
    }
}
