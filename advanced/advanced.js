function sumAll(arr) {
    var list = [];

    for (var i = arr[0]; i <= arr[1]; i++) {
        list.push(i);
    }

    var total = list.reduce(function(a, b) {
        return a + b;

    });

    return total;}

   