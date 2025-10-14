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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUNA4CW%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FhaToDtMgXG8FCVmrAvR4RFT2oqgkq3mxDrVHf3vq4QIgcaIFNtz3ww1pILMUu5dBfMnkzkQLOZ1whOEcY%2FfPUVcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhyZQ%2Bl4qKXHVxh3ircA%2Bb6owZk1p6P3Q9J8ejXhckNiBrNsV%2ByY03aB3hkVT3UgZk0jc04NHa2W4PNgebFb8Z02%2FjJsM%2FMczH2KfPuzU2BS89gN9z01fxDNtnDasGlq1BQBmXSwfvgyQyOS%2FbVTN90gjUyvAQX7LrKCuueChXSORq4susBClpXFKZxV2%2Fqre0tgH75grKSeFW3xsPa5sBZ1GaSlOirktAtAvEmNKaXbNEKifukrMjgq36HV5y%2B0EwXreZtW3GstIJo7xZrwf6mOCnfWptKP0fBO%2Fnh%2FwFjIYosm72TV1J6DFt%2B93UGvlqlV4Ga7yX07OrylQa2wTb%2F7YgZHbpOt9OAnXVDsRC%2BqvRCK%2FrWBoB3uzUDLXh7vsuPOQQxK3xhrxxWBRWiD6j%2B%2BxRjQHJ1QBGKW3flBH3k%2BLZNTYSKDyqyR23Jk1wXo4TDhZTVgStSCKnduBXHix%2BWBq8t2PyyC2RxLnpWIOKGZtMlYRB97WwUbN1WFnbbUHY6tR3TX8orIcPtfWy0jzN95onOrlWmHjiYyV3%2Fl2YtlNHZFpK9O4u0xNof3ZpCfA4B5AmROgiHUMoPXZe5UPLSM9Hj%2Bi1BTcbZPc0l98iWcovCfT95CrlTqpndYTM7oRmjdkFiE3p0y5XtMI2qtscGOqUBTOdx%2B9h%2FGWAYWEx19i53y2VchghI4huP2fc3Lgor02jxOPv0vGvxwgmdhiFxEnWUfFh7Bh0u3fu50MJXVJigsewCdYcCvxqaJUlXead0Qw0E7Mrn%2FXmQqTZPyqpVyx6O54ivco7edgCkl9Ew0DttFvLQ53%2F86S2JTyuzhPZntH6MxyqHL8xMFCKkZqROvRodBx%2F9yOnsjzCyFwnkAubiNytIKM6J&X-Amz-Signature=bfaf65edc3fab07f6492f7d1964a57b6cc384e1070c02ced92c00737371f9567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUNA4CW%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FhaToDtMgXG8FCVmrAvR4RFT2oqgkq3mxDrVHf3vq4QIgcaIFNtz3ww1pILMUu5dBfMnkzkQLOZ1whOEcY%2FfPUVcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJhyZQ%2Bl4qKXHVxh3ircA%2Bb6owZk1p6P3Q9J8ejXhckNiBrNsV%2ByY03aB3hkVT3UgZk0jc04NHa2W4PNgebFb8Z02%2FjJsM%2FMczH2KfPuzU2BS89gN9z01fxDNtnDasGlq1BQBmXSwfvgyQyOS%2FbVTN90gjUyvAQX7LrKCuueChXSORq4susBClpXFKZxV2%2Fqre0tgH75grKSeFW3xsPa5sBZ1GaSlOirktAtAvEmNKaXbNEKifukrMjgq36HV5y%2B0EwXreZtW3GstIJo7xZrwf6mOCnfWptKP0fBO%2Fnh%2FwFjIYosm72TV1J6DFt%2B93UGvlqlV4Ga7yX07OrylQa2wTb%2F7YgZHbpOt9OAnXVDsRC%2BqvRCK%2FrWBoB3uzUDLXh7vsuPOQQxK3xhrxxWBRWiD6j%2B%2BxRjQHJ1QBGKW3flBH3k%2BLZNTYSKDyqyR23Jk1wXo4TDhZTVgStSCKnduBXHix%2BWBq8t2PyyC2RxLnpWIOKGZtMlYRB97WwUbN1WFnbbUHY6tR3TX8orIcPtfWy0jzN95onOrlWmHjiYyV3%2Fl2YtlNHZFpK9O4u0xNof3ZpCfA4B5AmROgiHUMoPXZe5UPLSM9Hj%2Bi1BTcbZPc0l98iWcovCfT95CrlTqpndYTM7oRmjdkFiE3p0y5XtMI2qtscGOqUBTOdx%2B9h%2FGWAYWEx19i53y2VchghI4huP2fc3Lgor02jxOPv0vGvxwgmdhiFxEnWUfFh7Bh0u3fu50MJXVJigsewCdYcCvxqaJUlXead0Qw0E7Mrn%2FXmQqTZPyqpVyx6O54ivco7edgCkl9Ew0DttFvLQ53%2F86S2JTyuzhPZntH6MxyqHL8xMFCKkZqROvRodBx%2F9yOnsjzCyFwnkAubiNytIKM6J&X-Amz-Signature=c0ea0269d7d924525a50408e68111ef30ea4c3a37fb4537819d6dbc43d6bb5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
