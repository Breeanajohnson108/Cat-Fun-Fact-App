//Creating a async function to hold my api request
async function getCatsData() {
  //Writing a request using a try-catch statment
  try {
    //Defining a variable to hold data from api request
    let cats = await axios.get('https://api.thecatapi.com/v1/breeds');
    let data = cats.data;

    //Creating a for loop to loop through variable holding data
    let i = 0;
    let card = document.getElementsByClassName('flip-card')
    console.log(card)
    while (i < 12)
    {
      destination = card[i].getElementsByClassName('flip-card-inner')[0]
      let back = document.createElement('div');
      let catName = document.createElement('h1');
      let catOrigin = document.createElement('p');
      let catAge = document.createElement('p');
      let catTemperament = document.createElement('p');
      // let learnMore = document.createElement('button');  // NOT BUTTON
      back.className = `flip-card-back`;
      catName.textContent = data[i].name;
      catOrigin.textContent = data[i].origin;
      catAge.textContent = data[i].life_span;
      catTemperament.textContent = data[i].temperament;
      // learnMore.textContent = "Learn More";
      back.append(catName);
      back.append(catOrigin);
      back.append(catAge); 
      back.append(catTemperament)
      // back.append(learnMore)
      console.log(back)
      // learnMore.onclick = function ()
      // {
      //   window.open(data[i].vetstreet_url, "_blank")
      // };
      destination.append(back)
      // console.log(destination)
      i++               
    }
  }
  catch(error) {
      console.log(error);
  }  

}

console.log(getCatsData());





// if (i == 13) {
      //   break;
      // } else if (i <= 12) {
      //   let getElement = document.getElementsByClassName('flip-card-back');

      //   //let catName = document.createElement('h1').innerHTML(data.name);
      //   let catName = document.createElement('h1');
      //   catName.innerHTML = data.name
      //   console.log(catName)
      //   getElement.append(catName);

      //   let catOrigin = document.createElement('p').innerHTML = (data.origin);
      //   getElement.append =(catOrigin);

      //   let catAge = document.createElement('p').innerHTML = (data.age);
      //   getElement.appendChild(catAge);

      //   let catTemperament = document.createElement('p').innerHTML = (data.temperament);
      //   getElement.appendChild(catTemperament);

      //   let learnMore = document.createElement('BUTTON').innerHTML = ('Learn More').onclick = function () {
      //     let a = document.createElement('a');
      //     a.setAttribute('href', data.wikipedia_url);
      //   };

      //   getElement.appendChild(learnMore);
      // } else {
      //   console.log(error);
      // }