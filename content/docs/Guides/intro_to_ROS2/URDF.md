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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY633CAV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ9kgJgCxIcq4WRkovx%2Bt%2Bfo6%2BB7toNN3wH8QAbNITfAiEAzR1kMvgJKWtikQsMi40MeXIfZdOzJ8VdLlkDd4%2BAe0Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBN7kFbJYRpesPh4uSrcA5WiJPiQNAVQOKTGAs6SkbQ3fEZvBuCkPbG2KcxxwnieCdnv%2BLPAmdSflT%2FB225ED9tB3VwoXDcIOpw63fpPmXmjKKmPgw5kZQY%2BC2eg2krtU592JTwVnNHnH%2F27c9UTXcFa6QcJPIs6%2BRqlB87Qt1JxQLdlLUkjXG9QwKZusgTdaTyMKbUcIbX5X9F3zufchHbxftf0H9yMQnwabHhcF0SaarkFx9ZbQAgl5mejmfDrmdTg1YuwhFY658j4BhVJidw9M2XqD9dEmSb%2F5T0DQ2kwTHfj8ssGUQcNmNMPnEm3dVvqibhRE%2BOQEgICTF8ToWDFOBfN%2BErdPllvz3qkub6YyFcOEgzGaewypWY6FVxBXWGMeJR5WFjN2UeUxelyDhcUBLgF%2Ffk9T2jQFHXxKKQr1HR5pyZBK72mT2rFs1%2BFXVFQ3NNSz95dMcRy4KojUsPOayHlA1TCyonaWHhNycVTDM1ExUSzSm2P8BR2nLzFrYV%2FSnwL%2BClcxYMtku%2FdSekcGHC3sxEhC3EdPsONCQhhD2sfKhM8gQUHjPZeelAt9fa%2FC1kcJw7vrZgHH40OPq%2BGnR0EkfTSXE6xQPBJW9OqDQ4fH45US1hRwUwsXcZOozua8QmmnFOaHKXLMPeLuMAGOqUB02OL4NbtmbjBWdV%2F0uubKnNvtXB0k%2FKLPY0GivMUmd%2BO%2BtQY4dt%2FdNJxnzMB%2Bqbjfbsgj0l9U%2FS1e0UWTSKty9ikaLG0sqdtE2dVSw%2FS%2FsiihaJ0%2FGO0rOI%2BcyX8IzY71z1gLwq9%2BeVBTfWea0Zyy%2Fe54gQQGBK77Z41RUX8Ytw81p63Fv6%2FDPGccBcguTHPRMN2jj5zLGMRbNqt3Ei7S4QAssIm&X-Amz-Signature=8da31c9a6887bacf0137836433c437bbfaaed3a392f094cc985c87e1e264e1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY633CAV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ9kgJgCxIcq4WRkovx%2Bt%2Bfo6%2BB7toNN3wH8QAbNITfAiEAzR1kMvgJKWtikQsMi40MeXIfZdOzJ8VdLlkDd4%2BAe0Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBN7kFbJYRpesPh4uSrcA5WiJPiQNAVQOKTGAs6SkbQ3fEZvBuCkPbG2KcxxwnieCdnv%2BLPAmdSflT%2FB225ED9tB3VwoXDcIOpw63fpPmXmjKKmPgw5kZQY%2BC2eg2krtU592JTwVnNHnH%2F27c9UTXcFa6QcJPIs6%2BRqlB87Qt1JxQLdlLUkjXG9QwKZusgTdaTyMKbUcIbX5X9F3zufchHbxftf0H9yMQnwabHhcF0SaarkFx9ZbQAgl5mejmfDrmdTg1YuwhFY658j4BhVJidw9M2XqD9dEmSb%2F5T0DQ2kwTHfj8ssGUQcNmNMPnEm3dVvqibhRE%2BOQEgICTF8ToWDFOBfN%2BErdPllvz3qkub6YyFcOEgzGaewypWY6FVxBXWGMeJR5WFjN2UeUxelyDhcUBLgF%2Ffk9T2jQFHXxKKQr1HR5pyZBK72mT2rFs1%2BFXVFQ3NNSz95dMcRy4KojUsPOayHlA1TCyonaWHhNycVTDM1ExUSzSm2P8BR2nLzFrYV%2FSnwL%2BClcxYMtku%2FdSekcGHC3sxEhC3EdPsONCQhhD2sfKhM8gQUHjPZeelAt9fa%2FC1kcJw7vrZgHH40OPq%2BGnR0EkfTSXE6xQPBJW9OqDQ4fH45US1hRwUwsXcZOozua8QmmnFOaHKXLMPeLuMAGOqUB02OL4NbtmbjBWdV%2F0uubKnNvtXB0k%2FKLPY0GivMUmd%2BO%2BtQY4dt%2FdNJxnzMB%2Bqbjfbsgj0l9U%2FS1e0UWTSKty9ikaLG0sqdtE2dVSw%2FS%2FsiihaJ0%2FGO0rOI%2BcyX8IzY71z1gLwq9%2BeVBTfWea0Zyy%2Fe54gQQGBK77Z41RUX8Ytw81p63Fv6%2FDPGccBcguTHPRMN2jj5zLGMRbNqt3Ei7S4QAssIm&X-Amz-Signature=a2f415c8465963f154a86829df1bd34e4f16bf7f72996ca3578a714565ce51eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
