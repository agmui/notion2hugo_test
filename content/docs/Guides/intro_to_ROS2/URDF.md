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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W46FVPO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9bI7DIwG%2FBUFYkvs6AZRkMHS0rGttxqgTY4VWXLpJHAiAmslyU9vS7WlSu1QSVzuyw3SvPWcw%2FINy9f0%2FPy3fZzir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMhmapOnY5KLDmeKyKtwDtO82pPE0ixGhSuOsyfc313rzGonFeXgn5swgiUxRJrD8dkXRiSH6xtj%2BmjfK4gEFk%2BIgDvS%2BCmXOphnnGk0RT%2Fec5AI1PzEqSOksxPi6QocaUEV8XahHXyqQg427szslJYc%2Bz4TfsccJF%2FZkz2VF5Xp2e3wiWqmJ6zBARTdiHzEeTU9Mvzd4DUK3J22szI6rP0vfAEgCuAF%2Fn48wDQWFj214luCA4jWC4PjS6x8y8Ag6NIVGgJeqDiRsa9kGxgidMu3s%2Ffme6PYtUKMUOMFF4JKe21wrVWBySkb79IorBDzOc68%2BdRxi65%2BBVxkPCxXxGY8dyZuU3YVknDGZUsvNAGVq5xN5uMbB7Dl%2F3%2F%2BLWi%2BiQLj0Wts5loXCmH8%2B5HJK02yK9k%2BM88ajRWQK4h9ocqQgi%2F0gBCFPseNxNG6mD8UOrKWpdMYfRJM5dWxa4Xdpss8R8FMDJVeWTWbizlIfb%2B71nGPepaZbujCh3lonq6Q3Q9z6vQUV%2BT67gmoCeXQTUa2ZQRc7StEMVyHZImqH%2F9XU%2F9zXKmaKC%2BaaZoh5H0xiohtdbon1KHxz%2BC%2FV09VB%2F%2BK9zTAJh12oMYERjfFXJkuIZ0%2FDpTFewAgGe%2BEsS7HHYY7Njb%2BHSw9t2igwm%2BnxxAY6pgEDfeY79%2B0YhIe6EeANSCgokTLwTQiTzMgHP69d84lAwnofAKZjrN8rzIQrAFNMlWqIdYuP7TIa3Nv%2FB6GI3bpLo4NztQX8Uoe50h%2FMOHmzgSbYji6dWYxUjN2tjeMaJsOaGOpaYcXFcd4YR8NiUPm1K7CDJ9gOBzJ4Oa1bxiO7DdzAFXlOIriDIJ4kVBkKSJ505pgzRtbQ7SDsz8ZmAupepY9e9lOU&X-Amz-Signature=1111aaa9d02a4f63c057f328b8d30299d3c98ff10d113685a2e0da6f63fd8303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W46FVPO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9bI7DIwG%2FBUFYkvs6AZRkMHS0rGttxqgTY4VWXLpJHAiAmslyU9vS7WlSu1QSVzuyw3SvPWcw%2FINy9f0%2FPy3fZzir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMhmapOnY5KLDmeKyKtwDtO82pPE0ixGhSuOsyfc313rzGonFeXgn5swgiUxRJrD8dkXRiSH6xtj%2BmjfK4gEFk%2BIgDvS%2BCmXOphnnGk0RT%2Fec5AI1PzEqSOksxPi6QocaUEV8XahHXyqQg427szslJYc%2Bz4TfsccJF%2FZkz2VF5Xp2e3wiWqmJ6zBARTdiHzEeTU9Mvzd4DUK3J22szI6rP0vfAEgCuAF%2Fn48wDQWFj214luCA4jWC4PjS6x8y8Ag6NIVGgJeqDiRsa9kGxgidMu3s%2Ffme6PYtUKMUOMFF4JKe21wrVWBySkb79IorBDzOc68%2BdRxi65%2BBVxkPCxXxGY8dyZuU3YVknDGZUsvNAGVq5xN5uMbB7Dl%2F3%2F%2BLWi%2BiQLj0Wts5loXCmH8%2B5HJK02yK9k%2BM88ajRWQK4h9ocqQgi%2F0gBCFPseNxNG6mD8UOrKWpdMYfRJM5dWxa4Xdpss8R8FMDJVeWTWbizlIfb%2B71nGPepaZbujCh3lonq6Q3Q9z6vQUV%2BT67gmoCeXQTUa2ZQRc7StEMVyHZImqH%2F9XU%2F9zXKmaKC%2BaaZoh5H0xiohtdbon1KHxz%2BC%2FV09VB%2F%2BK9zTAJh12oMYERjfFXJkuIZ0%2FDpTFewAgGe%2BEsS7HHYY7Njb%2BHSw9t2igwm%2BnxxAY6pgEDfeY79%2B0YhIe6EeANSCgokTLwTQiTzMgHP69d84lAwnofAKZjrN8rzIQrAFNMlWqIdYuP7TIa3Nv%2FB6GI3bpLo4NztQX8Uoe50h%2FMOHmzgSbYji6dWYxUjN2tjeMaJsOaGOpaYcXFcd4YR8NiUPm1K7CDJ9gOBzJ4Oa1bxiO7DdzAFXlOIriDIJ4kVBkKSJ505pgzRtbQ7SDsz8ZmAupepY9e9lOU&X-Amz-Signature=c82adf07c36ccdc8d95da848428764453e23cf8e60b3616df8a1cccd26efeaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
