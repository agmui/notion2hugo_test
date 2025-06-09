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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYW74FVN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcawz%2BKOAfiOjjXZ3rBB6MSHtnZYnHBmNK4f4eLc4VAiEA98JZW%2Bo7XVsu1e%2BrOmyD5yCErbTxh3k%2B6rV7Jl52EnEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQqZRRX%2FX2Hr1L4vircAxHy5mOHeThi1pLlRkglq8aWiKIOjB7aXOJ4fJQb8icq6Mu2XW5kjRU7dRX5KZY1ncvEFUZWjK20QCQUu83PeZDx4I0Sv0B05bwvqOHu31vzde97EGpIzTAGaMkwrJs1NVY8kk1q%2BjfTtZ1vXzfa4U8xlgsOAhVTxNLB1iH5Cpw5%2FB5HU9PWt%2BBnT8VBs3TkSN7cykWeDZ3qe57F92P3gNksBSV87hR5lwvjIabsFcQuikPMl9kFUTBeEUD5H%2BGHAMapalmtn6A8lOj%2BAd6NMkjS5FjeIUxThYub1v79HLjPLaCdOmtfiReIWescDW7eenFrslxr%2FdsAQu4uJY3Xw28wEofy0dM1ynpmIZ6cNjYycEXTeDzgAurKpbGN7XVkEPP%2F0Rjn%2FJIaAzrSQYEbmsXqBfwdJGOnVRmQySG4wanMYXuK15VlUeXgAcjALSD1vRAQtar7b4btFALMpmZ8esgZETv0F5C%2F98CQY5n5VfbT%2BI7llRy0%2BKaO72cj8EmGtOv7uk%2BuVxbE0LrktKwojbyU0%2FjeT4d4cU1mqOttNZkzhLvreTeOZ1ZFCn0cqtUME95SNPPk%2BwZWAFhPaGobPHboce9sXhPwsvGkCtfsg3gW62aT5FNlXV%2BLkt6XMMfumMIGOqUBJ9UTXeWG3H8U6AS8eRbINzRixIFudeHAB7OQuZ4WE%2BMJzXFNDe0h%2Boc6%2FIveYgNXd%2BUrInJcSeSQ8PADS%2BdBRc3dQ1bUqQV3FKJoXd%2FeqGLxhgt1FiLKvbjtxhWVul7d6QOo73vFJnLdJvNsFcM4k%2FYDfaWVmdmKIEq2cRZI%2Fb8%2FQVs5B8Akf0K30HhWfcBGxKYH800e0ZaXqudnJexIVaxT3v4G&X-Amz-Signature=32ce206be65843238e450f7ecd37161e0fc13ce26fd9fb2139fc800dbfa1bd11&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYW74FVN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMcawz%2BKOAfiOjjXZ3rBB6MSHtnZYnHBmNK4f4eLc4VAiEA98JZW%2Bo7XVsu1e%2BrOmyD5yCErbTxh3k%2B6rV7Jl52EnEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQqZRRX%2FX2Hr1L4vircAxHy5mOHeThi1pLlRkglq8aWiKIOjB7aXOJ4fJQb8icq6Mu2XW5kjRU7dRX5KZY1ncvEFUZWjK20QCQUu83PeZDx4I0Sv0B05bwvqOHu31vzde97EGpIzTAGaMkwrJs1NVY8kk1q%2BjfTtZ1vXzfa4U8xlgsOAhVTxNLB1iH5Cpw5%2FB5HU9PWt%2BBnT8VBs3TkSN7cykWeDZ3qe57F92P3gNksBSV87hR5lwvjIabsFcQuikPMl9kFUTBeEUD5H%2BGHAMapalmtn6A8lOj%2BAd6NMkjS5FjeIUxThYub1v79HLjPLaCdOmtfiReIWescDW7eenFrslxr%2FdsAQu4uJY3Xw28wEofy0dM1ynpmIZ6cNjYycEXTeDzgAurKpbGN7XVkEPP%2F0Rjn%2FJIaAzrSQYEbmsXqBfwdJGOnVRmQySG4wanMYXuK15VlUeXgAcjALSD1vRAQtar7b4btFALMpmZ8esgZETv0F5C%2F98CQY5n5VfbT%2BI7llRy0%2BKaO72cj8EmGtOv7uk%2BuVxbE0LrktKwojbyU0%2FjeT4d4cU1mqOttNZkzhLvreTeOZ1ZFCn0cqtUME95SNPPk%2BwZWAFhPaGobPHboce9sXhPwsvGkCtfsg3gW62aT5FNlXV%2BLkt6XMMfumMIGOqUBJ9UTXeWG3H8U6AS8eRbINzRixIFudeHAB7OQuZ4WE%2BMJzXFNDe0h%2Boc6%2FIveYgNXd%2BUrInJcSeSQ8PADS%2BdBRc3dQ1bUqQV3FKJoXd%2FeqGLxhgt1FiLKvbjtxhWVul7d6QOo73vFJnLdJvNsFcM4k%2FYDfaWVmdmKIEq2cRZI%2Fb8%2FQVs5B8Akf0K30HhWfcBGxKYH800e0ZaXqudnJexIVaxT3v4G&X-Amz-Signature=974f7ebd493a970c5f492710fa6541ae0235ef979152f7ba8517c78d9a098d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
