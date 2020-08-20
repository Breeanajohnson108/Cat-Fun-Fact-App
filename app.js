//Creating a async function to hold my api request
    async function getCatsData()
    {
      //Writing a request using a try-catch statment
        try
        {
          //Defining a variable to hold data from api request
          let cats = await axios.get('https://api.thecatapi.com/v1/breeds');
          let data = cats.data;

          //Creating a for loop to loop through variable holding data
          for (let i = 0; i <= data.length; i++)
            {
              if (i == 13)
              {
                break;
              } else if (i <= 12)
              {
                let getElement = document.getElementsByClassName('flip-card-back');
                let catName = document.createElement('h1').innerHTML(data.name);
                getElement.appendChild(catName);

                let catOrigin = document.createElement('p').innerHTML(data.origin);
                getElement.appendChild(catOrigin);
                
                let catAge = document.createElement('p').innerHTML(data.age);
                getElement.appendChild(catAge); 

                let catTemperament = document.createElement('p').innerHTML(data.temperament);
                getElement.appendChild(catTemperament); 

                let learnMore = document.createElement('BUTTON').innerHTML('Learn More').onclick = function ()
                {
                  let a = document.createElement('a');
                  a.setAttribute('href', data.wikipedia_url);
                };
                
                getElement.appendChild(learnMore); 
              } else
              {
                console.log(error);
              }  
            }
        }
        catch(error)
        {
            console.log(error);
        }  

    }