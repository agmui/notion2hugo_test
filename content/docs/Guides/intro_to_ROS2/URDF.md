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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPJYY7KZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEj9u1h%2BaK0Cm0wylgbzUSLzDzcHFIHOloKNFa9PWuvgIhAN0ycZS7MW7hjg8rCDJVpOoPEoHJycXleiS7audy2SdeKv8DCGgQABoMNjM3NDIzMTgzODA1IgzFHBTfb6QQGEaGD9Uq3ANPtREoruc%2BOx6qZT%2FF6CYP6440MinBLCLsqo0StXf9vfkWHzGZBRSJJ2JQdFz5Wz3gLf4zMz0fGtDuzNEvHWQvx32TgCM5MYQMZ6HrgY%2F5J8WfXwMNEyHFCFStW2oRVG6arUphqp1WAVcQ%2Fct0wNTjKO9oFcs22LuCeXbf32Ehrn6BScaGEGrbMPNydMJT6zZNkNL6aDTuqCHjeYWHhJArw7RixEASGKbd6vny1Gc1A6XXMWNAsBjMb4gvmlG%2FZBgPETfpcTtsQotAaTf%2Bpx0SLPYj0%2BrytenoKFJRK8I%2F9i5hFyLlC1f8rOg%2F0LQ63DssLb64xusg4dcf%2B9Rf9KN3pgLoiwqsLN3MkhxWuJOyoRs9fFMISKBBjU6S6Reh0PUp9nC9jmCtpg93UnQB2g0KW2JAasugfq7A%2BQoIsAw6q36%2BCEur9BRZ2a34KiEGhTWEqKJRBxHGiL77yt8hlvExZfUtuWz2poRSsaydrdpRq%2FfZWsxPvR1%2BgJR8mIgdAUEkw%2F4wGs0KjgRmflopIPYB0YCvDDNpNJvNK8BM8CzQybbkd9%2BsC%2B3sAB3RyTUnhT%2BoSYu%2FkoRvQuOhjdTeEKjV%2BkOXE7wLz7PmXaDtMpAAjHNydFgFZUBEs5pgUjCAutG%2FBjqkAf0VI3uhlD%2FVvvVK0TzbvBSgw5GEkpluoPVCSkVQam10e6Q0n11GipJzCtBbDrPKZERb055u%2BkxzsxalX01rKkPXmvsvrO9sndv41HdREILUbm4R8O6UMiWs6gWvp9dUXMw2kQeBJvCvRHId%2FMMNye4yFnSPTa2pzeJAS3P2nO%2F9Tp%2F029lKb%2Bv4Gm5doBnI1R4RorzmxjxHizrDJVfl%2BJh8t9B%2B&X-Amz-Signature=c39d726f6be5daa1e18c5a292bc728f803f57fcd3cdf86e0a33b85fefcbff5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPJYY7KZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEj9u1h%2BaK0Cm0wylgbzUSLzDzcHFIHOloKNFa9PWuvgIhAN0ycZS7MW7hjg8rCDJVpOoPEoHJycXleiS7audy2SdeKv8DCGgQABoMNjM3NDIzMTgzODA1IgzFHBTfb6QQGEaGD9Uq3ANPtREoruc%2BOx6qZT%2FF6CYP6440MinBLCLsqo0StXf9vfkWHzGZBRSJJ2JQdFz5Wz3gLf4zMz0fGtDuzNEvHWQvx32TgCM5MYQMZ6HrgY%2F5J8WfXwMNEyHFCFStW2oRVG6arUphqp1WAVcQ%2Fct0wNTjKO9oFcs22LuCeXbf32Ehrn6BScaGEGrbMPNydMJT6zZNkNL6aDTuqCHjeYWHhJArw7RixEASGKbd6vny1Gc1A6XXMWNAsBjMb4gvmlG%2FZBgPETfpcTtsQotAaTf%2Bpx0SLPYj0%2BrytenoKFJRK8I%2F9i5hFyLlC1f8rOg%2F0LQ63DssLb64xusg4dcf%2B9Rf9KN3pgLoiwqsLN3MkhxWuJOyoRs9fFMISKBBjU6S6Reh0PUp9nC9jmCtpg93UnQB2g0KW2JAasugfq7A%2BQoIsAw6q36%2BCEur9BRZ2a34KiEGhTWEqKJRBxHGiL77yt8hlvExZfUtuWz2poRSsaydrdpRq%2FfZWsxPvR1%2BgJR8mIgdAUEkw%2F4wGs0KjgRmflopIPYB0YCvDDNpNJvNK8BM8CzQybbkd9%2BsC%2B3sAB3RyTUnhT%2BoSYu%2FkoRvQuOhjdTeEKjV%2BkOXE7wLz7PmXaDtMpAAjHNydFgFZUBEs5pgUjCAutG%2FBjqkAf0VI3uhlD%2FVvvVK0TzbvBSgw5GEkpluoPVCSkVQam10e6Q0n11GipJzCtBbDrPKZERb055u%2BkxzsxalX01rKkPXmvsvrO9sndv41HdREILUbm4R8O6UMiWs6gWvp9dUXMw2kQeBJvCvRHId%2FMMNye4yFnSPTa2pzeJAS3P2nO%2F9Tp%2F029lKb%2Bv4Gm5doBnI1R4RorzmxjxHizrDJVfl%2BJh8t9B%2B&X-Amz-Signature=b09951b963f6df2a83113ceaa434be89c4e785b1a22095be02f786be4062c5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
