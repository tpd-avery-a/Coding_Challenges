array = [1, 2, 3, 4, 5]

function doIt(array){
    const newArray = []

    array.map((itemI, i)=>{
        var count = 1
        array.map((itemJ, i)=>{
            if(itemJ !== itemI){
                count = count * itemJ
            }
        })
        newArray.push(count)
    })
    console.log(newArray)
}

doIt(array)