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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVKFV5T%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICyxM8jWzuDrlx91JENwThFrMMkItsQuxZ3BktKwevasAiBN7ZNBvLe7ZaALe8m7HgBmdJtaJ0QUqxd9aBxib1o4tCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQUAb%2BTPrgeh0Q6hKtwDFCMXUEjEGGrhxlbG9hwscnv2ouF3l0KIONPcOBzAExLggQyxfp%2BQxfRsmtoc683hf4aiQOWtufXn%2Fy8vAYQU%2FrSRXxuUAA2ToX12nvSpwOhIvZkQX66J276pVnLLkp6LFgcPv3BEalwAqiFiTpg7o6hJC9Kdy2%2Fk3AkH0z%2FQPyUhsLMx3VRr3ooacjUx9NtpyT8j%2FNdrl11rCV%2FwdMsTSIh33ffKB0zAxHc797uWfGz2QsKWu9kFn4YPTovkMaI7kDjc800Aop0hKpeDJ3e0T2mVygxGjOcdeYIke0UVLwHi%2BagT8Y%2BIa8LMTWFUeHAdUAVx2TrMICDB0pX6QkqxTxb8XJh6prHi3UmDKgEd1I35bz25Zk3xRfz2QV0qVwgfoh8657QoFb8XcAreF2KqMx74kdBkfmrYK8XUYzV0n8lw5HPZlJazjcNW5%2Bll5u3YAfu87EN0E6evYg4pgyhHRFun%2FP4td4ZuljWz2Qb3IS2aX8ZdPjkNqsLUAz1AFeDqlVIIi0h6Y6GmQkrCOLn1XmaMlsb%2FOjNj7LXLmAFRR%2BEcg2Kej984GR%2BRqyszyYMqyrPsx4RADS4oWlSsDLoGqEG9qH6EX%2B6KF%2BTvpduq0QnjmHOHX3SHwRdWeFcw%2BJmiwAY6pgHR%2BbvAOWKWDa1hTa7ATJ4hD8%2Fyj6tEbgSpcBEI5HrGL8U4oh4ZrZ4Po33%2Bux5vx7YCdjH79nA%2FV2pmolNPDjb7f2gXoqUCOhejpg5HJ7L10wOmi3BoLr3WYZgZTI8mzMSL68v8Waj1tC9hlroMM9LkPXrVjHZsL6lIZvTRiQse%2BDZDzscdTNT732G3h6RgSwVpn0HjqYk0SYDTMJYV%2F4tq85T155Yd&X-Amz-Signature=34ddcf9d9dccb879f1ba875b4ca895172af50761dd7d3a42ad64c76f670a7524&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPVKFV5T%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICyxM8jWzuDrlx91JENwThFrMMkItsQuxZ3BktKwevasAiBN7ZNBvLe7ZaALe8m7HgBmdJtaJ0QUqxd9aBxib1o4tCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQUAb%2BTPrgeh0Q6hKtwDFCMXUEjEGGrhxlbG9hwscnv2ouF3l0KIONPcOBzAExLggQyxfp%2BQxfRsmtoc683hf4aiQOWtufXn%2Fy8vAYQU%2FrSRXxuUAA2ToX12nvSpwOhIvZkQX66J276pVnLLkp6LFgcPv3BEalwAqiFiTpg7o6hJC9Kdy2%2Fk3AkH0z%2FQPyUhsLMx3VRr3ooacjUx9NtpyT8j%2FNdrl11rCV%2FwdMsTSIh33ffKB0zAxHc797uWfGz2QsKWu9kFn4YPTovkMaI7kDjc800Aop0hKpeDJ3e0T2mVygxGjOcdeYIke0UVLwHi%2BagT8Y%2BIa8LMTWFUeHAdUAVx2TrMICDB0pX6QkqxTxb8XJh6prHi3UmDKgEd1I35bz25Zk3xRfz2QV0qVwgfoh8657QoFb8XcAreF2KqMx74kdBkfmrYK8XUYzV0n8lw5HPZlJazjcNW5%2Bll5u3YAfu87EN0E6evYg4pgyhHRFun%2FP4td4ZuljWz2Qb3IS2aX8ZdPjkNqsLUAz1AFeDqlVIIi0h6Y6GmQkrCOLn1XmaMlsb%2FOjNj7LXLmAFRR%2BEcg2Kej984GR%2BRqyszyYMqyrPsx4RADS4oWlSsDLoGqEG9qH6EX%2B6KF%2BTvpduq0QnjmHOHX3SHwRdWeFcw%2BJmiwAY6pgHR%2BbvAOWKWDa1hTa7ATJ4hD8%2Fyj6tEbgSpcBEI5HrGL8U4oh4ZrZ4Po33%2Bux5vx7YCdjH79nA%2FV2pmolNPDjb7f2gXoqUCOhejpg5HJ7L10wOmi3BoLr3WYZgZTI8mzMSL68v8Waj1tC9hlroMM9LkPXrVjHZsL6lIZvTRiQse%2BDZDzscdTNT732G3h6RgSwVpn0HjqYk0SYDTMJYV%2F4tq85T155Yd&X-Amz-Signature=ad5d2a973e2173ffc571f4edfb7feef8c112d314930d4eb529fa89574f4b79f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
