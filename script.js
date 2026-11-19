const grid =
document.getElementById("partner-grid");

companies.forEach(company => {

    const card =
    document.createElement("div");

    card.className =
    "partner-card";

    card.innerHTML = `

        <h3>${company.name}</h3>

        <p>${company.area}</p>

    `;

    grid.appendChild(card);

});
