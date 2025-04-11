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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G2RDO5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD3HoJmAssWrFl0O5xWFhJK0ZGutEA6sz5dRjJimb4ctAIgP169AgVdgjM%2BqCkNxjqqNE9gViIEH5UimlMJVEx3zVQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcwjyj0Lvjo7nIibCrcA8KihZRJHlBwVg2o%2F8HsHKNu8mwBy85JRSH7Z5kQcWRDeZGsyTi5qyC%2Fqk%2B2PGiJ3aVFnv%2FIS26Bhjf4NnrLDItUZrFbqPxXjNH%2F%2Bh8scRKzIi1NJVTw2EXKEGutRqQQtJLthSx3P0DXIkBJrecOlH0AhSkgQyjYHLFzfh3Fn8aM6kM7Axb1aQ65qqQ68X79O0YqFG2SSUAOTZtZf1nIY6CkNawjhuVbtRORJ6%2FKEJAx2NZKx%2BkyXIaoaJX5DcIiQWc9qkHmHrmF1klQ2kAwEMxXL76hjxd75qSkGgZj97osteeeTl76HeYJ5NIxjma5wB2sXY4aQ229njDwAhdaxxrZwX1u%2FxI3EI6AysHfyVt7jTNTlQJZ%2FkLvo9cPslk9xx7%2FyFvkXdus1Ce76nYIAbNhQfJcgi1JAELVUFrlb91RpLXHmQUUVZmstFvLBzYraNwJ562zSFnLvCPCftHPFzhwucSIT1M10Cb7LVkMmf8%2BS0pehoX9415BAnz1o%2BlMiYA5cblZ5OOI%2FDEbIb2KPW7xnFyG%2FH8u1BJaREsSyWuPgI%2FbLfxmuuh1cBrbC7OD1D98Yff93d5mbomvqguye2VWcS%2FU97f%2B%2FEli1pgOdK83L63lVNb6dQhh6JAZMOe75b8GOqUBs7%2FbKyDgj9HSQLvG5HmVF6J6Ur3B6iTnaMHK2QDOsEnBKb2LExIaNpBew7%2F%2BA10QPGJOmIMoJH4ZiPvIFsCbnshL5KwCZzNsSqEGO1KccWPLOIVacFnQkXg9WCEkSbCp5R9PRWHLmw65EY1UO7aD9HLLpMsHLGdVXECk06sQiRNJ5jq8FgxJhxPBXUU%2BKz%2Fg9KR1Vpdzc20iysDf42kw68ia9MBq&X-Amz-Signature=dd55cd503ad922fa6f3f3793236e524e541a4718add1bdba61bbcd1e119fce72&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G2RDO5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD3HoJmAssWrFl0O5xWFhJK0ZGutEA6sz5dRjJimb4ctAIgP169AgVdgjM%2BqCkNxjqqNE9gViIEH5UimlMJVEx3zVQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcwjyj0Lvjo7nIibCrcA8KihZRJHlBwVg2o%2F8HsHKNu8mwBy85JRSH7Z5kQcWRDeZGsyTi5qyC%2Fqk%2B2PGiJ3aVFnv%2FIS26Bhjf4NnrLDItUZrFbqPxXjNH%2F%2Bh8scRKzIi1NJVTw2EXKEGutRqQQtJLthSx3P0DXIkBJrecOlH0AhSkgQyjYHLFzfh3Fn8aM6kM7Axb1aQ65qqQ68X79O0YqFG2SSUAOTZtZf1nIY6CkNawjhuVbtRORJ6%2FKEJAx2NZKx%2BkyXIaoaJX5DcIiQWc9qkHmHrmF1klQ2kAwEMxXL76hjxd75qSkGgZj97osteeeTl76HeYJ5NIxjma5wB2sXY4aQ229njDwAhdaxxrZwX1u%2FxI3EI6AysHfyVt7jTNTlQJZ%2FkLvo9cPslk9xx7%2FyFvkXdus1Ce76nYIAbNhQfJcgi1JAELVUFrlb91RpLXHmQUUVZmstFvLBzYraNwJ562zSFnLvCPCftHPFzhwucSIT1M10Cb7LVkMmf8%2BS0pehoX9415BAnz1o%2BlMiYA5cblZ5OOI%2FDEbIb2KPW7xnFyG%2FH8u1BJaREsSyWuPgI%2FbLfxmuuh1cBrbC7OD1D98Yff93d5mbomvqguye2VWcS%2FU97f%2B%2FEli1pgOdK83L63lVNb6dQhh6JAZMOe75b8GOqUBs7%2FbKyDgj9HSQLvG5HmVF6J6Ur3B6iTnaMHK2QDOsEnBKb2LExIaNpBew7%2F%2BA10QPGJOmIMoJH4ZiPvIFsCbnshL5KwCZzNsSqEGO1KccWPLOIVacFnQkXg9WCEkSbCp5R9PRWHLmw65EY1UO7aD9HLLpMsHLGdVXECk06sQiRNJ5jq8FgxJhxPBXUU%2BKz%2Fg9KR1Vpdzc20iysDf42kw68ia9MBq&X-Amz-Signature=cc36f10a4f3363d63e1cacef12de39c6d42bfd1e81b202d46e0ed7eacd8682bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
