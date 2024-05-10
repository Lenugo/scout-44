import React from 'react'
import { patrols } from './utils';
import { useState } from 'react';
import { useEffect } from 'react';

const ScorePatrols = () => {
	const [lastUpdated, setLastUpdated] = useState(getFormattedDate());
	const sortedPatrols = patrols.sort((a, b) => b.score - a.score);

  function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const formattedDate = getFormattedDate();
    setLastUpdated(formattedDate);
  }, [sortedPatrols]);

	return (
		<div className='w-full md:w-4/5 mx-auto'>
			<div className='flex justify-between mb-4 text-xl md:text-2xl font-bold'>
				<span>Patrulla</span>
				<span>Puntos</span>
			</div>

			{sortedPatrols.map((x, index) => (
				<div key={x.name} className='flex justify-between'>
					<div className='flex items-center'>
						<div className='mr-2 sm:mr-3'>
							<img
								className='w-14 h-14 rounded-full'
								src={require(`${x.imgUri}`).default}
								width='50'
								height='50'
								alt={`Insignia de ${x.name}`}
							/>
						</div>
						<div className='font-medium text-gray-800 dark:text-white capitalize'>{x.name}</div>
						{index === 0 && <span className="text-yellow-500 ml-2">🥇</span>}
            {index === 1 && <span className="text-yellow-500 ml-2">🥈</span>}
            {index === 2 && <span className="text-yellow-500 ml-2">🥉</span>}
					</div>
					<span className='mr-2'>{x.score}</span>
				</div>
			))}

			<span className='block text-right w-full text-sm text-gray-500 italic'>Actualizado por última vez: <strong>{lastUpdated}</strong></span>
		</div>
	)
}

export default ScorePatrols
