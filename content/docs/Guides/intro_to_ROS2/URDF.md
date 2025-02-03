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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKJTURR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYDizUTA1yP4wSe3%2BsrkZSe5sFsa%2FMkacITaWOKeO9gIgcic%2FTySAJksjFudunhgzOzAhD3M0Dn%2B7HEy%2FewIUaoQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVIMHSkFNabUYYvhircA7t%2FaGyTYcXCS2SUXx05GhRQH%2BESfJ2PQOCGa5hN5nWMd3dmuFVGWOLV%2BzucU1dfPG0R%2BFYHXjytvK%2FNs36w906E2DFQ73bN2oPAP%2FTrK5MxnmlGICZXv%2FRrfPwiP9EEKEM%2BcOygOwMFqgCSj26WrLKkaZ0R1k9NAz4QTESqzDnvYyIfxu0LvDJaMtYAvo1UVhnMg4KCGHn5uvYuHPfHTIG9F16hZOstHFArt%2FY0%2FtWBqAF%2BJiKcM%2BV3PZt%2FoSsA7cBvQzvQFssVVMUmVcP%2BIG%2BUlkhHYQ2057E6q8ftF%2Bus9gywvqA6zcrF9lZW6bnY2HsdNy%2Fa4tfj%2FFulcXgMgwCLvydAvcnfwLbkshTylV9aNfxtqj0FTkgJglXS%2BQFt8%2Bsr%2B448wSq1iAqt3qNj%2B9IVfANVjlao57FUbDKL2FmfrQQn1d2co%2FplpB%2FIY8FK5WG%2BIVTOmyEffXvigjU6JJeYopI7BuvgB9fC%2F4NPXUAnGFbOyJeljYdph6us6NiRAXIqb8kqqEalNH7nXIC9OHNWRmuIk7XZB5nlhbqCcVxEjDJHMtAeMNUaJxDMRQOPTI%2Ff5fFp2722OUcknT1%2FP%2BJiDYkCiPyAIzUbWhKKtT6TRamdlxaYFBPVevHQMLbAgL0GOqUBXQb%2FRlTgdCaFheeWIAtHA6VWo7PRTQ1l4dbOsYS82Vgq9dWEA9GboqRuTN%2BqcBd27mpNd%2F50oLwXPeIKVDTepYnSNEkSpZAHwNgzirS5J%2BcZScTOyxqwLCwwHWoA1iBdTzPVgfHxd68bJx4k7E0%2F5BPtYjFMR1AFO15Yelir2miKeJy%2FRbkx3USkkAflkfSJVOs5lvFg7oeyqYj%2Fa4YuOkkOeud1&X-Amz-Signature=0a4268c84adb60375c000d731a5d556da40544153231ed4f964c4aedbe9db943&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKJTURR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYDizUTA1yP4wSe3%2BsrkZSe5sFsa%2FMkacITaWOKeO9gIgcic%2FTySAJksjFudunhgzOzAhD3M0Dn%2B7HEy%2FewIUaoQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVIMHSkFNabUYYvhircA7t%2FaGyTYcXCS2SUXx05GhRQH%2BESfJ2PQOCGa5hN5nWMd3dmuFVGWOLV%2BzucU1dfPG0R%2BFYHXjytvK%2FNs36w906E2DFQ73bN2oPAP%2FTrK5MxnmlGICZXv%2FRrfPwiP9EEKEM%2BcOygOwMFqgCSj26WrLKkaZ0R1k9NAz4QTESqzDnvYyIfxu0LvDJaMtYAvo1UVhnMg4KCGHn5uvYuHPfHTIG9F16hZOstHFArt%2FY0%2FtWBqAF%2BJiKcM%2BV3PZt%2FoSsA7cBvQzvQFssVVMUmVcP%2BIG%2BUlkhHYQ2057E6q8ftF%2Bus9gywvqA6zcrF9lZW6bnY2HsdNy%2Fa4tfj%2FFulcXgMgwCLvydAvcnfwLbkshTylV9aNfxtqj0FTkgJglXS%2BQFt8%2Bsr%2B448wSq1iAqt3qNj%2B9IVfANVjlao57FUbDKL2FmfrQQn1d2co%2FplpB%2FIY8FK5WG%2BIVTOmyEffXvigjU6JJeYopI7BuvgB9fC%2F4NPXUAnGFbOyJeljYdph6us6NiRAXIqb8kqqEalNH7nXIC9OHNWRmuIk7XZB5nlhbqCcVxEjDJHMtAeMNUaJxDMRQOPTI%2Ff5fFp2722OUcknT1%2FP%2BJiDYkCiPyAIzUbWhKKtT6TRamdlxaYFBPVevHQMLbAgL0GOqUBXQb%2FRlTgdCaFheeWIAtHA6VWo7PRTQ1l4dbOsYS82Vgq9dWEA9GboqRuTN%2BqcBd27mpNd%2F50oLwXPeIKVDTepYnSNEkSpZAHwNgzirS5J%2BcZScTOyxqwLCwwHWoA1iBdTzPVgfHxd68bJx4k7E0%2F5BPtYjFMR1AFO15Yelir2miKeJy%2FRbkx3USkkAflkfSJVOs5lvFg7oeyqYj%2Fa4YuOkkOeud1&X-Amz-Signature=917be3ca9ad4789c17a01f3b73bee8f7b4ecdded52ed6cbef4d681194254ba88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
