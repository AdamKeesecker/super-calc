(function(){
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('.number').click(display);
    $('.clear').click(clear);
    $('.decimal').click(dec);
    $('.sign').click(sign);
    $('#title').click(title);
    $('.push').click(push);
    $('.operator').click(operator);
  }
  function operator(){
    var op=$(this).data('op');
    var x = $('#queue > div:nth-child(1)').text()*1;
    var y = $('#queue > div:nth-child(2)').text()*1;
    var value;
    switch(op){
      case 'add':
        value=x+y;
        break;
      case 'sub':
        value=x-y;
        break;
      case 'mul':
        value=x*y;
        break;
      case 'div':
        value=x/y;
        break;
      case 'exp':
        value= Math.pow(x,y);
        break;
      case 'root':
        value= Math.sqrt(x,y);
        break;
      // case 'fact':
      //   value=fact(x);
      //   break;
      case 'sum':
        value=sum();
        }
    $('#display').text(value);
    }
  function sum(){
    var total = 0;
    $('#queue > div').each(function(index, div){
      var x = div.textContent*1;
      total += x;
    });
    return total;

  }
  // function fact(x){
  //   var product = 1;
  //   for(var i = 2; i <= value; i++){
  //     product *= i;
  //   }
  //   return product;
  // }
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
    if(out==='0'){
      out = num;
    }
    else{
      out += num;
    }
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
    if(symbol === 'clear'){
      $('#display').text('0');
    }
    else if(symbol==='CB'){
      $('#queue').empty();
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
  function push(){
    var display = $('#display').text();
    $('#display').text(0); //clear display to 0//
    var $div = $('<div>');
    $div.text(display);
    $('#queue').prepend($div);
  }




})();
