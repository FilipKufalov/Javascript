const alice = [
    { id: 1, name: "abbas", email: "abb@gmail.com" },
    { id: 2, name: "jhon", email: "hon@gmail.com" },
    { id: 3, name: "james", email: "hy@gmail.com" },
    { id: 4, name: "joseph", email: "jos@gmail.com" },
]

document.querySelector("#container").innerHTML = `
<table class="styled-table">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
    ${alice.map(e => `
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.email}</td>
  </tr>
  `).join('')}
  </table>`;
