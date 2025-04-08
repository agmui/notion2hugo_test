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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QV5Z3XP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBLz8EqAUvR2i4doOABMLJ35qKqdH42s9F0rAepSPQwIhANduXPsxqWh5HzSHfoFqP6N9yq%2BHwBi8jkzbZVRzm8UoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwMGz1%2BluoTvj6x5Swq3APImpqMJVIEbjRjIaE%2B8PeUr4R16FstGqEb1pooVbkKrmSRgMaeduPyQ5MOKyg5ml8QEJyGS3lqu2URuxu8f%2FQe6Z4UJxbNKCnatr1c3EHl%2Fwxi5pXU24unWWd6WSLkDR%2Fn7Y5wWaDYbHUAEEDmjHNEi7XqBhJvosn5m38DHL5aLaqr7hgKAQBKfi%2BxYl2b9%2FzMsqeTsu8Ikv%2BAjt7sYPagq5QGXlUx3OoWOCEXI6D%2BdN%2FiYhCwwDSNyUmMMsW7m9HHCNgp2vq5QsWW57ZzyDvy9OAIvmlsqAzcTGgF3acX6JeXx8bieO7SmCqqrPFYMCy9PmV%2B8hMCUpb5ntLg0WEypT8lVsDQXUEUeZEajpd69YIwpWVJJG%2FwyuISIV1iuMK%2FDAjzq5fXwBjukQc0lQzInstbGCXxgQ8MU%2B9tA862%2BFoFFV1TwDYolnsPWUfFNaBRVM2wW3qlK3YGU%2FDaShJjj86AzB4E2e52H3%2B6DVkum7hOIwdtJMMp0gkot%2BijHSLcIMKynsrr1motL5t7E8E%2FRat9PIBdgNSmlrf4k%2FQX9Wng5y3RcjVh0C3O1iUNBgXqRpn99lSCETqxkl6wzeApG6XftyCYP3VyWqqyAcUReZmE48LXRFmjim95hzCcpdS%2FBjqkAdvh1S4nx1XAXAWIi%2FlFH8bwsjcxcFzi5DNGz2tuS55COhlFKLgvllr5sNBN0p3A9%2FLGZmvtjjO8Wzvip6bLB6hlNCdkqbED7BfUE8HlxHAYoNU2OwKqkHkkGTaQyZAojQMFGZFdiS%2Fpp0AcDZy8N%2BtbiFzosZFTEQbm8gz0PtAiymgpKbTDRLNCrQLSy6013XyVBMVTUSxihzbNLD7BNxcCq%2BtQ&X-Amz-Signature=baed9ca2c3a9c9a01c2a6527a0860a24c9d92435342f2d347e15378523ec109e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QV5Z3XP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBLz8EqAUvR2i4doOABMLJ35qKqdH42s9F0rAepSPQwIhANduXPsxqWh5HzSHfoFqP6N9yq%2BHwBi8jkzbZVRzm8UoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwMGz1%2BluoTvj6x5Swq3APImpqMJVIEbjRjIaE%2B8PeUr4R16FstGqEb1pooVbkKrmSRgMaeduPyQ5MOKyg5ml8QEJyGS3lqu2URuxu8f%2FQe6Z4UJxbNKCnatr1c3EHl%2Fwxi5pXU24unWWd6WSLkDR%2Fn7Y5wWaDYbHUAEEDmjHNEi7XqBhJvosn5m38DHL5aLaqr7hgKAQBKfi%2BxYl2b9%2FzMsqeTsu8Ikv%2BAjt7sYPagq5QGXlUx3OoWOCEXI6D%2BdN%2FiYhCwwDSNyUmMMsW7m9HHCNgp2vq5QsWW57ZzyDvy9OAIvmlsqAzcTGgF3acX6JeXx8bieO7SmCqqrPFYMCy9PmV%2B8hMCUpb5ntLg0WEypT8lVsDQXUEUeZEajpd69YIwpWVJJG%2FwyuISIV1iuMK%2FDAjzq5fXwBjukQc0lQzInstbGCXxgQ8MU%2B9tA862%2BFoFFV1TwDYolnsPWUfFNaBRVM2wW3qlK3YGU%2FDaShJjj86AzB4E2e52H3%2B6DVkum7hOIwdtJMMp0gkot%2BijHSLcIMKynsrr1motL5t7E8E%2FRat9PIBdgNSmlrf4k%2FQX9Wng5y3RcjVh0C3O1iUNBgXqRpn99lSCETqxkl6wzeApG6XftyCYP3VyWqqyAcUReZmE48LXRFmjim95hzCcpdS%2FBjqkAdvh1S4nx1XAXAWIi%2FlFH8bwsjcxcFzi5DNGz2tuS55COhlFKLgvllr5sNBN0p3A9%2FLGZmvtjjO8Wzvip6bLB6hlNCdkqbED7BfUE8HlxHAYoNU2OwKqkHkkGTaQyZAojQMFGZFdiS%2Fpp0AcDZy8N%2BtbiFzosZFTEQbm8gz0PtAiymgpKbTDRLNCrQLSy6013XyVBMVTUSxihzbNLD7BNxcCq%2BtQ&X-Amz-Signature=579546fae2970e666f496b75496fccd914fd14bc0fce33089653db1c0bb97161&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
