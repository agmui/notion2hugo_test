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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2C4WLF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDybrJ2wW%2FE7Z6d0yyNh95U102MIN5ytzh9vCVtW%2B%2BkoQIgV1eJ7e7X4gQCgZrc1hcz0Gap9ylVaxrWoCdYDgAJv48q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBMRubegJuXO6ByplCrcA%2B9HXdMd7fCcoJZ6usn%2FHXLVcCCgjGJOX85FmbKdAtB5B7C3GlZftxn128BqX9cSBXWYfUPa3cQnK1b8bDILHoDE2hHaKyZAZmMpxnDgLnATwMC8eFkZ9%2B1vnHS%2FjxjjxjHkvaGJfq28TlsUsBinmNnDJJd3djqzU6%2BGDk7dJfABxuMadKaqRVcpQyO0uMqZmmxJuPs59JtSK7ZjB2zP7RPLKkRmyjg3SlJa9UkwBwYKvVmWFVy2Ydd76dsfZJBqLmZ2okJ4LTxoWZjdgxKjr5Pd9T2xLiCqPVofEQZ52QN6%2BD%2F6WfiKRsk50LqS%2FHDahzomLPH0yRqkjhifqdJO89Ep90zrhJueYLjqqVhs5a9IAOp4CImjpgqww1auKmNJYjxX48%2B9qeEqfM9m6p%2F2iOYxE3XPMkkjdyK6X%2FELecW5%2BkDEEx7yY7o5Yio8UMZE%2FvGj2pKDiGR7707Gk1zFUcnzQfEkLWsFc4nms0szufgVwqlRxFx8ErQplGna23B5rqZrwpaRcnOu5K7NqHxIYMH3Ieg%2B31YdpwFSD2Z4dYWTDFHuunP4jnwWFv47fhAekFoAiKHl1t7L2%2FlJAt3LXsFrZij8puyLkKULGnAF4awzdXxtCpnJsIHPrzCjMLXF%2BsEGOqUBpugAM6xvDz4z5OLxuBKUhWNybyvxRpESVtuEDN8IcmxB%2FB%2F%2FhSt2raqO0xXCxhy0Ig1n%2FsXvaO5b6LEnz6KQAhoro9BCy%2FoXeA3QQMexzC6zSRUvVwTDL1BU0x44aCkQSmt4HzI4%2Ftra7lhPJ2pRDrepo%2Fa%2F4%2B8t5Ns7%2FInTBQkTkScPI7ZPE2L28jaU8QExNVCkJsaF0JSiVrXFR7eqKUVbxFH7&X-Amz-Signature=07a70d69e7cd3c42b4d7e16fa367dc4b9e2559d58ce61c8ab6aa723694ee3152&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2C4WLF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDybrJ2wW%2FE7Z6d0yyNh95U102MIN5ytzh9vCVtW%2B%2BkoQIgV1eJ7e7X4gQCgZrc1hcz0Gap9ylVaxrWoCdYDgAJv48q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBMRubegJuXO6ByplCrcA%2B9HXdMd7fCcoJZ6usn%2FHXLVcCCgjGJOX85FmbKdAtB5B7C3GlZftxn128BqX9cSBXWYfUPa3cQnK1b8bDILHoDE2hHaKyZAZmMpxnDgLnATwMC8eFkZ9%2B1vnHS%2FjxjjxjHkvaGJfq28TlsUsBinmNnDJJd3djqzU6%2BGDk7dJfABxuMadKaqRVcpQyO0uMqZmmxJuPs59JtSK7ZjB2zP7RPLKkRmyjg3SlJa9UkwBwYKvVmWFVy2Ydd76dsfZJBqLmZ2okJ4LTxoWZjdgxKjr5Pd9T2xLiCqPVofEQZ52QN6%2BD%2F6WfiKRsk50LqS%2FHDahzomLPH0yRqkjhifqdJO89Ep90zrhJueYLjqqVhs5a9IAOp4CImjpgqww1auKmNJYjxX48%2B9qeEqfM9m6p%2F2iOYxE3XPMkkjdyK6X%2FELecW5%2BkDEEx7yY7o5Yio8UMZE%2FvGj2pKDiGR7707Gk1zFUcnzQfEkLWsFc4nms0szufgVwqlRxFx8ErQplGna23B5rqZrwpaRcnOu5K7NqHxIYMH3Ieg%2B31YdpwFSD2Z4dYWTDFHuunP4jnwWFv47fhAekFoAiKHl1t7L2%2FlJAt3LXsFrZij8puyLkKULGnAF4awzdXxtCpnJsIHPrzCjMLXF%2BsEGOqUBpugAM6xvDz4z5OLxuBKUhWNybyvxRpESVtuEDN8IcmxB%2FB%2F%2FhSt2raqO0xXCxhy0Ig1n%2FsXvaO5b6LEnz6KQAhoro9BCy%2FoXeA3QQMexzC6zSRUvVwTDL1BU0x44aCkQSmt4HzI4%2Ftra7lhPJ2pRDrepo%2Fa%2F4%2B8t5Ns7%2FInTBQkTkScPI7ZPE2L28jaU8QExNVCkJsaF0JSiVrXFR7eqKUVbxFH7&X-Amz-Signature=753026a3ea3b8adbcac3d7552363908940ddc30f6338a16633dc126ddce10cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
