const areasGrid = document.getElementById("areasGrid");
const partnersBox = document.getElementById("areaPartners");
const companyBox = document.getElementById("companyDetail");

/* =========================
   CREAZIONE CARD AREE
========================= */

function renderAreas() {

    if (!areasGrid) return;

    areasGrid.innerHTML = "";

    areas.forEach(area => {

        const card = document.createElement("div");

        card.className = "competence-card";

        card.innerHTML = `

            <h3>${area.title}</h3>

            <ul>
                ${area.items
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

            <div class="responsabile">

                <strong>Responsabile:</strong><br>
                ${area.responsabile}

            </div>

            <div style="
                margin-top:20px;
                font-weight:700;
                color:#0f766e;
            ">

                Scopri i Partner →

            </div>

        `;

        card.addEventListener("click", () => {

            showArea(area);

        });

        areasGrid.appendChild(card);

    });

}

/* =========================
   PARTNER DELL'AREA
========================= */

function showArea(area) {

    if (!partnersBox) return;

    partnersBox.innerHTML = "";

    const title = document.createElement("h3");

    title.textContent =
        `Partner per ${area.title}`;

    title.style.marginBottom = "25px";

    partnersBox.appendChild(title);

    area.partners.forEach(partnerName => {

        const company =
            companies[partnerName];

        if (!company) return;

        const card =
            document.createElement("div");

        card.className =
            "brand-card";

        card.innerHTML = `

            <img
                src="${company.logo}"
                alt="${partnerName}"
            >

            <h4>
                ${partnerName}
            </h4>

        `;

        card.addEventListener("click", () => {

            showCompany(partnerName);

        });

        partnersBox.appendChild(card);

    });

    partnersBox.scrollIntoView({
        behavior: "smooth"
    });

}

/* =========================
   SCHEDA AZIENDA
========================= */

function showCompany(name) {

    if (!companyBox) return;

    const company =
        companies[name];

    if (!company) {

        companyBox.innerHTML = `
            <p>
                Azienda non trovata.
            </p>
        `;

        return;

    }

    companyBox.innerHTML = `

        <div class="company-header">

            <img
                src="${company.logo}"
                alt="${name}"
                class="company-logo"
            >

            <div>

                <h2>
                    ${name}
                </h2>

                <p>

                    <strong>Categoria:</strong>
                    ${company.category || "N/D"}

                </p>

            </div>

        </div>

        <br>

        <h3>
            Specializzazione
        </h3>

        <p>
            ${company.specializzazione || ""}
        </p>

        <br>

        <h3>
            Soluzioni
        </h3>

        <ul>

            ${(company.soluzioni || [])
                .map(item => `
                    <li>${item}</li>
                `)
                .join("")}

       
