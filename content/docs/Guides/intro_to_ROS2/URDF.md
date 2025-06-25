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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJ7QNHI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICrc3M2bpqZynMSYhHf2wI%2FG%2FPCPtGbE%2F1Yyoar%2FV8GQAiEA4wAKDeWRpX4JdenmrLQGs5AzASI6PYVV1QEU36CsgHwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNHKFgasIEWYMtH3IyrcA2%2BXuVMEYRqK0jj%2F3lp%2F61Pzq3hiVX9%2FAAUGK8CNjkZLxnBjqtLwJS7oNpf4a8BkZrxjqto4az02pnaTgRlTvXT%2BBJz26JmjINfL0OjUbZ1bVJlSmaw1ImSVXO1xETin5R8G%2BXQk2tSxQnUbn11TD82INTrfU330pwpKkSgq6aIXMltiLd0NWdZuU3oIKcebFwLX8mbHXZ72u5Km6ikkGqxQQTQ%2BZf12AFJqZQCrR2KCzYuLHGP%2BiaWqmMYDyjiorlrWz1aK9Hz1VsFiazYAU%2FUZEpOm8loAXbk94th9tK7Sm9WmMwSELNULVOaemuiAwiKhWdwapg%2BO1Q6hmAhlCdGY%2BKGxwi89A4ocwD2q3wO061biZ4PbS1gsKvIwMfvCeoYfVHhGJrPcnuPHvl%2BscEZUS8m4Eh%2FWom%2FFvwxv7TyUMVCGvXJpjEwF7LkpTl9arumRqKxwKrcUwno3ECPi7LHW06k5gAd1xSfV3%2FoK80tRGJpibonApPTdDeDP8mPmouzr3nfnq5EC0YxK9vuOd6gdSUrLPU9Y7z3vO38i7uNqyABiVt6kgi2AaHg7wZ0UOy2sDrKVfZvoAQfKg0kHd5nQ4DRUPLdZxGTj%2FAkVD3TZ1FO66VaYL7cnDmSeMPyP78IGOqUBzNsqnkG64pmKnYTbsgNPnuZWi5tfX9FAeNmi%2FJbP4gR8nZm%2FYIlHXP80VLnmm%2Fx1DfpWZ%2B09bXze9B2CF8rLXSKbaUOvF6GdcpT61uqmTJVLfbt2I%2FNEzDLD8yqg5i6Ax55EnZ2nkwN%2Bawbfn6JgSgps669hfUFKGhEcBiWDT3XolCRBn8yCQQ%2FRjfS1b%2BjrL6PQJeOLCcfwwETfE7mUpjCg47qY&X-Amz-Signature=3de68578f7d07038e10345a24ade4fdcc1d0cb2dd5f17cc4d494bf5a1e936c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJ7QNHI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICrc3M2bpqZynMSYhHf2wI%2FG%2FPCPtGbE%2F1Yyoar%2FV8GQAiEA4wAKDeWRpX4JdenmrLQGs5AzASI6PYVV1QEU36CsgHwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNHKFgasIEWYMtH3IyrcA2%2BXuVMEYRqK0jj%2F3lp%2F61Pzq3hiVX9%2FAAUGK8CNjkZLxnBjqtLwJS7oNpf4a8BkZrxjqto4az02pnaTgRlTvXT%2BBJz26JmjINfL0OjUbZ1bVJlSmaw1ImSVXO1xETin5R8G%2BXQk2tSxQnUbn11TD82INTrfU330pwpKkSgq6aIXMltiLd0NWdZuU3oIKcebFwLX8mbHXZ72u5Km6ikkGqxQQTQ%2BZf12AFJqZQCrR2KCzYuLHGP%2BiaWqmMYDyjiorlrWz1aK9Hz1VsFiazYAU%2FUZEpOm8loAXbk94th9tK7Sm9WmMwSELNULVOaemuiAwiKhWdwapg%2BO1Q6hmAhlCdGY%2BKGxwi89A4ocwD2q3wO061biZ4PbS1gsKvIwMfvCeoYfVHhGJrPcnuPHvl%2BscEZUS8m4Eh%2FWom%2FFvwxv7TyUMVCGvXJpjEwF7LkpTl9arumRqKxwKrcUwno3ECPi7LHW06k5gAd1xSfV3%2FoK80tRGJpibonApPTdDeDP8mPmouzr3nfnq5EC0YxK9vuOd6gdSUrLPU9Y7z3vO38i7uNqyABiVt6kgi2AaHg7wZ0UOy2sDrKVfZvoAQfKg0kHd5nQ4DRUPLdZxGTj%2FAkVD3TZ1FO66VaYL7cnDmSeMPyP78IGOqUBzNsqnkG64pmKnYTbsgNPnuZWi5tfX9FAeNmi%2FJbP4gR8nZm%2FYIlHXP80VLnmm%2Fx1DfpWZ%2B09bXze9B2CF8rLXSKbaUOvF6GdcpT61uqmTJVLfbt2I%2FNEzDLD8yqg5i6Ax55EnZ2nkwN%2Bawbfn6JgSgps669hfUFKGhEcBiWDT3XolCRBn8yCQQ%2FRjfS1b%2BjrL6PQJeOLCcfwwETfE7mUpjCg47qY&X-Amz-Signature=94332358737d89a7ca13646d5acfd9ebd2fc19a587e76f5903b7b8e94f872464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
