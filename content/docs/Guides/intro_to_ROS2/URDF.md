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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJBUWPU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCo0lxzAOeC65Vk%2BJ0lIYJBg9GUq7s9tqCMYRKqIVNbiAIgVsZvtk7ywc%2BCc034jmV6wSr%2B%2BXen9fDUXvm0ftsJR8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2F96OzD2bWIx3BNtircAzGu6DqO6dZbKNNJtnj5hg3p2ipc2t7rf7d0NfCH%2FkCwpcYgI0w9HKyKMIrdarajY5FANeuDYNN02v5NhcxCOXaaWtf9QpwRcskSuphHJAp5N2xji7IoGXX8GrhfY6Nr4oxcG5yiHIPYRe5BMqujwIhdyh2vXPUqXrRQqfWrI%2BUriXrxLvdKRykKxELBo2Pr43El6QBLl4LT4hpLZopotY3wARuvKok%2BTWw4zRvcAdCzvly16uGicXioOVzWhRyfiNXXcFhzD65aY%2F9G4%2BH7UPr2PSnYWINQb6YHwjaTY%2B%2B%2BhRbi2wtzAoOXXGx%2BwHcRLkKqHTMJOaHXACw0NJP1HEcfC5ZvjkwB60e9peGUV2io0kB3YeLuTGDuRqgOdyvO3FPAZK%2Fc9wOTSx8zgzhKuNlQxwyMSHsuIKdrrYBTLRADe7huD836SjCXdsVFwhGjZhqEoTdFzmsfxy8RDm3QrOqc0%2FwLjYD4W00%2Bvgm7J%2FLKIXtuNCq0UVxVMGt1VbMCWjMbm8kUEnMd1Q%2FjeeBj6g%2FaHvWM%2Fadt9h%2BwDMc3aTncI692%2Feseua9IltHabVh9bcbRTKoEC4w%2FTS1DUQxEzLnwkPh6Z0zQFUIvffFvoJuwXR6apvmCxZD3R9h6MLHf8MEGOqUBYO9nggxOxXVPNEJ%2B5e%2Bd0nnB8QyuAes9IcgRxsY7NJ1lX1xMCKfPOsMdCWnFCO0Rs1g%2B4SQSgnSIRhAqN84DV7KWMQUTYhgvs2q64fXcL5zBhuDxzeTKjLEuuSzfSMIlxvdm%2FPvk9sXZpRuT%2FmqtBw82Honkhq4gMSujXF0uXBHl2LUjjCbyJRenVLiAQFtlsHKXAL33x%2B28I%2F3YOHIQwHRWdwhp&X-Amz-Signature=fb9d4fa1bb5b8fd1de5bb28c525e74ea7de0434290612c38b38352eae35a1ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQJBUWPU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCo0lxzAOeC65Vk%2BJ0lIYJBg9GUq7s9tqCMYRKqIVNbiAIgVsZvtk7ywc%2BCc034jmV6wSr%2B%2BXen9fDUXvm0ftsJR8sqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2F96OzD2bWIx3BNtircAzGu6DqO6dZbKNNJtnj5hg3p2ipc2t7rf7d0NfCH%2FkCwpcYgI0w9HKyKMIrdarajY5FANeuDYNN02v5NhcxCOXaaWtf9QpwRcskSuphHJAp5N2xji7IoGXX8GrhfY6Nr4oxcG5yiHIPYRe5BMqujwIhdyh2vXPUqXrRQqfWrI%2BUriXrxLvdKRykKxELBo2Pr43El6QBLl4LT4hpLZopotY3wARuvKok%2BTWw4zRvcAdCzvly16uGicXioOVzWhRyfiNXXcFhzD65aY%2F9G4%2BH7UPr2PSnYWINQb6YHwjaTY%2B%2B%2BhRbi2wtzAoOXXGx%2BwHcRLkKqHTMJOaHXACw0NJP1HEcfC5ZvjkwB60e9peGUV2io0kB3YeLuTGDuRqgOdyvO3FPAZK%2Fc9wOTSx8zgzhKuNlQxwyMSHsuIKdrrYBTLRADe7huD836SjCXdsVFwhGjZhqEoTdFzmsfxy8RDm3QrOqc0%2FwLjYD4W00%2Bvgm7J%2FLKIXtuNCq0UVxVMGt1VbMCWjMbm8kUEnMd1Q%2FjeeBj6g%2FaHvWM%2Fadt9h%2BwDMc3aTncI692%2Feseua9IltHabVh9bcbRTKoEC4w%2FTS1DUQxEzLnwkPh6Z0zQFUIvffFvoJuwXR6apvmCxZD3R9h6MLHf8MEGOqUBYO9nggxOxXVPNEJ%2B5e%2Bd0nnB8QyuAes9IcgRxsY7NJ1lX1xMCKfPOsMdCWnFCO0Rs1g%2B4SQSgnSIRhAqN84DV7KWMQUTYhgvs2q64fXcL5zBhuDxzeTKjLEuuSzfSMIlxvdm%2FPvk9sXZpRuT%2FmqtBw82Honkhq4gMSujXF0uXBHl2LUjjCbyJRenVLiAQFtlsHKXAL33x%2B28I%2F3YOHIQwHRWdwhp&X-Amz-Signature=d5cbe60ce3952c50f1b0034db8775e0de5da78a57976e4eeec1e794c40b7c947&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
