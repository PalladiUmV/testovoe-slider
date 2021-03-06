import React from 'react'
import { FirstScreenAnimation } from './FirstScreenAnimation'
import btn from '../../img/screen_1/btn.png'
import './firstScreen.scss'

export const FirstScreen = ({ moveRight }) => {
	return (
		<div className="slider__item firstScreen">
			<div className="firstScreen__title">
				Привет,
			</div>
			<div className="firstScreen__text">
				это <span>не</span> коммерческое задание
				<button type="button" className="firstScreen__button" onClick={moveRight}>
					<img className="firstScreen__button__img" src={btn} alt="btn" />
				</button>
			</div>
			<FirstScreenAnimation />
		</div>
	)
}
