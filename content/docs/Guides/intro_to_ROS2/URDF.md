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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZLA267%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT1W44VYa0qsDoY9wqRfTo%2BamEpookFyRnIAiz8oGXbQIhANmUymQHjLPzuNh5wTXQ76kIk15sJ5g%2FlvsTx6LR4Nu%2BKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVQIBaHsaF%2B%2FRs9GIq3AO8u3NwZUNVr3VWb8pIm6ksIn9TTSmB64zbX5lyzuZnJ3BsKJctRX8C9CjrggnS4HdnXBjEx0K86IWh2BPDqzxPULSxKLUVfIwoBLa%2BjftbusDIkMLcedRM%2FvulUrakCzeHcxlwqONm%2FlkP5oD5NqF2wtWbygPBU5v6E6fjQrK3c%2F%2BFcVkLynR5TSVozb3KWOP7NkFf2%2BasWM%2FAWn7nUGi%2FBx%2B54DxrBLORfpyvAkIb%2FlO3vBQ%2FiKodFvlReuAvjy1kY0tp50%2FxAtwFI4HtM8bT4uztb0%2BwyvSPEJ2GojOIntyU%2Fz5q34A%2B7c2oXM5rXjhGHrx9whuLBBKmgvU4DfndIMASGtj5ltg035Jl8PNBcQ3%2BW%2BEuf7n9yh493KRT7VnBjNht%2B4MnG29SDoEXX2%2F%2FhMuzxFb4m3qf1aoLJZzYPMCm%2BDtljLEAAQ%2BH3ylWliZkXA5bXQ9HMiEV8QLtQBWlhbRoAVTVEmL%2FlE8UZO4mfAPUzkRsHlDi7XHib8pXtBgP%2BwF2RKksS2U8MI6%2BwUofokYiaPU7plrumx%2BIwRepaggbr9FMRyud%2FRjE%2BkxoMsy4kz4bn7KKpGljNCs3ovivH2UxRnDkqHJEjgv1p8HSnXjQF0eIrjImElQyuzDK%2BNC%2BBjqkAUK7icRGmVmW6W3cYVrlnQOlUES9G%2FvhIpkUdRdMnOjToANzIQESyPO%2F7fFugQ0FUUmJcpCrEGzi1StZsODfsTmZiWpvS077zoFcQ4fFcjXid6RwsCGVUzJMstYqdP0xTiGrEEMCnfQAmmUiB69HWnWB%2BhISu87VCrdo2%2BLE8RZjfHpcXpa3FItuFEVNcPoHMEk%2F4j08FWZli8pth2FDnM0OY1S2&X-Amz-Signature=817d13ef638570f696423fc2f276eb58a354b1eb9d1c6fdbe64bbba04b60ba29&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZLA267%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT1W44VYa0qsDoY9wqRfTo%2BamEpookFyRnIAiz8oGXbQIhANmUymQHjLPzuNh5wTXQ76kIk15sJ5g%2FlvsTx6LR4Nu%2BKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVQIBaHsaF%2B%2FRs9GIq3AO8u3NwZUNVr3VWb8pIm6ksIn9TTSmB64zbX5lyzuZnJ3BsKJctRX8C9CjrggnS4HdnXBjEx0K86IWh2BPDqzxPULSxKLUVfIwoBLa%2BjftbusDIkMLcedRM%2FvulUrakCzeHcxlwqONm%2FlkP5oD5NqF2wtWbygPBU5v6E6fjQrK3c%2F%2BFcVkLynR5TSVozb3KWOP7NkFf2%2BasWM%2FAWn7nUGi%2FBx%2B54DxrBLORfpyvAkIb%2FlO3vBQ%2FiKodFvlReuAvjy1kY0tp50%2FxAtwFI4HtM8bT4uztb0%2BwyvSPEJ2GojOIntyU%2Fz5q34A%2B7c2oXM5rXjhGHrx9whuLBBKmgvU4DfndIMASGtj5ltg035Jl8PNBcQ3%2BW%2BEuf7n9yh493KRT7VnBjNht%2B4MnG29SDoEXX2%2F%2FhMuzxFb4m3qf1aoLJZzYPMCm%2BDtljLEAAQ%2BH3ylWliZkXA5bXQ9HMiEV8QLtQBWlhbRoAVTVEmL%2FlE8UZO4mfAPUzkRsHlDi7XHib8pXtBgP%2BwF2RKksS2U8MI6%2BwUofokYiaPU7plrumx%2BIwRepaggbr9FMRyud%2FRjE%2BkxoMsy4kz4bn7KKpGljNCs3ovivH2UxRnDkqHJEjgv1p8HSnXjQF0eIrjImElQyuzDK%2BNC%2BBjqkAUK7icRGmVmW6W3cYVrlnQOlUES9G%2FvhIpkUdRdMnOjToANzIQESyPO%2F7fFugQ0FUUmJcpCrEGzi1StZsODfsTmZiWpvS077zoFcQ4fFcjXid6RwsCGVUzJMstYqdP0xTiGrEEMCnfQAmmUiB69HWnWB%2BhISu87VCrdo2%2BLE8RZjfHpcXpa3FItuFEVNcPoHMEk%2F4j08FWZli8pth2FDnM0OY1S2&X-Amz-Signature=ea7cabbe46815b0bb750a507a8fb1142eaa78f42ad270803a259bd7ea3658919&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
