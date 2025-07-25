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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXP4FD56%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIG77Bt4Kdi94%2FCmCYa1%2FzA0VgxEdLejZpGT70SWig1IYAiEA4Cv%2FadZb9bjiA4xdr9jdBbKOwVM8B3xfhONthwy3tsUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM1oq0Qkqz8m0mJPhyrcAyd0YUj1DUJIenePzM1GqJGJF9sBYP82zTx7loaHpu1ym6tia6UywSKOzGeczi3fg1uL2Dwb8vhSs447wi97y8tNZ9CIkHjemivlCCagJPj34o0eGjp%2FYdl9JFuU2VhMbpff9uPDiOu0cx7stY5ZQC%2FMxOC9M4OxQxWn0ZDqV3NpEUNqGwKkHpNZjv50S0tchE0gJoywUbXPB2bGh0X%2F%2Bv9z34z%2B67qgMFvMevDXJq9FvPBqe15LzftNusFaJkQ02IfafLePeqIirBJPn6euhMry3gkfNjSWrKoD7fcFHxNQm0wKOYUgq7MG%2B1uWDjaCDacsQA%2FNn2xB2Lj1x6XQcqckiXYSz1s7cPhSXQraeg0DQKeiI8GbWOnBmj7IUSTkePVK2KTs28zEj3lUd5wU1PsW8hNqG2znvjuxhV%2FTeEwA9iFe2jJxn3kHg1v7zK0AXMoXOK6v5Gvt9mHxD9OHJ1faNATl5jIl1tHSyGoaIvAk7KUOwopouPaZ8ipSad7CVE4q53NV9GZ7xsUHsTYzRzB7GwprOVFv42XlXeCxTTRK3QLpDl9nVcxMXo7IV7vTQhhuqq3d5AumMu%2B1mSfD3jb78McNPzeoCrDT5r0Khw22r9ZOsbH8GDbeFXczMNa8jcQGOqUBnl7oLs2FJYYvlGhi2TW%2BCJCBX8hVUY%2BFTfYaUEcufTXJyckK%2BoOY6eccw3zlwT%2F2akzejxunB1naeTN8ldHG%2FptFGEo1Xv0w5EuKgbr2vLrNedc9mdrmZwhgn3K4h4Gb%2FvwZJKOzVoAJz7rM9ebUOoCU8H7JiRQE59tHBGStpUETihyXO0lf5QH1V%2BL7j36z3Ah9nfOO9soMt3WEK1hVoBIMm0uO&X-Amz-Signature=da9c824c6e5c5268ffbdbad6ad044af51e5ebc9a43b25987ebe106d1855ceafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXP4FD56%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIG77Bt4Kdi94%2FCmCYa1%2FzA0VgxEdLejZpGT70SWig1IYAiEA4Cv%2FadZb9bjiA4xdr9jdBbKOwVM8B3xfhONthwy3tsUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM1oq0Qkqz8m0mJPhyrcAyd0YUj1DUJIenePzM1GqJGJF9sBYP82zTx7loaHpu1ym6tia6UywSKOzGeczi3fg1uL2Dwb8vhSs447wi97y8tNZ9CIkHjemivlCCagJPj34o0eGjp%2FYdl9JFuU2VhMbpff9uPDiOu0cx7stY5ZQC%2FMxOC9M4OxQxWn0ZDqV3NpEUNqGwKkHpNZjv50S0tchE0gJoywUbXPB2bGh0X%2F%2Bv9z34z%2B67qgMFvMevDXJq9FvPBqe15LzftNusFaJkQ02IfafLePeqIirBJPn6euhMry3gkfNjSWrKoD7fcFHxNQm0wKOYUgq7MG%2B1uWDjaCDacsQA%2FNn2xB2Lj1x6XQcqckiXYSz1s7cPhSXQraeg0DQKeiI8GbWOnBmj7IUSTkePVK2KTs28zEj3lUd5wU1PsW8hNqG2znvjuxhV%2FTeEwA9iFe2jJxn3kHg1v7zK0AXMoXOK6v5Gvt9mHxD9OHJ1faNATl5jIl1tHSyGoaIvAk7KUOwopouPaZ8ipSad7CVE4q53NV9GZ7xsUHsTYzRzB7GwprOVFv42XlXeCxTTRK3QLpDl9nVcxMXo7IV7vTQhhuqq3d5AumMu%2B1mSfD3jb78McNPzeoCrDT5r0Khw22r9ZOsbH8GDbeFXczMNa8jcQGOqUBnl7oLs2FJYYvlGhi2TW%2BCJCBX8hVUY%2BFTfYaUEcufTXJyckK%2BoOY6eccw3zlwT%2F2akzejxunB1naeTN8ldHG%2FptFGEo1Xv0w5EuKgbr2vLrNedc9mdrmZwhgn3K4h4Gb%2FvwZJKOzVoAJz7rM9ebUOoCU8H7JiRQE59tHBGStpUETihyXO0lf5QH1V%2BL7j36z3Ah9nfOO9soMt3WEK1hVoBIMm0uO&X-Amz-Signature=1a362525caf42e65bd2ff97441790152322cb83c517d5076b2a652ffd8a06bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
