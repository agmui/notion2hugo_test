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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LSDOR6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOk%2BKtoNJu0%2FhcVevlgMsXaN2LcsJ5aL81JjKca0gO3AiEAht5XVnnCuISSLOD2M7Fvx8AVSY0UnHpLRunbKG4PjjYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkr5XYGEcGGgMwZhyrcA6UoHPyoq4VMfX1U6%2BM0hJMCdTtrDUs%2B4t7Yj%2FSlM64MU3IoV0HZsqzEdAQW2nDeO9idNWdetPiM1263F8a%2FpZfm9VU5BnWdVxXDJp85P5gY96HuIxPNSIa6H47wNIrE8XwxXuZ%2FaqWxz%2F%2FvBtqbF%2FAN%2BWx%2BHxLikXSmHJybTm5wGxbe6qn80ikJW6u1skxDYCn8JPpcBXYV2reo2wYE0CvPYFlrfqEQcXbeovSAdoi1e%2F%2BWS%2F6MyqetlUhWPG1zFh5trk9qgRsoEZjTGj9RPf7z07yLEXlvC7vhW0ai%2Fv5IUK%2BreYrW%2BFdOs0oImRxydfhkFDBwv5c7PpGK5iYX6MnzCddhwTttpTFCnAT9oo2wlCKdicxYq%2BypskUe84gZN41xlL2vEMDUMBO%2FGyWDKDnBizySPYIEpVugfo0xMtGfukIFMfQoDnnZVp0b91kMSn9aIGq8TQr55vlxYTvAd8IzSgVwaQwrdeyYpLkH5nJidMwOSNvZ2k%2F6kgvzUzDtZTg%2FMNHXm4aZEIkATxX%2BDT2qCWKLytyt6wYIh26TC0bv0tnlBYQqE%2Bv6JwYKWvlvmJwBv8Okv%2BAYUkAGjg1bcxYLl9IbxVpSqrysnj2hKY9VHU8gRGftdN8hXq0UMP2DzMIGOqUBN1v8d%2B5gMT4eVucDKNzyiuUG1bp3zB6gnpLruQkIqNdF9CzcWgnPtxl%2FllFNLnQ8bUk5MyYAweSdsa98dFhbZksl9VFwh6izYz2wwkCEBzqxGGw%2BHS3B0lBcbKBbvAQ7KODS%2B4per8a9XnpJj04BQbw%2BVk2fiKDpcs61AJ9KoBZ4NqH84ft6SoIe9YbYq5rXgTky1arCVBbyXnwLhMocc5o3Ur6p&X-Amz-Signature=1b515d87f053a9134a29f9f872d5f8cbf48bd98fa192060d0f02504a8973e10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LSDOR6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOk%2BKtoNJu0%2FhcVevlgMsXaN2LcsJ5aL81JjKca0gO3AiEAht5XVnnCuISSLOD2M7Fvx8AVSY0UnHpLRunbKG4PjjYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkr5XYGEcGGgMwZhyrcA6UoHPyoq4VMfX1U6%2BM0hJMCdTtrDUs%2B4t7Yj%2FSlM64MU3IoV0HZsqzEdAQW2nDeO9idNWdetPiM1263F8a%2FpZfm9VU5BnWdVxXDJp85P5gY96HuIxPNSIa6H47wNIrE8XwxXuZ%2FaqWxz%2F%2FvBtqbF%2FAN%2BWx%2BHxLikXSmHJybTm5wGxbe6qn80ikJW6u1skxDYCn8JPpcBXYV2reo2wYE0CvPYFlrfqEQcXbeovSAdoi1e%2F%2BWS%2F6MyqetlUhWPG1zFh5trk9qgRsoEZjTGj9RPf7z07yLEXlvC7vhW0ai%2Fv5IUK%2BreYrW%2BFdOs0oImRxydfhkFDBwv5c7PpGK5iYX6MnzCddhwTttpTFCnAT9oo2wlCKdicxYq%2BypskUe84gZN41xlL2vEMDUMBO%2FGyWDKDnBizySPYIEpVugfo0xMtGfukIFMfQoDnnZVp0b91kMSn9aIGq8TQr55vlxYTvAd8IzSgVwaQwrdeyYpLkH5nJidMwOSNvZ2k%2F6kgvzUzDtZTg%2FMNHXm4aZEIkATxX%2BDT2qCWKLytyt6wYIh26TC0bv0tnlBYQqE%2Bv6JwYKWvlvmJwBv8Okv%2BAYUkAGjg1bcxYLl9IbxVpSqrysnj2hKY9VHU8gRGftdN8hXq0UMP2DzMIGOqUBN1v8d%2B5gMT4eVucDKNzyiuUG1bp3zB6gnpLruQkIqNdF9CzcWgnPtxl%2FllFNLnQ8bUk5MyYAweSdsa98dFhbZksl9VFwh6izYz2wwkCEBzqxGGw%2BHS3B0lBcbKBbvAQ7KODS%2B4per8a9XnpJj04BQbw%2BVk2fiKDpcs61AJ9KoBZ4NqH84ft6SoIe9YbYq5rXgTky1arCVBbyXnwLhMocc5o3Ur6p&X-Amz-Signature=6046971df137b866bda4840f01fa95c3c7d21df5cd811bbafc6dfb75164363a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
