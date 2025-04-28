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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDSKQGE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrRkjuQTXXP3U8XJNvDnCTgE026uTtbC5FsL5KkgDq%2BAIgRLFcDQhw%2BgroD0gyXfFwiEZ%2FaIJlWVCq402WbaySx0sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH1AWgFnlUfIrq9uVCrcA1VTW%2FlxKwcPiCDA6Pz9Fz1AofI0NA4Gr6Dn21Zg7ckvJJ6ne0vI0eFJD25%2FPWtFvwdsFrZagGVMD%2FlHCYDOky9RvbifIUGSV6Nst0feHM0WCTPdHTHAyk7W7mp5qLASjvlPH70is21Iqt8S97QRtyROudo0rutn5bU68tDPrSJGu98KVPfa7CZXCRi9l%2FCqgDmKiS7Z%2FhivwJK%2B5Xn69DT0QmLPDzYgwsTSbTVG%2BTjKH39BQVs8QfpTctnDl0J7ZePIV%2FfbO7FqWRxgj9i30%2FZMSBQWPvvdJ%2FzDDNRyIEDrG%2FQ7vpHEMd39sT4MJR48SeEymRxHR%2BLK2DqmH6dFmOXIxUPhIdK9fcnjRrl0Jhs3z8F1gK0T3AJZYFZjlnC3IXiEBl80e9g%2BKLTyvMV4xbtq%2BaUBMirE%2FCrywejj4tGULswSRc3jwmzLJX8JikMmg%2BpmSeFVbnE%2BhPHkPn3Em8so%2FqSsd9VZYF%2FZZyJzXlkhO93X%2BbyvmXmoi5I9nlCENMBu%2B1qNeEKYziAay9AAijMLY9DdVe52qMzi%2Bgp0myssdThzU5beahbPnrhbj7uVcQ%2FvOHrwOLb63kmLmTZgLrDz1niZ7z1GOV96Yv0fL7h6IPDajIIfxqO%2B7jVqMM%2BdvsAGOqUBkjrBkMFkyGtu3KIsL%2FfowuPnuMe5OitTsZhR6EtETSAoKOTSMDbEp2RbRYeepXaIleR8MFneLH0O4gQJFOM55tZuM9OKQeP0vgHmwVD62%2BtQVapLeyolRHwDat6Wy%2FyWlLjLKaeB2i632gPjWzCPYJdTBUR652HIhVJ%2F7wQFZl0KsoqMWZQ1O%2FsXfUHJFc46YUakPUYdA5vx%2BYsdb%2Fm8Is4hj6q8&X-Amz-Signature=6e19e4ae2ace55623d94045197fa8174dc8e8bb385ed1c36ea05c37ecd045b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDSKQGE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrRkjuQTXXP3U8XJNvDnCTgE026uTtbC5FsL5KkgDq%2BAIgRLFcDQhw%2BgroD0gyXfFwiEZ%2FaIJlWVCq402WbaySx0sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH1AWgFnlUfIrq9uVCrcA1VTW%2FlxKwcPiCDA6Pz9Fz1AofI0NA4Gr6Dn21Zg7ckvJJ6ne0vI0eFJD25%2FPWtFvwdsFrZagGVMD%2FlHCYDOky9RvbifIUGSV6Nst0feHM0WCTPdHTHAyk7W7mp5qLASjvlPH70is21Iqt8S97QRtyROudo0rutn5bU68tDPrSJGu98KVPfa7CZXCRi9l%2FCqgDmKiS7Z%2FhivwJK%2B5Xn69DT0QmLPDzYgwsTSbTVG%2BTjKH39BQVs8QfpTctnDl0J7ZePIV%2FfbO7FqWRxgj9i30%2FZMSBQWPvvdJ%2FzDDNRyIEDrG%2FQ7vpHEMd39sT4MJR48SeEymRxHR%2BLK2DqmH6dFmOXIxUPhIdK9fcnjRrl0Jhs3z8F1gK0T3AJZYFZjlnC3IXiEBl80e9g%2BKLTyvMV4xbtq%2BaUBMirE%2FCrywejj4tGULswSRc3jwmzLJX8JikMmg%2BpmSeFVbnE%2BhPHkPn3Em8so%2FqSsd9VZYF%2FZZyJzXlkhO93X%2BbyvmXmoi5I9nlCENMBu%2B1qNeEKYziAay9AAijMLY9DdVe52qMzi%2Bgp0myssdThzU5beahbPnrhbj7uVcQ%2FvOHrwOLb63kmLmTZgLrDz1niZ7z1GOV96Yv0fL7h6IPDajIIfxqO%2B7jVqMM%2BdvsAGOqUBkjrBkMFkyGtu3KIsL%2FfowuPnuMe5OitTsZhR6EtETSAoKOTSMDbEp2RbRYeepXaIleR8MFneLH0O4gQJFOM55tZuM9OKQeP0vgHmwVD62%2BtQVapLeyolRHwDat6Wy%2FyWlLjLKaeB2i632gPjWzCPYJdTBUR652HIhVJ%2F7wQFZl0KsoqMWZQ1O%2FsXfUHJFc46YUakPUYdA5vx%2BYsdb%2Fm8Is4hj6q8&X-Amz-Signature=2c0ed61550e5aa402bc0091315c8de295691a6963dc822b1151d07a08dd07f97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
