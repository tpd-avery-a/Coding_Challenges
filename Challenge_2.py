array = [1, 2, 3, 4, 5]

def doit(array):
    newArray = []
    for i in range(0, len(array)):
        #print(i, ' i')
        count = 1
        #print(count, ' count')
        for j in range(0,len(array)):
            print(array[j] ,' j')
            if j != i:
                count = count * array[j]
                print(count, ' count')

        newArray.append(count)
    print(newArray)


doit(array)