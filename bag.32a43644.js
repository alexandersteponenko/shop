!function(){function e(e,t,a,r){Object.defineProperty(e,t,{get:a,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=a.parcelRequire94c2;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},a.parcelRequire94c2=i);var o=i.register;o("gTwGg",function(t,a){e(t.exports,"register",function(){return r},function(e){return r=e});var r,n=new Map;r=function(e,t){for(var a=0;a<t.length-1;a+=2)n.set(t[a],{baseUrl:e,path:t[a+1]})}}),o("ai42B",function(t,a){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),o("5FgFa",function(a,r){e(a.exports,"ORDERS",function(){return o}),e(a.exports,"BASKET_EMPTY",function(){return s}),e(a.exports,"ORDER_NO_PRODUCT",function(){return c}),e(a.exports,"saveCartToLocalStorage",function(){return u}),e(a.exports,"loadCartFromLocalStorage",function(){return l}),e(a.exports,"showErrorMessage",function(){return d});var n=i("7Hb0d");let o="Заказы",s="Корзина пуста",c="В заказе нет товаров";function u(e){localStorage.setItem("bag",JSON.stringify(e))}function l(){return JSON.parse(localStorage.getItem("bag"))||[]}function d(e){document.body.innerHTML=`
      <div class="container">
        <div class="link-cart">
          <a href="./index.html" class="link__wrapper">
            <img src="${t(n)}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
            <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
          </a>
        </div>
        <h2>${e}</h2>
      </div>
    `}}),o("7Hb0d",function(e,t){e.exports=i("ai42B").getBundleURL("64PXx")+"ic-Vector.49399ea7.svg"}),i("gTwGg").register(i("ai42B").getBundleURL("64PXx"),JSON.parse('["64PXx","bag.32a43644.js","kykt9","rating.cdb36a68.svg","jUtxH","ic-Vector.49399ea7.svg","2bhVf","Ic-minus.cb3ae8f8.svg","7Jmlt","Ic-plus.db29d6a8.svg"]'));var s=i("5FgFa"),c={};c=i("ai42B").getBundleURL("64PXx")+"Ic-minus.cb3ae8f8.svg";var u={};u=i("ai42B").getBundleURL("64PXx")+"Ic-plus.db29d6a8.svg";var l={};l=i("ai42B").getBundleURL("64PXx")+"rating.cdb36a68.svg";let d=document.querySelector(".bag__list"),g=document.querySelector(".text__usd"),f=document.getElementById("goToBag"),_=document.getElementById("bagListImg"),p=0;function b(){let e=(0,s.loadCartFromLocalStorage)();d.innerHTML="",p=0,e&&e.length>0?(e.forEach(e=>{let a=document.createElement("div");a.className="bag__card-title",a.setAttribute("product-card-id",e.id),a.innerHTML=` 
            <div class="bag__card-img">
              <img class="img__card-bag" src="${e.imageURL}" alt="${e.model}" />
            </div>
            <div class="bag__card-info">
              <h4>${e.model}</h4>
              <p class="bag__series">${e.series}</p>
              <p class="bag__description">${e.description}</p>
                <img class="img-rating" src="${t(l)}" alt="" />
              <div class="bag__card-price">
                <div class="price">
                  <div class="price__currency">
                    <p class="label">$</p>
                    <span class="price__number">${e.price} \u{445} </span>
                    <p class="counter">${e.quantity}</p>
                  </div>
                </div>
                <div class="bag__counter">
                  <button class="btn__minus" data-id="${e.id}">
                    <img src="${t(c)}" alt="\u{43C}\u{438}\u{43D}\u{443}\u{441}" />
                  </button>
                  <p class="counter__number">${e.quantity}</p>
                  <button class="btn__plus" data-id="${e.id}">
                    <img src="${t(u)}" alt="\u{43F}\u{43B}\u{44E}\u{441}" />
                  </button>
                </div>
              </div>
            </div>
          `,d.appendChild(a),p+=e.price*e.quantity}),g.textContent=p.toFixed(2)):(0,s.showErrorMessage)(s.BASKET_EMPTY),_.innerHTML="",(0,s.loadCartFromLocalStorage)().forEach(e=>{let t=document.createElement("li");t.className="bag-item",t.innerHTML=`<img class="bag__img" src="${e.imageURL}" alt="${e.model}" />`,_.appendChild(t)})}f&&f.addEventListener("click",function(){!function(e){let t=(0,s.loadCartFromLocalStorage)()||[],a=t.find(t=>t.id===e.id);a?a.quantity+=1:t.push({...e,quantity:1}),(0,s.saveCartToLocalStorage)(t),b()}(product)}),d.addEventListener("click",e=>{if(e.target.closest(".btn__minus")||e.target.closest(".btn__plus")){let t=e.target.closest("button").getAttribute("data-id"),a=(0,s.loadCartFromLocalStorage)(),r=a.find(e=>e.id===t);if(e.target.closest(".btn__minus")){if(r.quantity>1)r.quantity-=1;else{let e=a.indexOf(r);a.splice(e,1)}}else e.target.closest(".btn__plus")&&(r.quantity+=1);(0,s.saveCartToLocalStorage)(a),b()}}),document.addEventListener("DOMContentLoaded",()=>{b()})}();