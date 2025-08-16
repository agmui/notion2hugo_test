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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWDCPD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD32Gh2YExqzl0ISV5nOaTADkmS%2FXG6mpDf0cinIAjvmQIhAKp4S1XYdgIHz1sQVZUw4pCM7ybPhMyEfm5xMxll4EjFKv8DCHEQABoMNjM3NDIzMTgzODA1IgwkLjIOPxHzrSLaWM8q3AN0QbHyWTWnOa4f3xJNmnYPXPrId6bEWhlEnX5rZ%2FbPNBOqd9kg4L5Fzny0%2Fsh5H64sMEl8ICWjC6sGrv4OZQRfWdAYqqvJRpkJ9ZuwUoAYvQSLG9%2BzO3AnzIwyJ55v4FG0V0CQqoy0EPBcFwfrU824FNWLoKChyZPHQVr%2BTkhY%2BYxzq1oEc%2B6Rs2kFKNPxg3Z3RVfMxjkBWpGxv2Zwzl%2FAsYOURIbZuZ18EWGW66i0kpt88bs6Rilu5geeya0oxMPHcvV6lCMF2FjG5RbuU6GXc2z6H2XZ7PDRwGOr4UT%2B7eqQkwFxSZ%2FBcmJtJYQmtx9bBymUqXS9wv4gJMbwvE%2B6GhjIw2pojBW9jaf6tOOKc%2F3bnVtQz35MjUaoBZ3wtlVzyep5zmziz%2BGoO7kBvUFOkWuxdsZp0fYSAJSqDNoNCA8y%2B1wSseHLdnXIHsSq8YD56amO6d5HZ%2BKCDN5a17L5sDDyCtjvb4Dd0jbNT9Zr124062D%2FtYkIy80NWaDXgW0DaAjp2toxL1BlVMw3UeBCAuCOT2kD0YoRSdWJikUYLIa8eFdGTyts2cqNCaBVffUEmWagjQ7%2BWMSQmxiHz8E5MQ%2BOzsa7NVjzdqnoQ724Rmx8bC5pdB4DFVDA8DD194DFBjqkAZ3QB9FifN8R007TFNnDapop%2FW%2BYazqFiv%2B%2BvluYlzyn0vapPBexMIsFluMbVrSXVde0ucAeUs9%2FKVqhShDPWSX9qWwNGyog1yjWmwxLbxGKmoadaXo3Bu1F3RnGiYtwgAu3t3cSQcVOJDfmmVw3sR5cEGjELtYCRe%2FIhARjtOmTqMoaEHAc%2B9xXM6qTKJriNWadIMnEQXPJ4fjg%2BxMtDxXl2%2FEX&X-Amz-Signature=f3eb28e6ade9425baf0ac2702f6b4dfaf108a408201c75d61f423eb4bffd4bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWDCPD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD32Gh2YExqzl0ISV5nOaTADkmS%2FXG6mpDf0cinIAjvmQIhAKp4S1XYdgIHz1sQVZUw4pCM7ybPhMyEfm5xMxll4EjFKv8DCHEQABoMNjM3NDIzMTgzODA1IgwkLjIOPxHzrSLaWM8q3AN0QbHyWTWnOa4f3xJNmnYPXPrId6bEWhlEnX5rZ%2FbPNBOqd9kg4L5Fzny0%2Fsh5H64sMEl8ICWjC6sGrv4OZQRfWdAYqqvJRpkJ9ZuwUoAYvQSLG9%2BzO3AnzIwyJ55v4FG0V0CQqoy0EPBcFwfrU824FNWLoKChyZPHQVr%2BTkhY%2BYxzq1oEc%2B6Rs2kFKNPxg3Z3RVfMxjkBWpGxv2Zwzl%2FAsYOURIbZuZ18EWGW66i0kpt88bs6Rilu5geeya0oxMPHcvV6lCMF2FjG5RbuU6GXc2z6H2XZ7PDRwGOr4UT%2B7eqQkwFxSZ%2FBcmJtJYQmtx9bBymUqXS9wv4gJMbwvE%2B6GhjIw2pojBW9jaf6tOOKc%2F3bnVtQz35MjUaoBZ3wtlVzyep5zmziz%2BGoO7kBvUFOkWuxdsZp0fYSAJSqDNoNCA8y%2B1wSseHLdnXIHsSq8YD56amO6d5HZ%2BKCDN5a17L5sDDyCtjvb4Dd0jbNT9Zr124062D%2FtYkIy80NWaDXgW0DaAjp2toxL1BlVMw3UeBCAuCOT2kD0YoRSdWJikUYLIa8eFdGTyts2cqNCaBVffUEmWagjQ7%2BWMSQmxiHz8E5MQ%2BOzsa7NVjzdqnoQ724Rmx8bC5pdB4DFVDA8DD194DFBjqkAZ3QB9FifN8R007TFNnDapop%2FW%2BYazqFiv%2B%2BvluYlzyn0vapPBexMIsFluMbVrSXVde0ucAeUs9%2FKVqhShDPWSX9qWwNGyog1yjWmwxLbxGKmoadaXo3Bu1F3RnGiYtwgAu3t3cSQcVOJDfmmVw3sR5cEGjELtYCRe%2FIhARjtOmTqMoaEHAc%2B9xXM6qTKJriNWadIMnEQXPJ4fjg%2BxMtDxXl2%2FEX&X-Amz-Signature=5ec79bb2db062eb11db7d4a644b778428c5d6f8b2a7953dd0148cee36dc7dd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
