const data = {
    strings: ["Hello", "World", "This", "Is", "A", "Test"]
};

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF", "#FF8C33"];

const container = document.getElementById('strings-container');

const getData = async () => {
    const response = await fetch(`https://meowfacts.herokuapp.com/?count=10`,{
      method:'GET'
    })
   const data = await response.json()
   console.log(data)
   renderData(data)
  }
  const renderData = (data) =>{
    data.data.forEach((str, index) => {
    const div = document.createElement('div');
    div.classList.add('col-12', 'colored-box');
    div.style.backgroundColor = colors[index % colors.length];
    div.innerText = str;
    container.appendChild(div);
});
}
getData()

