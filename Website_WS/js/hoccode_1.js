$(function() {
    $('.banner img:gt(0)').hide();
    setInterval(function(){
        $('.banner :first-child').fadeOut() //FadeOut là ảnh đang hiện
            .next('img').fadeIn() //fadeIn ảnh tiếp theo
            .end().appendTo('.banner'); // chuyển vị trí ảnh xuống cuối
    }, 3000);
})


