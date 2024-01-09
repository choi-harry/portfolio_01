$(document).ready(function () {

$('.right_but_1').click(function(){
    let project_1_w=$('.ps_wrap_1').width();
    $('.ps_wrap_1 .project1_movebox').animate({
      left:-project_1_w
    },300,function(){
      $('.ps_wrap_1 .project_1').eq(0).appendTo('.ps_wrap_1 .project1_movebox');
      $('.ps_wrap_1 .project1_movebox').css({
        left:0
      })
    })
})
$('.left_but_1').click(function(){
  let project_1_w=$('.ps_wrap_1').width();
  $('.ps_wrap_1 .project_1').eq(4).prependTo('.ps_wrap_1 .project1_movebox');
  $('.ps_wrap_1 .project1_movebox').css({
    left:-project_1_w
  }).animate({
    left:0
  },300)
})
$('.right_but_2').click(function(){
  let project_1_w=$('.ps_wrap_2').width();
    $('.ps_wrap_2 .project1_movebox').animate({
      left:-project_1_w
    },300,function(){
      $('.ps_wrap_2 .project_1').eq(0).appendTo('.ps_wrap_2 .project1_movebox');
      $('.ps_wrap_2 .project1_movebox').css({
        left:0
      })
    })
   
})
$('.left_but_2').click(function(){
   let project_1_w=$('.ps_wrap_2').width();
  $('.ps_wrap_2 .project_1').eq(4).prependTo('.ps_wrap_2 .project1_movebox');
  $('.ps_wrap_2 .project1_movebox').css({
    left:-project_1_w
  }).animate({
    left:0
  },300)
})

$('.right_but_4').click(function(){
  let project_1_w=$('.ps_wrap_4').width();
    $('.ps_wrap_4 .project1_movebox').animate({
      left:-project_1_w
    },300,function(){
      $('.ps_wrap_4 .project_1').eq(0).appendTo('.ps_wrap_4 .project1_movebox');
      $('.ps_wrap_4 .project1_movebox').css({
        left:0
      })
    })
   
})
$('.left_but_4').click(function(){
   let project_1_w=$('.ps_wrap_4').width();
  $('.ps_wrap_4 .project_1').eq(4).prependTo('.ps_wrap_4 .project1_movebox');
  $('.ps_wrap_4 .project1_movebox').css({
    left:-project_1_w
  }).animate({
    left:0
  },300)
})








  //  $(".center_house").mouseenter(function(){})

  //마우스오버: 피그리 움직이는 캐릭터로 전환
  $(".center_character").mouseenter(function () {
    $(".pigpig", this).attr('src', "./img/pigri_character.gif");
  })
  $(".center_character").mouseleave(function () {
    $(".pigpig", this).attr('src', "./img/pigpig.png");
  })

  $(".center_character").click(function () {
    $(".a_con").fadeIn(500);
    const el = document.querySelectorAll('.a_con');
    el.forEach((e)=>{
      e.animate({
        opacity: [
          1,0
        ]
      }, {
        duration: 300,//밀리초 지정
        iterations: 2,//반복값//반복 작업방식
        easing: 'ease',
      })
    });
  })
  // $(".center_character").click(function () {
  //   $(".a_con").fadeOut(500);
  // })


  //마우스오버: 폴더 열리는 캐릭터로 전환
  $(".left_character").mouseenter(function () {
    $("img", this).attr('src', "./img/folder_character.gif");
  })
  $(".left_character").mouseleave(function () {
    $("img", this).attr('src', "./img/close_folder.png");
  })
        //마우스 클릭: 폴더 나타내기
  $(".left_character").click(function () {
    $(".folder00").fadeIn(500);
  //   const pl = document.querySelectorAll('.folder00');
  //   // el.hasClass('trans');
  //   pl.forEach((e)=>{
  //     e.css({
  //     position:'absolute',
  //     transform: ' translate3d(0px,0px,0px)'
  //   })
  // })
  })

  //마우스오버: 종이비행기 타고가는 캐릭터로 전환
  $(".right_top_box").mouseenter(function () {
    $(".flypig", this).attr('src', "./img/fly_pig.gif");
  })
  $(".right_top_box").mouseleave(function () {
    $(".flypig", this).attr('src', "./img/fly_pig_0.png");
  })



  //마우스오버: 프로젝트 4번 (에뛰드/블루샥/질레트/보그코리아)
  $(".w01_con").mouseenter(function () {
    $("img", this).attr('src', "./img/project_4_logo-01.png");
  })
  $(".w01_con").mouseleave(function () {
    $("img", this).attr('src', "./img/project_4_logo-09.png");
  })
  //------------------------------------------------------------>에뛰드
  $(".w02_con").mouseenter(function () {
    $("img", this).attr('src', "./img/project_4_logo-02.png");
  })
  $(".w02_con").mouseleave(function () {
    $("img", this).attr('src', "./img/project_4_logo-10.png");
  })
  //------------------------------------------------------------>블루샥
  $(".w03_con").mouseenter(function () {
    $("img", this).attr('src', "./img/project_4_logo-03.png");
  })
  $(".w03_con").mouseleave(function () {
    $("img", this).attr('src', "./img/project_4_logo-11.png");
  })
  //------------------------------------------------------------>질레트
  $(".w04_con").mouseenter(function () {
    $("img", this).attr('src', "./img/project_4_logo-04.png");
  })
  $(".w04_con").mouseleave(function () {
    $("img", this).attr('src', "./img/project_4_logo-08.png");
  })
  //--------------------------------------------------------------->보그코리아
  //01 프로젝트 서브페이지 나타내기
  // $(".folder_0_in").css({
  //   transform: 'opacity(0.5)'
  // })
  //폴더 클릭시: 해당페이지 나타내기,사라지기
  $(".folder00").on({
    click: function () {
      let i = $(this).index();
      if ($(this).hasClass("add_on") === true) {
        // alert("add_on");
        $(".pc_wrap").css({
          transform: 'scale(2) translate3d(370px,180px,0px)'
        });
        $(".center_box, .h").fadeOut(300);
        $(".folder00").css({
          transform: 'scale(0.8)'
        });
        $(".contents_w_1").fadeIn(500);
        $(".folder_0_in").fadeOut();
        $(".folder_0_in").eq(i).fadeIn(2000);
        $(".folder00").addClass("add_on");
        $(this).toggleClass("add_on");
      } else if ($(this).hasClass("add_on") === false) {
        // alert("remove_on");
        $(".pc_wrap").css({
          transform: 'scale(1) translate3d(0,0,0)'
        })
        $(".contents_w_1").fadeOut(500);
        $(".center_box,.h").fadeIn(500);
        $(this).toggleClass("add_on");
      }
    }
  })

  //02 어바웃 서브페이지 나타내기
  $(".a_con").on({
    click: function () {
      $(".pc_wrap").css({
        // transform: 'scale(1.5) translate3d(-400px,30px,500px)'
      })
      let i_2 = $(this).index();
      $(".contents_w_2").fadeIn(500);
      $(".center_in").eq(i_2).fadeIn(500);
    }
  })
  $(".about_close").on({
    click: function () {
      $(".pc_wrap").css({
        transform: 'scale(1) translate3d(0,0,0)'
      })
      let ii = $(this).index();
      $(".contents_w_2").fadeOut(500);
      $(".center_in").fadeOut(500);
    }
  })

  //어바웃 서브페이지 카데고리 버튼 클릭시: 스크롤
  $(".kategory").each(function (index) {
    $(this).attr('data-index', index);
  }).click(function () {
    let di = $(this).attr('data-index');
    let page_h = $('.center_in').height();
    $(".a_text_wrap").animate({
      scrollTop: page_h * di
    })
    $(".kategory").removeClass("on");
    $(".kategory").eq(di).addClass("on");
  })
$('.a_con').each(function (index) {
  $(this).attr('data-index', index);
}).click(function(){
  let di = $(this).attr('data-index');
  $(".kategory").removeClass("on");
    $(".kategory").eq(di).addClass("on");
})

  //레터 클릭시 편지 나타내기
  $(".p_leter").click(function () {
    $(".back_dark").fadeIn(500);
  })
  $(".close_circle").click(function () {
    $(".back_dark").fadeOut(500);
  })

  $(".right_top_box").click(function () {
    $(".sns").fadeIn(1000);
  })

  //종이비행기 클릭시 텍스트창 나타내기
  $(".flypig").click(function () {
    $(".c_sns_text").fadeToggle(500);
  })
  // $(".right_top_box").click(function () {
  //   $(".c_sns_text").fadeOut(500);
  // })
  // 지우지마
})
