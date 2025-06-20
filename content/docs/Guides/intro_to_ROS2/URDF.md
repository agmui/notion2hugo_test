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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IBMO7LI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDugfKzHC3a%2F7BLjR5YQZ9IuvLnmYZn8ZcZvO8jxn0PGwIgbepPxnmTqoYCQurbk0%2BqP51diXZmfOoET1ekYnGoVvUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGO02sKLPIUcTdfayrcA%2F4UlRl2tn1c%2FjZV9U0efIjolutlSGxuq3fiCfUID0EDSvitPI5lulvE4lkTjf5Gd03u90SgK09CqhXqNsHGyNZED2VLfN4qUf0%2FVowt916r3XaDfY%2Fd2G11UsusWO%2B5e56KbUaZyJzxqxwHuB7LOpsr%2FioxT2aV96vlZql34ccIBcM6ImriogflDWS3npvvzgNbGVJiUMnd4MLHlA6kZEoIaXKIffOQ1zUdFuPuh282A01vqWFjRhGfkb5cRswim53gQX9DM9UyfsHUzmPDp%2BAgGghL1UMw2Pf6UY3rD5VRO7nILUvUFQsg6kxPf%2Bf%2BpRFBL3pMMRooIaZGwqvf8iSIlNYu6Lma2ZYcL5hsJZJHZeOtFMQWM1rvLACRddZwXn1ml1UxycETLRGAYaGdsHjQtbqR0I9wOybfeZmgTUblS%2BYc4QpkctTaouPdhASZpnFYjHOMrt6xSYufb77DhJsh2gbBnFbaJ6Avfi5DTR4Q0hdai5yM9yza048zJGaof%2F4p6RiWyy5xlsGuxIV7c8V4tO4IWNpb0TbU3Ro1IM3p4gFYkb4zuXU7LMjvnbB%2Bsk8%2Fq7tp67T4aErwD7edUXEzFmdQW4X0G4rG3nGvNIOq5dRajEhLMcxTtLUXMM2y1sIGOqUBtcegrThGZUVk7I9zyCz3nyhI7BcLFxl0q2rHM1LysYPe6F74uNwe8WiD%2FlvVQEvNaQAJYtrHGOIdnYa13ulhLyHp6yct2c5DPeF0lhjxJUa7v2%2FCrt40gpAIvhAqu4eKgk2fwF9S3x%2FIICtCOkiwcFwof6LoD6I9HtbayMSki2sf2Ax7jh55tVlcfHB38rf4WOZrK%2FXkRmYpx2QAJlagzBrEhLV%2B&X-Amz-Signature=61ed5ce5a2f4376b1c70b9bca90aae0a40160559874ee5f9caf21f2d3e928ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IBMO7LI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDugfKzHC3a%2F7BLjR5YQZ9IuvLnmYZn8ZcZvO8jxn0PGwIgbepPxnmTqoYCQurbk0%2BqP51diXZmfOoET1ekYnGoVvUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGO02sKLPIUcTdfayrcA%2F4UlRl2tn1c%2FjZV9U0efIjolutlSGxuq3fiCfUID0EDSvitPI5lulvE4lkTjf5Gd03u90SgK09CqhXqNsHGyNZED2VLfN4qUf0%2FVowt916r3XaDfY%2Fd2G11UsusWO%2B5e56KbUaZyJzxqxwHuB7LOpsr%2FioxT2aV96vlZql34ccIBcM6ImriogflDWS3npvvzgNbGVJiUMnd4MLHlA6kZEoIaXKIffOQ1zUdFuPuh282A01vqWFjRhGfkb5cRswim53gQX9DM9UyfsHUzmPDp%2BAgGghL1UMw2Pf6UY3rD5VRO7nILUvUFQsg6kxPf%2Bf%2BpRFBL3pMMRooIaZGwqvf8iSIlNYu6Lma2ZYcL5hsJZJHZeOtFMQWM1rvLACRddZwXn1ml1UxycETLRGAYaGdsHjQtbqR0I9wOybfeZmgTUblS%2BYc4QpkctTaouPdhASZpnFYjHOMrt6xSYufb77DhJsh2gbBnFbaJ6Avfi5DTR4Q0hdai5yM9yza048zJGaof%2F4p6RiWyy5xlsGuxIV7c8V4tO4IWNpb0TbU3Ro1IM3p4gFYkb4zuXU7LMjvnbB%2Bsk8%2Fq7tp67T4aErwD7edUXEzFmdQW4X0G4rG3nGvNIOq5dRajEhLMcxTtLUXMM2y1sIGOqUBtcegrThGZUVk7I9zyCz3nyhI7BcLFxl0q2rHM1LysYPe6F74uNwe8WiD%2FlvVQEvNaQAJYtrHGOIdnYa13ulhLyHp6yct2c5DPeF0lhjxJUa7v2%2FCrt40gpAIvhAqu4eKgk2fwF9S3x%2FIICtCOkiwcFwof6LoD6I9HtbayMSki2sf2Ax7jh55tVlcfHB38rf4WOZrK%2FXkRmYpx2QAJlagzBrEhLV%2B&X-Amz-Signature=e0ec031a15af0c0b495e79f785f4b612358dea22590250cbf26462bc692b0426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
