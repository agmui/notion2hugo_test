---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOQSLBCL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelEJTsBwRigIkO7l15In6oOinOL37tG7TflhybqhMYgIgAvOP6d3Lv%2FxrEnulol0dlQHEd8IgCG19S%2FQnn76NAq8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAzLo7WNFrTwmz0JxCrcA09vkCJDUbpIe2f14jf2Q%2B%2BuRWSCUDuA5vfqKFaZIU9ZiGc8NzCJY7CX0rF%2Bb8imu2zN9ZT9ymj2voWe4FU4mwnGsbD%2F6f5%2FnrEdc1m3YXECHsGUNSg%2BLnbuJx6HLPp%2FJvOJlgOfVRYP4pNLSoxoZV%2BeJtEpYbFIvnFvknJ2tBIKZEDYmrjn3%2FgNRSImijlRYbAPcSZBt4FS4AmvSED8t2%2F%2FpLkK%2BUJ6apao7znL4om5oEQPI6ihWaJblaEIg%2BkvrO7F5e%2FaMi%2B217CvhV5jQeYCj5IiHs1vEh7wtChwT7gCHczYILyL%2B3mXsx%2FJkJrIrzp2XlSU5zChbpxQCET%2Bsdr3fJVYcdJlWwhyuX14BEDDRQlyYL4Kw4cypnSjggt9cwXSaapFm5p0D15Ch1u8PQZduXz2N6CcNS7M8wrmzXEg6i3LVz2wWj0NvTRlCEcf5cGl0lNLyGPZlvA7Pv76Ol5gCn%2FVMDDpfG23SkCC19%2FMFhhkW70QH1UGX1MRLTIY6yjt4xucCM17K2wGTmq%2FPfVAV3wRCBn0806Lgu%2BlrYG%2FnrhYrOp74ehA3PnvCug0hWBtNzKrUaeA5P5L%2Fk2SjUCpdJLoIHjQ9Ups0FY1fPuSaeuNXWanms6mAM66MIOku8QGOqUBZPQFF7e%2F4SpR7EDoTH6j5e%2FBtL47pRvWR%2B0EYt0ccE7V0yPT6pg7YwE6zv2z8MU8kLK8PGzfPulVPOqt8Y339rYXvf6syS0CVBhK3GtCjghanibPWWZL%2B0ml6fbUETuDSjQDE39OlRpldsrF6cLYYf0snejzyXOAMLebt9IJ7fKYOk3MZHgPGNjmmJFpoaXmr4IjUSDWPUxYOb5ZWeD6s4X7XnwQ&X-Amz-Signature=74f5f4663658b15d470671baf7ab9f4e84e0d35e512a402e119b239d51c50977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOQSLBCL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelEJTsBwRigIkO7l15In6oOinOL37tG7TflhybqhMYgIgAvOP6d3Lv%2FxrEnulol0dlQHEd8IgCG19S%2FQnn76NAq8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAzLo7WNFrTwmz0JxCrcA09vkCJDUbpIe2f14jf2Q%2B%2BuRWSCUDuA5vfqKFaZIU9ZiGc8NzCJY7CX0rF%2Bb8imu2zN9ZT9ymj2voWe4FU4mwnGsbD%2F6f5%2FnrEdc1m3YXECHsGUNSg%2BLnbuJx6HLPp%2FJvOJlgOfVRYP4pNLSoxoZV%2BeJtEpYbFIvnFvknJ2tBIKZEDYmrjn3%2FgNRSImijlRYbAPcSZBt4FS4AmvSED8t2%2F%2FpLkK%2BUJ6apao7znL4om5oEQPI6ihWaJblaEIg%2BkvrO7F5e%2FaMi%2B217CvhV5jQeYCj5IiHs1vEh7wtChwT7gCHczYILyL%2B3mXsx%2FJkJrIrzp2XlSU5zChbpxQCET%2Bsdr3fJVYcdJlWwhyuX14BEDDRQlyYL4Kw4cypnSjggt9cwXSaapFm5p0D15Ch1u8PQZduXz2N6CcNS7M8wrmzXEg6i3LVz2wWj0NvTRlCEcf5cGl0lNLyGPZlvA7Pv76Ol5gCn%2FVMDDpfG23SkCC19%2FMFhhkW70QH1UGX1MRLTIY6yjt4xucCM17K2wGTmq%2FPfVAV3wRCBn0806Lgu%2BlrYG%2FnrhYrOp74ehA3PnvCug0hWBtNzKrUaeA5P5L%2Fk2SjUCpdJLoIHjQ9Ups0FY1fPuSaeuNXWanms6mAM66MIOku8QGOqUBZPQFF7e%2F4SpR7EDoTH6j5e%2FBtL47pRvWR%2B0EYt0ccE7V0yPT6pg7YwE6zv2z8MU8kLK8PGzfPulVPOqt8Y339rYXvf6syS0CVBhK3GtCjghanibPWWZL%2B0ml6fbUETuDSjQDE39OlRpldsrF6cLYYf0snejzyXOAMLebt9IJ7fKYOk3MZHgPGNjmmJFpoaXmr4IjUSDWPUxYOb5ZWeD6s4X7XnwQ&X-Amz-Signature=9b9e6234d64dbc8ebf0b336dd1b62d9ae81c4828d89f5af6117779c9fbc75d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
