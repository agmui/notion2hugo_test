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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RCZ5G7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvk7feo7qhqJhetYD9cWr%2BXXCkEVIinp%2FcYs7%2FKBKe4AiACU9AXXkPkVCK3R01vHiCZhnvj13Sok9mrInLsPpzTViqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEL5zV4PVFg8jItR%2FKtwDjjDuXesBDzEthASFwadpShRUvXsJ56VPbJ4rP3%2FwRblZVo5VcIAc2oiwbHJRb1jbAY5cWXycL1KKTtcgFhouzgaFrgLRjcm3O4MBAB3qJcI0Lj6zhYpP9RLxJ4MPKCLOBBs1bSJidp2ExEQwoaxLVtzGU3mhFNLOWXmKn36GJcOfPdD4Uqjilh8jjgfODgO%2FKQc8G5QvVSaG4I3rWvA7Ses%2BpzbPl47SxQCoh8swUYaDD2HYhw0ecrUoR0DI93voG9zllXhjY4lv3KtaMlak5cZq5aIWEikFYD69FbQN%2BnhqNeipPMaUawnbavcqbuqWT9tURh8wmKtIMNKYEap348YxStpFSxkV%2FlGKFz5D3HQh5b7NXnuSBBsM%2FrcpNGveEtDmfJhgbvi9diMwgVYjDZ1fq2gSKRPa%2F4cT5xFrFETOEwPFoHqFCRlNLlxhbn6RBf5wFAu3%2Foj7SkFQv2uLd%2FEF4k0rIJsdhKXOu6UM6yAAFqSdeypnXf0Pe0ecvKcHNZrMu9FfVTyKzNvymCdQS4IdotZux1dGDMq7jYyEG61pTYPY5Mh2WAS%2Fm5NFk0v6wtfV%2Bk7fNVjE%2F3U%2FC9v7Zf%2BdzOq6eJ8sZLjvXN3tkQzwJWRlFKYGGJo11FYwmPGIvwY6pgHCB4i2TX%2BENXuhuqR1QhMptCcGZjvkXijTvF2n4SfZjAKsm%2BX7r0D1CQaMYSkm1Tee0VOrLOVKNQDPvOxXP%2FBL1gITJ4bKA0Pti5ELxqhIgPfVe6de3573XB96r4b%2FY%2F1KElNzggbTW1PKbs9t5gNR21wchGCZeixiJpmcJAq6DLkMVL6%2FrFMSomyY7qJLPAHfm8HQXB9t6IjJrqHw8SF7WgAT%2Fq0I&X-Amz-Signature=200c72a13aefeceb03764cbfb421556ef2b1c0e9a8327ce08a96c4d97c56e874&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646RCZ5G7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvk7feo7qhqJhetYD9cWr%2BXXCkEVIinp%2FcYs7%2FKBKe4AiACU9AXXkPkVCK3R01vHiCZhnvj13Sok9mrInLsPpzTViqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEL5zV4PVFg8jItR%2FKtwDjjDuXesBDzEthASFwadpShRUvXsJ56VPbJ4rP3%2FwRblZVo5VcIAc2oiwbHJRb1jbAY5cWXycL1KKTtcgFhouzgaFrgLRjcm3O4MBAB3qJcI0Lj6zhYpP9RLxJ4MPKCLOBBs1bSJidp2ExEQwoaxLVtzGU3mhFNLOWXmKn36GJcOfPdD4Uqjilh8jjgfODgO%2FKQc8G5QvVSaG4I3rWvA7Ses%2BpzbPl47SxQCoh8swUYaDD2HYhw0ecrUoR0DI93voG9zllXhjY4lv3KtaMlak5cZq5aIWEikFYD69FbQN%2BnhqNeipPMaUawnbavcqbuqWT9tURh8wmKtIMNKYEap348YxStpFSxkV%2FlGKFz5D3HQh5b7NXnuSBBsM%2FrcpNGveEtDmfJhgbvi9diMwgVYjDZ1fq2gSKRPa%2F4cT5xFrFETOEwPFoHqFCRlNLlxhbn6RBf5wFAu3%2Foj7SkFQv2uLd%2FEF4k0rIJsdhKXOu6UM6yAAFqSdeypnXf0Pe0ecvKcHNZrMu9FfVTyKzNvymCdQS4IdotZux1dGDMq7jYyEG61pTYPY5Mh2WAS%2Fm5NFk0v6wtfV%2Bk7fNVjE%2F3U%2FC9v7Zf%2BdzOq6eJ8sZLjvXN3tkQzwJWRlFKYGGJo11FYwmPGIvwY6pgHCB4i2TX%2BENXuhuqR1QhMptCcGZjvkXijTvF2n4SfZjAKsm%2BX7r0D1CQaMYSkm1Tee0VOrLOVKNQDPvOxXP%2FBL1gITJ4bKA0Pti5ELxqhIgPfVe6de3573XB96r4b%2FY%2F1KElNzggbTW1PKbs9t5gNR21wchGCZeixiJpmcJAq6DLkMVL6%2FrFMSomyY7qJLPAHfm8HQXB9t6IjJrqHw8SF7WgAT%2Fq0I&X-Amz-Signature=eb3ca63af17b63bffac552412133f99a9e1130b146e89fdf9770d135ee90370a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
