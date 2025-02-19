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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGURTTI3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCeYHPpzesw3KPAp9kZuo9J7ahVvlznw1OTX2D0z2KOQgIgUP6T1m0jBDvDRItY2TQwvchNno2hbbNSYR0NyJCHaAQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh9KGayJVKDVj1w5SrcAxPd%2BmROr9L156YODUeO0odC3yaflOmzMqslZVK%2FjGuI6v%2FPiB5tPS%2BgsHVOxQMpF5lF6gJgm47HarnMahE6EWQELuT0vqPmWBV%2BF4dsHa5AyygIiII1BcFT%2FV4x8OP03FBVFzNJIvHhUudtZSFr7W259gOpBLO37lOE2tdMtXiazh%2F6eaRKvtSz5HDmBR1EmAOKTlWiS5SGomO0%2FKN%2FNhiS9X%2Fml%2BrkOqXIgmTT%2BJ24innnNl2CeI9Ffdub%2FZzD3VK4LHL05oZDdGPTkQ8GmI1VQJ1jkwvmtWU5Fyl5iEF%2FgpC93G%2Fd47BAdYX%2F3YcSVNgYaBW8S2dImTWyfCR97x%2BP6AjGU8aJZ5p%2BMbuFmHKn%2FfqsH2%2Ft5hLihwkIdq%2BI2VVg6Q6HrDcLtz9doNbZlP7nslaDtNqoVAoQbi7qFVbMbaB95rYEbWJKxFa1bv3UveIgNH6%2FvJOMkPxn2xiD8ahauKfz8wTvOezI7PVpmD5pKy2AyieeD2OGMPtbmGPYjZJqgt%2FX1U34ELqJ%2FGU6qUX28W43jcRiitIa0tPMCeSke15xfeFFa%2Bsp93erS%2FOqFQx4QRX%2FO8x219cGjORL8MYVjqpVFQJ4bQn%2FToCdFJNEexepc8xWgGz9u0m8MNev1L0GOqUBcL7lhMAkvNL0GllWYPhg3XWr3BfFGzLrXY3BjR051XZm2DATti1ANsIeHOw9ipEBWR5OyQFa4h5VAmmgxUK4cngi2zY5IDUwZl0eDF7Oi5LiUSFBgkv1zYB4H353LsblG%2Foyuis1tGDRvXwYx%2BRcLCN80mtXF%2BpTvgcX2WVTVGxaFXsF1XoPHX9PpnmbA576OBQ%2BMkgEGsacSCWpuXNBxSjwN0v%2F&X-Amz-Signature=53282b95980f0e8078c94779caa86a5c5849f345e28df4801ca72b8335ad9aad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGURTTI3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCeYHPpzesw3KPAp9kZuo9J7ahVvlznw1OTX2D0z2KOQgIgUP6T1m0jBDvDRItY2TQwvchNno2hbbNSYR0NyJCHaAQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh9KGayJVKDVj1w5SrcAxPd%2BmROr9L156YODUeO0odC3yaflOmzMqslZVK%2FjGuI6v%2FPiB5tPS%2BgsHVOxQMpF5lF6gJgm47HarnMahE6EWQELuT0vqPmWBV%2BF4dsHa5AyygIiII1BcFT%2FV4x8OP03FBVFzNJIvHhUudtZSFr7W259gOpBLO37lOE2tdMtXiazh%2F6eaRKvtSz5HDmBR1EmAOKTlWiS5SGomO0%2FKN%2FNhiS9X%2Fml%2BrkOqXIgmTT%2BJ24innnNl2CeI9Ffdub%2FZzD3VK4LHL05oZDdGPTkQ8GmI1VQJ1jkwvmtWU5Fyl5iEF%2FgpC93G%2Fd47BAdYX%2F3YcSVNgYaBW8S2dImTWyfCR97x%2BP6AjGU8aJZ5p%2BMbuFmHKn%2FfqsH2%2Ft5hLihwkIdq%2BI2VVg6Q6HrDcLtz9doNbZlP7nslaDtNqoVAoQbi7qFVbMbaB95rYEbWJKxFa1bv3UveIgNH6%2FvJOMkPxn2xiD8ahauKfz8wTvOezI7PVpmD5pKy2AyieeD2OGMPtbmGPYjZJqgt%2FX1U34ELqJ%2FGU6qUX28W43jcRiitIa0tPMCeSke15xfeFFa%2Bsp93erS%2FOqFQx4QRX%2FO8x219cGjORL8MYVjqpVFQJ4bQn%2FToCdFJNEexepc8xWgGz9u0m8MNev1L0GOqUBcL7lhMAkvNL0GllWYPhg3XWr3BfFGzLrXY3BjR051XZm2DATti1ANsIeHOw9ipEBWR5OyQFa4h5VAmmgxUK4cngi2zY5IDUwZl0eDF7Oi5LiUSFBgkv1zYB4H353LsblG%2Foyuis1tGDRvXwYx%2BRcLCN80mtXF%2BpTvgcX2WVTVGxaFXsF1XoPHX9PpnmbA576OBQ%2BMkgEGsacSCWpuXNBxSjwN0v%2F&X-Amz-Signature=1115d489da596efbe745fe66c0dcc033a91714961104faef8dc74aebeb03aa2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
