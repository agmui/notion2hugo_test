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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6DKCDW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsD%2F2gylVqgbw6OJOIEsvhpscoGDnOnj64DTBiHXpxjQIgBn%2FEqMT0oyLbYwYXOQF32%2BSzfzBKLPgHLiaxePqofFgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEgEs8BbjifX8upjcircA%2FQ9A%2Bz3KNkizsaRbVXPtR757Cuk6GWw4RifyEiUraGtZ2SoSY3RbCzSFSlJPwyJNbSfMDSerI54e9xmy45Y2%2F7ulotolc0CqLNt8kS%2F6S9eLGS6itL1LJcZ6XdN1Z9alFqPfIctchylURnkOqfgFIVqBoiNv9Rnq3FGSf8mjxxzIf4qnck0hoYOe8IXBWIH58MR5WQ6HbEIkk5eQyi0tfMUb66%2BYgO1QEH5u9h%2FyayMcENatwiTkrnLEZGSaRjATCuH6okXnr5Svj9Oh7RaufOA4yp2Y3%2Fuxed46aSLAgKIhN5IwAKBdO3wgoXzuJAAwWzlDxEfOmSbXzDPom516H6tNXwE%2Fi3ccby9Gn7LFSwf2QkJtaAyRIET0UtiL5kMGL%2BXHe9AstRx2MbrTmG43uQ8dbZsYjYbdqMeWItclesy36BB4icKT6VEuPhvVgpGQNHHe0Mkg8srLnnlg69o7FEH9YTTItsq6i559orkUm9Wr3rdMr%2BMRaNR8vz2Iw8cWCvsPgwmF%2FsYiUggmJURuK7YtnwgtUof3wx20mkv%2B%2FV4f6PXDAcTLgAOcrcuuqpxrEt%2Bq3FjGbUvRbnN%2B4X4u8p5QflHn4UyWjvq7NI8ckSCWyKFHnATWmSBdBZ0MP%2Fu970GOqUBI0vNbzcrh0ROlgrIt5AH9M9AAnfGIBL%2FkXfxH2qtWzj7L33yV37CYnDORfeWkWLikHLNh1wz2ewgiDsxazQBQe9VsTs%2BJTE1QYUD3scUiuGUR2e9YaO4mjXMlMYDGuPhxB3RVVx7%2BIED9zLPC8%2BC1VYm3K365Fxeb%2BDZgQ%2BMbdznHa8fXH%2FHM4Z%2F4Ph%2FwhDu4Fdtg8%2B3QyaFAiR0SiOOXwX2Wjm9&X-Amz-Signature=7ff6396b0aa092daeeb585f4c9881fb495a92dfc29223914fe8a73d034f7b703&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6DKCDW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCsD%2F2gylVqgbw6OJOIEsvhpscoGDnOnj64DTBiHXpxjQIgBn%2FEqMT0oyLbYwYXOQF32%2BSzfzBKLPgHLiaxePqofFgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEgEs8BbjifX8upjcircA%2FQ9A%2Bz3KNkizsaRbVXPtR757Cuk6GWw4RifyEiUraGtZ2SoSY3RbCzSFSlJPwyJNbSfMDSerI54e9xmy45Y2%2F7ulotolc0CqLNt8kS%2F6S9eLGS6itL1LJcZ6XdN1Z9alFqPfIctchylURnkOqfgFIVqBoiNv9Rnq3FGSf8mjxxzIf4qnck0hoYOe8IXBWIH58MR5WQ6HbEIkk5eQyi0tfMUb66%2BYgO1QEH5u9h%2FyayMcENatwiTkrnLEZGSaRjATCuH6okXnr5Svj9Oh7RaufOA4yp2Y3%2Fuxed46aSLAgKIhN5IwAKBdO3wgoXzuJAAwWzlDxEfOmSbXzDPom516H6tNXwE%2Fi3ccby9Gn7LFSwf2QkJtaAyRIET0UtiL5kMGL%2BXHe9AstRx2MbrTmG43uQ8dbZsYjYbdqMeWItclesy36BB4icKT6VEuPhvVgpGQNHHe0Mkg8srLnnlg69o7FEH9YTTItsq6i559orkUm9Wr3rdMr%2BMRaNR8vz2Iw8cWCvsPgwmF%2FsYiUggmJURuK7YtnwgtUof3wx20mkv%2B%2FV4f6PXDAcTLgAOcrcuuqpxrEt%2Bq3FjGbUvRbnN%2B4X4u8p5QflHn4UyWjvq7NI8ckSCWyKFHnATWmSBdBZ0MP%2Fu970GOqUBI0vNbzcrh0ROlgrIt5AH9M9AAnfGIBL%2FkXfxH2qtWzj7L33yV37CYnDORfeWkWLikHLNh1wz2ewgiDsxazQBQe9VsTs%2BJTE1QYUD3scUiuGUR2e9YaO4mjXMlMYDGuPhxB3RVVx7%2BIED9zLPC8%2BC1VYm3K365Fxeb%2BDZgQ%2BMbdznHa8fXH%2FHM4Z%2F4Ph%2FwhDu4Fdtg8%2B3QyaFAiR0SiOOXwX2Wjm9&X-Amz-Signature=986729a00bd58817f74f4074cb6ad73c3c6ea28f213f44947caacbb2883dc30e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
