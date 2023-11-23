$('ul').on('click','li',function (){
    $(this).toggleClass('complete')
})

$('ul').on('click','span',function (e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    e.stopPropagation();
})

$('input[type="text"]').keypress(function(event){
    if(event.which===13){
        const todoText=$(this).val();
        const todoList=`<li><span><i class="fa-solid fa-trash-can"></i></span>${todoText}</li>`;
        $('ul').append(todoList);
        $(this).val('');
    }
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle();
})