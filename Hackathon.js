function getData()
{
  fetch('http://localhost:2244/newData')
  .then((response) => {
      return response.json();
  })
  .then((res) => {
    demo = document.getElementById('demo');
    
    demo.innerText =  " Total Number of searches : "+res.count+ "\n" +"Carbon Emission : "+res.co2;
  });
}