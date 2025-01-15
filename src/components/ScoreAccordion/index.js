import React from "react";

const ScoreAccordion = ({ year, scores = [] }) => {
  return (
    <details>
      <summary>
        <strong>{year}</strong>
      </summary>
      <p>Puntuación histórica acumulada durante todo el año {year}.</p>
      <h4>Puntaje</h4>
      <ol>
        {scores.map((score) => {
          return (
            <li key={score?.total}>
              Patrulla {score?.patrol ?? ""}:{" "}
              <strong>{score?.total ?? ""}</strong>
            </li>
          );
        })}
      </ol>
    </details>
  );
};

export default ScoreAccordion;
