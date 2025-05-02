let carsData = {};


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    carsData = data;
   
    loadCategory('SUV');
  })
  .catch(error => console.error('Errore nel caricamento del file JSON:', error));


function loadCategory(category) {
  const carDisplay = document.getElementById('car-display');
  carDisplay.innerHTML = ''; 

  const cars = carsData[category];

  if (cars) {
    cars.forEach(car => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');

      const carImage = document.createElement('img');
      carImage.src = car.image;
      carCard.appendChild(carImage);

      const carInfo = document.createElement('div');
      carInfo.classList.add('info');

      const carModel = document.createElement('h3');
      carModel.textContent = car.model;
      carInfo.appendChild(carModel);

      const carYear = document.createElement('p');
      carYear.textContent = `Anno: ${car.year}`;
      carInfo.appendChild(carYear);

      const carPrice = document.createElement('p');
      carPrice.textContent = `Prezzo: ${car.price}`;
      carPrice.classList.add('price');
      carInfo.appendChild(carPrice);

      carCard.appendChild(carInfo);
      carDisplay.appendChild(carCard);
    });
  } else {
    carDisplay.innerHTML = '<p>Nessuna macchina disponibile in questa categoria.</p>';
  }
}


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60, 
      behavior: 'smooth'
    });
    e.preventDefault(); 
  });
});

