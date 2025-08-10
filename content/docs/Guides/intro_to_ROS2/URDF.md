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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFA3FZQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzyJWOGtMhf5gGLPK0YpmPtbuCduJ%2BeeVYhvMf%2BQX6lgIgUPJhKMIt%2F8zh2zQyZbYfkvFnogAbEFD2fP58fjF78MgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLD9R2e%2BwNTChMTmircA9LHCqOWzrUoW02VIKtRJlsgj8GxjJ%2FTMjTFwg9tEomOdveflu9EDS7jfDs69ByhBOFpcFLC6b7%2FpHruBWqmW%2BlOOtMw0tsB%2FLK9zL9kgURNM7qv8hX%2FlCC5MRtwNqIkKHj1CEeueuAvegFonkx33CE1CA0WysC8ky7yeCiRtN1d97E1Ux0ycMMJQ8oHi%2FeKuKPEo1mlgYPQEXJDVh41TpFwTYvjswdptz%2FkFnUMiP8Niol%2FsnZe57RYA%2BNgArQdB61ZbrmjYcvQfm0Olt5pffPIuIF0u%2BIkpZkD4%2B0TwVachUNi2eu2Ls9guAMSJWcUhUZ%2BH031L5mW1kjbt2SGVBuIXE%2F7Guby7tbyaEi6d1gcjlecDwIeuxGSjJB56MO2pTv9NkWcVd5nSNGSjKBU7GjOBRRsIEEiXG8rYOTGcg3WehdY%2BJVxV1%2FaZIH6ir6gIr6YRUnJqcCKXaZ7BlC5TSNmJJgBBTzXEfmz1tGXr0q%2FkH4o8exsiprnawzsVYeXJWNYtRH1I4tQ7Czl%2FP%2B6CAAtF%2BxUsSHfJoPx44gMwTWbIDtThpqKFQA9KCVnUWz7I2wplKj6tC1u1kQoVF%2F%2BLASPUEQbfRoH705VPPn5mIRqQmoTCSoG2NftUMowMP%2FQ4MQGOqUBCxv4JMkTNPPvE1zHdChE2bQDIGGKFxNU3SsScCKydmUOOkJHgKUdRq16Cz5npugUFADlDMPaCXNs5xeV9PmYO%2B7klKSeF2IbCnh3qIutHadk9m2tIrEYu2oOr9o40BrjyGr5oj5jIzXywtEsYKWUANLEhN0joSk7sXWxGeLGQ8lETnMWi96jc%2FqV50KQgd2QFnHxi2sD%2BMYcTsXKkR15HdoaYWOj&X-Amz-Signature=1839901a37473069221d71934c5978a221f5d2b591a845d3fccb3a7a9d6f771b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFA3FZQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzyJWOGtMhf5gGLPK0YpmPtbuCduJ%2BeeVYhvMf%2BQX6lgIgUPJhKMIt%2F8zh2zQyZbYfkvFnogAbEFD2fP58fjF78MgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLD9R2e%2BwNTChMTmircA9LHCqOWzrUoW02VIKtRJlsgj8GxjJ%2FTMjTFwg9tEomOdveflu9EDS7jfDs69ByhBOFpcFLC6b7%2FpHruBWqmW%2BlOOtMw0tsB%2FLK9zL9kgURNM7qv8hX%2FlCC5MRtwNqIkKHj1CEeueuAvegFonkx33CE1CA0WysC8ky7yeCiRtN1d97E1Ux0ycMMJQ8oHi%2FeKuKPEo1mlgYPQEXJDVh41TpFwTYvjswdptz%2FkFnUMiP8Niol%2FsnZe57RYA%2BNgArQdB61ZbrmjYcvQfm0Olt5pffPIuIF0u%2BIkpZkD4%2B0TwVachUNi2eu2Ls9guAMSJWcUhUZ%2BH031L5mW1kjbt2SGVBuIXE%2F7Guby7tbyaEi6d1gcjlecDwIeuxGSjJB56MO2pTv9NkWcVd5nSNGSjKBU7GjOBRRsIEEiXG8rYOTGcg3WehdY%2BJVxV1%2FaZIH6ir6gIr6YRUnJqcCKXaZ7BlC5TSNmJJgBBTzXEfmz1tGXr0q%2FkH4o8exsiprnawzsVYeXJWNYtRH1I4tQ7Czl%2FP%2B6CAAtF%2BxUsSHfJoPx44gMwTWbIDtThpqKFQA9KCVnUWz7I2wplKj6tC1u1kQoVF%2F%2BLASPUEQbfRoH705VPPn5mIRqQmoTCSoG2NftUMowMP%2FQ4MQGOqUBCxv4JMkTNPPvE1zHdChE2bQDIGGKFxNU3SsScCKydmUOOkJHgKUdRq16Cz5npugUFADlDMPaCXNs5xeV9PmYO%2B7klKSeF2IbCnh3qIutHadk9m2tIrEYu2oOr9o40BrjyGr5oj5jIzXywtEsYKWUANLEhN0joSk7sXWxGeLGQ8lETnMWi96jc%2FqV50KQgd2QFnHxi2sD%2BMYcTsXKkR15HdoaYWOj&X-Amz-Signature=75534a9c695cdaacd7a0994ce52855e78e3eb2995541b33774bc55b511f16cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
