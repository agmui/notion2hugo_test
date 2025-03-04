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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QKBPXL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxx0SYQVAwTSeE9CQf31mfLRhzvUdvP%2B8%2BE0a1bv5lmAiEAyq0I5dEhsfZn9dQuBWc9fFKawU3BKt%2BfN71BzPhp5sQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhL%2BwBg%2BJRtk6DmSSrcA4wjc8Z2%2F8wCKEUSCGAFFtyIACpKHTIlJ3AcHdaWJNXkpduKE%2Fxxj7kX5OIuKXsSgJLLkRuZhxLpRJItt%2B7MxaWaSeiDHv1IbNx3oUndCubQhwXH%2FOO6Y0tXgGGlZuFQJbrwPbBPGGUj%2F1v3b2l2MlxaxJVutqoMV%2BaBG%2FNmNVzp%2BVOxcjXb9Z%2BpD8ATJrZCTqcA3nOZaM4PFx3DVdatT9m7mg3rhtk873YoZGv4ignMRwzjLCM0zI4bFafaos0TqP8MG7Ia%2BQFPFU0VivjV%2FPwU%2BuSHa5uKzdAaPiIUggB7GHfvmkUL11F7UypUWH7QwGFldRi%2FVtPJ2%2FCYBH68CwpCWUT1m9lZopjWTj0ItXJ476feg2aykp1dcWvOhYnVfm1gTHWVpZxxt1jNi9jMh15J5QYJHjPKvwTTNUw6jDeIImuLlbHdZiqdlo1oZ0%2BaM4kwUi3vGYb%2BnKncq5J1MjwVm92bOmcnVuJMFG3UrKfSUoKBkdizSLEIWOK%2BiaQwQDrboEV1nM04ygjRQlXAZk6jZdiCUaLd%2FjZ9MOkLqSxtYVzC9%2FiTi94xiK7oCnTkUBhU6o1%2FX5On4zA3ZVJxjXkmVKq66y7Wwz3hcAqC5QIEvjvY84PXcIuF2jg0MLuImb4GOqUB1ZjjR2KhMZ2qlTzbl0wxKCYPSg0nMVV1iGP8Z7IifC6u6alBKwjaxPE6g6my9jdwlRPWehAXPgyM2qvUjBiiYgKptb7NnomsmxePkfqefg8zOLcJkNspm2oudhKu%2BfBbK1UU76zReNlytmfPY6Czokpvs2lnm6QpwmkmYH2YyF4XO6i%2F52HmrNVq7Jya5vxsuzJIsfu%2Fe%2FqLpUzt21HsZ6uyFrsP&X-Amz-Signature=3240ce21cfc905cbc937dccc54d88c88b4952c88331e59f61947972ae987621c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5QKBPXL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxx0SYQVAwTSeE9CQf31mfLRhzvUdvP%2B8%2BE0a1bv5lmAiEAyq0I5dEhsfZn9dQuBWc9fFKawU3BKt%2BfN71BzPhp5sQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhL%2BwBg%2BJRtk6DmSSrcA4wjc8Z2%2F8wCKEUSCGAFFtyIACpKHTIlJ3AcHdaWJNXkpduKE%2Fxxj7kX5OIuKXsSgJLLkRuZhxLpRJItt%2B7MxaWaSeiDHv1IbNx3oUndCubQhwXH%2FOO6Y0tXgGGlZuFQJbrwPbBPGGUj%2F1v3b2l2MlxaxJVutqoMV%2BaBG%2FNmNVzp%2BVOxcjXb9Z%2BpD8ATJrZCTqcA3nOZaM4PFx3DVdatT9m7mg3rhtk873YoZGv4ignMRwzjLCM0zI4bFafaos0TqP8MG7Ia%2BQFPFU0VivjV%2FPwU%2BuSHa5uKzdAaPiIUggB7GHfvmkUL11F7UypUWH7QwGFldRi%2FVtPJ2%2FCYBH68CwpCWUT1m9lZopjWTj0ItXJ476feg2aykp1dcWvOhYnVfm1gTHWVpZxxt1jNi9jMh15J5QYJHjPKvwTTNUw6jDeIImuLlbHdZiqdlo1oZ0%2BaM4kwUi3vGYb%2BnKncq5J1MjwVm92bOmcnVuJMFG3UrKfSUoKBkdizSLEIWOK%2BiaQwQDrboEV1nM04ygjRQlXAZk6jZdiCUaLd%2FjZ9MOkLqSxtYVzC9%2FiTi94xiK7oCnTkUBhU6o1%2FX5On4zA3ZVJxjXkmVKq66y7Wwz3hcAqC5QIEvjvY84PXcIuF2jg0MLuImb4GOqUB1ZjjR2KhMZ2qlTzbl0wxKCYPSg0nMVV1iGP8Z7IifC6u6alBKwjaxPE6g6my9jdwlRPWehAXPgyM2qvUjBiiYgKptb7NnomsmxePkfqefg8zOLcJkNspm2oudhKu%2BfBbK1UU76zReNlytmfPY6Czokpvs2lnm6QpwmkmYH2YyF4XO6i%2F52HmrNVq7Jya5vxsuzJIsfu%2Fe%2FqLpUzt21HsZ6uyFrsP&X-Amz-Signature=04687ec5e3f8ceb84d68f53143cdf8e0b50c1180b0af9d4159dd50eece02ac9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
