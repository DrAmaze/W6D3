const FollowToggle = require ('./follow_toggle');

$( () => {
  const $buttons = $('.follow-toggle');

  $.each($buttons, function(idx, el) {
    new FollowToggle(el);
  });
  
});
