/**
 * scorePatrols
 * to use for update the score week by week
 */
export const scorePatrols = {
  lastUpdated: "9/2/2025", // TODO: date time format {d/m/yyyy}
  patrols: [
    {
      name: "Patrulla lobo",
      igAccount: "patrullalobo44",
      imgUri: "./img/lobo-badge.png",
      score: 1157,
    },
    {
      name: "Patrulla ardilla",
      igAccount: "patullaardilla44",
      imgUri: "./img/ardilla-badge.png",
      score: 899,
    },
    {
      name: "Patrulla cuervo",
      igAccount: "patrullacuervo_gs44",
      imgUri: "./img/cuervo-badge.png",
      score: 513,
    },
    {
      name: "Patrulla liebre",
      igAccount: "patrullaliebre44",
      imgUri: "./img/liebre-badge.png",
      score: 433,
    },
    {
      name: "Patrulla toro",
      igAccount: "patrulla_toro44",
      imgUri: "./img/toro-badge.png",
      score: 1112,
    },
  ],
};

/**
 * accScore2024
 * Accumulated score during 2024
 */
export const accScore2024 = [
  { patrol: "Lobo", total: 737 },
  { patrol: "Toro", total: 510 },
  { patrol: "Cuervo", total: 358 },
  { patrol: "Liebre", total: 322 },
  { patrol: "Ardilla", total: 256 },
];
