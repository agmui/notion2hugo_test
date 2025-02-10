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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVAPL6L%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5VVUB7ZQcTz8jb0lLCVcVsx02EAnmkiywmTb3%2BT%2FLigIgYbc08Vd1qJijBniE6GVinQeiKORVlRUa%2FQAF8Z5x4GQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcWufODjt3fdQGYJSrcAyuhMQtWoJyRUr%2BShqTVPWr86F3V%2BKM0X5F7REsY2pRMc8uGwv9A6FiiGeqnGVHKJGGTpjq0cMXJPxsGhyPJSn%2Ft19RKjl0oR7zUqdKfF508wjuxcb%2FwWVx22PEaRLGFbS5abPmFpER97U7Z7cS0wqOg2Uydy%2F%2FrFAMlZTt2wThDNVXHTu2YLD%2FTy7jCaKamjpqxWhhLgsmnGXX%2FIkZmWtuIYSZL8%2FUAjgUaMG%2FYquFiLtbm%2BC%2FoYXvSkfoH8m19iHihYt2VSNySImCC%2Boy1vYe2eL%2BOH3s3K%2BOU1BSjvoEfBtij6xlLwgBfdKoI7CKiZvUXc3TDY2hWRYWEe6%2BDmV2qW8IcEx60rOHKRczeh%2FDXAJDspSAQjf3yF1HAaMfjJ88cTbev9O7optehy07njxhckZGnwbzw0PvG%2FIBjMkdw%2FPbOKAPfifqH6u34UX8DqPLZga0BRPPZxB8NVBAHdeU4E6w2oiLigHAqi8Jy3XE2SWmeNT0NtCQC1mjZ1yw3Chg9z1omc74QMHuWuUijYVeDB6bLRuozXaPiuvm3i%2BKoTNfH2U9b1R1KOFlv1cZoWdFTcGzF65SqJMonz6LTB%2FiyufsmjNRvwNnRzqjpWA2N5rmA%2BopdTAaAK195MKmcpb0GOqUBBZUP0by41orml2yVGUyqTlA3vR76qRUmDE15bSIhANBalUjArBZ8bJKGgJLx3N45417U3fZ5E3cD3SSL%2BbpMsaXCleFaxfVtWPDkNQfbHuGdfApeGLuINIWDiL3E37XF%2Fk9x8eJPKPNPpN4wn0V7Wu04IihQcwRF5ClBYoRQ7ZEXoYx5Q%2F%2BHLpppet1Pf3my%2FbwMd6jwKv5FXuuuslq9ZN2YpVj2&X-Amz-Signature=1225707f9af41f5e7e2e0c2a45501a852eba96a33f57f5414c06277ed86019d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVAPL6L%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5VVUB7ZQcTz8jb0lLCVcVsx02EAnmkiywmTb3%2BT%2FLigIgYbc08Vd1qJijBniE6GVinQeiKORVlRUa%2FQAF8Z5x4GQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcWufODjt3fdQGYJSrcAyuhMQtWoJyRUr%2BShqTVPWr86F3V%2BKM0X5F7REsY2pRMc8uGwv9A6FiiGeqnGVHKJGGTpjq0cMXJPxsGhyPJSn%2Ft19RKjl0oR7zUqdKfF508wjuxcb%2FwWVx22PEaRLGFbS5abPmFpER97U7Z7cS0wqOg2Uydy%2F%2FrFAMlZTt2wThDNVXHTu2YLD%2FTy7jCaKamjpqxWhhLgsmnGXX%2FIkZmWtuIYSZL8%2FUAjgUaMG%2FYquFiLtbm%2BC%2FoYXvSkfoH8m19iHihYt2VSNySImCC%2Boy1vYe2eL%2BOH3s3K%2BOU1BSjvoEfBtij6xlLwgBfdKoI7CKiZvUXc3TDY2hWRYWEe6%2BDmV2qW8IcEx60rOHKRczeh%2FDXAJDspSAQjf3yF1HAaMfjJ88cTbev9O7optehy07njxhckZGnwbzw0PvG%2FIBjMkdw%2FPbOKAPfifqH6u34UX8DqPLZga0BRPPZxB8NVBAHdeU4E6w2oiLigHAqi8Jy3XE2SWmeNT0NtCQC1mjZ1yw3Chg9z1omc74QMHuWuUijYVeDB6bLRuozXaPiuvm3i%2BKoTNfH2U9b1R1KOFlv1cZoWdFTcGzF65SqJMonz6LTB%2FiyufsmjNRvwNnRzqjpWA2N5rmA%2BopdTAaAK195MKmcpb0GOqUBBZUP0by41orml2yVGUyqTlA3vR76qRUmDE15bSIhANBalUjArBZ8bJKGgJLx3N45417U3fZ5E3cD3SSL%2BbpMsaXCleFaxfVtWPDkNQfbHuGdfApeGLuINIWDiL3E37XF%2Fk9x8eJPKPNPpN4wn0V7Wu04IihQcwRF5ClBYoRQ7ZEXoYx5Q%2F%2BHLpppet1Pf3my%2FbwMd6jwKv5FXuuuslq9ZN2YpVj2&X-Amz-Signature=f31340b8070f33d55c5e1a3e23e7b4f2fbf39734a48ec2b0f1b8ed45d258942c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
