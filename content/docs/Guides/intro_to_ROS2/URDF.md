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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRQP5BH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC19s%2F7th5L5U2pD3kxhGhyZXcvcM%2BAJKVy3PTyPKex0wIhAP1SwCzbT0iz%2FshpQ52Ht5tLxa9ahLpEvW1aphivnuqCKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOas4UlfEiLXvNw6sq3APgcU2uZmRLHQYnNSS%2BqvaVLTRzuZEC%2Fg3NHGI26HKDLzQUbQsKe8mLnbydfF3deT9XeCAhIGYnsTdL7%2BxP6kwYzZQpNB2GNWl6KnRORPcZoPViauMzAcC%2Bh2nWtBp12Q2obPBd2lYROrzwGjf8eDaIZxhqDlC5Dfv1qXKq%2BDJ2f%2F09daSnpoATq90SYNEh%2BIWIGjMOKnIIww04%2BtNkGXVm2032qBOS7emec%2FtAFIYa%2BG4DClVm272OnixPU4rINrB8mTACExmVMMpb17rEySFmfZd0mXbsI3LsUGb7bbrt7Im78ZW%2B%2F64ZvfJ6151e9mMbQQqJgz%2BxqLUf3wNvJa8Pq1CXmkLUOMfIoiuwW1r5znN6MV9g5ufZCvPJkA5Em1VTaoo4pVMGYGdCaKrRrw4u0RQDlLJnhDl4QnEUIVjoHVCmHhDFIPtNNxtPhYFqO3b3av0jNRCY0tFzR%2F%2FF0yNxAKfIIpyRA26pZUiluweBMi40wE1koODEIkt5KIPqc7NmtqnTQKK%2B3gVO1nekgXnRuqareK4kCKq91XG69o3%2Ba6hK%2FzrQKMWbXKeNtBYy24j8HA2e0LnJ4hhQgoNCO0a3IhSwEEaXrm7WR6xLouEuTjJD%2BN0%2BNcLzTd%2FhFDDezOi8BjqkAaxk5%2FUKYkSQDhbOrrlFUx7k%2BDGx9Xna2NX%2FQgNHaJ2Ka80pmHdlDFzxvW905YgYSHoKeHfqE70y%2Fm9XJYI8ja2gDQerIdm5goY9mMwwDCs%2BqYbYkU2k9z3ouEul4f8Uq%2FqnCxIDQBSFkNusBrvQFpg9uKq1%2FkcT0w7QVbbJSzYpfxdeM0QaifLe6tiVm79GtKFvuac4Hs%2B36CN6QPz2LMTSiaYz&X-Amz-Signature=6866fc4680489f6d45c51b293c8bbbfe91f44ad993dd325df6ff058da9a674f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRQP5BH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC19s%2F7th5L5U2pD3kxhGhyZXcvcM%2BAJKVy3PTyPKex0wIhAP1SwCzbT0iz%2FshpQ52Ht5tLxa9ahLpEvW1aphivnuqCKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOas4UlfEiLXvNw6sq3APgcU2uZmRLHQYnNSS%2BqvaVLTRzuZEC%2Fg3NHGI26HKDLzQUbQsKe8mLnbydfF3deT9XeCAhIGYnsTdL7%2BxP6kwYzZQpNB2GNWl6KnRORPcZoPViauMzAcC%2Bh2nWtBp12Q2obPBd2lYROrzwGjf8eDaIZxhqDlC5Dfv1qXKq%2BDJ2f%2F09daSnpoATq90SYNEh%2BIWIGjMOKnIIww04%2BtNkGXVm2032qBOS7emec%2FtAFIYa%2BG4DClVm272OnixPU4rINrB8mTACExmVMMpb17rEySFmfZd0mXbsI3LsUGb7bbrt7Im78ZW%2B%2F64ZvfJ6151e9mMbQQqJgz%2BxqLUf3wNvJa8Pq1CXmkLUOMfIoiuwW1r5znN6MV9g5ufZCvPJkA5Em1VTaoo4pVMGYGdCaKrRrw4u0RQDlLJnhDl4QnEUIVjoHVCmHhDFIPtNNxtPhYFqO3b3av0jNRCY0tFzR%2F%2FF0yNxAKfIIpyRA26pZUiluweBMi40wE1koODEIkt5KIPqc7NmtqnTQKK%2B3gVO1nekgXnRuqareK4kCKq91XG69o3%2Ba6hK%2FzrQKMWbXKeNtBYy24j8HA2e0LnJ4hhQgoNCO0a3IhSwEEaXrm7WR6xLouEuTjJD%2BN0%2BNcLzTd%2FhFDDezOi8BjqkAaxk5%2FUKYkSQDhbOrrlFUx7k%2BDGx9Xna2NX%2FQgNHaJ2Ka80pmHdlDFzxvW905YgYSHoKeHfqE70y%2Fm9XJYI8ja2gDQerIdm5goY9mMwwDCs%2BqYbYkU2k9z3ouEul4f8Uq%2FqnCxIDQBSFkNusBrvQFpg9uKq1%2FkcT0w7QVbbJSzYpfxdeM0QaifLe6tiVm79GtKFvuac4Hs%2B36CN6QPz2LMTSiaYz&X-Amz-Signature=10b406e5857098a3f1c5ff9841f8295f09fc19222d8425c51c1e3a7216c1bb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
