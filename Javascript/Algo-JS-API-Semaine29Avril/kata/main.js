/* expandedForm(12); // Should return '10 + 2*1'
expandedForm(42); // Should return '4*10 + 2*1'
expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1'    */


function expandedForm(number) {
    coef = 10;
    str = ' ' + number % coef + "*1";
    number = parseInt(number / 10);
    coef *= 10;
    str = number % coef + "*10" + ' + ' + str;
    console.log(str);
}

expandedForm(12);
expandedForm(42);
expandedForm(70304);