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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP2KKQQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCNAJRLExG8uZ2LZreQ%2F7mOmqaSxsuxX4uIrJ78%2B0ALqQIhAMhAt1ZQvDq%2BitqIR9zsNRNtGy4uZO7U2lV31dXeXDcTKv8DCFMQABoMNjM3NDIzMTgzODA1IgxuxdIcqcVtnrE3FTEq3ANj7RrE9dLGyWWKpnA0XkIQPnXG2K1HMqCV73FlnADc4A4bkC3anM9ahACxIEbIll2dZGnXcLbl4v38L00f14nHAkjY0jGLsI9O%2FUXUZxCKitwF0UzyjaP80FkxqyGrHSdrq3ZJdspXm%2FNAw396djhdJ%2FApwK2HpKordYhcUwoX7eRDq%2BrVUtdBUJwEN%2BZ4t6Ph1LzAOuh5AlPy6ZDYfwtOcqIy2tR8UA0HsbymvQBmi5zUx6wZ5wmQuGyGpioJf3xwTgRcd2eQAXOJMIahjN7B2LL01RXlwWQwiHwRqlXxDjSZ0TZA8Jawde4gw33G2jNjs2CUFJAEi33S2y0tXD9daJiMgax8JugG3p5z3bKsYm8T4R3ABVob12U9GtqWZ18csOcIHKuB%2BCPd2jQMANGhs%2FqissBPhDJKBVvfpFfl0Y3BZ0jnJrBFebloH5LuhHkmfVViMeTwWF%2FbEGA7l%2FEjiiSzw1V9T2CQSUXOYbfX35OSULdA75pYS4AVgDBGl0p%2BjsBett7MXmunTYirjxvbBrwUsEMIzz69pWT5uMNUy63SDLj%2FuQBLntcLkuKblXG0tpeNhEncIFCE%2B%2Fn%2FkpMxMuMij8uCPNYf%2Bt2aHoq%2B0M%2BQzJ8C4NrLqhie3zDL%2Fr3CBjqkAbXVkOKkza9F%2B4TxhL2DTGyoPLEUls%2F3cu1RiIDasCyAOWoAE6FBpEJqbHTmAFSl9QDhghLbyEbid8A4XsOQN8aZL2qRBSv%2Fl6HdPhLJWKePH%2BrHrk7LhUX4CuS8f3APq4dcHlIAMx5Q5RYPbcRavSAcYehMeR2%2FDQTtcofBIUm4z1GNCfnKpmcy0kBMiKghJXOR%2F91w2xYXdVTg97U9moxlANyF&X-Amz-Signature=26c520ba8ae2ed9827ccd81bb92f37ef1dfa78b4cd1b71e9f2df3852347192b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP2KKQQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCNAJRLExG8uZ2LZreQ%2F7mOmqaSxsuxX4uIrJ78%2B0ALqQIhAMhAt1ZQvDq%2BitqIR9zsNRNtGy4uZO7U2lV31dXeXDcTKv8DCFMQABoMNjM3NDIzMTgzODA1IgxuxdIcqcVtnrE3FTEq3ANj7RrE9dLGyWWKpnA0XkIQPnXG2K1HMqCV73FlnADc4A4bkC3anM9ahACxIEbIll2dZGnXcLbl4v38L00f14nHAkjY0jGLsI9O%2FUXUZxCKitwF0UzyjaP80FkxqyGrHSdrq3ZJdspXm%2FNAw396djhdJ%2FApwK2HpKordYhcUwoX7eRDq%2BrVUtdBUJwEN%2BZ4t6Ph1LzAOuh5AlPy6ZDYfwtOcqIy2tR8UA0HsbymvQBmi5zUx6wZ5wmQuGyGpioJf3xwTgRcd2eQAXOJMIahjN7B2LL01RXlwWQwiHwRqlXxDjSZ0TZA8Jawde4gw33G2jNjs2CUFJAEi33S2y0tXD9daJiMgax8JugG3p5z3bKsYm8T4R3ABVob12U9GtqWZ18csOcIHKuB%2BCPd2jQMANGhs%2FqissBPhDJKBVvfpFfl0Y3BZ0jnJrBFebloH5LuhHkmfVViMeTwWF%2FbEGA7l%2FEjiiSzw1V9T2CQSUXOYbfX35OSULdA75pYS4AVgDBGl0p%2BjsBett7MXmunTYirjxvbBrwUsEMIzz69pWT5uMNUy63SDLj%2FuQBLntcLkuKblXG0tpeNhEncIFCE%2B%2Fn%2FkpMxMuMij8uCPNYf%2Bt2aHoq%2B0M%2BQzJ8C4NrLqhie3zDL%2Fr3CBjqkAbXVkOKkza9F%2B4TxhL2DTGyoPLEUls%2F3cu1RiIDasCyAOWoAE6FBpEJqbHTmAFSl9QDhghLbyEbid8A4XsOQN8aZL2qRBSv%2Fl6HdPhLJWKePH%2BrHrk7LhUX4CuS8f3APq4dcHlIAMx5Q5RYPbcRavSAcYehMeR2%2FDQTtcofBIUm4z1GNCfnKpmcy0kBMiKghJXOR%2F91w2xYXdVTg97U9moxlANyF&X-Amz-Signature=59fd62246b1ee0c26307f0ee8fdd0e6ad3f8a3d08c83f47f531947314b970c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
