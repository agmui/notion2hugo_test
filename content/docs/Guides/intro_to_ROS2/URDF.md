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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URNMPCO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCgNMn65eE2kcwzr0m%2FJHHHYHZGZvRacTBl%2BH4XcV1AAiAYJa6x6gsuf%2F%2F7pvlkEYk3mc3WRAfrnS2U3ju1h7tQYSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXkFVtb%2FBV5boOy4rKtwDUq1k%2FVwAtmoSemKDol7K1LfPaQ9HpNtqAk3UpILmx0VqKHROJXM3xkPHYsJx6XKDA9jH%2F%2FEAtzOEZCR5WZ7R83xunPpH3w7P3qShxAGY1mOccHE3O9anFZ7W8kOMTA%2BF5J7zhEKG6wZPeQy07v8LoxSz3JyO4jHUBnpUSfSJW0QysqPWX5PQpcf9Vcv8ZMksmxqLkihxLOh%2FuXrCfDGoVY120LCbyQknsMEMfzFdKoWtj0ttTuGPpu8cNaes2bMeUAF8NgwOGHowUYS7cjnHiO0P0PmFwn3iqrCQVP7iH5E8IcyQ%2FIck15PR2dAsuGvIRKYWQy6bJ41qtsqW7oE0MIrSX7HBl79QeApipHpp1AYJM88fo78grUtbTxXNKbhj46E1QmjgjJm0P%2BcHdG3K2zGyk0Cn%2FSCh1psF%2FvR9r4F12M%2FlvZsD%2FYisxuVyBiq7OA9SFyB9Ao26nWP2SeYBoSaN6UCK%2F%2Bh09ZGo6heKfWSBazgB4QGuxiww9RsgV91ZXS%2FP5fgLQ3gXd%2BxTEmuTtsyybIvXkYOx1fn2Hnfg%2BnDhJAsAorGmveZ5TnAP%2Fu2Yxdm93Ra3xj%2BIxAo348iryJDfc2omWrmgEP207gS98ykQqjbt3WBort6Va1swxuXcxAY6pgEqtZ4V9q%2F5IU2pI9i3tTwbfxagjVEKkbF1odlPhdKUZ00rzS1XoR%2BBbnbZFiCG5L%2BCzbtdKyD%2FV8xiYt7JNOE9joz9VfmLywLdqAB%2BI%2FW2Zj4FiD%2Fp18R21aekEOU7IPThhFHF%2F%2BBD8zB6Y4f1gf5eSOvJpVtnV2hcD5hQJDtNEv8o%2BgMSuxQTdnCwGmwhiJCSybH9qG87rhp9EzWBbb377GMOMIpO&X-Amz-Signature=70c8da16b3473f2d01cf0edac9a63b85da709cc122f9b44a745db488078d4f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URNMPCO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCgNMn65eE2kcwzr0m%2FJHHHYHZGZvRacTBl%2BH4XcV1AAiAYJa6x6gsuf%2F%2F7pvlkEYk3mc3WRAfrnS2U3ju1h7tQYSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXkFVtb%2FBV5boOy4rKtwDUq1k%2FVwAtmoSemKDol7K1LfPaQ9HpNtqAk3UpILmx0VqKHROJXM3xkPHYsJx6XKDA9jH%2F%2FEAtzOEZCR5WZ7R83xunPpH3w7P3qShxAGY1mOccHE3O9anFZ7W8kOMTA%2BF5J7zhEKG6wZPeQy07v8LoxSz3JyO4jHUBnpUSfSJW0QysqPWX5PQpcf9Vcv8ZMksmxqLkihxLOh%2FuXrCfDGoVY120LCbyQknsMEMfzFdKoWtj0ttTuGPpu8cNaes2bMeUAF8NgwOGHowUYS7cjnHiO0P0PmFwn3iqrCQVP7iH5E8IcyQ%2FIck15PR2dAsuGvIRKYWQy6bJ41qtsqW7oE0MIrSX7HBl79QeApipHpp1AYJM88fo78grUtbTxXNKbhj46E1QmjgjJm0P%2BcHdG3K2zGyk0Cn%2FSCh1psF%2FvR9r4F12M%2FlvZsD%2FYisxuVyBiq7OA9SFyB9Ao26nWP2SeYBoSaN6UCK%2F%2Bh09ZGo6heKfWSBazgB4QGuxiww9RsgV91ZXS%2FP5fgLQ3gXd%2BxTEmuTtsyybIvXkYOx1fn2Hnfg%2BnDhJAsAorGmveZ5TnAP%2Fu2Yxdm93Ra3xj%2BIxAo348iryJDfc2omWrmgEP207gS98ykQqjbt3WBort6Va1swxuXcxAY6pgEqtZ4V9q%2F5IU2pI9i3tTwbfxagjVEKkbF1odlPhdKUZ00rzS1XoR%2BBbnbZFiCG5L%2BCzbtdKyD%2FV8xiYt7JNOE9joz9VfmLywLdqAB%2BI%2FW2Zj4FiD%2Fp18R21aekEOU7IPThhFHF%2F%2BBD8zB6Y4f1gf5eSOvJpVtnV2hcD5hQJDtNEv8o%2BgMSuxQTdnCwGmwhiJCSybH9qG87rhp9EzWBbb377GMOMIpO&X-Amz-Signature=767e6f5b071846ffaf109d16f996173229770f76c9dc26916d110a3029773ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
