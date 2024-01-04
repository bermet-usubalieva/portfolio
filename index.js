
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger')
    const skills = document.getElementById('skillsLink')
    const portfolio = document.getElementById('portfolioLink')
    const video = document.getElementById('videoLink')
    const price = document.getElementById('priceLink')
    const contacts = document.getElementById('contactsLink')
    const winter = document.querySelector('.winter')
    const spring = document.querySelector('.spring')
    const summer = document.querySelector('.summer')
    const autumn = document.querySelector('.autumn')
    const winter_img = document.querySelector('.winter_img')
    const spring_img = document.querySelector('.spring_img')
    const autumn_img = document.querySelector('.autumn_img')
    const summer_img = document.querySelector('.summer_img')


    burger.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    skills.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    portfolio.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    video.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    price.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    contacts.addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open')
    })
    autumn.classList.add('act');

    winter.addEventListener('click', () => {
        winter.classList.toggle('act')
        spring.classList.remove('act')
        summer.classList.remove('act')
        autumn.classList.remove('act')

        winter_img.style.display = 'flex'
        spring_img.style.display = 'none'
        summer_img.style.display = 'none'
        autumn_img.style.display = 'none'
    })
    spring.addEventListener('click', () => {
        spring.classList.toggle('act')
        winter.classList.remove('act')
        summer.classList.remove('act')
        autumn.classList.remove('act')

        spring_img.style.display = 'flex'
        winter_img.style.display = 'none'
        summer_img.style.display = 'none'
        autumn_img.style.display = 'none'
    })
    summer.addEventListener('click', () => {
        summer.classList.toggle('act')
        winter.classList.remove('act')
        spring.classList.remove('act')
        autumn.classList.remove('act')

        summer_img.style.display = 'flex'
        winter_img.style.display = 'none'
        spring_img.style.display = 'none'
        autumn_img.style.display = 'none'
    })
    autumn.addEventListener('click', () => {
        autumn.classList.toggle('act')
        winter.classList.remove('act')
        spring.classList.remove('act')
        summer.classList.remove('act')

        autumn_img.style.display = 'flex'
        winter_img.style.display = 'none'
        spring_img.style.display = 'none'
        summer_img.style.display = 'none'
    })
})
