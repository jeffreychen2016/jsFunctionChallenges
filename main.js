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

findYears(10,10);

/*------------- Challenge 2 -------------*/

function mathTest(number)
{
    var isPrime = false;
    var isEven = false;
    var isMultipleOf10 = false;
    var result = [];

    for(var i = 2; i < number; i++)
    {
        if(number % i == 0)
        {   
            isEven = true
            if(number % 10 == 0)
            {
                isMultipleOf10 = true;
                break;
            }
        }
        else
        {
            isPrime = true;
            isEven = false;
            isMultipleOf10 = false;
        }
    }

    result.push(isPrime,isEven,isMultipleOf10);
    writeToDom(result,'challenge-2')
}

mathTest(10);//[false,true,true]

/*------------- Challenge 3 -------------*/

function uniqueSum(arry)
{
    var uniqueValues = arry.filter(function(elem,pos,self){
        return self.indexOf(elem) == pos;
    });

    var sum = uniqueValues.reduce(function(prev,curr){
        return prev + curr;
    });
    writeToDom(sum,'challenge-3')
}

uniqueSum([-1, -1, 5, 2, -7]); //-1

/*------------- Challenge 4 -------------*/

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
arry = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]; //["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

function removeGeese(arry,geese)
{
    var result = arry.filter(function(elem){
        return geese.indexOf(elem) == -1
    })

    writeToDom(result,'challenge-4')
}

removeGeese(arry,geese);