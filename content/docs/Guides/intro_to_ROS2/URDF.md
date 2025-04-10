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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZXJZ2XF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCZai2E%2BnsYINvKPHtixKg3GOb1On9hqLFpoXvvDMMUHwIgaWCVKL4EkqBhuGOkHYlWuI3y%2FP21qS0m7nPuaDvRoBUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4xwNPhWk1mW8EgtCrcA1QFOdUfBY4cpn6%2Fd4DSgv8KDsssr0u0sqiHzG4uzBxrxxBhDinh8RV2RCTcKak7SnuYuYKVPVb3E0TxbjA%2FjbFkhd3TMu5YlKYh4YU%2Bh%2B3cjc6v9N8LwJxP8dQYEgzUvdYNnCnPq58RicuhdEdG7iFKEz5sb8kk81kkOievZgVmzfcR87tE06PdJpwWrLz%2F9ORZYsinsfmXFaR%2BVnHjch8bEDEDllQZ6sZf%2Bt2JkHRRXnBCWmEQOUOCSn1yHVtdXMA7EYjLWHQt5FHzbzTkawFSorcESYCMl0Qrd9ffJVMtYyavM4Yi38iy1klPD8IhLc4vTsQOdjv88vj7nff53%2BAr1otFQpzCV7tKqXqkTSC%2FWST81UTSOkopVcbi%2Fls%2FuG%2Bzt4SVPW7EzdTPCwni90DDzVFiIFIxQ3fYQDOpqteY8ApD9vq7BXClJIqiTIqQYpOOzGtDJrgDTa6QCnY7DSTVq9QA41IQQGtSQnxScyYKy%2FVHUZ0X5SgrOvDCIVFmVuBnjH4mVGONc4owTxBV9GdgX4cr9O%2Fx2YKvrlxmJRKbxsCL0sIY6Ro3fEF0IdRD%2Fy3ddTMgP%2B5vUGM530iwO4MKy8tBuGJO1gOBXVjEcvKLsByyHXT1jaFHlcbGMOjr3r8GOqUB99Rpa9NYouXaueJ9XYv4SYZk5i3l9T0ezp0%2BQhCgs6p1rs28dcAkB3WstnEj4H%2BhKmH39XFW6lQYrYy8US3ErTo%2FTP6cqEOXdG2kxGKWIWbjeUrqLp%2Fqs8yTXMHvJdITTRyjMQsLSVO3RunvlrqkJlg0tHXGRt9%2FU4QRNmwdEUFa%2FKTDpG5jeQo6A7KMPsVXYk%2FH21b3PSx3h1t3R2Byxh7jwM8D&X-Amz-Signature=c3dbce49fe5956a66b8c35cf06cc3a55bdadc92f23b7c6b8fb4342cd4e6a117d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZXJZ2XF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCZai2E%2BnsYINvKPHtixKg3GOb1On9hqLFpoXvvDMMUHwIgaWCVKL4EkqBhuGOkHYlWuI3y%2FP21qS0m7nPuaDvRoBUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4xwNPhWk1mW8EgtCrcA1QFOdUfBY4cpn6%2Fd4DSgv8KDsssr0u0sqiHzG4uzBxrxxBhDinh8RV2RCTcKak7SnuYuYKVPVb3E0TxbjA%2FjbFkhd3TMu5YlKYh4YU%2Bh%2B3cjc6v9N8LwJxP8dQYEgzUvdYNnCnPq58RicuhdEdG7iFKEz5sb8kk81kkOievZgVmzfcR87tE06PdJpwWrLz%2F9ORZYsinsfmXFaR%2BVnHjch8bEDEDllQZ6sZf%2Bt2JkHRRXnBCWmEQOUOCSn1yHVtdXMA7EYjLWHQt5FHzbzTkawFSorcESYCMl0Qrd9ffJVMtYyavM4Yi38iy1klPD8IhLc4vTsQOdjv88vj7nff53%2BAr1otFQpzCV7tKqXqkTSC%2FWST81UTSOkopVcbi%2Fls%2FuG%2Bzt4SVPW7EzdTPCwni90DDzVFiIFIxQ3fYQDOpqteY8ApD9vq7BXClJIqiTIqQYpOOzGtDJrgDTa6QCnY7DSTVq9QA41IQQGtSQnxScyYKy%2FVHUZ0X5SgrOvDCIVFmVuBnjH4mVGONc4owTxBV9GdgX4cr9O%2Fx2YKvrlxmJRKbxsCL0sIY6Ro3fEF0IdRD%2Fy3ddTMgP%2B5vUGM530iwO4MKy8tBuGJO1gOBXVjEcvKLsByyHXT1jaFHlcbGMOjr3r8GOqUB99Rpa9NYouXaueJ9XYv4SYZk5i3l9T0ezp0%2BQhCgs6p1rs28dcAkB3WstnEj4H%2BhKmH39XFW6lQYrYy8US3ErTo%2FTP6cqEOXdG2kxGKWIWbjeUrqLp%2Fqs8yTXMHvJdITTRyjMQsLSVO3RunvlrqkJlg0tHXGRt9%2FU4QRNmwdEUFa%2FKTDpG5jeQo6A7KMPsVXYk%2FH21b3PSx3h1t3R2Byxh7jwM8D&X-Amz-Signature=a4544ba70f6c91e0e104cab10e1a24790c612d84c00dda8cbb5b41db5972c470&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
