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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBJGF4R%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOgs9xUEcWp4E1dbzsMj5XixSg5o1Ya9Q4z2nFM1V7eQIgWZzp2QD8%2FtCR%2F0SroBlnDAVoedSubRojqXu9LlniJl0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOAxz0hxgj8hjxBRqCrcA8hilgmXsPKu9zKdd5ncUa2QwmoO6eIOW0S0uNVbnRIWj2ax1ru3xmIfnEtxkzcntuyAuMn6N0tvaj%2BGrXW9yK2kLokS2hRtWcy6oikYeyP3DQYFZkmd2LYx0ICvSNMWFRrVFalRcC9mIGhxcHZSGYntka6XDwb45M1qKU4AEITd19aeqlPbWS1QqL7cYboqpVY5T9iCuEUr1Da03AC5rbgGH4lYHBTYTQxwLmmhkHCmAjGn1fQsW36UL0nwFo1n2WfmzlhF0QjC30qaWZMZR5ZXdE3zlxZ0lpqCh5mU3RgFURBVelCHLmgRqP0Vy3K5Z%2F0VA2a65hQCNnIITu%2F1nje%2BE3M21f1VgZyxu2%2Frtewip6yzwdooH9u%2Bk%2BHA0G8MzOQLYN2LTE%2F6VUC%2F%2FyO79NlxRnqvWx8r7BqgZ%2BaJZcjspYM8YAIYGDFNhohzU3n2J6gkj6bqAJVasYLntZ3Yn8Ox1Cxn%2FJGXsJQQMVx8Z1wmkoBZXElCleFLsR2EDmCWPAeopUBJcWUpZC%2Biz5QGaACyKv8EgwacR6VO2GRmYXE1%2Fx9iqTATHLAvePJ0MiWIs3tTUnUEaZOP6%2Bxj8WxSGS2m0pvCsTWDSE%2FzANWCGWAJJVdqbQyVjIJc1to%2FMOrmqMEGOqUBdC5BQqofhqyhWHMBXDwL3%2F6Utp3X9wmbm86QbPNCDyGGa1QgSOXHTMnMqSR2IbH6K10BJrI94RCRnAhbZojskBRwJcDub%2FqQOxFMOv0x%2BaZw8ibygJUdyImMC5Ql%2BiJJsx4a0WERFj%2BUd2upmLU1EXbIAFccdVoN0qRxo5a7%2FDdyRmzZohQa77ooJFzXUoGWVJoj5u%2FFGGqKym5O%2FWUZkIGrT4vS&X-Amz-Signature=521be04eb06155cded16ff4b3b74220d42b463470f445e3ee7c8df97f7369a11&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZBJGF4R%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOgs9xUEcWp4E1dbzsMj5XixSg5o1Ya9Q4z2nFM1V7eQIgWZzp2QD8%2FtCR%2F0SroBlnDAVoedSubRojqXu9LlniJl0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOAxz0hxgj8hjxBRqCrcA8hilgmXsPKu9zKdd5ncUa2QwmoO6eIOW0S0uNVbnRIWj2ax1ru3xmIfnEtxkzcntuyAuMn6N0tvaj%2BGrXW9yK2kLokS2hRtWcy6oikYeyP3DQYFZkmd2LYx0ICvSNMWFRrVFalRcC9mIGhxcHZSGYntka6XDwb45M1qKU4AEITd19aeqlPbWS1QqL7cYboqpVY5T9iCuEUr1Da03AC5rbgGH4lYHBTYTQxwLmmhkHCmAjGn1fQsW36UL0nwFo1n2WfmzlhF0QjC30qaWZMZR5ZXdE3zlxZ0lpqCh5mU3RgFURBVelCHLmgRqP0Vy3K5Z%2F0VA2a65hQCNnIITu%2F1nje%2BE3M21f1VgZyxu2%2Frtewip6yzwdooH9u%2Bk%2BHA0G8MzOQLYN2LTE%2F6VUC%2F%2FyO79NlxRnqvWx8r7BqgZ%2BaJZcjspYM8YAIYGDFNhohzU3n2J6gkj6bqAJVasYLntZ3Yn8Ox1Cxn%2FJGXsJQQMVx8Z1wmkoBZXElCleFLsR2EDmCWPAeopUBJcWUpZC%2Biz5QGaACyKv8EgwacR6VO2GRmYXE1%2Fx9iqTATHLAvePJ0MiWIs3tTUnUEaZOP6%2Bxj8WxSGS2m0pvCsTWDSE%2FzANWCGWAJJVdqbQyVjIJc1to%2FMOrmqMEGOqUBdC5BQqofhqyhWHMBXDwL3%2F6Utp3X9wmbm86QbPNCDyGGa1QgSOXHTMnMqSR2IbH6K10BJrI94RCRnAhbZojskBRwJcDub%2FqQOxFMOv0x%2BaZw8ibygJUdyImMC5Ql%2BiJJsx4a0WERFj%2BUd2upmLU1EXbIAFccdVoN0qRxo5a7%2FDdyRmzZohQa77ooJFzXUoGWVJoj5u%2FFGGqKym5O%2FWUZkIGrT4vS&X-Amz-Signature=d40aa50e9896c7ead209df95d5667729ce0fe7f7063945eb016c461392da2a02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
