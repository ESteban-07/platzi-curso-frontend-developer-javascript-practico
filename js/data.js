const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const productList = [];

productList.push({
    id: 1,
    name: 'Boys Jacket',
    price: formatter.format(400),
    category: 'clothes',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81C9fV8uUXL._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91z0-LdFQ8L._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71WRM+90SWL._AC_UL1202_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 2,
    name: 'Boys Black Jacket',
    price: formatter.format(450),
    category: 'clothes',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71ulCbhWZzL._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81t0DyeZpNL._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81vuTAVQssL._AC_UL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 3,
    name: `Red Cap`,
    price: formatter.format(300),
    category: 'clothes',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/914sHd2vssL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91Ec71sPF1L._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91VA91OjM9L._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 4,
    name: `Micro SD`,
    price: formatter.format(300),
    category: 'electronics',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/810o-i5jpiL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ohFUCI7sL._AC_SL1000_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71IuUD6X7mL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 5,
    name: `Nintendo Switch`,
    price: formatter.format(500),
    category: 'electronics',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/714vszIBgpL._SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61zf9ciI0ML._SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71UiJ0O6vTL._SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 6,
    name: `Nintendo Switch Case`,
    price: formatter.format(300),
    category: 'electronics',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71LZ2Q9oMYL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61SABqArCUL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71mNNZ9qrhL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 7,
    name: `Dresser Furniture`,
    price: formatter.format(700),
    category: 'furniture',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71fH9TTJ9tL._AC_SL1200_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81-xkW8nJ9L._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61QgyG7yiIL._AC_SL1300_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 8,
    name: `Night Stand`,
    price: formatter.format(900),
    category: 'furniture',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91-A1hLhwuL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91KyohCeuoL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81pJ2Tm7mFL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 9,
    name: `Desktop Furniture`,
    price: formatter.format(1200),
    category: 'furniture',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/617XYQb8lRS._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/715xXtjpE8L._AC_SL1313_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71JPwXEYqsL._AC_SL1313_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 10,
    name: `Buzz Lightyear Toy`,
    price: formatter.format(200),
    category: 'toys',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71rL5zB1UZL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81upzdQWNGL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71k3cHWhfhL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 11,
    name: `McQueen Car`,
    price: formatter.format(1200),
    category: 'toys',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71V50cZKNzL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71jti1GctKL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61y0mhDcsPL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 12,
    name: `Nerf Fornite Gun`,
    price: formatter.format(1200),
    category: 'toys',
    state: false,
    images: [
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81mGWfNPdML._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71zF9qjLFnL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/819a7BjvoiL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 13,
    name: 'Toddler Motocross',
    price: formatter.format(1600),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/71+M6q3kqRL._AC_SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/61gOjEoVXuL._AC_SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/71AR4SFpKKL._AC_SL1000_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 14,
    name: 'Kids Helmet',
    price: formatter.format(1500),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/41vbxhmO97L._AC_.jpg`,
        `https://m.media-amazon.com/images/I/41y3UeFUFVL._AC_.jpg`,
        `https://m.media-amazon.com/images/I/41q1uibYJpL._AC_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 15,
    name: 'Motocross Boots',
    price: formatter.format(300),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/61QpAjpBxaL._AC_SL1080_.jpg`,
        `https://m.media-amazon.com/images/I/71DP4FynbqS._AC_SL1080_.jpg`,
        `https://m.media-amazon.com/images/I/61poxNfyfHL._AC_SL1080_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 16,
    name: 'Mountain Bike',
    price: formatter.format(1200),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/81ntWm93bSL._SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/91DF+TfnkRL._SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/91VAholgrHL._SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 17,
    name: 'Racing Glasses',
    price: formatter.format(2200),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/51hief6Qe8L._SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/51bpe5TewwL._SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/5133I-4YWbL._SL1000_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 18,
    name: 'Toddler Bike',
    price: formatter.format(1270),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/81MLY7dBRsL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71+tRvKUCSL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71lAOLqReQL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 19,
    name: 'Motocross Jersey ',
    price: formatter.format(800),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/71Ld+xaOAHL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71HEY1NCkRL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71NGdbZb3fL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 20,
    name: 'Racing Gloves',
    price: formatter.format(600),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/81aYx8kvBGL._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/I/91Ym9pipEsL._AC_UL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71fce0p5B9L._AC_UL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 21,
    name: 'Bike Seat',
    price: formatter.format(876),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/51No61TOgBL._AC_SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/61rhctt9tIL._AC_SL1000_.jpg`,
        `https://m.media-amazon.com/images/I/51dVhVAMH0L._AC_SL1000_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});

productList.push({
    id: 22,
    name: 'Waterproof Phone Bag',
    price: formatter.format(876),
    category: 'others',
    state: false,
    images: [
        `https://m.media-amazon.com/images/I/81g4KlGJRUL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/71I8CfRwqyL._AC_SL1500_.jpg`,
        `https://m.media-amazon.com/images/I/61BDyUDNycL._AC_SL1500_.jpg`,
    ],
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum accusamus eius reprehenderit quos, perferendis vel!',
});
