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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVVLAIH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBihbR1O6upWOSoo5JjaCjBNrjGsqsTRiL7fLtsesB9AIgfsje1GsJvCExyA381ed%2BhPHdedWQuyu5ximk80ZtVBUq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPaV9goWqehVXhjY7ircA9zBG8ZFsyovZVBn28%2FG98nXVnwynwUZz%2FEXDz9l2Qg0m%2BbnnxkcSq1c%2B%2BHE3z3M0Px6NNACpgSpzxG80NJzLNUzkTlx3Ampm6Rj73ObPdurk2qTWfUrkfs3YGYQlIWtswDtA7lgpF7SNe2M%2FBYNAs4UP6MjMuW9w3uXtuFpTm0elbnM3T%2BXtv9%2FmAv2ddRcpLzHwiIDiUyE8cmTCqEld1gW0cpiHXVnmJitUITkBsCOoFnVehpES3Bjs724%2F77B3DWdQEWhx086aOeI4lQnzkU%2FDtNk7a0sADYH3pgAaCS7zy7SLaHQsbxKsAVKfYZMLQAaBFmhOcuOczwJfYQCdLeTLO8tCZc7yEOaSsiImErWNoZYjXt%2BdIeD91r2mhEyVUyBaDTDJbULDdV2NKvcnGAkvEAubuJctkENr0oRx5OjEm5B0DskHCCsX6ppLBLdxB9T49Hz0Q%2BJgbxQfPsvQG7v5D%2FT1TfCJqoURJfKWC1d4eFHkWwrjFV6KkRfSDE9ldr7VOIBu0ve37ke2VAvTCruFcucofS8ti2S6mj7ctZL2DbrGTiIFWk1YDBEaxeT9ly2L0ZYjZvPI4FdUnECuyWH1d1PS%2Bdw9PyrqJ1hXtvT0kBj9dpsNR7vgr3uMIOfuL0GOqUB6nzBKT%2BfLIdyitACR8P5os39cjID6icjm1L9R54R2T0Q%2BkyMg7yFtiyyRaN%2FXE0fjA8SdYZ0iVE1YMviDu%2BUugUfneD63%2BEGkFZ%2BlNRceEi0ZIEdRcaQbuhoDnDRas0aLp3a43aL%2BhBLOsWw9HIrMHw1rJz406gy9ns5NPEOCGHyx1WecO93hcwKcZPESfSoqnQYow810iMd%2Bq7%2FzkU%2F1xy7qoO9&X-Amz-Signature=667d0b1bb101be5c398f78768e04136101b989f8d1547a0221ea88c47dd27bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CVVLAIH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBihbR1O6upWOSoo5JjaCjBNrjGsqsTRiL7fLtsesB9AIgfsje1GsJvCExyA381ed%2BhPHdedWQuyu5ximk80ZtVBUq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPaV9goWqehVXhjY7ircA9zBG8ZFsyovZVBn28%2FG98nXVnwynwUZz%2FEXDz9l2Qg0m%2BbnnxkcSq1c%2B%2BHE3z3M0Px6NNACpgSpzxG80NJzLNUzkTlx3Ampm6Rj73ObPdurk2qTWfUrkfs3YGYQlIWtswDtA7lgpF7SNe2M%2FBYNAs4UP6MjMuW9w3uXtuFpTm0elbnM3T%2BXtv9%2FmAv2ddRcpLzHwiIDiUyE8cmTCqEld1gW0cpiHXVnmJitUITkBsCOoFnVehpES3Bjs724%2F77B3DWdQEWhx086aOeI4lQnzkU%2FDtNk7a0sADYH3pgAaCS7zy7SLaHQsbxKsAVKfYZMLQAaBFmhOcuOczwJfYQCdLeTLO8tCZc7yEOaSsiImErWNoZYjXt%2BdIeD91r2mhEyVUyBaDTDJbULDdV2NKvcnGAkvEAubuJctkENr0oRx5OjEm5B0DskHCCsX6ppLBLdxB9T49Hz0Q%2BJgbxQfPsvQG7v5D%2FT1TfCJqoURJfKWC1d4eFHkWwrjFV6KkRfSDE9ldr7VOIBu0ve37ke2VAvTCruFcucofS8ti2S6mj7ctZL2DbrGTiIFWk1YDBEaxeT9ly2L0ZYjZvPI4FdUnECuyWH1d1PS%2Bdw9PyrqJ1hXtvT0kBj9dpsNR7vgr3uMIOfuL0GOqUB6nzBKT%2BfLIdyitACR8P5os39cjID6icjm1L9R54R2T0Q%2BkyMg7yFtiyyRaN%2FXE0fjA8SdYZ0iVE1YMviDu%2BUugUfneD63%2BEGkFZ%2BlNRceEi0ZIEdRcaQbuhoDnDRas0aLp3a43aL%2BhBLOsWw9HIrMHw1rJz406gy9ns5NPEOCGHyx1WecO93hcwKcZPESfSoqnQYow810iMd%2Bq7%2FzkU%2F1xy7qoO9&X-Amz-Signature=cbdcf61068b40e8db3fed159cc29d78c1def5a98d454686819fd0184f1e34462&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
