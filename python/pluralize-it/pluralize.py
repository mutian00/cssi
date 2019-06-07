number = input("Number: ")
thing = input("Thing: ")

special_sufix = {'ife': 'ives', 'sh': 'shes', 'ch': 'ches', 'us': 'i',
                 'ay': 'ays', 'oy': 'oys', 'ey': 'eys', 'uy': 'uys', 'y': 'ies'}

def find_plural(number, thing):
    if int(number) == 1:
        return "{} {}".format(number, thing)
    else:
        for i in special_sufix:
            if thing[len(thing)-3:] == i:
                thing = thing[:len(thing)-3] + special_sufix[i]
                return "{} {}".format(number, thing)
            elif thing[len(thing)-2:] == i:
                thing = thing[:len(thing)-2] + special_sufix[i]
                return "{} {}".format(number, thing)
            elif thing[len(thing)-1:] == i:
                thing = thing[:len(thing)-1] + special_sufix[i]
                return "{} {}".format(number, thing)
        return "{} {}".format(number, thing+'s')

print(find_plural(number, thing))