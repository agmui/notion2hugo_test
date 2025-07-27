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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663U44LU5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDnldXCYxtJEO49bleBZB2ByksHcoB7aLv2w%2BNtqo8wOQIgVpxUyiC47Zns4HJjmauVteckTYcu6Jyda2FAQIkfkSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJYLf%2BBLZFUbMRxu3SrcA9NzJKqnVhlH3h27RJw669d1ei0O1k8S6Afg2W5WW3ukAr4KmPSjqQepJLvbo1aATy1EHwTiJx%2BPCIHCnhQS7pU5jgURclEwpQiJ6EwL%2BKiJiQ4ZQjZwnBZVao4F5D9FT9Tdj5Uu%2FYNs%2FjyvH1HWTCnSVB4%2FFkErkquCiqfpzbTE6QwonWdVO%2FauV3vQPxYo21rB9JuBo%2B%2FhB3dH3mrjZNtELKorR6WCbFAb9NCLtucQ4Nryf06qCgQrDz7%2B4wLkXwR97Ym0j9zy0tq2ZrDYPZWxh%2BMrVbtbMiC34LivHdKMRPZyPW%2FRFF238PvPFi3ZU3LNjCD9epMcobJdInreMUk%2BupehdcB8%2BuDuLo9VtgCSbMi8Ie0HxpVc3Oj3yEwJGLzZ6hLy4wRwkdy%2B%2Fk16P%2BnRhYuOTluXr0IN287vkCY7qZb83zF3RloaV6ZWfbD22rpB0G%2FSzmggHZtClbc0gLkuFwOlnGvNOQCyHvTb157lYiDnh%2B3UBUFIB3ve6HS6Bgxa2RHwda24t6AQWtUMGXdMufag5QdEkkKw%2FwP%2FZyqMkjcdw37d7c%2FxCX7UpQSHngrxTUpijK6xjzIFXf0Ysfu6TjL8%2FyeI%2BKvaLA9fTL4oydvvWfnpBFeNKcsOMM3JmsQGOqUBiYrRf5Az2NUUbXwMcw906HSI2dvTIGtOnS%2FYSqGp6lNBWMSuSGyAOnCEvCjHjekSF0PAduLnrv8M6buWgOy61Fqg5t3F%2Fmgf8O%2BGFvrukAh5ldCsOtUDhxmYBmMGcSwRI7LBu5wAY07RIFpL76IUmsRvQal3eoUpJLwN5xD8lqreD%2FZISQxYonwYCdeO5q9qeJnPrRcCXXLTe7c5%2FKdJ7r6Q%2FNXS&X-Amz-Signature=5c29ada69355b016a47e04ace3eff1c5b4e410400a9444983b581def7ea30561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663U44LU5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDnldXCYxtJEO49bleBZB2ByksHcoB7aLv2w%2BNtqo8wOQIgVpxUyiC47Zns4HJjmauVteckTYcu6Jyda2FAQIkfkSwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJYLf%2BBLZFUbMRxu3SrcA9NzJKqnVhlH3h27RJw669d1ei0O1k8S6Afg2W5WW3ukAr4KmPSjqQepJLvbo1aATy1EHwTiJx%2BPCIHCnhQS7pU5jgURclEwpQiJ6EwL%2BKiJiQ4ZQjZwnBZVao4F5D9FT9Tdj5Uu%2FYNs%2FjyvH1HWTCnSVB4%2FFkErkquCiqfpzbTE6QwonWdVO%2FauV3vQPxYo21rB9JuBo%2B%2FhB3dH3mrjZNtELKorR6WCbFAb9NCLtucQ4Nryf06qCgQrDz7%2B4wLkXwR97Ym0j9zy0tq2ZrDYPZWxh%2BMrVbtbMiC34LivHdKMRPZyPW%2FRFF238PvPFi3ZU3LNjCD9epMcobJdInreMUk%2BupehdcB8%2BuDuLo9VtgCSbMi8Ie0HxpVc3Oj3yEwJGLzZ6hLy4wRwkdy%2B%2Fk16P%2BnRhYuOTluXr0IN287vkCY7qZb83zF3RloaV6ZWfbD22rpB0G%2FSzmggHZtClbc0gLkuFwOlnGvNOQCyHvTb157lYiDnh%2B3UBUFIB3ve6HS6Bgxa2RHwda24t6AQWtUMGXdMufag5QdEkkKw%2FwP%2FZyqMkjcdw37d7c%2FxCX7UpQSHngrxTUpijK6xjzIFXf0Ysfu6TjL8%2FyeI%2BKvaLA9fTL4oydvvWfnpBFeNKcsOMM3JmsQGOqUBiYrRf5Az2NUUbXwMcw906HSI2dvTIGtOnS%2FYSqGp6lNBWMSuSGyAOnCEvCjHjekSF0PAduLnrv8M6buWgOy61Fqg5t3F%2Fmgf8O%2BGFvrukAh5ldCsOtUDhxmYBmMGcSwRI7LBu5wAY07RIFpL76IUmsRvQal3eoUpJLwN5xD8lqreD%2FZISQxYonwYCdeO5q9qeJnPrRcCXXLTe7c5%2FKdJ7r6Q%2FNXS&X-Amz-Signature=3db691faee21625b0aba596af3471bb4e6f79041387971e0825b1f96b1fb4469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
