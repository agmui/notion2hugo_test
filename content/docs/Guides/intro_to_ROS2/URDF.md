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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZAA22X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH03J0ThRY5LDpS4%2BTx3Ay63SArD3%2B2rBwL%2FnM4wV6FQAiEAqFg58Uj9Le5n6hd%2Fm6OFvP922N4gbuefghO6rVOW%2BX4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiF%2F6ur08NcjGe%2FOCrcA4gm8DpN4ZCzJwbmqOvQ8OvzMqO09mFd3qlfJm0MLknF4vblAwVYyTK7bH%2FoFKTlW4Yy%2BpL%2F1qcYBCm%2B70ZQq1JXi6LdTnkGXciDaTipqEMK22odFibrlaDqgyc%2Fje439oE8akOdZ3HoCjfIxmr6DSr02IXM%2F70mL%2FdoFVaaf0XgVsUPj1ynzj%2BuP%2BgzmZ%2Ft5R86IZiDZaIlDtOzl1kmOlg0j0hEbI7MKO6BUOl8jqQXdciqfxCqcWtn1FBX8ZqXiHLwhDsO3D1ZUWb%2BT1Etvm2Lh67sBQ7UHB3vL5vt5dEoGlZU9SXiLB5TLy80UKieZCgG9lqEKzaphR3DfkdVzXUaYO%2BBHBXvhU%2BtBdAXcAFxUbPNy5qouuzOEGILc8bjfMDc4nlbTJqj6rgmc73t3skCF54t%2FZJ4DIf4Y3MH72BWWF1566xMecfKw0WkJTtg%2BYOPFI3rht1BmvPUmkVB15o74776Mdf%2FiQUDMl1bsBcVlaMAYlxX3zUZ4zjRBOdApTOpx8cc3PFR7eC2%2BrqORel6kwcMu4sQPb%2BWW5QtIIoCnpQH1FKQznyD3mXgdBGLsrovOKO6UDCMBAMXVOK70YLJARACy5%2B%2BuxsAfkGJwKczsCwYgXkCyKjB40m2MLiM6sEGOqUBBYaMD5B%2BNnL95QOhjMZKWd%2BxDfrUM8%2Fgz5vXdZcgZFdmDK3AbYqIMTgWE5OGV0NyLR6%2B6hQE58wr4EmURgeUkol0J8%2Bqs4mgKh0tDdK7DzpQcCNeUuCNyhG3uYPkBGOFCagx34N2haNbJ%2BSZTzneh94ZejPJZtz0qtpvONfjPWgCekb%2FIs60tCOzjZBra%2BcCOWmtAjnlM2pV5vSzM2TPksQvdEWb&X-Amz-Signature=be527946bb14e086ef32891e2f8137435db9cf0be0c0136c9ccf8327807fa935&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZAA22X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH03J0ThRY5LDpS4%2BTx3Ay63SArD3%2B2rBwL%2FnM4wV6FQAiEAqFg58Uj9Le5n6hd%2Fm6OFvP922N4gbuefghO6rVOW%2BX4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiF%2F6ur08NcjGe%2FOCrcA4gm8DpN4ZCzJwbmqOvQ8OvzMqO09mFd3qlfJm0MLknF4vblAwVYyTK7bH%2FoFKTlW4Yy%2BpL%2F1qcYBCm%2B70ZQq1JXi6LdTnkGXciDaTipqEMK22odFibrlaDqgyc%2Fje439oE8akOdZ3HoCjfIxmr6DSr02IXM%2F70mL%2FdoFVaaf0XgVsUPj1ynzj%2BuP%2BgzmZ%2Ft5R86IZiDZaIlDtOzl1kmOlg0j0hEbI7MKO6BUOl8jqQXdciqfxCqcWtn1FBX8ZqXiHLwhDsO3D1ZUWb%2BT1Etvm2Lh67sBQ7UHB3vL5vt5dEoGlZU9SXiLB5TLy80UKieZCgG9lqEKzaphR3DfkdVzXUaYO%2BBHBXvhU%2BtBdAXcAFxUbPNy5qouuzOEGILc8bjfMDc4nlbTJqj6rgmc73t3skCF54t%2FZJ4DIf4Y3MH72BWWF1566xMecfKw0WkJTtg%2BYOPFI3rht1BmvPUmkVB15o74776Mdf%2FiQUDMl1bsBcVlaMAYlxX3zUZ4zjRBOdApTOpx8cc3PFR7eC2%2BrqORel6kwcMu4sQPb%2BWW5QtIIoCnpQH1FKQznyD3mXgdBGLsrovOKO6UDCMBAMXVOK70YLJARACy5%2B%2BuxsAfkGJwKczsCwYgXkCyKjB40m2MLiM6sEGOqUBBYaMD5B%2BNnL95QOhjMZKWd%2BxDfrUM8%2Fgz5vXdZcgZFdmDK3AbYqIMTgWE5OGV0NyLR6%2B6hQE58wr4EmURgeUkol0J8%2Bqs4mgKh0tDdK7DzpQcCNeUuCNyhG3uYPkBGOFCagx34N2haNbJ%2BSZTzneh94ZejPJZtz0qtpvONfjPWgCekb%2FIs60tCOzjZBra%2BcCOWmtAjnlM2pV5vSzM2TPksQvdEWb&X-Amz-Signature=49cd306b36c8c9a7c47da6e450ed5abb4c33f126638756a4a8666895e109fe8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
