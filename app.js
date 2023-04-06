/////////////////////*Albums*//////////////////

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//////////////////////*video handling*///////////////////

//lazy load youtube thumbnails from -> 
//https://gomakethings.com/how-to-lazy-load-youtube-videos-with-vanilla-javascript///

let videos = document.querySelectorAll('[data-youtube]')

for (let video of videos) {
    // Get the video ID
    let id = new URL(video.href).searchParams.get('v');

    // Add the ID to the data-youtube attribute
    video.setAttribute('data-youtube', id);

    // Add a role of button
    video.setAttribute('role', 'button');

    // Add a thumbnail insert after img to predetermine size:  width="560" height="315" 
    //I don't like that i've had to hardcode filetype (jpg) to the video string
    video.innerHTML =
        `<img  alt="" src="media/youtubeThumbnails/${id}.webp" class="youtubeThumbnail">
     ${video.textContent}`}

    
     
     

const resetThumbnails = (event) => {
    for (let video of videos) {
        video.innerHTML =
        `<img  alt="" src="media/youtubeThumbnails/${id}.webp" class="youtubeThumbnail">
     ${video.textContent}`}
     event.preventDefault()
    }



document.addEventListener('click', clickHandler);


function clickHandler(event) {
    
    //gets vid link
    let link = event.target.closest('[data-youtube]');
    if (!link) return;

    //prevent url from redirecting:
    event.preventDefault();

    //Get vid ID
    let id = link.getAttribute('data-youtube');

    //insert after iframe to set size:  width="560" height="315" 
    let player = document.createElement('div');
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    link.replaceWith(player)
};

////////Mobile Nav from Traversy Udemy 50 vanilla js projects course/////////
const toggle = document.getElementById('toggle')
const nav = document.getElementById('mobilenav')

toggle.addEventListener('click', () => nav.classList.toggle('active')
)


const kimonoSections = document.querySelectorAll('.kimonoSection')

const kimonoInfoButton = document.querySelector('#kimonoInfoButton')
const kimonoVideoButton = document.querySelector('#kimonoVideoButton')
const kimonoAlbumInfoButton = document.querySelector('#kimonoAlbumInfoButton')
const kimonoStreamAlbumButton = document.querySelector('#kimonoStreamButton')
const kimonoArtworkButton = document.querySelector('#kimonoArtworkButton')

const hideAllSections = (e) => {
    for (let section of kimonoSections) {
section.classList.add('hide')
    }}
const showVideo = () => {
    hideAllSections()
return kimonoSections[1].classList.remove('hide')
    }
const showAlbumInfo = () => {
    hideAllSections()
return kimonoSections[2].classList.remove('hide')
    }
const showStreamAlbum = () => {
    hideAllSections()
return kimonoSections[3].classList.remove('hide')
    }
const showArtwork = () => {
    hideAllSections()
return kimonoSections[0].classList.remove('hide')
    }





// kimonoInfoButton.addEventListener('click', hideAllSections)
kimonoVideoButton.addEventListener('click', showVideo)
kimonoAlbumInfoButton.addEventListener('click', showAlbumInfo)
kimonoStreamAlbumButton.addEventListener('click', showStreamAlbum)
kimonoArtworkButton.addEventListener('click', showArtwork)

