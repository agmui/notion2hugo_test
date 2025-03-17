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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSMV3UN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp%2Fk0Bn4UO9VPQ8fp1f3LYJDKR0OtRiE8gcij20COx5QIgfCRwIGpHAFW7Hr3JKp%2FcwAFlEYdARpb%2BYPMZXfo%2BuDEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOUEnQIruw47dvcfYCrcAxe76yvZpyB8cnDnzaiKCHXoHEvI%2Bv48vL5n3CV%2Bh02SxNIlID34yxPWulhkMAn64i0EexMRDp3lZqBXLAPPiGp1grOvJ7uCaCEqEGPp%2F7dmdb%2Fej4jPwcZiwfHJ69Kh46fbPXBZmTpUywUioOuE7hfRboiCKVQsdUaApCd9FXtF2Q7ZDdMoZSZF74wzZUNND5L2wUassnkonEC5K5obqo5piY8hpuZEG%2BUBBK%2FCluam6%2BAsuH4OJai06ho0%2FnZKD%2BddPBzuXRANvno2TmWjZATraz0OZx0XTH6K3WzPjWoFWfkp3ojlrLNYCpXbkHizBhvdz8d5QKJlKTDc3GoK6eF9bJS0GTE23KHy1X%2Fd3KAQOF7oyrNKsLLeDeQ6MEu3GlXRCSflo3oNnxt6itcvhpjBusbZeHtP6EdUtn5V%2FH5Y5TQ8t8jBhM9d7GVaeQivonHWE0c2TqnTZBZBQvWpHcx7M05jjvHRy1gd7%2BD5kLMIwE5NQefv82Gt9sVPnJCmTFShtTqZnhYmGjPsITLcDO9f%2FeP1vZZAcinuczWUwI3glRwkDlLAv184v8FGUX1b298QP%2BXZHb0Tog2gRrKxjE%2BvdRGexsLp5AgbE40ipBqlxjOatjAXZNoUs6OhMM3l4b4GOqUB0E%2FjL6Pg6ZW6wVuKhanNbEXj1QnX605AhYQikm7GRzZ36PLlcWo%2BlY7gQVo5crE%2BO%2BOJiXhCs9FDYSW%2B2rKNyUhVmT0p01xO4CyT8McOPU4lIISunmZZXtG5wR%2BYhLVo%2BsWghOhfHMSKqEUSKLWeOM2AccKbEptRVPnfMur6hvA9%2FASA3eVAwApEAoqZoth9PGVOq69G6Dkqzupxg3bpCHX4cemp&X-Amz-Signature=c31cdd15d8341b8252551d0ac0a05c2f5b4890a7440d89bf656493f01ee53b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSMV3UN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp%2Fk0Bn4UO9VPQ8fp1f3LYJDKR0OtRiE8gcij20COx5QIgfCRwIGpHAFW7Hr3JKp%2FcwAFlEYdARpb%2BYPMZXfo%2BuDEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOUEnQIruw47dvcfYCrcAxe76yvZpyB8cnDnzaiKCHXoHEvI%2Bv48vL5n3CV%2Bh02SxNIlID34yxPWulhkMAn64i0EexMRDp3lZqBXLAPPiGp1grOvJ7uCaCEqEGPp%2F7dmdb%2Fej4jPwcZiwfHJ69Kh46fbPXBZmTpUywUioOuE7hfRboiCKVQsdUaApCd9FXtF2Q7ZDdMoZSZF74wzZUNND5L2wUassnkonEC5K5obqo5piY8hpuZEG%2BUBBK%2FCluam6%2BAsuH4OJai06ho0%2FnZKD%2BddPBzuXRANvno2TmWjZATraz0OZx0XTH6K3WzPjWoFWfkp3ojlrLNYCpXbkHizBhvdz8d5QKJlKTDc3GoK6eF9bJS0GTE23KHy1X%2Fd3KAQOF7oyrNKsLLeDeQ6MEu3GlXRCSflo3oNnxt6itcvhpjBusbZeHtP6EdUtn5V%2FH5Y5TQ8t8jBhM9d7GVaeQivonHWE0c2TqnTZBZBQvWpHcx7M05jjvHRy1gd7%2BD5kLMIwE5NQefv82Gt9sVPnJCmTFShtTqZnhYmGjPsITLcDO9f%2FeP1vZZAcinuczWUwI3glRwkDlLAv184v8FGUX1b298QP%2BXZHb0Tog2gRrKxjE%2BvdRGexsLp5AgbE40ipBqlxjOatjAXZNoUs6OhMM3l4b4GOqUB0E%2FjL6Pg6ZW6wVuKhanNbEXj1QnX605AhYQikm7GRzZ36PLlcWo%2BlY7gQVo5crE%2BO%2BOJiXhCs9FDYSW%2B2rKNyUhVmT0p01xO4CyT8McOPU4lIISunmZZXtG5wR%2BYhLVo%2BsWghOhfHMSKqEUSKLWeOM2AccKbEptRVPnfMur6hvA9%2FASA3eVAwApEAoqZoth9PGVOq69G6Dkqzupxg3bpCHX4cemp&X-Amz-Signature=da324a7a1accbb99893f5e97a27254b58930186bb6aacf506077fd0c0b1d1e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
