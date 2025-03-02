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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PHS5T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgGMDxgEcBX4pcIMrSemSskQK1uUrzX5w3PWlcVEGCQIgUcdccOCyeHIzalWIUS2NR0pp9lHjAkReZ8EiquJo%2BWcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGB8lardE%2BcI5dasxCrcA48rtXLGgXuQZg4PEPxhfbfdwvxOdnjiCwdiFyRIVbtjC7vIcoGerAh6IkJ6suMBEMmMPCSh6E9gi6oTJzSp7WPJeJlB4u6o3VRWH6MmeXeo5Qf0ePXDv2K9ctSU5AobR%2B2%2BtskKAy2A5jE8AA1bScOvKYCjO0kaK7vaTdtwCLvlCYoJ3YRQtYn8vQWzVdn0dwjM3%2BfZfdR0Ny9TuMuMjwSjf%2Buw09mSEgjcWe5h9kR8tB81s%2B053R2O1nXXalaeyRb9Bwp5EhX1KIdf3sekgRd4w%2FzV3%2FpBRCYKQ7sLBLkj3m1vNDGoCtm7y0laGHTMcWI8Rc3oopwi37EsVfkHgpO4T0b8j1SqPofgnsWkX1Ve9oSJfqdr%2FXvEnWzTycbSdD4Dx%2BeFbd9131%2BaJc2gLSPPkcrxwkxF9W1WohWWcVS7lXsKBd1z2moqNVhRwKiNN3qUtttcYv11LV0IWyxAji7c8GGHzT8XDTvkOp%2By6GzTz8KvYtEumAPGA5hzP4FDJgbHASuqiZmvWgYiOkB0Bbqi%2FvvJXODekYMK1QxShM%2FIOLPDIz4SE8lQOulCStqws3sqHKAzNSqasCOKerSdHWB1i47Zzd53FJNLXN%2FhXYSQVH8S1M%2F6uNjhFHuGML%2Bmk74GOqUBzwOv%2BM45rKsIwctbTyN%2FfOYxEqSTyaRu%2FFpUV4Us0PXMLO%2FitoYFbo7MMDDnYqzxnzuBEhHtguisMS8bvDR3OgvuUcZI41IiCXzYLl%2BVBSqoguzj87ByJlOFsd7VqIz0%2FsZv2DAnRrZl3iigKFkUTRKvAWU1yv4UNfoaDKm5%2BGwmo1oIpHIL7fHFL2WP02boMLoPvAyOBYoAuGk%2BcyAv5YIybd6d&X-Amz-Signature=aaf61f5aec37698231dd0361092ea83e2ba8fde45e2e0f62a9c256eee7afbc65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O5PHS5T%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgGMDxgEcBX4pcIMrSemSskQK1uUrzX5w3PWlcVEGCQIgUcdccOCyeHIzalWIUS2NR0pp9lHjAkReZ8EiquJo%2BWcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGB8lardE%2BcI5dasxCrcA48rtXLGgXuQZg4PEPxhfbfdwvxOdnjiCwdiFyRIVbtjC7vIcoGerAh6IkJ6suMBEMmMPCSh6E9gi6oTJzSp7WPJeJlB4u6o3VRWH6MmeXeo5Qf0ePXDv2K9ctSU5AobR%2B2%2BtskKAy2A5jE8AA1bScOvKYCjO0kaK7vaTdtwCLvlCYoJ3YRQtYn8vQWzVdn0dwjM3%2BfZfdR0Ny9TuMuMjwSjf%2Buw09mSEgjcWe5h9kR8tB81s%2B053R2O1nXXalaeyRb9Bwp5EhX1KIdf3sekgRd4w%2FzV3%2FpBRCYKQ7sLBLkj3m1vNDGoCtm7y0laGHTMcWI8Rc3oopwi37EsVfkHgpO4T0b8j1SqPofgnsWkX1Ve9oSJfqdr%2FXvEnWzTycbSdD4Dx%2BeFbd9131%2BaJc2gLSPPkcrxwkxF9W1WohWWcVS7lXsKBd1z2moqNVhRwKiNN3qUtttcYv11LV0IWyxAji7c8GGHzT8XDTvkOp%2By6GzTz8KvYtEumAPGA5hzP4FDJgbHASuqiZmvWgYiOkB0Bbqi%2FvvJXODekYMK1QxShM%2FIOLPDIz4SE8lQOulCStqws3sqHKAzNSqasCOKerSdHWB1i47Zzd53FJNLXN%2FhXYSQVH8S1M%2F6uNjhFHuGML%2Bmk74GOqUBzwOv%2BM45rKsIwctbTyN%2FfOYxEqSTyaRu%2FFpUV4Us0PXMLO%2FitoYFbo7MMDDnYqzxnzuBEhHtguisMS8bvDR3OgvuUcZI41IiCXzYLl%2BVBSqoguzj87ByJlOFsd7VqIz0%2FsZv2DAnRrZl3iigKFkUTRKvAWU1yv4UNfoaDKm5%2BGwmo1oIpHIL7fHFL2WP02boMLoPvAyOBYoAuGk%2BcyAv5YIybd6d&X-Amz-Signature=e466adbb8b5db4b9be281a197645ff1ff44a45fb6db12c909426ff1bb1cb4fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
