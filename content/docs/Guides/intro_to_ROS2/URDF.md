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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXHKWC36%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4p5Kvn2NYjTu8qmgG9nMXDx5bg26rCDtNdoNazItfgIgO2pZUMjz9RYdsHdU%2F5WWE0g4XQvy4KnqKeBCG7BcFQ8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu2OM5WExhak2Mv4SrcA26fzWn1ukZ3MlK1gtFM20HrOSa%2BKfpR4jb0Lo3JAZxPFE8boirqIACKxJqfqZmzUFJull5VABpwImaqQWVaTmOYX2V%2F%2BFJBfbK4YHz4G7K3T69F%2BZqMVKM9PTOO%2F6JkZD7Ta0XxLXrPofhxXGGPbOMXApKakhvm%2BOq8qGdPYjrsiq1QaxuDhKG6MwYogV8RXTKV%2FA%2FicnTE8zkU39hvcadt1uGO2c6k8R68dA1SmJ7UCkK%2F4BYjp84%2B%2Bx6T4zn55imDZXMQzlYKkeFzq8Vqn4P7bqmch98UIUHNIz5shQBN%2B77c7BawXDjIYfoBw9%2F3PURrada7qtlDttbZRDTP39nDavBH8EINcvMlSXiZoHF4e%2FcDWwrOfYorSHGmu1Qe06dh%2Fxz9im18mMZR8fsGfKi09Trd8HeEesLp2%2B1nsyFvdBMTI4b91Cnf0TeVLLsnkK4BtsL0W6oHC7%2BfIBJ72epZ880IKpurxhwMv9YXQe0eLron7vxy1jKeFbIvvIKCc5Jvg2k%2F84NfI%2Fmq3NC8MPoQ%2BUz9dd6EhQ%2F9AlUtdTtIqdX%2F6UmTyU8yhVkPLb80JQTlqoBp9JrZA8dXP%2BhfLuQHbT7e5VQfWrXEwQa7BmxPS9jRYGfPlbkfa1t2MMKuy8MGOqUBPEYkqvCsgzdt0%2BhTwncmFSuU5KUTxo3P1wWROMsNFzFq6emgK3mCESaF4XzQ5nRXBXuHicqt2fvSoujIWl1G7lgqxr4izoU0Iw%2B5%2BB%2BLDbV1aNDEghNBr9F22S7tvLQKNOJITz0VwoUpZ5rsfpshm5HlP5KbuKd%2BT4WsV12qFM5QSBmgQrjUwwPO1%2FV5a2DsLVsqtIAZWqoPIdlFWWGYK%2FOxg3UO&X-Amz-Signature=153e4a45a42b67bf286c206e54fa44b92df95ad6dc5a32fe9398b9e6277f64ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXHKWC36%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp4p5Kvn2NYjTu8qmgG9nMXDx5bg26rCDtNdoNazItfgIgO2pZUMjz9RYdsHdU%2F5WWE0g4XQvy4KnqKeBCG7BcFQ8qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu2OM5WExhak2Mv4SrcA26fzWn1ukZ3MlK1gtFM20HrOSa%2BKfpR4jb0Lo3JAZxPFE8boirqIACKxJqfqZmzUFJull5VABpwImaqQWVaTmOYX2V%2F%2BFJBfbK4YHz4G7K3T69F%2BZqMVKM9PTOO%2F6JkZD7Ta0XxLXrPofhxXGGPbOMXApKakhvm%2BOq8qGdPYjrsiq1QaxuDhKG6MwYogV8RXTKV%2FA%2FicnTE8zkU39hvcadt1uGO2c6k8R68dA1SmJ7UCkK%2F4BYjp84%2B%2Bx6T4zn55imDZXMQzlYKkeFzq8Vqn4P7bqmch98UIUHNIz5shQBN%2B77c7BawXDjIYfoBw9%2F3PURrada7qtlDttbZRDTP39nDavBH8EINcvMlSXiZoHF4e%2FcDWwrOfYorSHGmu1Qe06dh%2Fxz9im18mMZR8fsGfKi09Trd8HeEesLp2%2B1nsyFvdBMTI4b91Cnf0TeVLLsnkK4BtsL0W6oHC7%2BfIBJ72epZ880IKpurxhwMv9YXQe0eLron7vxy1jKeFbIvvIKCc5Jvg2k%2F84NfI%2Fmq3NC8MPoQ%2BUz9dd6EhQ%2F9AlUtdTtIqdX%2F6UmTyU8yhVkPLb80JQTlqoBp9JrZA8dXP%2BhfLuQHbT7e5VQfWrXEwQa7BmxPS9jRYGfPlbkfa1t2MMKuy8MGOqUBPEYkqvCsgzdt0%2BhTwncmFSuU5KUTxo3P1wWROMsNFzFq6emgK3mCESaF4XzQ5nRXBXuHicqt2fvSoujIWl1G7lgqxr4izoU0Iw%2B5%2BB%2BLDbV1aNDEghNBr9F22S7tvLQKNOJITz0VwoUpZ5rsfpshm5HlP5KbuKd%2BT4WsV12qFM5QSBmgQrjUwwPO1%2FV5a2DsLVsqtIAZWqoPIdlFWWGYK%2FOxg3UO&X-Amz-Signature=a407db30abb8dda55146d3f8ba28afb154b4f5a43b5e584b13edeb17ac533fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
