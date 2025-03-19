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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAW6MO7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDO1QBfrTQWTqH%2Fes7pm%2Ba3TaodhZnCHB3SQYiV6dwCYQIgGuyzPcbmLbEdWApS2j2zW6oLW0mo17LKC4RPIl14VVgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHosmPLgRgL1plWIsyrcA7nkxQicHGnSpRQdUVE%2BSIfF6velDuGw5BHjnbzWqyohZXKIGiPZjM%2FzCMvYd1bKUnXSwZPUt%2F2NxJEjYlDDZAWzZlrscxKb1VAsyz2ePkGYhHk6tIR7vjINP3CTBLOv3tlX7BHQt3yCjVhtCNul1mvfcOAn3fLyx8YMEZiFez8PUS8g8DofL9DllsF7gcuycppgVmMXtS230TCI3YCLkc3SJSx76vWKg4klD7F5knP4bT0hl9vn4IH5luFDPHKm2YX3x00KAcpQA1pPXi%2BxuiiXt6cX2EbpfbF%2BDyV6tY4pxkRteJL1IoFra9uZFfGRlzkYt0ceRsoePIm0OXR7AaKU8%2BpIk83DCFew9Vb0c2t%2BdngUdFhP7LLk5fu6OMmF2ayT8QyT9bXNaxNWSeV%2FuLBot%2FojzoZN2QkYzhi1SLW5DzH0Jf7WsSJNPsmIwqS3v9FtvvaXrXKftqpjaXlZWy3RYHbF5gQwOERgiZf0lOJePHVHyX4P%2F3%2BAZcpVTs3tpEC12eO%2FnZxio4p4C45voJ%2BYlo8j9JxpyrO7tPFmK89XO3kV1qRXJNUvouw8gew13jopAj%2B4O1w3OAfoklqCR3l50Lhq6ApAS9GsE9%2B1YC9rUKBRcJHBGyGpIt3gMPiw574GOqUBdfxJaGewTUuTUizNuFgOh4lTKqJY%2Fy%2F1tJO6kSCusZ3KsKsgpbQSZLB1kHl%2Bol1LwUehVJjBOBCfcDmfEoZFQMi3W9FSTw9kS7O%2BB5v%2FzcriTGgBK%2FTvn4tpbQP78Z%2BMSRGQLJxsNTUjk70SfNeHV7BrCt4h%2BkwQgNXxYX0NPUkN%2BxsG%2BW8AiuVUexDUFa5WvrXD24vsQbZ0GwsQQIw3oDOtCCRb&X-Amz-Signature=80c8304e8d6b209a099f32afe09394674150b1c7dd11d6bcb5e2d5d3210a9fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAW6MO7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDO1QBfrTQWTqH%2Fes7pm%2Ba3TaodhZnCHB3SQYiV6dwCYQIgGuyzPcbmLbEdWApS2j2zW6oLW0mo17LKC4RPIl14VVgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHosmPLgRgL1plWIsyrcA7nkxQicHGnSpRQdUVE%2BSIfF6velDuGw5BHjnbzWqyohZXKIGiPZjM%2FzCMvYd1bKUnXSwZPUt%2F2NxJEjYlDDZAWzZlrscxKb1VAsyz2ePkGYhHk6tIR7vjINP3CTBLOv3tlX7BHQt3yCjVhtCNul1mvfcOAn3fLyx8YMEZiFez8PUS8g8DofL9DllsF7gcuycppgVmMXtS230TCI3YCLkc3SJSx76vWKg4klD7F5knP4bT0hl9vn4IH5luFDPHKm2YX3x00KAcpQA1pPXi%2BxuiiXt6cX2EbpfbF%2BDyV6tY4pxkRteJL1IoFra9uZFfGRlzkYt0ceRsoePIm0OXR7AaKU8%2BpIk83DCFew9Vb0c2t%2BdngUdFhP7LLk5fu6OMmF2ayT8QyT9bXNaxNWSeV%2FuLBot%2FojzoZN2QkYzhi1SLW5DzH0Jf7WsSJNPsmIwqS3v9FtvvaXrXKftqpjaXlZWy3RYHbF5gQwOERgiZf0lOJePHVHyX4P%2F3%2BAZcpVTs3tpEC12eO%2FnZxio4p4C45voJ%2BYlo8j9JxpyrO7tPFmK89XO3kV1qRXJNUvouw8gew13jopAj%2B4O1w3OAfoklqCR3l50Lhq6ApAS9GsE9%2B1YC9rUKBRcJHBGyGpIt3gMPiw574GOqUBdfxJaGewTUuTUizNuFgOh4lTKqJY%2Fy%2F1tJO6kSCusZ3KsKsgpbQSZLB1kHl%2Bol1LwUehVJjBOBCfcDmfEoZFQMi3W9FSTw9kS7O%2BB5v%2FzcriTGgBK%2FTvn4tpbQP78Z%2BMSRGQLJxsNTUjk70SfNeHV7BrCt4h%2BkwQgNXxYX0NPUkN%2BxsG%2BW8AiuVUexDUFa5WvrXD24vsQbZ0GwsQQIw3oDOtCCRb&X-Amz-Signature=a60b1efd2a7739c62b80fab802afb1c051d502bcae553e88e29850014536262e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
