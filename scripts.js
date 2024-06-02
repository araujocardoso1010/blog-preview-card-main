const card = document.querySelector('.card')
const title = document.querySelector('.content__title')

title.addEventListener('mouseover', () => card.classList.add('card--expand'))
title.addEventListener('mouseout', () => card.classList.remove('card--expand'))