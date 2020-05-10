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

// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

$(".skill_main").each(function() {
    $(this).waypoint(function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx){
            $(this).css("width", $(this).attr("aria-valuenow") + "%")
        })
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });
});

