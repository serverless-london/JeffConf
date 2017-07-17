var playlist = [{
  sources: [{
    src: 'https://www.youtube.com/watch?v=8-dQdASWkDU',
    type: 'video/youtube'
  }],
  poster: 'http://media.w3.org/2010/05/sintel/poster.png',
  thumbnail: 'https://unsplash.it/400/225/?image=0',
  name: "The littlest goober",
  description: "Yay more talking about lightsabers!! Seriously though, I'd love to answer questions you all may have about the difference in the blades, or other saber stuff."
}, {
  sources: [{
    type: "video/youtube",
    src: "https://www.youtube.com/watch?v=xjS6SftYQaQ"
  }],
  thumbnail: 'https://unsplash.it/400/225/?image=1',
  name: 'This is a big deal',
  description: "Below is a sample use case. Feel free to add the videojs-socialShare CSS/JS to your own project how you see fit. Separated here as an example."
}, {
  sources: [{
    src: 'https://www.youtube.com/watch?v=7CByY_T_abI',
    type: 'video/youtube'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png',
  thumbnail: 'https://unsplash.it/400/225/?image=2'

}, {
  sources: [{
    src: 'https://www.youtube.com/watch?v=wIB_X2N6020',
    type: 'video/youtube'
  }],
  poster: 'http://www.videojs.com/img/poster.jpg',
  thumbnail: 'https://unsplash.it/400/225/?image=3'

}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png',
  thumbnail: 'https://unsplash.it/400/225/?image=4'
}];
var player = videojs(document.getElementById('video-js-player'));
var description = document.querySelector('[data-video-js-description]')
var title = document.querySelector('[data-video-js-title]')


player.on('loadedmetadata', function() {
  i = player.playlist.currentItem()
  var title_text = playlist[i].name || " ";
  var description_text = playlist[i].description || " ";
  title.textContent = title_text;
  description.textContent = description_text;
});

player.playlist(playlist);
player.playlist.autoadvance(0);
player.playlistUi();

