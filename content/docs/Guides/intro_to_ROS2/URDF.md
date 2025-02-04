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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVCR5IC3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA46hYxlub%2B0C%2BVClvQ%2FjDR4fHgc6VHpS7E0te%2Bs8Sg8AiEA4zMAsy6BGXxbnPDB2WFUUFwfMKnx5xr%2BBU8JIw9VXzsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMTlvRBrN2wAzQ2%2F0CrcA56Qk9a0IC%2Bzxpxr%2F1hs1eMU1Rk3Mz38n95G7NWKILt50WQufBINgDM9QD3%2Bsml0n7jAX7ykeDv0q5jloWNzhaHmUwZEIc4UH1R1I99Z9JIGjMNmu54yzni0CECyxJCO46ZeKSdh420S63ZMkzty7EURQuoe4OdpP2BCeevw1Nt7Fi141XcMsL2VxAVwtbF%2FlZ7%2Fh6cI%2B8BfsrryhYlfCz0rD8LshpvCgRhrKRpWqyZyiSHFp7FO6T4o6l9AWag2Q8vYTHset7jihimbt1YAmvlBoyC8KCqgqdGVWjk%2BKewnZcfk3Cm1x32QMb3MV3iZ4AsflyC1xcOxF5%2BCmcEIaeljlJA6A4Z5sQ3mkd3%2FsFkWp8hECfukRSOh3Yx9ZbrBpcKvFq7OqHFfrnFztpmgXN4lHPkxEUl82rzL7GBDSOqQYmy13fN4G8MFczJTpVcWYeUshJ8LdDSyPTkL12KPyzi42%2Bq2eK%2B2cgwYLfO7hIFg%2Fi8hOiceyNKHSR%2Bf0C8%2BwuQfqTOx80G%2B8quYPAc2Wqc6xLtnuioSDas46hm3gbXMCtZJprxG%2FrFHwcQmVz9FDzUpQRMZB%2BXP9NUV3gtAv9sG3%2FDtVRwvcFV6cgQ%2F8jCH3Wu%2F9FmH59URsCaXMJaDiL0GOqUBUrMRzr%2B0catJaioJmyZIbQ%2FpVamKlCghmZveoa%2FzcTM9k1v5NhXAsGXOp1LU0mRqWKYmnzFrUfnGy%2Bbre5yc7myM9%2FkEYLn45gnhplDuvDXPXOzMXgznn%2BuKWYUKPw4KlMK65wHqhHFp7CV9aSmB7FBCxuwdJ3hxtCKeKUi58MBAwmm5jKcUQCKh%2F1RZcjnw7CqJJGlMi2XDFHTS0eg4v0SLK8F1&X-Amz-Signature=07cebc29be0621ec524828d8e010568fc07e0099054ba7a60cd1b611a8c390f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVCR5IC3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA46hYxlub%2B0C%2BVClvQ%2FjDR4fHgc6VHpS7E0te%2Bs8Sg8AiEA4zMAsy6BGXxbnPDB2WFUUFwfMKnx5xr%2BBU8JIw9VXzsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMTlvRBrN2wAzQ2%2F0CrcA56Qk9a0IC%2Bzxpxr%2F1hs1eMU1Rk3Mz38n95G7NWKILt50WQufBINgDM9QD3%2Bsml0n7jAX7ykeDv0q5jloWNzhaHmUwZEIc4UH1R1I99Z9JIGjMNmu54yzni0CECyxJCO46ZeKSdh420S63ZMkzty7EURQuoe4OdpP2BCeevw1Nt7Fi141XcMsL2VxAVwtbF%2FlZ7%2Fh6cI%2B8BfsrryhYlfCz0rD8LshpvCgRhrKRpWqyZyiSHFp7FO6T4o6l9AWag2Q8vYTHset7jihimbt1YAmvlBoyC8KCqgqdGVWjk%2BKewnZcfk3Cm1x32QMb3MV3iZ4AsflyC1xcOxF5%2BCmcEIaeljlJA6A4Z5sQ3mkd3%2FsFkWp8hECfukRSOh3Yx9ZbrBpcKvFq7OqHFfrnFztpmgXN4lHPkxEUl82rzL7GBDSOqQYmy13fN4G8MFczJTpVcWYeUshJ8LdDSyPTkL12KPyzi42%2Bq2eK%2B2cgwYLfO7hIFg%2Fi8hOiceyNKHSR%2Bf0C8%2BwuQfqTOx80G%2B8quYPAc2Wqc6xLtnuioSDas46hm3gbXMCtZJprxG%2FrFHwcQmVz9FDzUpQRMZB%2BXP9NUV3gtAv9sG3%2FDtVRwvcFV6cgQ%2F8jCH3Wu%2F9FmH59URsCaXMJaDiL0GOqUBUrMRzr%2B0catJaioJmyZIbQ%2FpVamKlCghmZveoa%2FzcTM9k1v5NhXAsGXOp1LU0mRqWKYmnzFrUfnGy%2Bbre5yc7myM9%2FkEYLn45gnhplDuvDXPXOzMXgznn%2BuKWYUKPw4KlMK65wHqhHFp7CV9aSmB7FBCxuwdJ3hxtCKeKUi58MBAwmm5jKcUQCKh%2F1RZcjnw7CqJJGlMi2XDFHTS0eg4v0SLK8F1&X-Amz-Signature=90e407c9930687e4712f2f86fa99162864f7f04da46d3ae5a52d11b4264409bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
