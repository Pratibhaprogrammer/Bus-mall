        'use strict'
        function mallImage(productName, image){
          this.name = productName
          this.timesClicked = 0;
          this.timesShown = 0;
          this.image = image;

          mallImage.allImages.push(this)

        }
        mallImage.allImages = [];
      
        

        new mallImage('bag','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bag.jpg');
      
        new mallImage('banana','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/banana.jpg');
      
        new mallImage('bathroom','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bathroom.jpg');
        
        new mallImage('boots','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/boots.jpg');
        
        new mallImage('bubblegum','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bubblegum.jpg');
      
        new mallImage('chair','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/chair.jpg');
        
        new mallImage('cthulhu','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/cthulhu.jpg');
      
        new mallImage('dog duck','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/dog-duck.jpg');
      
        new mallImage('dragon','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/dragon.jpg');
        
        new mallImage('pen','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/pen.jpg');
      
        new mallImage('pet sweep','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/pet-sweep.jpg');
      
        new mallImage('pizza scissors','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/scissors.jpg');
      
        new mallImage('shark','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/shark.jpg');
        
        new mallImage('sweep','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/sweep.png');
        
        new mallImage('tauntaun','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/tauntaun.jpg');
        
        new mallImage('unicorn meat','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/unicorn.jpg');
        
        new mallImage('usb','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/usb.gif');
        
        new mallImage('water can','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/water-can.jpg');
      
        new mallImage('wine glass','https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/wine-glass.jpg');
        
        var productContainer = document.getElementById('product-container');
        var leftImage = document.getElementById('left-image');
        var middleImage = document.getElementById('middle-image');
        var rightImage = document.getElementById('right-image');

        function generateRandomProducts(){
          var leftIndex = Math.floor(Math.random() * mallImage.allImages.length);
          var middleIndex = Math.floor(Math.random() * mallImage.allImages.length);
          var rightIndex = Math.floor(Math.random() * mallImage.allImages.length);

          while (rightIndex === leftIndex){
            rightIndex = Math.floor(Math.random() * mallImage.allImages.length);
          }
          while( middleIndex === rightIndex || middleIndex === leftIndex){
            middleIndex  = Math.floor(Math.random() * mallImage.allImages.length);
          }
          var leftImage = mallImage.allImages[leftIndex];
        var middleImage = mallImage.allImages[middleIndex];
        var rightImage = mallImage.allImages[rightIndex];
          
        return [leftImage, middleImage, rightImage];
        }

      

      function renderImages (lImage, mImage, rImage){
        leftImage.src = lImage.image;
        lImage.timesShown++;
        
        middleImage.src = mImage.image;
        mImage.timesShown++;

        rightImage.src = rImage.image;
        rImage.timesShown++;
      }

      var randomProduct = generateRandomProducts();
      renderImages(randomProduct[0], randomProduct[1], randomProduct[2]);
      var counter = 0 
      productContainer.addEventListener('click', function listener(event){
        counter ++
        
        for (var i =0; i < mallImage.allImages.length; i++){
          if (event.target.src.includes(mallImage.allImages[i].image)){
          mallImage.allImages[i].timesClicked++;
        // console.log(mallImage.allImages[i]);
      

        }
        
      }
      console.log(counter)
        if(counter === 25){
          productContainer.removeEventListener('click', listener);
        //resultList();
        generateData()
        generateCharts()
        }
      var newImage = generateRandomProducts();
      renderImages(newImage[0], newImage[1], newImage[2]);
      }); 

      function resultList(){
        document.getElementById('result-list')
        var myList = document.getElementById('result-list');
        for(var i=0; i < mallImage.allImages.length; i++){
          var liEl = document.createElement('li');
          liEl.innerText = mallImage.allImages[i].name + " " + mallImage.allImages[i].timesClicked;
          console.log(mallImage.allImages[i])
          myList.appendChild(liEl)

        console.log(liEl.innerText)
        }
      }
      //Bade (TA) 
  // 1. Get the button html element. You can do this using an id.
  // 1:58 PM | Today 

  // Bade (TA) 
  // 2. Call addEventListener on that button. The first parameter would be 'click' and the second parameter is a callback function
  // 1:58 PM | Today 
    var button = document.getElementById('button');
    button.addEventListener('click', resultList );
      
    




  var ctx = document.getElementById('myChart').getContext('2d');

  var productName = [];
  var timesClicked = [];
  var timesShown = [];
  function generateData(){
  for( var i = 0; i < mallImage.allImages.length; i++){
    productName.push(mallImage.allImages[i].name);
    timesClicked.push(mallImage.allImages[i].timesClicked);
    timesShown.push(mallImage.allImages[i].timesShown);
  }
  }
  console.log(productName, 'product name array');
  console.log(timesClicked, 'times clicked array');
  console.log(timesShown, 'times shown array')
  function generateCharts(){
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productName, // array of strings goes here
      datasets: [{
        label: 'times clicked',
        data: timesClicked, // array of numbers goes here
        // data: votesByProduct,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      },
      {
        label: 'times Shows',
        data: timesShown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}