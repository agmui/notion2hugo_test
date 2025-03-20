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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6AWZ65%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCrmv%2B361RBDWETQ6fhzUOdQsdTS5ztWbnPrS5xVfjxZwIgEGQXmbINIoBNk9XoCaSMv%2F2i7S%2BByz2t5sgsvPpiLdMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7dnpzFYImUAndLircA9Zx3Px%2BO%2FB1ymu8P%2FZlNNanCQX9oIv1ctYETdp3gbJJdvHPA973UaO%2B4mEZ9g5OE0GzneyJ35z1xxSWf2mboa6%2BKKZwH5IQX%2F483X%2BSbj5fKcaKCbkomsg3zYpJjnzEMPynossBDire816opWbiUDR6QpxKx%2FuvgjEv0mUsnlMoTD%2BONMWGOtP3x20pAvm%2F9uPHVW0lqHSMb7yck0I4kKT3CfLApKIZC%2FUTbyLU8Cir%2B1uvjuDYBAhlP9fJFsgzn5%2BC%2FeQnnWTuVGnNFY5qKI4lSvcEGfol%2Bnb0Qd%2FnGDG8jNUii%2BVM51UoHQDsuxwjb2JWZ%2FGR5qTd8aP4KAupjKGhh2zhAl%2B8XIMwdTNEkn6eMC6fyB%2BesQG4g68jFDg%2BCyY4JHvNx8A2nOrPT2BmTjGwSr8kS4vQgZpuebhWqvFOj6i6tzRI7txCVy3FIKcIgf81EfO%2FMytVSOS%2FQJXaoDc%2Bz2MmdUwgJiZUyU%2BAspD%2Bg6fbn8EWET9Kz66UoIgT39qXrIyFVx4jOMLEjsFBLa7Jryph6h5K3er3F46vm0fu6Idc6MibThafVpxO9%2BLOMHzkGRARdCjiiA2rGQlNq57s1TdyXD6wt14rVg5Qe70qSLx3MqkSJ45zOzXNML3k8b4GOqUBKsWT0XjXMVNqeublr44oVy3foGbOSwsIwdsQ9I9iNrOcbYQId%2BoBG8yUj%2FPDCIVWkHpMzE7JisQ1phf5KV5R9R5yGaB9GDEJb9Wcl%2F7Ca7jG8hnDDVVBaNKFfFrhP99pFm6Rqu3N0%2BuwC80LucgXPW7NKTGBz7qUKaZq135yyWjPkRv1cAUikRlEVi%2FyyODhuHoSgUQxTm58a3f3iyvnOgX7zR5E&X-Amz-Signature=704bfc2a64b76196653e9e80a2fd72745da8df26ff8fd999fae30270bcce51f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q6AWZ65%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCrmv%2B361RBDWETQ6fhzUOdQsdTS5ztWbnPrS5xVfjxZwIgEGQXmbINIoBNk9XoCaSMv%2F2i7S%2BByz2t5sgsvPpiLdMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7dnpzFYImUAndLircA9Zx3Px%2BO%2FB1ymu8P%2FZlNNanCQX9oIv1ctYETdp3gbJJdvHPA973UaO%2B4mEZ9g5OE0GzneyJ35z1xxSWf2mboa6%2BKKZwH5IQX%2F483X%2BSbj5fKcaKCbkomsg3zYpJjnzEMPynossBDire816opWbiUDR6QpxKx%2FuvgjEv0mUsnlMoTD%2BONMWGOtP3x20pAvm%2F9uPHVW0lqHSMb7yck0I4kKT3CfLApKIZC%2FUTbyLU8Cir%2B1uvjuDYBAhlP9fJFsgzn5%2BC%2FeQnnWTuVGnNFY5qKI4lSvcEGfol%2Bnb0Qd%2FnGDG8jNUii%2BVM51UoHQDsuxwjb2JWZ%2FGR5qTd8aP4KAupjKGhh2zhAl%2B8XIMwdTNEkn6eMC6fyB%2BesQG4g68jFDg%2BCyY4JHvNx8A2nOrPT2BmTjGwSr8kS4vQgZpuebhWqvFOj6i6tzRI7txCVy3FIKcIgf81EfO%2FMytVSOS%2FQJXaoDc%2Bz2MmdUwgJiZUyU%2BAspD%2Bg6fbn8EWET9Kz66UoIgT39qXrIyFVx4jOMLEjsFBLa7Jryph6h5K3er3F46vm0fu6Idc6MibThafVpxO9%2BLOMHzkGRARdCjiiA2rGQlNq57s1TdyXD6wt14rVg5Qe70qSLx3MqkSJ45zOzXNML3k8b4GOqUBKsWT0XjXMVNqeublr44oVy3foGbOSwsIwdsQ9I9iNrOcbYQId%2BoBG8yUj%2FPDCIVWkHpMzE7JisQ1phf5KV5R9R5yGaB9GDEJb9Wcl%2F7Ca7jG8hnDDVVBaNKFfFrhP99pFm6Rqu3N0%2BuwC80LucgXPW7NKTGBz7qUKaZq135yyWjPkRv1cAUikRlEVi%2FyyODhuHoSgUQxTm58a3f3iyvnOgX7zR5E&X-Amz-Signature=cb4208d6b636d9e76c1e67cf3ed162e4592be91fc0301be2bba8ff6519e160fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
