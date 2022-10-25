

list = [34,2,65,34,20,15,7,5]
K = 25

def challenge(list, num):
        for x in list:
            for y in list:
                if x + y == num:
                    print(x, ' ', y, ' are equal to num')


challenge(list, K)

