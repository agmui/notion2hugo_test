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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3KIKVTP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu5GXZCwh1cLmkpLnuwJq2oTnEDoPYYPl6WFPY0nAnWgIgPKISx8ZjzdenXMF1ZiwMqjnLrYd7r55XuUlVLiAwZAoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkllahmmOchqLw0QCrcAy0KEpr%2FlfKp9ibFf17qoFoUomkpjii%2BE2yw%2FvYCKCCX37Z8jid%2FWTyjJRP%2FMxKSuExdbm0Y3PriZKlhrAHRAiF9%2Fv21w1kq%2Buz%2BhHIB5S1fdcz3ovHXCusd6uL9O70jLZjFK30p0ydfQ1Jy1zotGZ37wCHS1B8yKwd%2FaaYOw%2BE8HD%2FHwhNSQnSG6XdfywZBP2fyOpHSrV5lU0cImeAJaDXmW%2BtW9el9WiCP30fLJVRsNMehFyAqgDi9qHIN5ifCPyJhBGnQFj%2B0f6gfMf4nym%2BkxLW4QKsNf5RmPsPVhLr2VYCTi9Cx%2BpJc8rIFG3An4A5PR0D65oDk4pQkbc4SPaO2uHEkMG6vMkbWql4io6WIxrD24rTU8qXscBT1S20WeaeFn%2BMdDlcZfQB76E15SYxXVI7zH8oE4d5OyJXv%2BNgjbMWHJXUYnjp9sCIddno5ATRo2iF6m3K2A%2FM3iEIVP44Lv1J1P5CgMyrBPcaBhO000RH%2Bzidby8n0h1H%2BVJa0kQ1HnHg95q5qYMITpCLGzR7mWx8U1bdTgJENMIL4PoMgvPFANGiIG4eRimqs%2FyQ3S%2BjoaConAO%2Fn2b8h%2FPQGSOgVk74a2O%2BzeUOR0BMD8hY4rv0kGh1v60UGUmbhMJSXkr4GOqUBluIiYZZnIxUnpngpUDN%2Fj2mZvfbD3yvULrQ%2BEjZya%2BPvV4dIAP09uLHixBBPbiguzwH2ZZiaFpxlaGCqLBZEo3%2FVsZRo1bWQZGdSyVnCJ7qFCM1msasGee2e8%2Fw4tjL5vwWtPGbvD%2FjzkWykLLWSyOBp0066MfgMFQE7GU7DUo%2F2jg3NeJarN%2By0uNU1Z87Jc%2FMBZvlrSJsB7U%2Fg8%2FXrZXo81JAB&X-Amz-Signature=dbf8fe3a6f0104bff1d9f7a08295f61e3fae7e2099f005d4c1c3c7841adaeb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3KIKVTP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu5GXZCwh1cLmkpLnuwJq2oTnEDoPYYPl6WFPY0nAnWgIgPKISx8ZjzdenXMF1ZiwMqjnLrYd7r55XuUlVLiAwZAoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkllahmmOchqLw0QCrcAy0KEpr%2FlfKp9ibFf17qoFoUomkpjii%2BE2yw%2FvYCKCCX37Z8jid%2FWTyjJRP%2FMxKSuExdbm0Y3PriZKlhrAHRAiF9%2Fv21w1kq%2Buz%2BhHIB5S1fdcz3ovHXCusd6uL9O70jLZjFK30p0ydfQ1Jy1zotGZ37wCHS1B8yKwd%2FaaYOw%2BE8HD%2FHwhNSQnSG6XdfywZBP2fyOpHSrV5lU0cImeAJaDXmW%2BtW9el9WiCP30fLJVRsNMehFyAqgDi9qHIN5ifCPyJhBGnQFj%2B0f6gfMf4nym%2BkxLW4QKsNf5RmPsPVhLr2VYCTi9Cx%2BpJc8rIFG3An4A5PR0D65oDk4pQkbc4SPaO2uHEkMG6vMkbWql4io6WIxrD24rTU8qXscBT1S20WeaeFn%2BMdDlcZfQB76E15SYxXVI7zH8oE4d5OyJXv%2BNgjbMWHJXUYnjp9sCIddno5ATRo2iF6m3K2A%2FM3iEIVP44Lv1J1P5CgMyrBPcaBhO000RH%2Bzidby8n0h1H%2BVJa0kQ1HnHg95q5qYMITpCLGzR7mWx8U1bdTgJENMIL4PoMgvPFANGiIG4eRimqs%2FyQ3S%2BjoaConAO%2Fn2b8h%2FPQGSOgVk74a2O%2BzeUOR0BMD8hY4rv0kGh1v60UGUmbhMJSXkr4GOqUBluIiYZZnIxUnpngpUDN%2Fj2mZvfbD3yvULrQ%2BEjZya%2BPvV4dIAP09uLHixBBPbiguzwH2ZZiaFpxlaGCqLBZEo3%2FVsZRo1bWQZGdSyVnCJ7qFCM1msasGee2e8%2Fw4tjL5vwWtPGbvD%2FjzkWykLLWSyOBp0066MfgMFQE7GU7DUo%2F2jg3NeJarN%2By0uNU1Z87Jc%2FMBZvlrSJsB7U%2Fg8%2FXrZXo81JAB&X-Amz-Signature=6287db74ec8740c91921490de5ec63928c7de6ea4553b43d4f677aad238b8e77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
