//Ethiopian American Technology Network
//https://bitwiseindustries.com/services/workforce-training/classes/



$("h3").click(function () {
  $(this).find("i").toggleClass("fa fa-plus fa fa-times");
});
let form = $("h3").map(function () {
  return $(this).attr("id");
});

let el = $("ul").map(function () {
  return $(this).attr("id");
});

$(function () {
  for (let i = 0; i < form.length; i++) {
    $("#" + form[i]).click(function () {
      if (window.innerWidth < 768) {
        $("#" + el[i]).slideToggle(300);
        console.log(form[i]);
        console.log(el[i])
      }
    });
  }
});

//  2nd method
// $("h3").click(function () {
//   $(this).find("i").toggleClass("fa fa-plus fa fa-times");
// });

// $("#shop").click(function () {
//   if (window.innerWidth <= 768) {
//     $("#one").slideToggle(300);
//   }
// });

// $("#ser").click(function () {
//   if (window.innerWidth < 768) {
//     $("#two").slideToggle(300);
//   }
// });
// $("#acc").click(function () {
//   if (window.innerWidth < 768) {
//     $("#three").slideToggle(300);
//   }
// });
// $("#Store").click(function () {
//   if (window.innerWidth < 768) {
//     $("#four").slideToggle(300);
//   }
// });
// $("#for").click(function () {
//   if (window.innerWidth < 768) {
//     $("#five").slideToggle(300);
//   }
// });
// $("#Education").click(function () {
//   if (window.innerWidth < 768) {
//     $("#six").slideToggle(300);
//   }
// });
// $("#health").click(function () {
//   if (window.innerWidth < 768) {
//     $("#seven").slideToggle(300);
//   }
// });
// $("#gov").click(function () {
//   if (window.innerWidth < 768) {
//     $("#eight").slideToggle(300);
//   }
// });
// $("#value").click(function () {
//   if (window.innerWidth < 768) {
//     $("#nine").slideToggle(300);
//   }
// });
// $("#about").click(function () {
//   if (window.innerWidth < 768) {
//     $("#ten").slideToggle(300);
//   }
// });
       //3rd method

// if ($(window).width() < 735)
//   $("h3").click(function () {
//     $(this).find("i").toggleClass("fa fa-plus fa fa-times");
//   });

// let  form= $("h3").map(function () {
//   return $(this).attr("id");
// });

// console.log(h)
// let el = $("ul").map(function () {
//   return $(this).attr("id");
// });
// // Event.preventDefault();
// // console.log(u)
// // if ($(window).width() < 735)
// ' use strict'
// var isMenuOpen = false;
// $(function () {
//   for (let i = 0; i < form.length; i++) {
//     $("#" + form[i]).click(function () {
//       if ($(window).width() < 735) $("#" + el[i]).slideToggle();
//     });
//   }
// });
// $(window).on("resize", function () {
//   if ($(window).width() > 735) {
//     var i;
//     for (let i = 0; i < form.length; i++) {
//       $("#" + el[i]).show();
//     }
//     if (isMenuOpen) {
//       $("#" + el[i]).show();
//     } else {
//       $("#" + el[i]).hide();
//     }
//   }
// });
//https://www.youtube.com/watch?v=j59qQ7YWLxw
