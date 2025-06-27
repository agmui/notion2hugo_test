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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRJKLXV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDxjIlNVXHX5slZX1zXJPgthpqm%2B%2FelCt5gMzgnf00S5AiEAoz%2FZu2kdC9N8xjb%2BAyxrRvNdg1f52ALt6V708PlWEvEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNqEak9sngLharoR2CrcA6B51R3E1d06W7peSEnSyB20pIy%2FJ1k765fK%2FZNFmkfKWIn%2BxI0%2FSBiSy6Ia5OOq29UZqsVqt8jgAtjCu%2FKJnQZok9bPINj8QE8XxXyrqQ6ww95Nre1o37fGwmExIMgnrMagZ%2Bqn2BsINmqtwSxHcYdj9MCAEg7ViI7HGmOagTWfCc3mhTkddgZcn%2Bs2d3ZmPlsdjZyYuypFxQlvXR4u76LJ4bvTS7MWyq7V%2FQI8DoSAZYDt1BcTHmNhuom5Hh3we5ZIP8S0Wp%2ByrQdUmMKi6UqosCUwewNWcLfU2RcFuyK3gc7W6yr1Unt%2BSRR6HIPJD4qaumnnhlTjwoBgYN0w0lNGqK4PlptFJZvzmeOcNVeLWSYRISFrml%2FlEejFeMBa%2BiJ50poTFRMYQIQtK3rm512RbfxCn7sqi1XmPR2qctmbwzJIewl%2Bwbv5HeX4RnlVE4FhO13OM2R4Nhxm6VsjaMvQ3OyFYPJIRDbGuT9XofbvHOevbXw1ZpQ63UnYzhOB0Iozyw5cRD5Qn4GuAkfnHDlWX5ZRC0gj5WjMKJix14txDLEKdRaGma%2B888gzh0PcZgeitqxlqtFyrE2cpUPo7D1C13wMazURTB27%2FdkX6znw2bxISV3i5UQMbKDcMJz3%2BMIGOqUB71270klkL2WgbjYgsl98FnGWYXxvf3ScOJsFdL3m%2B8NKX4g%2FBIPw3WP6h6POIQzmMTd0Qt92217i1axxmb2Nc4vDlDnJ6GUbLp%2FhsYq6GrfIB87rIxsNJSPq7f1E44Hlbko0bqD9QVsSe%2BPGxm4nYniwoGKweMPBmRm%2BiK0HmL4dQ%2FGufhKck00hAI18fwJWonraCcbDuj6YihRkDJf4trDvVzDh&X-Amz-Signature=b6898e92144401f05bb89c7a0b17779d40a12d34359663d316cba838027ea60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRJKLXV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDxjIlNVXHX5slZX1zXJPgthpqm%2B%2FelCt5gMzgnf00S5AiEAoz%2FZu2kdC9N8xjb%2BAyxrRvNdg1f52ALt6V708PlWEvEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNqEak9sngLharoR2CrcA6B51R3E1d06W7peSEnSyB20pIy%2FJ1k765fK%2FZNFmkfKWIn%2BxI0%2FSBiSy6Ia5OOq29UZqsVqt8jgAtjCu%2FKJnQZok9bPINj8QE8XxXyrqQ6ww95Nre1o37fGwmExIMgnrMagZ%2Bqn2BsINmqtwSxHcYdj9MCAEg7ViI7HGmOagTWfCc3mhTkddgZcn%2Bs2d3ZmPlsdjZyYuypFxQlvXR4u76LJ4bvTS7MWyq7V%2FQI8DoSAZYDt1BcTHmNhuom5Hh3we5ZIP8S0Wp%2ByrQdUmMKi6UqosCUwewNWcLfU2RcFuyK3gc7W6yr1Unt%2BSRR6HIPJD4qaumnnhlTjwoBgYN0w0lNGqK4PlptFJZvzmeOcNVeLWSYRISFrml%2FlEejFeMBa%2BiJ50poTFRMYQIQtK3rm512RbfxCn7sqi1XmPR2qctmbwzJIewl%2Bwbv5HeX4RnlVE4FhO13OM2R4Nhxm6VsjaMvQ3OyFYPJIRDbGuT9XofbvHOevbXw1ZpQ63UnYzhOB0Iozyw5cRD5Qn4GuAkfnHDlWX5ZRC0gj5WjMKJix14txDLEKdRaGma%2B888gzh0PcZgeitqxlqtFyrE2cpUPo7D1C13wMazURTB27%2FdkX6znw2bxISV3i5UQMbKDcMJz3%2BMIGOqUB71270klkL2WgbjYgsl98FnGWYXxvf3ScOJsFdL3m%2B8NKX4g%2FBIPw3WP6h6POIQzmMTd0Qt92217i1axxmb2Nc4vDlDnJ6GUbLp%2FhsYq6GrfIB87rIxsNJSPq7f1E44Hlbko0bqD9QVsSe%2BPGxm4nYniwoGKweMPBmRm%2BiK0HmL4dQ%2FGufhKck00hAI18fwJWonraCcbDuj6YihRkDJf4trDvVzDh&X-Amz-Signature=2980c0ea82b3cbed4c8716eaf85792b16dccc6200959d6d74381ca78a8cca79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
