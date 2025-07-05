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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKYATIR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIESzzXLsIWqyBh8FhnCqcqb2jLnE90LbNAGpIUH0NJ93AiADpa7sfg28G%2BIOT5fLBoNuZdLmYG2yxmUjymPtZi5AvSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMsKLFzJHoOZ%2B%2FppFsKtwDpOumpoxJQVkgzU4MyJlQGBVI1xIvDfY5HOy69sA45UHKYrjOyGdqiUIoP%2BJe7fnQJrqiPhWRIbw5lmGygP7e3ljqZYwdCeQkG5d71zQcL0eyOKWh3n6YC3diJW75j5Of2Cy%2BziiadZ1Hyf9PJ1utF%2FQLVrp2fT%2FXuATI7lxGT36iFb3oq0pMcjNEPdKkCEz5TKfIrdnl6zTa42tBhUFSewcpTzNFd0AosYk3k8Kiw57JbgrsrH0W5W2nmH8dvOwbgPlaUMsAXTX%2FCL35LvfOD2ZAZeziC0pvfIyLMZJaWMIKSqEo5tbTBfBR%2FvHxdPXadgU4Vx14rhdhiEKLi1qKfbq8zt3FqsnIc%2FwurzBydzMS8raw5zGRo5EE2aAbZPtZL4pf3Wwg%2BL4PKpG8mo6Z%2BhX%2BbaLxWQNwA4xj8gheQTuuK1OlIuI9fBFC8zyL%2BrPgFdt04Afs1yKvZ5e2KtPJSP0NxsNWarpbCCzmyYjLiAZ%2BYqtCmYiw4Q54z8I9EgPoq1KIRFM17YfwIEGjai1FXa1KX28h9ZJADOiPCDH%2F6q5HiOBZ1bMsveWU0VvK4Zv4%2B2cqwe4F029BrZppdxr5%2BQnVALbujgdi%2Bv5tmCL5HpzzCweZgWW05AR4H4Aws%2FSlwwY6pgEKfaaok2FhAXSHS0%2F41CjyAUQclc7xHchAN5qKcvTb4cntGNWiv5VDq2UEJ2VQAzOVsl8FXj9MAc2BSUSV%2FFqibGQdoFJ6RddtE42dbxD4fJ0GKLBpQk4VW2pkRl7BWoTJ4Nod8Hz%2FxVYU9jhvJTpXtsnZiJsFBLi%2FzKTb3%2B2BZTpumFx0p5tcX9hk74uW8nHAJcmFktI9EpKumx6RkCDsfW21yIKx&X-Amz-Signature=93136e2217fb338dd6fcf7efe8430cebbf7746163cb696e237e30764b278f8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXKYATIR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIESzzXLsIWqyBh8FhnCqcqb2jLnE90LbNAGpIUH0NJ93AiADpa7sfg28G%2BIOT5fLBoNuZdLmYG2yxmUjymPtZi5AvSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMsKLFzJHoOZ%2B%2FppFsKtwDpOumpoxJQVkgzU4MyJlQGBVI1xIvDfY5HOy69sA45UHKYrjOyGdqiUIoP%2BJe7fnQJrqiPhWRIbw5lmGygP7e3ljqZYwdCeQkG5d71zQcL0eyOKWh3n6YC3diJW75j5Of2Cy%2BziiadZ1Hyf9PJ1utF%2FQLVrp2fT%2FXuATI7lxGT36iFb3oq0pMcjNEPdKkCEz5TKfIrdnl6zTa42tBhUFSewcpTzNFd0AosYk3k8Kiw57JbgrsrH0W5W2nmH8dvOwbgPlaUMsAXTX%2FCL35LvfOD2ZAZeziC0pvfIyLMZJaWMIKSqEo5tbTBfBR%2FvHxdPXadgU4Vx14rhdhiEKLi1qKfbq8zt3FqsnIc%2FwurzBydzMS8raw5zGRo5EE2aAbZPtZL4pf3Wwg%2BL4PKpG8mo6Z%2BhX%2BbaLxWQNwA4xj8gheQTuuK1OlIuI9fBFC8zyL%2BrPgFdt04Afs1yKvZ5e2KtPJSP0NxsNWarpbCCzmyYjLiAZ%2BYqtCmYiw4Q54z8I9EgPoq1KIRFM17YfwIEGjai1FXa1KX28h9ZJADOiPCDH%2F6q5HiOBZ1bMsveWU0VvK4Zv4%2B2cqwe4F029BrZppdxr5%2BQnVALbujgdi%2Bv5tmCL5HpzzCweZgWW05AR4H4Aws%2FSlwwY6pgEKfaaok2FhAXSHS0%2F41CjyAUQclc7xHchAN5qKcvTb4cntGNWiv5VDq2UEJ2VQAzOVsl8FXj9MAc2BSUSV%2FFqibGQdoFJ6RddtE42dbxD4fJ0GKLBpQk4VW2pkRl7BWoTJ4Nod8Hz%2FxVYU9jhvJTpXtsnZiJsFBLi%2FzKTb3%2B2BZTpumFx0p5tcX9hk74uW8nHAJcmFktI9EpKumx6RkCDsfW21yIKx&X-Amz-Signature=92fda48801ff2952c5d2f640ba5d74ee74088a52feef95ca2dc93db02112d84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
