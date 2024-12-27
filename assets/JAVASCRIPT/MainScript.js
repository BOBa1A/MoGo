// _____________________________HEADER_______________________________________

const Header = document.getElementById('Header')
const Headeritems = document.getElementById('header_items')
document.getElementById('SandButton').onclick = SandwichFunc;

window.addEventListener('scroll', function(){
	const ScrollPosition = window.scrollY

	if (ScrollPosition > 50) {
		Header.classList.add('is_scrolled')
	} else if (ScrollPosition < 50) {
		Header.classList.remove('is_scrolled')
	}
})

function SandwichFunc() {
	console.log('some text')

	if (Headeritems.classList != 'sandwith_header' ) {
		Headeritems.classList.add('sandwith_header')
	} else if (Headeritems.classList == 'sandwith_header') {
		Headeritems.classList.remove('sandwith_header')
	}
	
}

//_____________________________________For Site____________________________


const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
    e.preventDefault() 

    const goto = anchor.getAttribute('href')

        document.querySelector('' + goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}



// _________________________________NUMS_____________________________________
let statistic = document.querySelector('.statistic__body');
let numbers = document.querySelectorAll('.statistic__value');
let arr = [];
let stop = null;
let max = 0;

if (numbers) {
	numbers.forEach((item) => {
		arr.push(+item.textContent);
		item.textContent = 0;
	});

	arr.forEach(function (item) {
		if (item > max)
			max = item;
	});
}

if (statistic && numbers) {
	window.addEventListener('scroll', setNumbers);
	window.addEventListener('load', setNumbers);
}

function setNumbers() {
	if (statistic.getBoundingClientRect().top <= window.innerHeight) {
		if (stop == null) {
			stop = setInterval(function () {
				for (let i = 0; i < arr.length; i++) {
					let cof = Math.ceil(arr[i] / 100);
					if (numbers[i].textContent < arr[i]) {
						numbers[i].textContent = +numbers[i].textContent + cof;
					} else if (numbers[i].textContent > arr[i]) {
						numbers[i].textContent = arr[i];
					} else if (numbers[i].textContent >= max) {
						clearInterval(stop);
					}
				}
			}, 50);
		}
	}
}
