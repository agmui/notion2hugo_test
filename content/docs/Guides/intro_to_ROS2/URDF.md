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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GE4O7Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQiJCQLoOX0MjtlqofV2oByB17fZ3RVt1CdNUZkHpVgIhAMgtIHJqINEuyEKM7j%2F6tz7mwDVJ1VqWYmfIKZhTZOAWKv8DCBwQABoMNjM3NDIzMTgzODA1IgwyIrbCVAbVbpQScHAq3ANRCZ1GAHf%2FgD6hl3AbP47Dt6MoBhKJIF3tYc4zy7ly3C3ydFXP4fMPZQCfwnaBa5dATqaDH1IGvAoz4M%2BwQmJve%2BsyTRlpcpTrK71nOoZ2sIA7eXoOzwghtvpcJaiI%2FEwVur5nd%2Fmqkp1u6uf5JBAGtQajBjQhOy%2FIB7Eiwo2ShBJ4OzUw33lS4vzfHJobfS%2Blf6pou0lOvuFQCTmvmarcvbdI5PFr%2F0Gw7CLlgdbhbI2BmETOtpD4YwE4qj5wHjTws676N04jhBIksY9UTBkL1sOtLlRVztKAlk7lTpOOk6h8JQ%2F1NQp1z6XayYGmbs3nsBorWAmRfcXHhI7upCKrWJ%2FpPk7muP7376cjce2MgmIOcZeTRPzOsBTP0bZO9wiDkHzjGlae3Xu8oIhJqUCAHPZDyK%2FjGaqpw%2BE6%2BQUPK%2FBiKOZsHlX18T2L4cSLMi0D6xbG9YKzadJuCTPfDbIOrNorVwlDN7uixlG1qBfQQtILTgvZ3%2FY3Vq%2FvRIqKgZ9uLQFdlON%2BpzpuWXr8dZJL7OM4GKXZIcYrbOYQIdxXmMDpHLe5Hwl7ITXMplPTMU4pMLzyrI1pMB%2FcREvjvXkEJ7BKV1kUk4Xy8LyCGHSHyB8fNTyn4YdyD1LxLzDgw7nEBjqkAeyfKg5pk6EfiCBysZe%2BU9Gp%2FRW5wCfl2b562tpaw59ZHrjLS7gzuMpD49Zwm59qYrdurDXGk8MEYmsrbgdS5tj2OXhFsYER%2BhLLfWtLCdOBIner7DQc7iOXOvfLUDPUb6wMEUhqI9S6ElJZjmwxT8z3WpwghLUjlvd0bRfGqtQVtVcTIBBBYYUXhnu1tgN%2BBljSfIlThhHDTCP%2Bb19SHiWnSev9&X-Amz-Signature=475189023d3687b1a46f042705e609ecce9d4d9186f498cbb47276aec9b2d2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665GE4O7Q%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQiJCQLoOX0MjtlqofV2oByB17fZ3RVt1CdNUZkHpVgIhAMgtIHJqINEuyEKM7j%2F6tz7mwDVJ1VqWYmfIKZhTZOAWKv8DCBwQABoMNjM3NDIzMTgzODA1IgwyIrbCVAbVbpQScHAq3ANRCZ1GAHf%2FgD6hl3AbP47Dt6MoBhKJIF3tYc4zy7ly3C3ydFXP4fMPZQCfwnaBa5dATqaDH1IGvAoz4M%2BwQmJve%2BsyTRlpcpTrK71nOoZ2sIA7eXoOzwghtvpcJaiI%2FEwVur5nd%2Fmqkp1u6uf5JBAGtQajBjQhOy%2FIB7Eiwo2ShBJ4OzUw33lS4vzfHJobfS%2Blf6pou0lOvuFQCTmvmarcvbdI5PFr%2F0Gw7CLlgdbhbI2BmETOtpD4YwE4qj5wHjTws676N04jhBIksY9UTBkL1sOtLlRVztKAlk7lTpOOk6h8JQ%2F1NQp1z6XayYGmbs3nsBorWAmRfcXHhI7upCKrWJ%2FpPk7muP7376cjce2MgmIOcZeTRPzOsBTP0bZO9wiDkHzjGlae3Xu8oIhJqUCAHPZDyK%2FjGaqpw%2BE6%2BQUPK%2FBiKOZsHlX18T2L4cSLMi0D6xbG9YKzadJuCTPfDbIOrNorVwlDN7uixlG1qBfQQtILTgvZ3%2FY3Vq%2FvRIqKgZ9uLQFdlON%2BpzpuWXr8dZJL7OM4GKXZIcYrbOYQIdxXmMDpHLe5Hwl7ITXMplPTMU4pMLzyrI1pMB%2FcREvjvXkEJ7BKV1kUk4Xy8LyCGHSHyB8fNTyn4YdyD1LxLzDgw7nEBjqkAeyfKg5pk6EfiCBysZe%2BU9Gp%2FRW5wCfl2b562tpaw59ZHrjLS7gzuMpD49Zwm59qYrdurDXGk8MEYmsrbgdS5tj2OXhFsYER%2BhLLfWtLCdOBIner7DQc7iOXOvfLUDPUb6wMEUhqI9S6ElJZjmwxT8z3WpwghLUjlvd0bRfGqtQVtVcTIBBBYYUXhnu1tgN%2BBljSfIlThhHDTCP%2Bb19SHiWnSev9&X-Amz-Signature=79c656838dfc868916e9761bdfc0e4fc8e826e836252a7daba6a9733079f9bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
