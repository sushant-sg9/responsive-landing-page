const ctx = document.getElementById('myChart').getContext('2d');

const labels = [5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]; 

const data = {
    labels: labels,
    datasets: [{
        backgroundColor: '#2a59d6',
        borderColor: '#2a59d6',
        data: [5, 6, 6.5, 6.7, 6.6, 7.5, 7, 7.8, 8, 8.5, 10, 10.5, 11], 
        pointBackgroundColor: ['transparent', 'transparent', 'transparent', 'transparent', '#2a59d6', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'], // Set color for each point
        pointBorderColor: ['transparent', 'transparent', 'transparent', 'transparent', '#adedfd', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'], // Set border color for each point
        pointRadius: 9, 
        pointBorderWidth: 5,
        pointHoverRadius: 7, 
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return ['16 Feb', '17 Feb', '18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb'][index];
                    }
                },
            },
            x: {
                grid: {
                    color: 'transparent'
                }
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
};

const myChart = new Chart(ctx, config);

window.onload = function() {
    if (window.innerWidth <= 558) {
        var sectionForShare = document.querySelector('.section-for-share');
        var practiceBox = document.querySelector('.sections-practice-test');
        var parent = practiceBox.parentNode;
        parent.insertBefore(sectionForShare, practiceBox.nextSibling);
    }
}   

function rearrangeSections() {
    const premiumFeature = document.querySelector('.premium-feature');
    const mobileMocktest = document.querySelector('.mobile_mocktest');
    const parentContainer = document.querySelector('.sections-practice-test');

    if (window.innerWidth <= 558) {
        parentContainer.insertBefore(premiumFeature, mobileMocktest.nextSibling);
    }
}
window.addEventListener('resize', rearrangeSections);

rearrangeSections();
