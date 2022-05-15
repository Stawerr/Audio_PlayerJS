const selectorBody = document.querySelector('body')
const musicPlayer= document.createElement('div')
musicPlayer.className='music-player'
selectorBody.appendChild(musicPlayer)

const musicInfo= document.createElement('div')
musicInfo.className='music-info'
document.querySelector('.music-player').appendChild(musicInfo)

const title= document.createElement('h4')
title.textContent='Something'
title.id='title'
document.querySelector('.music-info').appendChild(title)

const progressContainer=document.createElement('div')
progressContainer.id='progress-container'
document.querySelector('.music-info').appendChild(progressContainer)

const progress=document.createElement('div')
progress.id='progress'
document.querySelector('#progress-container').appendChild(progress)

const audioInput=document.createElement('audio')
audioInput.src='music/ukulele.mp3'
audioInput.id='audio'
document.querySelector('.music-player').appendChild(audioInput)

const imgContainer=document.createElement('div')
imgContainer.className='img-container'
document.querySelector('.music-player').appendChild(imgContainer)

const img=document.createElement('img')
img.src='images/ukulele.jpg'
img.alt='music-cover'
img.id='cover'
document.querySelector('.img-container').appendChild(img)

const navigation=document.createElement('div')
navigation.className='navigation'
document.querySelector('.music-player').appendChild(navigation)

const prev=document.createElement('button')
prev.id='prev'
prev.className='action-btn'
document.querySelector('.navigation').appendChild(prev)

const prevIcon=document.createElement('i')
prevIcon.className='fas fa-backward'
document.querySelector('#prev').appendChild(prevIcon)

const play=document.createElement('button')
play.id='play'
play.className='action-btn action-btn-big'
document.querySelector('.navigation').appendChild(play)

const playIcon=document.createElement('i')
playIcon.className='fas fa-play'
document.querySelector('#play').appendChild(playIcon)

const next=document.createElement('button')
next.id='next'
next.className='action-btn'
document.querySelector('.navigation').appendChild(next)

const nextIcon=document.createElement('i')
nextIcon.className='fas fa-forward'
document.querySelector('#next').appendChild(nextIcon)