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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGOL3AA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEefUfmdoQKNwuUFIZvzICBPvKQN2RWee3HAVmZ6X1tAiEAilxT1C1brmnntlafrFCeGfVvY%2BxnXr%2B7wOj5Dp4RmE4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf6F2p3HecVh%2F5kGCrcAwNNFj%2FkfpxIcl%2FX29PtwsQ7dsdKVoExF9ta77LuZZlLZsBIZQ7HrHag3DjquZwlIYOJkZdB0gz3KhqclbK7YJUBrVB%2BlNxOZ%2Bp%2B61AYJdiySg6EwtQ4uwQSLBa0yOcNaR4IBa7n6I2ECSbeXq87HsApNbrVM8SFw4YiYBG2flc5jC%2FjyrJjqZ%2BxUQ46TyDJexkNHus7RnHXkw2Q2bomA86njowUGtfbBD2s73V4nPL2xmmynjNPqH1X%2FyuMjOhZaCj%2F1eNpZmVma%2BbbU9IZr04CO1gX1xONa7vP2PhfOeIXPeUJoHC8xs%2FUoBXF9dk0kY8P1akyy%2FDVb7F1hKZJ86xlEJqyYk6b5kvdl%2FBD%2BANYGgaE7o2VNUvbwSPn1SwpsiYzjQBhUP34eBq36M8RmwIxmXSXgaSz1G%2FDl4c%2Fr1zXOcbAk42PQdlTCytuXscuNbDKbEG0xS8aCwrXN4VVGSMDVe%2Fo2ZM6kMtm%2B7oIj%2BwNI8H8%2FJ9WXUZi7kPojHXf%2FARdinmUU%2FaLjafLUygbGtjsoweHNV%2FjDbbiPUSTQQU4uPlpC%2BpVav7Z64rsy5KNKmRZbCHm5iSSVf9CxD2M6nkvvDvn0kZKhs5TJr%2FjGf%2Fm6RoyLfBNIpF6H3nkMLar5sQGOqUB28J6z%2BJonVeXw3kwIdZejAEgpogntiNnasLDKSrIA57MBiqBRkxdKFZUPRTiQOJ%2FRN2qdaRa5K3IOFVNDHlM77lH8a2S9NRx%2Bgeq4vQkZAry%2BtUno9zvx6ExdoHtghbFKPP8BD0MW29OhReWxtDBMK9MxkDafosOaLq6y%2Bl3olvqGY9DPCE%2FfLpHS7sc0MY22yii44E4nXv8kjqdwOwuXfAjSDKR&X-Amz-Signature=98f5eda7cff20547dec60000fdc889f26c4269f0b118c93d8ca2b1fee83e81f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGOL3AA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEefUfmdoQKNwuUFIZvzICBPvKQN2RWee3HAVmZ6X1tAiEAilxT1C1brmnntlafrFCeGfVvY%2BxnXr%2B7wOj5Dp4RmE4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf6F2p3HecVh%2F5kGCrcAwNNFj%2FkfpxIcl%2FX29PtwsQ7dsdKVoExF9ta77LuZZlLZsBIZQ7HrHag3DjquZwlIYOJkZdB0gz3KhqclbK7YJUBrVB%2BlNxOZ%2Bp%2B61AYJdiySg6EwtQ4uwQSLBa0yOcNaR4IBa7n6I2ECSbeXq87HsApNbrVM8SFw4YiYBG2flc5jC%2FjyrJjqZ%2BxUQ46TyDJexkNHus7RnHXkw2Q2bomA86njowUGtfbBD2s73V4nPL2xmmynjNPqH1X%2FyuMjOhZaCj%2F1eNpZmVma%2BbbU9IZr04CO1gX1xONa7vP2PhfOeIXPeUJoHC8xs%2FUoBXF9dk0kY8P1akyy%2FDVb7F1hKZJ86xlEJqyYk6b5kvdl%2FBD%2BANYGgaE7o2VNUvbwSPn1SwpsiYzjQBhUP34eBq36M8RmwIxmXSXgaSz1G%2FDl4c%2Fr1zXOcbAk42PQdlTCytuXscuNbDKbEG0xS8aCwrXN4VVGSMDVe%2Fo2ZM6kMtm%2B7oIj%2BwNI8H8%2FJ9WXUZi7kPojHXf%2FARdinmUU%2FaLjafLUygbGtjsoweHNV%2FjDbbiPUSTQQU4uPlpC%2BpVav7Z64rsy5KNKmRZbCHm5iSSVf9CxD2M6nkvvDvn0kZKhs5TJr%2FjGf%2Fm6RoyLfBNIpF6H3nkMLar5sQGOqUB28J6z%2BJonVeXw3kwIdZejAEgpogntiNnasLDKSrIA57MBiqBRkxdKFZUPRTiQOJ%2FRN2qdaRa5K3IOFVNDHlM77lH8a2S9NRx%2Bgeq4vQkZAry%2BtUno9zvx6ExdoHtghbFKPP8BD0MW29OhReWxtDBMK9MxkDafosOaLq6y%2Bl3olvqGY9DPCE%2FfLpHS7sc0MY22yii44E4nXv8kjqdwOwuXfAjSDKR&X-Amz-Signature=78ecbd28900776cdbbcc092098259dc73768b07405be57b3a172ac5554e2569c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
