
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
        if (!winter.classList.contains('act')) {
            winter.classList.toggle('act');
            spring.classList.remove('act');
            summer.classList.remove('act');
            autumn.classList.remove('act');

            winter_img.style.display = 'flex';
            spring_img.style.display = 'none';
            summer_img.style.display = 'none';
            autumn_img.style.display = 'none';
        }
    })
    spring.addEventListener('click', () => {
        if (!spring.classList.contains('act')) {
            spring.classList.toggle('act')
            winter.classList.remove('act')
            summer.classList.remove('act')
            autumn.classList.remove('act')

            spring_img.style.display = 'flex'
            winter_img.style.display = 'none'
            summer_img.style.display = 'none'
            autumn_img.style.display = 'none'
        }
    })
    summer.addEventListener('click', () => {
        if (!summer.classList.contains('act')) {
            summer.classList.toggle('act')
            winter.classList.remove('act')
            spring.classList.remove('act')
            autumn.classList.remove('act')

            summer_img.style.display = 'flex'
            winter_img.style.display = 'none'
            spring_img.style.display = 'none'
            autumn_img.style.display = 'none'
        }
    })
    autumn.addEventListener('click', () => {
        if (!autumn.classList.contains('act')) {
            autumn.classList.toggle('act')
            winter.classList.remove('act')
            spring.classList.remove('act')
            summer.classList.remove('act')

            autumn_img.style.display = 'flex'
            winter_img.style.display = 'none'
            spring_img.style.display = 'none'
            summer_img.style.display = 'none'
        }
    })
    const allLang = ['en', 'ru']
    let currentLang = 'en'
    const langButtons = document.querySelectorAll("[data-btn]")
    const currentPathName = window.location.pathname
    let currentText = {}


    const langArr = {
        "skillsHed": {
            "en": "Skills",
            "ru": "Навыки",
        },
        "portfolioHed": {
            "en": "Portfolio",
            "ru": "Портфолио",
        },
        "videoHed": {
            "en": "Video",
            "ru": "Видео",
        },
        "priceHed": {
            "en": "Price",
            "ru": "Цена",
        },
        "contactsHed": {
            "en": "Contacts",
            "ru": "Контакты",
        },
        "skillLang": {
            "en": "Skills",
            "ru": "Навыки",
        },
        "portfolioLang": {
            "en": "Portfolio",
            "ru": "Портфолио",
        },
        "videoLang": {
            "en": "Video",
            "ru": "Видео",
        },
        "priceLang": {
            "en": "Price",
            "ru": "Цена",
        },
        "contactsLang": {
            "en": "Contacts",
            "ru": "Контакты",
        },
        "hero_name_lang": {
            "en": "Alexa Rise",
            "ru": "Алекса Райз",
        },
        "hero_text_lang": {
            "en": "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
            "ru": "Сохраните искренние эмоции, романтические чувства и счастливые моменты жизни вместе с профессиональным фотографом Алексой Райз",
        },
        "hero_button_lang": {
            "en": "Hire me",
            "ru": "Найми меня",
        },
        "skills": {
            "en": "Skills",
            "ru": "Навыки",
        },
        "digital_photo_title_lang": {
            "en": "Digital photography",
            "ru": "Цифровая фотография",
        },
        "digital_photo_text_lang": {
            "en": "High-quality photos in the studio and on the nature",
            "ru": "Качественные фотографии в студии и на природе.",
        },
        "video_shooting_title_lang": {
            "en": "Video shooting",
            "ru": "Видеосъемка",
        },
        "video_shooting_text_lang": {
            "en": "Capture your moments so that they always stay with you",
            "ru": "Сохраняйте свои моменты, чтобы они всегда оставались с вами",
        },
        "retouch_title_lang": {
            "en": "Retouch",
            "ru": "Ретушь",
        },
        "retouch_text_lang": {
            "en": "I strive to make photography surpass reality",
            "ru": "Я стремлюсь сделать фотографию превосходящей реальность",
        },
        "audio_title_lang": {
            "en": "Audio",
            "ru": "Аудио",
        },
        "audio_text_lang": {
            "en": "Professional sounds recording for video, advertising, portfolio",
            "ru": "Профессиональная запись звука для видео, рекламы, портфолио.",
        },
        "winter": {
            "en": "winter",
            "ru": "зима",
        },
        "spring": {
            "en": "spring",
            "ru": "весна",
        },
        "summer": {
            "en": "summer",
            "ru": "лето",
        },
        "autumn": {
            "en": "autumn",
            "ru": "осень",
        },
        "video": {
            "en": "Video",
            "ru": "Видео",
        },
        "price": {
            "en": "Price",
            "ru": "Цена",
        },
        "standart_title_lang": {
            "en": "Standard",
            "ru": "Стандартный",
        },
        "standart_text_lang1": {
            "en": "One location",
            "ru": "Одно место",
        },
        "standart_text_lang2": {
            "en": "120 photos in color",
            "ru": "120 цветных фотографий",
        },
        "standart_text_lang3": {
            "en": "12 photos in retouch",
            "ru": "12 фотографий в ретуши",
        },
        "standart_text_lang4": {
            "en": "Readiness 2-3 weeks",
            "ru": "Готовность 2-3 недели",
        },
        "standart_text_lang5": {
            "en": "Make up, visage",
            "ru": "Макияж, визаж",
        },
        "price_button_lang": {
            "en": "Order shooting",
            "ru": "Заказать съемку",
        },
        "premium_price_lang": {
            "en": "Premium",
            "ru": "Премиум",
        },
        "premium_text_lang1": {
            "en": "One or two locations",
            "ru": "Одно или два места",
        },
        "premium_text_lang2": {
            "en": "200 photos in color",
            "ru": "200 цветных фотографий",
        },
        "premium_text_lang3": {
            "en": "20 photos in retouch",
            "ru": "20 фотографий в ретуши",
        },
        "premium_text_lang4": {
            "en": "Readiness 1-2 weeks",
            "ru": "Готовность 1-2 недели",
        },
        "premium_text_lang5": {
            "en": "Make up, visage",
            "ru": "Макияж, визаж",
        },

        "price_button_lang2": {
            "en": "Order shooting",
            "ru": "Заказать съемку",
        },
        "gold_title_lang": {
            "en": "Gold",
            "ru": "Золото",
        },
        "gold_text_lang1": {
            "en": "Three locations or more",
            "ru": "Три локации и более",
        },
        "gold_text_lang2": {
            "en": "300 photos in color",
            "ru": "300 цветных фотографий",
        },
        "gold_text_lang3": {
            "en": "50 photos in retouch",
            "ru": "50 фотографий в ретуши",
        },
        "gold_text_lang4": {
            "en": "Readiness 1 weeks",
            "ru": "Готовность 1 неделя",
        },
        "gold_text_lang5": {
            "en": "Make up, visage",
            "ru": "Макияж, визаж",
        },
        "price_button_lang3": {
            "en": "Order shooting",
            "ru": "Заказать съемку",
        },
        "legend_lang": {
            "en": "Contact me",
            "ru": "Свяжитесь со мной",
        },
        "email_lang": {
            "en": "E-mail",
            "ru": "Электронная почта",
        },
        "tel_lang": {
            "en": "Phone",
            "ru": "Телефон",
        },
        "textarea_lang": {
            "en": "Message",
            "ru": "Сообщение",
        },
        "form_button_lang": {
            "en": "Send message",
            "ru": "Отправить",
        },
        "footer_name_lang": {
            "en": "Bermet Usubalieva",
            "ru": "Бермет Усубалиева",
        },

    }


    function checkPagePathName() {
        switch (currentPathName) {
            case '/index.html':
                currentText = langArr
                break;

            default:
                currentText = langArr
                break;
        }
    }
    checkPagePathName()

    function changeLang() {
        for (const key in currentText) {
            const elem = document.querySelector(`[data-lang=${key}]`)
            if (elem) {
                elem.textContent = currentText[key][currentLang]
            }
        }
    }
    changeLang()

    langButtons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            currentLang = event.target.dataset.btn
            resetActiveClass(langButtons, 'header_btn_active')
            btn.classList.add('header_btn_active')
            changeLang()
        })
    })

    function resetActiveClass(arr, activeClass) {
        arr.forEach(elem => {
            elem.classList.remove(activeClass)
        })
    }
})


