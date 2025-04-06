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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMV2KM3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1HBb4eGgpLL1t1%2FDtVvJMhwBRG%2FQAMZX7lSmoRbsTKAIgEpFyRgccX88991zFrF3X7j9zSlgxLCOjEZPPwIm0U6gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF5945qVA%2B4daAOm4yrcA1jmXtteqi46x%2BQbPFs1nu%2BDT8kmfj4JpC%2FE%2FS5hx4NbIpwKkVKEvHHsKgBCizQ9fhQ3VmBTaSAU6TAhKyJKeuU4WmMvTeCHpyDggnynOTRIwTDmt2%2BYHzaMc9fuv0S9JMMaFK4LjIVkFMOLsnCWaUYlK8w29upcwjVaHxqvzCfc0KFybQIZdrXZmvBZzj6dvNHddGWBcsHZ4%2FX%2FPR4DN9MqGRNEWK6ln4B%2Bqvcd4r95ANyyfg6tKb4I8pT557DfcJrCQXap3whVFt7HPi%2BBCJNY8xtIwKLWJnAQl6d2u15xaeXrW%2BJDsLRibOzQM4xtJ1xUSdo%2FwuCXY2U%2FJ4BJKWFAFxkT5N1%2Btbfm2abnDExrP%2FTvStKZC5QvMr%2BdbHeE3HtPsclxIgej%2B%2BsDgG3LL%2FlRnaZk9o5QxQ4fM1lUasw%2F2Kq%2BzOWlxz%2FA1haEhZIEu%2BcArmi05JsKyaVjbU3sOgirMOc6WAipNxUeRFKVNNb5Kz%2FmptO%2FaccAUhbV4gDMk07%2BNSGG5X2UxjpuMFzTAuv0M6pIrDr2Hgyx6HHiOeWf3sqt78PXlPsMa3ZurQW9lA%2FQdCRX1L4cINApoOVnhRR1hBhxuaNWNUxLsubSgiTMswhdxFVu%2BJihWZTpMOTDxr8GOqUBrDiB%2Bn5hB3x1U5A%2F8Ph%2Bsg4tMCfvKWwafxZo34PuQDneUiumODZPxWDdhKhBz3M%2FeQXgyzoFdN9z059Zu3MzPD2pzoW6teDA7Z%2FZl1n4CqpIV98AGiMLqdtwyzsEF%2FXys7vLDrk0YLQ2lbNo9AuFiXNyATjTf2fpFy5pIf7dh7dDSXZvQKAt0cQTGaoeYpvv60sBxBPsu5%2B%2BQkVBCUBRfsNjtMq2&X-Amz-Signature=f44c20a2c3f7990c29b2dfc770d8f0df55c779bc9d3b01edc83724c178272b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZMV2KM3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1HBb4eGgpLL1t1%2FDtVvJMhwBRG%2FQAMZX7lSmoRbsTKAIgEpFyRgccX88991zFrF3X7j9zSlgxLCOjEZPPwIm0U6gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF5945qVA%2B4daAOm4yrcA1jmXtteqi46x%2BQbPFs1nu%2BDT8kmfj4JpC%2FE%2FS5hx4NbIpwKkVKEvHHsKgBCizQ9fhQ3VmBTaSAU6TAhKyJKeuU4WmMvTeCHpyDggnynOTRIwTDmt2%2BYHzaMc9fuv0S9JMMaFK4LjIVkFMOLsnCWaUYlK8w29upcwjVaHxqvzCfc0KFybQIZdrXZmvBZzj6dvNHddGWBcsHZ4%2FX%2FPR4DN9MqGRNEWK6ln4B%2Bqvcd4r95ANyyfg6tKb4I8pT557DfcJrCQXap3whVFt7HPi%2BBCJNY8xtIwKLWJnAQl6d2u15xaeXrW%2BJDsLRibOzQM4xtJ1xUSdo%2FwuCXY2U%2FJ4BJKWFAFxkT5N1%2Btbfm2abnDExrP%2FTvStKZC5QvMr%2BdbHeE3HtPsclxIgej%2B%2BsDgG3LL%2FlRnaZk9o5QxQ4fM1lUasw%2F2Kq%2BzOWlxz%2FA1haEhZIEu%2BcArmi05JsKyaVjbU3sOgirMOc6WAipNxUeRFKVNNb5Kz%2FmptO%2FaccAUhbV4gDMk07%2BNSGG5X2UxjpuMFzTAuv0M6pIrDr2Hgyx6HHiOeWf3sqt78PXlPsMa3ZurQW9lA%2FQdCRX1L4cINApoOVnhRR1hBhxuaNWNUxLsubSgiTMswhdxFVu%2BJihWZTpMOTDxr8GOqUBrDiB%2Bn5hB3x1U5A%2F8Ph%2Bsg4tMCfvKWwafxZo34PuQDneUiumODZPxWDdhKhBz3M%2FeQXgyzoFdN9z059Zu3MzPD2pzoW6teDA7Z%2FZl1n4CqpIV98AGiMLqdtwyzsEF%2FXys7vLDrk0YLQ2lbNo9AuFiXNyATjTf2fpFy5pIf7dh7dDSXZvQKAt0cQTGaoeYpvv60sBxBPsu5%2B%2BQkVBCUBRfsNjtMq2&X-Amz-Signature=a98ecc801169ee6efc9bcaf2e2420b3b16ec05d23a6049353ed497a6287e0d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
