import { useEffect, useState } from 'react';
import './App.css';
import cards from './Utils/cards';

function App() {
	const [cardsState, setCardsState] = useState(shuffleArray(cards));
	const [currentScore, setCurrentScore] = useState(0);
	const [personalBest, setPersonalBest] = useState(0);

	function resetGame() {
		setPersonalBest(currentScore);
		setCurrentScore(0);
		setCardsState(shuffleArray(cards));
	}

	function clickedCard(e) {
		const { id } = e.currentTarget;
		if (cardsState.find((item) => item.id === id).clicked) {
			resetGame();
			return;
		}
		setCardsState((prevState) => {
			const newState = prevState.map((item) => {
				if (item.id === id) {
					return { ...item, clicked: true };
				}
				return item;
			});
			return newState;
		});
		setCurrentScore(currentScore + 1);
	}

	function shuffleArray(arr) {
		let i = arr.length;
		let r;
		while (i !== 0) {
			r = Math.floor(Math.random() * i);
			i--;
			[arr[i], arr[r]] = [arr[r], arr[i]];
		}
		return arr;
	}

	useEffect(() => {
		setCardsState(shuffleArray(cardsState));
	}, [cardsState]);

	const cardsDisplay = cardsState.map((item) => {
		return (
			<div
				key={item.id}
				id={item.id}
				className='card'
				onClick={clickedCard}
			>
				<img src='' alt='' />
				<p>{item.id}</p>
			</div>
		);
	});

	return (
		<div>
			<div>Personal Best: {personalBest}</div>
			<div>Current Score: {currentScore}</div>
			<div className='cardsContainer'>{cardsDisplay}</div>
		</div>
	);
}

export default App;
