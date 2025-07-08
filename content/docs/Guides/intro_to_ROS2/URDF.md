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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTQ5HTC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjudWIc%2BNYVtEvGUe7Ym8%2B5OJfJrAHTh%2BhIYfj9Nhi9AIgKLN7LPs6a8lUq4FWjd2ReTLDGQDdL93TBILl1XaX%2B%2F4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnzMhoFUmjYjHzvxCrcA3kByx5mbAjin%2F5Jgz4Vn0mY1Ndu1d1033K6YRZS%2Fi4L06BZrj61ffwCMCCaNmyw4mLSPx3mAYnxToz5CPBlD230VsOH5qb7%2B25D1SDhzFX3Ae9YmIy5Jgd7iPen3bMCalOKA4jIsp3Xd9Y8tCI%2Fa1O%2BuBAkPZwWFjOGmPwJochms4mS6uaoKs0456sciVPXhthL9tC4tYnCBFbvQ%2FnNAvuDVgNK3bWmExtd%2FG8f5m1kIThLKgH%2BlF33b%2BQZbqsry8igoggahMmMZJ8TVIDDql1kqTMUu%2BiIBCdWlqvmdPS75VE9HigSuhfppGa45ZMwtn295F8Qhcx6tjgFvErrGHv%2FtEE4x7hYrPkiEa332eNlsAv2GOFi1Z683Ch2tUYff7ZmU8tviPcv7dW3JiINQ24ILrmAH%2BUAXOn0A%2BJDSo92o1Zf3j6o6CzKQfIjPjLPv1OPWy7RZVzTXV4YXp1ismGIB7NeqvVX2PE5nHOofKv6hGeDpG6LQnTZe8ZghQ%2FAjZ1uM9wUQhNOrOcz8IdsaasTPyF6o8cFVQF1nD7SpEwl6kVe7itau51VEcLL0exbB4FQUaYRtoiYxrKHt6XbRaDDX4zb2EJbq%2BsaRqJxvIR2FLL0d5fkCyuTUpTEMLbIs8MGOqUBxtcmElbMFXUmmgxTFgsKlpt2LsOX1kEnKFArJ9iliZFt5MXrp8vCdTr%2BGIJwoi%2FKRJ55Aux9xjIg5tjPYjcw8%2B6mtifJ%2BAokc3tSrJWM2638d9eL0FLtXRMhWQVQJ0IoqgUU%2BB31qB7aade4XqQ%2FAsD13Z%2FiE9d1Z3XatvLFDrdaMejRsL4OZ6nyhmb6I%2BUXk2uVNEmklDUUsEivAVfKKZmm%2BpuT&X-Amz-Signature=4b5c65ec9713e93668bec9c407d095fb352a1365f726bf3133acfba4b441a018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTQ5HTC%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjudWIc%2BNYVtEvGUe7Ym8%2B5OJfJrAHTh%2BhIYfj9Nhi9AIgKLN7LPs6a8lUq4FWjd2ReTLDGQDdL93TBILl1XaX%2B%2F4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnzMhoFUmjYjHzvxCrcA3kByx5mbAjin%2F5Jgz4Vn0mY1Ndu1d1033K6YRZS%2Fi4L06BZrj61ffwCMCCaNmyw4mLSPx3mAYnxToz5CPBlD230VsOH5qb7%2B25D1SDhzFX3Ae9YmIy5Jgd7iPen3bMCalOKA4jIsp3Xd9Y8tCI%2Fa1O%2BuBAkPZwWFjOGmPwJochms4mS6uaoKs0456sciVPXhthL9tC4tYnCBFbvQ%2FnNAvuDVgNK3bWmExtd%2FG8f5m1kIThLKgH%2BlF33b%2BQZbqsry8igoggahMmMZJ8TVIDDql1kqTMUu%2BiIBCdWlqvmdPS75VE9HigSuhfppGa45ZMwtn295F8Qhcx6tjgFvErrGHv%2FtEE4x7hYrPkiEa332eNlsAv2GOFi1Z683Ch2tUYff7ZmU8tviPcv7dW3JiINQ24ILrmAH%2BUAXOn0A%2BJDSo92o1Zf3j6o6CzKQfIjPjLPv1OPWy7RZVzTXV4YXp1ismGIB7NeqvVX2PE5nHOofKv6hGeDpG6LQnTZe8ZghQ%2FAjZ1uM9wUQhNOrOcz8IdsaasTPyF6o8cFVQF1nD7SpEwl6kVe7itau51VEcLL0exbB4FQUaYRtoiYxrKHt6XbRaDDX4zb2EJbq%2BsaRqJxvIR2FLL0d5fkCyuTUpTEMLbIs8MGOqUBxtcmElbMFXUmmgxTFgsKlpt2LsOX1kEnKFArJ9iliZFt5MXrp8vCdTr%2BGIJwoi%2FKRJ55Aux9xjIg5tjPYjcw8%2B6mtifJ%2BAokc3tSrJWM2638d9eL0FLtXRMhWQVQJ0IoqgUU%2BB31qB7aade4XqQ%2FAsD13Z%2FiE9d1Z3XatvLFDrdaMejRsL4OZ6nyhmb6I%2BUXk2uVNEmklDUUsEivAVfKKZmm%2BpuT&X-Amz-Signature=561bf4822e3efa0cd62e587401e4bbb905d4c747917435c4d9e8040d54ecf672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
