(function(){
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('.number').click(display);
    $('.clear').click(clear);
    $('.decimal').click(dec);
    $('.sign').click(sign);
    $('#title').click(title);
  }

  function title(){
    var display = $('#calculator').css('display');
    if(display==='none'){
      $('#calculator').fadeIn();
    }
    else{
      $('#calculator').fadeOut();
    }

  }

  function display(){
    var num = this.textContent;
    var out = $('#display').text();
    out += num;
    var x = out.indexOf('.');
    if (x === -1){
      $('#display').text(out);
    }
    else{
      $('#display').text(out);
    }

  }

  function clear(){
    var symbol = this.textContent;
    if(symbol === 'C'){
      $('#display').text('0');
    }
  }
  function dec(){
    var point = $('#display').text();
    if(point.indexOf('.')=== -1){
      $('#display').text(point +'.');
    }
    else{
      $('#display').text();
    }
  }
  function sign(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }




})();
