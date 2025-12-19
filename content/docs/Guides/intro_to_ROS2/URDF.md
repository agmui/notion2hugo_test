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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIMTU6J%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR4VsnZQLhIhiPMbezLLNJTWrSUASWm6z7kV2op8b6xAiEAqJVzI3ANKVQYbPg1yhpjpwJKRDDmrYURRUqFu6mEax0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1lqS2rC6Hm0rPJDircAyZTETFOtDcMCB%2BauJrf2F%2Fh8%2BQ%2FjiorRU9730SEDj5dLewd5I0dYKld33Usrzr%2BRBjFr%2FvQDM%2B55ac6XncVLPu%2FH4UGIUKvgbH5WXpyXQ6gZ3l4UuXGIr3R7R5IkpYNQoShtvtlGsZXQQYRNh3eN9UWYBepRMsPanM6DNkr0mdkw%2Blh3UY03greWZRYR0aq%2BqyAJ6OPViaUTSwHEKfGjNSAH2Fp1giD9IAe2Nw062bjtSiE1oTJ36hV3ZdEVkrExJW8qKhIK4TJMzF5bvpIXMP7jVS9wELKhpKxSdwqC9dEPwQh2MK%2FKM9uOF19h2XeL483vhAcyi7VKmzOO5X%2BY95mtElkwP3Ajn%2BZ84teEjQrQBj3rEw2KEJfEIV%2BarMyXgq%2B7MGlGGVgFULUXVx8ZOixXOIvQ5%2F1EZGLXV8OgLsf1IGg5VJKUmj5KB26hXewyBLELw%2BQP3A8MyToogCM%2B%2FK72%2FWrn950TBAPFMjkrqR7VfnNqSgOIjSVAhwh5Lbul11NdfS2ocGgwDG0zIB%2B6QKAwVEkafht0qwy%2BWPIjfVCorMxDfw4a5HUk4M7JUieeG7oCUFVEIfXDAuzuCoV25BZ8mgakV8%2FC7LmBBH3xW0ufabdn2a4eDHa4WxYMOLHksoGOqUBCGVmTojrg3HINqSnDl9vLPYAA5KZWgWZerCIgIfmk9eGuJon87g8boyBgyo6IKlx%2Fcjmh7fEnGIuNTdeRPhWIyfnjKRQ4Np4Bz0ZIOjfkajmCYja23MexD7nkwowYM4s2aRO9XQGy%2BBr4j7A3vkgsjfioVZ4KJ%2B7X1CzX4VNcbXYE9g58AP%2F6oBIXkELvR7cOdttbISP6lKkg2gqrJ%2FkRI5guVqJ&X-Amz-Signature=f7b2751892c85d9f2a993c89fb8d6bbd4c08cbc52651c07ae0c91a3f121fcb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIMTU6J%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR4VsnZQLhIhiPMbezLLNJTWrSUASWm6z7kV2op8b6xAiEAqJVzI3ANKVQYbPg1yhpjpwJKRDDmrYURRUqFu6mEax0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1lqS2rC6Hm0rPJDircAyZTETFOtDcMCB%2BauJrf2F%2Fh8%2BQ%2FjiorRU9730SEDj5dLewd5I0dYKld33Usrzr%2BRBjFr%2FvQDM%2B55ac6XncVLPu%2FH4UGIUKvgbH5WXpyXQ6gZ3l4UuXGIr3R7R5IkpYNQoShtvtlGsZXQQYRNh3eN9UWYBepRMsPanM6DNkr0mdkw%2Blh3UY03greWZRYR0aq%2BqyAJ6OPViaUTSwHEKfGjNSAH2Fp1giD9IAe2Nw062bjtSiE1oTJ36hV3ZdEVkrExJW8qKhIK4TJMzF5bvpIXMP7jVS9wELKhpKxSdwqC9dEPwQh2MK%2FKM9uOF19h2XeL483vhAcyi7VKmzOO5X%2BY95mtElkwP3Ajn%2BZ84teEjQrQBj3rEw2KEJfEIV%2BarMyXgq%2B7MGlGGVgFULUXVx8ZOixXOIvQ5%2F1EZGLXV8OgLsf1IGg5VJKUmj5KB26hXewyBLELw%2BQP3A8MyToogCM%2B%2FK72%2FWrn950TBAPFMjkrqR7VfnNqSgOIjSVAhwh5Lbul11NdfS2ocGgwDG0zIB%2B6QKAwVEkafht0qwy%2BWPIjfVCorMxDfw4a5HUk4M7JUieeG7oCUFVEIfXDAuzuCoV25BZ8mgakV8%2FC7LmBBH3xW0ufabdn2a4eDHa4WxYMOLHksoGOqUBCGVmTojrg3HINqSnDl9vLPYAA5KZWgWZerCIgIfmk9eGuJon87g8boyBgyo6IKlx%2Fcjmh7fEnGIuNTdeRPhWIyfnjKRQ4Np4Bz0ZIOjfkajmCYja23MexD7nkwowYM4s2aRO9XQGy%2BBr4j7A3vkgsjfioVZ4KJ%2B7X1CzX4VNcbXYE9g58AP%2F6oBIXkELvR7cOdttbISP6lKkg2gqrJ%2FkRI5guVqJ&X-Amz-Signature=f06eb9823a4b47b33a49c0902002b3226a6f4871127d46cdb757ffceda842c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
