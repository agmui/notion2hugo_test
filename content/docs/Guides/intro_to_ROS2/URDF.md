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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQRQUEH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBkAvYwK%2Bs9UIwj1p2NdhZKixxUYcpguBAgSoqAzphAFAiBrgMwZ8lqULKxVcjJ20%2BAhJghDGgE9%2FJj5pqgbuEPsbSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bNUTvgQjxWU5JKhKtwDRo%2FuxHI5tCKQeWg46WkL7N4Kkaz9mBBJz24w6YIoqn3B0pLGsDpZmYtjskll2ZckCjDHzzDqQNS%2BNQYjtPxwyzTpDJbU6CijRHFV55IfqhJzHILY2DeW6vegIVT800s0dCly4Ki%2FQXZgN8sO8gVhXa6TASpQFbva4Fx0o7PbJAJ%2FnSrPvn9lZ7lIHUdbxOHgU%2B5brYecanG1U6oNOcCmxkdhdLZnmrt6y6lDcFkgaILuN7s36V8H1Ex0FbA284YbDulkNyCR5ySLhxfx1q9bRZwPQtRPMZ41K4PiR%2BeLSRRigT6BVcZWomGwQ6zCdLHyG%2F1Jr9BtocCz7lY%2FUeGJC1IaXnJ6DOtv85nuw6Jmj1RJHN6wl0O2eVrTb%2BbCG9GfKffPkduww8u9O0bKL6dpDzh%2BRLyXuNYr46T8hJvaIIALXVb%2FcYy9FkvYDrxOEWK0Xcdx3p7O9Ez3cMigWix23FPqcYA%2FU3%2FLdJ3Jx7D%2FKm%2F8arhN49YKMdh%2F0kQNIXlccvyJHBCGzkHmOQef4ZqpHJNraF6ex8D5PTqBBQ4jnq8Ois8u%2F%2BP7WVdfHbvF9KueGr9qpbgJXNlr%2FiwQRKjKBmnI1Q3Kx6rjFLotNhrIjzGTDHyjc6%2B0gic4ltQwiKKqvwY6pgG754%2BAoziSnrQCFW%2BZOkORlRge0Peameem2Qk2XJ8UuZZ6VMi3DEXHqMdkqswFZ%2BLNSakynMvaBCtHY3SXwJXlvezk620fEL4TthheAW606w5eJ7S4SoKMWpfmOfgJlTtWzYLbcSs40J6sFXW5FDWSctn9ga%2BI2MAU6PvszD5vLJ5JHKG85cqGByeT8ngf%2FyDSGFEh0rmEwDIKcI3jzeE1rFfnC7yX&X-Amz-Signature=e85384cdd17ca87f7c097e7b39cfcf852441c5d00a587a5174248cd8a65672ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQRQUEH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBkAvYwK%2Bs9UIwj1p2NdhZKixxUYcpguBAgSoqAzphAFAiBrgMwZ8lqULKxVcjJ20%2BAhJghDGgE9%2FJj5pqgbuEPsbSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bNUTvgQjxWU5JKhKtwDRo%2FuxHI5tCKQeWg46WkL7N4Kkaz9mBBJz24w6YIoqn3B0pLGsDpZmYtjskll2ZckCjDHzzDqQNS%2BNQYjtPxwyzTpDJbU6CijRHFV55IfqhJzHILY2DeW6vegIVT800s0dCly4Ki%2FQXZgN8sO8gVhXa6TASpQFbva4Fx0o7PbJAJ%2FnSrPvn9lZ7lIHUdbxOHgU%2B5brYecanG1U6oNOcCmxkdhdLZnmrt6y6lDcFkgaILuN7s36V8H1Ex0FbA284YbDulkNyCR5ySLhxfx1q9bRZwPQtRPMZ41K4PiR%2BeLSRRigT6BVcZWomGwQ6zCdLHyG%2F1Jr9BtocCz7lY%2FUeGJC1IaXnJ6DOtv85nuw6Jmj1RJHN6wl0O2eVrTb%2BbCG9GfKffPkduww8u9O0bKL6dpDzh%2BRLyXuNYr46T8hJvaIIALXVb%2FcYy9FkvYDrxOEWK0Xcdx3p7O9Ez3cMigWix23FPqcYA%2FU3%2FLdJ3Jx7D%2FKm%2F8arhN49YKMdh%2F0kQNIXlccvyJHBCGzkHmOQef4ZqpHJNraF6ex8D5PTqBBQ4jnq8Ois8u%2F%2BP7WVdfHbvF9KueGr9qpbgJXNlr%2FiwQRKjKBmnI1Q3Kx6rjFLotNhrIjzGTDHyjc6%2B0gic4ltQwiKKqvwY6pgG754%2BAoziSnrQCFW%2BZOkORlRge0Peameem2Qk2XJ8UuZZ6VMi3DEXHqMdkqswFZ%2BLNSakynMvaBCtHY3SXwJXlvezk620fEL4TthheAW606w5eJ7S4SoKMWpfmOfgJlTtWzYLbcSs40J6sFXW5FDWSctn9ga%2BI2MAU6PvszD5vLJ5JHKG85cqGByeT8ngf%2FyDSGFEh0rmEwDIKcI3jzeE1rFfnC7yX&X-Amz-Signature=eccf66f85573f8a5bc7f83b7664485cd7c1da5439dceeb819b35569a1314c019&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
