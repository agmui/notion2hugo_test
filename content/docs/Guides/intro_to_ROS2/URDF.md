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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WPQ7EQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCAYziwS9U7li0vHFkNsk%2FLh7S2IYWfd9hx1aLgPSP8KwIgdFeV%2FAzH0%2FvVqDHg24D5Aav80SjgdMVmrvcQDbPWHHAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAt6Jy0KECxnJEtqGircA%2Bgeu3OMKH7n2lSjceX7MLdGwt4a9FCzwnzPm6o5BW8i9gidZUf1oToT5nyVtQWF4J6%2BcP%2BlQiF9aSe%2Bc58B2d7CScRfOZEIW5qvNCqCJ7IaonuUSvtDdKZiJvlS4la5yY71JMXXQgkRMhOtmpXwLOCLx8AUIMgBFjKmPLA1Ma6DwkKv4D5FJUGDvS%2F%2B4F1HPP6y6KSp1wJFHqOFisOwTIpORjLiEZ7f6owcq18eQ65jJ91chClb%2FzopqsJIp%2BfaI%2B0VtOZqXHdFSvs%2BMizZtw8rWiul9OcVKpvzkiIoT%2FNkProbZH2iINsNT0W13jIwej%2FtAs09e58P51hr4ccuX7Rar%2F8zoTe4JJ2xfaF4gBs4TS3710KKHoBJh90at%2BL9lVewXSa5bxgJJlnHDs2%2BJ5QYWPFzRTI%2Bn73mjI1sdLP7egreBHMoEEKwWWTxuGWyfgLIzrfzsqPvJduCB%2FKBDRnwQarDWLJBtHXQs5TmH%2BvB29fU4ewIrkpcLihmbVOVwIEjivEt7MTr798HtcdqZFtohMfuJlvmr60FmN%2FagPIZ69jw8Jb78ZIi9RUW0s7Iw4Lxiex%2BTrHM9dGSkp9LYA6Elcs%2FWlL2x2wRjdb0bz3ab8YcGpgOIuq%2BGKCzMIy8qMAGOqUBJcgTgOd76xp%2FQXX8TWUlkL5TBF1R%2BAdxhu7zdTbzCVE6kaHFM98Sysh850vqU2TPvQNpqch1T47NWfxI2P9JfL53nRLrBNBplH4WuJfwm0CCO7Vz7tBFsb%2BYBTo9DPV2MJIfd2D2g0UERFT7A6PdTxcQH4F2uSCrLguiTa6h0807YgOu%2BDonHaBRO%2BrN7uXfpGbokLQoywgzzLvCOZ1nPaoOVPtd&X-Amz-Signature=1a6f22ced58aec16ebfa98a5597ea7294f4cb2bcd4ce39f77344c08b9afd795c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WPQ7EQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCAYziwS9U7li0vHFkNsk%2FLh7S2IYWfd9hx1aLgPSP8KwIgdFeV%2FAzH0%2FvVqDHg24D5Aav80SjgdMVmrvcQDbPWHHAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAt6Jy0KECxnJEtqGircA%2Bgeu3OMKH7n2lSjceX7MLdGwt4a9FCzwnzPm6o5BW8i9gidZUf1oToT5nyVtQWF4J6%2BcP%2BlQiF9aSe%2Bc58B2d7CScRfOZEIW5qvNCqCJ7IaonuUSvtDdKZiJvlS4la5yY71JMXXQgkRMhOtmpXwLOCLx8AUIMgBFjKmPLA1Ma6DwkKv4D5FJUGDvS%2F%2B4F1HPP6y6KSp1wJFHqOFisOwTIpORjLiEZ7f6owcq18eQ65jJ91chClb%2FzopqsJIp%2BfaI%2B0VtOZqXHdFSvs%2BMizZtw8rWiul9OcVKpvzkiIoT%2FNkProbZH2iINsNT0W13jIwej%2FtAs09e58P51hr4ccuX7Rar%2F8zoTe4JJ2xfaF4gBs4TS3710KKHoBJh90at%2BL9lVewXSa5bxgJJlnHDs2%2BJ5QYWPFzRTI%2Bn73mjI1sdLP7egreBHMoEEKwWWTxuGWyfgLIzrfzsqPvJduCB%2FKBDRnwQarDWLJBtHXQs5TmH%2BvB29fU4ewIrkpcLihmbVOVwIEjivEt7MTr798HtcdqZFtohMfuJlvmr60FmN%2FagPIZ69jw8Jb78ZIi9RUW0s7Iw4Lxiex%2BTrHM9dGSkp9LYA6Elcs%2FWlL2x2wRjdb0bz3ab8YcGpgOIuq%2BGKCzMIy8qMAGOqUBJcgTgOd76xp%2FQXX8TWUlkL5TBF1R%2BAdxhu7zdTbzCVE6kaHFM98Sysh850vqU2TPvQNpqch1T47NWfxI2P9JfL53nRLrBNBplH4WuJfwm0CCO7Vz7tBFsb%2BYBTo9DPV2MJIfd2D2g0UERFT7A6PdTxcQH4F2uSCrLguiTa6h0807YgOu%2BDonHaBRO%2BrN7uXfpGbokLQoywgzzLvCOZ1nPaoOVPtd&X-Amz-Signature=0c63c5c953ddb497fbc85a93722f738bd9c4c269c759d7c6f10597826f95bd43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
