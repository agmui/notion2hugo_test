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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH52S5S%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu3IQTMnJ0FjgRXNWO08UMgloH%2FmDOw%2BPurZ7%2FwYzScAiByFzRjsUe6tr5%2Bbofi%2B9bTT1UmtSuvSsZum2091N%2Fcqir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMN%2FAIdRrggNRHH5vUKtwDkTwR%2FJw%2FRB3g%2BY2J7m1oG0mTsuTkeNXv1nMZEMolFPAnaWVOqiSXyUJxkunhHdC7llzaPi%2BYLSrrrBXUjamms3doB9HTMs8PIR7dX8pKDJHosdzBG6uWJcNl2KXc91N2qx1j0ciwog1uE03Y1uafSpnVRciwbz27IxhWPYGkRBcVyMJqkaCQseb7xMjz%2BiPWExUDdqCccn%2FhBcT1gnfy2T07QKMQX%2BXJS2in2vi%2FyBNCdXFsTLpwJX3acDgYZUVKpmNr1bu7b%2FzWV4nJKLqo4jaPIN6zX9Yd%2Fc5wmsn9Nkb%2FnBuJm8hwB6paZkDBRAzd7hAHjJ7d0xFwpimAfQ5%2BoUWokElTIoXtKxSgj4DN%2BE13kF40pmyKxUHoH%2FqHPHRohn%2FPHDnb8g4OOYdqFOInbqMbBdLiRezgTK%2BlS7JLOz5iML6EDOg0wQO7yc1J607hR6r00I2ceWzADKETME6WUmmCSZ6giBPk58EG2oJ%2B4uCFvThTz%2FLsTR2O8WrDV0Do1oB1Kyee0c4yDIFsAcg8BYs64Du4uZTyZ0A2QVEbPqgGcOLzy5vwlT11ajJ%2FKAo9bYV9GOa1sj4mTyuZy%2FDc1muYqgjK1fEYCQaMu%2BWxlX808AIRNPm%2BhgXRJfIwvN7bvgY6pgFApemIKcsCt2gBbcLYmzadXEMJ5MRh8MNE0E4ostEbWDdO%2BAGg07b6%2Bi3dQVUj9i1toE8F7PxLzO6aI44pnUe%2Bs6elucUCXFe4exg%2FxEZhL30r4PBrJLlxxAJbBEBzSJVGBHsqfYvliYGFR7SOZZFI2QOuUnOGkg0pbSyLm3etCXaA4Xt%2FvvhBVofO8zJEhfjWLcJzQMIhlu2cOGTRLpZAN4x3acMS&X-Amz-Signature=6273edde5621ea0857d42eecca6da571d5a5d28777c6b401b7c47660782065c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNH52S5S%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu3IQTMnJ0FjgRXNWO08UMgloH%2FmDOw%2BPurZ7%2FwYzScAiByFzRjsUe6tr5%2Bbofi%2B9bTT1UmtSuvSsZum2091N%2Fcqir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMN%2FAIdRrggNRHH5vUKtwDkTwR%2FJw%2FRB3g%2BY2J7m1oG0mTsuTkeNXv1nMZEMolFPAnaWVOqiSXyUJxkunhHdC7llzaPi%2BYLSrrrBXUjamms3doB9HTMs8PIR7dX8pKDJHosdzBG6uWJcNl2KXc91N2qx1j0ciwog1uE03Y1uafSpnVRciwbz27IxhWPYGkRBcVyMJqkaCQseb7xMjz%2BiPWExUDdqCccn%2FhBcT1gnfy2T07QKMQX%2BXJS2in2vi%2FyBNCdXFsTLpwJX3acDgYZUVKpmNr1bu7b%2FzWV4nJKLqo4jaPIN6zX9Yd%2Fc5wmsn9Nkb%2FnBuJm8hwB6paZkDBRAzd7hAHjJ7d0xFwpimAfQ5%2BoUWokElTIoXtKxSgj4DN%2BE13kF40pmyKxUHoH%2FqHPHRohn%2FPHDnb8g4OOYdqFOInbqMbBdLiRezgTK%2BlS7JLOz5iML6EDOg0wQO7yc1J607hR6r00I2ceWzADKETME6WUmmCSZ6giBPk58EG2oJ%2B4uCFvThTz%2FLsTR2O8WrDV0Do1oB1Kyee0c4yDIFsAcg8BYs64Du4uZTyZ0A2QVEbPqgGcOLzy5vwlT11ajJ%2FKAo9bYV9GOa1sj4mTyuZy%2FDc1muYqgjK1fEYCQaMu%2BWxlX808AIRNPm%2BhgXRJfIwvN7bvgY6pgFApemIKcsCt2gBbcLYmzadXEMJ5MRh8MNE0E4ostEbWDdO%2BAGg07b6%2Bi3dQVUj9i1toE8F7PxLzO6aI44pnUe%2Bs6elucUCXFe4exg%2FxEZhL30r4PBrJLlxxAJbBEBzSJVGBHsqfYvliYGFR7SOZZFI2QOuUnOGkg0pbSyLm3etCXaA4Xt%2FvvhBVofO8zJEhfjWLcJzQMIhlu2cOGTRLpZAN4x3acMS&X-Amz-Signature=1351f04162f9017567639d1e8945339539573d33377965f759c146ab60625b27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
