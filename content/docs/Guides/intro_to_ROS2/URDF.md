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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ27PGVF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHYTPw3n3zItBqaZ5lMUTzSL2UUvLscwefFXyDVJwyNlAiEAk6hiic2%2B2VO0Q%2FG4bqUhKb9uMmGNKm5QpxrO9N%2F7FlEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXjrX2%2Fl3be5sNLCrcAw1zB9oX%2BetMFZ6vOSftk9E03wfPc1lxFHb8NPq1BynipBr0keKHaQN3sDQ%2FCKQQvk9SVUARfzWn%2BVQ3rC0MAVjETp5Dd1NFKQTzCPwWg5t%2FNoqjk4dOam67gJlHwFSmZwVj4QX3%2B%2FVPdkeocrjZzuk7jpaEr5oE7NFc6fjZUZD0VGtw3%2BfScKEBvHHycTj%2F0w5lypWcebkIgVqqLVZiRtbDbRjbIqa2AFBPlXcVTsGXwVtontR7cinnnr3Va1Rz%2FcSkKsHdex6%2BHok%2Fd1JesV%2FdizIj%2By1IPq2mqcHIJMZmrt8sZkfJltEJ9aFv6aaD3PRHwpjfQMBgObjBduoHUIA17P1pm%2FXMrlpMuF71DqiPIpTtmrRkwF1R2E%2F%2FPzXPerA6OqWwBRmSZ7KqgiGR4QeTGLUhy8pGGFf2OCtC4vNwFKSv94rzqE1kkLQIAnTerLYEP5nq5HVvRTckZ5KbqaNLWwbXQPURZwWws5WZWx9p548XUeNtlhtZ8tXIQs%2B52MF50d82rOIunF9XwHzcQHtB7A0LSCVv5T0IKd%2BIU97i4l%2FXMiCPzn3migEmDJjZVU5Abk0khahEharC2rRzgz9hzm38MknIuy09J3T22k34aNWcTWqdqXX2ZXvwMMKcq78GOqUB2yxZTM3937xOn28rPS%2FnbCR6rm9AWQ4jwP8M6%2FiBCMknZVChIty7cQhfPMLoXJ6Sc4Fte%2Fz8qXq1eMv8Z9c%2FBdYZOJSLe%2Fdp72JnDnyQc%2FtMlHeSQhItWvaXv87o5YLnTNbm9rkTI1igf9lGsIDNSbFUUcYVrXC%2BatrgEsPjALNjPvHtrMXHKgmX6t%2BBig584Pm4umMn%2B3t%2BW%2FZ2AUg3LgqMPq%2Bw&X-Amz-Signature=4ec9295298ff07d032fa22ba74ece1cd8b43679bc26cef20841da76f767e06a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ27PGVF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHYTPw3n3zItBqaZ5lMUTzSL2UUvLscwefFXyDVJwyNlAiEAk6hiic2%2B2VO0Q%2FG4bqUhKb9uMmGNKm5QpxrO9N%2F7FlEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJXjrX2%2Fl3be5sNLCrcAw1zB9oX%2BetMFZ6vOSftk9E03wfPc1lxFHb8NPq1BynipBr0keKHaQN3sDQ%2FCKQQvk9SVUARfzWn%2BVQ3rC0MAVjETp5Dd1NFKQTzCPwWg5t%2FNoqjk4dOam67gJlHwFSmZwVj4QX3%2B%2FVPdkeocrjZzuk7jpaEr5oE7NFc6fjZUZD0VGtw3%2BfScKEBvHHycTj%2F0w5lypWcebkIgVqqLVZiRtbDbRjbIqa2AFBPlXcVTsGXwVtontR7cinnnr3Va1Rz%2FcSkKsHdex6%2BHok%2Fd1JesV%2FdizIj%2By1IPq2mqcHIJMZmrt8sZkfJltEJ9aFv6aaD3PRHwpjfQMBgObjBduoHUIA17P1pm%2FXMrlpMuF71DqiPIpTtmrRkwF1R2E%2F%2FPzXPerA6OqWwBRmSZ7KqgiGR4QeTGLUhy8pGGFf2OCtC4vNwFKSv94rzqE1kkLQIAnTerLYEP5nq5HVvRTckZ5KbqaNLWwbXQPURZwWws5WZWx9p548XUeNtlhtZ8tXIQs%2B52MF50d82rOIunF9XwHzcQHtB7A0LSCVv5T0IKd%2BIU97i4l%2FXMiCPzn3migEmDJjZVU5Abk0khahEharC2rRzgz9hzm38MknIuy09J3T22k34aNWcTWqdqXX2ZXvwMMKcq78GOqUB2yxZTM3937xOn28rPS%2FnbCR6rm9AWQ4jwP8M6%2FiBCMknZVChIty7cQhfPMLoXJ6Sc4Fte%2Fz8qXq1eMv8Z9c%2FBdYZOJSLe%2Fdp72JnDnyQc%2FtMlHeSQhItWvaXv87o5YLnTNbm9rkTI1igf9lGsIDNSbFUUcYVrXC%2BatrgEsPjALNjPvHtrMXHKgmX6t%2BBig584Pm4umMn%2B3t%2BW%2FZ2AUg3LgqMPq%2Bw&X-Amz-Signature=5286fdc3962d403b3eb8c7dcef4407c9912140fb443617a372694863dd77fcab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
