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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTNNTHOD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDtk0vBsI2h2edqxoZXfmUP1ZboeMYqcbcE8JYnSfQGmQIgVtcKvaMwa3Sz1xeY9kaEGXvzBxQ08PCPH0GfR7%2FYEvMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2F5r%2F52S9Yd4UovyrcA%2Bhr7sNb05KoV9xFz8aIn6dWqR2cVfdfOjgY6dRhZIzdz8cYi%2FXNbgnr5OqG%2B%2FkBB7rd8tH3BMkg%2FUmwKgWLocbE0dzP0pp5ak3XaVeQ3xAE1kOB4GYlsyHfGXZ2tGWGQP3YNZ8Cv68u4x7xyA3dbWADqQCLLEzFX3ANDHKgtSG%2FQRhD6BACBDcwauIuwy0cZ%2FmLbHze6qEIfV%2FHwT5kzgKUdzEGf5YcWTj4aydqXa6BKMdjNnRVSvlBvzMDCmbmEVUzA6kKtku2wSb1UVxAB3uSiAQUpwY2RbS7Y6BSOUlAjhzR7ZI%2BwMdCcElxRlACMYiEHTrBr%2FMtKLPssZ0QCzY9%2BcPHuVOSfKYsI8JFhWb7ltJhpC73AVAl%2FkkBjMJmdZO0J9ZQuBjJc%2FNsA1n78GuEzOzO7CN92pkQOZZo9%2FA272QIBNhLC%2BU0IwlMSR%2BV8sW8QKdXan0u3%2FO5iKmp2os4Cby0TvRIjZRxMAfShJ8UIDzw8Czo2%2B8gTl%2B3ARgqiw1TdcIl6W4eDmBnUsGYcuDT2t5CK4Pi8KPhD4ZVp43KnAyK%2F1WooicpbtkMGOk5%2BR0whAU%2BLkU5g4CwgAHxtTWSlZd8d6f1KHSfTTCj1uOE3EVgnU1hsnfP62yYMIKn6L8GOqUBRt7YoWfWsTcgwbp%2Bm4tFNyqV%2BtjqjsoX4COrHWnHULMDbxVEWyMaRHtz5BGblMuNj0p0jszVt5QzJztYT8rZ8RKm%2FHge7aiv%2B4DtrZxwAD4d2S8wpecA2F7HsAD02TK61evkv1fwoH7cuXTxDQb9%2FSMbo416vj3ZQ2J7GZlw7wlcEEAlzcxvf3IAXw5hpT0ofjNyYo4ym8xc9oN3YTUBTSfkpbQG&X-Amz-Signature=7cd17861a297794d3d570583bb3c5bbf3039f75917f677143b1aeaabb824b18b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTNNTHOD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDtk0vBsI2h2edqxoZXfmUP1ZboeMYqcbcE8JYnSfQGmQIgVtcKvaMwa3Sz1xeY9kaEGXvzBxQ08PCPH0GfR7%2FYEvMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2F5r%2F52S9Yd4UovyrcA%2Bhr7sNb05KoV9xFz8aIn6dWqR2cVfdfOjgY6dRhZIzdz8cYi%2FXNbgnr5OqG%2B%2FkBB7rd8tH3BMkg%2FUmwKgWLocbE0dzP0pp5ak3XaVeQ3xAE1kOB4GYlsyHfGXZ2tGWGQP3YNZ8Cv68u4x7xyA3dbWADqQCLLEzFX3ANDHKgtSG%2FQRhD6BACBDcwauIuwy0cZ%2FmLbHze6qEIfV%2FHwT5kzgKUdzEGf5YcWTj4aydqXa6BKMdjNnRVSvlBvzMDCmbmEVUzA6kKtku2wSb1UVxAB3uSiAQUpwY2RbS7Y6BSOUlAjhzR7ZI%2BwMdCcElxRlACMYiEHTrBr%2FMtKLPssZ0QCzY9%2BcPHuVOSfKYsI8JFhWb7ltJhpC73AVAl%2FkkBjMJmdZO0J9ZQuBjJc%2FNsA1n78GuEzOzO7CN92pkQOZZo9%2FA272QIBNhLC%2BU0IwlMSR%2BV8sW8QKdXan0u3%2FO5iKmp2os4Cby0TvRIjZRxMAfShJ8UIDzw8Czo2%2B8gTl%2B3ARgqiw1TdcIl6W4eDmBnUsGYcuDT2t5CK4Pi8KPhD4ZVp43KnAyK%2F1WooicpbtkMGOk5%2BR0whAU%2BLkU5g4CwgAHxtTWSlZd8d6f1KHSfTTCj1uOE3EVgnU1hsnfP62yYMIKn6L8GOqUBRt7YoWfWsTcgwbp%2Bm4tFNyqV%2BtjqjsoX4COrHWnHULMDbxVEWyMaRHtz5BGblMuNj0p0jszVt5QzJztYT8rZ8RKm%2FHge7aiv%2B4DtrZxwAD4d2S8wpecA2F7HsAD02TK61evkv1fwoH7cuXTxDQb9%2FSMbo416vj3ZQ2J7GZlw7wlcEEAlzcxvf3IAXw5hpT0ofjNyYo4ym8xc9oN3YTUBTSfkpbQG&X-Amz-Signature=89025ed699fd0df13a4b0d2180e6883919f466e1fc0b0e46a0b41d42ddd5ed91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
