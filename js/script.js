const galleryTab = document.querySelectorAll('.gallery__tab');
const galleryParent = document.querySelector('.gallery__tabs');
const galleryPhotos = document.querySelectorAll('.gallery__photos');
const galleryWrapper = document.querySelectorAll('.gallery__wrapper');
const galleryLink = document.querySelector('.gallery__link');
const galleryHref = document.querySelector('.gallery__href');



function hideTabContent() {
    galleryTab.forEach(item => {
        item.classList.remove('gallery__tab_active');
    }); 
    galleryPhotos.forEach(item => {
        item.classList.remove('gallery__photos_active');
    });
    galleryWrapper.forEach(item => {
        item.classList.remove('gallery__wrapper_active');
    });
    galleryLink.style.display = 'inline';
    galleryHref.style.display = 'none';

}

function showTabContent(i = 0) {
    galleryTab[i].classList.add('gallery__tab_active');
    galleryPhotos[i].classList.add('gallery__photos_active');
    galleryPhotos[i].classList.add('fade');
    galleryLink.addEventListener('click', function(event) {
        const target = event.target;
        galleryWrapper[i].classList.add('gallery__wrapper_active');
        galleryWrapper[i].classList.add('fade');
        galleryLink.style.display = 'none';
        galleryHref.style.display = 'inline';
    });
    galleryHref.addEventListener('click', function() {
        galleryWrapper[i].classList.remove('gallery__wrapper_active');
        galleryLink.style.display = 'inline';
        galleryHref.style.display = 'none';
    })

}



hideTabContent();
showTabContent();
galleryParent.addEventListener('click', function(event) {
    const target = event.target;
	if(target && target.classList.contains('gallery__tab')) {
        galleryTab.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
                }
                });
    }
});
$(document).ready(function() {
    $('.carousel__slider').slick({
        arrows: false,
        dots: true
    });
})



const popupLink = document.querySelector('.application__href');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const inputName = document.getElementById('input__name');
const inputPhone = document.getElementById('input__phone');
const textarea = document.getElementById('textarea');


inputName.addEventListener('input', () => {
    inputName.classList.remove('border__none')
} )
inputPhone.addEventListener('input', () => {
    inputPhone.classList.remove('border__none')
} )
textarea.addEventListener('input', () => {
    textarea.classList.remove('border__none')
} )




popupLink.addEventListener('click', (e) => {
    e.preventDefault();
    const messege = inputName.value;
    const phoneValue = inputPhone.value;
    const textValue = textarea.value;
    if (messege < 2) {
        inputName.classList.add('border__none');
        console.log('false');   
    } else if (phoneValue < 5) {
        inputPhone.classList.add('border__none');
    } else if (textValue < 10) {
        textarea.classList.add('border__none');
    } else {
        popup.style.display = 'block';

        timout();
    }
    
})
popupClose.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
})

function timout () {
    setTimeout(() => {
        inputName.value = "";
        inputPhone.value = "";
        textarea.value = "";
        console.log('setTimout');
        popup.style.display = 'none';
    }, 2000)
}
// function zaebal() {
//     if (!galleryWrapper.classList.contains('gallery__wrapper_active')) {
//         galleryWrapper.style.display = 'flex';
//         galleryLink.textContent = 'bLlbl';
//     } else {
//         galleryWrapper.style.display = 'none';
//         galleryLink.textContent = 'подробнее';
//     }
// }

// galleryLink.addEventListener('click', function() {
//     zaebal();
// })
    









// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show () {
//         this.$el.style.display = 'block'
//     }

// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width =  this.$el.style.height = options.size +'px'
//         this.$el.style.background = options.color

//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 200,
//     color: 'green'
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: blue
// // })

// const person = {
//     name: 'Alexey',
//     age: 18,
//     job: 'Fullsteack'
// }

// const op = new Proxy(person, {
//     get(target, prop) {
//         console.log(`Getting prop ${prop}`);
//         return target[prop];
//     },
//     set(target, prop, value) {
//         if (prop in target) {
//             target[prop] = value;
//         } else {
//             throw new Error(`No ${prop} field in target`);
//         }
//     },
//     has(target, prop) {
//         return ['age', 'name', 'job'].includes(prop);
//     },
//     deleteProperty(target, prop) {
//         console.log('Deleting', prop);
//         delete target[prop];
//         return true;
//     }
// })

// // function 

// const log = text => `log :${text}`;

// const fp = new Proxy(log, {
//     apply(target, thisArg, args) {
//         console.log('Calling fn...')
//         return target.apply(thisArg, args).toUpperCase(); 
//     }
// })

// //Classes 
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args) {
//         console.log('Contruct...')

//         return new target(...args)
//     }
// })

// const p = new PersonProxy('Maxim', 30)




//Wrapper

// const widthDefaultValue = (target, defaultValue = 0) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in  obj ? obj[prop] : defaultValue)
//     })
// }

// const position = widthDefaultValue({
//     x: 24,
//     y: 42
// }, 0)


// //Hidden properties

// const withHiddenProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//         ownKeys: obj => Reflect.ownKeys(obj) 
//             .filter(p => !p.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
//     })
// }

// const data = withHiddenProps({
//     name: 'Alexey',
//     age: 18,
//     _uid: '123123123'
// })


