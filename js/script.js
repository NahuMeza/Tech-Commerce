
const productos= {
        notebooks:[{
                id: 1,
                name: "NOTEBOOK LENOVO V15",
                price: 116990,
                img: "https://images.fravega.com/f500/f48cb4dbc08c5226c663d5b25fc2a967.jpg",
            },{
                id: 2,
                name: "NOTEBOOK ASUS X515EA-EJ711",
                price: 144900,
                img: "https://s3-sa-east-1.amazonaws.com/saasargentina/u8IPyTY5dGiA5OedFyef/imagen",
            },{
                id: 3,
                name: "NOTEBOOK XPG XENIA 15",
                price: 679990,
                img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/notebook-adata-156-xpg-xenia-xe-i71165g7-16gb-1tb-w10h-0.jpg",
            },{
                id: 4,
                name: "NOTEBOOK HP 245 G8",
                price: 199990,
                img: "https://fullh4rd.com.ar/img/productos/Pics_Prod/notebook-hp-14-245-g8-ryzen-3-3250u-4gb-1tb-free-0.jpg",
            }
        ],
        celulares:[{
                id: 5,
                name:"CELULAR SAMSUNG SM-A045M",
                price: 39999,
                img:"https://http2.mlstatic.com/D_NQ_NP_753350-MLA52349509007_112022-O.webp",  
            },{
                id: 6,
                name: "CELULAR MOTOROLA MOTO G42",
                price: 69999,
                img: "https://norditech.com.ar/wp-content/uploads/2022/11/MOTO-G42.jpg",
            },{
                id: 7,
                name: "CELULAR SAMSUNG SM-A528B",
                price: 124999,
                img: "https://netcel.com.uy/wp-content/uploads/2022/11/wooc-249.jpeg",
            },{
                id: 8,
                name: "CELULAR APPLE IPHONE 13",
                price: 547999,
                img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/740/594/products/201-97bec1102f822c2f8416587850974625-1024-1024.jpg",
            }
        ],
        monitores:[{
                id: 9,
                name: "MONITOR 19 LED PHILIPS 193V5LHSB2/55",
                price: 37990,
                img: "http://pcboutique.com.ar/content/images/thumbs/0004687_monitor-led-19-philips-193v5lhsb255-chdmi_550.png",
            },{
                id: 10,
                name: "MONITOR 22 LED SAMSUNG T350",
                price: 47490,
                img: "https://www.venex.com.ar/products_images/1633033971_sd651f4s.png",
            },{
                id: 11,
                name: "MONITOR 22 ASUS VP228HE-J",
                price: 56990,
                img: "https://www.comeros.com.ar/wp-content/uploads/2020/04/MONI.jpg",
            },{
                id: 12,
                name: "MONITOR 24 LED SAMSUNG G50",
                price: 67990,
                img: "https://www.venex.com.ar/products_images/1660654269_lc24rg50fzlc6.png",
            }
        ],
};

// {
//     name: "",
//     price: ,
//     img: "",
// }

const nbBox = document.getElementById("notebooks");
const celBox = document.getElementById("cellphones");
const monBox = document.getElementById("monitors");

const createBox = (product = [], box) => {
    for (let i = 0; i < product.length; i++) {
        article = document.createElement("article");
        artContent = box.appendChild(article);
        article.classList.add("col-xl-3");
        article.classList.add("col-lg-6");
        article.classList.add("col-sm-6");
        article.classList.add("col-xs-12");
        article.classList.add(`id${product[i].id}`);
        artContent.innerHTML = `<div class="img-div"><img src="${product[i].img}"></div><div class="product-info"><h3>$${product[i].price}</h3><div class="d-flex gap-1"><p>${product[i].name}</p><button class="buy-btn" id="${product[i].id}">Comprar</button></div></div>`;
    }   
}

const createCelCarousel = (product = [], box, productName) => {
    box.innerHTML = `<div id="${productName}Carousel" class="carousel slide prd-carousel">
    <div class="carousel-inner">
      <div class="carousel-item prd active item-${productName}-0">
        
      </div>
      <div class="carousel-item prd item-${productName}-1">
        
      </div>
      <div class="carousel-item prd item-${productName}-2">
        
      </div>
      <div class="carousel-item prd item-${productName}-3">
        
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#${productName}Carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon product-prev" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${productName}Carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon product-next" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
    for (let i = 0; i < product.length; i++) {
        carouselItem = document.querySelector(`.item-${productName+"-"+i}`);
        article = document.createElement("article");
        artContent = carouselItem.appendChild(article);
        article.classList.add(`mr-0`);
        article.classList.add(`id${product[i].id}`);
        artContent.innerHTML = `<div class="img-div"><img src="${product[i].img}"></div><div class="product-info"><h3>$${product[i].price}</h3><div class="d-flex gap-1"><p>${product[i].name}</p><button class="buy-btn" id="${product[i].id}">Comprar</button></div></div>`;
    }   
}

window.addEventListener("load", () => {
    if (window.outerWidth < 540) {
        createCelCarousel(productos.notebooks, nbBox, "notebooks");
        createCelCarousel(productos.celulares, celBox, "celulares");
        createCelCarousel(productos.monitores, monBox, "monitores");
    }
    else {
        createBox(productos.notebooks, nbBox);
        createBox(productos.celulares, celBox);
        createBox(productos.monitores, monBox);
    }
});


