// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let customer_name;
let balance;
let password;
let logged = false;

function openAccount(name, start_bal=0, pass){
	password = pass
  	balance = start_bal;
  	customer_name = name;
  	return customer_name + " has opened a new account with a balance of $" + start_bal + ".";
};

function deposit(value){
	if (!logged){
		return "Must log in.";
	};
  	balance = balance + value;
  	return customer_name + " has deposited " + value + ". " + customer_name + "'s total balance is $" + balance;
};

function withdraw(value){
	if (!logged){
		return "Must log in.";
	};
	if (value > balance){
		let diff = value-balance;
		return "Sorry, " +customer_name + ", you do not have enough money in your account. You need " + diff+" more dollars.";
	};
  	balance = balance - value;
  	return customer_name + " has withdrawn " + value + ". " + customer_name + " has $" + balance + " remaining."
};

function logIn(name, pass){
	if (customer_name === name && password === pass){
		logged = true;
	};
};

function logOut(){
	logged = false;
};


// Write your script below
console.log("script is running...");
console.log(openAccount('test', 300, 'password1'));
console.log(deposit(50));
console.log(withdraw(500));
console.log(withdraw(100));
console.log('logging in...');
logIn('test', 'password1');
console.log(deposit(50));
console.log(withdraw(500));
console.log(withdraw(100));
console.log('logging out...');
logOut();
console.log(deposit(50));

