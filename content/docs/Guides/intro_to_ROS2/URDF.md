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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKVTRVF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlU7wuOKOLL%2FUvSPjLGnsnDCCAVNNJt4DR%2BjbV3VhjMAIhALvGikg69ePOTS16Zp1XZEm9dfsb4f3NwNBnYk7acIA%2BKv8DCD0QABoMNjM3NDIzMTgzODA1IgwFIwFcm22Ubnuqrywq3AMFmUetT1Jp%2Fq9IMcD2avi2Zb6JzMe1HjdSK%2BN%2BUbA0bviowDklJF6WeASGWcxh0Gw1PasDEu%2Bj5Se3nbSUQFpXKztinbmXi28l8liseQ006zUOsrvf%2BSXDoDUbhx09jC8QWhcYa2CDr0PFTzP5XMN9MaCU66ccccEcMo1zSRPzJhQ5hTn3%2Bia0J5LG3P7ucdUSZa1qIp%2ByXLCpo9XOscoOINeP5S7rirfi6%2BC%2BExrK1oN3H3W9jgNwZbmJ4h%2FpY%2F7OVQCqvPmdY23017skET%2FPSpxEdPFtxiKG4MvZ%2FvgwU5Cs6dxRlJ93LGp0H0zmw%2B7lCIqVRJImIiXTFH5TJIiETsICw2MbaOq7%2FmkQxbfpwOUzt2hLjlSgH9G50NXe56wrKbYKsa1RLCfiFA0%2BULfmEWsf0y9Npk3DfFDceSrtTtfmr3CLMsJOTn7zOj67nXPw%2FlqjnYc%2FbTZVb1SDTs270X7YGCkaIZOrVmc4Ppv%2BkuLTC4ruXHtZtHdssmlmhFOgoUOoCHMaD4dGLP%2FEsEopFgwTDahEUeO3tkO6P95vd0tOFg3OZbvoo%2FxFyrA1FDOhbCDyoKXwkhxGGxROjc4jH0pbfPWpXMldkjcbJambw2Qfbthi65CYdQAxGDDfqrHABjqkAcT4xpNHkvBDrDQ%2BFRTCTu1uLjFdtLSLHzYvM3U9kY3BMPET67h5%2Fm%2BGz2LKsWTLLEENDmHkhlxlEz17ddpaN4td%2BjaX1%2FsqogoyIObQKdiaHxXDso9jpveyQB%2Fc55xBXFQI5sc98jEwd963oSYRW5MF0S%2Fc%2BE4R9XfWTvIKkAxGREGhaRKKiUAStuoRSz5uG%2BPeEqLiOGy5XU%2FG6D6zzA0fkLYB&X-Amz-Signature=042582463bcf9777dcd61d0d55544cac8431a894a1aecd05a5faf6defe21b76e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKVTRVF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlU7wuOKOLL%2FUvSPjLGnsnDCCAVNNJt4DR%2BjbV3VhjMAIhALvGikg69ePOTS16Zp1XZEm9dfsb4f3NwNBnYk7acIA%2BKv8DCD0QABoMNjM3NDIzMTgzODA1IgwFIwFcm22Ubnuqrywq3AMFmUetT1Jp%2Fq9IMcD2avi2Zb6JzMe1HjdSK%2BN%2BUbA0bviowDklJF6WeASGWcxh0Gw1PasDEu%2Bj5Se3nbSUQFpXKztinbmXi28l8liseQ006zUOsrvf%2BSXDoDUbhx09jC8QWhcYa2CDr0PFTzP5XMN9MaCU66ccccEcMo1zSRPzJhQ5hTn3%2Bia0J5LG3P7ucdUSZa1qIp%2ByXLCpo9XOscoOINeP5S7rirfi6%2BC%2BExrK1oN3H3W9jgNwZbmJ4h%2FpY%2F7OVQCqvPmdY23017skET%2FPSpxEdPFtxiKG4MvZ%2FvgwU5Cs6dxRlJ93LGp0H0zmw%2B7lCIqVRJImIiXTFH5TJIiETsICw2MbaOq7%2FmkQxbfpwOUzt2hLjlSgH9G50NXe56wrKbYKsa1RLCfiFA0%2BULfmEWsf0y9Npk3DfFDceSrtTtfmr3CLMsJOTn7zOj67nXPw%2FlqjnYc%2FbTZVb1SDTs270X7YGCkaIZOrVmc4Ppv%2BkuLTC4ruXHtZtHdssmlmhFOgoUOoCHMaD4dGLP%2FEsEopFgwTDahEUeO3tkO6P95vd0tOFg3OZbvoo%2FxFyrA1FDOhbCDyoKXwkhxGGxROjc4jH0pbfPWpXMldkjcbJambw2Qfbthi65CYdQAxGDDfqrHABjqkAcT4xpNHkvBDrDQ%2BFRTCTu1uLjFdtLSLHzYvM3U9kY3BMPET67h5%2Fm%2BGz2LKsWTLLEENDmHkhlxlEz17ddpaN4td%2BjaX1%2FsqogoyIObQKdiaHxXDso9jpveyQB%2Fc55xBXFQI5sc98jEwd963oSYRW5MF0S%2Fc%2BE4R9XfWTvIKkAxGREGhaRKKiUAStuoRSz5uG%2BPeEqLiOGy5XU%2FG6D6zzA0fkLYB&X-Amz-Signature=1cb087cf09795c68d4887abd2ecb5ef633e13363706a38608f24236d2905bf96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
