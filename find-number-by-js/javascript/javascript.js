var xArray = []
function get_value() {
    var x = document.getElementById('xValue').value
    xArray.push(Number(x))
    document.getElementById('input1').innerHTML = xArray
}

function delete_value() {
    xArray = []
    document.getElementById('input1').innerHTML = xArray
}

function max() {
    var max = xArray[0]
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] > max) {
            max = xArray[i]
        }
    }
    document.getElementById('input2').innerHTML = max
}

function min() {
    var min = xArray[0]
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] < min) {
            min = xArray[i]
        }
    }
    document.getElementById('input3').innerHTML = min
}

function even() {
    var even = []
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] % 2 == 0) {
            even.push(xArray[i])
        }
    }
    document.getElementById('input4').innerHTML = even
}

function odd() {
    var odd = []
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] % 2 == 1) {
            odd.push(xArray[i])
        }
    }
    document.getElementById('input5').innerHTML = odd
}

function integer() {
    var integer = []
    for (let x = 0; x < xArray.length; x++) {
        if (xArray[x] < 2) {
            console.log(integer)
        } else {
            for (let y = 2; y < xArray[x]; y++) {
                if (xArray[x] >= 2 && xArray[x] % y != 0) {
                    integer.push(xArray[x])
                }
            }
        }
    }
    document.getElementById('input6').innerHTML = integer
}