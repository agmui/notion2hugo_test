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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWB4QIH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDrvcyMin60FXrR7Qn2DeX1ugyRPUFOymrC%2BchmyfbSLAiAxSz6iB2NFG0FIzAhbO5KTGjoDHWtG4xdCpPuP3hvEhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUUC5Z00XQRHb2VZAKtwDnYs%2FaqpOoynd6OuiDZHNdHMwTjGvd20GHKJd2vZk1WGcSDBdDjulQk9%2BZ%2FJqx8CP4%2FtY9Ym67i%2BKDfwIi9ZMTZtDaAofNqbxWczCi7IoM%2BssrIYOebQv4TWZB4KB5RcPpAMop7hTMO0zlPqSh%2FjBXUCQCHCCklRNr6%2FwtgFpQSxUOVIxaJTuZ661ndxrAgWjzSqeGua7PyS9SuKi2N6CyMCQy7eOeEfnO1ulI5Nh0GFcui92hGKUYFverWguMhnoj%2BNJcKHKu67Jwwy6fFDFcTyVCUJoWDwcBNY0NyMgM9Zx94Qp07U9N7Nnjokg%2BrpklEI2vuPDwqG5IYaKCy2Voa6wZBMchNPqb7vc8xbv7qfMlXxrcf1W%2BYxegwKgTw9ZVGbznc8TA%2Be6KoPxMRyXYuJyE8WEGSGFZVJtXqs3Qh2bYF8wGRGRASmodql3Y7C%2FYaHj0E1mJhO9RzVUq9J3pDZfJxJx0KTEX3vfxKQ%2FhivAOHOhtXVFxop2eC%2FmyBgjf9zU%2BdOKb%2FK2I2eiEyYS95wpUiGKZJWOAXRkSPjB1Pvu0cFK4%2BqcUQo%2BgD4rD%2Fu2ZfpUNtqFdXcn76rrBSPquSwcMPrPvP79dFW3Z3UAQ7RCn7xuw75I9tbh0QUwpIbawwY6pgGqec6jB6vvM3z9m8S4Ylv5vEatc1S9D59JT5IlLdHKbLl6CiDZpD5jHr317dVvHBCGrvnU5UZOLo1Wcya%2BsL4JI8oVCjHpdd8d6%2BBo8FBnxQFJtTSXE%2FcH5fvS%2B5ueQmYjizRAYnNUmD3dFmT4YmaA9ueAwh8zRkg%2BOdiAeTRqhPZLCNKjZpUtyWS%2BkRxdlgWVwiq83mArCwZnuJPQ3f7lvOVv289A&X-Amz-Signature=5bd205c754b3b515a7aad7aa38d35eefd505aa1ecdada3ff3ef3672a63bd47b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMWB4QIH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDrvcyMin60FXrR7Qn2DeX1ugyRPUFOymrC%2BchmyfbSLAiAxSz6iB2NFG0FIzAhbO5KTGjoDHWtG4xdCpPuP3hvEhSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMUUC5Z00XQRHb2VZAKtwDnYs%2FaqpOoynd6OuiDZHNdHMwTjGvd20GHKJd2vZk1WGcSDBdDjulQk9%2BZ%2FJqx8CP4%2FtY9Ym67i%2BKDfwIi9ZMTZtDaAofNqbxWczCi7IoM%2BssrIYOebQv4TWZB4KB5RcPpAMop7hTMO0zlPqSh%2FjBXUCQCHCCklRNr6%2FwtgFpQSxUOVIxaJTuZ661ndxrAgWjzSqeGua7PyS9SuKi2N6CyMCQy7eOeEfnO1ulI5Nh0GFcui92hGKUYFverWguMhnoj%2BNJcKHKu67Jwwy6fFDFcTyVCUJoWDwcBNY0NyMgM9Zx94Qp07U9N7Nnjokg%2BrpklEI2vuPDwqG5IYaKCy2Voa6wZBMchNPqb7vc8xbv7qfMlXxrcf1W%2BYxegwKgTw9ZVGbznc8TA%2Be6KoPxMRyXYuJyE8WEGSGFZVJtXqs3Qh2bYF8wGRGRASmodql3Y7C%2FYaHj0E1mJhO9RzVUq9J3pDZfJxJx0KTEX3vfxKQ%2FhivAOHOhtXVFxop2eC%2FmyBgjf9zU%2BdOKb%2FK2I2eiEyYS95wpUiGKZJWOAXRkSPjB1Pvu0cFK4%2BqcUQo%2BgD4rD%2Fu2ZfpUNtqFdXcn76rrBSPquSwcMPrPvP79dFW3Z3UAQ7RCn7xuw75I9tbh0QUwpIbawwY6pgGqec6jB6vvM3z9m8S4Ylv5vEatc1S9D59JT5IlLdHKbLl6CiDZpD5jHr317dVvHBCGrvnU5UZOLo1Wcya%2BsL4JI8oVCjHpdd8d6%2BBo8FBnxQFJtTSXE%2FcH5fvS%2B5ueQmYjizRAYnNUmD3dFmT4YmaA9ueAwh8zRkg%2BOdiAeTRqhPZLCNKjZpUtyWS%2BkRxdlgWVwiq83mArCwZnuJPQ3f7lvOVv289A&X-Amz-Signature=83e003b4425427a5e594b9fcc5421443d3bab4689156b97fd89e3df81e5923cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
