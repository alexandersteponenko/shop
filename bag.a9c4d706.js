function t(t,e,r,a){Object.defineProperty(t,e,{get:r,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=r.parcelRequire94c2;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return a[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},r.parcelRequire94c2=i);var o=i.register;o("gC69E",function(e,r){t(e.exports,"register",function(){return a},function(t){return a=t});var a,n=new Map;a=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),o("drCrl",function(r,a){t(r.exports,"ORDERS",function(){return o}),t(r.exports,"BASKET_EMPTY",function(){return s}),t(r.exports,"ORDER_NO_PRODUCT",function(){return c}),t(r.exports,"saveCartToLocalStorage",function(){return u}),t(r.exports,"loadCartFromLocalStorage",function(){return l}),t(r.exports,"showErrorMessage",function(){return d});var n=i("bhxGU");let o="Заказы",s="Корзина пуста",c="В заказе нет товаров";function u(t){localStorage.setItem("bag",JSON.stringify(t))}function l(){return JSON.parse(localStorage.getItem("bag"))||[]}function d(t){document.body.innerHTML=`
      <div class="container">
        <div class="link-cart">
          <a href="./index.html" class="link__wrapper">
            <img src="${e(n)}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
            <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
          </a>
        </div>
        <h2>${t}</h2>
      </div>
    `}}),o("bhxGU",function(t,e){t.exports=new URL("ic-Vector.49399ea7.svg",import.meta.url).toString()}),o("6KKKg",function(t,e){t.exports=new URL("rating.cdb36a68.svg",import.meta.url).toString()}),i("gC69E").register(new URL("",import.meta.url).toString(),JSON.parse('["5xF9n","bag.a9c4d706.js","hlSOR","rating.cdb36a68.svg","5rfxX","ic-Vector.49399ea7.svg","86HUm","Ic-minus.cb3ae8f8.svg","gYfGF","Ic-plus.db29d6a8.svg"]'));var s=i("drCrl"),c={};c=new URL("Ic-minus.cb3ae8f8.svg",import.meta.url).toString();var u={};u=new URL("Ic-plus.db29d6a8.svg",import.meta.url).toString();var l=i("6KKKg");const d=document.querySelector(".bag__list"),g=document.querySelector(".text__usd"),_=document.getElementById("goToBag"),p=document.getElementById("bagListImg");let m=0;function f(){let t=(0,s.loadCartFromLocalStorage)();d.innerHTML="",m=0,t&&t.length>0?(t.forEach(t=>{let r=document.createElement("div");r.className="bag__card-title",r.setAttribute("product-card-id",t.id),r.innerHTML=` 
            <div class="bag__card-img">
              <img class="img__card-bag" src="${t.imageURL}" alt="${t.model}" />
            </div>
            <div class="bag__card-info">
              <h4>${t.model}</h4>
              <p class="bag__series">${t.series}</p>
              <p class="bag__description">${t.description}</p>
                <img class="img-rating" src="${e(l)}" alt="" />
              <div class="bag__card-price">
                <div class="price">
                  <div class="price__currency">
                    <p class="label">$</p>
                    <span class="price__number">${t.price} \u{445} </span>
                    <p class="counter">${t.quantity}</p>
                  </div>
                </div>
                <div class="bag__counter">
                  <button class="btn__minus" data-id="${t.id}">
                    <img src="${e(c)}" alt="\u{43C}\u{438}\u{43D}\u{443}\u{441}" />
                  </button>
                  <p class="counter__number">${t.quantity}</p>
                  <button class="btn__plus" data-id="${t.id}">
                    <img src="${e(u)}" alt="\u{43F}\u{43B}\u{44E}\u{441}" />
                  </button>
                </div>
              </div>
            </div>
          `,d.appendChild(r),m+=t.price*t.quantity}),g.textContent=m.toFixed(2)):(0,s.showErrorMessage)(s.BASKET_EMPTY),p.innerHTML="",(0,s.loadCartFromLocalStorage)().forEach(t=>{let e=document.createElement("li");e.className="bag-item",e.innerHTML=`<img class="bag__img" src="${t.imageURL}" alt="${t.model}" />`,p.appendChild(e)})}_&&_.addEventListener("click",function(){!function(t){let e=(0,s.loadCartFromLocalStorage)()||[],r=e.find(e=>e.id===t.id);r?r.quantity+=1:e.push({...t,quantity:1}),(0,s.saveCartToLocalStorage)(e),f()}(product)}),d.addEventListener("click",t=>{if(t.target.closest(".btn__minus")||t.target.closest(".btn__plus")){let e=t.target.closest("button").getAttribute("data-id"),r=(0,s.loadCartFromLocalStorage)(),a=r.find(t=>t.id===e);if(t.target.closest(".btn__minus")){if(a.quantity>1)a.quantity-=1;else{let t=r.indexOf(a);r.splice(t,1)}}else t.target.closest(".btn__plus")&&(a.quantity+=1);(0,s.saveCartToLocalStorage)(r),f()}}),document.addEventListener("DOMContentLoaded",()=>{f()});