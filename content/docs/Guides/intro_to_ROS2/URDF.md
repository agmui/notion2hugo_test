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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSHASRC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuFBnvrPldn2n9wS3TYnvLFM5JLkALwT00xy0dIlJJwIgPzKVHtRxZJxEyIOMEyEOGku%2B6jowok3WNsHjUq%2FcMfIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIrtjEcNhvnXyCQnkyrcAwXVxe5FQL1n2fatPysDzqE0UtRFwEMagy0z8jBV9XNx6BxssQzuSIM%2F4A%2Bt1zeNHxbUQE%2FkV5FZ8e8HCzdsdEen51u0LEjXFc35UqroSHhb%2FOua1LFbxc7u1FHxTwqT16XSueapOBjqfZgQynLY%2B8SC0qRf2istEwMEIh9yhebSTluNs1sgOHMcp8z1vms%2FIBPuRG%2FB1DEyxVoZwgayqAoJag6Fc%2B%2FdapKzSi5WizB31biEU6%2BnMcRfG3sLLgxjwgIyyyeUgOfhkztIl9V0UI8x4ZPoGzAxPRtzDZRhNnjRvoVkVGi35XosPXP%2FfD2FJIQy1Gde8lpr4lCcL4LhEYCU2%2BPIYskVruFw99oOQi1f7OnhZbB7NwNlNILSrqODlfVORvGTChmyrogC9uAIjddmOLWoGaeV64MuNf5%2FU%2F5IBS9b3wksIy%2BvdITiHekBU4C6D%2Fij%2FF4p09ezYsQFZyrLIslMJfPy3zHA%2FQjBUpu7a7UJgp0Ea25ffJZCcdZuEg6xw98RvFIeiahJw46LKX0gRdunU1DdGczC8I8AwFXsOI7F%2F6IAgrUNzwJJvUHG5wVJ1lvAlSllthPdwW2khnENOfe9ILGQYWYh5z975qwaRLtpxe1KuPE2vTevMJbj8r8GOqUBEqcRM09ndLNtf%2F9VhtR2ZFvaNYJeahbfNiW9wcew2CRm40MNfkpWnIInrRw9RjxJhU3y1CTQXeuiwy33%2FaZGmvjFWYE0TdhbPGpMs9%2BwbsF8tI2cVeo4LjbwL2aEfjDsG70sgVRyH%2Bcxswu1iiQegDn6k18kgvwbgvyXI8BPMwZP2Be9p%2B%2FoklsF07JEEX5loUfyYkj8tCLLn3WX8FlmFztMW54a&X-Amz-Signature=bba6959441a321956ee34fb6dd031eeb11d25f8d5010112e525162de945ff019&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSHASRC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiuFBnvrPldn2n9wS3TYnvLFM5JLkALwT00xy0dIlJJwIgPzKVHtRxZJxEyIOMEyEOGku%2B6jowok3WNsHjUq%2FcMfIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIrtjEcNhvnXyCQnkyrcAwXVxe5FQL1n2fatPysDzqE0UtRFwEMagy0z8jBV9XNx6BxssQzuSIM%2F4A%2Bt1zeNHxbUQE%2FkV5FZ8e8HCzdsdEen51u0LEjXFc35UqroSHhb%2FOua1LFbxc7u1FHxTwqT16XSueapOBjqfZgQynLY%2B8SC0qRf2istEwMEIh9yhebSTluNs1sgOHMcp8z1vms%2FIBPuRG%2FB1DEyxVoZwgayqAoJag6Fc%2B%2FdapKzSi5WizB31biEU6%2BnMcRfG3sLLgxjwgIyyyeUgOfhkztIl9V0UI8x4ZPoGzAxPRtzDZRhNnjRvoVkVGi35XosPXP%2FfD2FJIQy1Gde8lpr4lCcL4LhEYCU2%2BPIYskVruFw99oOQi1f7OnhZbB7NwNlNILSrqODlfVORvGTChmyrogC9uAIjddmOLWoGaeV64MuNf5%2FU%2F5IBS9b3wksIy%2BvdITiHekBU4C6D%2Fij%2FF4p09ezYsQFZyrLIslMJfPy3zHA%2FQjBUpu7a7UJgp0Ea25ffJZCcdZuEg6xw98RvFIeiahJw46LKX0gRdunU1DdGczC8I8AwFXsOI7F%2F6IAgrUNzwJJvUHG5wVJ1lvAlSllthPdwW2khnENOfe9ILGQYWYh5z975qwaRLtpxe1KuPE2vTevMJbj8r8GOqUBEqcRM09ndLNtf%2F9VhtR2ZFvaNYJeahbfNiW9wcew2CRm40MNfkpWnIInrRw9RjxJhU3y1CTQXeuiwy33%2FaZGmvjFWYE0TdhbPGpMs9%2BwbsF8tI2cVeo4LjbwL2aEfjDsG70sgVRyH%2Bcxswu1iiQegDn6k18kgvwbgvyXI8BPMwZP2Be9p%2B%2FoklsF07JEEX5loUfyYkj8tCLLn3WX8FlmFztMW54a&X-Amz-Signature=69fbc60f0d1548861cc27c722f7c291c7641bf637fd66a9a6e90d7bf8c70051f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
