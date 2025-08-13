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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7IHS73C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICagwu8DjxsrgxGHvJrufdBTt798f8RGx%2BKAwzyqFvsxAiEA8HnA7uh9pn9ZTt%2BS2OEBkbH5FwUSPNPCnlY6%2BxCs3tsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPwrzJArmB2QgQ%2FOIircA23mH6g2ePkNMTV1LRZkhpSs1V5jMVAI88Mbk8FBzXNoIqhN%2FhoLB%2FZPqmT9Ks3MQdo%2BNab0WAPnQhxcOjRc9RBnZ%2FukzgU7zwYsBxH89O0txMB9sRofO7yuG0fnRVdJiy21apzIFMx2LuqV1baYCizDL6g8S1xDbpJzMkfumuImUjPiRyupv8IX78O%2BrCOY6IautiLMLS1l4CcA2z97%2BA5EAuujTlTG%2ByZ6e8pGMTafC2jHoQsjctemfyoB20yFjdFyZ0FeY1OVw9WtkgsiQy2mqo4AkRyNlkjWElALcTJ3T0J0abKz7mAABqqn5HWUpHAdCq9UGGqpmJ9wuSmc1TmdLU4MI6tYFanIpnqO3%2FQx4BzpYReTSemyfdU9i6it46dWMUj72ObCWaN9SLYzDk3SZUQwtlMYXr0aCTJlSxUEcjcAF2tXfvDVZXOYssxZCmPBDOMe7mtFOhpaHM7mj9Zwq83CRv%2FmS0KK1wzJyGPzByhjaMqBKPWYJy8wVTKXf8%2BCL%2BPrNjvLdPb45%2BSESzZIR3m6RvaAzI%2FVcQPZBj9Hq4I7g8cPhBNHbqcUelYOgT3HLzeRtqJ3HyjuWOSE%2B02ZPBAfLhzpiAXX8fyizuQ0%2F%2B1CRUrAbLnrZAwtMITq88QGOqUBlYt%2B5YGFRduPOVCRxcadZ9D7s0G9tPWMii%2FsNkTDm%2Bt5K7jMHp8qeXZP6IzD%2FLtBlogURIErnp3T00fNRbUHxKuFn53z8SCr4%2BHfVvNiWAcdD5df0qby%2FPSzOPjQWKFpSZlojEnAOkbeH34w7B4t1gzJHB52dLYk8RWdgPsJmJuwgitVtKN4dM8vIIZ%2BvyrnAXSlS5hR8oj2oXGwVnM8X9pkU68U&X-Amz-Signature=5c7f027cd0becdac6e8ce63c0e24f0c36572a252ef24fc0de745467ea1d40366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7IHS73C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICagwu8DjxsrgxGHvJrufdBTt798f8RGx%2BKAwzyqFvsxAiEA8HnA7uh9pn9ZTt%2BS2OEBkbH5FwUSPNPCnlY6%2BxCs3tsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPwrzJArmB2QgQ%2FOIircA23mH6g2ePkNMTV1LRZkhpSs1V5jMVAI88Mbk8FBzXNoIqhN%2FhoLB%2FZPqmT9Ks3MQdo%2BNab0WAPnQhxcOjRc9RBnZ%2FukzgU7zwYsBxH89O0txMB9sRofO7yuG0fnRVdJiy21apzIFMx2LuqV1baYCizDL6g8S1xDbpJzMkfumuImUjPiRyupv8IX78O%2BrCOY6IautiLMLS1l4CcA2z97%2BA5EAuujTlTG%2ByZ6e8pGMTafC2jHoQsjctemfyoB20yFjdFyZ0FeY1OVw9WtkgsiQy2mqo4AkRyNlkjWElALcTJ3T0J0abKz7mAABqqn5HWUpHAdCq9UGGqpmJ9wuSmc1TmdLU4MI6tYFanIpnqO3%2FQx4BzpYReTSemyfdU9i6it46dWMUj72ObCWaN9SLYzDk3SZUQwtlMYXr0aCTJlSxUEcjcAF2tXfvDVZXOYssxZCmPBDOMe7mtFOhpaHM7mj9Zwq83CRv%2FmS0KK1wzJyGPzByhjaMqBKPWYJy8wVTKXf8%2BCL%2BPrNjvLdPb45%2BSESzZIR3m6RvaAzI%2FVcQPZBj9Hq4I7g8cPhBNHbqcUelYOgT3HLzeRtqJ3HyjuWOSE%2B02ZPBAfLhzpiAXX8fyizuQ0%2F%2B1CRUrAbLnrZAwtMITq88QGOqUBlYt%2B5YGFRduPOVCRxcadZ9D7s0G9tPWMii%2FsNkTDm%2Bt5K7jMHp8qeXZP6IzD%2FLtBlogURIErnp3T00fNRbUHxKuFn53z8SCr4%2BHfVvNiWAcdD5df0qby%2FPSzOPjQWKFpSZlojEnAOkbeH34w7B4t1gzJHB52dLYk8RWdgPsJmJuwgitVtKN4dM8vIIZ%2BvyrnAXSlS5hR8oj2oXGwVnM8X9pkU68U&X-Amz-Signature=8e661b69086060db8df712025a3c1e8a46917af2f5c9f7118f2091e4eedbdf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
