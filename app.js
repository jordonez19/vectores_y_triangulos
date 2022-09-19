function clearResult(){
    location.reload()
}

    function myFunction() {
        let x = document.getElementById("X").value;
        let y = document.getElementById("Y").value;
        let mx = document.getElementById("mX").value;
        let my = document.getElementById("mY").value;
        
        if(x == ''){
            x = 0
        }
        if(y == ''){
            y = 0
        }
        if(mx == ''){
            mx = 0
        }
        if(my == ''){
            my = 0
        }

        var miCanvas = document.getElementById('myChart').getContext('2d')
        var chart = new Chart(miCanvas, {
            type: 'radar',
            data: {
                labels: ['x', 'y', '-x', '-y'],
                datasets: [
                    {
                        label: 'Mi grafica',
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        fill: true,
                        pointBackgroundColor: 'rgba(0, 0, 0, 0.1)',
                        pointHoverBackgroundColor: '#fff',
                        data: [x /* y */, y/* x */, mx /* -y */,my /* -x */]
                    }
                ]
            }
        })
    }
