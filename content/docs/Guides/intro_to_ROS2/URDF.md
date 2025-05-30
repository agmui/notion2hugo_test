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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2QUW2A%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf8%2F5veZkanpUq7xejlq%2FzRGCYZlIwgSEy6yks4gZ6RAiAyvNE3mpLWuQ76HvTJTGnbrIbHzr6XYCDFvoTET7t3kSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM53BljQ8pKvv4o921KtwDThqPO7%2Bo27G5p5dWxqYuJbEqWS7Tvv1xbdVOOcrwMreNSflandbWwWwA%2B%2BqlH3WA2EQZWos%2FrKyAGGiAN5I7nBS82q45Okd5wR5%2BGDO%2BTeO8a3kaM1gClfboYAajJev9xAuRbZLs5CTqkMyEFEd9a%2BTZUPMmnhH39HmMh44bvjjV6ufOMgT0awa69gFhvBWTe9EjxDSAFgWh4QjzK7rvxzEAmtYXeNw%2FFDnC0rzyxl1Yx0zuhtJ9HEyZ7RXqnoG25C2zplSYS7nkU0R8xxj5vIMVNs71OCUWlxdsYxbAM%2F8b6JmwlfBHujZKK%2FBUTZhjkaFQEP6i1iVXvgo6rv6JePQ18hMRlRQQIbAugD6pa5UD%2FZmBu5288gh%2FUtxTNzLtKBshAa9mWjKX7YTjpcax4HkaSZ6BiTsz2Sj2pEcGCkPmxKvW3eEJv56sRwwajtZ85DTTIiZzOIquUjLjL56rPOadC%2B6oenJuwv4b206DGrGbOnlH49hQoWeKVJ1jmNICO0%2BzVz7BHu5ymbuk8zj6MeBdoa%2Be%2BJNhHRq1CEtE3wiF2UHj%2FJTbqBWR%2FQPaz7T2TRTqVJj%2BhMTObH%2BhqETVElNObzDAnU1U%2BZHaWHPF3%2BuD7EtvQfSd8PgI1hAwoILkwQY6pgHBmHqShzPn42%2BGOXmX%2FdXFK3OyceGUHt7aoLvxod0v9jAG5ucj1gMXKZONjwzz5i4lxoDTfSosVT0HuKh7S2I%2FiaB795cbsw5jPD7cC2fML6uLkI%2FFDS%2FsEqoXAOvu5wLehefxKcOcSuvdDzM%2BeV335zAZP5Au7Ycuc8qmLflDNGRseje4PfO3Uhbbu1RtfjNuB0aD0IgctnGJE29WkgVEFnXvy5yT&X-Amz-Signature=92f85ca4c2ab10f2d6b534d093c918fc47e5a0a387452e386b25824a93584e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2QUW2A%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEf8%2F5veZkanpUq7xejlq%2FzRGCYZlIwgSEy6yks4gZ6RAiAyvNE3mpLWuQ76HvTJTGnbrIbHzr6XYCDFvoTET7t3kSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM53BljQ8pKvv4o921KtwDThqPO7%2Bo27G5p5dWxqYuJbEqWS7Tvv1xbdVOOcrwMreNSflandbWwWwA%2B%2BqlH3WA2EQZWos%2FrKyAGGiAN5I7nBS82q45Okd5wR5%2BGDO%2BTeO8a3kaM1gClfboYAajJev9xAuRbZLs5CTqkMyEFEd9a%2BTZUPMmnhH39HmMh44bvjjV6ufOMgT0awa69gFhvBWTe9EjxDSAFgWh4QjzK7rvxzEAmtYXeNw%2FFDnC0rzyxl1Yx0zuhtJ9HEyZ7RXqnoG25C2zplSYS7nkU0R8xxj5vIMVNs71OCUWlxdsYxbAM%2F8b6JmwlfBHujZKK%2FBUTZhjkaFQEP6i1iVXvgo6rv6JePQ18hMRlRQQIbAugD6pa5UD%2FZmBu5288gh%2FUtxTNzLtKBshAa9mWjKX7YTjpcax4HkaSZ6BiTsz2Sj2pEcGCkPmxKvW3eEJv56sRwwajtZ85DTTIiZzOIquUjLjL56rPOadC%2B6oenJuwv4b206DGrGbOnlH49hQoWeKVJ1jmNICO0%2BzVz7BHu5ymbuk8zj6MeBdoa%2Be%2BJNhHRq1CEtE3wiF2UHj%2FJTbqBWR%2FQPaz7T2TRTqVJj%2BhMTObH%2BhqETVElNObzDAnU1U%2BZHaWHPF3%2BuD7EtvQfSd8PgI1hAwoILkwQY6pgHBmHqShzPn42%2BGOXmX%2FdXFK3OyceGUHt7aoLvxod0v9jAG5ucj1gMXKZONjwzz5i4lxoDTfSosVT0HuKh7S2I%2FiaB795cbsw5jPD7cC2fML6uLkI%2FFDS%2FsEqoXAOvu5wLehefxKcOcSuvdDzM%2BeV335zAZP5Au7Ycuc8qmLflDNGRseje4PfO3Uhbbu1RtfjNuB0aD0IgctnGJE29WkgVEFnXvy5yT&X-Amz-Signature=2c8345fdb3b0b61a07007b75ebf4bbd4a2e338e28faab8a2c39c1ab41119b123&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
