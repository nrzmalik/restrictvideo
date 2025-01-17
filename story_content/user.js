window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  restrictvideo("total-knee-replacement");
/* Comment: Replace "YourVideoAccessibilityText" with the accessibility text of the slide video. 
   To use the Storyline JsAPI variable reference, you can customize the function's query selector accordingly. */
function restrictvideo(videoId){
const eventHandlers = new Map();
    var video = document.querySelector(`[data-acc-text="${videoId}"] video`);

const seekbar = document.querySelector('.video-seekbar');
seekbar.classList.remove('draggable');
seekbar.style.cursor = 'not-allowed';

const events = ['mousedown', 'touchstart', 'click', 'dragstart'];
events.forEach(event => {
  const handler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  eventHandlers.set(event, handler);
  seekbar.addEventListener(event, handler, true);
});

video.addEventListener('ended', () => {
  seekbar.classList.add('draggable');
  seekbar.style.cursor = 'pointer';
  
  events.forEach(event => {
    seekbar.removeEventListener(event, eventHandlers.get(event), true);
  });
});
}
}

};
