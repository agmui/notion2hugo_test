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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDJFZR2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8wK83LM5ET0%2BBusJPl02QoMEb1jbI1p2%2FfVL72ucmOAiEAwcTQFaq21R1wKgvAbtsVFP3GFRpLooD7KbQjSI%2F9Z%2BQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnqG6K4XGZtsObuoircA6vF2K8y2ZUwULM4Rns%2BAzid%2BU7nQh8pxguHDmEqXnaMuv0yxciwZN3l6SL8z6cefdhRww6KjO11GYAfSTd0LRcOl1wedeHdKGHaKQMGN0cJnfPpw0in%2F9743ycsHsHWov6ENELxaaajw%2FpElAUMLjmVyJ%2BoKLQjBcU7cTt26c4D%2FgCkT64m13GfrrwgcD1MUkpSeD3nFUxHtncBwikrhUo9%2Fnqi3Wl31OAvTMDqg761Dm6f0pH2rLtCfsYQswkRskWQo5QwXb57JgKS1ciUBUBL3il0El0QA2MLAgChd86%2BU4KEwgI4kIydlCHGLR04c975G85VjX5Wr31UOnySNVVMhYvyMGjhgtbOtwp4hTaJwb8cO3d2MJexLyF7wHfyTsXTsAZpClMKe%2FwCnoF3atSB6xP7sGCe0lHZqTbbIQCCQNKpEHWfC9%2FjgfZwjPrrd9pwXgwrNoE83zDJNvh9NOHYQ7PqZrazVLR4B7uiy%2FQPrP6jkUpdFqJWiCSLzB9DiGfXKUOIJapvPydBPEMsH30QSHBbVl%2BcVuuDmdBPmxoPEG8YsngYa307BVWiVwvqWefvZtzPGPrwFGykJe2WxaBrI6Xqm9baQNCXq4dTrzI%2FI0TNiHJ8IRRmBxltMJKUxMAGOqUB2SR7KVvCoC%2FDfrtPJbeV0NvZqTHfd6iqZXvHcsxUejuWIlIOuQp4I7sYyOhSbQpCwpYZR6qYVp2f762RCMzJOzB%2FEMz2PTPqSw0HA6bu90A8iKb4vpUBI3RzR0q0l1elScLfueYTCVbO4jDjAI%2BLVxiYekXKcQJ%2F2zjw4TJ2dmoZ1cA66cMBuXo1CVAZf3E2KZJlbN9JFvzHHsaJF8fl%2BMPWkuGS&X-Amz-Signature=51a2ffd11d046635ebc5f3979619421111c66bf2f793ee8cd884139ab618541e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDJFZR2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8wK83LM5ET0%2BBusJPl02QoMEb1jbI1p2%2FfVL72ucmOAiEAwcTQFaq21R1wKgvAbtsVFP3GFRpLooD7KbQjSI%2F9Z%2BQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnqG6K4XGZtsObuoircA6vF2K8y2ZUwULM4Rns%2BAzid%2BU7nQh8pxguHDmEqXnaMuv0yxciwZN3l6SL8z6cefdhRww6KjO11GYAfSTd0LRcOl1wedeHdKGHaKQMGN0cJnfPpw0in%2F9743ycsHsHWov6ENELxaaajw%2FpElAUMLjmVyJ%2BoKLQjBcU7cTt26c4D%2FgCkT64m13GfrrwgcD1MUkpSeD3nFUxHtncBwikrhUo9%2Fnqi3Wl31OAvTMDqg761Dm6f0pH2rLtCfsYQswkRskWQo5QwXb57JgKS1ciUBUBL3il0El0QA2MLAgChd86%2BU4KEwgI4kIydlCHGLR04c975G85VjX5Wr31UOnySNVVMhYvyMGjhgtbOtwp4hTaJwb8cO3d2MJexLyF7wHfyTsXTsAZpClMKe%2FwCnoF3atSB6xP7sGCe0lHZqTbbIQCCQNKpEHWfC9%2FjgfZwjPrrd9pwXgwrNoE83zDJNvh9NOHYQ7PqZrazVLR4B7uiy%2FQPrP6jkUpdFqJWiCSLzB9DiGfXKUOIJapvPydBPEMsH30QSHBbVl%2BcVuuDmdBPmxoPEG8YsngYa307BVWiVwvqWefvZtzPGPrwFGykJe2WxaBrI6Xqm9baQNCXq4dTrzI%2FI0TNiHJ8IRRmBxltMJKUxMAGOqUB2SR7KVvCoC%2FDfrtPJbeV0NvZqTHfd6iqZXvHcsxUejuWIlIOuQp4I7sYyOhSbQpCwpYZR6qYVp2f762RCMzJOzB%2FEMz2PTPqSw0HA6bu90A8iKb4vpUBI3RzR0q0l1elScLfueYTCVbO4jDjAI%2BLVxiYekXKcQJ%2F2zjw4TJ2dmoZ1cA66cMBuXo1CVAZf3E2KZJlbN9JFvzHHsaJF8fl%2BMPWkuGS&X-Amz-Signature=d9b389d8fff470104087065b0e35c69c6b0f7a98adef1aa9a1e3aa6087dd2b05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
