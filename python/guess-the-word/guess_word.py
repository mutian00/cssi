# randomly selecting a word is trivial, just create a list and randomize an index the set preset

preset = 'programming'
screen = []
guesses = []
mistakes = 0

for i in preset:
    if i.isalpha():
        screen += ['_']
    else:
        screen += [' ']

while True:
    guess = input('Guess a letter: ')
    if guess in guesses:
        print('Already guessed, guess again.' + '\n')
        continue
    guesses += [guess]
    if not guess in preset:
        mistakes += 1
    for i in range(len(preset)):
        if guess == preset[i]:
            screen[i] = guess
    print(' '.join(screen))
    print('Guesses: ' + ' '.join(guesses))
    print("Mistakes: " + str(mistakes) + '\n')
    if not '_' in screen:
        print("You Win")
        break
    if mistakes >= 5:
        print("You Lose")
        break