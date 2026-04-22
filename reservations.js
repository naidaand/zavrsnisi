function addReservation() {
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  let user = firebase.auth().currentUser;

  if (!user) {
    alert("Nisi loginovan!");
    return;
  }

  let email = user.email;

  fetch("php/addReservation.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, service, date, time })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      alert("Rezervacija dodana!");
      loadReservations();
    } else {
      alert("Greška!");
    }
  });
}

function loadReservations() {
  fetch("php/getReservations.php")
    .then(res => res.json())
    .then(data => {
      let list = document.getElementById("list");
      list.innerHTML = "";

      data.forEach(r => {
        list.innerHTML += `
          <li>
            ${r.service} - ${r.date} ${r.time}
          </li>
        `;
      });
    });
}

loadReservations();