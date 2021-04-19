// $("#flashMessage")
// .hide()
// .slideDown(1000)
// .delay(3000)
// .slideUp();

// const title =  'My first blog post';
// const content = 'This is the content of my <strong>first</strong> post';

// $('#blogTitlePreview').text(title)
// $('#blogContentPreview').html(content)

$("#flashMessage").hide();

$(" #previewButton").click(function () {
  const title = $("#blogTitleInput").val();
  const content = $("#blogContentInput").val();

  $("#blogTitlePreview").text(title);
  $("#blogContentPreview").html(content);

  $("#flashMessage").slideDown().delay(3000).slideUp();
});
