Chart.defaults.global.defaultFontFamily = 'Varela Round';

const ctx = document.getElementById('skillChart');

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [40, 40, 20],
            backgroundColor: [
                '#3C6478',
                '#91b5c7',
                '#5a91ac'
            ]
        }],    
       
        labels: [
            'jQuery',
            'Vanilla JS(ES6)',
            'Vue JS'
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Approximate % of use in my projects',
            position: 'bottom'
        }
    }    
});

(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){	
        $('a.page-scroll').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });	
	});				
})(jQuery);

const ps = new PerfectScrollbar('#card-content', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});
