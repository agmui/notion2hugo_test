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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQQZGA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZunB9cFD7ERVlDbNxT%2BKIEDQY3mL3tpUKnnfxdrI%2BWwIgLqbeBdV5zp7c4Gk5Zw%2BNcUizVLAMuf%2BwiCLu%2FJ3UUBwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOqEv0DqMeQbnWLxXircA%2B8uTQ6MDJybadfU5ZCJZtidzCIMxBjfjVg8jUbrtFyWIs7hTR6rARxYLQfrSqi4J6lBGx5yQ4l0LMXr4ALAXT3vLxt5HtLVbUJvg049xxZWqIFND0FI3VNKkMfIE%2B2%2BjrqW%2F%2BRZsMgwAvVDoF%2BVXZNSHZmXxEhkNafyzwf1WSLmxUHyoRVzwL7HapDbAGVFMhu%2BtRMmadamATls0ddB1AXCW7zVJklEcIh2bIiR7tbAdj8zxOjMxZgjG3pcsOiZs8VMa6ToOTk3UOPEFjhnKiT3qbsE8hCrNbXf4RhM58gXCmFQvdEHW5RCpZWsuDGvNYdRsNfmNfB5wNxJEliqxLjIoJVAXK4Wz5e8JzODSaXiL52b1Gm%2FAE9TfZUeUs9NxXony4jTZCVe2tAu%2FSEEaoWekirqEmLvcbENhE4izkfdSHCffB2EkIv4DzWLP7Z%2F2ylcOOLVNGBU3qCjnDAwQFQkNJ0plrmZ3h2Uu%2FrKAAzZBLD0Xi1yOXwuDkWisSnqGCadHZN5OqrYrFUpfpE7Z0uVeJzHjTVDOMnD%2BUnZotsyzs%2BYrOr7Zd6hhpSmL5wB0Qk3WX0KAixlx%2BsnsRjmHxTg7SMmOfkpmgF2wlg5DwPIYbXfFZtpWV9mMBuYMMCjmb8GOqUBgO2o9zNGoxDK%2BHTFQWV8gpzCr6i4LL%2BC3qnw3HZ%2FdfhgSvLm21GxgOCnZ699SY6jgerxUg%2BomMEr9B833urW4jd3qsxditKS%2FTrU%2F3oY6WPxy66uYpQYgtrdU0qj9%2FmJXQtwKnwnPO%2FuJonLKYeKBvePdoOkDO%2FIC92E%2FQFr%2B5YAx%2B7a805Xgr%2FZULzXNB%2FKchOkx6xCyDdQWLKkITzwZALFNxxB&X-Amz-Signature=d635b9aeac7ffd5db6f2f676be4ba06a1d40ada2401054d0cc3d4cea3b56ad35&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQQZGA4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZunB9cFD7ERVlDbNxT%2BKIEDQY3mL3tpUKnnfxdrI%2BWwIgLqbeBdV5zp7c4Gk5Zw%2BNcUizVLAMuf%2BwiCLu%2FJ3UUBwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOqEv0DqMeQbnWLxXircA%2B8uTQ6MDJybadfU5ZCJZtidzCIMxBjfjVg8jUbrtFyWIs7hTR6rARxYLQfrSqi4J6lBGx5yQ4l0LMXr4ALAXT3vLxt5HtLVbUJvg049xxZWqIFND0FI3VNKkMfIE%2B2%2BjrqW%2F%2BRZsMgwAvVDoF%2BVXZNSHZmXxEhkNafyzwf1WSLmxUHyoRVzwL7HapDbAGVFMhu%2BtRMmadamATls0ddB1AXCW7zVJklEcIh2bIiR7tbAdj8zxOjMxZgjG3pcsOiZs8VMa6ToOTk3UOPEFjhnKiT3qbsE8hCrNbXf4RhM58gXCmFQvdEHW5RCpZWsuDGvNYdRsNfmNfB5wNxJEliqxLjIoJVAXK4Wz5e8JzODSaXiL52b1Gm%2FAE9TfZUeUs9NxXony4jTZCVe2tAu%2FSEEaoWekirqEmLvcbENhE4izkfdSHCffB2EkIv4DzWLP7Z%2F2ylcOOLVNGBU3qCjnDAwQFQkNJ0plrmZ3h2Uu%2FrKAAzZBLD0Xi1yOXwuDkWisSnqGCadHZN5OqrYrFUpfpE7Z0uVeJzHjTVDOMnD%2BUnZotsyzs%2BYrOr7Zd6hhpSmL5wB0Qk3WX0KAixlx%2BsnsRjmHxTg7SMmOfkpmgF2wlg5DwPIYbXfFZtpWV9mMBuYMMCjmb8GOqUBgO2o9zNGoxDK%2BHTFQWV8gpzCr6i4LL%2BC3qnw3HZ%2FdfhgSvLm21GxgOCnZ699SY6jgerxUg%2BomMEr9B833urW4jd3qsxditKS%2FTrU%2F3oY6WPxy66uYpQYgtrdU0qj9%2FmJXQtwKnwnPO%2FuJonLKYeKBvePdoOkDO%2FIC92E%2FQFr%2B5YAx%2B7a805Xgr%2FZULzXNB%2FKchOkx6xCyDdQWLKkITzwZALFNxxB&X-Amz-Signature=ac9cc4199bd4347b9e5ddafa451fd3af045e826a0717d5ca204157774987dbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
