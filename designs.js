// Select color input
// Select size input

var color, width, height;

$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();
width= $('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});

//makeGrid() will be called when size is submitted by user

function makeGrid(x, y) {

// Your code goes here!
$('tr').remove();
for (i = 1; i <= x; i++){
   $('#pixelCanvas').append('<tr id=table'+ i +'></tr>');
   for(j = 1; j <= y; j++){
       $('tr').filter(':last').append('<td></td>');
   }
}

$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
})
}




