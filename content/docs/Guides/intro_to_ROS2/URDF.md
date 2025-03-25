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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWX7QUH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBssN23QxDj7es8wqdHjw9EuOaFmSGaeNNG7zLhYEtAPAiEAm2v%2F09VqAT9ieqI82UqmkdE1ZwhUmWCwZK6NgteRdTYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgRPwAKfZeIhlZYTSrcA5spo2qi4ngCgtqXwpCbzugV7USE7zaTAwiE4A8lPVEUEyUyHHScTqEnuaQ2eUsz0Qf8T1XI%2B%2FvCjM%2BT0kxsWkq9H40B1W572JPtIZmDwSh2Xw%2FYMungEAHMwCNT5XhWc%2BOMOmrN1UWJtcmF%2BI0gJUkS18TwRtgb%2FpUC%2BA5X10GfhZJNdFo3QHUObkGXq0hVimwYYBH8F1flwDCYZJI3ngYRbE%2BKcWL1sLa1iQA2dn2AJDCwcFkfapeqQUtSOuLtaWeWDsoj0num6YGy2Z4WZggP%2B5Z%2FC3TKAAbHyB%2F1UqIyu4NB0SEeUpGn%2FDEEnRmHShgW%2FGpLpgr7lQXpVNX%2BWNy%2FziSsDVFm2PSgGXMix%2FIvSK9Y5pTUwFooxo2MKoQbgT%2FcsTw0NHYsh5ymV2sni0RD8sBp3KOFuBimCL2EUS6%2B9UAIdzzly1sVw1HazwD0LDCbyrhHySjcERZZByzSNuHXt%2FmcFBJEoIB4Zob7%2Bca5XznZXkGhHkCHdOtcjkcu9Go5zEPK08E%2FF1G%2B6PvXyvazAXWv1TOKZgLayTMUgGm%2BR0QYDacICod%2FSPSSaKs3rr95U3ITakDY%2FFmvkbK07JPpdzm4U3ql%2BRtgx4253GgbfUvc%2BWoHbTn303lMMPKNib8GOqUBTtz4ZX%2BoXv9OYrLpxWNdutahwQ7l0YOkuwemoTJe46ysAZ%2FAxlDPdwoShGdGjfvPXJpWlSjojSCohb7GpH8mEPvPS9C4qLANct%2FZZuIzIkTLo5hTaA6Kjgkf6I7F5P1ZHewqeHgDBvdnGn%2F6kgdhyZ4vSHMURSOZjnjHAr8fPSTubJ2LRbRpAxiB4V6s4Rb07yGMiFeIYB0QR3mWG9Nkro8ELJay&X-Amz-Signature=289631291f45732ed07d34d7e7139c0b614571a9e8f615cb99a625c814f7f9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWX7QUH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBssN23QxDj7es8wqdHjw9EuOaFmSGaeNNG7zLhYEtAPAiEAm2v%2F09VqAT9ieqI82UqmkdE1ZwhUmWCwZK6NgteRdTYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgRPwAKfZeIhlZYTSrcA5spo2qi4ngCgtqXwpCbzugV7USE7zaTAwiE4A8lPVEUEyUyHHScTqEnuaQ2eUsz0Qf8T1XI%2B%2FvCjM%2BT0kxsWkq9H40B1W572JPtIZmDwSh2Xw%2FYMungEAHMwCNT5XhWc%2BOMOmrN1UWJtcmF%2BI0gJUkS18TwRtgb%2FpUC%2BA5X10GfhZJNdFo3QHUObkGXq0hVimwYYBH8F1flwDCYZJI3ngYRbE%2BKcWL1sLa1iQA2dn2AJDCwcFkfapeqQUtSOuLtaWeWDsoj0num6YGy2Z4WZggP%2B5Z%2FC3TKAAbHyB%2F1UqIyu4NB0SEeUpGn%2FDEEnRmHShgW%2FGpLpgr7lQXpVNX%2BWNy%2FziSsDVFm2PSgGXMix%2FIvSK9Y5pTUwFooxo2MKoQbgT%2FcsTw0NHYsh5ymV2sni0RD8sBp3KOFuBimCL2EUS6%2B9UAIdzzly1sVw1HazwD0LDCbyrhHySjcERZZByzSNuHXt%2FmcFBJEoIB4Zob7%2Bca5XznZXkGhHkCHdOtcjkcu9Go5zEPK08E%2FF1G%2B6PvXyvazAXWv1TOKZgLayTMUgGm%2BR0QYDacICod%2FSPSSaKs3rr95U3ITakDY%2FFmvkbK07JPpdzm4U3ql%2BRtgx4253GgbfUvc%2BWoHbTn303lMMPKNib8GOqUBTtz4ZX%2BoXv9OYrLpxWNdutahwQ7l0YOkuwemoTJe46ysAZ%2FAxlDPdwoShGdGjfvPXJpWlSjojSCohb7GpH8mEPvPS9C4qLANct%2FZZuIzIkTLo5hTaA6Kjgkf6I7F5P1ZHewqeHgDBvdnGn%2F6kgdhyZ4vSHMURSOZjnjHAr8fPSTubJ2LRbRpAxiB4V6s4Rb07yGMiFeIYB0QR3mWG9Nkro8ELJay&X-Amz-Signature=0d0984269abf6bdd47d1fd9902dc3c9b24df5daf8f924a139ecbc30dccfd3de4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
