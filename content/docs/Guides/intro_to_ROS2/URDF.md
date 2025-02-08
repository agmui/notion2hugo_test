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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246JL4RX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIB%2B2U7FSgwbroQKsKkBQyEvpG%2Fk2Macht731zDU3efupAiEA16S8Vt53U2%2BQqm9vz%2BAWRbvfBz59Cs3Z6mkHjVsvZS4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoMyQdT%2FukhvxsRLSrcA%2BfFXJG8B7NBuFC794s%2FsPt3VbRQnXoqWHdhZjtVaewJcxbrcmk3BUFxFNQbEPbxXbUUIEC0KK1POZWG%2FD11eoUwdp8oFowaKy0Woc3BAYhpQ55aiDebAY9hNddPWY7fy%2FjaMsW61ZYGjd%2BM1tfMkJs3FpPuWCwl63Vqj9%2F2RhNHMKOm5KBFbn1sH6EUALPpD3X2xzzod2WTobv5VyUlmC0bL%2F8AwuKDazF1JKVbsNy8MkXNlhNaGmgLaTp2acej5uvjptiut0koilqdqw6j26FPy9V29sMtCyXXFaX%2BKt35To4EDeHwYMzHS2fZ%2F4i2l2v1Q9fjKFIIpZziDLFvg2TvKoY4TAFKfzrDwmHy4cLhGOSuLqGvbV05utPoFAUn11E4NxD1h%2FtyhQ13WGyMNOf4b9oF3gNKsNut1vG6AMn%2B8lbz%2BjCcDk7o%2FRl68%2FP%2FOwdjWqaLF4Sj72b3KqIDLVBOk3y3IkvNV06nlDN58iqCnfWFbGPQA20DDKQLznE7wHnRSTPJMpswoOTJ8C0whAjz1jjOrEjk87XeQ9aGEvNOl3YgBDEDtGiaZf4ewrQd0ce1FeOiDA1z8VpjU9bf6UvupW057CyOhdZby5SdnYQ0ZEKFrSA%2FfJhvKSjIMJrhnr0GOqUB3XhZiad71XGCFBumO%2BlErWwsWsMrKF4gMTM7wOJ28kcyozbxia6S%2BaA17mwdM9pkxBV1iYAaty3O%2FVqOkPt4sPdKAVR2dr%2FAFu4UniwfhBaw7C2oLAhLch8m77S10HqVVGMQXszzMEp0fysYBNqtp7fJ9VS%2B1Ee7tkEL0bxD59%2FzBSZ86H1LZjY0CMJP0mkBT%2BTVR757tJj6WX%2F6cj3hkfdaeRsF&X-Amz-Signature=61d009e4a70d8f9a78ff46341278c616ef44c603ac882dfca857bfe28ea13177&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246JL4RX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIB%2B2U7FSgwbroQKsKkBQyEvpG%2Fk2Macht731zDU3efupAiEA16S8Vt53U2%2BQqm9vz%2BAWRbvfBz59Cs3Z6mkHjVsvZS4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoMyQdT%2FukhvxsRLSrcA%2BfFXJG8B7NBuFC794s%2FsPt3VbRQnXoqWHdhZjtVaewJcxbrcmk3BUFxFNQbEPbxXbUUIEC0KK1POZWG%2FD11eoUwdp8oFowaKy0Woc3BAYhpQ55aiDebAY9hNddPWY7fy%2FjaMsW61ZYGjd%2BM1tfMkJs3FpPuWCwl63Vqj9%2F2RhNHMKOm5KBFbn1sH6EUALPpD3X2xzzod2WTobv5VyUlmC0bL%2F8AwuKDazF1JKVbsNy8MkXNlhNaGmgLaTp2acej5uvjptiut0koilqdqw6j26FPy9V29sMtCyXXFaX%2BKt35To4EDeHwYMzHS2fZ%2F4i2l2v1Q9fjKFIIpZziDLFvg2TvKoY4TAFKfzrDwmHy4cLhGOSuLqGvbV05utPoFAUn11E4NxD1h%2FtyhQ13WGyMNOf4b9oF3gNKsNut1vG6AMn%2B8lbz%2BjCcDk7o%2FRl68%2FP%2FOwdjWqaLF4Sj72b3KqIDLVBOk3y3IkvNV06nlDN58iqCnfWFbGPQA20DDKQLznE7wHnRSTPJMpswoOTJ8C0whAjz1jjOrEjk87XeQ9aGEvNOl3YgBDEDtGiaZf4ewrQd0ce1FeOiDA1z8VpjU9bf6UvupW057CyOhdZby5SdnYQ0ZEKFrSA%2FfJhvKSjIMJrhnr0GOqUB3XhZiad71XGCFBumO%2BlErWwsWsMrKF4gMTM7wOJ28kcyozbxia6S%2BaA17mwdM9pkxBV1iYAaty3O%2FVqOkPt4sPdKAVR2dr%2FAFu4UniwfhBaw7C2oLAhLch8m77S10HqVVGMQXszzMEp0fysYBNqtp7fJ9VS%2B1Ee7tkEL0bxD59%2FzBSZ86H1LZjY0CMJP0mkBT%2BTVR757tJj6WX%2F6cj3hkfdaeRsF&X-Amz-Signature=c88cefd140f84cfbf6dabf67807e3de9a59f92c900c26e5839ed36bf0bf98de2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
