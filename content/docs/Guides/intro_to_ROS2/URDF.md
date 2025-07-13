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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HRZCVM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7npP37cyp61Rnq1WbDGBushV7XXd7nwYc5w%2BfEpjzgIhALZGwkolHMHVZ5DxZuOIyqW5bPZDtQuNhkXZ6bpJnPZNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyUrSz61TAZnHnUkUq3AMw1X6WVk56YszU6%2Fd%2BSQeyGLQbMSXLY%2Fqd%2B802FZIITSOBktIB3I9bS1XrDAAvCwyUUKAwwD8YxZHIUeyuQAsU62S60ZaRSEKL7zUi0EH%2FLj5X%2BDoDnybuwBzeSU6i1kVtYuVOhPP4F5jzeGszSG2ocRUczIN%2B4ARvGDEX5I87RsnH6J7NACrCwKXg4MVZmDQ4JaTJXb08lGc%2F8N4rr4FIIkwM8CYvgjZsMizz0To72Gm3SE1MlJYmcrsD%2BtAE9lj9%2FV83kZaKm4beTthCFODWGCfZAr8SieNI8Cxtq5EPZQISa7b2DgMyv2DaTOdEn1a7VeyfmwEOOcRvbenloyC4WiryIgJZGtwF0JIh%2BB0uXowJCCp7%2FglfoCs8ZUdx970aV9WSAH%2F5GkGHeo%2FDEsXzRpOTZB22CvoOLE2QVP6WjREnqouKYRTlQO2HPSsOOIv1CQZydM2%2BF5iQEM8KshNYw8R1n%2BLtW7NoAQNJOEvq9DDjExY%2FpjaoV%2B9pjhW3B5gZYXp1OX5MAqoV9kBrumFnLgRSHbul9VwXySfoiG7EZnJW4ml2ocyVwsxbI3T2IdSzq9nj%2FgCp8RQTFzmf7YTMkSaAO9PDBSdViD%2BNvdYZ%2F7W7rkjkeb%2FZ53KM4TC%2F2MzDBjqkAZh2h3uKvVxeLwVMzyJ5ZY5eaGvJk2CUR%2FpB1ecxANG%2FWGZMCpV5NICgUbZr1PXkAgYRORtyK59Yy%2F8SKkzLkrQzDnXz5GmAThqgfUERsFFLDVENRy6c%2BXJA0oRSVlQooPk93W7vhpOnf2iUYZ4ziS6FyKUimDcD3mt%2F7TM5jT8QNc9gp7QvuGS5S%2Bt%2FOlzMsRtRSc%2BG82Hkih1YvREN2x1Wg6nO&X-Amz-Signature=8e131d7ce32b364eab52cc7bd3ba9353b638fdbc3b8e8cfb96c051ceea177a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HRZCVM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz7npP37cyp61Rnq1WbDGBushV7XXd7nwYc5w%2BfEpjzgIhALZGwkolHMHVZ5DxZuOIyqW5bPZDtQuNhkXZ6bpJnPZNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyUrSz61TAZnHnUkUq3AMw1X6WVk56YszU6%2Fd%2BSQeyGLQbMSXLY%2Fqd%2B802FZIITSOBktIB3I9bS1XrDAAvCwyUUKAwwD8YxZHIUeyuQAsU62S60ZaRSEKL7zUi0EH%2FLj5X%2BDoDnybuwBzeSU6i1kVtYuVOhPP4F5jzeGszSG2ocRUczIN%2B4ARvGDEX5I87RsnH6J7NACrCwKXg4MVZmDQ4JaTJXb08lGc%2F8N4rr4FIIkwM8CYvgjZsMizz0To72Gm3SE1MlJYmcrsD%2BtAE9lj9%2FV83kZaKm4beTthCFODWGCfZAr8SieNI8Cxtq5EPZQISa7b2DgMyv2DaTOdEn1a7VeyfmwEOOcRvbenloyC4WiryIgJZGtwF0JIh%2BB0uXowJCCp7%2FglfoCs8ZUdx970aV9WSAH%2F5GkGHeo%2FDEsXzRpOTZB22CvoOLE2QVP6WjREnqouKYRTlQO2HPSsOOIv1CQZydM2%2BF5iQEM8KshNYw8R1n%2BLtW7NoAQNJOEvq9DDjExY%2FpjaoV%2B9pjhW3B5gZYXp1OX5MAqoV9kBrumFnLgRSHbul9VwXySfoiG7EZnJW4ml2ocyVwsxbI3T2IdSzq9nj%2FgCp8RQTFzmf7YTMkSaAO9PDBSdViD%2BNvdYZ%2F7W7rkjkeb%2FZ53KM4TC%2F2MzDBjqkAZh2h3uKvVxeLwVMzyJ5ZY5eaGvJk2CUR%2FpB1ecxANG%2FWGZMCpV5NICgUbZr1PXkAgYRORtyK59Yy%2F8SKkzLkrQzDnXz5GmAThqgfUERsFFLDVENRy6c%2BXJA0oRSVlQooPk93W7vhpOnf2iUYZ4ziS6FyKUimDcD3mt%2F7TM5jT8QNc9gp7QvuGS5S%2Bt%2FOlzMsRtRSc%2BG82Hkih1YvREN2x1Wg6nO&X-Amz-Signature=3337fcec9a533359f0469e8ca47b96e8b668d71c9157a7bd5224c8ff11d0c284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
