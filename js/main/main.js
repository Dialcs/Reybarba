jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
        menu = $('.navigation ul');
    
    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });

    var subBTN = $('.SUBMENU');
        submenu = $('.navigation ul ul');

    subBTN.click(function(){
        if(submenu.hasClass('sub')){
            submenu.removeClass('sub');
        }else{
            submenu.addClass('sub');
        }
    })

    $('main').click(function(){
        if(submenu.hasClass('sub'))
            submenu.removeClass('sub');
    });

    $('.sbm').click(function(){
        if(submenu.hasClass('sub'))
            submenu.removeClass('sub');
    });

    $('.sbm').click(function(){
        if(menu.hasClass('show'))
        menu.removeClass('show');
    });
});