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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J3U3GW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDur3wIYr3wCEm4kREp%2BDWj6x2QXPKd7YY3E6nhSvuccAIgelb%2FAHZvbnLsig2ve5rUQB8zZYFxBh6Wg%2BMTahb0us4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrV%2FvtALKMlKMntvSrcA0cBRfPojzvQyIjahCUbc9J1cLGY0hQny8om9zGbDnRhxEDqUDKQqBQdECyQWE4QoLfUpl7lJqLY3MwDf1lvFzlxJV8%2F1fs6lB27Au29z4QVTEbLQNh0i4%2B2k06mo2EYOPBqWC3qLLpXaP6T8BULXT4cLdKcLne0pTaOBcNRATDHaJeRWmwKkJSdq8OQvMHWSk9aIs6hg8Ze13MoPbZIaLHEZjMXQIUTyWqfnHLZkApGCiyqv78xXiE66n7mbms%2BPuH61oUEzPjvXCsjT9kJMjg%2BP6ANqtz01MWvk3mpsK8PyKxdzsJ2Uv6pspnDg1B6iVCjHPJZ7dH8a%2BOcgk0%2BYeiRrXUVv1%2F3xfWQYD2bEJP%2BK4IO4zW1qXgzg1ekGOR0x8m2GGwqJksXCNxeLWq9E4c96ujWxA8kcYAqGYgD8myxys4eUm2ewDDjSuTZumVVMJsfsCKVjmC80u32EIMyJqXmJN%2Be%2BZdWvMd7ZQ4iZFdaYZB%2Fz1zvOTl2Ie5zZRaE5lfGgUIo%2FAOeeHiRVnqhkOJlQ3tpCjWiM3TILyfLFJQhcFLSF0%2FF9EZ5V3mMuI1mK40NiOyNRuEz%2FQOQOBLgWcUcfp%2F%2Fz6YVRanDo9Jeru6ORRPRiojoRP68leQxMJn4mL4GOqUBJWKVCMai7%2B1%2FQ4mNI9TWm78SdZLzRWHBBnFwbtweF0Cuds7n8VxTI7H7VDufnwwOwNAxJzA4DlzAPYmXUgdYRKV4EPEHVhx0j81x%2FNSbbr1XO9fpCaImqZ3f19qHEH76FV3C0NySgO3UVnYcWBi1CTxlb0T3Ia64l4qveGMT%2BNiHOfB1YsBeNQxuxJsEdS0Zli0AXCwmsOf2RYPwwv2p1jasdyQ4&X-Amz-Signature=572f989136cb320c841fb748e7a0b7e6925a52f9cca1a4c48ffd34f6f6e110d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6J3U3GW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDur3wIYr3wCEm4kREp%2BDWj6x2QXPKd7YY3E6nhSvuccAIgelb%2FAHZvbnLsig2ve5rUQB8zZYFxBh6Wg%2BMTahb0us4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrV%2FvtALKMlKMntvSrcA0cBRfPojzvQyIjahCUbc9J1cLGY0hQny8om9zGbDnRhxEDqUDKQqBQdECyQWE4QoLfUpl7lJqLY3MwDf1lvFzlxJV8%2F1fs6lB27Au29z4QVTEbLQNh0i4%2B2k06mo2EYOPBqWC3qLLpXaP6T8BULXT4cLdKcLne0pTaOBcNRATDHaJeRWmwKkJSdq8OQvMHWSk9aIs6hg8Ze13MoPbZIaLHEZjMXQIUTyWqfnHLZkApGCiyqv78xXiE66n7mbms%2BPuH61oUEzPjvXCsjT9kJMjg%2BP6ANqtz01MWvk3mpsK8PyKxdzsJ2Uv6pspnDg1B6iVCjHPJZ7dH8a%2BOcgk0%2BYeiRrXUVv1%2F3xfWQYD2bEJP%2BK4IO4zW1qXgzg1ekGOR0x8m2GGwqJksXCNxeLWq9E4c96ujWxA8kcYAqGYgD8myxys4eUm2ewDDjSuTZumVVMJsfsCKVjmC80u32EIMyJqXmJN%2Be%2BZdWvMd7ZQ4iZFdaYZB%2Fz1zvOTl2Ie5zZRaE5lfGgUIo%2FAOeeHiRVnqhkOJlQ3tpCjWiM3TILyfLFJQhcFLSF0%2FF9EZ5V3mMuI1mK40NiOyNRuEz%2FQOQOBLgWcUcfp%2F%2Fz6YVRanDo9Jeru6ORRPRiojoRP68leQxMJn4mL4GOqUBJWKVCMai7%2B1%2FQ4mNI9TWm78SdZLzRWHBBnFwbtweF0Cuds7n8VxTI7H7VDufnwwOwNAxJzA4DlzAPYmXUgdYRKV4EPEHVhx0j81x%2FNSbbr1XO9fpCaImqZ3f19qHEH76FV3C0NySgO3UVnYcWBi1CTxlb0T3Ia64l4qveGMT%2BNiHOfB1YsBeNQxuxJsEdS0Zli0AXCwmsOf2RYPwwv2p1jasdyQ4&X-Amz-Signature=43773ff47110872cce4582ea3292e73fb3d909a1e7e09d9f18df45ae55eb1b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
