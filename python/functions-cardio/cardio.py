import random
import math

def longest_word(x, y, z):
    for i in [x,y,z]:
        if len(i) == max([len(x), len(y), len(z)]):
            return i

def reverse_string(x):
    rev = ''
    print(len(x))
    for i in reversed(x):
        rev += i
    return rev

def sum_n(n):
    return (1+n)*(n)/2

def is_triangle(x, y, z):
    return z<x+y and y<x+z and x<z+y

def roll_dice(x):
    sum = 0
    for i in range(x):
        sum += random.randint(1,6)
    return sum

def isPrime(x, y=2):
    if y>math.sqrt(x):
        return True
    elif x%y != 0:
        return isPrime(x, y+1)
    return False

def snake_case(x):
    temp = []
    prev = 0
    for i in range(len(x)):
        if x[i].isupper():
            temp += [x[prev:i]]
            prev = i
    temp += [x[prev:]]
    temp = [i.lower() for i in temp]
    temp = '_'.join(temp)
    return temp

def get_number_input(prompt):
    num = input(prompt)
    while True:
        try:
            float(num)
            return num
        except ValueError:
            num = input(prompt)

'''
print(longest_word('hi', 'waief', 'hwufuilweahil'))
print(reverse_string('This is a string.'))
print(sum_n(100))
print(is_triangle(2,10,2))
print(roll_dice(20))
print(isPrime(1369))
print(snake_case("camelCase"))
'''
print(get_number_input('Please enter a number: '))