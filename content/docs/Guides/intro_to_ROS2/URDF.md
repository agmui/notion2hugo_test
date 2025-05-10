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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMFGJYS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7spJc145vta874gI7Qwd2%2BHzUMG2jc2zn%2BkOMZstiCgIgLtHBkQW7fH23Sqd7VG62ii6rsRKQ%2FFD1pIdWfbe0vtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpSnQG7%2Bcv6L%2FzDvircA%2FR2h0eVr4RAD8tBhgHmgcCexan2ouWDqBWpI8I9dsWxPOX4IlFamCG%2FZDx7zu7xSv3xpPcWoYX3nzkT34FUqF%2FacRB1fKHof1kylN0B4u%2FDFvogRwpAXDSNtf%2Fut1mpmKHlJtER4KpesNwdLpci%2BiT5bqARqYd50Y0NfWXJVmr%2BTt%2B5TsVivLWh5XUiuZ%2FdEusEmRywiE6iFlxIO4CO1o1QClU2l0dJQxJs1OywKmGdr%2BzoWC59ym%2FSwH87XlZgbBh5bbOU%2BekVuKPicN1HW7WhlPt%2FlBEr0O00o3B3IVSX4ki8lA2EFtaYrI7tY9odQpuHbSo%2FiLKTku3LZnyRhaYCRoBodCdO1a7QhyHrAZ%2BmRGYHDdS7eGrPcjxUYlHT2aFv%2BakFXsLIetoxgmO3hs4MKOkNy1mXDey978cdC60Gy7bfflCho7tGXECX9MvBGfIeroDmK2dovyhKgqWh8dBKU12EsCeQEf0PgCiUEVm1NHngtOa%2BI6OEY%2FrOs8pGijoc5cwLoyQb8g%2BmSoerj1P2gpGmNkpcmZxVkJ5KWkT24U2jmAaZjtYmCDcH1o7dZM3AKtoSX3pR6Y9ueVY6K6n7bQBi9rtOK9KCFgNacAWyzw%2B09mA6QFqusLV5MNWi%2FcAGOqUBEvH9gj3GM62%2Bl%2Bi4rFHEJaVSzr1oCQXMyJvB64SPVnxQX2mm0%2Bcsr4Mr6e0g3Xsigp76QEPPb%2FPzSm5lzw4EZiz1k7QtnI1%2F2czDi3HjA2Edol%2F7CJsVZE1NPOgv4Gy39iItpQa1J3OGgF9%2FRG5j05Zk6i1pwBRBaz3AbZ8xO7XwrJk%2FfBdKAVBsH4rOzcNnxdspZuSfdmWJG824%2FI6KPct8UISZ&X-Amz-Signature=c84a2b0153b8fe664c0e4477b39b8303d93c962192ab421ca593e4e13757cfda&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMFGJYS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7spJc145vta874gI7Qwd2%2BHzUMG2jc2zn%2BkOMZstiCgIgLtHBkQW7fH23Sqd7VG62ii6rsRKQ%2FFD1pIdWfbe0vtkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpSnQG7%2Bcv6L%2FzDvircA%2FR2h0eVr4RAD8tBhgHmgcCexan2ouWDqBWpI8I9dsWxPOX4IlFamCG%2FZDx7zu7xSv3xpPcWoYX3nzkT34FUqF%2FacRB1fKHof1kylN0B4u%2FDFvogRwpAXDSNtf%2Fut1mpmKHlJtER4KpesNwdLpci%2BiT5bqARqYd50Y0NfWXJVmr%2BTt%2B5TsVivLWh5XUiuZ%2FdEusEmRywiE6iFlxIO4CO1o1QClU2l0dJQxJs1OywKmGdr%2BzoWC59ym%2FSwH87XlZgbBh5bbOU%2BekVuKPicN1HW7WhlPt%2FlBEr0O00o3B3IVSX4ki8lA2EFtaYrI7tY9odQpuHbSo%2FiLKTku3LZnyRhaYCRoBodCdO1a7QhyHrAZ%2BmRGYHDdS7eGrPcjxUYlHT2aFv%2BakFXsLIetoxgmO3hs4MKOkNy1mXDey978cdC60Gy7bfflCho7tGXECX9MvBGfIeroDmK2dovyhKgqWh8dBKU12EsCeQEf0PgCiUEVm1NHngtOa%2BI6OEY%2FrOs8pGijoc5cwLoyQb8g%2BmSoerj1P2gpGmNkpcmZxVkJ5KWkT24U2jmAaZjtYmCDcH1o7dZM3AKtoSX3pR6Y9ueVY6K6n7bQBi9rtOK9KCFgNacAWyzw%2B09mA6QFqusLV5MNWi%2FcAGOqUBEvH9gj3GM62%2Bl%2Bi4rFHEJaVSzr1oCQXMyJvB64SPVnxQX2mm0%2Bcsr4Mr6e0g3Xsigp76QEPPb%2FPzSm5lzw4EZiz1k7QtnI1%2F2czDi3HjA2Edol%2F7CJsVZE1NPOgv4Gy39iItpQa1J3OGgF9%2FRG5j05Zk6i1pwBRBaz3AbZ8xO7XwrJk%2FfBdKAVBsH4rOzcNnxdspZuSfdmWJG824%2FI6KPct8UISZ&X-Amz-Signature=bf24f87c9ea48584b2348963c2faaddb7b4c04cabf956a224c9a9f2ce8a6eee7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
