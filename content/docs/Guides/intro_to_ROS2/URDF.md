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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Q6A4MQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDYayjjeajz5UMqMT7%2Bj1yoIqZ7vKVK8lTuRjLxOA8axAiANpsNI%2FZl6%2FESAkS0C1xcosmA0e%2BFAjvmh26RyVqRbgir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMW52PtAlxIufeT9QVKtwD2L5M%2F1kp5jmjD0k7k1bqrojuPvhoryoBkIsJjv9pxQPmLVHnB%2Fkh3hHHAm%2FpvWLGWRqu2TFiia25EQ0jqd29nGeOETQFo71yF6UbmuGAvy%2B927PBrv4LH1kzWYG5P3N%2FfwPM9IRbOCJ7A2IFmpoqcN54Fpafr7P4tVBxPwxwnYJYoF0vscOOKM9ml%2FTcVtibYyTRbRQ7POL4QrBW%2FuJKGV6m5y2D58bwhJVdc5eV4sbjTNaz%2F3Y32QTRlvB27pqYWu0d9akgs6FbPZcGa8tTr0wrpqvCl1Iv55809M281DwNB9mi2K9bhJg8DQ7Ao%2FGoAX%2FwVQiXqr3I06p%2Bn28z%2BN3fCHt7ZZOVLi%2B3iaI1Gr0k0HxPpe96FvcW4OjwPPq523EAYfsVoBvbiwU1lX6AFOXIlVM4gmsLEutwYfTPGZv5FnO06n188HfzNNOhlPT5djDs6p1kq%2Ba8zE6mIgzN%2B2w1BFfHptFhjKqf81yIwgizxX24itXpBiPr2BuGOSq%2F9%2Bke9Ol0lEjwdXfuMaFaOhCzyT8K4YuiaiwfzBgG9wtVNPM8uYSQ0A%2FHaa6jFKQVtN%2By5aUKf8Er9JNRTrKXYR%2Bw5y2VvUXW%2BhSyHTJnsWyAOcFZq05DPIq2MegwkcGkwwY6pgGFuibS5xVfYNLHNsWzb3pSW6jO5QHLRTmuru5emy7fzE7WYPfpSckEQih8f6tj1yOAM7iegouBJBeleOwTU3FLjWh9NMpHuDEjLHz7tPT9k1gAvhHWQY5ex9RvNHDkPKR0m1jTFUSVZoIamcwAwpiLoqC3Ic%2BBE6%2BgkPyfiwOORcScRlVbhcz82ceFWdBo%2FkgctHzU5uMWpBWvlKRdbdxRYOCuoF6M&X-Amz-Signature=74e1adf3c1c0e005341094f3f33f38618378b487a121a608f519e9a0d2f04ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Q6A4MQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDYayjjeajz5UMqMT7%2Bj1yoIqZ7vKVK8lTuRjLxOA8axAiANpsNI%2FZl6%2FESAkS0C1xcosmA0e%2BFAjvmh26RyVqRbgir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMW52PtAlxIufeT9QVKtwD2L5M%2F1kp5jmjD0k7k1bqrojuPvhoryoBkIsJjv9pxQPmLVHnB%2Fkh3hHHAm%2FpvWLGWRqu2TFiia25EQ0jqd29nGeOETQFo71yF6UbmuGAvy%2B927PBrv4LH1kzWYG5P3N%2FfwPM9IRbOCJ7A2IFmpoqcN54Fpafr7P4tVBxPwxwnYJYoF0vscOOKM9ml%2FTcVtibYyTRbRQ7POL4QrBW%2FuJKGV6m5y2D58bwhJVdc5eV4sbjTNaz%2F3Y32QTRlvB27pqYWu0d9akgs6FbPZcGa8tTr0wrpqvCl1Iv55809M281DwNB9mi2K9bhJg8DQ7Ao%2FGoAX%2FwVQiXqr3I06p%2Bn28z%2BN3fCHt7ZZOVLi%2B3iaI1Gr0k0HxPpe96FvcW4OjwPPq523EAYfsVoBvbiwU1lX6AFOXIlVM4gmsLEutwYfTPGZv5FnO06n188HfzNNOhlPT5djDs6p1kq%2Ba8zE6mIgzN%2B2w1BFfHptFhjKqf81yIwgizxX24itXpBiPr2BuGOSq%2F9%2Bke9Ol0lEjwdXfuMaFaOhCzyT8K4YuiaiwfzBgG9wtVNPM8uYSQ0A%2FHaa6jFKQVtN%2By5aUKf8Er9JNRTrKXYR%2Bw5y2VvUXW%2BhSyHTJnsWyAOcFZq05DPIq2MegwkcGkwwY6pgGFuibS5xVfYNLHNsWzb3pSW6jO5QHLRTmuru5emy7fzE7WYPfpSckEQih8f6tj1yOAM7iegouBJBeleOwTU3FLjWh9NMpHuDEjLHz7tPT9k1gAvhHWQY5ex9RvNHDkPKR0m1jTFUSVZoIamcwAwpiLoqC3Ic%2BBE6%2BgkPyfiwOORcScRlVbhcz82ceFWdBo%2FkgctHzU5uMWpBWvlKRdbdxRYOCuoF6M&X-Amz-Signature=70a32d2eb2499b45241909f354cede21d73e9607f9148fcbb43d651eb58b7470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
