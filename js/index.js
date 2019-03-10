$('.school').hover(
  function() { $(this).addClass('table-active') },
  function() { $(this).removeClass('table-active') }
)


// click and redirect to edit page
$(".school").on("click", function() {
  $(location).attr('href', 'edit.html')
})