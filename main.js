const update = document.getElementsByClassName("update");

const updatePressed = (e) => {
  e.target.className = "read-update";
}

update[0].addEventListener("click", updatePressed);
