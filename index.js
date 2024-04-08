document.addEventListener('DOMContentLoaded',()=>{
const imagesButton= document.getElementById('images-button')
imagesButton.addEventListener('click', ()=> {
    generateImages()
})

function generateImages() {
    fetch('https://shibe.online/api/shibes?count=10')
    .then( res => {
        if (!res.ok) {
            throw new Error('Failed to generate images');
        }
        return res.json();
    })
    .then( data => {
        showImages(data)
    })
    .catch( error =>{
        console.error('Error in generating Images')
    })
}

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