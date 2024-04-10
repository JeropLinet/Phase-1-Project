document.addEventListener('DOMContentLoaded',()=>{ //makes sure the html page loads before any other file.

//click event listener to the button
const imagesButton= document.getElementById('images-button')

imagesButton.addEventListener('click', (e)=> {
    e.preventDefault()
    generateImages()

})

//mouse over event listener
imagesButton.addEventListener('mouseover',()=>{
    //changes the button's background color to green when the mouse goes over it.
    imagesButton.style.background ='green'
})
imagesButton.addEventListener('mouseout', function() {
    // Change the button's background color back to purple
    imagesButton.style.backgroundColor = 'plum';
  });


  //fetching images from API
function generateImages() {
    fetch('https://shibe.online/api/shibes?count=10')
    .then( res => {
        if (!res.ok) { //if the response status is not okay an Error message message pops in the console
            throw new Error('Failed to generate images');
        }
        return res.json();
    })
    .then( data => {
        showImages(data)
    })
    .catch( error =>{  //.catch handles errors
        console.error('Error in generating Images')
    })
}

//appending the images to the DOM
function showImages(shibaImg){
    const imgContainer= document.getElementById('image-container')
    imgContainer.innerHTML=''

   for( let i=0;i<shibaImg.length;i++){
    const imgElement = document.createElement('img')
    imgElement.src=shibaImg[i]
    imgElement.alt='shiba inu images'
    imgContainer.appendChild(imgElement)
   }
 
   
}

})