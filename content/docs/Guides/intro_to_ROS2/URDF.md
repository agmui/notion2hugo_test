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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRRLUMNQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIApfA6UslcAisFct1aXqf6tSUeSjdOqeZAEC5jWwGz50AiB6QXHWB5fnAXRUDF9P3AEhMYjpPr10k5u6PDLItjqKHiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XMKboUCg%2BSjXNB%2BKtwDvcMnNq%2FfqcU3YzhS5qFQ7TreEjgFR1aX5aXTp5ryFBIWAcDnZH8jyIUREQku5ueh%2BSSbQDSx0Fy3019Z145avUjdW%2BlwBhBGNesp2ds1zXFF9IXbGN6wDvS4JIe4ZER%2B6YWap9PO%2BZ5j0uEdGRxEfdprV%2BFRzNZVIDCvXIcrlDMjNFwfjNOcxNzHJDzmGJtmW%2Bq2DdLHwlqkgHw07MSX4mUZjt5aRVsJbmQJGvbIQuCbaWJTU2%2BajOW8bFLQNi8hz9hAcQsq7EKS4f0qIjzYJznmwL65uC8IbsSfnCQtIKy7yNUnmtcag0gESBHzMvAsbgWQnR5nRvm66cTy9j1LdJ3iIDMUdnOaoUl4cZ%2BGJn9UK%2F%2FhOVN0YyfpXCr9vmMYnIn2mishVhv2Pe8wi8oJT%2FYcpVe3zSEP9RBRCQXe6Rp9ryzYaEwQ3hQUg19KdyxW1PU6bV%2FpCzG49fqMJaUHe21UQz9HY1hP3K%2BbcSegEZumQCeT2AkyfqfIhuiJ4TP8KnhLmlrQDpZLcTzdlnN5BUIl%2FsIb6xGkyWOQYZo1%2Fuky1Uhwua5kAB2UO4oOoZmxDW50XNpWVbG3zt7POKMenvKQP885JzSKtH77m7pOoqR3xieBxTh9hT9Y2Hkwg4yIvgY6pgG%2Blr%2BRKE%2F1S7kpuTWV2l1YFKr8%2FdKDK6tSQIfSeeKF2LO6GIgq2iqEGTdQIoNSVZXDbuTvA%2FQL9bktTMdZieGC9xMolZDEdCZKufKtgIvHp0uKZG7GYnjLtYvntegMGLdU8xSnpRURoeU8x5oybayQ3LR%2BiRlG4D76ZA5lU6F8XrHlIP1F4ROlvSPs7w%2Frr8skv4V9pUFQIuzzSE5vCLcytp3wlQWB&X-Amz-Signature=576f93f6786c2f503020e4ba8c298de169c13ad162aaef32814a2f9f8b8f4889&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRRLUMNQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIApfA6UslcAisFct1aXqf6tSUeSjdOqeZAEC5jWwGz50AiB6QXHWB5fnAXRUDF9P3AEhMYjpPr10k5u6PDLItjqKHiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9XMKboUCg%2BSjXNB%2BKtwDvcMnNq%2FfqcU3YzhS5qFQ7TreEjgFR1aX5aXTp5ryFBIWAcDnZH8jyIUREQku5ueh%2BSSbQDSx0Fy3019Z145avUjdW%2BlwBhBGNesp2ds1zXFF9IXbGN6wDvS4JIe4ZER%2B6YWap9PO%2BZ5j0uEdGRxEfdprV%2BFRzNZVIDCvXIcrlDMjNFwfjNOcxNzHJDzmGJtmW%2Bq2DdLHwlqkgHw07MSX4mUZjt5aRVsJbmQJGvbIQuCbaWJTU2%2BajOW8bFLQNi8hz9hAcQsq7EKS4f0qIjzYJznmwL65uC8IbsSfnCQtIKy7yNUnmtcag0gESBHzMvAsbgWQnR5nRvm66cTy9j1LdJ3iIDMUdnOaoUl4cZ%2BGJn9UK%2F%2FhOVN0YyfpXCr9vmMYnIn2mishVhv2Pe8wi8oJT%2FYcpVe3zSEP9RBRCQXe6Rp9ryzYaEwQ3hQUg19KdyxW1PU6bV%2FpCzG49fqMJaUHe21UQz9HY1hP3K%2BbcSegEZumQCeT2AkyfqfIhuiJ4TP8KnhLmlrQDpZLcTzdlnN5BUIl%2FsIb6xGkyWOQYZo1%2Fuky1Uhwua5kAB2UO4oOoZmxDW50XNpWVbG3zt7POKMenvKQP885JzSKtH77m7pOoqR3xieBxTh9hT9Y2Hkwg4yIvgY6pgG%2Blr%2BRKE%2F1S7kpuTWV2l1YFKr8%2FdKDK6tSQIfSeeKF2LO6GIgq2iqEGTdQIoNSVZXDbuTvA%2FQL9bktTMdZieGC9xMolZDEdCZKufKtgIvHp0uKZG7GYnjLtYvntegMGLdU8xSnpRURoeU8x5oybayQ3LR%2BiRlG4D76ZA5lU6F8XrHlIP1F4ROlvSPs7w%2Frr8skv4V9pUFQIuzzSE5vCLcytp3wlQWB&X-Amz-Signature=d65392fc4cf184ceab59821720c5ca615b38acfba67e7a592002ccaf07a7f8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
