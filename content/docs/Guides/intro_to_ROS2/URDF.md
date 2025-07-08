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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUTJV5K%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRITwYP08ZwuOduPchNYsZrGjYLkwoSIMFZ%2F6luIhx%2BgIhAKyOQ%2FiJfP6WEC7TXHmLY%2BWYu3eC1bi8vkMZTKJUWIspKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu0gbh%2BBJg9i2DkSwq3APrpbjTCaA7M2qm36Tqlc3YqTdtt5lO7x%2F4yjqyCjb1X4B7Ij3lKYW9XUpuEOL1DPFZxt5ypMLJPeZ5HUiA2zbpRuWBuCdXzU%2Bkhd11AyT%2BWrWghMgf4xbabaZoWDHfe%2BQy5Uah2XwSB70g9OvtURleGuHcrxwT2gTk4zMFPe%2FIOzq2%2B0cDps4cAXbz13jRUKFdTxpWGOL5Z9MunQa3c%2F3KSKVVMyQzkwvmhBroJZ4edASLv%2ByG7mULKQZ5imrp57U3WoGSzLANJ8QrLrP2C7akvLFDTjWciTQWGqtiSYPPtSYxPEUohjh333GjSQkbwk%2BQnQ5ZOV9uLUIweW9h2xIPP8jdZv3LUQt%2FetEVjxKEZGcKmh%2FimaD5LPn3aKVae8qv8VQRZlmZygy19O%2FuRHpbn5z9mwM6fsXsNjbR2Di%2FhiJe0ZkYNNbMFxVPGPX%2BcIl2dwcGKykwbPNGlqlTUb3DaiGSCix90r4uaoQHv0AFxroESoiksigctSviaRUoWkG%2BSw8ZSywmE2OpU1gAYSwTA0MxePA1dSdNcYDWAZbzMeNA6F36ZRmuLhnOtdu8H9%2BGmHg3ZZ0rbgQreeLGhdmF3c9tBeMtlVimtSthtgDIkB7jhdkquKf4DqaTDjCXgbXDBjqkAQcglZPt9Ip5Elex8roOtzH1uqAC0bxaU7w9HaN0%2FoEXMOAmEtAIB9z9DboaX64hUt1ClEeV2oVUTIMDUxQjrhpQHa8ZLv1pb%2BYZYWjcXREL0ZAaG5VUb6x%2BSMbeiCg%2Figi4EzMwAmEmqqFa7izC8QwEiRwePTRIcQvM%2Fk%2BcrSmgLhpxW8YBwS5iCY4WdbRCmHeKmXrz6KRlVkSXJY2Crp2ZY8Qs&X-Amz-Signature=d62338578468112b57d05f97938b5b79e84729076e20ffde4eab5acdea003efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUTJV5K%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRITwYP08ZwuOduPchNYsZrGjYLkwoSIMFZ%2F6luIhx%2BgIhAKyOQ%2FiJfP6WEC7TXHmLY%2BWYu3eC1bi8vkMZTKJUWIspKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu0gbh%2BBJg9i2DkSwq3APrpbjTCaA7M2qm36Tqlc3YqTdtt5lO7x%2F4yjqyCjb1X4B7Ij3lKYW9XUpuEOL1DPFZxt5ypMLJPeZ5HUiA2zbpRuWBuCdXzU%2Bkhd11AyT%2BWrWghMgf4xbabaZoWDHfe%2BQy5Uah2XwSB70g9OvtURleGuHcrxwT2gTk4zMFPe%2FIOzq2%2B0cDps4cAXbz13jRUKFdTxpWGOL5Z9MunQa3c%2F3KSKVVMyQzkwvmhBroJZ4edASLv%2ByG7mULKQZ5imrp57U3WoGSzLANJ8QrLrP2C7akvLFDTjWciTQWGqtiSYPPtSYxPEUohjh333GjSQkbwk%2BQnQ5ZOV9uLUIweW9h2xIPP8jdZv3LUQt%2FetEVjxKEZGcKmh%2FimaD5LPn3aKVae8qv8VQRZlmZygy19O%2FuRHpbn5z9mwM6fsXsNjbR2Di%2FhiJe0ZkYNNbMFxVPGPX%2BcIl2dwcGKykwbPNGlqlTUb3DaiGSCix90r4uaoQHv0AFxroESoiksigctSviaRUoWkG%2BSw8ZSywmE2OpU1gAYSwTA0MxePA1dSdNcYDWAZbzMeNA6F36ZRmuLhnOtdu8H9%2BGmHg3ZZ0rbgQreeLGhdmF3c9tBeMtlVimtSthtgDIkB7jhdkquKf4DqaTDjCXgbXDBjqkAQcglZPt9Ip5Elex8roOtzH1uqAC0bxaU7w9HaN0%2FoEXMOAmEtAIB9z9DboaX64hUt1ClEeV2oVUTIMDUxQjrhpQHa8ZLv1pb%2BYZYWjcXREL0ZAaG5VUb6x%2BSMbeiCg%2Figi4EzMwAmEmqqFa7izC8QwEiRwePTRIcQvM%2Fk%2BcrSmgLhpxW8YBwS5iCY4WdbRCmHeKmXrz6KRlVkSXJY2Crp2ZY8Qs&X-Amz-Signature=1acaf90ae894c658881f408e03fda769a8d0d3beed4c359eb798a54fb5feee9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
