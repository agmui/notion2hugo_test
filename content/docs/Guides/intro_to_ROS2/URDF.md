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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBP2Y36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEbdBuuMxJtkm5JQa%2FDkvr501yZuEacSAp6OOvf5u8MQIhALa5TKtXTlU7OsixO53yOmw8H68NHZLv4jjfpfc2bt9PKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybe8TQmUeY9%2BC%2F8Jgq3APhIvZfz%2BnCDOLux0AQq0RlBmbW7bPYiQg1zPf2BTlNxYuKtrYtTS6VgrwV8wsCv8iPp5vhOWP8cnS3kCNjojIknNuEBPuzHKqQfdvQviIlHePCv7elRM%2BYbGlbk15z0XAmWwMfTFWw9lnDVINmhBJ91hly1w8AR5TrI9Wl9KofL45I5eu3HBQ2n8JRMh2PaBKWNWRXm7aZrFTZEOFVAhLHiyJx93y4MPmTjIsnIrMos4lQNjLVNSqTGGTp9OZVLYNbTks1j8IWsNIPchWL0vdWyKdjRIvweTc%2BcXOVs4GkCbZJ0AJx%2BORRK4PNf645Qq9AKVygeNnskPgPAjhYyGLWbFsyrHxu3YmIsCOvckBY6qkuQtX%2B5YAkboatwbLiQZBeKP2flIyCDUwICMBLb%2F37t0w9aS2uwPrMPOKIsgrU%2BMLbSsgSkPeu0O2HBhL25I6yb2wHiZ%2BtsS6Ob9yWwZPHMAdFUO%2ByrGHLi%2BKpWZAmA51v%2F3oLtE%2BMGZh8rEIX6jAIQNA1HEPJjcFjUo396pAVmO8nRGkkaaycK0lmp3lfhMJE0RyzGaJsPOMl9CT2U3qgi3HjZE7EuI2jG54jHbNiWCaxJVfzt1i2WuWEiuwlN52DzCO2zw7413MiLzCi9%2BXEBjqkATBbNijgNPgSNSrPB4qsou9%2B8dfJ6AOeGuWQNb5%2FutDJ80lWt2OMS%2BgQuiR%2BeYi1LLbjdzWrrYj3LWCTNdjfR0psGLe5HMWSOCmDwh32vlteXgAFVwt7wit4R2rlclcK8X3HxvbwZPLgSeNK%2F9KdDkX%2BMEAeL%2FqFheg%2Bn4F0gpY714iY%2ByjGKU7LnXmZkbAdMUZ%2FFzhLQrnpG0szDmrZUSd28Y3E&X-Amz-Signature=6b050cfc9d834fc41cc3bc827f31a83d1d38ed8b5a4a1f4971bb6c23c70f5434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBP2Y36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEbdBuuMxJtkm5JQa%2FDkvr501yZuEacSAp6OOvf5u8MQIhALa5TKtXTlU7OsixO53yOmw8H68NHZLv4jjfpfc2bt9PKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybe8TQmUeY9%2BC%2F8Jgq3APhIvZfz%2BnCDOLux0AQq0RlBmbW7bPYiQg1zPf2BTlNxYuKtrYtTS6VgrwV8wsCv8iPp5vhOWP8cnS3kCNjojIknNuEBPuzHKqQfdvQviIlHePCv7elRM%2BYbGlbk15z0XAmWwMfTFWw9lnDVINmhBJ91hly1w8AR5TrI9Wl9KofL45I5eu3HBQ2n8JRMh2PaBKWNWRXm7aZrFTZEOFVAhLHiyJx93y4MPmTjIsnIrMos4lQNjLVNSqTGGTp9OZVLYNbTks1j8IWsNIPchWL0vdWyKdjRIvweTc%2BcXOVs4GkCbZJ0AJx%2BORRK4PNf645Qq9AKVygeNnskPgPAjhYyGLWbFsyrHxu3YmIsCOvckBY6qkuQtX%2B5YAkboatwbLiQZBeKP2flIyCDUwICMBLb%2F37t0w9aS2uwPrMPOKIsgrU%2BMLbSsgSkPeu0O2HBhL25I6yb2wHiZ%2BtsS6Ob9yWwZPHMAdFUO%2ByrGHLi%2BKpWZAmA51v%2F3oLtE%2BMGZh8rEIX6jAIQNA1HEPJjcFjUo396pAVmO8nRGkkaaycK0lmp3lfhMJE0RyzGaJsPOMl9CT2U3qgi3HjZE7EuI2jG54jHbNiWCaxJVfzt1i2WuWEiuwlN52DzCO2zw7413MiLzCi9%2BXEBjqkATBbNijgNPgSNSrPB4qsou9%2B8dfJ6AOeGuWQNb5%2FutDJ80lWt2OMS%2BgQuiR%2BeYi1LLbjdzWrrYj3LWCTNdjfR0psGLe5HMWSOCmDwh32vlteXgAFVwt7wit4R2rlclcK8X3HxvbwZPLgSeNK%2F9KdDkX%2BMEAeL%2FqFheg%2Bn4F0gpY714iY%2ByjGKU7LnXmZkbAdMUZ%2FFzhLQrnpG0szDmrZUSd28Y3E&X-Amz-Signature=26954691a436d2554939a885686efcf16468d4ed1b5a8d601c28ccfa664efca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
