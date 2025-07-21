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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKMV3XU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeg5szaJNl53XL%2BBGMn6Tag9PGnkRUmu%2BDJmOKBO%2BKgwIhAL7tKuGBCbPxqCkmZzTvMnu6KXAxowP7Y20wHZOk%2BsaJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPcBuJW4IZZNYTjyoq3ANLvA0VPktmyadT%2F76aSMZsx9wly1L7Z%2FJSfNFN6RvJ08tH0SKM6YqfpcOi2JHUrGhxnBRTupCWtciwt4t4LyPlHE4dSyXGbvFJ0Gkk3to6kf0%2BFXK%2FRBogL8ByN8I5zVF%2BIwJp2QtptCUWkDSr1WOS69arlbupKF5c6i8i3mGS3ioJL0ODLdEG2ZGDeA0lwrP3uAblT5CMR5mEhonxRdeYP8%2BxAJWN5WjPTuP7DiJuh3NkBYT2VfJ3XWTbqnrr%2BlTPDKKVgI2KCgF5bIYZ3OhJj%2F%2BWFugocUIDLJr26P9QTBrWoU39Zw4btyX9YlS%2BwIxxk25gdXrFnGtPuqAjYNc7Mq%2FovPVhakbbwPvqoaf%2B6Sh85WGJkeufyhzMqtUVL8ryFs1%2BCiu0%2Bl2H0FdBfPGTR2p5oYqCB3tKjwd6j5vTfoPrMZ6Hrjy7Z%2F2WOoyjTNotBFkESZKcee5STgoEbjqAF31olulE1bZmTBn3WDr20LT%2FEGi%2BlzR7dMgSZFZQJ45pUNITj5tQn82pVSUH%2B1Q5KwDvMypzLxhX5GOri1S8pv8N3GsJtjh%2BNIJyV3ls0kh3kxpbvycwGoVVLY%2FUZgF2B9WIeFiYhhBLOFWAUbHsVwCj20d%2BfPH4IfwnoDDqkvfDBjqkATbHQYTf%2BVKsGP1FU5nY9N3TMKlTzQ1hlE3cRJQEChEmKTtTxim7RU5%2BFAOvutk1qWt1FEM%2B1CBGUdQRqw7%2F0A2owaVgy5p5J5TkaJN8gLWspT6Q%2F6JHJqPPXGgn1%2B3ulZYiv5tW9bL0beCayGryo3%2F9gjzYDd9mFwYbS%2BuWbpwmn5SNnuRmcpdzHkNBDYd0RgAAy4VDqdJGuYkTmV4VQ%2FK5nLGh&X-Amz-Signature=3792402bc9f027622311dd9c3f6de6b4d284c34b9d83600ff3d7a806e27c74b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKMV3XU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeg5szaJNl53XL%2BBGMn6Tag9PGnkRUmu%2BDJmOKBO%2BKgwIhAL7tKuGBCbPxqCkmZzTvMnu6KXAxowP7Y20wHZOk%2BsaJKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPcBuJW4IZZNYTjyoq3ANLvA0VPktmyadT%2F76aSMZsx9wly1L7Z%2FJSfNFN6RvJ08tH0SKM6YqfpcOi2JHUrGhxnBRTupCWtciwt4t4LyPlHE4dSyXGbvFJ0Gkk3to6kf0%2BFXK%2FRBogL8ByN8I5zVF%2BIwJp2QtptCUWkDSr1WOS69arlbupKF5c6i8i3mGS3ioJL0ODLdEG2ZGDeA0lwrP3uAblT5CMR5mEhonxRdeYP8%2BxAJWN5WjPTuP7DiJuh3NkBYT2VfJ3XWTbqnrr%2BlTPDKKVgI2KCgF5bIYZ3OhJj%2F%2BWFugocUIDLJr26P9QTBrWoU39Zw4btyX9YlS%2BwIxxk25gdXrFnGtPuqAjYNc7Mq%2FovPVhakbbwPvqoaf%2B6Sh85WGJkeufyhzMqtUVL8ryFs1%2BCiu0%2Bl2H0FdBfPGTR2p5oYqCB3tKjwd6j5vTfoPrMZ6Hrjy7Z%2F2WOoyjTNotBFkESZKcee5STgoEbjqAF31olulE1bZmTBn3WDr20LT%2FEGi%2BlzR7dMgSZFZQJ45pUNITj5tQn82pVSUH%2B1Q5KwDvMypzLxhX5GOri1S8pv8N3GsJtjh%2BNIJyV3ls0kh3kxpbvycwGoVVLY%2FUZgF2B9WIeFiYhhBLOFWAUbHsVwCj20d%2BfPH4IfwnoDDqkvfDBjqkATbHQYTf%2BVKsGP1FU5nY9N3TMKlTzQ1hlE3cRJQEChEmKTtTxim7RU5%2BFAOvutk1qWt1FEM%2B1CBGUdQRqw7%2F0A2owaVgy5p5J5TkaJN8gLWspT6Q%2F6JHJqPPXGgn1%2B3ulZYiv5tW9bL0beCayGryo3%2F9gjzYDd9mFwYbS%2BuWbpwmn5SNnuRmcpdzHkNBDYd0RgAAy4VDqdJGuYkTmV4VQ%2FK5nLGh&X-Amz-Signature=48f8df896080078ed24635039a9a851cdafc34641d3fee8639fbf5ac2c6924bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
