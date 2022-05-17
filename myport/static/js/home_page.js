let back_to_top = document.getElementsByClassName('backToTop'); 

addEventListener("scroll", function(){
	let to_top = window.scrollY;
	if(to_top > 1600){
		back_to_top[0].style.visibility ='visible';
	}
	else if(to_top < 1600){
		back_to_top[0].style.visibility ='hidden';
	}
})

// fill_up bar

let skill_bar_top = document.getElementById('mySkills').offsetTop

let second_bar = document.querySelectorAll('#secondbar')

window.addEventListener("scroll", fill_up)
function fill_up(){
	if(window.scrollY>skill_bar_top){
		second_bar[0].style.width = '352px';
		second_bar[1].style.width = '328px';
		second_bar[2].style.width = '332px';
		second_bar[3].style.width = '368px';
		second_bar[4].style.width = '340px';
		second_bar[5].style.width = '340px';
		second_bar[6].style.width = '396px';
		second_bar[7].style.width = '364px';

	}
}fill_up()

window.addEventListener("scroll", bind)
function bind(){
	console.log(skill_bar_top)
	console.log(window.scrollY)
	if(window.scrollY>skill_bar_top){
		time()
	}
}bind()

function time(){
	let timing = setTimeout(do_it,0.1)

	if(window.scrollY>=1365){
		clearTimeout(timing)
	}
}

function do_it(){
	let counter = document.getElementsByClassName('counter')
	let percentage = 0

	counter[0].innerText = percentage

		let int = setInterval(function(){
			percentage++
			counter[0].innerText = `${percentage}%`

			if(percentage>=85){
				clearInterval(int)
			}
		},60)

	counter[1].innerText = percentage

		let int2 = setInterval(function(){
			percentage++
			counter[1].innerText = `${percentage}%`

			if(percentage >= 80){
				clearInterval(int2)

			}	
		},60)

	counter[2].innerText = percentage

		let int3 = setInterval(function(){
			percentage++
			counter[2].innerText = `${percentage}%`

			if(percentage >= 78 ){
				clearInterval(int3)

			}	
		},60)

	counter[3].innerText = percentage

		let int4 = setInterval(function(){
			percentage++
			counter[3].innerText = `${percentage}%`

			if(percentage >= 90){
				clearInterval(int4)

			}	
		},60)		

	counter[4].innerText = percentage

		let int5 = setInterval(function(){
			percentage++
			counter[4].innerText = `${percentage}%`

			if(percentage >= 80){
				clearInterval(int5)

			}	
		},60)

	counter[5].innerText = percentage

		let int6 = setInterval(function(){
			percentage++
			counter[5].innerText = `${percentage}%`

			if(percentage >= 80){
				clearInterval(int6)

			}	
		},60)

	counter[6].innerText = percentage

		let int7 = setInterval(function(){
			percentage++
			counter[6].innerText = `${percentage}%`

			if(percentage >= 99){
				clearInterval(int7)

			}	
		},60)

	counter[7].innerText = percentage

		let int8 = setInterval(function(){
			percentage++
			counter[7].innerText = `${percentage}%`

			if(percentage >= 90){
				clearInterval(int8)

			}	
		},60)
}

let meter = document.getElementById('content2')

let seeMore = document.getElementById('seeSkills')

seeMore.addEventListener("click", show)
function show(){
	seeMore.style.display = "none"
	meter.style.opacity = "1"
}

//slider 

let holder = document.querySelector('.slide');
let image = ['/static/images/template1.png','/static/images/Template2.png','/static/images/spoc.png','/static/images/phone.png'];

let count1 = 0;

	setInterval(()=>{
		count1++;
		holder.setAttribute('src', image[count1]);
		if (count1 >= 3) {
			count1 = -1;
		}	
	},1500);

let sphere = document.querySelectorAll('.circle')
		let count2 = 0
		
			let move = setInterval(function(){
				count2++		
				if(count2 == 0){
					sphere[0].style.backgroundColor = '#46a293'
					sphere[1].style.backgroundColor = '#1f2326'
					sphere[2].style.backgroundColor = '#1f2326'
					sphere[3].style.backgroundColor = '#1f2326'
				}else if (count2 == 1){
					sphere[0].style.backgroundColor = '#1f2326'
					sphere[1].style.backgroundColor = '#46a293'
					sphere[2].style.backgroundColor = '#1f2326'
					sphere[3].style.backgroundColor = '#1f2326'
				}else if (count2 == 2){
					sphere[0].style.backgroundColor = '#1f2326'
					sphere[1].style.backgroundColor = '#1f2326'
					sphere[2].style.backgroundColor = '#46a293'
					sphere[3].style.backgroundColor = '#1f2326'

				}else if (count2 == 3){
					sphere[0].style.backgroundColor = '#1f2326'
					sphere[1].style.backgroundColor = '#1f2326'
					sphere[2].style.backgroundColor = '#1f2326'
					sphere[3].style.backgroundColor = '#46a293'
					count2 = -1	
				}		
			},1500)

// formvalidation

let person = document.formItself.text
let email = document.formItself.email
let letters = /^[A-Za-z\s]+$/;
let send = document.getElementById('button')
let notice = document.getElementById('notice')
function validation(){
	if(person.value.match(letters)){
		
	}
	else{
		notice.style.display = "block"
		return false
	}
}
 function checkall(chk){
 	chk.checked=false
 }
