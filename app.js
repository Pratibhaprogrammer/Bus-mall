      'use strict'
      function mallImage(image){
        this.timesClicked = 0;
        this.timesShown = 0;
        this.image = image;

        mallImage.allImages.push(this)

      }
      mallImage.allImages = [];
      var productNames = [];
      

      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bag.jpg');
      productNames.push('bag')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/banana.jpg');
      productNames.push('banana')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bathroom.jpg');
      productNames.push('bathroom')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/boots.jpg');
      productNames.push('boots')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/boots.jpg');
      productNames.push('boots')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/bubblegum.jpg');
      productNames.push('bubblegum')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/chair.jpg');
      productNames.push('chair')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/cthulhu.jpg');
      productNames.push('cthulhu')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/dog-duck.jpg');
      productNames.push('dog duck')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/dragon.jpg');
      productNames.push('dragon')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/pen.jpg');
      productNames.push('pen')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/pet-sweep.jpg');
      productNames.push('pet sweep')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/scissors.jpg');
      productNames.push('pizza scissors')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/shark.jpg');
      productNames.push('shark')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/sweep.png');
      productNames.push('sweep')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/tauntaun.jpg');
      productNames.push('tauntaun')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/unicorn.jpg');
      productNames.push('unicorn meat')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/usb.gif');
      productNames.push('usb')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/water-can.jpg');
      productNames.push('water can')
      new mallImage('https://raw.githubusercontent.com/codefellows/seattle-201d71/main/class-11/lab/assets/wine-glass.jpg');
      productNames.push('wine glass')
      
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
      if(counter === 5){
        productContainer.removeEventListener('click', listener);
      resultList();
      }
    var newImage = generateRandomProducts();
    renderImages(newImage[0], newImage[1], newImage[2]);
    }); 

    function resultList(){
      document.getElementById('result-list')
      var myList = document.getElementById('result-list');
      for(var i=0; i < mallImage.allImages.length; i++){
        var liEl = document.createElement('li');
        liEl.innerText = mallImage.allImages[i].image + mallImage.allImages[i].timesClicked;
        console.log(mallImage.allImages[i])
        myList.appendChild(liEl)

      console.log(liEl.innerText)
      }
    }
    

    