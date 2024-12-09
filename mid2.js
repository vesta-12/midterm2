// СЛАЙДЫ НА БАННЕРЕ
let currentSlide = 0;
// делаем коллекцию элементов для с классом слайд
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Функция для отображения текущего слайда
function showSlide(index) {
    //перебираем все слайды, добавляем класс актив слайду и удаляем его у остальных
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Функция для автоматической смены слайдов
function changeSlide() {
    //Использует модуль (%), чтобы вернуться к началу после последнего слайда.
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Добавление событий для клика по точкам
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Чтобы первый слайд при загрузке страницы показывался
showSlide(currentSlide);

// Автоматическая смена слайдов каждые 5 секунд
setInterval(changeSlide, 6000);


// ФИЛЬМЫ
const movies = [
    { title: "Убить Билла", rating: "8.7", img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66013e9095d4e1136bdaed09_660142851c3bb52e4602639f/scale_1200", description: '«Убить Билла» - в беременную наёмную убийцу по кличке Чёрная Мамба во время бракосочетания стреляет человек по имени Билл. Но голова у женщины оказалась крепкой — пролежав четыре года в коме, бывшая невеста приходит в себя. ' },
    { title: "Интерстеллар", rating: "8.5", img: "https://i.pinimg.com/originals/b7/64/9f/b7649ff8ae5532cfe22a321da8ee79b6.jpg", description: '«Интерстеллар» - когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь кротовую нору искать новый дом для людей.' },
    { title: "Бесславные ублюдки", rating: "9.0", img: "https://m.media-amazon.com/images/M/MV5BMjIxNTE5MjEzM15BMl5BanBnXkFtZTgwMDgyNzk3MTI@._V1_.jpg", description: '«Бесславные ублюдки» - вторая мировая война. В оккупированной немцами Франции группа американских солдат-евреев наводит страх на нацистов, жестоко убивая и скальпируя солдат.' },
    { title: "Турист", rating: "6.9", img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b4602200-eb60-4f47-b259-84d7d32985f5/1920x", description: '«Турист» - американский турист Фрэнк приезжает в Италию, чтобы залечить душевную рану. В Венеции он знакомится с необычной женщиной по имени Элиза. Израненное сердце, похоже, готово сдаться новой возлюбленной. ' },
    { title: "На сранных берегах", rating: "7.3", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/12/06/19/POTC-Disney.jpg", description: '«На странных берегах» - капитану Джеку Воробью предстоит столкнуться с женщиной из своего прошлого Анжеликой. Она вынуждает его взойти на корабль «Месть Королевы Анны», которым управляет коварный злодей Черная Борода. ' },
    { title: "Молчание ягнят", rating: "8.3", img: "https://cdn.vox-cdn.com/thumbor/HGtlsTa_kzpgK7ubGoxa4y8g1gA=/0x0:1471x827/1200x800/filters:focal(619x297:853x531)/cdn.vox-cdn.com/uploads/chorus_image/image/70917356/_.0.jpg", description: '«Молчание ягнят» - психопат похищает и убивает молодых женщин по всему Среднему Западу. ФБР, уверенное, что все преступления совершены одним и тем же человеком, поручает агенту Клариссе Старлинг встретиться с заключенным-маньяком Ганнибалом Лектером.' },
    { title: "Пианист", rating: "8.0", img: "https://i.pinimg.com/originals/59/43/f3/5943f3b8236bd96770f3537cd82aad4d.jpg", description: '«Пианист» - фильм снят по автобиографии Владислава Шпильмана, одного из лучших пианистов Польши 30-х годов прошлого века. Главный герой фильма — Владек — занимается искусством до тех пор, пока территорию Польши не занимают нацисты.' },
    { title: "Гладиатор", rating: "8.6", img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b5094b6c-ccda-4b05-90a5-23bd1a4a8035/1920x", description: '«Гладиатор» - римская империя. Бесстрашного и благородного генерала Максимуса боготворят солдаты, а старый император Марк Аврелий безгранично доверяет ему и относится как к сыну.' },
    { title: "Солнцестояние", rating: "7.1", img: "https://assets.vogue.com/photos/5d5ea31cbb9d1b0008070479/master/w_2560%2Cc_limit/03-cult-films-summer-a24.jpg", description: '«Солнцестояние» - день летнего солнцестояния — древний праздник, который во всех культурах окутан мистическим ореолом. В отрезанном от цивилизованного мира шведском поселении в этот день проводятся уникальные обряды с многовековой традицией. '},
];

const cinemaTrack = document.querySelector('.cinema-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Генерация фильмов
movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('cinema-movie');
    movieDiv.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div class="title">${movie.title}</div>
        <div class="rating">${movie.rating}</div>
        <div class="buttons">
            <button class="details-btn">Сведения</button>
            <button class="reserve-btn">Забронировать</button>
        </div>
        <div class="description hidden">${movie.description}</div>
    `;
    cinemaTrack.appendChild(movieDiv);
});

// Управление слайдером
function updateSlider() {
    cinemaTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < Math.ceil(movies.length / 3) - 1) {
        currentIndex += 1;
        updateSlider();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
        const movieDiv = e.target.closest('.cinema-movie');
        const description = movieDiv.querySelector('.description');
        description.classList.toggle('hidden');
    }
});


// ТЕАТР
const performance = [
    { title: "Гамлет", rating: "9.2", img: "https://avatars.mds.yandex.net/i?id=857780f09f6cc15c5dad094483d94abf_l-4033630-images-thumbs&n=13", description: '«Гамлет» - классическая трагедия о принце, который мстит за убийство своего отца.' },
    { title: "Макбет", rating: "9.0", img: "https://theatreman.ru/upload/iblock/8ba/318pen1fddcoo0repgnrpcn1ys5fo4ze/%D0%BC%D0%B0%D0%BA%D0%B1%D0%B5%D1%821.jpg", description: '«Макбет» - история о том, как амбиции и зло ведут к разрушению человека, его семьи и государства.' },
    { title: "Ромео и Джульетта", rating: "9.5", img: "https://avatars.mds.yandex.net/i?id=645843726dfc97537fbbd53cfc210251_l-5652956-images-thumbs&n=13", description: '«Ромео и Джульетта» - история трагической любви двух молодых людей из враждующих семей Вероны.' },
    { title: "Король Лир", rating: "9.3", img: "https://avatars.mds.yandex.net/i?id=c0c9e4d3f6067aafb50820bf6eedf0ec_l-5235635-images-thumbs&n=13", description: '«Король Лир» - драма о стареющем короле, который делит своё королевство между дочерьми, но в итоге сталкивается с предательством и разорением.' },
    { title: "Чайка", rating: "8.8", img: "https://cdn.culture.ru/images/0a685f85-8e4a-5662-9e9e-53c45f5260d9", description: '«Чайка» - психологическая драма о любви и разочарованиях, о поисках счастья и признания.' },
    { title: "Тартюф", rating: "9.0", img: "https://avatars.mds.yandex.net/get-afishanew/28638/1baa30f1f625c0b5832832612193050d/960x690_noncrop", description: '«Тартюф» - комедия Мольера, в которой главный герой, лицемерный Тартюф, манипулирует людьми, чтобы получить их богатства.' },
    { title: "Вишнёвый сад", rating: "9.1", img: "https://avatars.dzeninfra.ru/get-zen_doc/3952637/pub_5f7b755048a2900c431131a0_5f7b7a80952c3b370e81891d/scale_1200", description: '«Вишнёвый сад» - драма о разорении дворянского рода и изменениях в российском обществе, которые происходят в начале XX века.' },
    { title: "Антигона", rating: "8.9", img: "https://cdn.culture.ru/images/cb283b98-0947-5057-9627-7672db8518cf", description: '«Антигона» - трагедия о том, как человек должен бороться с законами государства и следовать своим моральным убеждениям.' },
    { title: "Дон Жуан", rating: "8.7", img: "https://cdn.culture.ru/c/794756.jpg", description: '«Дон Жуан» - комедия о легендарном соблазнителе Дон Жуане, который осмеливается бросать вызов обществу и религии.' }
];

const theatreTrack = document.querySelector('.theatre-track');
const prevBtnT = document.querySelector('.prev-btn-t');
const nextBtnT = document.querySelector('.next-btn-t');
let currentIndexT = 0;

// Генерация театральных постановок
performance.forEach(show => {
    const showDiv = document.createElement('div');
    showDiv.classList.add('cinema-movie'); // Используем тот же класс для стилизации
    showDiv.innerHTML = `
        <img src="${show.img}" alt="${show.title}">
        <div class="title">${show.title}</div>
        <div class="rating">${show.rating}</div>
        <div class="buttons">
            <button class="details-btn">Сведения</button>
            <button class="reserve-btn">Забронировать</button>
        </div>
        <div class="description hidden">${show.description}</div>
    `;
    theatreTrack.appendChild(showDiv);
});

// Управление слайдером
function updateSliderT() {
    theatreTrack.style.transform = `translateX(-${currentIndexT * 100}%)`;
}

prevBtnT.addEventListener('click', () => {
    if (currentIndexT > 0) {
        currentIndexT -= 1;
        updateSliderT();
    }
});

nextBtnT.addEventListener('click', () => {
    if (currentIndexT < Math.ceil(performance.length / 3) - 1) {
        currentIndexT += 1;
        updateSliderT();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
        const showDiv = e.target.closest('.theatre-performance');
        const description = showDiv.querySelector('.description');
        description.classList.toggle('hidden');
    }
});


// КОНЦЕРТЫ
const stars = [
    { title: "Coldplay", rating: "9.8", img: "https://avatars.mds.yandex.net/i?id=30ec2f3fc45e1d9b79baef2965875439_l-5886829-images-thumbs&n=13", description: 'Невероятное шоу с волшебной атмосферой от одной из лучших групп мира.' },
    { title: "Imagine Dragons", rating: "9.6", img: "https://avatars.mds.yandex.net/i?id=8fdca8d6d031489925856da691c3a3e1_l-5232627-images-thumbs&n=13", description: 'Энергичный концерт с хитами, которые заставят каждого танцевать.' },
    { title: "Beyoncé", rating: "9.9", img: "https://avatars.mds.yandex.net/i?id=8a2248f01547ac443b5ce3aec6416e7f_l-5326406-images-thumbs&n=13", description: 'Захватывающее шоу с мощным вокалом и впечатляющими танцами.' },
    { title: "Ed Sheeran", rating: "9.7", img: "https://i.pinimg.com/736x/33/d3/3c/33d33c7f012783ab21af261a55a2cd7c.jpg", description: 'Теплая и интимная атмосфера с невероятным голосом Эда.' },
    { title: "The Weekend", rating: "9.5", img: "https://ticketon.kz/files/media/40600u55201_mirovoy-tur-the-weeknd-2023dsvsd5v4s98d789.jpg", description: 'Магия R&B в сочетании с яркими визуальными эффектами.' },
    { title: "Taylor Swift", rating: "9.8", img: "https://www.rollingstone.com/wp-content/uploads/2023/11/taylor-swift-1989-chart.jpg?w=1600&h=900&crop=1", description: 'Феноменальное шоу от одной из самых популярных артисток мира.' },
    { title: "Post Malone", rating: "9.4", img: "https://avatars.mds.yandex.net/i?id=7d79102a5db5515155250270a2cbbd53_l-4568486-images-thumbs&n=13", description: 'Искренние выступления с душевной музыкой.' },
    { title: "Adele", rating: "9.9", img: "https://s.yimg.com/ny/api/res/1.2/JGxTekm1gOQ5_bBhshgTdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-11/1f189ae0-47bd-11ec-be7e-b8348fedc6a9", description: 'Трогательные баллады и мощный голос.' },
    { title: "Harry Styles", rating: "9.6", img: "https://i.pinimg.com/originals/4f/b2/4f/4fb24f23614dca8a93f296e1af460dfb.jpg", description: 'Смесь энергии и харизмы, которая покоряет сердца.' }
];

const concertTrack = document.querySelector('.concert-track');
const prevBtnC = document.querySelector('.prev-btn-c');
const nextBtnC = document.querySelector('.next-btn-c');
let currentIndexC = 0;

// Генерация концертов
stars.forEach(star => {
    const conDiv = document.createElement('div');
    conDiv.classList.add('cinema-movie');
    conDiv.innerHTML = `
        <img src="${star.img}" alt="${star.title}">
        <div class="title">${star.title}</div>
        <div class="rating">${star.rating}</div>
        <div class="buttons">
            <button class="details-btn">Сведения</button>
            <button class="reserve-btn">Забронировать</button>
        </div>
        <div class="description hidden">${star.description}</div>
    `;
    concertTrack.appendChild(conDiv);
});

// Управление слайдером
function updateSliderC() {
    concertTrack.style.transform = `translateX(-${currentIndexC * 100}%)`; // Исправлено currentIndexT на currentIndexC
}

prevBtnC.addEventListener('click', () => {
    if (currentIndexC > 0) {
        currentIndexC -= 1;
        updateSliderC();
    }
});

nextBtnC.addEventListener('click', () => {
    if (currentIndexC < Math.ceil(stars.length / 3) - 1) {
        currentIndexC += 1;
        updateSliderC();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('details-btn')) {
        const conDiv = e.target.closest('.concert-star');
        const description = conDiv.querySelector('.description');
        description.classList.toggle('hidden');
    }
});


// ФОРМА
// Ссылка на форму
const modalForm = document.getElementById('bookingModal');
const closeBtn = document.querySelector('.close-btn');
const successMessage = document.getElementById('success-message');
const messageText = document.getElementById('message-text');
let bookings = []; // Массив для хранения данных о брони

// Открытие модального окна
document.querySelectorAll('.reserve-btn').forEach(button => {
    // делаем его видимым
    button.addEventListener('click', () => {
        modalForm.style.display = 'flex';
    });
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modalForm.style.display = 'none';
});

// Валидация и обработка формы
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    //чтобы не отправлять данные на сервер, а обработать на стороне клиента
    e.preventDefault();

    // Считываем значения из формы
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const tickets = parseInt(document.getElementById('tickets').value);

    // Условия для данных
    if (!firstName || !lastName || !date || !phone || !email || !age || !tickets) {
        console.log('Ошибка: не все поля заполнены.');
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Пожалуйста, введите действующий email.');
        console.log('Ошибка: некорректный email.');
        return;
    }

    if (isNaN(age) || age < 0 || age > 120) {
        alert('Введите корректный возраст!');
        return;
    }

    if (isNaN(tickets) || tickets < 1) {
        alert('Введите корректное количество билетов!');
        return;
    }

    // Сохраняем данные в массив
    bookings.push({ firstName, lastName, date, phone, email, age, tickets });
    console.log('Текущие брони:', bookings);

    // Показываем всплывающее сообщение
    messageText.textContent = `Вы успешно забронировали ${tickets} билетов! Следуйте инструкциям на почте для того, чтобы выбрать доступное время и произвести оплату.`;
    successMessage.style.display = 'block';

    // Прячем модальное окно и сбрасываем форму
    modalForm.style.display = 'none';
    e.target.reset();

    // Убираем всплывающее сообщение через 3 секунды
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});


// КОРЗИНА БИЛЕТОВ
const cart = []; // Массив забронированных билетов
const cartList = document.getElementById('cart-list');
const emptyCartMessage = document.getElementById('empty-cart-message');

// Функция для обновления корзины
function updateCart() {
    cartList.innerHTML = ''; // Очищаем список
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartList.classList.add('hidden');
    } else {
        emptyCartMessage.style.display = 'none';
        cartList.classList.remove('hidden');
        cart.forEach(ticket => {
            const li = document.createElement('li');
            li.textContent = `Место: ${ticket.place}, Количество билетов: ${ticket.tickets}`;
            cartList.appendChild(li);
        });
    }
}

// Пример добавления билетов в корзину (добавляется при бронировании)
document.querySelectorAll('.reserve-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Пример данных для бронирования
        const place = button.closest('.cinema-movie').querySelector('img').alt;
        const tickets = Math.floor(Math.random() * 5) + 1;
        cart.push({ place, tickets }); // Добавляем в корзину
        updateCart(); // Обновляем отображение
    });
});

// Инициализация корзины
updateCart();

