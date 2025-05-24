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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGYUXUL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCBevCvtP25Ta8zcEglsXnuTpbSA7FSkehmhBYJurl21AIgTDxo2Qp3EqZ2tlauZ7sLFTtSWjeVojWNdJwwl8PTrPwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe%2FSpTjZkVmAiHr2SrcA957b87bajM14pwEOxSvbC2n4P3NyROQREiXJ7C56YQ9yNyiiHzpGRTGEZgqKjaVWeoU0QJ4gmSMEqBlK5kXM%2FoOG015Cmip7wwnuURYajLPCckQEmc4J7r%2B7qqP0mSzn5e2uJqg5fBsJBuiEH8VVdh8PEHr4kBRGKQEBOti2t33xtBNlVQ8CqfYvl6fH03wnUeKpxcZDXcTyj3sDoi2JJXTpY3Ly4EYyPzZ1APjKVaZ0IkipgW3DTbkaWhiLILn1Q7KlRwVnRd9l5l3DUZ0ciaM1adVcSU5lPuMihPFvkkPGfpRm98k4fAehre8vXxfMtUitje9akv4NS8EajGemlJ4pc4uPPyD5qG4iXSew8Z79MfKiyvO2bhDSuKMpFMWFZ%2BP7sek8jmB4%2Boxyvwd1OcPK9gkMwmPn%2BS18T4RQ%2F7Hb55PqKs%2FKuqGQl7XUKyjxvulP8f%2B2RfyzFC3ST2%2Fjzz03xwMr3fFp2FW1klCq4ibQP3x3Oka0YAyuidRUsO7JLZbWEDobrYJowiidwcZqQkEuwhnuyxFaklz9xT51gaMltW8CNQkK4G4yQB4I0d39Rf%2B1acyrpE4lZ3VjKeG6LJLm3IIFp5tWeGZCBDlgczQ2W7NHeLVK4D5u2aEMO2dxcEGOqUBMZfQqW2020gpdNrlSjapEzt9dXrW6pSUXayUgrMTrS1Vw%2BtnvgW5k8cJwsUdToMHshAv%2FwVcqDtyPyiTsoqizK5y1aJWGKHRwJhgQWw8bgPB6rNFhKxaifEsW9vvB%2Fu3G6PF6FlGVx%2FV3RQzVhMHoo35VZDaRS60paldAZm02SDmfltaetjElSGFwXi5aQmu4beB3jVi3FauPLl%2F0Oh5tiwb5owZ&X-Amz-Signature=a7586e8d6eacaa1d094f05bef0da026585bb703db1822e8f5478e7739935b2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGYUXUL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCBevCvtP25Ta8zcEglsXnuTpbSA7FSkehmhBYJurl21AIgTDxo2Qp3EqZ2tlauZ7sLFTtSWjeVojWNdJwwl8PTrPwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJe%2FSpTjZkVmAiHr2SrcA957b87bajM14pwEOxSvbC2n4P3NyROQREiXJ7C56YQ9yNyiiHzpGRTGEZgqKjaVWeoU0QJ4gmSMEqBlK5kXM%2FoOG015Cmip7wwnuURYajLPCckQEmc4J7r%2B7qqP0mSzn5e2uJqg5fBsJBuiEH8VVdh8PEHr4kBRGKQEBOti2t33xtBNlVQ8CqfYvl6fH03wnUeKpxcZDXcTyj3sDoi2JJXTpY3Ly4EYyPzZ1APjKVaZ0IkipgW3DTbkaWhiLILn1Q7KlRwVnRd9l5l3DUZ0ciaM1adVcSU5lPuMihPFvkkPGfpRm98k4fAehre8vXxfMtUitje9akv4NS8EajGemlJ4pc4uPPyD5qG4iXSew8Z79MfKiyvO2bhDSuKMpFMWFZ%2BP7sek8jmB4%2Boxyvwd1OcPK9gkMwmPn%2BS18T4RQ%2F7Hb55PqKs%2FKuqGQl7XUKyjxvulP8f%2B2RfyzFC3ST2%2Fjzz03xwMr3fFp2FW1klCq4ibQP3x3Oka0YAyuidRUsO7JLZbWEDobrYJowiidwcZqQkEuwhnuyxFaklz9xT51gaMltW8CNQkK4G4yQB4I0d39Rf%2B1acyrpE4lZ3VjKeG6LJLm3IIFp5tWeGZCBDlgczQ2W7NHeLVK4D5u2aEMO2dxcEGOqUBMZfQqW2020gpdNrlSjapEzt9dXrW6pSUXayUgrMTrS1Vw%2BtnvgW5k8cJwsUdToMHshAv%2FwVcqDtyPyiTsoqizK5y1aJWGKHRwJhgQWw8bgPB6rNFhKxaifEsW9vvB%2Fu3G6PF6FlGVx%2FV3RQzVhMHoo35VZDaRS60paldAZm02SDmfltaetjElSGFwXi5aQmu4beB3jVi3FauPLl%2F0Oh5tiwb5owZ&X-Amz-Signature=a8e8f73f3a079827a61467f04b121917534b018d9aedc8c5883b692baefb23ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
