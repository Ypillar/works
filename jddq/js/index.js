$(document).ready(function() {

    var none = {
        init: function() {
            this.navnone();
        },
        navnone: function() {
            $('.righta, .none').mouseover(function() {
                $('.none').show();

            }).mouseout(function() {
                $('.none').hide();
            });
            $('.btn-green').click(function() {
                $('.btn-green').css({ background: '#0eff13',
    border: '1px solid #0eff13'})
            });

        }

    }
    none.init();
    console.log("11");
});
