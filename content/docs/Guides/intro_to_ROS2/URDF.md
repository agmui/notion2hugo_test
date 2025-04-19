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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJ3ZXMK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE27dYXxeKYOY9pJiQH4435wbHaRgThkPZyxtKfqJZQMAiBmSgK%2BXM9JnwW2Xht2b3AP2G9npuvpgO6NsgwDKnt97iqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM86NVKVsAIR%2FmZiWWKtwDgQQtPjAlY1%2FjZORKNNTek7EZWW94N4U70WCNVvtN%2F21B2dX4gZakc4AkLLxk4YUKbWAvszPSulaUOMRwvp67tNXuQnJ2Hra%2F4%2FjoBs7M%2FZQF%2Fy8NteXFCPp62sf%2BXb6wmxVg%2BXalPGgESmeub7neowttDI85jGLapPsMriKMfIuEdiSTbDLWAcfoeT2uRIEhFAyzs58j60q6sum%2FlCjAXadqhNgkC%2BZa%2FW9O8Nb4%2B5QWYQv6RVw6xeRucuGbr53QtGbuYW80FAF4caUyw2J0fjFq3VOLHIGHYA0CSmzVFtzwgODe9CFX8UUlKeOCkDbQOA3UeXJIP6eQuhbBzPIkWwMyYaFIrwFvRlcEZdLBBh3EZEiockHKwPd02d0TR3%2BOldsVgdX2bIOqnPjvoOLuu7FIokKZcxlcRrhTq99YMyLX44ckGyVd%2FXEMBTdc%2FZswuiYY%2BrRBZhxam4%2FvC3Hnc8il0R4zPN5jOuofOIo7pqh9pv1i3kBh5ur4sl4qNcSer44OblOm0oi%2BKVn5oxGas70kzvLFGRYYe9RvSooZiLj11cZXUThOArBEzzjiXg3TZfCppRx3ZgVxphOLQDqgYbQg9nlkz%2BKXCmR4LT0MPzC09iHFl4Ha4%2Bd5bjsw3puOwAY6pgHkFUWIaxpJMfPNzIVxTEhXexsNipDW9t7TE%2B8yWcjbUtq6IeaME9T4Vw9JoI9UINxhNsheWx8TyjIC9c7BmCdTMNB0cgBxdGnxeUqPj6L9fudbB54kbFMiRnVZUsV0ZM%2Fv2oIhCPpyOWXJZuhSIyOdHEvICnEyIgn7joqA48xRiQjE0frZqPy50LXn9op98P5bB2VRkVAnshwHBPkuaf3x44Lg2dRk&X-Amz-Signature=5ae100925a6e4341991f5a243985a657a3fc9ed3a5cd63e88298ea4c546af5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJ3ZXMK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE27dYXxeKYOY9pJiQH4435wbHaRgThkPZyxtKfqJZQMAiBmSgK%2BXM9JnwW2Xht2b3AP2G9npuvpgO6NsgwDKnt97iqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM86NVKVsAIR%2FmZiWWKtwDgQQtPjAlY1%2FjZORKNNTek7EZWW94N4U70WCNVvtN%2F21B2dX4gZakc4AkLLxk4YUKbWAvszPSulaUOMRwvp67tNXuQnJ2Hra%2F4%2FjoBs7M%2FZQF%2Fy8NteXFCPp62sf%2BXb6wmxVg%2BXalPGgESmeub7neowttDI85jGLapPsMriKMfIuEdiSTbDLWAcfoeT2uRIEhFAyzs58j60q6sum%2FlCjAXadqhNgkC%2BZa%2FW9O8Nb4%2B5QWYQv6RVw6xeRucuGbr53QtGbuYW80FAF4caUyw2J0fjFq3VOLHIGHYA0CSmzVFtzwgODe9CFX8UUlKeOCkDbQOA3UeXJIP6eQuhbBzPIkWwMyYaFIrwFvRlcEZdLBBh3EZEiockHKwPd02d0TR3%2BOldsVgdX2bIOqnPjvoOLuu7FIokKZcxlcRrhTq99YMyLX44ckGyVd%2FXEMBTdc%2FZswuiYY%2BrRBZhxam4%2FvC3Hnc8il0R4zPN5jOuofOIo7pqh9pv1i3kBh5ur4sl4qNcSer44OblOm0oi%2BKVn5oxGas70kzvLFGRYYe9RvSooZiLj11cZXUThOArBEzzjiXg3TZfCppRx3ZgVxphOLQDqgYbQg9nlkz%2BKXCmR4LT0MPzC09iHFl4Ha4%2Bd5bjsw3puOwAY6pgHkFUWIaxpJMfPNzIVxTEhXexsNipDW9t7TE%2B8yWcjbUtq6IeaME9T4Vw9JoI9UINxhNsheWx8TyjIC9c7BmCdTMNB0cgBxdGnxeUqPj6L9fudbB54kbFMiRnVZUsV0ZM%2Fv2oIhCPpyOWXJZuhSIyOdHEvICnEyIgn7joqA48xRiQjE0frZqPy50LXn9op98P5bB2VRkVAnshwHBPkuaf3x44Lg2dRk&X-Amz-Signature=4533c1b06a60dd952640baf19832b92185bf85c2ad7a0b266cf6e5f0e9f743e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
