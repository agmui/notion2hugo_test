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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3OX5B5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbc5xC3E5cE0h3Ou2ItAWLcTiXA22nrPCWzYxr6xA0FAiEAwUOq%2BVMEC3d56TN%2BXam%2BD9tMt9kH74cEZN06XDLlfUEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHgzUTcFFC23pizdircA8tjnN6KihPWejR1L9pVmSfemoayPxqixMekjoP4HckERUnnolb3lYPQ5kb%2BdpR7zvIhUJEVnXeeCsqkq5epjYX7A%2FYuYTtIv5JBH4EgfZutAfmcCBfI5MpfFLgu%2FKy%2BAfmjIwpQp2FABVSRb21Bp8VCpe2NRIpraJ4VC8epU0XIFTNb6mjvUq%2BtIBz2en3dLhGgiXvTs77z9Irzgh9Lyon3sE4rDC5OzyhdnCparyTI6CnhcnqTdOOSptPS1QzxLW1v1jw8TA1Uh1e0H25c2eo%2BYWEQHhN2g2puK%2FqsdU3ytemuvSvm4oTgUndMIKQJ9Ge1sRk6jImiP%2FyQp77o0zO%2FXB9mKQzkYudsdgtvD6QInDfpsEZwvNIu8Xhd6CxHJb%2FRmS6jwAN%2FQLeek102iqltGv3ps%2B5b8DPQi%2FXjtqA46BNAgoSTR3YRsWtUINJ9uFhVHqUyFTTpv%2BqgCiqH7hLn1KY9USGSEgozhL86%2FLbgl8jtnqn1YMrJIGwXsLxwNV%2Fl9k5nlBqLByvJdjNqfu3YhIrwH3uyr%2BwwDAhM7%2BZQeVqkQfdjjJezHsnhM8yUUYbign1jH4HZwboqlpFtSgBmxhh%2FeA1ynmrcOhE1uK4T1vVNxhguWTlbYp8NMJHil8IGOqUBSF5tVY231qzJsJZkzlJ5vRGN%2Fc%2BMXWBSiheXlJDh3Xj2F2VpIbCQJ6fd8Mt9y7SGBlJAvfxOJzgzo5xu3EZ5UsVwgAAD5B%2F3czTE%2FxecsTZx6uqjJLKQ5wUEPoN94SL%2Bo0NyAm3bx0TnjwqPwbfRmphI%2BsgwdzCi5RhXRFkl8%2BiDcCFs2VEj895BFtpFGhN7fF8uxv5GZRK2sTmO%2FqL18CRJH7FJ&X-Amz-Signature=75bae1f61fdc51d849ca0c3c9870e0e2eba7cf9d7697b1371c94d8787c4c9c43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3OX5B5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbc5xC3E5cE0h3Ou2ItAWLcTiXA22nrPCWzYxr6xA0FAiEAwUOq%2BVMEC3d56TN%2BXam%2BD9tMt9kH74cEZN06XDLlfUEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHgzUTcFFC23pizdircA8tjnN6KihPWejR1L9pVmSfemoayPxqixMekjoP4HckERUnnolb3lYPQ5kb%2BdpR7zvIhUJEVnXeeCsqkq5epjYX7A%2FYuYTtIv5JBH4EgfZutAfmcCBfI5MpfFLgu%2FKy%2BAfmjIwpQp2FABVSRb21Bp8VCpe2NRIpraJ4VC8epU0XIFTNb6mjvUq%2BtIBz2en3dLhGgiXvTs77z9Irzgh9Lyon3sE4rDC5OzyhdnCparyTI6CnhcnqTdOOSptPS1QzxLW1v1jw8TA1Uh1e0H25c2eo%2BYWEQHhN2g2puK%2FqsdU3ytemuvSvm4oTgUndMIKQJ9Ge1sRk6jImiP%2FyQp77o0zO%2FXB9mKQzkYudsdgtvD6QInDfpsEZwvNIu8Xhd6CxHJb%2FRmS6jwAN%2FQLeek102iqltGv3ps%2B5b8DPQi%2FXjtqA46BNAgoSTR3YRsWtUINJ9uFhVHqUyFTTpv%2BqgCiqH7hLn1KY9USGSEgozhL86%2FLbgl8jtnqn1YMrJIGwXsLxwNV%2Fl9k5nlBqLByvJdjNqfu3YhIrwH3uyr%2BwwDAhM7%2BZQeVqkQfdjjJezHsnhM8yUUYbign1jH4HZwboqlpFtSgBmxhh%2FeA1ynmrcOhE1uK4T1vVNxhguWTlbYp8NMJHil8IGOqUBSF5tVY231qzJsJZkzlJ5vRGN%2Fc%2BMXWBSiheXlJDh3Xj2F2VpIbCQJ6fd8Mt9y7SGBlJAvfxOJzgzo5xu3EZ5UsVwgAAD5B%2F3czTE%2FxecsTZx6uqjJLKQ5wUEPoN94SL%2Bo0NyAm3bx0TnjwqPwbfRmphI%2BsgwdzCi5RhXRFkl8%2BiDcCFs2VEj895BFtpFGhN7fF8uxv5GZRK2sTmO%2FqL18CRJH7FJ&X-Amz-Signature=0f75dd999158d517fa8ed111730c5ffc747af6e8cd93d2e5f1de6969b0ace36d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
