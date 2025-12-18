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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUDTVSB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Y2D4FZYTZb7JJZqwfyS0wYlgppafwsLHqcagFH%2BwXgIgdcnUR9%2FlHav5%2B8E%2FAqp6L52nk%2BDpeJNfdYOiecfxxM0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTf%2BIDFlOW0O%2B4VpSrcA7YDSWOeuyx0ZgvgRZiEGMIH8s%2BeWdEIr5I4A6uP0ERg8IG1o8A3cvkrlF341rvA0NmCtFP%2BThZ34GFlHE%2FG3KXxo%2Fe5fcUOCbQ8P%2BhfsMV%2FmdIPq336QNZYAnYUGGo%2BzFX6Udedx7g6t6q3UGFY7aiSpr8TXzzoyQ09mYkZxmvE1uXKmWuly00WN%2FkJkzj25WrdbieSjkG%2F6gpFaN8zIq2CcFzuB8T7MDjJpZb7xjtT%2BTfImtRlbnFDy9tYx2kaePTU9cGYPdydN7Cv4xlu%2FDPSrrqm34hIVz25jsixMRQ8IvpmfSpfGn7Lzwb0%2FYQs%2Fzay6wW2T%2F8J%2F0jm%2F9bLjMHS3WklSpig1rSr%2F2nQwZXvxx8XETb3Y6B4qpOCIPx4Bw6MwCkLdFUy409A3WPUXSo2Gg7VOtRgLGsRApUo1Vj2PEzwkBziQtIQq%2BNUY3lUyKw%2BGO75lWJ6yfu4NptVPdwplgXrhJouI58AVtU%2BakKF4VsqFPGHBjC8EOoKV0bTxhkN0ZPtxO6JylXRVKry8HD2pMntnM4gmXvSjHzzCtdXG7EE62%2F02vWCRV9sXdjyNR%2FirTGXVYAD87FofVQLwR64ihLDRHUPXXMwb5nJAYVfzbglfbcU6o%2F1b8vrMJutjcoGOqUBvKkb6ibPXI0BCjhfKafcyCSEqGxI5hfGeq0M4bupsR9Wkb0Qc8fbP1x9BbT4CQ6eC6XbpOcBj6%2B2pOBBfiWxEBW3BOR01rl6jIeo1rM3XuKqHFpPlmJ2n7EzijYQ5rCpJuK8xVgrKCGfDqHEZpCgqdO2TkBjisz8R%2FayoENiofgdhd3VEFXtAKObOx1MgZOsv4zMWIJ2Lho0h%2FxtrARg1tNBpfsB&X-Amz-Signature=f78acd0309141cc0ab3efb11a9e3dfa9965c1dacf386e5f2d82c8f9112b17566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REUDTVSB%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Y2D4FZYTZb7JJZqwfyS0wYlgppafwsLHqcagFH%2BwXgIgdcnUR9%2FlHav5%2B8E%2FAqp6L52nk%2BDpeJNfdYOiecfxxM0qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTf%2BIDFlOW0O%2B4VpSrcA7YDSWOeuyx0ZgvgRZiEGMIH8s%2BeWdEIr5I4A6uP0ERg8IG1o8A3cvkrlF341rvA0NmCtFP%2BThZ34GFlHE%2FG3KXxo%2Fe5fcUOCbQ8P%2BhfsMV%2FmdIPq336QNZYAnYUGGo%2BzFX6Udedx7g6t6q3UGFY7aiSpr8TXzzoyQ09mYkZxmvE1uXKmWuly00WN%2FkJkzj25WrdbieSjkG%2F6gpFaN8zIq2CcFzuB8T7MDjJpZb7xjtT%2BTfImtRlbnFDy9tYx2kaePTU9cGYPdydN7Cv4xlu%2FDPSrrqm34hIVz25jsixMRQ8IvpmfSpfGn7Lzwb0%2FYQs%2Fzay6wW2T%2F8J%2F0jm%2F9bLjMHS3WklSpig1rSr%2F2nQwZXvxx8XETb3Y6B4qpOCIPx4Bw6MwCkLdFUy409A3WPUXSo2Gg7VOtRgLGsRApUo1Vj2PEzwkBziQtIQq%2BNUY3lUyKw%2BGO75lWJ6yfu4NptVPdwplgXrhJouI58AVtU%2BakKF4VsqFPGHBjC8EOoKV0bTxhkN0ZPtxO6JylXRVKry8HD2pMntnM4gmXvSjHzzCtdXG7EE62%2F02vWCRV9sXdjyNR%2FirTGXVYAD87FofVQLwR64ihLDRHUPXXMwb5nJAYVfzbglfbcU6o%2F1b8vrMJutjcoGOqUBvKkb6ibPXI0BCjhfKafcyCSEqGxI5hfGeq0M4bupsR9Wkb0Qc8fbP1x9BbT4CQ6eC6XbpOcBj6%2B2pOBBfiWxEBW3BOR01rl6jIeo1rM3XuKqHFpPlmJ2n7EzijYQ5rCpJuK8xVgrKCGfDqHEZpCgqdO2TkBjisz8R%2FayoENiofgdhd3VEFXtAKObOx1MgZOsv4zMWIJ2Lho0h%2FxtrARg1tNBpfsB&X-Amz-Signature=8eada6cebeae2a94e709848c1a848ca374591df0052ba4f0adb91a31b2481584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
