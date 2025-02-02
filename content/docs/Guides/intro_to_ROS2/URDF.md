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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6CXVNI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM8uR8YFdTxU5zLzv%2FFf1fiUPs3WlfRQWeeZtayWSzigIgFGze9aJxgHDLM68ERzn9PAXkYT0jytIcXyysSS9jZeYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo0atZTZCRJaPeRPircA%2FmJ9TNp8BZIqpoORdFR5wQ6UVMxkiBm9v6l5tsG%2FD7Ak8Kz%2FxKDyjVOkRLKeYjWi%2BismdxvLvb3%2F9fVvKok0PshmK%2BpV0TTXISODDagvew3G5sFH3PNMe1lBDHO9aAuklS7eQTtXnqFsSSH6lU08DzQbQDQMdI4fd88I7mppdWds%2B9O8Ce68iMM%2FXuMXdqplUp4XlxCsplRXQUQl%2Fs2ZuOtY0hSlRZxkXfFSdlGE9O9lqWyxmcLYa5jfmZw%2Fh7r2no7KOa70U3ce0v%2FyzfWOkQNWmSQlHEhSFSccgUguOeE4BhZsN2wO6G7CdfZ%2BYRCMGFpTvF2NKkHSxg1doVcyKpE%2Bwh%2FE6U%2FF3oyfIxRbLHdIJHr%2BC48i9m%2Bedm3gmkl6GeKjNf6KrHTEd4xHGbs3B%2BI%2BY%2BhDKNGX%2F6RuukwDuiVkWBmCsxVZHh8H38PzNynyk0wEzSBrQqdE82%2BIXHGn5OUpun%2FLvQKaC%2FkxfBXG9%2BxP3UGGHfBes3YG6l9xratP74n4s3Qvi8dABZSsq0uzRgSZhtwqyZlxIprex6F1zfbj0dimJEh590QpZBuviwQwMPD%2FWu0weJ4ZMGZFwOTwnMLBxKMOuPI6ca%2BZFWcItNxUXSRtsdTLT02ZKaMMIrd%2FrwGOqUBtGD6ud%2FpdUndl5nENnp9FEVmAl%2FvOsJx%2BMVyzrGV26S%2BqkYQmzEFvoXmBKOu40I%2BE4cDeclVmrNcF%2BD5yDatI7zBDsNh3oj5IwClHpwYK1R%2BnujCt7wPzmdnBdsmBXEelkdyLGp2gN4HbN2NXGbRo0Jah5XOMNoMFODXrcvcSo6881h4dnHYydqhFbDoj2KKM%2F%2BmBUmIB6ZDguWkC%2BWoZffQOj2l&X-Amz-Signature=00b9a74ea65c09e941dc7127f6219693da072a95afde256a4eebad4dffeae447&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6CXVNI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM8uR8YFdTxU5zLzv%2FFf1fiUPs3WlfRQWeeZtayWSzigIgFGze9aJxgHDLM68ERzn9PAXkYT0jytIcXyysSS9jZeYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo0atZTZCRJaPeRPircA%2FmJ9TNp8BZIqpoORdFR5wQ6UVMxkiBm9v6l5tsG%2FD7Ak8Kz%2FxKDyjVOkRLKeYjWi%2BismdxvLvb3%2F9fVvKok0PshmK%2BpV0TTXISODDagvew3G5sFH3PNMe1lBDHO9aAuklS7eQTtXnqFsSSH6lU08DzQbQDQMdI4fd88I7mppdWds%2B9O8Ce68iMM%2FXuMXdqplUp4XlxCsplRXQUQl%2Fs2ZuOtY0hSlRZxkXfFSdlGE9O9lqWyxmcLYa5jfmZw%2Fh7r2no7KOa70U3ce0v%2FyzfWOkQNWmSQlHEhSFSccgUguOeE4BhZsN2wO6G7CdfZ%2BYRCMGFpTvF2NKkHSxg1doVcyKpE%2Bwh%2FE6U%2FF3oyfIxRbLHdIJHr%2BC48i9m%2Bedm3gmkl6GeKjNf6KrHTEd4xHGbs3B%2BI%2BY%2BhDKNGX%2F6RuukwDuiVkWBmCsxVZHh8H38PzNynyk0wEzSBrQqdE82%2BIXHGn5OUpun%2FLvQKaC%2FkxfBXG9%2BxP3UGGHfBes3YG6l9xratP74n4s3Qvi8dABZSsq0uzRgSZhtwqyZlxIprex6F1zfbj0dimJEh590QpZBuviwQwMPD%2FWu0weJ4ZMGZFwOTwnMLBxKMOuPI6ca%2BZFWcItNxUXSRtsdTLT02ZKaMMIrd%2FrwGOqUBtGD6ud%2FpdUndl5nENnp9FEVmAl%2FvOsJx%2BMVyzrGV26S%2BqkYQmzEFvoXmBKOu40I%2BE4cDeclVmrNcF%2BD5yDatI7zBDsNh3oj5IwClHpwYK1R%2BnujCt7wPzmdnBdsmBXEelkdyLGp2gN4HbN2NXGbRo0Jah5XOMNoMFODXrcvcSo6881h4dnHYydqhFbDoj2KKM%2F%2BmBUmIB6ZDguWkC%2BWoZffQOj2l&X-Amz-Signature=8a19bf49490e8bd9f33db7d1d8606cd493687395d71442e235a7b32dd831a6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
