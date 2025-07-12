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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOENIQ6B%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCONCW%2BVgydGIfbvLghls1D6C81%2B0b6GVYDna2Kr%2F8VcQIhANXs8hJqSXDcL%2BnkVKdbFysWi%2BOp5bHeoS0LSRPbkSU7KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnLa3YUD4vgQtsZWQq3ANthJVJb6gK%2FvPD8cjYMhQnvqjubLFcV7AsNH1TeXzpHy24D3EIkQ9ZZL%2Fbisx%2FPge%2FpyODT9GrhS9J%2BdA%2Fkr%2FTnGZi%2FA520gjji%2FKQJF6suaothCY0lgR2tdLGDg1F19QtebR9AN02H9S4eCTlnSIeqn90pNRlT1mVsunHTlHEYF5tOh3xadzb1yAk1l4pPHpi9sfe9i1XCeRTTpPwrwEAHVZTjn6bsCs4ybKh1aVXruxHccPcrizQiNSed7CVoAzIaRdWltxYm%2BxVzSkBPP5lzMFRBRMnYfKjoI3V2smhI7ZS%2FpWApZrZXq2SITzjwR7pentL0wYn2snIkK9dkhUHNWiaps9wKqiNBTH3cMpRdponczS5MaZnTKDSbcnJG8ZiE9Gj97d4fANm2MghiRmVdUyqJJYp5rVU%2FqDddwFhxG%2FnjwN5UWDPXXE%2Fudj4xcdyTgcsBQGyRVxnk44Zu8K6JBmdDCKO7taaXKQC8WRDyO5J2Mi%2B1Mc3uRD8m7Xcd0jB079Kl8vPCcoxFETU%2FpNIVr5kd2h7QC5LaTS9cX%2FHbHsrxy4pC7RAdHGT95kZvwiCBX5z7LPMulAdIORNLB4p7MhmOSRRDwmfF8j12cpY%2B0SvIlTgW1lqrbYHtDCD%2FcjDBjqkAekNabXHcK56c1IZgLDb58IN1kE9pqqxlPo54yQIsgnKo9anKvsZ3CVryO8fXOZyJkhrtVg8nhvqb8Zm1sJ1wLgyAfMTlXAv%2F9Cq5aGutvlOa5TTVrTs8SU9eYBonR5cSdLH%2Bb7bbT8a4y4QqumhmTYwU9vPZ%2FklDHBOnlUpaB1zuZpAs82QMQNN1HxGdHTMmrPvFA4%2BfqiZ7TJpdp8vMQgPmm5l&X-Amz-Signature=af3e9fd037c3bd6e3ec0f54312bb436dbeae207bcf7625b6a504918234b2152d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOENIQ6B%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCONCW%2BVgydGIfbvLghls1D6C81%2B0b6GVYDna2Kr%2F8VcQIhANXs8hJqSXDcL%2BnkVKdbFysWi%2BOp5bHeoS0LSRPbkSU7KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnLa3YUD4vgQtsZWQq3ANthJVJb6gK%2FvPD8cjYMhQnvqjubLFcV7AsNH1TeXzpHy24D3EIkQ9ZZL%2Fbisx%2FPge%2FpyODT9GrhS9J%2BdA%2Fkr%2FTnGZi%2FA520gjji%2FKQJF6suaothCY0lgR2tdLGDg1F19QtebR9AN02H9S4eCTlnSIeqn90pNRlT1mVsunHTlHEYF5tOh3xadzb1yAk1l4pPHpi9sfe9i1XCeRTTpPwrwEAHVZTjn6bsCs4ybKh1aVXruxHccPcrizQiNSed7CVoAzIaRdWltxYm%2BxVzSkBPP5lzMFRBRMnYfKjoI3V2smhI7ZS%2FpWApZrZXq2SITzjwR7pentL0wYn2snIkK9dkhUHNWiaps9wKqiNBTH3cMpRdponczS5MaZnTKDSbcnJG8ZiE9Gj97d4fANm2MghiRmVdUyqJJYp5rVU%2FqDddwFhxG%2FnjwN5UWDPXXE%2Fudj4xcdyTgcsBQGyRVxnk44Zu8K6JBmdDCKO7taaXKQC8WRDyO5J2Mi%2B1Mc3uRD8m7Xcd0jB079Kl8vPCcoxFETU%2FpNIVr5kd2h7QC5LaTS9cX%2FHbHsrxy4pC7RAdHGT95kZvwiCBX5z7LPMulAdIORNLB4p7MhmOSRRDwmfF8j12cpY%2B0SvIlTgW1lqrbYHtDCD%2FcjDBjqkAekNabXHcK56c1IZgLDb58IN1kE9pqqxlPo54yQIsgnKo9anKvsZ3CVryO8fXOZyJkhrtVg8nhvqb8Zm1sJ1wLgyAfMTlXAv%2F9Cq5aGutvlOa5TTVrTs8SU9eYBonR5cSdLH%2Bb7bbT8a4y4QqumhmTYwU9vPZ%2FklDHBOnlUpaB1zuZpAs82QMQNN1HxGdHTMmrPvFA4%2BfqiZ7TJpdp8vMQgPmm5l&X-Amz-Signature=4efd9d4e487522857596016b8574a89ba89c92e88620eb447d5eccfc14ec6dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
