import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframes = document.querySelector('#vimeo-player');
const plays = new Player(iframes);
console.log(plays);

const Play = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

if (localStorage.getItem('videoplayer-current-time')) {
  plays.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

plays.on('timeupdate', throttle(Play, 1000));
