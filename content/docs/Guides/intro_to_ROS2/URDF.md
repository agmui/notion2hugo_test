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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQIHPED%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAbJwSB%2Ff91K5FdYb%2F%2F4TOImTGYMLZy86CGetL6AEmHAIgcwyqAbDXYLtT2wph04aKMdHf01c8xLBlocmvJ1jRF9oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1nSvzAZlHAqT3XOCrcA1zQDxCH4%2BVwVXbsTjX9aCCAZRS3hMhQvkiqOFgjLiHiiv05%2F1HTyrcfHwODj73gCIXkUwjGzjcBP0XyLq3%2BB9HssOpyDe6agkhT9ouWcXnwLE4SmUKWYIL71FRXzuUYIGc6Ns8e76Xh2zW%2FtKa%2Bvbjf4cQSjFmQMcrmsXcP3zjiHgQJEGLBSSaj40jVAFEKzJmDpc5QT%2FKAn5ne639GIOihMJbpea0UFqnOazWnwl%2Bt5qfEVHY9VsXnheQANiZXbofrdg9Q9UElxCzOEXXcBlDqdnXjt5utNh2lG49kOqLWx2gAAlSEf4VanTy%2Fi3HtPe9sZPEc3a1LEv712mDORIku2tvBDFWrUp7IfJGqYXOqDOqfsYpMD2t4uOo5iRyI9tAyJntyuBQIw6AYCeoSc1MmZecPiG1rt6B9pi81jBytkMVd6GZz5KS%2BXJFuLt1b9dEvPU6XecQzbu5XSiHZXxmD6PoOZbN593dxoRLrBcEbIl4QHE1RWEjNsGS7SU%2FIWfUxIWUJeiaYNGNvprUvQkf1PCpad8iXbBn8A2S%2BCWMe8lFeINSREc5iP%2Bq8a7XTq13OdrVqEnPb9Mt%2FAIltrGiAjxEFuTnpCtgbRzx4p8rl0ghe5zC4%2FkxIRP12MMSn2r0GOqUBQg6wR%2FBzWFEbMZwdYgEIOlWgdlVrWgZK7Ye4%2B%2BMNXdM83B%2FrttDxPh%2BjlQpdqBJi%2BjRCPRLSm8vSI%2B%2FNW1LkPsuQPTLUf8S9FRU0q9zFLgIO8%2FFaCelZgivjCNUJ9WS1Zz2hm6fyt%2BOtcdK6%2FkB3yRdB1W83qyMBHLsX%2BxNnX%2BzMjoM3FS9mzGeVTvhCYrd%2F9oDMsgW3Yigwnvgom2O9wjP5Fde5&X-Amz-Signature=2087f9bd3ffccce183a8d0301d7200162665474bf99dfac975cee0dac4c0b4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQIHPED%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAbJwSB%2Ff91K5FdYb%2F%2F4TOImTGYMLZy86CGetL6AEmHAIgcwyqAbDXYLtT2wph04aKMdHf01c8xLBlocmvJ1jRF9oqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1nSvzAZlHAqT3XOCrcA1zQDxCH4%2BVwVXbsTjX9aCCAZRS3hMhQvkiqOFgjLiHiiv05%2F1HTyrcfHwODj73gCIXkUwjGzjcBP0XyLq3%2BB9HssOpyDe6agkhT9ouWcXnwLE4SmUKWYIL71FRXzuUYIGc6Ns8e76Xh2zW%2FtKa%2Bvbjf4cQSjFmQMcrmsXcP3zjiHgQJEGLBSSaj40jVAFEKzJmDpc5QT%2FKAn5ne639GIOihMJbpea0UFqnOazWnwl%2Bt5qfEVHY9VsXnheQANiZXbofrdg9Q9UElxCzOEXXcBlDqdnXjt5utNh2lG49kOqLWx2gAAlSEf4VanTy%2Fi3HtPe9sZPEc3a1LEv712mDORIku2tvBDFWrUp7IfJGqYXOqDOqfsYpMD2t4uOo5iRyI9tAyJntyuBQIw6AYCeoSc1MmZecPiG1rt6B9pi81jBytkMVd6GZz5KS%2BXJFuLt1b9dEvPU6XecQzbu5XSiHZXxmD6PoOZbN593dxoRLrBcEbIl4QHE1RWEjNsGS7SU%2FIWfUxIWUJeiaYNGNvprUvQkf1PCpad8iXbBn8A2S%2BCWMe8lFeINSREc5iP%2Bq8a7XTq13OdrVqEnPb9Mt%2FAIltrGiAjxEFuTnpCtgbRzx4p8rl0ghe5zC4%2FkxIRP12MMSn2r0GOqUBQg6wR%2FBzWFEbMZwdYgEIOlWgdlVrWgZK7Ye4%2B%2BMNXdM83B%2FrttDxPh%2BjlQpdqBJi%2BjRCPRLSm8vSI%2B%2FNW1LkPsuQPTLUf8S9FRU0q9zFLgIO8%2FFaCelZgivjCNUJ9WS1Zz2hm6fyt%2BOtcdK6%2FkB3yRdB1W83qyMBHLsX%2BxNnX%2BzMjoM3FS9mzGeVTvhCYrd%2F9oDMsgW3Yigwnvgom2O9wjP5Fde5&X-Amz-Signature=14de4fed6c4ff466607b2c1ef3e7ad4055c21d6d267bba2280b9d5ac0ff99907&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
