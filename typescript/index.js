function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 4.6;
var showResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, showResult, resultPhrase);
