import { series } from './data.js';

const tableBody = document.querySelector("#seriesTable tbody");
const averageText = document.getElementById("averageText");
const seriesDetailCard = document.querySelector("#seriesDetailCard");

if (tableBody) {
    series.forEach((serie) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = serie.id.toString();
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = serie.titulo;
        row.appendChild(nameCell);

        const channelCell = document.createElement("td");
        channelCell.textContent = serie.plataforma;
        row.appendChild(channelCell);

        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = serie.numeroTemporadas.toString();
        row.appendChild(seasonsCell);

        tableBody.appendChild(row);

        row.addEventListener("click", () => {
            if (seriesDetailCard) {
                seriesDetailCard.innerHTML = `
                    <img src="${serie.imagen}" class="card-img-top mb-3" alt="${serie.titulo}" style="width: 100%; border-radius: 8px;">
                    <h5 class="card-title">${serie.titulo}</h5>
                    <p class="card-text">${serie.descripcion}</p>
                    <a href="${serie.link}" class="btn btn-primary" target="_blank">More info</a>
                `;
            }
        });
    });


    const totalSeries = series.length;
    const totalSeasons = series.reduce((total, serie) => total + serie.numeroTemporadas, 0);
    const averageSeasons = Math.round(totalSeasons / totalSeries);

    if (averageText) {
        averageText.textContent = `Seasons average: ${averageSeasons}`;
    }
}
