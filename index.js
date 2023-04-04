// Add your code here
function submitData(name,email){
    const postData = {
      name: "Steve",
      email: "steve@steve.com",
    };
    //send data 
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    };
    
    fetch("http://localhost:3000/users", configurationObject)

    //handle the response
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        const someData = data.id;
        document.body.append(someData)
      })

      //handle errors
      .catch(function (error){
       const message = 'invalid data';
        document.body.append(error.message);
      }
        )
      }
      submitData();
      

    