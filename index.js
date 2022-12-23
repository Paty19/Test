const button = document.querySelector(".btn");
button.addEventListener("click", result);
const par= document.querySelector("#show");


function result(e) {
  e.preventDefault();

	let points=0;

	if(document.querySelector('#answer1').checked){	
    points++;
		}
	if(document.querySelector('#answer2').checked){	
    points++;
		}
	if(document.querySelector('#answer3').checked) {	
    points++;
		}
  if(document.querySelector('#answer4').checked) {	
      points++;
      }

  if(document.querySelector('#answer5').checked) {	
      points++;
    }
    if(document.querySelector('#answer6').checked) {	
      points++;
    }
    if(document.querySelector('#answer7').checked) {	
      points++;
    }
    if(document.querySelector('#answer8').checked) {	
      points++;
    }
    if(document.querySelector('#answer9').checked) {	
      points++;
    }
    if(document.querySelector('#answer10').checked) {	
      points++;
    }
    
    if(points===0){
      Swal.fire({
        icon: 'error',
        title: 'Ошибка...',
        text: 'Ответьте на вопросы!',
        
      })
      
       }


       else if(points<4){

        Swal.fire({
          title: 'Тип Вашего характера - интраверсия.',
          text: 'Вам присущи замкнутость и необщительность, социальная пассивность, склонность к самоанализу и затруднения к социальной адаптации. Интроверты лучше справляются с монотонной работой, они более осторожны, аккуратны и педантичны.',
          imageUrl: 'https://media.istockphoto.com/photos/woman-sitting-on-sofa-with-mug-of-coffee-in-bookstore-reading-a-book-picture-id1208666770?b=1&k=20&m=1208666770&s=170667a&w=0&h=Sa3gp1Hf82cwoHgjM7ctr0bB_dVUO4aoowDFymANiFk=',
          imageWidth: 300,
          imageHeight: 200,
          imageAlt: '1',
        })
   
     }

     else if(points>7){

      Swal.fire({
        title: 'Тип Вашего характера - экстраверсия.',
        text: 'Экстравертам свойственны общительность, импульсивность, гибкость поведения, большая инициативность (но малая настойчивость)и высокая социальная адаптированность. Экстраверты обычно обладают внешним обаянием, прямолинейностью в суждениях. Хорошо справляются с работой, требующей быстрого принятия решений.',
        imageUrl: 'https://media.istockphoto.com/photos/weve-done-it-again-picture-id643285752?b=1&k=20&m=643285752&s=170667a&w=0&h=XPYdSE36GsHjIr88DbA5C3SMt3u-9sGmuNyHWhQ5bes=',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: '2',
      })
      
       }


    else {

      Swal.fire({
        title: 'Тип Вашего характера - амбиверсия.',
        text: 'Вам присущи черты экстра- и интроверсии. Вам свойственны общительность, и замкнутость; пассивность и активные действия. Все зависит от места и времени действия. У Вас вполне устойчивая психологическая ориентация на мир внешних объектов (экстраверсия) и на внутренний субъективный мир (интраверсия).',
        imageUrl: 'https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxwZW9wbGUlMjBoYXBweXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: '3',
      })

    }
  }

  




  