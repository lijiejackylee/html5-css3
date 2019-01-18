import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let videoEl = document.getElementsByTagName('video')[0],
    // playPauseBtn = document.getElementById('playPause'),
    // vidControls = document.getElementById('controls'),
    // muteBtn = document.getElementById('muteUnmute'),
    // timeHolder = document.getElementById('timer');
  
    // videoEl.removeAttribute('controls');
    // videoEl.addEventListener('canplaythrough',function(){
    //   vidControls.classList.remove('hidden');
    // },false);
    // playPauseBtn.addEventListener('click',function(){
    //   if (videoEl.pause) {
    //     videoEl.play();
    //   } else {
    //     videoEl.pause();
    //   }
    // }, false);
    // videoEl.addEventListener('play',function(){
    //   playPauseBtn.classList.add('playing');
    // },false);
    // videoEl.addEventListener('pause', function(){
    //   playPauseBtn.classList.remove('playing');
    // },false);

    // muteBtn.addEventListener('click',function(){
    //   if(videoEl.muted) {
    //     videoEl.muted = false;
    //   } else {
    //     videoEl.muted = true;
    //   }
    // }, false);
    // videoEl.addEventListener('volumechange', function() {
    //   if(videoEl.muted) {
    //     muteBtn.classList.add('muted');
    //   } else {
    //     muteBtn.classList.remove('muted');
    //   }
    // }, false);

    // videoEl.addEventListener('ended', function() {
    //   videoEl.currentTime = 0;
    // }, false);

    // videoEl.addEventListener('timeupdate', function() {
    //   timeHolder.innerHTML = secondsToTime(videoEl.currentTime);
    // }, false);
    
    function secondsToTime(s: any) {
      let h = Math.floor(s/(60*60)),
          dm = s % (60*60),
          m: number|string = Math.floor(dm/60),
          ds = dm % 60,
          secs:number|string = Math.ceil(ds),
          fulltime;
          
          if( secs === 60) {
            secs = 0;
            m = m +1;
          }
          if(secs<10) {
            secs = '0'+ secs;
          }
          if( m === 60) {
            m=0;
            h = h +1;
          }
          if(m<10) {
            m='0'+m;
          }
          if (h===0) {
            fulltime = m + ':' +secs ;
          } else {
            fulltime = h + ':' + m + secs;
          }
          return fulltime;
    }

    
    
  } 
}
