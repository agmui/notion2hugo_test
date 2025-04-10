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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBKOB55%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDjy3JIGmcp7tNtUEXaSK1N%2B3iByTMalOQrYqAtqOEyyAIgcukA5HYBzGmg7ifEprRXRP44DPCNyAfvczJDOMC94zgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCBibsUeOy73P3F0ircA7DfS8m6pkOE59lC7zh0hwpGNw02R2%2BfUndEryQdAFsnokCgiinG4wSjtsNAgmiqabfqUHUac9zF5WT22Cri%2BprSyNih0j3o%2FcbP7O8zVjKcLwKSsInXGHm8QGXVVsjVinewrco8vG%2F993myjd58KKOPn1gjHy%2FOvtHRAT%2BgeLKoR3fGH5qY9R1%2Fi8yglqR1iouOnKP%2BMz2DpNYvYSJyaPGNI0Xmuhw%2BFtT59839Ecwvg1CrA8gE%2BOXuMnQ1aDDGyIUQkBGZLILj931Tdq65yu9PsFcwxnCYQPTuxr3XILz3VCm17Tm05cdWoLD2jMEyy5MSRRWiviVgWTn43ws4WYBAHVRS%2BWeB6qpeB3mW898R6cExdYTT7ItyC7rzblN4FSXVrSVKf%2BCHr9gwHT0wdI3bCf3ZKpMXU5wMFX7CrGsdO4xf5dOYf9bNNMoFqH5nq6tmP8R9hRgmGAYAmDMVLf3NQ%2Bmaq9TIesIClflfR0wsjmpSbwBYofvbB2VMJ%2BARZUYPBOYqJE9fGdCnTdXGS%2FOYLe%2Fh7dasrXrNGEeMLGp8%2FPq5JCVSIpdMPIGyxep9pT%2Fh9KOfpULxN9C6147eyT2KeIYYx31zcFFoUZ%2FwdlTMQhIbCLIBTQRrby%2BwMO%2B4378GOqUBDVplNqyo1%2FNreCH7aH%2FZZhsN5l9SlDeKnlXJqyfaBy%2ByY1G6TxnmhqfDcDk%2BBij2Pbag69Xk0u7xhvsZfP%2Fas2Uz9m8uj9Uv%2FIItPZgM4LaTpNiD7zS4Y88j1Fqtz59t59btGsRcbF%2FcVnOvSccMkSXs35hEyBQEVlp%2FdSQn3enUw8Zh%2FQ9cUB4LqRr1VQR8f9jCpXUoCQXq%2FOnJpmWZNaRTnFM9&X-Amz-Signature=c780e2396c2d3f3f918aa0e2fbd38f50f0d9e864d5df260cd9fc9c6265e46e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBKOB55%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDjy3JIGmcp7tNtUEXaSK1N%2B3iByTMalOQrYqAtqOEyyAIgcukA5HYBzGmg7ifEprRXRP44DPCNyAfvczJDOMC94zgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCBibsUeOy73P3F0ircA7DfS8m6pkOE59lC7zh0hwpGNw02R2%2BfUndEryQdAFsnokCgiinG4wSjtsNAgmiqabfqUHUac9zF5WT22Cri%2BprSyNih0j3o%2FcbP7O8zVjKcLwKSsInXGHm8QGXVVsjVinewrco8vG%2F993myjd58KKOPn1gjHy%2FOvtHRAT%2BgeLKoR3fGH5qY9R1%2Fi8yglqR1iouOnKP%2BMz2DpNYvYSJyaPGNI0Xmuhw%2BFtT59839Ecwvg1CrA8gE%2BOXuMnQ1aDDGyIUQkBGZLILj931Tdq65yu9PsFcwxnCYQPTuxr3XILz3VCm17Tm05cdWoLD2jMEyy5MSRRWiviVgWTn43ws4WYBAHVRS%2BWeB6qpeB3mW898R6cExdYTT7ItyC7rzblN4FSXVrSVKf%2BCHr9gwHT0wdI3bCf3ZKpMXU5wMFX7CrGsdO4xf5dOYf9bNNMoFqH5nq6tmP8R9hRgmGAYAmDMVLf3NQ%2Bmaq9TIesIClflfR0wsjmpSbwBYofvbB2VMJ%2BARZUYPBOYqJE9fGdCnTdXGS%2FOYLe%2Fh7dasrXrNGEeMLGp8%2FPq5JCVSIpdMPIGyxep9pT%2Fh9KOfpULxN9C6147eyT2KeIYYx31zcFFoUZ%2FwdlTMQhIbCLIBTQRrby%2BwMO%2B4378GOqUBDVplNqyo1%2FNreCH7aH%2FZZhsN5l9SlDeKnlXJqyfaBy%2ByY1G6TxnmhqfDcDk%2BBij2Pbag69Xk0u7xhvsZfP%2Fas2Uz9m8uj9Uv%2FIItPZgM4LaTpNiD7zS4Y88j1Fqtz59t59btGsRcbF%2FcVnOvSccMkSXs35hEyBQEVlp%2FdSQn3enUw8Zh%2FQ9cUB4LqRr1VQR8f9jCpXUoCQXq%2FOnJpmWZNaRTnFM9&X-Amz-Signature=36ef4b29f3b7d85e372537565069b1dfbfe12043a63c037e3a168bfafc2643a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
