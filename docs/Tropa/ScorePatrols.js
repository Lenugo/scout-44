import React from "react";
import { scorePatrols } from "./utils";

const ScorePatrols = () => {
  const sortedPatrols = scorePatrols.patrols.sort((a, b) => b.score - a.score);

  const openInstagramAccount = (patrolAccount) => {
    window.open(`https://www.instagram.com/${patrolAccount}`, "_blank");
  };

  return (
    <div className="w-full md:w-4/5 mx-auto">
      <div className="flex justify-between mb-4 text-xl md:text-2xl font-bold">
        <span>Patrulla</span>
        <span>Puntos</span>
      </div>

      {sortedPatrols.map((x, index) => (
        <div key={x.name} className="flex justify-between">
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={() => openInstagramAccount(x.igAccount)}
          >
            <div className="mr-2 sm:mr-3">
              <img
                className="w-14 h-14 rounded-full"
                src={require(`${x.imgUri}`).default}
                width="50"
                height="50"
                alt={`Insignia de ${x.name}`}
              />
            </div>
            <div className="font-medium text-gray-800 dark:text-white capitalize hover:text-blue-600 dark:hover:text-blue-500">
              {x.name}
            </div>
            {index === 0 && <span className="text-yellow-500 ml-2">🥇</span>}
            {index === 1 && <span className="text-yellow-500 ml-2">🥈</span>}
            {index === 2 && <span className="text-yellow-500 ml-2">🥉</span>}
          </div>
          <span className="mr-2">{x.score}</span>
        </div>
      ))}

      <span className="block text-right w-full text-sm text-gray-500 italic">
        Actualizado por última vez: <strong>{scorePatrols.lastUpdated}</strong>
      </span>
    </div>
  );
};

export default ScorePatrols;
