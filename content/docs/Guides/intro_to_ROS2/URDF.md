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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U7GUXX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzQ2Yy6SWDrH7y3Ly%2BrcZ0NMXXoAZQ2NCNMGDzyu1YSAiAf2450Q6l0ODBvaVoB6cYQQNnIqN3BLpVpbgsn0tfMcir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCXf%2BWCxohH7t0HGMKtwDC0Ow4UVwIr09F1GdXH6LBQ%2BiNGilSbFysh787LsOq%2BgcZYWi3IDiWYRtLozdePX9EosrkW%2BqS3OE0NQ%2BIFO5FeV1Q7VLsHi4bSRo1y14tBmlfboboGSGPrcWpTxXWVDt9AAyUiLDfcEeQ7z3T9sw0of7OUuCSTNLleSw1fr8ZuZOWloPJnIqh2ATspJV2r1FLlRNbMcJ90I84sL83Vq%2BRleEg9M%2BnXSK%2BgQSdvcPozXpGQNnwsn2yP4vnOJC1sJN5NcMq1su%2FYpZbfOnhGDQA%2Feksshwxe6rm9T03BTiCiNVL9NO8cYOsyf%2Fjz5F3FQX7juWqg%2BKwD0s6UtqsyzfdNvYztpsDiA9G3oBvuU8RBtQIZ5%2FtYdHoDtjZ1M3rtlp%2F6Pgf7hWJKWE0yWKNIrvsfZgSqBAcPxxrUJSrWMT%2Fq3iAEbhdFVG9btfgi%2F9my7X5ity1T2WRWg5GVtOZ0UZjZyJj7dQRPAo%2BX7f%2Bd5T7%2FOcbiNqDuXGSwiXClMymNI0ixh5z3KW801hapfm71VFF4ccaDpz2RhEOVIRFmrjBeLz7oacGIOh7EEKKzIpQUuudvO6a1e9RxEN682BEyiWMfkbdUPRa%2BeiUe5m9QsEk28rvjZ0A2Uz%2BP4x5MIw8YvxvQY6pgFTphXBexGu%2BL6LhDooYvPBGFdqTChaPyXgorlW4K9Nm1bwKugwrLycIcwJImGfnT1TH9zGZBG5rDz50EjQAwySMW8i1Ck9hmi336f3SybpTK2t0euxxpaB%2BhxHGovq9gYzfUWGO6NIYi2cecfy5bcgitLgn9nAzvZen0RUdz%2BP1cnaa3q%2BOsSthdIPpU4e1jPSkMWMJT%2B5zxAclSwexrt1tLFfsrVf&X-Amz-Signature=57ec78b53ae721b85aa33dc5fc996508348f85b149d0feaf1af68cfb4d86d628&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U7GUXX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzQ2Yy6SWDrH7y3Ly%2BrcZ0NMXXoAZQ2NCNMGDzyu1YSAiAf2450Q6l0ODBvaVoB6cYQQNnIqN3BLpVpbgsn0tfMcir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMCXf%2BWCxohH7t0HGMKtwDC0Ow4UVwIr09F1GdXH6LBQ%2BiNGilSbFysh787LsOq%2BgcZYWi3IDiWYRtLozdePX9EosrkW%2BqS3OE0NQ%2BIFO5FeV1Q7VLsHi4bSRo1y14tBmlfboboGSGPrcWpTxXWVDt9AAyUiLDfcEeQ7z3T9sw0of7OUuCSTNLleSw1fr8ZuZOWloPJnIqh2ATspJV2r1FLlRNbMcJ90I84sL83Vq%2BRleEg9M%2BnXSK%2BgQSdvcPozXpGQNnwsn2yP4vnOJC1sJN5NcMq1su%2FYpZbfOnhGDQA%2Feksshwxe6rm9T03BTiCiNVL9NO8cYOsyf%2Fjz5F3FQX7juWqg%2BKwD0s6UtqsyzfdNvYztpsDiA9G3oBvuU8RBtQIZ5%2FtYdHoDtjZ1M3rtlp%2F6Pgf7hWJKWE0yWKNIrvsfZgSqBAcPxxrUJSrWMT%2Fq3iAEbhdFVG9btfgi%2F9my7X5ity1T2WRWg5GVtOZ0UZjZyJj7dQRPAo%2BX7f%2Bd5T7%2FOcbiNqDuXGSwiXClMymNI0ixh5z3KW801hapfm71VFF4ccaDpz2RhEOVIRFmrjBeLz7oacGIOh7EEKKzIpQUuudvO6a1e9RxEN682BEyiWMfkbdUPRa%2BeiUe5m9QsEk28rvjZ0A2Uz%2BP4x5MIw8YvxvQY6pgFTphXBexGu%2BL6LhDooYvPBGFdqTChaPyXgorlW4K9Nm1bwKugwrLycIcwJImGfnT1TH9zGZBG5rDz50EjQAwySMW8i1Ck9hmi336f3SybpTK2t0euxxpaB%2BhxHGovq9gYzfUWGO6NIYi2cecfy5bcgitLgn9nAzvZen0RUdz%2BP1cnaa3q%2BOsSthdIPpU4e1jPSkMWMJT%2B5zxAclSwexrt1tLFfsrVf&X-Amz-Signature=e0a0c1d7d8c1ece7344929ee92aa20c426869f1f12425a56e200a9905bc62410&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
