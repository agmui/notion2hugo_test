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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MHKXCK%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFbp7C9jvE5m1WlytdfqNqCcKfEFpwQFdABoFNj6rdgIgWiRSzdqYRJf49d4a%2B3eIzwzzQidX2z4B6V8AzXhuwVUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV0kizcichfwhKswCrcA4Ab9%2FaR092B0HwbskpBjnLAl8h4Abrc4xfcI%2B4ZuE%2BiOm7m0USjlTX4vYi7qACT7GLQTte57wnu1VJXhLYmVPlwKQ0WDhw1yVPW9M4u%2BILE7c2tNfqLvsX9HhmoDvRT696i2v1UVE%2Fzslk9kTmmZXEZmxJQOhIqBOFDy2LwuJGMHYkF3UBfzHZliRIKZMNSFFiCTupejhRom5MkWY1V2e0%2FNv6NEHrvv2X6E8PT%2FBPQckBd%2BPP%2BSPEYJfKf0xASa3CPDhVrR5JUH8dgarS2E5bKyUh%2F65kMHEZH36b53Dw3dzrsmp62CnPwm%2FJZh3CoStfZlZXdF%2BRBI9eE1%2BdlbI01%2F1LI1xorK7akX0QpBdvoE2i99KL78qOQE8%2FlffNW7%2Bu3tx0JXGx30dB4FhY9sNVSOdnMuq0SKLB%2FoHSrcU1NQFEXbku4ua3btRXILlEiNRYyMF5PCW3I%2Fzc7w6wastC2LUoRjUF%2BS%2BadfnuySnUjLNNuF%2F05cXdnM9TRd6vU6OfjiXZ6m8GMylgWsntsLm9BUqX4dkqKdHq6hFLu%2BgTP5o63RXbc%2FZKQQx9p9oiTewmx97gvae31vP8bXiowG%2BgCfmaCW5I6Qex5qI1%2FP43HPo5oDRPPVqwtu9toMPTCo9QGOqUB9gh%2B9hYuyGIxCVrUGbfnK4a0z8cbF73TZyHxsG28G9qcS5Ay8e6lxH0PkzH2hzmsotK4edzZ3WqqHzgLa6w6dp%2BWm1cxn%2FXNj%2BlSZp16ItgfcbAGQWxRu1bQ54yyvKzSK8qHisy3QeJAXbiT1CxpEiQ%2B3ZGerbR184jeVN%2F2%2BHMAy7osfmKt3jYA2EHynxH0WSaN8eGrqu0GNT3YGYkhs7xfhRDx&X-Amz-Signature=74b3943c94cda18d5a698ec4eeb133a52c46ab0643c19bbaf303bc200d85f58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MHKXCK%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFbp7C9jvE5m1WlytdfqNqCcKfEFpwQFdABoFNj6rdgIgWiRSzdqYRJf49d4a%2B3eIzwzzQidX2z4B6V8AzXhuwVUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV0kizcichfwhKswCrcA4Ab9%2FaR092B0HwbskpBjnLAl8h4Abrc4xfcI%2B4ZuE%2BiOm7m0USjlTX4vYi7qACT7GLQTte57wnu1VJXhLYmVPlwKQ0WDhw1yVPW9M4u%2BILE7c2tNfqLvsX9HhmoDvRT696i2v1UVE%2Fzslk9kTmmZXEZmxJQOhIqBOFDy2LwuJGMHYkF3UBfzHZliRIKZMNSFFiCTupejhRom5MkWY1V2e0%2FNv6NEHrvv2X6E8PT%2FBPQckBd%2BPP%2BSPEYJfKf0xASa3CPDhVrR5JUH8dgarS2E5bKyUh%2F65kMHEZH36b53Dw3dzrsmp62CnPwm%2FJZh3CoStfZlZXdF%2BRBI9eE1%2BdlbI01%2F1LI1xorK7akX0QpBdvoE2i99KL78qOQE8%2FlffNW7%2Bu3tx0JXGx30dB4FhY9sNVSOdnMuq0SKLB%2FoHSrcU1NQFEXbku4ua3btRXILlEiNRYyMF5PCW3I%2Fzc7w6wastC2LUoRjUF%2BS%2BadfnuySnUjLNNuF%2F05cXdnM9TRd6vU6OfjiXZ6m8GMylgWsntsLm9BUqX4dkqKdHq6hFLu%2BgTP5o63RXbc%2FZKQQx9p9oiTewmx97gvae31vP8bXiowG%2BgCfmaCW5I6Qex5qI1%2FP43HPo5oDRPPVqwtu9toMPTCo9QGOqUB9gh%2B9hYuyGIxCVrUGbfnK4a0z8cbF73TZyHxsG28G9qcS5Ay8e6lxH0PkzH2hzmsotK4edzZ3WqqHzgLa6w6dp%2BWm1cxn%2FXNj%2BlSZp16ItgfcbAGQWxRu1bQ54yyvKzSK8qHisy3QeJAXbiT1CxpEiQ%2B3ZGerbR184jeVN%2F2%2BHMAy7osfmKt3jYA2EHynxH0WSaN8eGrqu0GNT3YGYkhs7xfhRDx&X-Amz-Signature=a71ab136b3a9d0c8eecc8febb7911b7c758203560ec0f0054b239b1b762cf6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
