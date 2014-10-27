//= require_tree .

$(function() {

  $d = $(document);
  $w = $(window);
  
  var $main = $('#main');
  var $body = $('body');

  function pjaxLoad(url) {
    $.pjax({
      url: url,
      container: '#main',
      fragment: '#main'
    });
  }

  // Fadeout
  $d.on('pjax:start', function(e) {
    //
  });

  $d.on('pjax:end', function(e) {
    picturefill();
    TweenLite.to($('#clone'), 0.8, {
      opacity: 0,
      onComplete: function() {
        $('#clone').remove();
        $body.css('overflow', 'auto');
        picturefill();
      }
    });
  });

  // if ($.support.pjax) {
  //   // Load
  //   $d.on('click', '.tile', function(e) {
  //     $tile = $(this);
  //     e.preventDefault();
  //     pjaxLoad($tile.attr('href'));
  //   });
  //   // Back button
  //   $d.on('click', '.lemon-back', function(e) {
  //     e.preventDefault();
  //     pjaxLoad($(this).attr('href'));
  //   });
  // }
  
  $d.on('click', '#see-our-videos a', function(e) {
    e.preventDefault();
    $.scrollTo('#demos', {
      duration: 500
    });
  });
  
  function responsiveVideos() {
    // Videos
    var $allVideos = $("iframe[src*='//player.vimeo.com'], iframe[src*='//www.youtube.com'], iframe[src*='//embed.ted.com']"),
    // The element that is fluid width
    $fluidEl = $body;
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)
        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });

    $w.resize(function() {
      var newWidth = $fluidEl.width();
      // Resize all videos according to their own aspect ratio
      $allVideos.each(function() {
        var $el = $(this);
        $el
          .width(newWidth)
          .height(newWidth * $el.data('aspectRatio'));
      });
    // Kick off one resize to fix all videos on page load
    }).resize();
  }
  
  $d.on('click', '.demo-thumb', function(e) {
    e.preventDefault();
    $('#player').remove();
    $body
      .append('<div id="player" style="top:' + $body.scrollTop() + 'px"><iframe src="//player.vimeo.com/video/' + $(this).data('vid') + '?title=0&amp;byline=0&amp;portrait=0&amp;color=e74c3c&amp;autoplay=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><button class="player-close">Close</button></div')
      .addClass('player-active');
    responsiveVideos();
  });
  
  $d.on('click', '.player-close', function(e) {
    $('#player').remove();
    $body.removeClass('player-active');
  });
  
});