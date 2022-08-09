import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const elframe = document.querySelector('iframe');

const player = new Player(iframeEl);

const VIDEO_CURRENT_TIME_KEY = 'videoplayer-current-time';

const currentVideoTime = e => {
  const srtingifiEl = JSON.stringify(e);
  localStorage.setItem(VIDEO_CURRENT_TIME_KEY, srtingifiEl);
};

const savedVideoTime = () => {
  const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME_KEY);
  const parsedTime = JSON.parse(savedTime) ?? {};

  if (savedTime) {
    player.setCurrentTime(parsedTime.seconds);
  }
};

savedVideoTime();

player.on('timeupdate', throttle(currentVideoTime, 1000));
