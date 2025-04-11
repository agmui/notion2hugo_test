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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARVYWE6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCN4mF9N0%2FQDcda%2FL%2F5Lcd0zQz6iRaXcTA%2FxLaz7cpPeAIgPopJcHq6INbAs1eM0gDe2RMfG%2Bb0PM97VzE6U%2F55r3IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2FKd00c3Cq3HIHNyrcA%2FxO0uHigOeJymSNzKq%2Bh79ox5iLO3SQsn1S6%2FZvCA4Dmq7vXo5R4WmxomiehThfVjfBy9HLqqTL0FKZYJwbrEDklXrM2afdlJWa6f0OMhCk1kDg65viQL3voZNhmis9jrtv8HW228EJOxFJ6ojmsySx4zowkV0OIFuyKkXCRa5dQkjUz8dCUqkCALRwbi4dOfQaO2RMraJxz6w8Nt7psuFOB%2B9TaDVUOIbmwWOGPfgsDo2EFGkrby4%2FPUBQshdyu2nVVGUrJJgc%2Bkl5ZR%2FMmP2ECvk6rFIZn031ydbG4dvitONJU4%2FyFG%2FPu%2B3XRi3DSRXXzJ4PDrJMUWfCJzErG54pz3WHQcZZJ5CQQc0N8xTwsBFZmU4IBZEEzxO0EDsIcM4BtFmhje4FFvRRU9yon0bojq1f2aPMXNMwDM5USM%2Be3WrzGb3bOKYYBfL06CDbH6D9Aqz9N3dUr0VzHOxwRIEg9aVJHteziDiFMTxWUOJQh%2FI1FxOfSLjSvDQhgIn62pYdf26hzKcgqyQXiOBQG305wkmcfIPra4LHD3V6OSj7CgLeZm%2BQ%2Bd50St7OMykzIU4p4uvQaVpxPucapX2zMoQMNIZlo%2FhPX1t9V9tes%2BWYT5lqaltDTB0eRDIeMI6M5b8GOqUBGourd7uyp6BbWGdbX25qnmWi3UwRQedTxFAX17C%2BbHKwDVFblZ9EL76WNisOhHliLVBCyQ6PJGK5wLB9k0DuF6oJONVAbWFe2BhBupqm85u4CMHQEtHJSjjLSBQQ1p0AbxujsvyH%2BMizp8X%2BWImd%2BOM07M2ONJ2bH9T53EP4ft8rB42PaOlcVbfF51OObFGmBHRAsPQa3Vev6Y%2FIZb0%2BgFHYugRy&X-Amz-Signature=d9669d0631329d4f84bcb6be1d21372a3767bfe71e2ab183ed9735e8d8bc8af1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARVYWE6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCN4mF9N0%2FQDcda%2FL%2F5Lcd0zQz6iRaXcTA%2FxLaz7cpPeAIgPopJcHq6INbAs1eM0gDe2RMfG%2Bb0PM97VzE6U%2F55r3IqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu%2FKd00c3Cq3HIHNyrcA%2FxO0uHigOeJymSNzKq%2Bh79ox5iLO3SQsn1S6%2FZvCA4Dmq7vXo5R4WmxomiehThfVjfBy9HLqqTL0FKZYJwbrEDklXrM2afdlJWa6f0OMhCk1kDg65viQL3voZNhmis9jrtv8HW228EJOxFJ6ojmsySx4zowkV0OIFuyKkXCRa5dQkjUz8dCUqkCALRwbi4dOfQaO2RMraJxz6w8Nt7psuFOB%2B9TaDVUOIbmwWOGPfgsDo2EFGkrby4%2FPUBQshdyu2nVVGUrJJgc%2Bkl5ZR%2FMmP2ECvk6rFIZn031ydbG4dvitONJU4%2FyFG%2FPu%2B3XRi3DSRXXzJ4PDrJMUWfCJzErG54pz3WHQcZZJ5CQQc0N8xTwsBFZmU4IBZEEzxO0EDsIcM4BtFmhje4FFvRRU9yon0bojq1f2aPMXNMwDM5USM%2Be3WrzGb3bOKYYBfL06CDbH6D9Aqz9N3dUr0VzHOxwRIEg9aVJHteziDiFMTxWUOJQh%2FI1FxOfSLjSvDQhgIn62pYdf26hzKcgqyQXiOBQG305wkmcfIPra4LHD3V6OSj7CgLeZm%2BQ%2Bd50St7OMykzIU4p4uvQaVpxPucapX2zMoQMNIZlo%2FhPX1t9V9tes%2BWYT5lqaltDTB0eRDIeMI6M5b8GOqUBGourd7uyp6BbWGdbX25qnmWi3UwRQedTxFAX17C%2BbHKwDVFblZ9EL76WNisOhHliLVBCyQ6PJGK5wLB9k0DuF6oJONVAbWFe2BhBupqm85u4CMHQEtHJSjjLSBQQ1p0AbxujsvyH%2BMizp8X%2BWImd%2BOM07M2ONJ2bH9T53EP4ft8rB42PaOlcVbfF51OObFGmBHRAsPQa3Vev6Y%2FIZb0%2BgFHYugRy&X-Amz-Signature=d94266c073143d80fc5cc6afcfb185832c1a52ce89918e8d72cea3d1dd677420&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
