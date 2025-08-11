---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZ4WXWE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7tH8vuH91yFhz%2FxY0yJFv2K4%2Fg%2FzKF70Y4L%2FXagOzBgIgbLQyKo4gHtu%2Fb1dT4mniQ0RSa9J%2B%2BpnxiQUHqanuR3kqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExVLeicWXSOoDUyaircA61mK8VdKvk8dcR7BHysfGKLuI0nKBjt%2FBhIdVQPNxGVFZaJZ%2BYki4LTgVmBB%2BlnaX64sc1haQ9bQgJZNsHwrLu1BK24kcIj1dxJNWktC9J411jsP0eakakbihN5HVRi9kyF6JCDYMvYyQqWD7rXLpaQ0K8RbndVKNE3cMFzVyLpephTfuMfM1bLPj9cFC%2FsmzLi4N%2Bd3DfBM4GL8X%2BeRAD8beX2KRNnoHu8yUp%2BzCGc21U%2BBXU7pfAeUqdLyKVD%2FRpZxwFW7LStHI97Q%2B8D5PypksCCTyAbS1B8UoWZj9Xm%2FLR5NUeH5iFk93PAFEzVNQI5KQ%2BQ5BBa9hTKg1zh8kMK2TKRN3EDFYstp2DIF3f2gPX5GAUPFVp9tRJy9boHg5IdM%2FMzbgQ%2FLpTUbwKcJc%2BMj9pJBfoisBHViakD2RX0zSRTbVMAb5M%2FsxMmylTMISKZ2lxb3%2FQ4JNSYWaoOZY65FzDnVJ1p8h%2FxhDuHhv9FHLNvHhhnSs27P0IBkNj1R0Dh1SNntNqp2fQb1bwsuokm3TZuY8mHXSumCOIbFCE1iO5pEnQB2hP%2FGHezukF7zZsIRz2zTw15kxUdJ3Y26Xz024MOC%2FWounEslru0wgNrSD0NeYS9jKkYVaIQMMb45sQGOqUBNcuAfzHbv8epzb38q6YQJSOM8wTXORrJklxW1DCNuNa98p%2FcbXFrtssI4Bor%2FHjVUPIL4BQb3dqqzrTzyNm3IbU7cJq%2BaWxg99YxHv4VOfTG%2FSsGDBDivQu%2Bi5HyHaiEr3WBNuQqtbpCc0FMlufOviXKOKxDstcQA18D79D5hFCzEzffbV0D5B1RDP2YxpbXVr%2BSTzmPManKd%2B8Cbd52iMx2dY5w&X-Amz-Signature=f802549e2301e1af688345760f9c79461a9bd6eebe61debf67fce99aa3dea8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZ4WXWE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7tH8vuH91yFhz%2FxY0yJFv2K4%2Fg%2FzKF70Y4L%2FXagOzBgIgbLQyKo4gHtu%2Fb1dT4mniQ0RSa9J%2B%2BpnxiQUHqanuR3kqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExVLeicWXSOoDUyaircA61mK8VdKvk8dcR7BHysfGKLuI0nKBjt%2FBhIdVQPNxGVFZaJZ%2BYki4LTgVmBB%2BlnaX64sc1haQ9bQgJZNsHwrLu1BK24kcIj1dxJNWktC9J411jsP0eakakbihN5HVRi9kyF6JCDYMvYyQqWD7rXLpaQ0K8RbndVKNE3cMFzVyLpephTfuMfM1bLPj9cFC%2FsmzLi4N%2Bd3DfBM4GL8X%2BeRAD8beX2KRNnoHu8yUp%2BzCGc21U%2BBXU7pfAeUqdLyKVD%2FRpZxwFW7LStHI97Q%2B8D5PypksCCTyAbS1B8UoWZj9Xm%2FLR5NUeH5iFk93PAFEzVNQI5KQ%2BQ5BBa9hTKg1zh8kMK2TKRN3EDFYstp2DIF3f2gPX5GAUPFVp9tRJy9boHg5IdM%2FMzbgQ%2FLpTUbwKcJc%2BMj9pJBfoisBHViakD2RX0zSRTbVMAb5M%2FsxMmylTMISKZ2lxb3%2FQ4JNSYWaoOZY65FzDnVJ1p8h%2FxhDuHhv9FHLNvHhhnSs27P0IBkNj1R0Dh1SNntNqp2fQb1bwsuokm3TZuY8mHXSumCOIbFCE1iO5pEnQB2hP%2FGHezukF7zZsIRz2zTw15kxUdJ3Y26Xz024MOC%2FWounEslru0wgNrSD0NeYS9jKkYVaIQMMb45sQGOqUBNcuAfzHbv8epzb38q6YQJSOM8wTXORrJklxW1DCNuNa98p%2FcbXFrtssI4Bor%2FHjVUPIL4BQb3dqqzrTzyNm3IbU7cJq%2BaWxg99YxHv4VOfTG%2FSsGDBDivQu%2Bi5HyHaiEr3WBNuQqtbpCc0FMlufOviXKOKxDstcQA18D79D5hFCzEzffbV0D5B1RDP2YxpbXVr%2BSTzmPManKd%2B8Cbd52iMx2dY5w&X-Amz-Signature=18e670f1b00b2bb6115af1ff1d4a28a3f7a63e0b46cfce59069977e6cc3320ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
