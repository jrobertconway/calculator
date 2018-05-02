$(document).ready(function(){
	
	var operands = ['+', '-', '*', '/', '%', '.'];

function Check() {
  var lastChar = $('#answer').text().slice(-1);
  for (var i = 0; i < operands.length; i++) {
    if (operands[i] == lastChar) {
      $('#answer').text('Err');
    }
  }
}
$('#allClear').click(function() {
  $('#answer').text('');
});

$('#clear').click(function() {
  $('#answer').text('');
});

$('#plus').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '+');
});

$('#op').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '(');
});

$('#clo').click(function() {
  Check();
  $('#answer').text($('#answer').text() + ')');
});

$('#minus').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '-');
});

$('#multi').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '*');
});

$('#divide').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '/');
});

$('#percent').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '%');
});

$('#dot').click(function() {
  Check();
  $('#answer').text($('#answer').text() + '.');
});

$('#equals').click(function() {
  $('#answer').text(eval($('#answer').text()));
});

$('#nine').click(function() {
  $('#answer').text($('#answer').text() + 9);
});

$('#eight').click(function() {
  $('#answer').text($('#answer').text() + 8);
});

$('#seven').click(function() {
  $('#answer').text($('#answer').text() + 7);
});

$('#six').click(function() {
  $('#answer').text($('#answer').text() + 6);
});

$('#five').click(function() {
  $('#answer').text($('#answer').text() + 5);
});

$('#four').click(function() {
  $('#answer').text($('#answer').text() + 4);
});

$('#three').click(function() {
  $('#answer').text($('#answer').text() + 3);
});

$('#two').click(function() {
  $('#answer').text($('#answer').text() + 2);
});

$('#one').click(function() {
  $('#answer').text($('#answer').text() + 1);
});

$('#zero').click(function() {
  $('#answer').text($('#answer').text() + 0);
});
	
});


