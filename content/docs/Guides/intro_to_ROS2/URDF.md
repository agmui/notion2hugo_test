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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUQCADO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDni6q98SFfsIrCG%2FknrLRPontqVOGpo55qp%2Fu4H1hwCAIgfJfP52fIR552SPpbXmh6f6b7t9DL9xeclvwROgTldkYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0F0F8AZ2L7nQsTYyrcAwWBm4NeG2AKnmm3NB%2BN6yK%2FzWwk7nn6MYAr3%2FZQEwAjkd7zkuRNVfg5P6YSaE9Zdxq%2BpSpEvpMX%2BAVsOtw7OsQw2NEW8%2BOPsJfEizumwJh14PUm%2BmgVCbAgl7rKmVfgFosmOp4oiA3GGBVm%2BQ5k4ECi9F7LhDWkcMShcw2tyow2M3twr60%2BJ4egJAkRDzjmlT2sQ80kqxlFcR6zzdWDJ74U7xXkdsOJj1f5pojXqBWEXNK%2FrflDyLXuq0DxvrQMTbC4qM6bGmwEvU2YTnVEuewNsVpAM2CmSEzo5Zf0lMk3nXoEYHsJ59foDs0lmzGA9Q5fYSvNVJak99HHKtHBhcyKHmS6cb81s6lQRjHNXuP4N7mDXGYt3Lbo5ZOM36eKu2%2B3HR1mlbg8a%2FX31QMeR1PGqeQcWXO7Va7pqTgt5c7O%2BLNw%2F8vx5yOcLrAy%2FRVkCxqEjYP%2BZB1skc8HkvwgXVQz7Q3vp%2FKPW9b9VAVREkyYBuj2LOBNwnVZ%2BWLFxoBIBaF3D2Sgbh0DVtaZ0v8rzsNHPG6xeWX%2FCJfBMONlVvvr%2FuOHiQmgLPZ6tmsSelJ9tH1%2FTsR4aVnXAS3xSlTuR0LH4rXxM%2BYEbRBpzDWFDlZawdXwH5Xzgn53DkIgMNaLiL4GOqUBYh%2BTa53z1JOitkEW8erkafpetqLxK9yBBPHiHJXyI9zyN4Sdw6%2B9KnzXKhst7luQLtJzyaDdV6VKjUxPNlzW5aeFpv9Ti%2BgHvFTsyDRhenbFTM%2FUqFfEneUvC1uw9JN8nZrfn9Vgm5zgoJnsjIeIhRmF9vNB2kChp2PL0HBDtIY%2Ba%2F6JJUzImBHwHNUsKffVn6HG8NLSRhZI1ozTMXtlEdFTvdod&X-Amz-Signature=2f074bd6bb6a51e2caee564dc2fbecd752f13e2c5fdd01f05f6c9b35696d70ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUQCADO%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDni6q98SFfsIrCG%2FknrLRPontqVOGpo55qp%2Fu4H1hwCAIgfJfP52fIR552SPpbXmh6f6b7t9DL9xeclvwROgTldkYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0F0F8AZ2L7nQsTYyrcAwWBm4NeG2AKnmm3NB%2BN6yK%2FzWwk7nn6MYAr3%2FZQEwAjkd7zkuRNVfg5P6YSaE9Zdxq%2BpSpEvpMX%2BAVsOtw7OsQw2NEW8%2BOPsJfEizumwJh14PUm%2BmgVCbAgl7rKmVfgFosmOp4oiA3GGBVm%2BQ5k4ECi9F7LhDWkcMShcw2tyow2M3twr60%2BJ4egJAkRDzjmlT2sQ80kqxlFcR6zzdWDJ74U7xXkdsOJj1f5pojXqBWEXNK%2FrflDyLXuq0DxvrQMTbC4qM6bGmwEvU2YTnVEuewNsVpAM2CmSEzo5Zf0lMk3nXoEYHsJ59foDs0lmzGA9Q5fYSvNVJak99HHKtHBhcyKHmS6cb81s6lQRjHNXuP4N7mDXGYt3Lbo5ZOM36eKu2%2B3HR1mlbg8a%2FX31QMeR1PGqeQcWXO7Va7pqTgt5c7O%2BLNw%2F8vx5yOcLrAy%2FRVkCxqEjYP%2BZB1skc8HkvwgXVQz7Q3vp%2FKPW9b9VAVREkyYBuj2LOBNwnVZ%2BWLFxoBIBaF3D2Sgbh0DVtaZ0v8rzsNHPG6xeWX%2FCJfBMONlVvvr%2FuOHiQmgLPZ6tmsSelJ9tH1%2FTsR4aVnXAS3xSlTuR0LH4rXxM%2BYEbRBpzDWFDlZawdXwH5Xzgn53DkIgMNaLiL4GOqUBYh%2BTa53z1JOitkEW8erkafpetqLxK9yBBPHiHJXyI9zyN4Sdw6%2B9KnzXKhst7luQLtJzyaDdV6VKjUxPNlzW5aeFpv9Ti%2BgHvFTsyDRhenbFTM%2FUqFfEneUvC1uw9JN8nZrfn9Vgm5zgoJnsjIeIhRmF9vNB2kChp2PL0HBDtIY%2Ba%2F6JJUzImBHwHNUsKffVn6HG8NLSRhZI1ozTMXtlEdFTvdod&X-Amz-Signature=ded3eec345c03d71050fa246c1469ea466381499544538987bd36dbd0c6350e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
