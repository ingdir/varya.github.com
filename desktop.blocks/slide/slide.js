modules.define(
    'github__jquery',
    ['jquery'],
    function(provide, $) {

provide(function ($, window, document, undefined) {
    $(function(){
        console.log($('.slide__frame'));
    })
}($, window, document));

});
