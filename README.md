# Coding Challenge 1

## Problem
Create a function that solves the most suitable (with most power) link station for a device at
given point [x,y].

Please write it in the language you know best, please also make this project as complete as you
think it should be to be maintainable in a long term by more than one maintainer.
This problem can be solved in 2-dimensional space. Link stations have reach and power.
A link station’s power can be calculated:
`power = (reach - device's distance from linkstation)^2`. (power = 0 if distance > reach)

Function receives list of link stations and the point where the device is located.
Function should output following line:
`"Best link station for point x,y is x,y with power z"`
or:
`"No link station within reach for point x,y"`

Link stations​ are located at points (x, y) and have reach (r) ([x, y, r]):
```
[[0, 0, 10],
[20, 20, 5],
[10, 0, 12]]
```

Print out function output from points​ (x, y):
(0,0), (100, 100), (15,10) and (18, 18).

## Solution
assuming that the distance between two stations (x1, y1) and (x2, y2) can be calculated using the formula
$$distance=\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$


### Javascript
- [code solution](./solution.js)
- [Try the solution online on Repl.it](https://replit.com/@SaidAbdoo/findBestStationChallengeJs#index.js)


### Python
- [code solution](./solution.py)
- [Try the solution online on Repl.it](https://replit.com/@SaidAbdoo/findBestStationChallengeJs#index.js)