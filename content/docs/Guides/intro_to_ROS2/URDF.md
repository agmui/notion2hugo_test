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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAENBOJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCuTDYH0NVm0EjDzyN5z5caYIx4xNooqqyNyfOCKmixwQIgXUAiV%2BhAPMQg%2BALotzfO7pvVC11R5wVg1hs%2FusraZf0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEz%2FxQGDNZlAc2itSrcA96j1P1fwYBDywg7rRYN86DTEXs5JJGQ6sYdRK9qspe3XQBLy83QvbcWmwYF%2FAtdeOMIYzCoSvMzrqNNsagxaADVUI%2BK1kUJXkVJKejPLcMxpxS6nvh6FtXrSiyau9axOmA4nn2M5UOuo1ml82pHStrzWBJnJYmmelvq6Rdd1XXk4zM%2BPEzq5JrZ5ZaP7XJfQF2qOQEoKj2%2FBngsn9gP2OpsG9Zks7ppcGv5SpHKNWoZ7j2pjro9U0caYGukEUuQVimPob7eP2ZXzuvObGG2%2BY%2Fzr%2FOicQMmzz7LOR088m8SKgvBbW%2BwpivoZFBDXSwob1yrwGC9YJNYLjXhbNSOFhJDuLJxwFte2aa5TvpsJahGaKxOFsXusGzuetzeBdojUbtsujL8TU25Xs%2BmrV2Bqg96MI6V7TYSWRXYDtDAd2ugaxFzHUYvDb7MJakM2xovcRO%2FnPoTBzjD3kAbQN5oSleWXBxR7tzWtPm9Mvet6uvuI6xHB0wVTli4vHAVTM0Xgi9qgYgj8GXdRrqJWQz2t%2FPimwb%2BWxkg8YYhvXIGD1WZ3rnpAAPrKiqRRLwrjes7idKp4co9GcD5Xh2isAxvXakBELiec0iDzWakxAmJwWVnJCaD8nMaEJKrTyxaMIrM%2F74GOqUB6oGceLe%2FeIN6sAknmEwu%2BEtflZ9Gv2kf3Wh3jt89mVCx7rbZUcChtRLfAxUIST6czOU9Og5Sgh%2F7%2FF%2BZLs8iGvJn4izE27KNCplWUH57KZIhOxNjGjGEH9kK3pcnCB%2F5z9c0giGwbT1QNIWxpnNN5Ukd%2B%2FxGOWQBSIOKHMVOoEX0RCBUGgrDT0NrJuPJac0LTE6v6U%2B6QFMll%2FE5oLBMslVYyyZj&X-Amz-Signature=3b222d32cab8827e763c052882db79232bc8eae25297e6cfbb06e90e25fe8168&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAENBOJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCuTDYH0NVm0EjDzyN5z5caYIx4xNooqqyNyfOCKmixwQIgXUAiV%2BhAPMQg%2BALotzfO7pvVC11R5wVg1hs%2FusraZf0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEz%2FxQGDNZlAc2itSrcA96j1P1fwYBDywg7rRYN86DTEXs5JJGQ6sYdRK9qspe3XQBLy83QvbcWmwYF%2FAtdeOMIYzCoSvMzrqNNsagxaADVUI%2BK1kUJXkVJKejPLcMxpxS6nvh6FtXrSiyau9axOmA4nn2M5UOuo1ml82pHStrzWBJnJYmmelvq6Rdd1XXk4zM%2BPEzq5JrZ5ZaP7XJfQF2qOQEoKj2%2FBngsn9gP2OpsG9Zks7ppcGv5SpHKNWoZ7j2pjro9U0caYGukEUuQVimPob7eP2ZXzuvObGG2%2BY%2Fzr%2FOicQMmzz7LOR088m8SKgvBbW%2BwpivoZFBDXSwob1yrwGC9YJNYLjXhbNSOFhJDuLJxwFte2aa5TvpsJahGaKxOFsXusGzuetzeBdojUbtsujL8TU25Xs%2BmrV2Bqg96MI6V7TYSWRXYDtDAd2ugaxFzHUYvDb7MJakM2xovcRO%2FnPoTBzjD3kAbQN5oSleWXBxR7tzWtPm9Mvet6uvuI6xHB0wVTli4vHAVTM0Xgi9qgYgj8GXdRrqJWQz2t%2FPimwb%2BWxkg8YYhvXIGD1WZ3rnpAAPrKiqRRLwrjes7idKp4co9GcD5Xh2isAxvXakBELiec0iDzWakxAmJwWVnJCaD8nMaEJKrTyxaMIrM%2F74GOqUB6oGceLe%2FeIN6sAknmEwu%2BEtflZ9Gv2kf3Wh3jt89mVCx7rbZUcChtRLfAxUIST6czOU9Og5Sgh%2F7%2FF%2BZLs8iGvJn4izE27KNCplWUH57KZIhOxNjGjGEH9kK3pcnCB%2F5z9c0giGwbT1QNIWxpnNN5Ukd%2B%2FxGOWQBSIOKHMVOoEX0RCBUGgrDT0NrJuPJac0LTE6v6U%2B6QFMll%2FE5oLBMslVYyyZj&X-Amz-Signature=30e62b2fd64c42becbc8668fa2ca4c45ae59597eb24bf178dd61d6e20cab9753&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
