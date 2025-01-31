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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD77XG3H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO8WAC%2BpK1UDtlojaUiv%2F%2BMWXueUjkWYDKxf%2B%2BA1BciAiEAr9XNW58JS5R7oszSqr6ovpH67VlIQMl0MgoLWivQdFMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGYUHzuqw5wH9UFVCrcA3Vej8mdk2u6nVyVMq5hIKyH7cq2mLzfwcR1rc%2B8oOyCKJtwW0AhcdJuwduqdRsZCzRYMikS1ynCrdOvflB%2BTpVfg3WeK94bTfx%2FuDGa0iaYWeXWV3FGiC0bPXwrhRCnapdkxRZLPUSZDRXmU1YI1mlPZUB1v1pboithe0TIGo3YUam95%2BXjVPV06KpRYsud%2BeYX%2FMCZbEe86vPvtytxDZ%2F0qVbDghqJrtrTUcTmZ%2F%2BDq8KXUApB8ieyMWp1WHAUC48yGmty28oW226kcgXhSnrjk0fvihV%2FV13U0u%2F5QfzfcKtU0ImfOfCgCTAyBE23Vtz4k3kpLHnbXz5dQBC%2FcPR2YqCQrKYNltFOn2IRMEkxSWPUAdcLQrldWTIXjeMvZMNHfy%2B5je5wsDr5Bg4vkLZzIM3sTN31qL%2BNFNfjlCrPTxzTVyo9tlXNdTN02JlfK%2BILzO2VQrJEDeKu91vA6CnuD8oInRQbXbGh9eGaDJYoDfg1oTF9C9HpfOI4cjdfndwOqY6Cw23KWV%2FZFKo8Qzu9fXcosCgGyzwzEF6kN%2FVDOu4akvw5kVZ%2FBrdiz2BlKVz9aSX5zailHYds%2BYBwqDUApTUoBi2hD9vYhHojC9Id%2Bftolb9Yfgn65IdkMN3d9LwGOqUBC2AVI%2B6TkA5OiTwuICPm6mqD4EWGfCrqkTnrqQq9%2F%2FuQHFKX157Sg9J8xSuBIe14pJcs3B4j%2BWAyCW1BYso6IEO%2B30cltK1BLxz68%2F9SqqeRrMmQCb9xZjXsuKxpjpJouapoxg7U8Dcl8tPsCA3NXBD9JknAK%2BLYZTibPRPoNpVDdqN5DaoRWBE4P77DVhBSsuHhiD167H%2BNVe%2Fu%2Fg%2FGKuAY4Su5&X-Amz-Signature=e90a4ea90aefb496b5969c88c7bd8906f9f1e71475dbfb21c3890686a8c22b13&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD77XG3H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO8WAC%2BpK1UDtlojaUiv%2F%2BMWXueUjkWYDKxf%2B%2BA1BciAiEAr9XNW58JS5R7oszSqr6ovpH67VlIQMl0MgoLWivQdFMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGYUHzuqw5wH9UFVCrcA3Vej8mdk2u6nVyVMq5hIKyH7cq2mLzfwcR1rc%2B8oOyCKJtwW0AhcdJuwduqdRsZCzRYMikS1ynCrdOvflB%2BTpVfg3WeK94bTfx%2FuDGa0iaYWeXWV3FGiC0bPXwrhRCnapdkxRZLPUSZDRXmU1YI1mlPZUB1v1pboithe0TIGo3YUam95%2BXjVPV06KpRYsud%2BeYX%2FMCZbEe86vPvtytxDZ%2F0qVbDghqJrtrTUcTmZ%2F%2BDq8KXUApB8ieyMWp1WHAUC48yGmty28oW226kcgXhSnrjk0fvihV%2FV13U0u%2F5QfzfcKtU0ImfOfCgCTAyBE23Vtz4k3kpLHnbXz5dQBC%2FcPR2YqCQrKYNltFOn2IRMEkxSWPUAdcLQrldWTIXjeMvZMNHfy%2B5je5wsDr5Bg4vkLZzIM3sTN31qL%2BNFNfjlCrPTxzTVyo9tlXNdTN02JlfK%2BILzO2VQrJEDeKu91vA6CnuD8oInRQbXbGh9eGaDJYoDfg1oTF9C9HpfOI4cjdfndwOqY6Cw23KWV%2FZFKo8Qzu9fXcosCgGyzwzEF6kN%2FVDOu4akvw5kVZ%2FBrdiz2BlKVz9aSX5zailHYds%2BYBwqDUApTUoBi2hD9vYhHojC9Id%2Bftolb9Yfgn65IdkMN3d9LwGOqUBC2AVI%2B6TkA5OiTwuICPm6mqD4EWGfCrqkTnrqQq9%2F%2FuQHFKX157Sg9J8xSuBIe14pJcs3B4j%2BWAyCW1BYso6IEO%2B30cltK1BLxz68%2F9SqqeRrMmQCb9xZjXsuKxpjpJouapoxg7U8Dcl8tPsCA3NXBD9JknAK%2BLYZTibPRPoNpVDdqN5DaoRWBE4P77DVhBSsuHhiD167H%2BNVe%2Fu%2Fg%2FGKuAY4Su5&X-Amz-Signature=8a36bfcddac2d0f6aaf1200dff5735f7a7dbd9ff611c4e5320bcec7a2dd2f9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
