setTimeout(() => {
    let max1 = document.getElementById("count1").innerHTML;
    let max2 = document.getElementById("count2").innerHTML;
    let max3 = document.getElementById("count3").innerHTML;
    let max4 = document.getElementById("count4").innerHTML;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    let first = setInterval(() => {
        if (count1 < max1) {
            count1++;
            document.getElementById("count1").innerHTML = count1;
        } else {
            clearInterval(first);
        }
    }, 100);

    setTimeout(() => {
        let second = setInterval(() => {
            if (count2 < max2) {
                count2++;
                document.getElementById("count2").innerHTML = count2;
            } else {
                clearInterval(second);
            }
        }, 100);
    }, 1000);

    setTimeout(() => {
        let third = setInterval(() => {
            if (count3 < max3) {
                count3++;
                document.getElementById("count3").innerHTML = count3;
            } else {
                clearInterval(third);
            }
        },  100);
    }, 3000);

    setTimeout(() => {
        let fourth = setInterval(() => {
            if (count4 < max4) {
                count4++;
                document.getElementById("count4").innerHTML = count4;
            } else {
                clearInterval(fourth);
            }
        }, 100);
    }, 6000);
}, 3000);
