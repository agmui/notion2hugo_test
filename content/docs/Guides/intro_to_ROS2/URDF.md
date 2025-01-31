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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT6J65G%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQeF6JhTKEM53jFHpifC34HmG9I1U31A7dN2HxaFah8gIgeXL5ZNYI%2BI1TRxAIX0u3t%2BQ55RTSf4C%2FEr4foPhysE4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF86SjarleXsUHBRAircA876jxNzmViOPJkQJx0tMMvclUdGnP76FlmwO1A7dk8ir41n%2F6HrsDZoTPB3iBqGUARPz1M3t%2BVurX9H7kv%2FPVWWVL%2FldVcp5SQPIQp6i2h%2Bwb70NPw8%2BIvtfj8JRUR%2BhzkZOuej5k4kED0b7WZk1ORGhREwD4F1QlKRCzKt1TupYfb4r0gJWvquLnAUnD%2FFYVzXHta7OLCJmoFn7KC49%2FTk6zum8xq%2BYCE%2BAJGDjlv09LI%2FgZGKfSqTT7iVkmOWKPQJ%2FI7GFyndIJZvrcJFuZREhlIzvnaWaiTeBliFZn2SdQamh%2B2bEHfnBMmuLnqFtYFfCmeh4j57UMp861F56OON6KWEkadbRCxmQfkewk4m95e%2BodmbNGzaqjljqluI2HYuSFY1xa6Ms7rJKkQPsQHB34xjdkpov7X1B%2Fffd43EjDHgUcnws%2FB12pCCJ%2BM2wiE1SXEJRDhrBsf4lA7YOkAnzvCj6FQfjaX3uNI5focJ7ed1JaoAYy2UxvEjMwjZj1pueH9STZfujJiVO7PaxquFzZ3HdOKKmNmjq1bMvc592%2FSKXNqinmxskCEdt389%2BMnfPktqvAaIG4o%2BY8LuS1zXlpUzv1ME1OrI6cT5ZDfsZIB0UWiqRGAHqOvtMKHJ87wGOqUBq3eXBY46pzVxm%2B1yqzBu13dUyWbB5YzaY5ZT%2FFm%2FdLpFBFJm55mBcYztS%2Baq4qKESKzNksRIZGLEBmHG3tsrgIpCjZdia2D%2BjrpiYpJHMo%2FX9qIPElFTXZAEtyaapPj0x6ZKYvYnKl%2BWVrSNwG8JXZpAsRQxFu4InCjYELfa%2F4lTPqSnJ0oWxS8ay03DPp1cYs%2Fon9eNnZCuDl5eYaOr%2FLjTtpos&X-Amz-Signature=3c923e066943246b306efc80fd757c45718ad0c12abe2eafdbba674cb14efd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GT6J65G%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQeF6JhTKEM53jFHpifC34HmG9I1U31A7dN2HxaFah8gIgeXL5ZNYI%2BI1TRxAIX0u3t%2BQ55RTSf4C%2FEr4foPhysE4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF86SjarleXsUHBRAircA876jxNzmViOPJkQJx0tMMvclUdGnP76FlmwO1A7dk8ir41n%2F6HrsDZoTPB3iBqGUARPz1M3t%2BVurX9H7kv%2FPVWWVL%2FldVcp5SQPIQp6i2h%2Bwb70NPw8%2BIvtfj8JRUR%2BhzkZOuej5k4kED0b7WZk1ORGhREwD4F1QlKRCzKt1TupYfb4r0gJWvquLnAUnD%2FFYVzXHta7OLCJmoFn7KC49%2FTk6zum8xq%2BYCE%2BAJGDjlv09LI%2FgZGKfSqTT7iVkmOWKPQJ%2FI7GFyndIJZvrcJFuZREhlIzvnaWaiTeBliFZn2SdQamh%2B2bEHfnBMmuLnqFtYFfCmeh4j57UMp861F56OON6KWEkadbRCxmQfkewk4m95e%2BodmbNGzaqjljqluI2HYuSFY1xa6Ms7rJKkQPsQHB34xjdkpov7X1B%2Fffd43EjDHgUcnws%2FB12pCCJ%2BM2wiE1SXEJRDhrBsf4lA7YOkAnzvCj6FQfjaX3uNI5focJ7ed1JaoAYy2UxvEjMwjZj1pueH9STZfujJiVO7PaxquFzZ3HdOKKmNmjq1bMvc592%2FSKXNqinmxskCEdt389%2BMnfPktqvAaIG4o%2BY8LuS1zXlpUzv1ME1OrI6cT5ZDfsZIB0UWiqRGAHqOvtMKHJ87wGOqUBq3eXBY46pzVxm%2B1yqzBu13dUyWbB5YzaY5ZT%2FFm%2FdLpFBFJm55mBcYztS%2Baq4qKESKzNksRIZGLEBmHG3tsrgIpCjZdia2D%2BjrpiYpJHMo%2FX9qIPElFTXZAEtyaapPj0x6ZKYvYnKl%2BWVrSNwG8JXZpAsRQxFu4InCjYELfa%2F4lTPqSnJ0oWxS8ay03DPp1cYs%2Fon9eNnZCuDl5eYaOr%2FLjTtpos&X-Amz-Signature=c9c3c7bb58b2e3bdc5e9d71bb37f01684e3ce3626964e7549e2f6bdf48375938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
