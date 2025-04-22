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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USIW3W2I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC14tC0ppYnlcQSvAZy81SIoIZg1WFJvSocLEzPupcXGAIhAPmeRnHO1%2B56XqxPD5uHEAN7ZsPYmzoxeiVQwectA%2BStKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrQj0i089%2BTQiZ%2BFwq3AMWGhTk%2BUXraSRK1xKGF%2BHvJtXjPVBgRZLtAoh4QufT2kir33hY3kxET8f9WcFG0mpnbWbFiQCf35%2FpsxNvswjknIFhIh8UoLNpV%2Fc%2BKJzsS7L0bUoHYHZ50PlxvuV%2Fj9kTPhnCsL7de6WvgBcwVe36gQIhbC9G7JYovGLvXxVyisK0IYAVFnCrUhrvSRX9UVnE%2BJ4ou7U%2BjrZyN8FnknnXitJbU75eD4HONWFexgnIIWyjp4lCN6MbqDuRmvVOwdBN6csAAboCsbfYnzScKX%2F7Ac6YorDa9XZ4LRJXbxXTmghgv8%2FDlpnNtfiSGwd3MaKRrk%2BVss96QEQ0cenQBY%2BRpKrs9a3s33FPkt%2BS%2BdBBZzBNfgHl1mnpgH6xCvh%2FzPawgL9QY8S43O13SG0bu4sag5x4xrFfRRbmmfh096yhc4iYUURdwOYNeF6oiHBHnkWcNnOpsGbtIfLFFUku9IBXDqyGosbbrbPivEiQ4p%2BOK%2BH65gfKBVEbXUXQe8yqtyW%2FnBhe%2FI2UvyxeDn0DefRVsZ2ldIXzEyOTvp1xJvni5Kltm8cXCYIEs%2FdvktCp924psmvWb3bqRTw7Pu30Tc9op1acYpEMi%2FmnzBCXSYzl%2FgK52JTqp9%2FwQZq9LTCA4J7ABjqkAQnNNkoAijnhli9oFlNoZGJFHfWCxbOMDg6TtMO6KgoxZAs3D9n2cfuRnqm0gwRGNW2iylvYpiJ4YT6wuUcdrz%2BTruYiZ609xQxKzMhLkPr%2FpR68qQftLznDpP9Q4lDNiFU684TBQJV56WwiChNeF4Wy41SItGedzN5O8Y8KQEyI7hWAupos%2B%2F6QNhqSQIn1tJ2Qug2vZurhD5cPqFFRMXFVmzkn&X-Amz-Signature=c67c1de14a1c1e5d8242abe10576be1a951a26c9df80d2f110cebfb1e9d84834&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USIW3W2I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC14tC0ppYnlcQSvAZy81SIoIZg1WFJvSocLEzPupcXGAIhAPmeRnHO1%2B56XqxPD5uHEAN7ZsPYmzoxeiVQwectA%2BStKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrQj0i089%2BTQiZ%2BFwq3AMWGhTk%2BUXraSRK1xKGF%2BHvJtXjPVBgRZLtAoh4QufT2kir33hY3kxET8f9WcFG0mpnbWbFiQCf35%2FpsxNvswjknIFhIh8UoLNpV%2Fc%2BKJzsS7L0bUoHYHZ50PlxvuV%2Fj9kTPhnCsL7de6WvgBcwVe36gQIhbC9G7JYovGLvXxVyisK0IYAVFnCrUhrvSRX9UVnE%2BJ4ou7U%2BjrZyN8FnknnXitJbU75eD4HONWFexgnIIWyjp4lCN6MbqDuRmvVOwdBN6csAAboCsbfYnzScKX%2F7Ac6YorDa9XZ4LRJXbxXTmghgv8%2FDlpnNtfiSGwd3MaKRrk%2BVss96QEQ0cenQBY%2BRpKrs9a3s33FPkt%2BS%2BdBBZzBNfgHl1mnpgH6xCvh%2FzPawgL9QY8S43O13SG0bu4sag5x4xrFfRRbmmfh096yhc4iYUURdwOYNeF6oiHBHnkWcNnOpsGbtIfLFFUku9IBXDqyGosbbrbPivEiQ4p%2BOK%2BH65gfKBVEbXUXQe8yqtyW%2FnBhe%2FI2UvyxeDn0DefRVsZ2ldIXzEyOTvp1xJvni5Kltm8cXCYIEs%2FdvktCp924psmvWb3bqRTw7Pu30Tc9op1acYpEMi%2FmnzBCXSYzl%2FgK52JTqp9%2FwQZq9LTCA4J7ABjqkAQnNNkoAijnhli9oFlNoZGJFHfWCxbOMDg6TtMO6KgoxZAs3D9n2cfuRnqm0gwRGNW2iylvYpiJ4YT6wuUcdrz%2BTruYiZ609xQxKzMhLkPr%2FpR68qQftLznDpP9Q4lDNiFU684TBQJV56WwiChNeF4Wy41SItGedzN5O8Y8KQEyI7hWAupos%2B%2F6QNhqSQIn1tJ2Qug2vZurhD5cPqFFRMXFVmzkn&X-Amz-Signature=71808945fdd2883402a24beada370cf60800e5b0e39f92be2b88f6319c24b87d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
