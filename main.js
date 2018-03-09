function writeToDom(domString, domId)
{
    var myDiv = document.getElementById(domId);
    myDiv.innerHTML += domString;
}

/*------------- Challenge 1 -------------*/

function findYears(yearOfBirth,yearToCount)
{
    var domString = '';
    var years = yearOfBirth - yearToCount;
    if(years < 0)
    {
        domString = 'You are ' + Math.abs(years) + ' years old.';
    }
    else if(years > 0)
    {
        domString = 'You will be born in ' + Math.abs(years) + ' years.';
    }
    else
    {
        domString = 'You were born this very year!';
    }

    writeToDom(domString,'challenge-1');
}

console.log(findYears(10,10));