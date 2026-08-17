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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNGOIWO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDZY73qg2PXWD41wYM8cuWixJk0k6DHAafTBb5USAr80AiAkRWcRX9GkEFeBY1CHmV1ekuY5JIxlPPL8geajvJdgICr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzBprA8D%2FfuzBpoD%2BKtwDF9j4%2F9vRafBUhkwu274lacq9vrhh5f5n8AKRaWUH8owzzHGdoIXYN84Zxv9i%2FRFmqGoyjkENbWHXLMeJOvBKs%2BVbDAB%2FlEWLY9fJCydNtiyOFMn3%2F36Qeeicc52ApF3XDmh007wrMZ4bHGx611ie2xuQmVc00sHKOfdST2b5wwB87TE%2FXlApaLaiKVWHuQq66CZ4UHm4TaAiKI%2F%2B3AG2bO%2FmrRKIHslQdJd9%2B9etLdQGm2LNLQyZQTbtLVVmVHBGvEIZJiMaT82A0zNHLcgXrnvOpaBfB2skN%2Fo4Lst%2F6f%2FiHWw7oLysEJCzIRkiANMGtIku3r8Znp%2FIk97pzYhsNJ2GqNyCteIjhfuO%2BL8K58KBZ2H7cQHIrGtc%2BCEHAbgnuahKYDexqBRWo64HsIMbfTkfBZT89iK2YJFg4RgzkJp298GCmGPWcMQGkfKNb3EGn3VEc3eWecii3XvJikUhrnY2%2B6xxmxH5cCd%2Bj7qKAKnx6WOadtjDEj%2B092QRz%2FnmCDhAybQcKgJYUXvhHQ6EQ574mS3p5LHq2EuLYPj9Q4zMEdhqODYI%2BDRWyT0UcNk5WGBokZzdjBZVN7nZL%2BkalwIaLmZdHgupka0pG7FukqzBXtQrPRcQAABBz9Iwu66J1AY6pgHNu%2BmH8yIe47IjCHf5ZZ2Gqj9VZykFEDrzKcXEPPz9O3x%2F%2BT5jVAO%2B6sR0xPisr%2FqY%2BlqvyulT2wc2rtxlxiD6Mfj6a6OhT4Cs%2FJOSLBjOZjIEhD7D9kPbVu8tgRO80f%2FGzIfwBl50EXehkbhUi3iYqXpsVoRghZY9cazYrPzQmFgS5sSgBcA2qiDM%2BWzaWLF8bB1TjNN6V%2BOQ1sjpMLtxB%2FusUUjl&X-Amz-Signature=2cc8a4a181ad113a2377ae1d9b2cc1fa7ee1452e81f007b05b087a1592fa9b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKNGOIWO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDZY73qg2PXWD41wYM8cuWixJk0k6DHAafTBb5USAr80AiAkRWcRX9GkEFeBY1CHmV1ekuY5JIxlPPL8geajvJdgICr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMzBprA8D%2FfuzBpoD%2BKtwDF9j4%2F9vRafBUhkwu274lacq9vrhh5f5n8AKRaWUH8owzzHGdoIXYN84Zxv9i%2FRFmqGoyjkENbWHXLMeJOvBKs%2BVbDAB%2FlEWLY9fJCydNtiyOFMn3%2F36Qeeicc52ApF3XDmh007wrMZ4bHGx611ie2xuQmVc00sHKOfdST2b5wwB87TE%2FXlApaLaiKVWHuQq66CZ4UHm4TaAiKI%2F%2B3AG2bO%2FmrRKIHslQdJd9%2B9etLdQGm2LNLQyZQTbtLVVmVHBGvEIZJiMaT82A0zNHLcgXrnvOpaBfB2skN%2Fo4Lst%2F6f%2FiHWw7oLysEJCzIRkiANMGtIku3r8Znp%2FIk97pzYhsNJ2GqNyCteIjhfuO%2BL8K58KBZ2H7cQHIrGtc%2BCEHAbgnuahKYDexqBRWo64HsIMbfTkfBZT89iK2YJFg4RgzkJp298GCmGPWcMQGkfKNb3EGn3VEc3eWecii3XvJikUhrnY2%2B6xxmxH5cCd%2Bj7qKAKnx6WOadtjDEj%2B092QRz%2FnmCDhAybQcKgJYUXvhHQ6EQ574mS3p5LHq2EuLYPj9Q4zMEdhqODYI%2BDRWyT0UcNk5WGBokZzdjBZVN7nZL%2BkalwIaLmZdHgupka0pG7FukqzBXtQrPRcQAABBz9Iwu66J1AY6pgHNu%2BmH8yIe47IjCHf5ZZ2Gqj9VZykFEDrzKcXEPPz9O3x%2F%2BT5jVAO%2B6sR0xPisr%2FqY%2BlqvyulT2wc2rtxlxiD6Mfj6a6OhT4Cs%2FJOSLBjOZjIEhD7D9kPbVu8tgRO80f%2FGzIfwBl50EXehkbhUi3iYqXpsVoRghZY9cazYrPzQmFgS5sSgBcA2qiDM%2BWzaWLF8bB1TjNN6V%2BOQ1sjpMLtxB%2FusUUjl&X-Amz-Signature=fa44914147d07a031635929a515188581fce34a4b97c8ba7ce15246a01b76fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
