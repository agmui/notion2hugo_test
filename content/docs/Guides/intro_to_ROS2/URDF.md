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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBOWRLQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBUYy9fnLGPySXNblpEQO4kPHvm%2F2UEDTDV%2BzpQL3kscAiAWMfKASuoczjk1dDNb2PfuQsSNBy0SHzW%2B3Gv8roLImyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocPzgr9m6%2B9wBHoGKtwDYwD8jCzSyHhG9YZoJN%2B0yE%2Bkf2Wv3K0RgAm8jLHz0ErruF9P67ICdDlUjC3jWj8REafU7EpIsmcuSo08O0Uo7jhatCQcJoi%2FXZwGG2wAvlg0%2BrxfQF3tyf5gMH2rXMqcX8O%2FLRi%2Bv0pDoDzfjjE8VF%2BVlgYcHMexGSimsVxp%2BIk5cfc4Yg8TuzjMOoKaiz6T9OIXh80wz6oaoqsWN1UdZZIjPTi%2F5Ze2lxZzyaD3d%2BiK6P%2BXxad2DgRtDSfSAMdDGFUQXzeSUu0kVFox2sWXI1pwts%2B2T8VdIxeD2t5Mt0Vk1A2xWsbKZ%2F3uVV3EJM5lh8Jw9nTy11NZYbO8YRwNr1VI%2FIpVsKyB4KV5LWH4bmvoy7HAaaJA6k22jP2pcywjZjBkm3Rqi9%2Bnf3gYyg8w5r4qDyhzVTUlra0aYjDE5DQWm5EU4rQtb5vI8sJUzNcYVFCOv7rS%2Bvty4AytkZS1xYKMTFpqbhVHam9ExlmCIBXlFmbH0s%2BES6haqGOHDDo5wMI3l0YghSM3I0aVCF2UQp2JdpesbSx50G%2BDPpMlx%2FZbXXgDW0pC2MQsY3MGujGmV0m3UkuTuJvuEAN4k9XTV3aYD6%2Bw%2Bap5HqxFzOiVZD3ekZTzbXf%2BoUECIk4whae6wQY6pgFAIUvbQAiZ4bhG8DeYdCBBQSPMpVXeQZt3kgf9DnafJ1QiH95Q9NdLSvEoka7ORGlSjM0synGW8vzIXaSNib92usQbGK9VCK1xxBcXYZiJNdjqN7s0GJ9E4BOATgFkRvRsBNdNq9YF1%2BXqFCyDT8MzIdDnQKWRsjIcGWw3XR6fOFbkJWMw8uT1QX6C0xoftdN9Gor1roPm8G2eqsd7ALGtfTLjXaEs&X-Amz-Signature=56f12d03cb0c9d97a40af674ffc79d8aff8ba51e1a5abf388a04d00314c8d560&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBOWRLQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBUYy9fnLGPySXNblpEQO4kPHvm%2F2UEDTDV%2BzpQL3kscAiAWMfKASuoczjk1dDNb2PfuQsSNBy0SHzW%2B3Gv8roLImyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocPzgr9m6%2B9wBHoGKtwDYwD8jCzSyHhG9YZoJN%2B0yE%2Bkf2Wv3K0RgAm8jLHz0ErruF9P67ICdDlUjC3jWj8REafU7EpIsmcuSo08O0Uo7jhatCQcJoi%2FXZwGG2wAvlg0%2BrxfQF3tyf5gMH2rXMqcX8O%2FLRi%2Bv0pDoDzfjjE8VF%2BVlgYcHMexGSimsVxp%2BIk5cfc4Yg8TuzjMOoKaiz6T9OIXh80wz6oaoqsWN1UdZZIjPTi%2F5Ze2lxZzyaD3d%2BiK6P%2BXxad2DgRtDSfSAMdDGFUQXzeSUu0kVFox2sWXI1pwts%2B2T8VdIxeD2t5Mt0Vk1A2xWsbKZ%2F3uVV3EJM5lh8Jw9nTy11NZYbO8YRwNr1VI%2FIpVsKyB4KV5LWH4bmvoy7HAaaJA6k22jP2pcywjZjBkm3Rqi9%2Bnf3gYyg8w5r4qDyhzVTUlra0aYjDE5DQWm5EU4rQtb5vI8sJUzNcYVFCOv7rS%2Bvty4AytkZS1xYKMTFpqbhVHam9ExlmCIBXlFmbH0s%2BES6haqGOHDDo5wMI3l0YghSM3I0aVCF2UQp2JdpesbSx50G%2BDPpMlx%2FZbXXgDW0pC2MQsY3MGujGmV0m3UkuTuJvuEAN4k9XTV3aYD6%2Bw%2Bap5HqxFzOiVZD3ekZTzbXf%2BoUECIk4whae6wQY6pgFAIUvbQAiZ4bhG8DeYdCBBQSPMpVXeQZt3kgf9DnafJ1QiH95Q9NdLSvEoka7ORGlSjM0synGW8vzIXaSNib92usQbGK9VCK1xxBcXYZiJNdjqN7s0GJ9E4BOATgFkRvRsBNdNq9YF1%2BXqFCyDT8MzIdDnQKWRsjIcGWw3XR6fOFbkJWMw8uT1QX6C0xoftdN9Gor1roPm8G2eqsd7ALGtfTLjXaEs&X-Amz-Signature=2d1b1a0be994a35e511066258065e9b4e4b3ceb0d5bf47521e7e96695d63f0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
