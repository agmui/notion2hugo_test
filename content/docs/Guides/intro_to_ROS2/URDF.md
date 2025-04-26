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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW6AVGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp7uNyNGKxBH3sFhgpO8f53e%2FkfEQi6ReH4WXqpUL8sAiEAgM73ZVlIQCktYRSYUha%2F2QBb5jla1q0gfMH%2BbWlziqAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKdPRgkUv2rQdHbfgSrcA%2FMKMrvOXPiSWbTxGoGb%2BrUq%2FaSLB%2BODMfQEn8RmzbW%2FJKZfFnIfrJkjuBlG1HwgZSAdjcewB1yGybUa1BgFLVBIugw4LAIlEleh05n84bD7bgpQiciTXu7Yzyo6qB5%2FckTvCZg4t94rLONBTy0Zmw5gtnHP8mimRxtInVYCPwbgWeQnzhHx4t48LooFzynvjGKtPuNuXvo1S0svxrzyebaxtkeyE123CPk5IFnZwXl4wvUdcD2BCMPbgUNYBYukN%2Fr0muZioo%2BvZnpmIcDdh%2Fg8OeJccpDbZEXK%2BmAUI%2FoJq8UWb3xISt6BwQjgAvS30p1jNa3vNCk6KVTrP%2B3HO8kuB9q30JUM2myZ9VUeL5nF6%2F3k%2BPK39LHTeZXNhpplD6Qy9MIULSYtrfeHdJHmcfNA3%2F6IgFgHTRw%2F4EdruyIPA3gbpXC7UdVrLTZJ0KrC%2Fysy2%2Fmj8W79I0lV5SE9OE1gDQVlthkdp7mLBllkuSx26A0lN6hLZNYOS5Qo3Fj0ZgCKaliVkd91kPl%2FOHw3VsW%2BIRZ3fnR3IXyUvj2yHVXkcIdEcYUoPrfT1rivecZ7zv7cyUzrcI2n1dAJSVpk2ev%2BxZhuLKMjwk1E3Tt20Tne9f0dqfVWvI1s%2BwasMLDDssAGOqUBXP%2BgGU%2FNmwgeP99ceJWrNSAmTMj%2BPkKnwasS6y4QkqSw22ErXh6%2FfHwK8BGNpOSU23QxUsyHmaz0cHUDxW2NB%2BRXvYtvaw5dO9g%2FGjxVmp8OPIKDUEzzfJ6zhH5kK2zBfI2OxSheve1K7DDil%2BBjdMmKkwRWVpeAF3wSNRBYDvDBBgsy%2BCefpSB8XHr6GOpRYT1EWfr8sALOVyvZPBGpQThIxfvN&X-Amz-Signature=1be5b2daf454ac2536c9aae8703bcd3601537e07803858b0fefe65d79fb81c69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW6AVGM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp7uNyNGKxBH3sFhgpO8f53e%2FkfEQi6ReH4WXqpUL8sAiEAgM73ZVlIQCktYRSYUha%2F2QBb5jla1q0gfMH%2BbWlziqAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKdPRgkUv2rQdHbfgSrcA%2FMKMrvOXPiSWbTxGoGb%2BrUq%2FaSLB%2BODMfQEn8RmzbW%2FJKZfFnIfrJkjuBlG1HwgZSAdjcewB1yGybUa1BgFLVBIugw4LAIlEleh05n84bD7bgpQiciTXu7Yzyo6qB5%2FckTvCZg4t94rLONBTy0Zmw5gtnHP8mimRxtInVYCPwbgWeQnzhHx4t48LooFzynvjGKtPuNuXvo1S0svxrzyebaxtkeyE123CPk5IFnZwXl4wvUdcD2BCMPbgUNYBYukN%2Fr0muZioo%2BvZnpmIcDdh%2Fg8OeJccpDbZEXK%2BmAUI%2FoJq8UWb3xISt6BwQjgAvS30p1jNa3vNCk6KVTrP%2B3HO8kuB9q30JUM2myZ9VUeL5nF6%2F3k%2BPK39LHTeZXNhpplD6Qy9MIULSYtrfeHdJHmcfNA3%2F6IgFgHTRw%2F4EdruyIPA3gbpXC7UdVrLTZJ0KrC%2Fysy2%2Fmj8W79I0lV5SE9OE1gDQVlthkdp7mLBllkuSx26A0lN6hLZNYOS5Qo3Fj0ZgCKaliVkd91kPl%2FOHw3VsW%2BIRZ3fnR3IXyUvj2yHVXkcIdEcYUoPrfT1rivecZ7zv7cyUzrcI2n1dAJSVpk2ev%2BxZhuLKMjwk1E3Tt20Tne9f0dqfVWvI1s%2BwasMLDDssAGOqUBXP%2BgGU%2FNmwgeP99ceJWrNSAmTMj%2BPkKnwasS6y4QkqSw22ErXh6%2FfHwK8BGNpOSU23QxUsyHmaz0cHUDxW2NB%2BRXvYtvaw5dO9g%2FGjxVmp8OPIKDUEzzfJ6zhH5kK2zBfI2OxSheve1K7DDil%2BBjdMmKkwRWVpeAF3wSNRBYDvDBBgsy%2BCefpSB8XHr6GOpRYT1EWfr8sALOVyvZPBGpQThIxfvN&X-Amz-Signature=6afbc37a0ccb0f1ad764c5f30a32f33c0e2d58f1bfe5febb4eb9119adb4a966f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
