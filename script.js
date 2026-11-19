const grid =
document.getElementById("partner-grid");

const searchInput =
document.getElementById("searchInput");

const areaFilter =
document.getElementById("areaFilter");

function renderPartners(list){

    grid.innerHTML = "";

    list.forEach(company => {

        const card =
        document.createElement("div");

        card.className =
        "partner-card";

        card.innerHTML = `

            <h3>
                ${company.name}
            </h3>

            <p>
                ${company.area}
            </p>

        `;

        grid.appendChild(card);

    });

}

function filterPartners(){

    const searchValue =
    searchInput.value
    .toLowerCase();

    const selectedArea =
    areaFilter.value;

    const filtered =
    companies.filter(company => {

        const matchName =
        company.name
        .toLowerCase()
        .includes(searchValue);

        const matchArea =

        selectedArea === ""

        ||

        company.area ===
        selectedArea;

        return (
            matchName &&
            matchArea
        );

    });

    renderPartners(filtered);

}

searchInput.addEventListener(
    "input",
    filterPartners
);

areaFilter.addEventListener(
    "change",
    filterPartners
);

renderPartners(companies);
