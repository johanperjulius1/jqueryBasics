
  $('.spoiler').on('click', 'button', function(e){
    console.log(e.target)
    $(this).next().show();
    $(this).hide();

  });
  const $spoiler = $(
    "<button>Reveal Spoiler</button>"
    );
  $(".spoiler").prepend($spoiler);
$(".spoiler span").hide();

// $(".spoiler button").click(function () {
//   if(buttonText='Reveal Spoiler'){
//     buttonText ='Hide Spoiler'
//   $(".spoiler span").show();
//   $(".spoiler button").text('Hide Spoiler')
//   } else if (buttonText ='Hide Spoiler'){
//     buttonText ='Reveal Spoiler'
//     $(".spoiler span").hide();
//   }}
//   // else {
//   //   $(".spoiler span").hide();
//   //   buttonText='Reveal Spoiler' };
// );
