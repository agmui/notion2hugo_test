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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBGCWWD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHYFJov%2B9XzUsDuUrHLCKiAOU4fENFrumpRrN3rjWngMAiBENpj5eMjpOgshrjFiBDFeE0x81%2F63RTEouLg1vI1kcCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXq3sdSY%2FVmlfH3dKKtwDylFLoYNjFbJCACNnzryxsRXxrhJmMLfHgSdgcM%2F%2BPxzkPQChhx5qw6Efl9oTrGZAIru6sHlYpXVkcTljLSy7eZIYdx%2FPRYQvXjDveyhjAdqaNY1a2%2Bz2ymVahCohNSeuz7GEylLsshTzNM7NnmGRgmkVyozJZVC1B2YicHL3LGogagYQDpwSLZnlXrqEpfXGDYFeWXu3pu5fvNZSOsmpsLNiceLLeg%2Fv%2FP8jij1DayGhy87fvXl6ecJWCKotWkN6ZLjkOC3KsjWT8u6mQRSmRkZERHZvODtHBlIaKWpPSB25RV8A%2B4JS%2FUkQCWAkIu4vkg%2B3AH6%2Fo13Y69WWjDbjMs7g55UsYkF3DHnRCWuFxvFa3vg7nSXitGBxBQpOwnBJJ8rDuyR%2FV%2FJrSuF62ZrbQ8XeR2yCrsQZcvT206%2BkADYC3ed%2BrS8nm3o4Edoz%2FJBk3mwkMTr5KdGPmE5Qrwfb%2FUojlKcaCqZumWssPHoqvu9G7bhI8XxwuQQk4YxLIpDQVykysjCCPP4N2LvoV5A4bmQnLtOtESo6b1%2Bl2X6P3kJMtQxZ2lcYPKdbUPWsee0W66Xr5xhUl%2BuPvnS2YEZl5EE70ZgT00C%2BwS3imFEYxMO6O9LD7l1D4bGFJ%2FAw94f8vQY6pgHJbUfvhlTwvVm5nLHDSbXcA0MFLHN4SYACl%2BShcwHbxhNSBppYR4h7Btq%2BLMxuM0W76zYeI3oY4EmamsRmxthD%2Fn2S4vjPy1lY0hCc0alQMfwP3AAWrYYC90oSR1kfKA2c%2FjtmMcLx4qJGnTxAl3akeTnVshyDJYwxNdsySUtK%2F%2BDlbKuIe%2B%2FWd5Z9le8C7yOrsNQwdHxBwTIUwX9ewMuYe2w4kR8w&X-Amz-Signature=9e7ebcfd556f5919c9de0eccc3766bd149d30082f1d4cf4596423126a62e7c73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBGCWWD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHYFJov%2B9XzUsDuUrHLCKiAOU4fENFrumpRrN3rjWngMAiBENpj5eMjpOgshrjFiBDFeE0x81%2F63RTEouLg1vI1kcCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXq3sdSY%2FVmlfH3dKKtwDylFLoYNjFbJCACNnzryxsRXxrhJmMLfHgSdgcM%2F%2BPxzkPQChhx5qw6Efl9oTrGZAIru6sHlYpXVkcTljLSy7eZIYdx%2FPRYQvXjDveyhjAdqaNY1a2%2Bz2ymVahCohNSeuz7GEylLsshTzNM7NnmGRgmkVyozJZVC1B2YicHL3LGogagYQDpwSLZnlXrqEpfXGDYFeWXu3pu5fvNZSOsmpsLNiceLLeg%2Fv%2FP8jij1DayGhy87fvXl6ecJWCKotWkN6ZLjkOC3KsjWT8u6mQRSmRkZERHZvODtHBlIaKWpPSB25RV8A%2B4JS%2FUkQCWAkIu4vkg%2B3AH6%2Fo13Y69WWjDbjMs7g55UsYkF3DHnRCWuFxvFa3vg7nSXitGBxBQpOwnBJJ8rDuyR%2FV%2FJrSuF62ZrbQ8XeR2yCrsQZcvT206%2BkADYC3ed%2BrS8nm3o4Edoz%2FJBk3mwkMTr5KdGPmE5Qrwfb%2FUojlKcaCqZumWssPHoqvu9G7bhI8XxwuQQk4YxLIpDQVykysjCCPP4N2LvoV5A4bmQnLtOtESo6b1%2Bl2X6P3kJMtQxZ2lcYPKdbUPWsee0W66Xr5xhUl%2BuPvnS2YEZl5EE70ZgT00C%2BwS3imFEYxMO6O9LD7l1D4bGFJ%2FAw94f8vQY6pgHJbUfvhlTwvVm5nLHDSbXcA0MFLHN4SYACl%2BShcwHbxhNSBppYR4h7Btq%2BLMxuM0W76zYeI3oY4EmamsRmxthD%2Fn2S4vjPy1lY0hCc0alQMfwP3AAWrYYC90oSR1kfKA2c%2FjtmMcLx4qJGnTxAl3akeTnVshyDJYwxNdsySUtK%2F%2BDlbKuIe%2B%2FWd5Z9le8C7yOrsNQwdHxBwTIUwX9ewMuYe2w4kR8w&X-Amz-Signature=9b4249821910856962f9e4d3a0d830fbaca5b76eec5cfd08555b0aa8f3e5fe5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
