$(document) .ready(function(){
// rating bar
if ($(".rating-bar").length > 0) {
    $('.rating-bar').appear();
    $('.rating-bar').on('appear', loadSkills);

    var coun = true;

    function loadSkills() {
        $(".rating-bar").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".price-bar", this).animate({'width': datacount + '%'}, 2000);
            if (coun) {
                $(this).find('.parcentag, .parcentag-point').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
}
});

