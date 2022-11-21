(() => {

  let btn = document.createElement("button");
  btn.innerHTML = "Click Me";
  btn.onclick =  async () => {
    const objective = document.getElementById('ultra-feedback');


    console.log('testing function before fetch->', objective.dataset);
    alert("Button was clicked before fetch");
    console.log('testing function->', objective.dataset);
    alert("Button is clicked objective");
    try {
      const resp = await fetch('https://next-feedback-me.vercel.app/api/test/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({payload: objective.dataset })
      })
  
      const content = await rawResponse.json();
      console.log('testing function->', objective.dataset);
      alert("Button is clicked");
    } catch (error) {
      
    }
  }
  document.body.appendChild(btn);

})()


// export const sendFeedback = async () => {
//   const objective = document.getElementById('ultra-feedback');
//   try {
//     const resp = await fetch('localhost:3000/api/test', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({payload: objective.dataset })
//     })

//     const content = await rawResponse.json();
//     console.log('testing function->', objective.dataset);

//   } catch (error) {
    
//   }
// }