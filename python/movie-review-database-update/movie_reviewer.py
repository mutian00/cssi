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

inside_movie = {
    "title": "Inside Out",
    "id": "tt2096673",
    "year_released": 2012,
    "rating": "PG",
    "score": 7.5,
    "out_of": 10,
    "reviews": 463787
}

# Do not edit the code above!

# Write your code below to update the information in accordance with its
# IMDB page: http://www.imdb.com/title/tt2096673/

inside_movie['score'] = 8.2
inside_movie['reviews'] = 943
del inside_movie['out_of']
inside_movie['genre'] = 'comedy'
print(inside_movie)

movie_2 = {'title': 'test 1', 'genre': 'comedy', 'score': 8.8}
movie_3 = {'title': 'test2', 'genre': 'not comedy', 'score': 9.2}
movie_list = [inside_movie, movie_2, movie_3]

genre = input('Enter a genre: ')
temp = [movie for movie in movie_list if movie['genre'] == genre]

max_score = 0
max_movie = {}
for i in range(len(temp)):
    if temp[i]['score'] > max_score:
        max_score = temp[i]['score']
        max_movie = temp[i]
print(max_movie)