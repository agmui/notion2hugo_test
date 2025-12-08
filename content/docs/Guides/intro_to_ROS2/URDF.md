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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJF7RHFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZNd0HlRR2qYF31VlHSuNaGgnbc%2BPhk1V05TrrSKEYSAiAE%2BNBVeD%2BP%2FAGayt%2BK723vOgNGdZlsMrwNgWa6TuFH9yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31XP%2FRgmmBtrJLcKKtwDc9NM%2FH4vo0emlKP1DTdVglsS%2BBTG9H195yhEixtwRPXLQmkRTWshDfhz8jBWk3vhzhzEIjk3%2FoSdpvZXgU5Z%2F5HVjBVstEs0TPBa%2FQKDJjeueZWh7gjgETRs8wI%2BBY5kLiZ%2FKkG7wSfKqA9Hns%2FoRTvvRvQalMT71%2B1nwdeJQBhHaFN17s1jCHXof9tXlmaxsxMHj6%2F8Ota%2Bqh2vZqFxE65ACeUE%2F7hGq2jFD%2FBR8dqd%2FLm1SmUTCTog0PQF7NIPKeGF0VR7TKlRxDIQ5d8IgKwGY9U%2By5eEqikSNTp8axzjn6GdjBpu4Welprp08zkf%2FEDvrh%2BVLuTihxwGzWHX1oAv4mrfu9BYBL8gt0npHgd3NvWVBn0aDhrj4YTewcm0cCXj%2BhNfMvOQl9IUjuT0RFhJkZnmSEY1V5kgQK5zBBBz6Y5HZt0vcw5jYiA2%2Ffn%2FzBTBSsyfmY2hE3jJ968U1DdIzlchGN%2Fp4jBrFxsfjdpSmJhBA3T64FvRAG9rkuxUui%2BjgqJqlPd91CGHQrSdO5cR6Wv7UwAYigapXtY7F%2B7hToQzixhbwxDclKvWYD7ZvB0aqeQ1DvZKs2I%2Fn21kHrF3bsQq4%2B9%2BRcFLhzG244puiJizkK3qULyXoHcw3tDYyQY6pgFXODoDjgTzA81GlZnaddk3W4NOUEnj7B2D8TAY8f3b3CUHFErMtZRkJStzbyvpfiANWbqY4DdXhhLGVEhvNj4vp0U%2BeAI5eSumObaNPoFmgJV3eWoI6gyWApAsVZGDgCimsVxOrkdntejWIcGxSNuxfr3mzNHq5jx7bumtB3fmLcUrTiPkhqTBKQ7jZwLh2PVTbdvVPgc1YGxv%2BNWC8Oc9VjYkpUB9&X-Amz-Signature=a07ae04566db5c5cf633e1df1835eae35c14b01690b82df7ec855b80c118e634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJF7RHFO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZNd0HlRR2qYF31VlHSuNaGgnbc%2BPhk1V05TrrSKEYSAiAE%2BNBVeD%2BP%2FAGayt%2BK723vOgNGdZlsMrwNgWa6TuFH9yqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31XP%2FRgmmBtrJLcKKtwDc9NM%2FH4vo0emlKP1DTdVglsS%2BBTG9H195yhEixtwRPXLQmkRTWshDfhz8jBWk3vhzhzEIjk3%2FoSdpvZXgU5Z%2F5HVjBVstEs0TPBa%2FQKDJjeueZWh7gjgETRs8wI%2BBY5kLiZ%2FKkG7wSfKqA9Hns%2FoRTvvRvQalMT71%2B1nwdeJQBhHaFN17s1jCHXof9tXlmaxsxMHj6%2F8Ota%2Bqh2vZqFxE65ACeUE%2F7hGq2jFD%2FBR8dqd%2FLm1SmUTCTog0PQF7NIPKeGF0VR7TKlRxDIQ5d8IgKwGY9U%2By5eEqikSNTp8axzjn6GdjBpu4Welprp08zkf%2FEDvrh%2BVLuTihxwGzWHX1oAv4mrfu9BYBL8gt0npHgd3NvWVBn0aDhrj4YTewcm0cCXj%2BhNfMvOQl9IUjuT0RFhJkZnmSEY1V5kgQK5zBBBz6Y5HZt0vcw5jYiA2%2Ffn%2FzBTBSsyfmY2hE3jJ968U1DdIzlchGN%2Fp4jBrFxsfjdpSmJhBA3T64FvRAG9rkuxUui%2BjgqJqlPd91CGHQrSdO5cR6Wv7UwAYigapXtY7F%2B7hToQzixhbwxDclKvWYD7ZvB0aqeQ1DvZKs2I%2Fn21kHrF3bsQq4%2B9%2BRcFLhzG244puiJizkK3qULyXoHcw3tDYyQY6pgFXODoDjgTzA81GlZnaddk3W4NOUEnj7B2D8TAY8f3b3CUHFErMtZRkJStzbyvpfiANWbqY4DdXhhLGVEhvNj4vp0U%2BeAI5eSumObaNPoFmgJV3eWoI6gyWApAsVZGDgCimsVxOrkdntejWIcGxSNuxfr3mzNHq5jx7bumtB3fmLcUrTiPkhqTBKQ7jZwLh2PVTbdvVPgc1YGxv%2BNWC8Oc9VjYkpUB9&X-Amz-Signature=004dd3214321298f31ea278e0dc9b9bde6203643cafcc1d092973f502d2c5401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
