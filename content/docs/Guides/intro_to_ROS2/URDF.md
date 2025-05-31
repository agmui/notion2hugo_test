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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DMW3WR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZzH4RcsoW4CM1DxjkfHKWeHS0W6izAIAV3Fmim64wBgIgBLl4uMkq%2FZgNt7GqEmFMWvHIK67Ww0PPKSGkBYCwaNYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFb5fTxmLUebUClZIyrcAwgiRCqtEKjiCA1h94arcSlNIbfYmy0ubBsWYRq5yS33QA7LAdgpX7C248Cq3bXJHtHilJTiWqAv4IuuJGYZxvX9yOp%2F9lP9C%2BDzuqLQJOwRWw5XlQZcIRSUZY6FcoynI2AH2mTEvXj6dp291Xd6dcO8KFAz2VwhFy4erqVS3xbro7fjt%2B7r8IbpOocN5l%2Bpc8VuYNoaRgcopAl5ptSlfyEf%2BkpRQdrvJkDS5Ui5P6%2BGZUAFW2e%2Bh36WMMPdkjJyhMICzwTyPBJiZJsI56%2BeHyzwW7FsWw0gk8dm2KT5JxwAHiSh2d%2BTK80tCXK04zqfQ2WhhmS%2FvtQLSg4dOkuOXuJDzkDrwe2XazSKzehsuayTHbR7%2BCbytQYwhVvJMCS7sXqp%2FhpblEusXfYl81aKFoW9ux7dvefmYUi8CmV9CzZ%2BjUdTr6Wl03qoT%2B8uTQEUu4ndCPidwLjm2tABz95oRv%2FuKmEHWSsa7SGBuLz2Zktk2XmIIZJFal1Jx5hI08Xj00QR6E3%2B7TaFmdsRP1cquZe9b4Nm2nTQgaZ%2F54qz%2BFFhdJM4pE0oIqc%2BMva%2FWH%2BcewRZF7bm0HivzS01oKeOmBHvWs5n3LlaQaovH%2FDsLmnCFNXLfvbnAsecTo2MMOrc6sEGOqUBNj2RTFqfFS%2BS9kcQg1CdPVHmI17Gk0ohtaPGJP2x0v6vFGEgUfPPaT%2F8sPe9CVOJgYnZqST610FYxor4MrWa7J4L4mdh%2Fn2deaD2y%2FC1q5Cu0nfvRSl5UjwX5tuwK9VGrirb0WdOYjrlGHXb1fjWvyyJK14iyH5Y6P2%2BviCMbEtWHaZpgM%2F%2Fzy7x%2BZG1H8wDrd12KMX7GcckHQVe3QSsH%2Fj5eQ%2FT&X-Amz-Signature=df9fb7eb5f93db7600537e268ac4919f5044556642a59d5dbdbcecca27bdcaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DMW3WR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZzH4RcsoW4CM1DxjkfHKWeHS0W6izAIAV3Fmim64wBgIgBLl4uMkq%2FZgNt7GqEmFMWvHIK67Ww0PPKSGkBYCwaNYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFb5fTxmLUebUClZIyrcAwgiRCqtEKjiCA1h94arcSlNIbfYmy0ubBsWYRq5yS33QA7LAdgpX7C248Cq3bXJHtHilJTiWqAv4IuuJGYZxvX9yOp%2F9lP9C%2BDzuqLQJOwRWw5XlQZcIRSUZY6FcoynI2AH2mTEvXj6dp291Xd6dcO8KFAz2VwhFy4erqVS3xbro7fjt%2B7r8IbpOocN5l%2Bpc8VuYNoaRgcopAl5ptSlfyEf%2BkpRQdrvJkDS5Ui5P6%2BGZUAFW2e%2Bh36WMMPdkjJyhMICzwTyPBJiZJsI56%2BeHyzwW7FsWw0gk8dm2KT5JxwAHiSh2d%2BTK80tCXK04zqfQ2WhhmS%2FvtQLSg4dOkuOXuJDzkDrwe2XazSKzehsuayTHbR7%2BCbytQYwhVvJMCS7sXqp%2FhpblEusXfYl81aKFoW9ux7dvefmYUi8CmV9CzZ%2BjUdTr6Wl03qoT%2B8uTQEUu4ndCPidwLjm2tABz95oRv%2FuKmEHWSsa7SGBuLz2Zktk2XmIIZJFal1Jx5hI08Xj00QR6E3%2B7TaFmdsRP1cquZe9b4Nm2nTQgaZ%2F54qz%2BFFhdJM4pE0oIqc%2BMva%2FWH%2BcewRZF7bm0HivzS01oKeOmBHvWs5n3LlaQaovH%2FDsLmnCFNXLfvbnAsecTo2MMOrc6sEGOqUBNj2RTFqfFS%2BS9kcQg1CdPVHmI17Gk0ohtaPGJP2x0v6vFGEgUfPPaT%2F8sPe9CVOJgYnZqST610FYxor4MrWa7J4L4mdh%2Fn2deaD2y%2FC1q5Cu0nfvRSl5UjwX5tuwK9VGrirb0WdOYjrlGHXb1fjWvyyJK14iyH5Y6P2%2BviCMbEtWHaZpgM%2F%2Fzy7x%2BZG1H8wDrd12KMX7GcckHQVe3QSsH%2Fj5eQ%2FT&X-Amz-Signature=fd8350c6be8afd56bd9e7ca42c2ebb217bd8fd9dc8767b37e7df8e09d1ce42c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
