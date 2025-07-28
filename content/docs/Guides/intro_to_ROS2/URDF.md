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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XO7J2G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCO2aBtPj5uE37DP44U2UU3t%2BNkRd30xeRxF7J3OkqsmgIhAJMZN0hqLzHLqmrkOzOYB25Un3A2DfQZavcBKUV%2Ff5BSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqZRlpgZcSMsp8rW8q3ANxD8sX5CRcvVBztXlOV3Cy70AvUZhkfanFA0AsQEWnOR%2B%2FZLWMW%2BjRtteUwU9UUUp1ZXpZ20iQoO5AjX5JTTzAyQ5mM74dGuQotvW29fG3bVyXxGXw9mVnfFWQBO4PUQYHjXxBN2xgS92%2FBVUYmT8CpkTgrMJKjDmrWDgQzwgfGDJPfYIh%2B0g8pvULVE901rleV7or1EFxRZtmaWt7nComtmie24IVjZ3ksM3CWuul9NW8w2Z4ilVdyOMhRZ6ob9N7nop8uKXUq35d0cEIoC%2FS9%2BpyoSGParh84SgEHNFVDwwAM09fq57JlyHmB4hJ0XUZyMploypm3UoaNpoJhu2jSJVFuLcjFPYaBdkCd5Mpx%2FOU%2FIsLFJk%2BrZLdgHfX7apSlhKsEmGwOMibSDT%2FUfQHwS8rdL8xNFBrsvK%2FxEWoEy%2BnSVSZcvP%2BsuuaeHpzpQBVnGwtcTBPyWKijEdi1oVku6OfRomLVx0Eia3QnMS8FUIZAMN4LKmW%2F795%2FYvysbVLq5KCYB3hhbo%2FHo1IpkKgWzFJqzSare%2Fw0y7RM87IFof4v62yGSaSO4YBTyBhQKWp%2BsRRyRyYk6TYMU%2BuA1DZlmPQxE8fIre0CGD265TyDSBdLYerO4a%2FA7SH%2FjCAip%2FEBjqkATyLuz3gXvy3gFmNytbCrGgNpglV%2Fm948NnPaLD22U%2Bquko9SPJN9Feil8dvDDXoXEg3hGl3EUTs7JafY3P7YKfxaDCMnTeP47nYef5KW0Wq7q6oEYsZeMZwiVvxhKiBPepFUfxULndEIknDeajE7kzoRb0xVhTOJAXIgQAsvQKiC4sJbw2OnOruuFngleIulyoQVZf3ReI0zjiZS8cfFYIpR6Gt&X-Amz-Signature=a46c12fe69d1ebfa6afffa3da7437cfc1ae35085613d05857ce3cc0ec1b66739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XO7J2G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCO2aBtPj5uE37DP44U2UU3t%2BNkRd30xeRxF7J3OkqsmgIhAJMZN0hqLzHLqmrkOzOYB25Un3A2DfQZavcBKUV%2Ff5BSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqZRlpgZcSMsp8rW8q3ANxD8sX5CRcvVBztXlOV3Cy70AvUZhkfanFA0AsQEWnOR%2B%2FZLWMW%2BjRtteUwU9UUUp1ZXpZ20iQoO5AjX5JTTzAyQ5mM74dGuQotvW29fG3bVyXxGXw9mVnfFWQBO4PUQYHjXxBN2xgS92%2FBVUYmT8CpkTgrMJKjDmrWDgQzwgfGDJPfYIh%2B0g8pvULVE901rleV7or1EFxRZtmaWt7nComtmie24IVjZ3ksM3CWuul9NW8w2Z4ilVdyOMhRZ6ob9N7nop8uKXUq35d0cEIoC%2FS9%2BpyoSGParh84SgEHNFVDwwAM09fq57JlyHmB4hJ0XUZyMploypm3UoaNpoJhu2jSJVFuLcjFPYaBdkCd5Mpx%2FOU%2FIsLFJk%2BrZLdgHfX7apSlhKsEmGwOMibSDT%2FUfQHwS8rdL8xNFBrsvK%2FxEWoEy%2BnSVSZcvP%2BsuuaeHpzpQBVnGwtcTBPyWKijEdi1oVku6OfRomLVx0Eia3QnMS8FUIZAMN4LKmW%2F795%2FYvysbVLq5KCYB3hhbo%2FHo1IpkKgWzFJqzSare%2Fw0y7RM87IFof4v62yGSaSO4YBTyBhQKWp%2BsRRyRyYk6TYMU%2BuA1DZlmPQxE8fIre0CGD265TyDSBdLYerO4a%2FA7SH%2FjCAip%2FEBjqkATyLuz3gXvy3gFmNytbCrGgNpglV%2Fm948NnPaLD22U%2Bquko9SPJN9Feil8dvDDXoXEg3hGl3EUTs7JafY3P7YKfxaDCMnTeP47nYef5KW0Wq7q6oEYsZeMZwiVvxhKiBPepFUfxULndEIknDeajE7kzoRb0xVhTOJAXIgQAsvQKiC4sJbw2OnOruuFngleIulyoQVZf3ReI0zjiZS8cfFYIpR6Gt&X-Amz-Signature=d4d71af062c27f7f0abe68ddeea897e202491a47ac46a7371dead5f24f86d619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
