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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBQWVTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerhndlKEVRH5izHs2mdYlIZATdllVY3r3R7xlrv6SDAIhAJ7Uxsmu2cEwKiL1IyWJo9G16Ww5nKhSyiXMzxR0gB9MKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2DeyCGbreClo3dMcq3APz9SiqykPGVFM3XBb4r%2FZWCiAeNKG735xP0GMZy4fgpcNrWD0hpLBxYevJgPd6MCSI0gO0%2FPs4zz1PFpsjfDJs81aznBBW6dBl%2BOiXlY971btISD7t%2Bq9TcnwixgmoAO9flS%2Bb1FVwVAZLCQNSxStK0f2tpQ8aXHY3Am6AN3Sp%2FLEaHwgCh3%2FzoQbeQi0Z0emdzfWNWElNW7MZOafaosKfalfP0%2FhHeIUmqD%2B%2F6%2FkNr6BJjGaBlafaQbPhpBAGy8A0tFbXuFSB2FI2DOUddFmERLzunMrN6Th28zbWoqKBTSjalptfiZM1XSajGGE%2BTZvYkGybaizuRTKGtbksB%2BTVU3oaVImmSf3iEJhSa%2FO%2BrdgK3pBkgkqnpnfz87OdVxr8lckX1Bkhq4oyEweltD2vm6F18K7bLKcB8AgI%2FAEp5qydyzSaEoi4%2FWAqPpPzeHnGfRJ1Q4YG5WSDnhLQy%2FJfPuvqwA417gWOE26v4I02wLMHVuJZWKTGUzux2qN4Tf3uHhXIIF9AxZA0gu8KihHETnIuvHKeNmUb4kPvIJu4EXNFxTgCpBDTe%2FLF6D%2BewGKC%2B39UOpJYIdaDw8xjbvq70yGQpudMo0stbMvSgO39oT9GocrfvIfFNECpvTCT7ofDBjqkAd17acwgIFboKeR4uvT%2FtnYzGNRLLNURi52s7sYU3K6tFNImq6KexP3XTC%2B218%2Fw1LCpr0HZbJ2yFQJU356BBfrbQHWNk0Dtb7ePfe26iSaMNVRz5MkAF%2BJk40w%2Br5UtVln54%2Bc5F3KBYpPz1vhBLpD4OFBlUM9mxGgKsUrSx3PK0LAwUEZiChviW9%2FBm95yk%2Bxx%2Fmp2nkdCJX%2B9rNhWjJVflYl0&X-Amz-Signature=04265846591d924b21396fc4e97592db0b8bdf3d8a485af465a06e8658ccf6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBQWVTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDerhndlKEVRH5izHs2mdYlIZATdllVY3r3R7xlrv6SDAIhAJ7Uxsmu2cEwKiL1IyWJo9G16Ww5nKhSyiXMzxR0gB9MKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2DeyCGbreClo3dMcq3APz9SiqykPGVFM3XBb4r%2FZWCiAeNKG735xP0GMZy4fgpcNrWD0hpLBxYevJgPd6MCSI0gO0%2FPs4zz1PFpsjfDJs81aznBBW6dBl%2BOiXlY971btISD7t%2Bq9TcnwixgmoAO9flS%2Bb1FVwVAZLCQNSxStK0f2tpQ8aXHY3Am6AN3Sp%2FLEaHwgCh3%2FzoQbeQi0Z0emdzfWNWElNW7MZOafaosKfalfP0%2FhHeIUmqD%2B%2F6%2FkNr6BJjGaBlafaQbPhpBAGy8A0tFbXuFSB2FI2DOUddFmERLzunMrN6Th28zbWoqKBTSjalptfiZM1XSajGGE%2BTZvYkGybaizuRTKGtbksB%2BTVU3oaVImmSf3iEJhSa%2FO%2BrdgK3pBkgkqnpnfz87OdVxr8lckX1Bkhq4oyEweltD2vm6F18K7bLKcB8AgI%2FAEp5qydyzSaEoi4%2FWAqPpPzeHnGfRJ1Q4YG5WSDnhLQy%2FJfPuvqwA417gWOE26v4I02wLMHVuJZWKTGUzux2qN4Tf3uHhXIIF9AxZA0gu8KihHETnIuvHKeNmUb4kPvIJu4EXNFxTgCpBDTe%2FLF6D%2BewGKC%2B39UOpJYIdaDw8xjbvq70yGQpudMo0stbMvSgO39oT9GocrfvIfFNECpvTCT7ofDBjqkAd17acwgIFboKeR4uvT%2FtnYzGNRLLNURi52s7sYU3K6tFNImq6KexP3XTC%2B218%2Fw1LCpr0HZbJ2yFQJU356BBfrbQHWNk0Dtb7ePfe26iSaMNVRz5MkAF%2BJk40w%2Br5UtVln54%2Bc5F3KBYpPz1vhBLpD4OFBlUM9mxGgKsUrSx3PK0LAwUEZiChviW9%2FBm95yk%2Bxx%2Fmp2nkdCJX%2B9rNhWjJVflYl0&X-Amz-Signature=9f1ae28b090c07e6bf4c4b7bf6f674277bc2f6aee1017a9707b23030c32fc63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
