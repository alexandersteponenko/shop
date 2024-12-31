!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire94c2;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire94c2=o);var c=o.register;c("gTwGg",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e});var n,a=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})}}),c("ai42B",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,a={};n=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),c("5FgFa",function(r,n){e(r.exports,"ORDERS",function(){return c}),e(r.exports,"BASKET_EMPTY",function(){return i}),e(r.exports,"ORDER_NO_PRODUCT",function(){return u}),e(r.exports,"saveCartToLocalStorage",function(){return s}),e(r.exports,"loadCartFromLocalStorage",function(){return l}),e(r.exports,"showErrorMessage",function(){return d});var a=o("OQ2xm");let c="Заказы",i="Корзина пуста",u="В заказе нет товаров";function s(e){localStorage.setItem("bag",JSON.stringify(e))}function l(){return JSON.parse(localStorage.getItem("bag"))||[]}function d(e){document.body.innerHTML=`
      <div class="container">
        <div class="link-cart">
          <a href="./index.html" class="link__wrapper">
            <img src="${t(a)}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
            <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
          </a>
        </div>
        <h2>${e}</h2>
      </div>
    `}}),c("OQ2xm",function(e,t){e.exports=o("ai42B").getBundleURL("bhYGe")+"ic-Vector.49399ea7.svg"}),o("gTwGg").register(o("ai42B").getBundleURL("bhYGe"),JSON.parse('["bhYGe","checkout.2ab2a89c.js","jUtxH","ic-Vector.49399ea7.svg","kykt9","rating.cdb36a68.svg","9VlBK","Line 3.c608a812.svg","1rOl6","checkout.1798c175.js"]'));var i=o("5FgFa"),u={};u=o("ai42B").getBundleURL("bhYGe")+"rating.cdb36a68.svg";var s={};s=o("ai42B").getBundleURL("bhYGe")+"Line 3.c608a812.svg";var l=o("lmqRc");let d=(0,o("1Nsm9").initializeApp)({apiKey:"AIzaSyBQ0ay2192erVHEap3YGibJBct9cWnw1qo",authDomain:"shop-fda0b.firebaseapp.com",projectId:"shop-fda0b",storageBucket:"shop-fda0b.appspot.com",messagingSenderId:"583984113131",appId:"1:583984113131:web:81a003a19230c20e0c65ae"}),p=(0,l.getFirestore)(d),f=document.querySelector(".checkout__bag-list"),g=document.querySelector(".total-text__usd"),_=document.querySelector(".total-final__usd"),m=document.querySelector(".order__btn");async function b(){let e=(0,i.loadCartFromLocalStorage)(),t=document.querySelector(".address__name").textContent,r=document.querySelector(".address__street").textContent,n=document.querySelector(".address__city").textContent,a=document.querySelector(".address__phone").textContent,o=document.querySelector("#selectedPaymentMethod").textContent.trim(),c=e.reduce((e,t)=>e+t.price*t.quantity,0),u={items:e,createdAt:new Date().toLocaleString(),deliveryNameElement:t,deliveryStreetElement:r,deliveryCityElement:n,deliveryPhoneElement:a,paymentMethod:o,totalPrice:c,deliveryCost:6.99,finalTotalPrice:c+6.99};try{await (0,l.addDoc)((0,l.collection)(p,"orders"),u),alert("Заказ успешно размещен!"),localStorage.removeItem("bag"),window.location.href="index.html"}catch(e){console.error("Ошибка при размещении заказа: ",e)}}!function(){let e=(0,i.loadCartFromLocalStorage)(),r=0;if(e.length>0){e.forEach(e=>{let n=document.createElement("div");n.className="checkout__bag-wrapper",n.innerHTML=`
            <div class="bag__card-title" product-card-id="${e.id}">
                <div class="bag__card-img">
                    <img class="img__card-bag"
                     src="${e.imageURL}" alt="${e.model}"/>
                </div>
                <div class="bag__card-info">
                    <h4>${e.model}</h4>
                    <p class="bag__series">${e.series}</p>
                    <p class="bag__description">${e.description}</p>
                    <img class="img-rating" src="${t(u)}" alt="\u{420}\u{435}\u{439}\u{442}\u{438}\u{43D}\u{433}" />
                    <div class="bag__card-price">
                        <div class="price">
                            <div class="price__currency">
                                <p class="label">$</p>
                                <span class="price__number">${e.price.toFixed(2)} \u{445} </span>
                                <p class="counter">${e.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="${t(s)}" alt="\u{420}\u{430}\u{437}\u{434}\u{435}\u{43B}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{430}\u{44F} \u{43B}\u{438}\u{43D}\u{438}\u{44F}" />
        `,f.appendChild(n),r+=e.price*e.quantity});let n=r+6.99;g.textContent=`$ ${r.toFixed(2)}`,_.textContent=`$ ${n.toFixed(2)}`}else(0,i.showErrorMessage)(i.ORDER_NO_PRODUCT)}(),m.addEventListener("click",b)}();