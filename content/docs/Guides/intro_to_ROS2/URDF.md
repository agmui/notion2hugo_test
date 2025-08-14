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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLWJQGX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFI6c%2B3HVk7jTnLYpPe4cI94UL2t8TGjgqGlm7HuzlDuAiEA5X19AteeL8Id68I3ZtodCsKfLaRhwZ2biRrQa0SkBwoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAwMyMKTinbS0kgdIircA1%2BYo5lgYzPlZW3Piu0WEKzV7nloueNpaMBK7GN0tMMdRXW5lS1cTHKOjeZ7ffROBgVlwCeYJiHCGbCqr2iSUiAVXlGGVgQtXESlCloej%2BGeTdk5%2BUdWHVcDu13clhJKUKpmkjoyI8UKoZKLtookIjjZzgmRyVClkwZh%2Fx1TRtZzPFpGB%2FazdGUMBQiCg5k%2FwQqW5mTOUPgxyK3rRv66gyuiOXS5P55WJ61aEq4tk8oiX6pPbRB%2Frrq71fjE1VOVMuPRllmrW9wW5Wlbb7Ix0%2BxoGBMyYoeE0Y%2FP64xCqbBFCIKQXcKJq%2Fz57qbtQkFwmi4eQcGihkBMK7Co0M7nXhEqc%2F%2BGU37L%2FaF1bTaPpZ0pe5RqL0mxS1t26MbTLNEr4%2FAqqMOa5DaiRGiyp7OBomTVlIiTmC42xPWQPet7fy5B1BeWKWZXmusiS407U4fLsaoxfc%2FSC6BAZJtSjOfFRgkmMklQHpMtgqOue%2BVI82WuN6gpDR0OmDqBPOHbH6%2ByXcH6ilGFBxDTFII%2Bz%2Foaa41Qiaqy92bPGg4746OpkbSTmxoeSnX9Q9R4CQIPIyhFzsJ8gPYq7Ag9h0Gw6zaELok0ZEp20UWYWU6aWawJrflkfgFIncG9PyJBC1t%2FMJjp%2BMQGOqUBXlyENneg9in6Uxdy5NYIMMaBKxb%2F45tlE7VhLorXTMQBSbWO9FjbllCyBamalgHnhyB0UIZyJzYZfN0GkP8iY7WwUIKUGxN%2B%2FekrIaORvWCb5uAM1eP4Al6D8lc2l%2FnqE2%2ByHxOHzO28vqo%2BIRo0f3F3mTpIRzOOWYI7IcNBdaUMYZwIAXXhHkq%2B%2Bmdln67Vx3wj0FGmLGOF7LN0h9OpwlWN%2BFY6&X-Amz-Signature=f8a1ef0e65fbaf3366a726086a8f3e993c121e1aa21eb93d942afd88c0b9ab77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLWJQGX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFI6c%2B3HVk7jTnLYpPe4cI94UL2t8TGjgqGlm7HuzlDuAiEA5X19AteeL8Id68I3ZtodCsKfLaRhwZ2biRrQa0SkBwoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAwMyMKTinbS0kgdIircA1%2BYo5lgYzPlZW3Piu0WEKzV7nloueNpaMBK7GN0tMMdRXW5lS1cTHKOjeZ7ffROBgVlwCeYJiHCGbCqr2iSUiAVXlGGVgQtXESlCloej%2BGeTdk5%2BUdWHVcDu13clhJKUKpmkjoyI8UKoZKLtookIjjZzgmRyVClkwZh%2Fx1TRtZzPFpGB%2FazdGUMBQiCg5k%2FwQqW5mTOUPgxyK3rRv66gyuiOXS5P55WJ61aEq4tk8oiX6pPbRB%2Frrq71fjE1VOVMuPRllmrW9wW5Wlbb7Ix0%2BxoGBMyYoeE0Y%2FP64xCqbBFCIKQXcKJq%2Fz57qbtQkFwmi4eQcGihkBMK7Co0M7nXhEqc%2F%2BGU37L%2FaF1bTaPpZ0pe5RqL0mxS1t26MbTLNEr4%2FAqqMOa5DaiRGiyp7OBomTVlIiTmC42xPWQPet7fy5B1BeWKWZXmusiS407U4fLsaoxfc%2FSC6BAZJtSjOfFRgkmMklQHpMtgqOue%2BVI82WuN6gpDR0OmDqBPOHbH6%2ByXcH6ilGFBxDTFII%2Bz%2Foaa41Qiaqy92bPGg4746OpkbSTmxoeSnX9Q9R4CQIPIyhFzsJ8gPYq7Ag9h0Gw6zaELok0ZEp20UWYWU6aWawJrflkfgFIncG9PyJBC1t%2FMJjp%2BMQGOqUBXlyENneg9in6Uxdy5NYIMMaBKxb%2F45tlE7VhLorXTMQBSbWO9FjbllCyBamalgHnhyB0UIZyJzYZfN0GkP8iY7WwUIKUGxN%2B%2FekrIaORvWCb5uAM1eP4Al6D8lc2l%2FnqE2%2ByHxOHzO28vqo%2BIRo0f3F3mTpIRzOOWYI7IcNBdaUMYZwIAXXhHkq%2B%2Bmdln67Vx3wj0FGmLGOF7LN0h9OpwlWN%2BFY6&X-Amz-Signature=436e9aef38c178693eafeacf83ee8db338ea1601a9a5e0c5c4be766683560f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
