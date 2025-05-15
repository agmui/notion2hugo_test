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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRLYVOZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD5GBhyBqs5vDTez4Z%2FNRDD6IGJ0dihnYr8AuXM03bFmQIhAPYGh%2BmKAQttH%2FnQJImrlFRqcK3USmLj6Mr4EnyqW%2FSDKv8DCDgQABoMNjM3NDIzMTgzODA1IgxgcR%2Fi6Gu49I0Qca8q3APRC1o7XrWTd5DM9XarKq%2BRWajd%2FFJfdWndPgl3XJ2uvlTU3SPW2d4%2BLUNdfZYkn1BuH%2Bd4QTJAXYLmB0F7mWqnxLzAyTloMwCLicjR4nEAXBnclQ0vovKqbTyZzLfdtjS2a8%2B6U3TWQk34ptRMRNlFNLXu3DukdVY9sC4yP%2F1nqskwexb91wz%2FohhOWh5zRWGoYeWhFZpfEynI%2FdDcN97DtOkU%2F%2BgaF%2BHTekHezNa0yYx9FdWlOprp%2BdlaeIXWq9eOMTpVh%2BdROu5LdmRC37FaEw8vqziIg1xgIDLQT5efnzSgLi5WDMXbObr3Am3mJ1kE1tiyZdTxhl%2BrWfPFY3Ftv%2B9Ql%2F%2Bycn%2Bptrkgl2nFzIP6sXBJGHnsfMe5V4udIu7%2BeMBbyFiIZGQkSqWH0yoF1qOA79k6en2yXcGAb8mInLmSn21xuY2P38D%2BCmzoJ8oAMu26y0KJexDxVdcpU6AbwM%2BbZ2s8iqZemYj7vUaCYalixWidQiEIq0QBffwYeeTuryPauMB%2BZfMGg2l1uRBiz0NNHKO6ZFbioW0Ou3D8I5dKCSfvJRylptS%2FORiKKAcsChNjK1aqAsmZsbzOj4a9etuA8FhJMHTvs%2FQmkJ3f2gll6BsImcxhvfEYUDD64pnBBjqkAWIBak5jUZLgOFEhRyCUsqC7qeWhNXcglVqxt3o5iGksBZNTXhzw%2Bbs4j5pVzChfHq2JQU8d7dQrV5Dkv4SyFHP7NmQjsUamQB5jSgJt7Y1WLFtx2azJazv4ZLJdOB%2FFEn3aj52qtSdmbmxQQUJr1G1mEqBuA%2ByzckcbVfNvge0V%2FehWbpxcSvMA22bs%2BmVikX5hoYHHUYcO7RjBtyAg7NVSJ%2B6b&X-Amz-Signature=5971ff110a282d693d2e9d4e8cde07f01932828a63e79af131afeb9d3d970f08&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRLYVOZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD5GBhyBqs5vDTez4Z%2FNRDD6IGJ0dihnYr8AuXM03bFmQIhAPYGh%2BmKAQttH%2FnQJImrlFRqcK3USmLj6Mr4EnyqW%2FSDKv8DCDgQABoMNjM3NDIzMTgzODA1IgxgcR%2Fi6Gu49I0Qca8q3APRC1o7XrWTd5DM9XarKq%2BRWajd%2FFJfdWndPgl3XJ2uvlTU3SPW2d4%2BLUNdfZYkn1BuH%2Bd4QTJAXYLmB0F7mWqnxLzAyTloMwCLicjR4nEAXBnclQ0vovKqbTyZzLfdtjS2a8%2B6U3TWQk34ptRMRNlFNLXu3DukdVY9sC4yP%2F1nqskwexb91wz%2FohhOWh5zRWGoYeWhFZpfEynI%2FdDcN97DtOkU%2F%2BgaF%2BHTekHezNa0yYx9FdWlOprp%2BdlaeIXWq9eOMTpVh%2BdROu5LdmRC37FaEw8vqziIg1xgIDLQT5efnzSgLi5WDMXbObr3Am3mJ1kE1tiyZdTxhl%2BrWfPFY3Ftv%2B9Ql%2F%2Bycn%2Bptrkgl2nFzIP6sXBJGHnsfMe5V4udIu7%2BeMBbyFiIZGQkSqWH0yoF1qOA79k6en2yXcGAb8mInLmSn21xuY2P38D%2BCmzoJ8oAMu26y0KJexDxVdcpU6AbwM%2BbZ2s8iqZemYj7vUaCYalixWidQiEIq0QBffwYeeTuryPauMB%2BZfMGg2l1uRBiz0NNHKO6ZFbioW0Ou3D8I5dKCSfvJRylptS%2FORiKKAcsChNjK1aqAsmZsbzOj4a9etuA8FhJMHTvs%2FQmkJ3f2gll6BsImcxhvfEYUDD64pnBBjqkAWIBak5jUZLgOFEhRyCUsqC7qeWhNXcglVqxt3o5iGksBZNTXhzw%2Bbs4j5pVzChfHq2JQU8d7dQrV5Dkv4SyFHP7NmQjsUamQB5jSgJt7Y1WLFtx2azJazv4ZLJdOB%2FFEn3aj52qtSdmbmxQQUJr1G1mEqBuA%2ByzckcbVfNvge0V%2FehWbpxcSvMA22bs%2BmVikX5hoYHHUYcO7RjBtyAg7NVSJ%2B6b&X-Amz-Signature=3a163d4e552a4a85b2fc7bb8c809f48786ab9c89b64a56211cd8b88e3d073ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
