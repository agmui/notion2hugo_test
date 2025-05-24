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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKHCW3P%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDwSCE6HIKEkMKoT%2F5zvOvy46Js7S0oRuVYMyDgjURvewIgC0r1TOzAuAJmVR0maVR2axLmVahfNCL0VVFqgc7jX8sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDATJln9LxvhgYkvGaSrcA9xbVpypxv5nfFY9hd6X%2F7bfbCsM%2BR9btBluwRgfsqOYd0X1dQ1XshJwY518PtC9gigd1lkcCcUCyPL0xMVim2e%2F32UjA8a%2F72OKZSIv%2FI3ciov%2FXpSJXa4P5Bg2Q%2FtIRPI793LXbOBLv6QvU1U7GHElJV1QHqqGnUk4AefULM3t%2BDXyPmjgU3naoeU2LSmd4fj%2BeXmsroZfxLeWTL1mJ%2FW%2FJqIJ5j7Ou0Z%2FRRa2yIu90EISV3VSYigQiKl34tFd16KLQBUZMTBnvnQdWlvwENPCYVxZ4CnFji9Gk7YrxxnPzlJKeG12%2BZa%2Bm1Y5IFnJxuSNPOHc79Jzn1At1Ox7z3LKk8syvgUXuM6ASoLIxOeWaz0ffFqTgD4GWv9tutxVD%2FthlN0jxcGqJvzbiDXqkfBRx6%2BTsBSWd4gb1Vnx5aCmY%2BEOFOfCnEsc%2FPOofdqZFG8e%2FXXOK6Xr%2FYDY2FfiqZLY242mopPrS33UFlO8NE2ltEuNpcII5Qy5qPWf6tT%2FZ9VgGDAYkZSZOr2CS9MfDFFBTdoj4sK2ssI3uSDuTKk6eRXu%2BSfgbHRqbZjsz0WzhzWY6j8jxRDtNLl5RJv%2FQ%2Bq5EM%2FbfG76Uzzvq7OrXpEE59WbDfYI1NxzY0beMP2VyMEGOqUBq0Suv8exlaLYnBxvJoOPqow3dE5hZG5tntwJ9lnI7DkXm%2BTDkP0M52cPTpTJYAG8opGfVPEB7kq83o6JiiPAudFrMYE6Ro3SzWIBuK3FMfBNwNIT1dyyaLwJkgYgxBezdkRKpAnIWLBFiIvtbOdKXgIXjwRiBYggMWH7642B1YqqtTg1txifckSruN92vGkTvok6YpRv9C022ajA1Dtrpx%2FE7nFS&X-Amz-Signature=605a505d7a71eeb5f5a0b014afd839bd11113a8b2744f040596e6422386a72c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSKHCW3P%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDwSCE6HIKEkMKoT%2F5zvOvy46Js7S0oRuVYMyDgjURvewIgC0r1TOzAuAJmVR0maVR2axLmVahfNCL0VVFqgc7jX8sq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDATJln9LxvhgYkvGaSrcA9xbVpypxv5nfFY9hd6X%2F7bfbCsM%2BR9btBluwRgfsqOYd0X1dQ1XshJwY518PtC9gigd1lkcCcUCyPL0xMVim2e%2F32UjA8a%2F72OKZSIv%2FI3ciov%2FXpSJXa4P5Bg2Q%2FtIRPI793LXbOBLv6QvU1U7GHElJV1QHqqGnUk4AefULM3t%2BDXyPmjgU3naoeU2LSmd4fj%2BeXmsroZfxLeWTL1mJ%2FW%2FJqIJ5j7Ou0Z%2FRRa2yIu90EISV3VSYigQiKl34tFd16KLQBUZMTBnvnQdWlvwENPCYVxZ4CnFji9Gk7YrxxnPzlJKeG12%2BZa%2Bm1Y5IFnJxuSNPOHc79Jzn1At1Ox7z3LKk8syvgUXuM6ASoLIxOeWaz0ffFqTgD4GWv9tutxVD%2FthlN0jxcGqJvzbiDXqkfBRx6%2BTsBSWd4gb1Vnx5aCmY%2BEOFOfCnEsc%2FPOofdqZFG8e%2FXXOK6Xr%2FYDY2FfiqZLY242mopPrS33UFlO8NE2ltEuNpcII5Qy5qPWf6tT%2FZ9VgGDAYkZSZOr2CS9MfDFFBTdoj4sK2ssI3uSDuTKk6eRXu%2BSfgbHRqbZjsz0WzhzWY6j8jxRDtNLl5RJv%2FQ%2Bq5EM%2FbfG76Uzzvq7OrXpEE59WbDfYI1NxzY0beMP2VyMEGOqUBq0Suv8exlaLYnBxvJoOPqow3dE5hZG5tntwJ9lnI7DkXm%2BTDkP0M52cPTpTJYAG8opGfVPEB7kq83o6JiiPAudFrMYE6Ro3SzWIBuK3FMfBNwNIT1dyyaLwJkgYgxBezdkRKpAnIWLBFiIvtbOdKXgIXjwRiBYggMWH7642B1YqqtTg1txifckSruN92vGkTvok6YpRv9C022ajA1Dtrpx%2FE7nFS&X-Amz-Signature=caedfa1a204aeec1e7d132e48fba7f6c420c375d69d39f48dc57ab1a117f6a97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
