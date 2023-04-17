$(document).ready(function() {
    
$(".delete-book").on("click", function(e){
        e.preventDefault();
        if(confirm("Estas seguro que quieres eliminar este libro?")){
        $(this).closest("#form-delete-book").submit();
        }
})
 

$(".delete-category").on("click", function(e){
    e.preventDefault();
    if(confirm("Estas seguro que quieres eliminar esta categoria?")){
       $(this).closest("#form-delete-category").submit();
    }
})

$(".delete-writer").on("click", function(e){
    e.preventDefault();
    if(confirm("Estas seguro de que quieres eliminar a este autor?")){
    $(this).closest("#form-delete-writer").submit();
    }
})

$(".delete-editorial").on("click", function(e){
    e.preventDefault();
    if(confirm("Estas seguro de que quieres eliminar este editorial?")){
    $(this).closest("#form-delete-editorial").submit();
    }
})


});

