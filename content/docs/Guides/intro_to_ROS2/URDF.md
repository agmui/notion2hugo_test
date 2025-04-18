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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWXSND5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6SnA%2BEH0bf%2BhyRsYVq3kb8O1ZW7Kvk8L7U4eq0rdcQIgYw8OUHyCobYcV8qh8%2Bas6wbcPgtitW%2FeOfVG8gtmNucq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDENHhIfQ8IEvM55xGCrcAwacw%2BVcWdwuBrIBDse8R4fJQnwGWgWdv%2BwXUFkQhEDieBJpmq%2FXiLM3xkE%2Bo6AB7a3AdPXFYzwiOV7%2F3ihaHgtl%2BA1tjrFmHWI2YPHDubxty0ObMTXBa0dZFJNTU48XYymoOih1veh%2BayTHduNc0gVWtaNPazCVdVsxWmf77TJhyv4%2BD%2FOzY41iCi5cwm1j6rEXuTJyXOi38RBN5Kd%2Bt0XI3%2BpPZlGgRSzS5dM5yGHetNr7nEvdGzKCGVDml79CyoJ%2Furvm9XVpFA9EarBAMSd9NGiyo1MkUFJ0bTAqjDU6LEg4LEjHDYXorJQF0%2BDVcA69gLPaM6Ic4ERMmDQVh6rxIa6dzEMKbc6UK3KG3SP%2FNPkY%2BFjSlYyjkWRrLp7sNiIvwkcivCfhPg20UvU%2BddYmuT6l6YQA0z2l2ibxqAzEZmLvuQ3ojvufrcIaYyixt%2FVHaaQtCwhjl3L4JRpGnITdJoF0I2b8Qk6eHZRiu9e5judOfbTgMULcGcqc3PhOcyyVOJNzk17EJgbF9i%2Fn3M6cB8HETEr0GLM6tw1J6HumFaFTAJhvKzhYBsjAlvuOjpaK9GtqGVmHD0hOmfd%2BK1OQdZERvk6Fco8MWx1s6sZLr%2Ft12YNwXL2eJBddMI3JisAGOqUBznUduUt1d6AmOvYgrjeFEd94CLjXI1sApJwOj1wX6yyjV%2F29LpvHY10xK4N2mjRxaDx4FIWjUsTnaw9Q36zZHe%2FX1nbGQ%2BIChscaemCgdw9PFNFKVN2H67zWxp1l4QA%2BQTn33f0CIEEBQeE3cmFa0jbIPypadXricDr5v7j1IjumEIKPQgSfoXKjgAaby7fzXWm6A6fZ4RRcyeR%2B5efYYBB%2BUvlW&X-Amz-Signature=3f4a28903f0384284f23ae229c0b4d2158abf1df72f65c43e709d72f14509a34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWXSND5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6SnA%2BEH0bf%2BhyRsYVq3kb8O1ZW7Kvk8L7U4eq0rdcQIgYw8OUHyCobYcV8qh8%2Bas6wbcPgtitW%2FeOfVG8gtmNucq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDENHhIfQ8IEvM55xGCrcAwacw%2BVcWdwuBrIBDse8R4fJQnwGWgWdv%2BwXUFkQhEDieBJpmq%2FXiLM3xkE%2Bo6AB7a3AdPXFYzwiOV7%2F3ihaHgtl%2BA1tjrFmHWI2YPHDubxty0ObMTXBa0dZFJNTU48XYymoOih1veh%2BayTHduNc0gVWtaNPazCVdVsxWmf77TJhyv4%2BD%2FOzY41iCi5cwm1j6rEXuTJyXOi38RBN5Kd%2Bt0XI3%2BpPZlGgRSzS5dM5yGHetNr7nEvdGzKCGVDml79CyoJ%2Furvm9XVpFA9EarBAMSd9NGiyo1MkUFJ0bTAqjDU6LEg4LEjHDYXorJQF0%2BDVcA69gLPaM6Ic4ERMmDQVh6rxIa6dzEMKbc6UK3KG3SP%2FNPkY%2BFjSlYyjkWRrLp7sNiIvwkcivCfhPg20UvU%2BddYmuT6l6YQA0z2l2ibxqAzEZmLvuQ3ojvufrcIaYyixt%2FVHaaQtCwhjl3L4JRpGnITdJoF0I2b8Qk6eHZRiu9e5judOfbTgMULcGcqc3PhOcyyVOJNzk17EJgbF9i%2Fn3M6cB8HETEr0GLM6tw1J6HumFaFTAJhvKzhYBsjAlvuOjpaK9GtqGVmHD0hOmfd%2BK1OQdZERvk6Fco8MWx1s6sZLr%2Ft12YNwXL2eJBddMI3JisAGOqUBznUduUt1d6AmOvYgrjeFEd94CLjXI1sApJwOj1wX6yyjV%2F29LpvHY10xK4N2mjRxaDx4FIWjUsTnaw9Q36zZHe%2FX1nbGQ%2BIChscaemCgdw9PFNFKVN2H67zWxp1l4QA%2BQTn33f0CIEEBQeE3cmFa0jbIPypadXricDr5v7j1IjumEIKPQgSfoXKjgAaby7fzXWm6A6fZ4RRcyeR%2B5efYYBB%2BUvlW&X-Amz-Signature=a9d0fb6f1f5b36dc98dcbe96db6d7b1400ff4b102b25b77a959fba130b87f69d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
