$(document).ready(function(){

    $("form").submit(function(e){
        e.preventDefault();
        var msg   = $('form').serialize();

        $.ajax({
            url: "handler.php",
            type: "POST",
            data: msg,
            success: function(data){
                $("#processing").css('visibility','visible').delay(3000).fadeOut('fast');

                setTimeout(function () {
                    var url = "true.html";
                    $(location).attr('href',url);
                }, 3000);
            },
            error:  function(){
                $("#processing").css('visibility','visible').delay(3000).fadeOut('fast');

                setTimeout(function () {
                    var url = "false.html";
                    $(location).attr('href',url);
                }, 3000);
            }
        });
    })
});

$(document).ready(function() {

    // Progress
    var progressBar = $('.loading-bar span');
    var progressAmount = $('.loading-bar').attr('data-progress');
    progressAmount = 0;

    var loadingDelay = setTimeout(function () {
        var interval = setInterval(function() {
            progressAmount += 10;

            progressBar.css('width', progressAmount + '%');

            if (progressAmount >= 100) {
                setTimeout(function () {
                    clearInterval(interval);
                    reverseAnimation();
                }, 300);
            }
        }, 300);
    }, 2000);

    // Processing over
    function reverseAnimation() {
        $('#processing').removeClass('uncomplete').addClass('complete');
    }

    // Debug button
    $('#trigger').on('click', function() {
        if ($('#processing.uncomplete').length) {
            $('#processing').removeClass('uncomplete').addClass('complete');
        } else {
            $('#processing').removeClass('complete').addClass('uncomplete');
        }
    });

});
