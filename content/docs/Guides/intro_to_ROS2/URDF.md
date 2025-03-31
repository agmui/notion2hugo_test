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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLTMLZJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBJ8Ud2GZ68Y8TtQ3NNo0s9QU9dcO%2B2JYigQPOrssshsAiEAwRpZgu2LoTvCy6HEuQ%2BBNu7r9RA%2FFzA%2BJXxx7OHLQfUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNDxO6ULu7tesoDoCrcA9yqLQ8efsPye%2BQloHPjOxf3gDLQnmWqo3D1492c3QfKJt8ohHiD0DX%2BYbGsl5kPgLtRBs0UDJRAbROJF8fYFR6tlynjK4vPl%2FTWO8842zm%2FtrgNV3KiIJtuf95%2F7dHqGKf2K8UO%2Bqnry48K8GkpqG9LHnpPFMNIry5ER40QDVNqSbZ47PhLsyH5pcDYILmrxmbgv9cIw%2Fvv8E%2B3cicIGZkGK7HUjooKc78EGZvgbcKaMON62VI%2B1EmY4WdHiTwtkeGDC65dIKphX2mEzRb3YPwn56eu3cDOJha25emWA0FCgdJaPlW7Dan8n%2BY3l2zXQwMoG2YPEgaiUdLRDHjoXAa03x335EX1AU39dgZUTO7Yn7OSbQGyeIjRCxGf3P07zgbmSyHxN%2FZFdjf9LTS916UdWZakauOdDX6PWCYOYJjD4GzFTsRq4Sg0ZBcBB%2FIP4UY19qJpSiBpFBGBlGF%2BWOGj4IMLq7Fdg0ke6UT%2BQET1Ed6DQBJpYQjRXRCOpUomfCWWiAR2qC1WzqPZywqlBHau6oXph90Mn4G3XZZAhDmuLvBLPntdVOpelW2An7PMNB2vNqd6f45UGWFwArYW2AIzuuxfIsdE9Hyi4a4By5bBcVqC2Bp%2B4wsOrOi3MLe8p78GOqUBAY%2BUubwpffv6nsiU5rRfxQv%2BUzEfnyYFa%2B7V8td%2B1DdQnqWKjnZcGTtOkmrl%2FmQZ5BqysV85uBV80DpSmoIsCv84iWhOd8dKse77QYuCVF4BpVMHtef%2BFeLDvxe%2BZ4Pt72dnHafftWia5tJGVEej%2BewSFlaSpWTb1KUF%2FfIq0PhBNUGRqIo4rOtrliv69YbZofYDpIuyf%2FatfQmGIbsgKN0rkABu&X-Amz-Signature=e355a1edd07c97063dbc823a07a1430b86699aa761eea6d75fd58a05245f7f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLTMLZJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBJ8Ud2GZ68Y8TtQ3NNo0s9QU9dcO%2B2JYigQPOrssshsAiEAwRpZgu2LoTvCy6HEuQ%2BBNu7r9RA%2FFzA%2BJXxx7OHLQfUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNDxO6ULu7tesoDoCrcA9yqLQ8efsPye%2BQloHPjOxf3gDLQnmWqo3D1492c3QfKJt8ohHiD0DX%2BYbGsl5kPgLtRBs0UDJRAbROJF8fYFR6tlynjK4vPl%2FTWO8842zm%2FtrgNV3KiIJtuf95%2F7dHqGKf2K8UO%2Bqnry48K8GkpqG9LHnpPFMNIry5ER40QDVNqSbZ47PhLsyH5pcDYILmrxmbgv9cIw%2Fvv8E%2B3cicIGZkGK7HUjooKc78EGZvgbcKaMON62VI%2B1EmY4WdHiTwtkeGDC65dIKphX2mEzRb3YPwn56eu3cDOJha25emWA0FCgdJaPlW7Dan8n%2BY3l2zXQwMoG2YPEgaiUdLRDHjoXAa03x335EX1AU39dgZUTO7Yn7OSbQGyeIjRCxGf3P07zgbmSyHxN%2FZFdjf9LTS916UdWZakauOdDX6PWCYOYJjD4GzFTsRq4Sg0ZBcBB%2FIP4UY19qJpSiBpFBGBlGF%2BWOGj4IMLq7Fdg0ke6UT%2BQET1Ed6DQBJpYQjRXRCOpUomfCWWiAR2qC1WzqPZywqlBHau6oXph90Mn4G3XZZAhDmuLvBLPntdVOpelW2An7PMNB2vNqd6f45UGWFwArYW2AIzuuxfIsdE9Hyi4a4By5bBcVqC2Bp%2B4wsOrOi3MLe8p78GOqUBAY%2BUubwpffv6nsiU5rRfxQv%2BUzEfnyYFa%2B7V8td%2B1DdQnqWKjnZcGTtOkmrl%2FmQZ5BqysV85uBV80DpSmoIsCv84iWhOd8dKse77QYuCVF4BpVMHtef%2BFeLDvxe%2BZ4Pt72dnHafftWia5tJGVEej%2BewSFlaSpWTb1KUF%2FfIq0PhBNUGRqIo4rOtrliv69YbZofYDpIuyf%2FatfQmGIbsgKN0rkABu&X-Amz-Signature=65a05869f5e72c6806e74d5093b01e4216fd625c6f5dbe7d2e4456a2e6ee99ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
