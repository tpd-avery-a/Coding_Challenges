
const list = [3,5,8,6,4,77]
const K = 14

function challenge(list, num){
    list.map((item, id)=>{
        for(var i=0; i < list.length; i++){
            if(item + list[i] === num){
                console.log(`${item} at ${id} and ${list[i]} at ${i} are equal to num`)
            }
        }
    })
}

challenge(list,K)
