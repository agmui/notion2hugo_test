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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3G7S76U%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMJdmt47ihUonEvzQwHg1etrCB6CoVrpUZPuXdvo3NUwIgEB7Tc98VLXHbgLqxxaPllN818V2n3NZysLFVf81OOk8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK4gYqGjYmRMGo6YAyrcA%2BVzV1Q9crarxZxNljhtqKsw8MiKt31%2FFjc2EbHGyA1feO5ZR6a%2Bi%2F1NYvYDaEslO76G%2BkGuBcjgBctizUx1s2CyK7OidsqoeKWJdAp6odILxsF2AwKrQwgBvHeZ1F0LaLkHTaZv4v4EX2sEFC1isOKP8dYnLaQ8zVDr%2Fp8sTrzAWw%2FmPjQEiat53t%2FhalIrzTRjSS1B45QvE3qPZ9h%2FsnTr47QY%2FZl3tO28%2BtIhgeSaEMM8weeroO2i23NuijJHc3hzUChcl%2BKGW0wXGmZZOFaznsnELfVJ5s3ByR187S5Dfi63lUxofn7%2BgA50JkelU356NuAdthOP6c%2FVw97zJK5%2Fya32Rzf7iik7NMsPaOe5QdwMWeEGrAi9ruxtyo3X2IjKStWImomGsTEPmCifV79GGH0y2vZrFiR3JwzaP6yhI7WcghfHbDVBmNcVQYq%2B5e3EP244gfPYxB31hXq2jO4xMMjEtqjuS%2FlGqg2p3AosUxHtCyeniuU%2BTxMTUKxbGehZ8Ey16vCbhfwPpQbt0ULLRkXbimWEEYwFvlnYNXCQ4JLi%2FrV2Xs9A3sNsjMrJHXC%2F0khMDYro2i0tHQZwlOWzpOyTRfzLuC35QHf7q%2B4DJGBZOa%2FF2QXA75%2FUMM%2FkscAGOqUBjymea7lZGUETBBA1FkjlxWJzsvcjS633wBdIwSQv%2BTLvi1gvjwZ8Jx10S7NSLLXuM1KZslypqXLDnUt9LJlXub%2BKPJUjpUSFMLTnlyjRA0o1LkeBcWgv3QHTxU44kb5c6FP4luCTWsl%2BlDuOJytRmedybFVrBRLD4glM57KjDAxGWSORCKgEkIeffZN%2BqJ3mlxvYfkAByK%2BUb1oZfwbJPRpjsAly&X-Amz-Signature=c21c613a053562b4a9b6f14525edecad34765801588930b42dec0237bbe52797&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3G7S76U%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMJdmt47ihUonEvzQwHg1etrCB6CoVrpUZPuXdvo3NUwIgEB7Tc98VLXHbgLqxxaPllN818V2n3NZysLFVf81OOk8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK4gYqGjYmRMGo6YAyrcA%2BVzV1Q9crarxZxNljhtqKsw8MiKt31%2FFjc2EbHGyA1feO5ZR6a%2Bi%2F1NYvYDaEslO76G%2BkGuBcjgBctizUx1s2CyK7OidsqoeKWJdAp6odILxsF2AwKrQwgBvHeZ1F0LaLkHTaZv4v4EX2sEFC1isOKP8dYnLaQ8zVDr%2Fp8sTrzAWw%2FmPjQEiat53t%2FhalIrzTRjSS1B45QvE3qPZ9h%2FsnTr47QY%2FZl3tO28%2BtIhgeSaEMM8weeroO2i23NuijJHc3hzUChcl%2BKGW0wXGmZZOFaznsnELfVJ5s3ByR187S5Dfi63lUxofn7%2BgA50JkelU356NuAdthOP6c%2FVw97zJK5%2Fya32Rzf7iik7NMsPaOe5QdwMWeEGrAi9ruxtyo3X2IjKStWImomGsTEPmCifV79GGH0y2vZrFiR3JwzaP6yhI7WcghfHbDVBmNcVQYq%2B5e3EP244gfPYxB31hXq2jO4xMMjEtqjuS%2FlGqg2p3AosUxHtCyeniuU%2BTxMTUKxbGehZ8Ey16vCbhfwPpQbt0ULLRkXbimWEEYwFvlnYNXCQ4JLi%2FrV2Xs9A3sNsjMrJHXC%2F0khMDYro2i0tHQZwlOWzpOyTRfzLuC35QHf7q%2B4DJGBZOa%2FF2QXA75%2FUMM%2FkscAGOqUBjymea7lZGUETBBA1FkjlxWJzsvcjS633wBdIwSQv%2BTLvi1gvjwZ8Jx10S7NSLLXuM1KZslypqXLDnUt9LJlXub%2BKPJUjpUSFMLTnlyjRA0o1LkeBcWgv3QHTxU44kb5c6FP4luCTWsl%2BlDuOJytRmedybFVrBRLD4glM57KjDAxGWSORCKgEkIeffZN%2BqJ3mlxvYfkAByK%2BUb1oZfwbJPRpjsAly&X-Amz-Signature=1bca77f63e6bbd60d6f517d341b1c29821c974387aa05246b5f4c03991601f95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
