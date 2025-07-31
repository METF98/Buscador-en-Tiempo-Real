let buscador = document.getElementById("buscador").addEventListener("input", (e) => {
  let filtro = e.target.value.toUpperCase();
  let tr = document.querySelectorAll("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].querySelectorAll("td")[0];
    if (td) {
      let textValue = td.textContent;
      if (textValue.toUpperCase().indexOf(filtro) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})