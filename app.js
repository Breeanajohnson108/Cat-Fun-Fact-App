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
      
      destination.append(back)
      
      i++               
    }
  }
  catch(error) {
      console.log(error);
  }  

}
getCatsData();





