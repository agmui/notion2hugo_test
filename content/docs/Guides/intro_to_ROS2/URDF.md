---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRPULNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBQQ8i6tsPu7hJ3v4lhOShwuTEcJqSijWasqW1B5PKCPAiEAzZpxwfW9Qe1l4z6c%2F%2Fqte%2F9UZHVWnU9aSDmKet3DKmgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvp%2BD436wMV7v%2F1RircA5w6PrNthS1nR01iuOlSbkf7A2YaWpyCjgwLlyEgLdO0TCybg8nDKbNy2%2FYbA1VSoDw%2FYR0bTPxCry6Igy8xeH3fcRlHUTGyFNlNUHUBKD96yXDcWC034Cpy1K5l8bZ0lRm%2BeFQ%2B1p31xgLvnPZv9L3Ay4FKdLvfm3eU2gLkNYrdWvtF1qr3tAxIR2HSVbF8KL%2FudKGA9yOndrkEyQZTCZDZlOIJXVmsXoduNpFevmqQbjk3QTDslSuRq9G3Jm%2FXHxGZ6OA2vE6IpFHd2uT%2FVbeB5PLwDkpO2a3pORcEmAOajZeo2o1%2FNedlhB7Hih9B1IA4gmnUHhrkJm2wxDn0YJsOyK0gws%2BEBVYluGw8c5aVziDcts37C5kBYy6Kxe71xM7dzcbtjeN8bobt%2BzcaFzOLEsJvjYUvE8qNaUAWJZxetuH45MmG4aTiLyfXc7CFjGX5dNLOjo6QuB9ja1XzFdGiU9ojizEfP8EFldhgbSQkcrgIQ7y0Md7aBKowMQb1xDz9aYv186P%2FSeM3%2B3oscNQR%2Fe52bxZpgdgKW8WbFH3WcWkR2UtI4km92wg7MDlY5UIqpNYyOsOxNa%2FRugC4DsN9Xj0uQjMOYqSWEdPn5is2wwhD64WV%2FPq8DJrSMK%2Br8cEGOqUBtjr2l0xxDEQtYWdJ%2FJNTVWbc6c1O4GwXqYQUGYycLI3TXpSWreTSkJ%2BNM3bNnvuJXSbYQX%2FpYcPW7xiHs1ZgxCdT%2FMbca7C3KV0cYVfoHlSXE4f9diqKEKZkl5GyZfFAofFl3%2FJ2ngBAq3BlBY4XanwNsUKTkWBJWKS%2Fm%2Bp2TDg0beqlTWJ7PEJ1o21jhilx5eHJXpgEMlzvkwBhSy8JLL7Vyf%2F5&X-Amz-Signature=ac541a970da0d23c66e4e8dda741ebaf7e95c3836d97a7d7af7b3f1c44d86de7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHRPULNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBQQ8i6tsPu7hJ3v4lhOShwuTEcJqSijWasqW1B5PKCPAiEAzZpxwfW9Qe1l4z6c%2F%2Fqte%2F9UZHVWnU9aSDmKet3DKmgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvp%2BD436wMV7v%2F1RircA5w6PrNthS1nR01iuOlSbkf7A2YaWpyCjgwLlyEgLdO0TCybg8nDKbNy2%2FYbA1VSoDw%2FYR0bTPxCry6Igy8xeH3fcRlHUTGyFNlNUHUBKD96yXDcWC034Cpy1K5l8bZ0lRm%2BeFQ%2B1p31xgLvnPZv9L3Ay4FKdLvfm3eU2gLkNYrdWvtF1qr3tAxIR2HSVbF8KL%2FudKGA9yOndrkEyQZTCZDZlOIJXVmsXoduNpFevmqQbjk3QTDslSuRq9G3Jm%2FXHxGZ6OA2vE6IpFHd2uT%2FVbeB5PLwDkpO2a3pORcEmAOajZeo2o1%2FNedlhB7Hih9B1IA4gmnUHhrkJm2wxDn0YJsOyK0gws%2BEBVYluGw8c5aVziDcts37C5kBYy6Kxe71xM7dzcbtjeN8bobt%2BzcaFzOLEsJvjYUvE8qNaUAWJZxetuH45MmG4aTiLyfXc7CFjGX5dNLOjo6QuB9ja1XzFdGiU9ojizEfP8EFldhgbSQkcrgIQ7y0Md7aBKowMQb1xDz9aYv186P%2FSeM3%2B3oscNQR%2Fe52bxZpgdgKW8WbFH3WcWkR2UtI4km92wg7MDlY5UIqpNYyOsOxNa%2FRugC4DsN9Xj0uQjMOYqSWEdPn5is2wwhD64WV%2FPq8DJrSMK%2Br8cEGOqUBtjr2l0xxDEQtYWdJ%2FJNTVWbc6c1O4GwXqYQUGYycLI3TXpSWreTSkJ%2BNM3bNnvuJXSbYQX%2FpYcPW7xiHs1ZgxCdT%2FMbca7C3KV0cYVfoHlSXE4f9diqKEKZkl5GyZfFAofFl3%2FJ2ngBAq3BlBY4XanwNsUKTkWBJWKS%2Fm%2Bp2TDg0beqlTWJ7PEJ1o21jhilx5eHJXpgEMlzvkwBhSy8JLL7Vyf%2F5&X-Amz-Signature=8f86a40c9e272fa2fbac54c53f5804e46056d65cc45b30afe3cb8151fa21b125&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
