import math

def findBestStation(stations, x, y):
  bestStationX = None
  bestStationY = None
  bestStationPower = 0

  for s in stations:
    power = calculatePower(s, x, y)
    if(power != 0 and power > bestStationPower):
      bestStationX = s[0]
      bestStationY = s[1]
      bestStationPower = s[2]

  if(bestStationPower == 0):
    print(f'No link station within reach for point {x},{y}')
  else:
    print(f'Best link station for point {x},{y} is {bestStationX},{bestStationY} with power {bestStationPower}')

# function to calculate the power of a link station in x,y
def calculatePower(station, x, y):
	# distance between the station and the point
  dist = math.sqrt((x-station[0])**2 + (y-station[1])**2)

  if dist > station[2]:
    return 0
  else:
    return (station[2] - dist)**2

    
# test examples
stations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]]

findBestStation(stations, 0, 1)
findBestStation(stations, 15, 15)
findBestStation(stations, 5.2, 0)