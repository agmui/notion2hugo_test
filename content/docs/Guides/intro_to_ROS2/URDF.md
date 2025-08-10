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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2VWU45%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvM4Ycn5ZhwFoPTnnUpyYaKuJDFBK97byCqR0TE0B6wQIgCZxE4ZVeeiTMwM7rBoyh9hreYmIM0g4pxl7XkBIomQEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR6EUjaQCwCS5oGYCrcA3bUg8KsoTmrKxn%2BKgmAqD%2Bg7fEOPEXY9iDtcdCwo%2FTxB63d1KQmA0ch8XVrvVqm7jvj1ciRrEGXX2O5N6oJmUWda3M5qvnvOWcEZqFSzTAFHRuZY0MOZSAMkBZG29xMedMMmmVBADgv2Ft219vGGyYj%2FmlFGyffOBgP7NGuuj3d7X%2F9BYPoyp02UtyFgrBoHtUNuV8VEAWSeVEfsXPyDzoIX2GjGLCxc%2FnNs9D3JsxC1UKL%2BpUt7xDU0UsJgHGKNzfm0Tkgwr%2B2hivr%2F7iQEfMzDPsmAp0pW61t4vzpTBLo%2FCC6zKvTjouGiKDkA59bJE4SUc%2BUy4YygRHVUntmZe02CYICCJYufmrWAl%2BIlrZ3HNzPTjxNA4pLDxX057Ydk9pCESRfSHmVe3%2Fw3zQkwAtYER5KuOBV%2B7G5WqPVzMi%2BThzjjdS38wPb3Dx7cuTg22KgLN4GUWTPq6%2BZWNJFoFRq3iv36kouiCp0wuqYWnHCJ144Ip%2FqjmPHOow32SOJB5AhXMc06nbCIeAS78Wn%2BSaWoegEiYzLJMPYCGZLVy0L3mJVya04kay7O7Ytg%2FUHusFzaEUXax5k4ck28c6UrBbS%2BeXB1AGONeb2UOplQLctwSBl5%2Fs4oGt3ohk7MOS%2B4sQGOqUBOpHZ7vnLsPht5dH73LqSFHix8siCtVMCGCpMvD1Bv77t2umARTSXQpnSjSiTbNdUfJwPs6wkDv95sjfx2ev77IfPVkvVHu7T5cEsisRqkQsPxnZJ7j3d0i2NjLLL%2FwdfL%2BVudN178x%2B5wkiwCrkjOU7KUfFsP0Cri368tlKOQOsuLDj4wAk1HHRQIVLcCU%2FJERvAqJCT6bIKNu02Bxr5bKKqi%2BHH&X-Amz-Signature=33e3de4fc4c4cb3ceb9f75d1e6fa48a5c7171ea8517a60804cf0d0a7abbbe59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2VWU45%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvM4Ycn5ZhwFoPTnnUpyYaKuJDFBK97byCqR0TE0B6wQIgCZxE4ZVeeiTMwM7rBoyh9hreYmIM0g4pxl7XkBIomQEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR6EUjaQCwCS5oGYCrcA3bUg8KsoTmrKxn%2BKgmAqD%2Bg7fEOPEXY9iDtcdCwo%2FTxB63d1KQmA0ch8XVrvVqm7jvj1ciRrEGXX2O5N6oJmUWda3M5qvnvOWcEZqFSzTAFHRuZY0MOZSAMkBZG29xMedMMmmVBADgv2Ft219vGGyYj%2FmlFGyffOBgP7NGuuj3d7X%2F9BYPoyp02UtyFgrBoHtUNuV8VEAWSeVEfsXPyDzoIX2GjGLCxc%2FnNs9D3JsxC1UKL%2BpUt7xDU0UsJgHGKNzfm0Tkgwr%2B2hivr%2F7iQEfMzDPsmAp0pW61t4vzpTBLo%2FCC6zKvTjouGiKDkA59bJE4SUc%2BUy4YygRHVUntmZe02CYICCJYufmrWAl%2BIlrZ3HNzPTjxNA4pLDxX057Ydk9pCESRfSHmVe3%2Fw3zQkwAtYER5KuOBV%2B7G5WqPVzMi%2BThzjjdS38wPb3Dx7cuTg22KgLN4GUWTPq6%2BZWNJFoFRq3iv36kouiCp0wuqYWnHCJ144Ip%2FqjmPHOow32SOJB5AhXMc06nbCIeAS78Wn%2BSaWoegEiYzLJMPYCGZLVy0L3mJVya04kay7O7Ytg%2FUHusFzaEUXax5k4ck28c6UrBbS%2BeXB1AGONeb2UOplQLctwSBl5%2Fs4oGt3ohk7MOS%2B4sQGOqUBOpHZ7vnLsPht5dH73LqSFHix8siCtVMCGCpMvD1Bv77t2umARTSXQpnSjSiTbNdUfJwPs6wkDv95sjfx2ev77IfPVkvVHu7T5cEsisRqkQsPxnZJ7j3d0i2NjLLL%2FwdfL%2BVudN178x%2B5wkiwCrkjOU7KUfFsP0Cri368tlKOQOsuLDj4wAk1HHRQIVLcCU%2FJERvAqJCT6bIKNu02Bxr5bKKqi%2BHH&X-Amz-Signature=c54a257f8187e87ebad081f7999420632c729f165fd3e2a68868e9111d7e3824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
