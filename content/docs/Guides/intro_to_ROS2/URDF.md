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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOFOAOF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTA84UiQUpdVQE2bTUAyzMtIns3qDV0GbXDO%2BYAcAjnAiEA7E3W3WTh%2BgJEZYgr0riBLanL12qT4UGm48rTis6YaIAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKgX17P0tCKEoCwpYSrcA0R5LzSrUlJZAHgJcq%2B0dPIn6Z3rYQgThSz87aByy1GgFkh0z48gC7Sk8gPOC7nBIRdIMB2xQQL9xgPXMUtZZ5%2FCQN2F1VqNR6jnHWUeU5DQQbEPX%2FLX1Lh6OEyVzh09FNtp4q1hLZ3TdxxqbqrUell0y5SMBZGt5i8uvbX3oBAE5AKhWqPO02%2BwpBv52Qw7kusiDvCOqxL%2FXihjNFDYAQrBtAvHvUbGaVhew5ee4d9xoTzsMEEu6cQ9VbDl8zOx3y7Bh8WPtS0NrL3a80E5R2t5kv%2FYzly6G60dv6GOND403YI3LC6catqMZ%2FV3WF8l1H6OMWEF%2F7jUYvdSrRkVJMk7LTn46kSLN5g4ZhOcB6%2Fo5xRqR7z5wT%2B0M1BvzFFCEcbZHzTefzdelJfWLREOx6uS%2BWNxTbtKLLi1QJIpheXZKxlIAjVs%2FYbXyYm6rAZ7CUUsUyrKrKu8q3lX0BVMzF8H5BvZw4ed69PGTbp44tPlykExQZR1aDiscZ6D8eI4oesBjuaezZDGPtVVpK%2Balr95Rgw16sSACnN6EkUhx3DgKDAxd51L0VyJ5DXwHTRm5N9X94myYyvh6r1fSsxL9EL0YJtGrg1PIrDd1evNcOvntoQao%2FzoZULw4NZqMPiL4L4GOqUBL3Wd83Ynmm6QAx9KLPxhZZ6cQN4iSkFl5wOimhAIaTg9t85KFOFz09sVYOP3ex0Wkhq7Nd6syDoHTRLp8o0YPG%2Ft5HyYC47p%2FLKxK1iY5yoByufvw3A9Pvhl%2FoiDrYp4LUJT0BQr9Em64VIdyFSJ8V9m86%2FVmOBQkcFk6P%2BjUxOBRewVD%2BQLmcFuyZqXdsqi1o591iD%2BDhBlzj9O8K4P5HuD8hc3&X-Amz-Signature=2d73c2d3b4aea9e53eac482288a17c0f7baaf7ecbefba27b388cf63109557b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOFOAOF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTA84UiQUpdVQE2bTUAyzMtIns3qDV0GbXDO%2BYAcAjnAiEA7E3W3WTh%2BgJEZYgr0riBLanL12qT4UGm48rTis6YaIAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKgX17P0tCKEoCwpYSrcA0R5LzSrUlJZAHgJcq%2B0dPIn6Z3rYQgThSz87aByy1GgFkh0z48gC7Sk8gPOC7nBIRdIMB2xQQL9xgPXMUtZZ5%2FCQN2F1VqNR6jnHWUeU5DQQbEPX%2FLX1Lh6OEyVzh09FNtp4q1hLZ3TdxxqbqrUell0y5SMBZGt5i8uvbX3oBAE5AKhWqPO02%2BwpBv52Qw7kusiDvCOqxL%2FXihjNFDYAQrBtAvHvUbGaVhew5ee4d9xoTzsMEEu6cQ9VbDl8zOx3y7Bh8WPtS0NrL3a80E5R2t5kv%2FYzly6G60dv6GOND403YI3LC6catqMZ%2FV3WF8l1H6OMWEF%2F7jUYvdSrRkVJMk7LTn46kSLN5g4ZhOcB6%2Fo5xRqR7z5wT%2B0M1BvzFFCEcbZHzTefzdelJfWLREOx6uS%2BWNxTbtKLLi1QJIpheXZKxlIAjVs%2FYbXyYm6rAZ7CUUsUyrKrKu8q3lX0BVMzF8H5BvZw4ed69PGTbp44tPlykExQZR1aDiscZ6D8eI4oesBjuaezZDGPtVVpK%2Balr95Rgw16sSACnN6EkUhx3DgKDAxd51L0VyJ5DXwHTRm5N9X94myYyvh6r1fSsxL9EL0YJtGrg1PIrDd1evNcOvntoQao%2FzoZULw4NZqMPiL4L4GOqUBL3Wd83Ynmm6QAx9KLPxhZZ6cQN4iSkFl5wOimhAIaTg9t85KFOFz09sVYOP3ex0Wkhq7Nd6syDoHTRLp8o0YPG%2Ft5HyYC47p%2FLKxK1iY5yoByufvw3A9Pvhl%2FoiDrYp4LUJT0BQr9Em64VIdyFSJ8V9m86%2FVmOBQkcFk6P%2BjUxOBRewVD%2BQLmcFuyZqXdsqi1o591iD%2BDhBlzj9O8K4P5HuD8hc3&X-Amz-Signature=d48f022158a953e3fff1c0c7249fe86b781d6c58ba29615c43521c16542cc8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
