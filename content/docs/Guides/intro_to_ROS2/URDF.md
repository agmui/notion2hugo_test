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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RK7UGE%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnHLV4I7g85EPQ2MgrKVP9fQCVBqiQlHP301xDeJOenQIhAPwSDq7zuz%2Bp69p86SRKyf8gUrWoWjVM7Zf2lm9SQictKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBh6OR3WzEBGWBfMq3APYpLS1RKzsuUDYYLvR30jKwTh7ABvY9rXyOi%2Bfbl5atFPSImQZiupSyW7TY%2FPO73LqbOT9zlSmhBPrSkaZJziAmGICVva1qsJX7XpKxE7Uui%2FULXfarkrhQ403qs%2FZJx4DVHh1%2BPeQCaDATPMeCWaY9NtTkqdUdyEZgJqNzTVUpWuHWLEeOmDtA8xGuYAlMMalOCGU2aHuIgLDg%2FDYMGFaLD7%2FzFme%2BT6yDaSZEkBZWlOtTzH9i2tyeZkPUEHAUs3lg38gG1lu1XybthRdWDBFrAvNDynM5xtMX8%2BBzKwl0TA96z%2BlLfMOMrrKqyPrh982xovEwk5C%2BX7EFO%2FKJTtdP2%2BbWSF3C6UzowB3gFzL%2FGNdAEFTmf9lG%2FD7F9kJc3BOVt3mKdiuW%2Fz4b0XjzucOHtnylepVnS3BEAWEWlCpwe4qMky25ugdJeCwlTxVwZJMyHfhWFYno8QwUZflYTl5sDkyXebBQy6Br3yPjagG2VJfBO1WM0gVFsySkB5Sx6SAEs4giKCuBg%2FAwWPzqko2eiBSCZFrBy8sa%2Bd7EfHmQr5H6z2%2FKDIfxlPJbij7t7cSNWG9gJlq1p62Am9AgstCiddkosvxk09Ljvux80RrbVKGZUgn9RyExCohRTDI6%2FrABjqkAR9uoGtl6%2FMGenGVL0TJXaSqKMifwGT9YclQhGXpERWiGgrMvRHieVTG5vlrSf%2BEs64My%2B6nWFNAcQYfpGqq9ZjaEFAek%2Fqc2zZuzcRVVww99Rur3GBi4iwnLuldZ7hds1AQSIgM1uhqENLA8ACuoP4DleJBw4OO4lbRkJmPrRz2rOkB8PsBzqti2YfKVUVcTaQgaPQZUlIUssLTztTXZkoZHETx&X-Amz-Signature=41448addb2843588874845071d77930afc4cd7f0b5a7f07a55f9321e2e15b167&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RK7UGE%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnHLV4I7g85EPQ2MgrKVP9fQCVBqiQlHP301xDeJOenQIhAPwSDq7zuz%2Bp69p86SRKyf8gUrWoWjVM7Zf2lm9SQictKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BBh6OR3WzEBGWBfMq3APYpLS1RKzsuUDYYLvR30jKwTh7ABvY9rXyOi%2Bfbl5atFPSImQZiupSyW7TY%2FPO73LqbOT9zlSmhBPrSkaZJziAmGICVva1qsJX7XpKxE7Uui%2FULXfarkrhQ403qs%2FZJx4DVHh1%2BPeQCaDATPMeCWaY9NtTkqdUdyEZgJqNzTVUpWuHWLEeOmDtA8xGuYAlMMalOCGU2aHuIgLDg%2FDYMGFaLD7%2FzFme%2BT6yDaSZEkBZWlOtTzH9i2tyeZkPUEHAUs3lg38gG1lu1XybthRdWDBFrAvNDynM5xtMX8%2BBzKwl0TA96z%2BlLfMOMrrKqyPrh982xovEwk5C%2BX7EFO%2FKJTtdP2%2BbWSF3C6UzowB3gFzL%2FGNdAEFTmf9lG%2FD7F9kJc3BOVt3mKdiuW%2Fz4b0XjzucOHtnylepVnS3BEAWEWlCpwe4qMky25ugdJeCwlTxVwZJMyHfhWFYno8QwUZflYTl5sDkyXebBQy6Br3yPjagG2VJfBO1WM0gVFsySkB5Sx6SAEs4giKCuBg%2FAwWPzqko2eiBSCZFrBy8sa%2Bd7EfHmQr5H6z2%2FKDIfxlPJbij7t7cSNWG9gJlq1p62Am9AgstCiddkosvxk09Ljvux80RrbVKGZUgn9RyExCohRTDI6%2FrABjqkAR9uoGtl6%2FMGenGVL0TJXaSqKMifwGT9YclQhGXpERWiGgrMvRHieVTG5vlrSf%2BEs64My%2B6nWFNAcQYfpGqq9ZjaEFAek%2Fqc2zZuzcRVVww99Rur3GBi4iwnLuldZ7hds1AQSIgM1uhqENLA8ACuoP4DleJBw4OO4lbRkJmPrRz2rOkB8PsBzqti2YfKVUVcTaQgaPQZUlIUssLTztTXZkoZHETx&X-Amz-Signature=722162e2c874927ccb1ab1ac261f305da741ab4c6c6fde46f94087df676418e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
