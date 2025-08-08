---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRWGLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDRJ%2F5ZX%2BKWnfHisTMAGl0kEVci1M4UbZAYo%2F1m8lAZyAiAUr%2Fne6RXF8cyBH6eH70D7HP06Uq%2BNmUdBsCak7hn8jyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxXn3O43AvMij0NDKtwD4hip5%2FKeM%2FIShgNirP%2BPY3D5epT5hIX1S2fPbhlaAk%2BNmZ07HkNBQsEMO9wmDXX0sWfXDXqFdfLPrn3mq23uToDPRV0AMcmjIfpG91gY3DEBNhEJIcIT1wBEWz%2BL%2FzQnOhlAZVieubGD2FC8%2BTeMlYeuy2%2FI9LTLdaiX3CPahcwl0vpaBcEEJuRzhDYavigkI8Akql6lUagF%2FWiAvQrNA%2BwH9AdstA2ZWlY1WzGMOqOybX6mCZtRXKY%2Fw%2FDG9qYm69DMVuasKBX0CBjqAn%2FoEI%2FfAQ%2FcGQ%2BhctweFbYBX05D8ndmViSYj6DG6Az7GTBxSgcwWVXaKGFxcxnsWWvm%2F8uiImicdAZ%2B24r65k%2B8A%2FuqV9LQZV%2FEuLcJJ1XcEpf%2FyZKUH99VWjaP0e%2Ft3LY%2B9bpBc2WLXcq%2FNi%2BQgdpu1z2GAMIO4SyI%2FXSIx6xuEIvbHt3a84Rgw8b7fhnD7xEWpgM2ET0kY7IgI1mG9tjXGuS%2FjdpZ8KAxP259m2Ey5l7RFseJYa4X9RWOKc7Tr4lJhfDpXMJVjv68KDPmNEUdeacGp9FpJIQwzjlLI2FP%2F%2Ba9PBbC3cX15202kKbX4pk%2FjGlmZuVriKfBZwdfARv%2B%2F7FUvX5o3%2Bfc0IiXvdcwrq3VxAY6pgFbS2%2BPaelF4Pc%2FikeyzuTn3eNP%2BllwpU0EqbLRKCuu770nff%2B3%2BzCbSrhRMnXm7uOFELcYLw3xcMbM2jCCS2moEQ9tZtFfYCoUynJ6iVoPRYjfoN2bnuQVi0picev4eXtg%2B3cx5Hfe%2BokDdyspdZ6a7AkDJZXYrGRe9h8hd8pjlKWcA%2FZO6Jo5bStqOC1gFZWnZIHZJXJ6ZP9f2lVkvCoiLvtUsfb1&X-Amz-Signature=52060aa218a8a0c1057fc416b44b471b0d2279f35ab8ed7489e79ef975a9f17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PRWGLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDRJ%2F5ZX%2BKWnfHisTMAGl0kEVci1M4UbZAYo%2F1m8lAZyAiAUr%2Fne6RXF8cyBH6eH70D7HP06Uq%2BNmUdBsCak7hn8jyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxXn3O43AvMij0NDKtwD4hip5%2FKeM%2FIShgNirP%2BPY3D5epT5hIX1S2fPbhlaAk%2BNmZ07HkNBQsEMO9wmDXX0sWfXDXqFdfLPrn3mq23uToDPRV0AMcmjIfpG91gY3DEBNhEJIcIT1wBEWz%2BL%2FzQnOhlAZVieubGD2FC8%2BTeMlYeuy2%2FI9LTLdaiX3CPahcwl0vpaBcEEJuRzhDYavigkI8Akql6lUagF%2FWiAvQrNA%2BwH9AdstA2ZWlY1WzGMOqOybX6mCZtRXKY%2Fw%2FDG9qYm69DMVuasKBX0CBjqAn%2FoEI%2FfAQ%2FcGQ%2BhctweFbYBX05D8ndmViSYj6DG6Az7GTBxSgcwWVXaKGFxcxnsWWvm%2F8uiImicdAZ%2B24r65k%2B8A%2FuqV9LQZV%2FEuLcJJ1XcEpf%2FyZKUH99VWjaP0e%2Ft3LY%2B9bpBc2WLXcq%2FNi%2BQgdpu1z2GAMIO4SyI%2FXSIx6xuEIvbHt3a84Rgw8b7fhnD7xEWpgM2ET0kY7IgI1mG9tjXGuS%2FjdpZ8KAxP259m2Ey5l7RFseJYa4X9RWOKc7Tr4lJhfDpXMJVjv68KDPmNEUdeacGp9FpJIQwzjlLI2FP%2F%2Ba9PBbC3cX15202kKbX4pk%2FjGlmZuVriKfBZwdfARv%2B%2F7FUvX5o3%2Bfc0IiXvdcwrq3VxAY6pgFbS2%2BPaelF4Pc%2FikeyzuTn3eNP%2BllwpU0EqbLRKCuu770nff%2B3%2BzCbSrhRMnXm7uOFELcYLw3xcMbM2jCCS2moEQ9tZtFfYCoUynJ6iVoPRYjfoN2bnuQVi0picev4eXtg%2B3cx5Hfe%2BokDdyspdZ6a7AkDJZXYrGRe9h8hd8pjlKWcA%2FZO6Jo5bStqOC1gFZWnZIHZJXJ6ZP9f2lVkvCoiLvtUsfb1&X-Amz-Signature=35154a6dd96cfbcefe3f2c4dcc3312b39c987168846742e531e308a9f5604a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
