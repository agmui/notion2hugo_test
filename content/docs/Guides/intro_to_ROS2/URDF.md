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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5X4QOBW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNrX0Jk9lC34h7g0YIKQ6%2FVEcG%2Bo9%2Fl7J%2FeVXIzGgi7QIgRSR%2B2pO8EvOQPg6rFTSYgjG6ZuB1xUHJqbdNpLOVSj4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIszkYX5yNjwLrpFJyrcA%2FRKD5DqZ0c7ORucBh65zrizQopnrhYXXM0l5QuCtzaJ47ntG8mEa2WFoQHmw1kqBkQO37aNQ9bDx2R%2FlNBEVqTL%2BtCvC5n8HQMTTYarDce9dsJYLRO%2FJaI9HrheqlusJ%2BcQn9noY9NAX7qkDywsUJpMVDPvnT8IVFa3Irwb0dj77oX8rJ9XwYoLg2DFrAHK%2FPHiteNZrpVpsP%2By2tCYSX%2B%2BUVEMzsr6F4nRCm8cDOKkPF2ICMIpeplm4iqmqoTwzOSb0XNKc6Re3PmyisstXJoIc8lq7rBQ2yzrn63HCwPdJdimxN0yBHw28uqvmW6A9CcIKcguO14uvb2%2B4l0RWhrLih8oX7XQ7z0GV69hvHBYEucQJBI3Yqa0BELuILR%2BCpGGSRVX4tmWk3SJPnNMGNOqKCNoyrj6qrzLP%2BtNowRpjOKjmTciv06bZXbWL%2FkUtLGLIhVq7ZpUkMV4GOi1qvSboQRp2JGmJj%2BjDdaqiXfaOVnzmgeY01kHgYkvbCifqutsgpmqJ30jQO2xDypPArtqwvtzvRYQXYLB0RCoutRBEPaCuKGGdy2wE9cOQ6euekpFTbvKPui4PeU1LDLPP4u8VKudOq7uvFK8UC6wmRXMuOrNawEJ2XSW3btOMM6Z6cAGOqUBvvigpVhrAJA9rLTLzwfdu6NpY5FaWFU48xVp%2BGwF%2BUQYEhUVMPfzuyPMaBdkup8QfYgxK9m3sDcZjEDV6J394DsgkwbYnkonWn498tcnSOIFGzLXH9uIXchojRL2JDeHKfiDD7QG2Ft7j2JI6N4oAChjv3e%2FavbSwY43E0pfFQdKoXRoki3k78rZS4RSK%2F4cRQakSpCgjF9nLFwlcZhFIPNvN1%2Fi&X-Amz-Signature=202759aa54506e07e231186abe8a56ec53c579c568a6c6c8c509f227fce636d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5X4QOBW%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNrX0Jk9lC34h7g0YIKQ6%2FVEcG%2Bo9%2Fl7J%2FeVXIzGgi7QIgRSR%2B2pO8EvOQPg6rFTSYgjG6ZuB1xUHJqbdNpLOVSj4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIszkYX5yNjwLrpFJyrcA%2FRKD5DqZ0c7ORucBh65zrizQopnrhYXXM0l5QuCtzaJ47ntG8mEa2WFoQHmw1kqBkQO37aNQ9bDx2R%2FlNBEVqTL%2BtCvC5n8HQMTTYarDce9dsJYLRO%2FJaI9HrheqlusJ%2BcQn9noY9NAX7qkDywsUJpMVDPvnT8IVFa3Irwb0dj77oX8rJ9XwYoLg2DFrAHK%2FPHiteNZrpVpsP%2By2tCYSX%2B%2BUVEMzsr6F4nRCm8cDOKkPF2ICMIpeplm4iqmqoTwzOSb0XNKc6Re3PmyisstXJoIc8lq7rBQ2yzrn63HCwPdJdimxN0yBHw28uqvmW6A9CcIKcguO14uvb2%2B4l0RWhrLih8oX7XQ7z0GV69hvHBYEucQJBI3Yqa0BELuILR%2BCpGGSRVX4tmWk3SJPnNMGNOqKCNoyrj6qrzLP%2BtNowRpjOKjmTciv06bZXbWL%2FkUtLGLIhVq7ZpUkMV4GOi1qvSboQRp2JGmJj%2BjDdaqiXfaOVnzmgeY01kHgYkvbCifqutsgpmqJ30jQO2xDypPArtqwvtzvRYQXYLB0RCoutRBEPaCuKGGdy2wE9cOQ6euekpFTbvKPui4PeU1LDLPP4u8VKudOq7uvFK8UC6wmRXMuOrNawEJ2XSW3btOMM6Z6cAGOqUBvvigpVhrAJA9rLTLzwfdu6NpY5FaWFU48xVp%2BGwF%2BUQYEhUVMPfzuyPMaBdkup8QfYgxK9m3sDcZjEDV6J394DsgkwbYnkonWn498tcnSOIFGzLXH9uIXchojRL2JDeHKfiDD7QG2Ft7j2JI6N4oAChjv3e%2FavbSwY43E0pfFQdKoXRoki3k78rZS4RSK%2F4cRQakSpCgjF9nLFwlcZhFIPNvN1%2Fi&X-Amz-Signature=d6a7f96da186d61900f3d1a8b34554337ebe7e5b50649de7306fcf30edbeced0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
