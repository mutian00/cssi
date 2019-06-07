#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import random


def get_player_move():
    """Asks the user to enter a move as 'r', 'p', or 's', and return it"""
    player_move = input("Please enter a move as r, p, or s: ")
    return player_move


def get_computer_move():
    """Randomly generates the computer's move and
    returns it in the form of 'r', 'p', or 's'"""
    moves = ['r', 'p', 's']
    computer_move = random.randint(0, 2)
    return moves[computer_move]


def determine_winner(player_move, comp_move):
    """Takes in a player move and computer move each as 'r', 'p', or 's',
    and returns the winner as 'player', 'computer', or 'tie'"""
    if player_move == 'r':
        if comp_move == 'r':
            return 'tie'
        elif comp_move == 'p':
            return 'computer'
        elif comp_move == 's':
            return 'player'
    elif player_move == 'p':
        if comp_move == 'p':
            return 'tie'
        elif comp_move == 's':
            return 'computer'
        elif comp_move == 'r':
            return 'player'
    elif player_move == 's':
        if comp_move == 's':
            return 'tie'
        elif comp_move == 'r':
            return 'computer'
        elif comp_move == 'p':
            return 'player'

def print_scoreboard(player_wins, comp_wins, ties):
    print("Player wins: {}. Computer wins: {}. Ties: {}.".format(player_wins, comp_wins, ties))


def get_move_name(short_move):
    """Takes in 'r', 'p', or 's', and returns 'Rock', 'Paper, or
    'Scissors' respectively. Use this to neatly print move choices"""
    if short_move == 'r':
        return 'Rock'
    elif short_move == 'p':
        return 'Paper'
    elif short_move == 's':
        return 'Scissors'


player_wins = 0
comp_wins = 0
ties = 0
rounds = int(input("How many rounds would you like to play? "))
round_num = 1
while round_num <= rounds:
    player_move = get_player_move()
    computer_move = get_computer_move()
    winner = determine_winner(player_move, computer_move)
    print(player_move, computer_move, winner)
    if winner == 'player':
        player_wins += 1
    elif winner == 'computer':
        comp_wins += 1
    else:
        ties += 1
    print_scoreboard(player_wins, comp_wins, ties)
    round_num += 1

if player_wins > comp_wins and player_wins > ties:
    print("Player is the final winner.")
elif comp_wins > player_wins and comp_wins > ties:
    print("Computer is the final winner.")
else:
    print("Ended in a tie.")