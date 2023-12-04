let add_btn = document.querySelector("#send")

add_btn.addEventListener("click", () => {
  let new_text = document.querySelector("#sms").value;
  document.querySelector("#sms").value = "";

  let new_t = document.querySelector("#pol").value;
  document.querySelector("#pol").value = "";

  let item_list = document.querySelector("#block_button");

  let new_item = document.createElement("div");
  new_item.setAttribute("class", "button");

  let item_text = document.createElement("p");
  item_text.setAttribute("class", "text_1");
  let item_text_2 = document.createElement("p");
  item_text_2.setAttribute("class", "text_2");
  console.log(new_text);
  item_text_2.innerHTML = new_text;

  console.log(new_t);
  item_text.innerHTML = new_t;


  new_item.appendChild(item_text);
  new_item.appendChild(item_text_2);
  item_list.appendChild(new_item);
})