const $odd = $("a:odd");
const $secureLinks = $('a[href^="https://"');
const $pdfs = $('a[href$=".pdf"]');
const $inputBox = $("<label><input type='checkbox'> Allow PDF downloads</label>")
$secureLinks.attr("target", "_blank");
$pdfs.attr("download", true);
$secureLinks.addClass('secure');
$pdfs.on('click', function(event){
  if($(':checked').length===0 ){
  event.preventDefault();
  alert('please check the box to allow pdf download')
  }
})

$("#links").append($inputBox);