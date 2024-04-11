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

    
    for (let i = 0; i < shibaImg.length; i++) { //Iterates over the images from the API
        const imageWrapper = document.createElement('div') 
        imageWrapper.className = 'image-wrapper'; //to wrap each image

        const imgElement = document.createElement('img');
        imgElement.src = shibaImg[i];
        imgElement.alt = 'shiba inu images';
        imageWrapper.appendChild(imgElement); //appends images to the DOM

        //creation of like and dislike button
        const likeButton = document.createElement('button'); 
        likeButton.textContent = 'Like'
        likeButton.className = 'like-button'
        likeButton.addEventListener('click', (e) => {
           e.preventDefault()
            handleLikeDislike('like')
            likeButton.style.backgroundColor= 'green'
        });
        imageWrapper.appendChild(likeButton)

        const dislikeButton = document.createElement('button')
        dislikeButton.textContent = 'Dislike'
        dislikeButton.className = 'dislike-button'
        
        dislikeButton.addEventListener('click', (e) => {
            e.preventDefault()
            handleLikeDislike('dislike')
            dislikeButton.style.backgroundColor= 'red'
        });
        imageWrapper.appendChild(dislikeButton)

        imgContainer.appendChild(imageWrapper)
    }
 
   
}
function handleLikeDislike(action) { //logs actions to the console
    console.log('Action:', action) 
}
})