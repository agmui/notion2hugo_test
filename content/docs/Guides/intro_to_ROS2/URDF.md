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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LLXJGE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaw8v%2FLbLUuRnTOqzMNnTLoDTZ%2FgFlKrhxLedP0Qk4yAiEA3vyMxs%2F2UVcfRgjzQWRTV9BFPenZs1UbTUSbgB0iEWUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZDi9WFPr6xs4jGCrcA%2FIVCnNDxjlsUi2MwEtBj4lSeeXgrwzPzzgt8e%2FSACmDhlYnNe9dsmL4vT3vTmqwTwlwyj%2BsZencwla5AGhBx9Rh4JasUZstlSC%2BtzE9GHhTk9I4Ttjrru4qW6Ff03Si%2BTbONbQ4M2foea%2BDbky8vsC7qs4ysu7fJkukc0UO7e122m1%2BqqAIexLGmcWc00tThg0zLYgqbYIKjzWad%2FpWHxvG7sBbS%2BfuDTqDxpH2mRcV7DewTb6fwpawRr5MNQrTDSAnEkTGOLOLpYZwbTXNyfkxzBFk2Uz4TNdAiID%2Bw3u6OT%2B1mqwNKYCmysVAHXXMz2DNjyxaWh0K3%2F0hZDTbqwUx5OE6BGq6xY%2F8WqwawJ8iOwqE8V5Gdw25%2F7DObFE4VY%2FK954SjJVuNEwfvwwawfC5aAL%2FnTmV8jEZbJL%2BrWjyoadov4%2B%2Br7pxr30w5ZK64m9WYns62legMg2WrsOrz6H9lvGnhl9xG94reihpGYZqjkYTnQJiO8WdvUPt7skdrwLpu%2Bihgj5YxgKW97ZebHKEZGaOydmtmf3s6CqtODsC%2BKWUbfKyp5PJ7I6pxeoXovHAFhR5KAXdRJ1i1lqpJN64rcyRwgXRjgk1MiJQBaE7WKmovKjivII3TQJtMIrS8LwGOqUBUTOoAr3IVmu8yNdtbvsMvCf6lVezATOKqmIGtaHm29P2oXv88PEN49LNZkhHqieN027N0Iw7YyB3K7a9cy66Dd0gQ0bUFqOMrltd4TRTawjQOnVL8HLlRdZ7q%2BQuSAQr6dpfZSN9L0JoSlyNKgRnDOkwJxnKnf2dHnd%2FsxfKB03%2Fm%2BHxDb4NaYPT0HY%2BK4bSZ%2BJMmhDQ2b0m19MdqvBDRM4zNRAE&X-Amz-Signature=71d9f20b403f3e4e6489d5e67b2226173e236bb288d282f73a2da92d088dd5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LLXJGE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaw8v%2FLbLUuRnTOqzMNnTLoDTZ%2FgFlKrhxLedP0Qk4yAiEA3vyMxs%2F2UVcfRgjzQWRTV9BFPenZs1UbTUSbgB0iEWUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZDi9WFPr6xs4jGCrcA%2FIVCnNDxjlsUi2MwEtBj4lSeeXgrwzPzzgt8e%2FSACmDhlYnNe9dsmL4vT3vTmqwTwlwyj%2BsZencwla5AGhBx9Rh4JasUZstlSC%2BtzE9GHhTk9I4Ttjrru4qW6Ff03Si%2BTbONbQ4M2foea%2BDbky8vsC7qs4ysu7fJkukc0UO7e122m1%2BqqAIexLGmcWc00tThg0zLYgqbYIKjzWad%2FpWHxvG7sBbS%2BfuDTqDxpH2mRcV7DewTb6fwpawRr5MNQrTDSAnEkTGOLOLpYZwbTXNyfkxzBFk2Uz4TNdAiID%2Bw3u6OT%2B1mqwNKYCmysVAHXXMz2DNjyxaWh0K3%2F0hZDTbqwUx5OE6BGq6xY%2F8WqwawJ8iOwqE8V5Gdw25%2F7DObFE4VY%2FK954SjJVuNEwfvwwawfC5aAL%2FnTmV8jEZbJL%2BrWjyoadov4%2B%2Br7pxr30w5ZK64m9WYns62legMg2WrsOrz6H9lvGnhl9xG94reihpGYZqjkYTnQJiO8WdvUPt7skdrwLpu%2Bihgj5YxgKW97ZebHKEZGaOydmtmf3s6CqtODsC%2BKWUbfKyp5PJ7I6pxeoXovHAFhR5KAXdRJ1i1lqpJN64rcyRwgXRjgk1MiJQBaE7WKmovKjivII3TQJtMIrS8LwGOqUBUTOoAr3IVmu8yNdtbvsMvCf6lVezATOKqmIGtaHm29P2oXv88PEN49LNZkhHqieN027N0Iw7YyB3K7a9cy66Dd0gQ0bUFqOMrltd4TRTawjQOnVL8HLlRdZ7q%2BQuSAQr6dpfZSN9L0JoSlyNKgRnDOkwJxnKnf2dHnd%2FsxfKB03%2Fm%2BHxDb4NaYPT0HY%2BK4bSZ%2BJMmhDQ2b0m19MdqvBDRM4zNRAE&X-Amz-Signature=3acbd1466355824dca2ea89cd103c3641cbdaa80ec6f96012d175a47323d42bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
