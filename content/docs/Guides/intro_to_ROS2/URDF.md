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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFISKEL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7NmG2dq0Mhx91qHg6Wp0TdTK5MlJLXB9GLbgVV03i7AiEAjoQsf9uMqAhBhwFQoniUvBesbSkD19xoFblc7MYixawqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFzawzh1Si60TTEXCrcA%2BuGyPBdIuU3cQ%2BUmF6P2NQ4f5ok7bKut5WDWFQl62HzckZeHyGsPFo8Tn8G7FDCywXghIBHLTGF4Jl6mc3wQObqAzYf4AAhKbG5V0yLb8ucZJd%2F%2BeNf7lLTzFQThiG3QKxkjCHiCKwWkbATgsRWyOOo2uT1noNChig%2FC0iwKbal0ifjvYLEf3vyqtRrOK4ydxEjsUK6r1KwOGvPwu%2FvgIykME1V82ZtC62DGweeCOZq8iyYPUBpBwEPJRGdtZykjj%2FyaFWOaCxLpPYKCnwShITbpb48KkJ7%2Fw0NFI4amcIYcdBg%2BNQjVTqwngO62l88NvpMA6GdojguCzbPGTF9xm%2FRuGGxZkN4qnbKvBWnMh%2Ff4HOKL%2Bg83SlW6lU%2F0FDMMZ%2Bvat%2BsC1xgbacX7sKHyh%2BZiK3xdEyHe79gDc%2FrE02DBAdEk22mppJBD3yZgOCAGZjooAT6X8rwBOlpyvWl%2FRx0IDRWazG2VgBxrVUH8FSKTu28R6RH8rkkJQmvaL%2F%2BqyhSu2wjzFdjJYZRD9xb%2FOwRD%2FjWi9tMua7yXO4hLHcHtjxNDMapZ%2F7OpaYrT7Ow95smTBaEzgEzFiAgUQurOEpNL4r7sIvz2HSZ8TFYPY33RrZx4Y9cYM2zjs7LMOnn%2BcMGOqUBjNTKXr1qhqdAu9%2BV2VgRrW5teCfiGZ6njPRR4Nz%2BIemJtr34lX0%2BSJg9TeJdOQzv1pjddvCxGBe0ohZ8a9GnlveHMpLnofqSRFqF5SFCuODbkkmQBnudVIsr%2B%2FfPSNGFaXni%2BP9lu0FpimQ9e33pGIOzM8%2FYBFfI%2B0E1daxGGljJ0PmyWx3o9gFa1rJ9B2U5XMfbVyNIAiwfQDhbKvJsloRz0jGj&X-Amz-Signature=f8eed0cda210021060b35b5fa0bd5dda6671dee2662dfe2c3658ca5b188b067e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFISKEL%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7NmG2dq0Mhx91qHg6Wp0TdTK5MlJLXB9GLbgVV03i7AiEAjoQsf9uMqAhBhwFQoniUvBesbSkD19xoFblc7MYixawqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFzawzh1Si60TTEXCrcA%2BuGyPBdIuU3cQ%2BUmF6P2NQ4f5ok7bKut5WDWFQl62HzckZeHyGsPFo8Tn8G7FDCywXghIBHLTGF4Jl6mc3wQObqAzYf4AAhKbG5V0yLb8ucZJd%2F%2BeNf7lLTzFQThiG3QKxkjCHiCKwWkbATgsRWyOOo2uT1noNChig%2FC0iwKbal0ifjvYLEf3vyqtRrOK4ydxEjsUK6r1KwOGvPwu%2FvgIykME1V82ZtC62DGweeCOZq8iyYPUBpBwEPJRGdtZykjj%2FyaFWOaCxLpPYKCnwShITbpb48KkJ7%2Fw0NFI4amcIYcdBg%2BNQjVTqwngO62l88NvpMA6GdojguCzbPGTF9xm%2FRuGGxZkN4qnbKvBWnMh%2Ff4HOKL%2Bg83SlW6lU%2F0FDMMZ%2Bvat%2BsC1xgbacX7sKHyh%2BZiK3xdEyHe79gDc%2FrE02DBAdEk22mppJBD3yZgOCAGZjooAT6X8rwBOlpyvWl%2FRx0IDRWazG2VgBxrVUH8FSKTu28R6RH8rkkJQmvaL%2F%2BqyhSu2wjzFdjJYZRD9xb%2FOwRD%2FjWi9tMua7yXO4hLHcHtjxNDMapZ%2F7OpaYrT7Ow95smTBaEzgEzFiAgUQurOEpNL4r7sIvz2HSZ8TFYPY33RrZx4Y9cYM2zjs7LMOnn%2BcMGOqUBjNTKXr1qhqdAu9%2BV2VgRrW5teCfiGZ6njPRR4Nz%2BIemJtr34lX0%2BSJg9TeJdOQzv1pjddvCxGBe0ohZ8a9GnlveHMpLnofqSRFqF5SFCuODbkkmQBnudVIsr%2B%2FfPSNGFaXni%2BP9lu0FpimQ9e33pGIOzM8%2FYBFfI%2B0E1daxGGljJ0PmyWx3o9gFa1rJ9B2U5XMfbVyNIAiwfQDhbKvJsloRz0jGj&X-Amz-Signature=562b82ce8e83a0ec664039ac80b7bc5a593a660c6ff6b0a1331a2c066cfc9693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
