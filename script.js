const videos = ['media/video1.mp4','media/video2.mp4','media/video3.mp4','media/video4.mp4'];
let current = 0; const bgVideo = document.getElementById('bg-video');
function playNextVideo(){ bgVideo.src = videos[current]; bgVideo.play(); current = (current + 1) % videos.length; }
bgVideo.addEventListener('ended', playNextVideo); playNextVideo();
const icons = ['❤️','🎈','🎁','💞','💕']; const container = document.querySelector('.floating-icons');
function createIcon(){ const icon = document.createElement('div'); icon.classList.add('icon'); icon.textContent = icons[Math.floor(Math.random()*icons.length)];
icon.style.left = Math.random()*100 + 'vw'; icon.style.animationDuration = 5 + Math.random()*5 + 's'; container.appendChild(icon); setTimeout(()=>icon.remove(),8000); }
setInterval(createIcon,600);