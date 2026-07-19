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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTFS4RB%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP833lnWpbS1Mge7fk44sybu9g62kixD%2FxgtC8UAYR7QIhAIjoh%2FhPbYU545ay%2BiULgduphSz9t7pYmlAf7x7AGH8OKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAbhjg533pqZgMsf0q3AMhqFNBKAHL4Zaawkx5pqjZgru4IrKLAlKavAbJbIOM12HnmvmSqNcKg6R3550mISiv7D9E00yJAmMO7gW%2FkCRWrLaVV1KsfogoXA3jV7h2%2FipieGmAS3uoKuQMo7czCTGbKL1CIGw5zbIWOAud2DEXXNS8rr3YDICfCddLcK%2Bh7nPgppJRPU7NaeTtzt28%2FfkMFr7aFqYc1sZSHjrtJXQbLES3LfFmy55%2Fyw6j%2BwxuYdpP3spYBsrV1GRvP1L8gAqbnPeD2BBthZjeALBmbIflp3I9WICFYP0hB0czHMQaP%2Fq1T%2FeALYGLcBByoiSkkEZt%2FCNS8m0ndHVcUbaZ%2FJhyNCZut6l13XMjeVlZRVbzxUkrBqIR7TJ4lFJ3jYOfxbTztME22ovfI7T6Zu%2F%2BJ0m47zLIIEJ2mHvwF43Mq5no8zBmHFrye33DV3CS70zM2VXgsOZKibkA2xurlQFcHU65ZU3ppNdewYKaQQrZKVAMQubBZmtD%2FLZ4v5khwyDjdeKGoot8wsn50f5qlSiUYbOvYUb%2F51JD0dbr4UOAXfn7FcZN8u9y4vnQny0Mpgc%2B6FZwzzKskkfTMiiUxxJGduE2Lf%2FQc6baX3ksHq1oA2Fw4Wwmb9l2UhLwXc%2FOXzCi1vDSBjqkATsEZnsD%2FxL%2BGlb3N63m4nnB5PVxbo6qioTIPwX4GKLVhRGlM0UtxEq8EV%2BBgLtJnh%2BaDZlTtB72r6kRTy7666Gi2ykCchbaAGxg%2FNVp6u9lVlNFS2uyuZCwgp6SkFYwczjn9z2iZ%2B3F8khTDrWC3wQKr%2FL00%2BNZHoiYnCSI5aC9HezLygmF%2BcuJjehEr3XQ46Xhrm9fbqvXMcLPSTkmdIzjeG9I&X-Amz-Signature=fef58276f5999dbcc7838d415a707288ead1e8f119c34a108969a7028ed34ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTFS4RB%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP833lnWpbS1Mge7fk44sybu9g62kixD%2FxgtC8UAYR7QIhAIjoh%2FhPbYU545ay%2BiULgduphSz9t7pYmlAf7x7AGH8OKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAbhjg533pqZgMsf0q3AMhqFNBKAHL4Zaawkx5pqjZgru4IrKLAlKavAbJbIOM12HnmvmSqNcKg6R3550mISiv7D9E00yJAmMO7gW%2FkCRWrLaVV1KsfogoXA3jV7h2%2FipieGmAS3uoKuQMo7czCTGbKL1CIGw5zbIWOAud2DEXXNS8rr3YDICfCddLcK%2Bh7nPgppJRPU7NaeTtzt28%2FfkMFr7aFqYc1sZSHjrtJXQbLES3LfFmy55%2Fyw6j%2BwxuYdpP3spYBsrV1GRvP1L8gAqbnPeD2BBthZjeALBmbIflp3I9WICFYP0hB0czHMQaP%2Fq1T%2FeALYGLcBByoiSkkEZt%2FCNS8m0ndHVcUbaZ%2FJhyNCZut6l13XMjeVlZRVbzxUkrBqIR7TJ4lFJ3jYOfxbTztME22ovfI7T6Zu%2F%2BJ0m47zLIIEJ2mHvwF43Mq5no8zBmHFrye33DV3CS70zM2VXgsOZKibkA2xurlQFcHU65ZU3ppNdewYKaQQrZKVAMQubBZmtD%2FLZ4v5khwyDjdeKGoot8wsn50f5qlSiUYbOvYUb%2F51JD0dbr4UOAXfn7FcZN8u9y4vnQny0Mpgc%2B6FZwzzKskkfTMiiUxxJGduE2Lf%2FQc6baX3ksHq1oA2Fw4Wwmb9l2UhLwXc%2FOXzCi1vDSBjqkATsEZnsD%2FxL%2BGlb3N63m4nnB5PVxbo6qioTIPwX4GKLVhRGlM0UtxEq8EV%2BBgLtJnh%2BaDZlTtB72r6kRTy7666Gi2ykCchbaAGxg%2FNVp6u9lVlNFS2uyuZCwgp6SkFYwczjn9z2iZ%2B3F8khTDrWC3wQKr%2FL00%2BNZHoiYnCSI5aC9HezLygmF%2BcuJjehEr3XQ46Xhrm9fbqvXMcLPSTkmdIzjeG9I&X-Amz-Signature=9d410f3b77c94d0ba3c2ece402e5bddb2f40833841ac7dae755cadfb65397e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
