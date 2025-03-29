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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VT5QL2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICFzCsD2O9wyRmFqGCBteBsVY0pGJxcOdy9gS609ub7zAiEA8wg5SqCHI1m%2B%2BM0v%2BcCY9r3EC78KGYkqLuYfnL7Jb3gq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBL03qsqZFcmdSiEICrcA1T0Z3RsNJXPsfGMrFtiBPovrwtGkndIbqXtrBo1cpiIBfTiLCA%2FNzLJh3P0EHObOkGvfI6Fw81yRmRYgY1A1Nz3F%2BvmMVvHrEK58QzkDHwdgzZsj8svSMk4%2BvaBvOMMpLBT6lVZdPy6XLGdUDwkfh%2BBYe3Q2tZJqFbmSHCRVgjslaupnRfyYHWJSr3r47O41mLana%2B25dTkZkaBjtx2jJj%2FMtyKQXc6whvVjcRXXcNDdxcj1O7P5ToT7lt51Mo4LQAfJ0oBLGGheWhLkrkR%2BeR5EasfxJsPskTYk55uleAMSWfvkxiN2AVi4FNQvjT65qBN7elP7yGVduB31jMioxMk%2BPZAHlqNK0fpn4aMBP1fq%2Fnwo3%2BsB9dWiUrhLZcyftacxYnc2gWH1VyFqmN3NNodrWWyE7JesA7lxMfterxViXtwqhcEfGhAYZty5qhmHHaAnBjanG9KD1gsVr1wqPRKxaZK2sSO19lleBOcSahy%2Bzko%2BVJb%2BYEh%2B%2FJJUAqSRjBqYBM1K1JzQmpwnHN6avXM4auwjJg%2FM3GtPRRG6o0D%2F3lmkoBkNZc6hHN7MLslls50KpyblGQsf6M81tIFoPVNVDd%2Frl%2F2aQLS1oZnBgI3%2F6B0wPbnX1hgHo%2FzMP7cob8GOqUBbf4WZmbyhrOsid3l77Rpm2IiLoOMPt7Gv8UR%2Fr49gci8GsB97N0%2Fh1VOWUUc2GUp7Mq%2F5PMxRBNsRgP%2FQYpTuJr7zsVEUt7P6oH%2BKJ4CMGqy8UxijcBi9S2yxfHliWvtFif343LWN3NIW8gKuazVWk8m6T%2BNl60%2BEw6w%2B6br0ILdMITNeMBjv8fLDiuJIaogvXJCvZVHb9e7ILJ%2B7Bp54oUFS1m0&X-Amz-Signature=f44167005b2232df254b52863e931b6bd91416247a89f61f1e98310536008daf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VT5QL2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICFzCsD2O9wyRmFqGCBteBsVY0pGJxcOdy9gS609ub7zAiEA8wg5SqCHI1m%2B%2BM0v%2BcCY9r3EC78KGYkqLuYfnL7Jb3gq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBL03qsqZFcmdSiEICrcA1T0Z3RsNJXPsfGMrFtiBPovrwtGkndIbqXtrBo1cpiIBfTiLCA%2FNzLJh3P0EHObOkGvfI6Fw81yRmRYgY1A1Nz3F%2BvmMVvHrEK58QzkDHwdgzZsj8svSMk4%2BvaBvOMMpLBT6lVZdPy6XLGdUDwkfh%2BBYe3Q2tZJqFbmSHCRVgjslaupnRfyYHWJSr3r47O41mLana%2B25dTkZkaBjtx2jJj%2FMtyKQXc6whvVjcRXXcNDdxcj1O7P5ToT7lt51Mo4LQAfJ0oBLGGheWhLkrkR%2BeR5EasfxJsPskTYk55uleAMSWfvkxiN2AVi4FNQvjT65qBN7elP7yGVduB31jMioxMk%2BPZAHlqNK0fpn4aMBP1fq%2Fnwo3%2BsB9dWiUrhLZcyftacxYnc2gWH1VyFqmN3NNodrWWyE7JesA7lxMfterxViXtwqhcEfGhAYZty5qhmHHaAnBjanG9KD1gsVr1wqPRKxaZK2sSO19lleBOcSahy%2Bzko%2BVJb%2BYEh%2B%2FJJUAqSRjBqYBM1K1JzQmpwnHN6avXM4auwjJg%2FM3GtPRRG6o0D%2F3lmkoBkNZc6hHN7MLslls50KpyblGQsf6M81tIFoPVNVDd%2Frl%2F2aQLS1oZnBgI3%2F6B0wPbnX1hgHo%2FzMP7cob8GOqUBbf4WZmbyhrOsid3l77Rpm2IiLoOMPt7Gv8UR%2Fr49gci8GsB97N0%2Fh1VOWUUc2GUp7Mq%2F5PMxRBNsRgP%2FQYpTuJr7zsVEUt7P6oH%2BKJ4CMGqy8UxijcBi9S2yxfHliWvtFif343LWN3NIW8gKuazVWk8m6T%2BNl60%2BEw6w%2B6br0ILdMITNeMBjv8fLDiuJIaogvXJCvZVHb9e7ILJ%2B7Bp54oUFS1m0&X-Amz-Signature=ca9014343fa470df8f4dd03f2543324129831784ffab6664ee11080ee081ee66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
