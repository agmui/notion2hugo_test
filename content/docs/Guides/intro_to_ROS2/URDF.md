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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKH4DPXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGh2FD10u0mt9jO9fxGWQeY4ue987UyNzjexMAgOpRYAiEAvdFGtpejWJfNNlB0Ujvsi3VKIjYZTGCUI7P5VxakFZUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsbWUAK0h%2BXsutANyrcA02ihLGxs29w3ghCbZufJCY466FH3GLNEf%2BtyyLBbYZg9xcLQ4R8zQl%2BJRz8eb7Z%2BuYkD4fepvOnUIBijICTTcc7BRjvNYgwseycSKIxbldu6O%2F4Rw%2Bx7mtuGQRcDtkh1Yd7YMoKPDGUZyo68orxI4%2FJFiXH%2BMXbTj%2FpGsABRoExzcY2%2FttZgOgO7rsihQyKwaQv9RFsgrK4WtXt94e%2BhOxSvCJhlu7sF1DqZsPqoHasGIpnktKai0D1G6VpiBU6eu4lFuyF4PuyvwE1u7tco444oWSKHtCwBNeXqYDuE%2FcwWgCbZzDvWbVqp4CpmkEYWTNdT%2Bqv9q55NhYS693S5FIc3nOO5TwZRmTyHfBt%2BHxR6UngH8RxPUwva23imjuhGEHTcsNi2vTByrWWWWfQ0VaTbLwolJB2XB4kUj4McEDyJpJvbhExYIZxBx5M%2FZ9CkkyCKwOaA6XUAFB4Q6dfYq2bQwon3w0Osw0xM6UYZnPOuhHs%2BGl7kqAhhINisGNjfq2FbuflUkWrMEvBoosN7uKeiGnzReMlbQck%2FhsqNynIH5yA84HZZxJOSQszb6TVeRpFXABFNkRbs2%2F9Cm7Bhk%2BSHgr8aR29xb%2BYIZvRMaeOr77azU2muLJmzOFPMNHevb8GOqUBMyEyX%2FvIJb94o%2BfcX%2Bk57zkvK5uIctOHeIyopZluN6L6QbzXlSjavoGdknLIAAJIbSE2T5dYmEOIP7BiGvGS2lFdtyTSizwfvLbtz5tcymX39ZGT%2Fk7wnNW%2BKQSjxg3dMZ8iWtQZ%2B1JfvljzqEocM0tfsyrHFJ02hpYXwTmUaMzZOrkvuLZWWi6R7fSh%2FxHm4ebbuyHZly7w%2FZUf8YRB4urTF3oE&X-Amz-Signature=b574bb67ecf94d1efbb369b488d0120228bc43ccce94fc2d1157cd35dc11abd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKH4DPXO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGh2FD10u0mt9jO9fxGWQeY4ue987UyNzjexMAgOpRYAiEAvdFGtpejWJfNNlB0Ujvsi3VKIjYZTGCUI7P5VxakFZUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsbWUAK0h%2BXsutANyrcA02ihLGxs29w3ghCbZufJCY466FH3GLNEf%2BtyyLBbYZg9xcLQ4R8zQl%2BJRz8eb7Z%2BuYkD4fepvOnUIBijICTTcc7BRjvNYgwseycSKIxbldu6O%2F4Rw%2Bx7mtuGQRcDtkh1Yd7YMoKPDGUZyo68orxI4%2FJFiXH%2BMXbTj%2FpGsABRoExzcY2%2FttZgOgO7rsihQyKwaQv9RFsgrK4WtXt94e%2BhOxSvCJhlu7sF1DqZsPqoHasGIpnktKai0D1G6VpiBU6eu4lFuyF4PuyvwE1u7tco444oWSKHtCwBNeXqYDuE%2FcwWgCbZzDvWbVqp4CpmkEYWTNdT%2Bqv9q55NhYS693S5FIc3nOO5TwZRmTyHfBt%2BHxR6UngH8RxPUwva23imjuhGEHTcsNi2vTByrWWWWfQ0VaTbLwolJB2XB4kUj4McEDyJpJvbhExYIZxBx5M%2FZ9CkkyCKwOaA6XUAFB4Q6dfYq2bQwon3w0Osw0xM6UYZnPOuhHs%2BGl7kqAhhINisGNjfq2FbuflUkWrMEvBoosN7uKeiGnzReMlbQck%2FhsqNynIH5yA84HZZxJOSQszb6TVeRpFXABFNkRbs2%2F9Cm7Bhk%2BSHgr8aR29xb%2BYIZvRMaeOr77azU2muLJmzOFPMNHevb8GOqUBMyEyX%2FvIJb94o%2BfcX%2Bk57zkvK5uIctOHeIyopZluN6L6QbzXlSjavoGdknLIAAJIbSE2T5dYmEOIP7BiGvGS2lFdtyTSizwfvLbtz5tcymX39ZGT%2Fk7wnNW%2BKQSjxg3dMZ8iWtQZ%2B1JfvljzqEocM0tfsyrHFJ02hpYXwTmUaMzZOrkvuLZWWi6R7fSh%2FxHm4ebbuyHZly7w%2FZUf8YRB4urTF3oE&X-Amz-Signature=f564f149aade706887029cd41244402d91102003f01042167b82a9b52d3c8640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
