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
def add_item(item, slist):
    temp = item.split(',')
    temp = [item.strip() for item in temp]
    for item in temp:
        if not item in slist:
            slist += [item]

def remove_item(item, slist):
    if item in slist:
        confirm = input('Are you sure you want to remove {}? Y/N '.format(item))
        if confirm == 'y' or confirm == 'Y':
            slist.remove(item)

def checking(item, slist):
    if not item in slist:
        want_add = input('Do you want to add {} to the shopping list? Y/N '.format(item))
        if want_add == 'y' or want_add == 'Y':
            add_item(item, slist)
    else:
        want_remove = input('Do you want to remove {} from the shopping list? Y/N '.format(item))
        if want_remove == 'y' or want_remove == 'Y':
            slist.remove(item)

choice = ""
print("Welcome to the shopping list app!")
shopping_list = []

while choice.lower() != "e":
    print("Please choose your action from the following list:")
    print("a. Add an item to the list")
    print("b. Remove an item from the list")
    print("c. Check to see if an item is on the list")
    print("d. Show all items on the list")
    print("e. exit")

    choice = input("Enter your choice [a|b|c|d|e]:")
    choice = choice.lower()
    if choice != 'e':
        if choice == 'a':
            item = input('Enter one or more items separated by commas: ')
            add_item(item, shopping_list)
        elif choice == 'b':
            item = input('Enter an item: ')
            remove_item(item, shopping_list)
        elif choice == 'c':
            item = input('Enter an item: ')
            checking(item, shopping_list)
        elif choice == "d":
            for item in shopping_list:
                print(item)
