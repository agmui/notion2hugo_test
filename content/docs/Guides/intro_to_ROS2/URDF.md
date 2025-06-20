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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARETUPF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F4CFUjXxmTNWMm8cb5Y0DV8fnI2Q%2FK3qyZ%2FYrQbDOyAiEAj6%2BrBR8fII2X874fKflt93VQRrY%2BOj065rKY%2BJlSU34qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJn1niylfdsnAlO2yrcA%2BWnSKmOMz8HIUf%2BG%2B6o2U1hmmX4xKlz8pmblgdZQvmeXhYBdsWmEu0MWcvmn1%2FkiRw9cYfOF5PHxLebWOQS7ypgwwmIKivSJnyvCegc9cdiBfpsFSxgkk08%2FzF78ZOuKIh8ZKRE3q3IfS6u0rpgbfoasTkFEqOm66P%2FAnySjra5BH8M4%2Fxvm8TzIb4iqoOglLn8qkCXgrbk6iectg0dILMwFN7lZAAQRzGyVSXXOZk7RZiau6h5xzg7ubgUcFMOOxE10Gg1%2BOFQg%2BZsd6AAah3u%2FSlF0OlW6z0Usq5yCCTLcdBEnnrq5WsyWtCSDDFT6BSf0%2BmkN3iEZxRfqx7G%2BZRjTMsy6USPFTklAPpCWYcFcVP2Fp6mqKq4m6x1ZMc30O%2B4A7%2F46%2FmJnR%2FDbKfvY9PkpU9e1sbuBMjcL4mOxj98PglCgl6hO%2F46DU5cRfh3ivYbYRktEd3BuGk%2F3aK1B2UEBfs6L2bQ0ZDxFyhRIY%2B%2BBc63%2BOM0BflVMdyGCy7yajXmZ78YMDAILEoi6cy7H5zi%2Bx6FrgvXNq%2Bs%2FLQ4fLx74Z9Qo6qmAOYrLr6hkbu4qveKvM8nvzr67EvptqaxuHeGyd8XXiyqablp%2Frir34koI3kpEBnArGzndaZGMJCk1cIGOqUBvuMqt2IA3hsgANmu%2F7EDz4Ym0SngZj8%2Bl7pGza6OjYnOXH9UZNnxNlwHUAUJtf0ILsmaqiDDTyrruw3DL%2Fmy1r%2BSZZiGrL0JrEiZypk8knKQgcrCE71bqS7P8gd4vgl%2FA03z5mwz3ApI8oVjqtzlYp5oyXNzNYHdChcKwJ76rGBg1%2FiNWBWgEKFTBUEdFRXfoie3xXV2gJWKrzi25ZjEeVFBNibd&X-Amz-Signature=862aec21da9f9b0e22353ae54ee7876839d3a4ef3364b928e5e1fe8c3fa1ecfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARETUPF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F4CFUjXxmTNWMm8cb5Y0DV8fnI2Q%2FK3qyZ%2FYrQbDOyAiEAj6%2BrBR8fII2X874fKflt93VQRrY%2BOj065rKY%2BJlSU34qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJn1niylfdsnAlO2yrcA%2BWnSKmOMz8HIUf%2BG%2B6o2U1hmmX4xKlz8pmblgdZQvmeXhYBdsWmEu0MWcvmn1%2FkiRw9cYfOF5PHxLebWOQS7ypgwwmIKivSJnyvCegc9cdiBfpsFSxgkk08%2FzF78ZOuKIh8ZKRE3q3IfS6u0rpgbfoasTkFEqOm66P%2FAnySjra5BH8M4%2Fxvm8TzIb4iqoOglLn8qkCXgrbk6iectg0dILMwFN7lZAAQRzGyVSXXOZk7RZiau6h5xzg7ubgUcFMOOxE10Gg1%2BOFQg%2BZsd6AAah3u%2FSlF0OlW6z0Usq5yCCTLcdBEnnrq5WsyWtCSDDFT6BSf0%2BmkN3iEZxRfqx7G%2BZRjTMsy6USPFTklAPpCWYcFcVP2Fp6mqKq4m6x1ZMc30O%2B4A7%2F46%2FmJnR%2FDbKfvY9PkpU9e1sbuBMjcL4mOxj98PglCgl6hO%2F46DU5cRfh3ivYbYRktEd3BuGk%2F3aK1B2UEBfs6L2bQ0ZDxFyhRIY%2B%2BBc63%2BOM0BflVMdyGCy7yajXmZ78YMDAILEoi6cy7H5zi%2Bx6FrgvXNq%2Bs%2FLQ4fLx74Z9Qo6qmAOYrLr6hkbu4qveKvM8nvzr67EvptqaxuHeGyd8XXiyqablp%2Frir34koI3kpEBnArGzndaZGMJCk1cIGOqUBvuMqt2IA3hsgANmu%2F7EDz4Ym0SngZj8%2Bl7pGza6OjYnOXH9UZNnxNlwHUAUJtf0ILsmaqiDDTyrruw3DL%2Fmy1r%2BSZZiGrL0JrEiZypk8knKQgcrCE71bqS7P8gd4vgl%2FA03z5mwz3ApI8oVjqtzlYp5oyXNzNYHdChcKwJ76rGBg1%2FiNWBWgEKFTBUEdFRXfoie3xXV2gJWKrzi25ZjEeVFBNibd&X-Amz-Signature=08fcac519f63a5e0b068701d1e69dd3434b985fd7b6bb477a60b8f7bd06fea09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
