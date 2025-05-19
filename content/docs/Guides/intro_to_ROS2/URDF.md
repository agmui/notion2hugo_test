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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBLDSXT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCga3iScTTbEFhzG9u7sTcm%2FvRl119AifpTUV0YS7kK%2BwIgU7s2O06SJ%2FXWGXSENBwis%2B3JPyWrH7%2F7D5rGi2HRknUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV%2BHY8Ncn7rwB073ircAzLDwziFlJnyvpVB8dpMoM9hf0ZSn8bHzWcL0AhYuR6nZ7sV0nghlOLJYjmOUfkSr2ZeVueAyMFiirEBvh9%2FPahPButJ4TriHVyTSBXyZqzUy%2FNEcWUcuPX6NgUbnmBNrQQ%2BVxro7F2r6LP5qFfip%2FrQw4ppU9hQ4jphqVSRzG0c3Ao7%2FO8YPUuisAoXR%2BqcuXOV1aNdfOJ4aZhSLTDtjWYXhOqAssvRfBT2aQ%2FHovqapq5AS7lDXMO2Vz3PaPlxW5HvyjQutaed7HMS6Uv%2BXYTQL%2F7u%2B8yJPKdl6KnlckVuKLT7Mp1IGbqtIssaWBEy%2F6Kh5PE2bydAZ5ilhZzgnZwO6aGOVqz%2FrFjVHV%2BWE%2BZ%2FcginqmDE7txqf1ZwJg08LQytepJEG7FQdkhXc%2FGrof0bnY52JFAjIKWEeVmqpvoJ2qv%2F2i2hvSQSSAB%2FdCfo9TzNf8H2ZzRzLskyy3ButlP9LorkEfw%2BCOEg2ZW9YGfYZqkWWXgoRAtCHiTH%2F83ZfC0rFRbBCX0zfWNISRLWDcZq%2FAiineeXQ8IZiICBESFwyLslG7B%2F2Xy3pEbP3H4paz%2BqcRnqUdbzgnll38C8VcDGdSGk22%2FSbMwYyWQni8c8m%2BHOVVRBiKWN1zisMN%2FsqcEGOqUBBQPOFufWQTSRvVXEOsKKBSA6nRjTQg6KrbWESFi5pD5zzyT3nzVnrZ4t1hmyi%2FpJzLLPZyAAFBGzyks9%2BNTjm2xE4che4iH5nYky%2FcsiuP99YQrDdNHKH71w1y4nZFldC8KzODW%2F6eG8YM7Xk%2F9OX3tbS5h16QmJUvI0rRmLl%2FYyFW5cKt3Q3%2FaAQJ3GnE3lVF9FOiOATQZFohEEyzkAlMTK81YV&X-Amz-Signature=091d8fde4cccd311b73fccdc7fc14e4dc8a0701b6b4369db739d8c08253ede3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBLDSXT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCga3iScTTbEFhzG9u7sTcm%2FvRl119AifpTUV0YS7kK%2BwIgU7s2O06SJ%2FXWGXSENBwis%2B3JPyWrH7%2F7D5rGi2HRknUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV%2BHY8Ncn7rwB073ircAzLDwziFlJnyvpVB8dpMoM9hf0ZSn8bHzWcL0AhYuR6nZ7sV0nghlOLJYjmOUfkSr2ZeVueAyMFiirEBvh9%2FPahPButJ4TriHVyTSBXyZqzUy%2FNEcWUcuPX6NgUbnmBNrQQ%2BVxro7F2r6LP5qFfip%2FrQw4ppU9hQ4jphqVSRzG0c3Ao7%2FO8YPUuisAoXR%2BqcuXOV1aNdfOJ4aZhSLTDtjWYXhOqAssvRfBT2aQ%2FHovqapq5AS7lDXMO2Vz3PaPlxW5HvyjQutaed7HMS6Uv%2BXYTQL%2F7u%2B8yJPKdl6KnlckVuKLT7Mp1IGbqtIssaWBEy%2F6Kh5PE2bydAZ5ilhZzgnZwO6aGOVqz%2FrFjVHV%2BWE%2BZ%2FcginqmDE7txqf1ZwJg08LQytepJEG7FQdkhXc%2FGrof0bnY52JFAjIKWEeVmqpvoJ2qv%2F2i2hvSQSSAB%2FdCfo9TzNf8H2ZzRzLskyy3ButlP9LorkEfw%2BCOEg2ZW9YGfYZqkWWXgoRAtCHiTH%2F83ZfC0rFRbBCX0zfWNISRLWDcZq%2FAiineeXQ8IZiICBESFwyLslG7B%2F2Xy3pEbP3H4paz%2BqcRnqUdbzgnll38C8VcDGdSGk22%2FSbMwYyWQni8c8m%2BHOVVRBiKWN1zisMN%2FsqcEGOqUBBQPOFufWQTSRvVXEOsKKBSA6nRjTQg6KrbWESFi5pD5zzyT3nzVnrZ4t1hmyi%2FpJzLLPZyAAFBGzyks9%2BNTjm2xE4che4iH5nYky%2FcsiuP99YQrDdNHKH71w1y4nZFldC8KzODW%2F6eG8YM7Xk%2F9OX3tbS5h16QmJUvI0rRmLl%2FYyFW5cKt3Q3%2FaAQJ3GnE3lVF9FOiOATQZFohEEyzkAlMTK81YV&X-Amz-Signature=560c2f425645f45055a0cd5d786c75ef31eb323b25b704bc0a27f83b1554212c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
