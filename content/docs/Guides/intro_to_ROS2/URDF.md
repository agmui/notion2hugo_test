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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GV7KQ2Z%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1OzW1V0RNbfIhVLkP%2Bbu7A3lnbBWX%2BUkzKSd1kvf10AiB3UpGeelFZl9qczYNvwwguUQae9VFM9TWTzvhdm9gz%2FSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFvTJwkItGoMKsYmiKtwDS3h%2Blq5yxKmFn22MLJ1xCpwtAmccf6%2BY48fxbsoSEaySDGMx1%2FxkQSNDQF46b%2FfSCFMvMtX9%2BTXNyKrOcQ4eM5SOq2vc5nx1W%2B3%2F9AHTDxP0%2BMh%2FU6zt%2Bnunn%2B4OBRJqeF4kD9S7AJmXTp3CjLOC2eEfecJa694vE2OhTy8NcXiwW2DEv0Y3qVTlgRMLMHynln7qFfTbgR%2Fn%2BYDe4%2BrHdWtyOIeid6G9tzuAyhsOqVjD8XfwTXGhdCmz9VxLEE2brYfeZgqdqJDCaV7l60mw8IrCWkwTYKqc%2BuV0AG%2F18LNTJg0Nw3rWxxfXNjQyRSAxkNhpyX5WEAZAtSMLA8nod%2BkoLzk2LpXyQUEi9L7t2hWHJYkakOU%2BWB0EYWWP7jfrbgZ3H%2FNUVY8gY%2BO061iDIvFuQOaGQ%2BfA6GKYxoVJzhxdyEssAAQoROoEqNWIQaxJuVcrv7PcXrtF6Bl0K%2B%2BePh8B3urzo3pd81Gy9zE404IPRf5vuZN3rD5LyTVIHRISReNYy6tuIoDJ8nN%2BxunVbzINrMyt7PLojnEjXIQlkqXPZFbG6Ftazg7%2BaT0q9jKA2f3WaCooBUdEKErjmg%2FL7cuRWhbXiFxLRnbx5bR2yHENqn4o979jFCVaDsQw4pLGvwY6pgETShIV%2B4rFJRTP6M93tAlSqgXf1Vjaml3kV69UMLns%2BCtzR97ZIlDhXqFD6zTQWKt8MvDV%2B2UiIOw1bda734oXfNMcQ2577wdk8QONLhFVyq9x5JoVnNYa7qaCssOWtEcMX3v%2Bhbf1K5tp2riltJzY1mLEUefNQWzg27dQUOaan2AYibCAtKC%2FEFqczoP0g6rgwyILbe8M0mfSp2vQ2HVNqPtBmadU&X-Amz-Signature=bc28685a6308538db9ca945de57c3c58c8a7121ec51019b341af6b2ba7782f98&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GV7KQ2Z%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1OzW1V0RNbfIhVLkP%2Bbu7A3lnbBWX%2BUkzKSd1kvf10AiB3UpGeelFZl9qczYNvwwguUQae9VFM9TWTzvhdm9gz%2FSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFvTJwkItGoMKsYmiKtwDS3h%2Blq5yxKmFn22MLJ1xCpwtAmccf6%2BY48fxbsoSEaySDGMx1%2FxkQSNDQF46b%2FfSCFMvMtX9%2BTXNyKrOcQ4eM5SOq2vc5nx1W%2B3%2F9AHTDxP0%2BMh%2FU6zt%2Bnunn%2B4OBRJqeF4kD9S7AJmXTp3CjLOC2eEfecJa694vE2OhTy8NcXiwW2DEv0Y3qVTlgRMLMHynln7qFfTbgR%2Fn%2BYDe4%2BrHdWtyOIeid6G9tzuAyhsOqVjD8XfwTXGhdCmz9VxLEE2brYfeZgqdqJDCaV7l60mw8IrCWkwTYKqc%2BuV0AG%2F18LNTJg0Nw3rWxxfXNjQyRSAxkNhpyX5WEAZAtSMLA8nod%2BkoLzk2LpXyQUEi9L7t2hWHJYkakOU%2BWB0EYWWP7jfrbgZ3H%2FNUVY8gY%2BO061iDIvFuQOaGQ%2BfA6GKYxoVJzhxdyEssAAQoROoEqNWIQaxJuVcrv7PcXrtF6Bl0K%2B%2BePh8B3urzo3pd81Gy9zE404IPRf5vuZN3rD5LyTVIHRISReNYy6tuIoDJ8nN%2BxunVbzINrMyt7PLojnEjXIQlkqXPZFbG6Ftazg7%2BaT0q9jKA2f3WaCooBUdEKErjmg%2FL7cuRWhbXiFxLRnbx5bR2yHENqn4o979jFCVaDsQw4pLGvwY6pgETShIV%2B4rFJRTP6M93tAlSqgXf1Vjaml3kV69UMLns%2BCtzR97ZIlDhXqFD6zTQWKt8MvDV%2B2UiIOw1bda734oXfNMcQ2577wdk8QONLhFVyq9x5JoVnNYa7qaCssOWtEcMX3v%2Bhbf1K5tp2riltJzY1mLEUefNQWzg27dQUOaan2AYibCAtKC%2FEFqczoP0g6rgwyILbe8M0mfSp2vQ2HVNqPtBmadU&X-Amz-Signature=dbe7ed25461610e8d454fa369299434c80557f5ecd27423be6c8b562f6d1420b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
