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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCCLX52%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYmAnOZgDo8NN88ln5Simtry9KjZ2IsZJj92y%2BGFpMyAiA%2Fzon5WUD0iPPpVTalLy7S9FMavAmq%2BoTgGh%2Bou9g9zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi64W%2FoML2gh%2FBFLeKtwDWRbsZDEsu7g1VuFvH%2FRWeyXAdMSWY9YZ76LBUBvnBzbWMk5WY%2BjLmpOqybTDK00Cx%2F6Sb%2FEvZF7Urql1LOvVqfzAKC1XF7OvqKVDv3vlTHK7OSDdu0%2BMYVHVG88lA9YChODzrpkfJ73KPtO4H2uI7sR3u6fsUAGlwxH6zs8muDFfmozMaKwCvxfqfBXtuqoM7Miwd81hCi%2B9YbR1MU0GdQiDVMSDmR9AKIZE5%2BMP2DWiKwSvJEXaz%2BIoOgibyTb7pL0Wee8eFJfM0HpBVpuYaaH%2B7ARWX5O4yaJ43EcULckC2f4q2KXk5NTyaupqEVTcL9Fbhqnepm%2B2rbeeaBkP057jve7%2B7dViiNL%2BMbDn20Ou2BfXlCvcBEuctN6%2Be2XXT%2FcfHDIIY61lllnDvFDZL7K%2Byg4dKDgLowpks%2F3n5EcO2Oe1UHBskUQz561S37R4DfFiMM1JrCC3cq0qbT5F9zJZ2kPZqzTtDpaTavyMULW1vextKoC9EeSQlfjp6iQ1DVqluvZ7WE0%2BvGPY8Oz42jq%2BosQKhU7dJSYjMw5fypGpTroLpo%2FPJGP1Xm%2F3pPVFxjH%2F4Rr3Ntr2mL9afv7lhjpKek9vXrT4aug7Ppnddlu48FRppMu9PLtwKeMw%2Bcn%2BwgY6pgERfcuXuVmDqSb9hwiFeDM6Y9UlQm4cbdk9IbLidMV3j%2BO1LbigD4ck5qCGXufUdrWmooH1EUIDA3P1QLFvPp90JX20VKPC0HGJA03iUz5lJYmdKAx%2BevZWWadLus8zyJNIcY8vlepbHN%2BwB073ryLn1u15izVCnfwhboOOe00ziUPCkWVODfjA32z%2BCq3I1rityzTkS7S6ErD3JoPNRUDaBZZi37Pq&X-Amz-Signature=0b0501096ea804c72b584b010cbdab707d695e44ea476c83467ff5d9270afac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCCLX52%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYmAnOZgDo8NN88ln5Simtry9KjZ2IsZJj92y%2BGFpMyAiA%2Fzon5WUD0iPPpVTalLy7S9FMavAmq%2BoTgGh%2Bou9g9zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi64W%2FoML2gh%2FBFLeKtwDWRbsZDEsu7g1VuFvH%2FRWeyXAdMSWY9YZ76LBUBvnBzbWMk5WY%2BjLmpOqybTDK00Cx%2F6Sb%2FEvZF7Urql1LOvVqfzAKC1XF7OvqKVDv3vlTHK7OSDdu0%2BMYVHVG88lA9YChODzrpkfJ73KPtO4H2uI7sR3u6fsUAGlwxH6zs8muDFfmozMaKwCvxfqfBXtuqoM7Miwd81hCi%2B9YbR1MU0GdQiDVMSDmR9AKIZE5%2BMP2DWiKwSvJEXaz%2BIoOgibyTb7pL0Wee8eFJfM0HpBVpuYaaH%2B7ARWX5O4yaJ43EcULckC2f4q2KXk5NTyaupqEVTcL9Fbhqnepm%2B2rbeeaBkP057jve7%2B7dViiNL%2BMbDn20Ou2BfXlCvcBEuctN6%2Be2XXT%2FcfHDIIY61lllnDvFDZL7K%2Byg4dKDgLowpks%2F3n5EcO2Oe1UHBskUQz561S37R4DfFiMM1JrCC3cq0qbT5F9zJZ2kPZqzTtDpaTavyMULW1vextKoC9EeSQlfjp6iQ1DVqluvZ7WE0%2BvGPY8Oz42jq%2BosQKhU7dJSYjMw5fypGpTroLpo%2FPJGP1Xm%2F3pPVFxjH%2F4Rr3Ntr2mL9afv7lhjpKek9vXrT4aug7Ppnddlu48FRppMu9PLtwKeMw%2Bcn%2BwgY6pgERfcuXuVmDqSb9hwiFeDM6Y9UlQm4cbdk9IbLidMV3j%2BO1LbigD4ck5qCGXufUdrWmooH1EUIDA3P1QLFvPp90JX20VKPC0HGJA03iUz5lJYmdKAx%2BevZWWadLus8zyJNIcY8vlepbHN%2BwB073ryLn1u15izVCnfwhboOOe00ziUPCkWVODfjA32z%2BCq3I1rityzTkS7S6ErD3JoPNRUDaBZZi37Pq&X-Amz-Signature=6a27360012108ecfae43545306464c04d80cbb91426c2e353e5e75c2a19d934e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
