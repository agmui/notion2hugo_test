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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWOL3BI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB4UXITEG40JZn8HE8ZhQXI2y9aSEJsgCWLAL2Y97ifAiAnzvgMvqOCV3s6ZIVZ778b%2Fw3nPgkPOdsG7gjcmjyAZSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM01oE4SzFqjoy2Xj7KtwDG7ghx5QN6wcDAPeVykYrkzE9%2BcSFYX6zYr7p9Tau4taPSKlXmyHsNIdok6P3o9A6yBMmBJoSCQqSQXhSTBV0vh6KdDYeb%2FAW8HDagdZ4GMKYyOC79yId3QVHblFTY0Cz4oVK1SzdT9XVWVhEe8ZgSn9xdIGEFSC27spPioVaPrJ6pndk9lQHkBISMilIq%2BR4%2B5ZbLhqlkPEKQ%2FQ8H71H2JZiXN297ZhcB4zvHHtCIvIa0VNDf6DwsRDeJNMFy0cEDjiIREaF51e7HRQ%2BRDK8QOhMxd1HF4Q%2BJ4sYjBljLTZ6ct0hB1LOTcLBbAzkfao%2BrRIxle23osPTBeRD4LVL9r32FTswcgkNt4i3eJ89fN3Tp67EMopU1NjiGJuaGmSbWgF0J7DcEkz0ZFCWfeugYEAyZRUoyK9oHJsiMm3pjwmazVfQtqWjDk9fdImjCpOdwoOxndXmGWRS1gxjvW5oFlK50cXFhUSQMQi29w2HLdfjkYnFmgqwmoYiXQd8R1I13fZZcGbXahrsn5lmjiBUCIz4%2BazQVfvlzuZMQm1JqcDtnxDnbwYXq4CMioGXUoqh6qAty9B5dw3iJsz59U27%2BMYhTqTCgTN0Dl8udvF3EMKmZKE1AiXBuPgeii8wjbzDvwY6pgHeonsz%2F9rR%2BhIiCmUAS14ZbDb0ZW0oG0mkNWn8Fuk660NDMkxNuyHuuJEpW7MtYExpe7AG9rmypHIjzg5uwf3Ce5zLwdh1fdaGvJbT92Ti%2Bi0pNqHVymQzeKpeDAsiQVotQ055%2FFotb6u9JfHkOpDO%2FMaE0uiAPOmPhSziiWofSkrxkaa%2FHe1YR7omZ8r16FdmeLCzkTidTseUkm4AEQixoWXePRg6&X-Amz-Signature=4d7804c3efc2e9c683d987ecd2c98f0511b2f6261253a51a2c01a6987550caeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWOL3BI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICB4UXITEG40JZn8HE8ZhQXI2y9aSEJsgCWLAL2Y97ifAiAnzvgMvqOCV3s6ZIVZ778b%2Fw3nPgkPOdsG7gjcmjyAZSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM01oE4SzFqjoy2Xj7KtwDG7ghx5QN6wcDAPeVykYrkzE9%2BcSFYX6zYr7p9Tau4taPSKlXmyHsNIdok6P3o9A6yBMmBJoSCQqSQXhSTBV0vh6KdDYeb%2FAW8HDagdZ4GMKYyOC79yId3QVHblFTY0Cz4oVK1SzdT9XVWVhEe8ZgSn9xdIGEFSC27spPioVaPrJ6pndk9lQHkBISMilIq%2BR4%2B5ZbLhqlkPEKQ%2FQ8H71H2JZiXN297ZhcB4zvHHtCIvIa0VNDf6DwsRDeJNMFy0cEDjiIREaF51e7HRQ%2BRDK8QOhMxd1HF4Q%2BJ4sYjBljLTZ6ct0hB1LOTcLBbAzkfao%2BrRIxle23osPTBeRD4LVL9r32FTswcgkNt4i3eJ89fN3Tp67EMopU1NjiGJuaGmSbWgF0J7DcEkz0ZFCWfeugYEAyZRUoyK9oHJsiMm3pjwmazVfQtqWjDk9fdImjCpOdwoOxndXmGWRS1gxjvW5oFlK50cXFhUSQMQi29w2HLdfjkYnFmgqwmoYiXQd8R1I13fZZcGbXahrsn5lmjiBUCIz4%2BazQVfvlzuZMQm1JqcDtnxDnbwYXq4CMioGXUoqh6qAty9B5dw3iJsz59U27%2BMYhTqTCgTN0Dl8udvF3EMKmZKE1AiXBuPgeii8wjbzDvwY6pgHeonsz%2F9rR%2BhIiCmUAS14ZbDb0ZW0oG0mkNWn8Fuk660NDMkxNuyHuuJEpW7MtYExpe7AG9rmypHIjzg5uwf3Ce5zLwdh1fdaGvJbT92Ti%2Bi0pNqHVymQzeKpeDAsiQVotQ055%2FFotb6u9JfHkOpDO%2FMaE0uiAPOmPhSziiWofSkrxkaa%2FHe1YR7omZ8r16FdmeLCzkTidTseUkm4AEQixoWXePRg6&X-Amz-Signature=434be0afd88acc82cadbaee1f7cefb52416b40cbd885137df158ddf70f7be570&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
