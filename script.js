let add_btn = document.querySelector("#add_btn_menu");




add_btn.addEventListener("click", () => {
  let new_text_2 = document.querySelector("#pyt_dva").value;
  document.querySelector("#pyt_dva").value = "";

  if(new_text_2 == 'двоечник'){
    let new_text = document.querySelector("#add_name_menu").value;
    document.querySelector("#add_name_menu").value = "";
    let item_list = document.querySelector("#spisok");

    let new_item = document.createElement("div");
    new_item.setAttribute("class", "punkt");

    let item_text = document.createElement("h3");
    item_text.setAttribute("class","punkt_text")
    item_text.innerHTML = new_text;

    let item_btn = document.createElement("button");
    item_btn.setAttribute("id", "punkt_btn");
    item_btn.innerHTML = "Удалить";

    new_item.appendChild(item_text);
    new_item.appendChild(item_btn);
    item_list.appendChild(new_item);

    item_btn.addEventListener("click", () => {
      let parent = item_btn.parentNode;
      parent.parentNode.removeChild(parent)
    });
  };

  if(new_text_2 == 'отличник'){
    let new_text = document.querySelector("#add_name_menu").value;
    document.querySelector("#add_name_menu").value = "";
    let item_list = document.querySelector("#spisok_right");

    let new_item = document.createElement("div");
    new_item.setAttribute("class", "punkt");

    let item_text = document.createElement("h3");
    item_text.setAttribute("class","punkt_text")
    item_text.innerHTML = new_text;

    let item_btn = document.createElement("button");
    item_btn.setAttribute("id", "punkt_btn_right");
    item_btn.innerHTML = "Удалить";

    new_item.appendChild(item_text);
    new_item.appendChild(item_btn);
    item_list.appendChild(new_item);

    item_btn.addEventListener("click", () => {
      let parent = item_btn.parentNode;
      parent.parentNode.removeChild(parent)
    });
  };


});

let spisok = document.querySelector("#spisok");
let spisok_right = document.querySelector("#spisok_right");
function Zam(){
  spisok_right.appendChild(spisok.querySelector(".punkt"))
}
function Zam_2(){
  spisok.appendChild(spisok_right.querySelector(".punkt"))
}