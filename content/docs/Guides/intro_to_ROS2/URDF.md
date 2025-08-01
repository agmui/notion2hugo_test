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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUFB6JV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMFhcrB5YC6l1vgqkZn7TpnvnuUx%2BiMgimRyu8wVDGaQIgB1lk%2Fltmm3wKJ9oSIwQYthdDsUfWYh3Bf%2BCPyfwngeIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOLB25W%2FeKYYdWIAircA%2BIiCzLDETGUuCfT7AX%2BXmT3Fd6GWbm%2BTfUboMwp52TrVT2LP0jdpIywMFCQldIoNuBVlpnBwn1ecxuEDyoSePPG59gRu845HmbCJLRccQmBEoD%2FUsTNKUr4KxDhLcBT6W%2FYWBHtOMnGQ2NEE7rdNqTkO%2FKZi1asSeXTTfBvWLbLOH%2FxuSY7v3qtRSViTUDXpbwlpWpVDBjKDrnwR2cyoDydFLSoL8JhRjXDiMSthg6nYe0iyvrDdbIZa8AKdffBvJzUIKGk73bOmNZNbzcUuAMUofPREK61NHOQJTYmF136pn3Xe4P%2FpY%2F2cby%2FlDzXCmaojnYjHm2kK4dj2lCPzeLN6WIrPVfuTjjNuvfjXmSb%2B0lNg0%2BWk44E6CXiPDrfEijSHvss%2BCPxQecrcFBXae7PgDJr%2FwaK4BIalTfBsbJNVlNGmB4wl%2FYTl8rPgT3vH%2FEdD1%2Bbt8hjjQJzOC9ervBf9bebWi6a64FbGpVL1LzaUPmZs8s1uJYo47bLPaFZVnZTdTPN1H8AekHf8CblcYrsMHxUOA%2FE5Nn8vr%2FL23e7cR5unqsVF6c8%2B7ix%2Fy7oDuyh8%2FsyvAhHxIoHhn1PLYgE7OgJHiGB7UtYyVejbbMIocuBRTdb3ofsm6dWMPC%2FscQGOqUBH9wG19AKWgPLj3zPZeC7tTduUoY%2BIXje8Iw9tRAlEP9vxQucUCh6VNThCv8b5vivCsWXu9o6bm4u6aDmbNbVNYKnn2%2FFqiseyK%2BQyifSYQ%2BnNV4wz90PAPUzfjgkIkScCFvklE%2BLE9ek374mCJoIZZSKiB1%2Fo1Rsmq1j95%2BgpcKCCK7yVk4Gs4D%2FBLbLINPz2Nte17%2Fwo5B5Fntey2YLjyIaEeX6&X-Amz-Signature=6f398163bf9d2b05c61aabec2a9bdf3b183926d655c7ff799e347ff9af95f240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUFB6JV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMFhcrB5YC6l1vgqkZn7TpnvnuUx%2BiMgimRyu8wVDGaQIgB1lk%2Fltmm3wKJ9oSIwQYthdDsUfWYh3Bf%2BCPyfwngeIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOLB25W%2FeKYYdWIAircA%2BIiCzLDETGUuCfT7AX%2BXmT3Fd6GWbm%2BTfUboMwp52TrVT2LP0jdpIywMFCQldIoNuBVlpnBwn1ecxuEDyoSePPG59gRu845HmbCJLRccQmBEoD%2FUsTNKUr4KxDhLcBT6W%2FYWBHtOMnGQ2NEE7rdNqTkO%2FKZi1asSeXTTfBvWLbLOH%2FxuSY7v3qtRSViTUDXpbwlpWpVDBjKDrnwR2cyoDydFLSoL8JhRjXDiMSthg6nYe0iyvrDdbIZa8AKdffBvJzUIKGk73bOmNZNbzcUuAMUofPREK61NHOQJTYmF136pn3Xe4P%2FpY%2F2cby%2FlDzXCmaojnYjHm2kK4dj2lCPzeLN6WIrPVfuTjjNuvfjXmSb%2B0lNg0%2BWk44E6CXiPDrfEijSHvss%2BCPxQecrcFBXae7PgDJr%2FwaK4BIalTfBsbJNVlNGmB4wl%2FYTl8rPgT3vH%2FEdD1%2Bbt8hjjQJzOC9ervBf9bebWi6a64FbGpVL1LzaUPmZs8s1uJYo47bLPaFZVnZTdTPN1H8AekHf8CblcYrsMHxUOA%2FE5Nn8vr%2FL23e7cR5unqsVF6c8%2B7ix%2Fy7oDuyh8%2FsyvAhHxIoHhn1PLYgE7OgJHiGB7UtYyVejbbMIocuBRTdb3ofsm6dWMPC%2FscQGOqUBH9wG19AKWgPLj3zPZeC7tTduUoY%2BIXje8Iw9tRAlEP9vxQucUCh6VNThCv8b5vivCsWXu9o6bm4u6aDmbNbVNYKnn2%2FFqiseyK%2BQyifSYQ%2BnNV4wz90PAPUzfjgkIkScCFvklE%2BLE9ek374mCJoIZZSKiB1%2Fo1Rsmq1j95%2BgpcKCCK7yVk4Gs4D%2FBLbLINPz2Nte17%2Fwo5B5Fntey2YLjyIaEeX6&X-Amz-Signature=10a288d4bb6f65135dff43934b5ae8499665d8184b6700e4113a68af9995bceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
