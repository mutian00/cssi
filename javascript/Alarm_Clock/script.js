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

console.log("script is running...");

function Basic_Alarm(alarmMessage){
	return alarmMessage;
};

console.log(Basic_Alarm("My alarm!"));

function My_Alarm(wakeTime){
	return "Hey, [name], wake up! It's " + wakeTime;
};

console.log(My_Alarm('9:00am'));

function Mom_Alarm(wakeTime){
	return "Hey, MOM, wake up! It's " + wakeTime;
};

console.log(Mom_Alarm('9:00am'));

function Family_Alarm(person, wakeTime){
	return "Hey, " + person + ", wake up! It's " + wakeTime;
};

console.log(Family_Alarm("dad", "9:00am"));

function Important_Alarm(message){
	return message.toUpperCase();
};

console.log(Important_Alarm("wake up. wake up!"));

function Snooze(time){
	let new_time = time+1;
	return "The alarm for " + time + " has been changed to " + new_time;
};

console.log(Snooze(1));