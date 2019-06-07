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

# Replace "pass" with your code
import time

class BankAccount:
    def __init__(self, label, balance):
        self.label = label
        self.balance = balance
        self.transactions = []
        self.transferring = False

    def __str__(self):
        return "Label: {}, Balance: {}".format(self.label, self.balance)

    __repr__= __str__

    def withdraw(self, amount):
        if amount < 0:
            return 'failed'
        if self.balance < amount:
            return 'failed'
        self.balance -= amount
        new_transaction = Transactions('withdraw', amount)
        if not self.transferring:
            self.transactions += [new_transaction]

    def deposit(self, amount):
        if amount < 0:
            return 'failed'
        self.balance += amount
        new_transaction = Transactions('deposit', amount)
        self.transactions += [new_transaction]

    def rename(self, new_name):
        if new_name == '':
            return 'failed'
        self.label = new_name

    def transfer(self, dest_account, amount):
        self.transferring = True
        if self.withdraw(amount) == 'failed':
            return
        dest_account.deposit(amount)
        new_transaction = Transactions('transfer', amount, dest_account)
        self.transactions += [new_transaction]
        self.transferring = False


class Transactions:
    def __init__(self, type, amount, dest_account = None):
        self.time = time.time()
        self.type = type
        self.amount = amount
        self.dest = dest_account

    def __str__(self):
        if self.type == 'transfer':
            return "{}: {} ${} to account '{}'.".format(self.time, self.type, self.amount, self.dest.label)
        return "{}: {} ${}".format(self.time, self.type, self.amount)

    __repr__ = __str__
