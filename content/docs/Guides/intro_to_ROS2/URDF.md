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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTJQN4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeaW95wAAX7Y71sfNZUdGrY2P%2Bo7sa6xF%2B6Lm5rHTqbQIhAMNrdJ06xZqDX3N59z5xRmGHRiVihlYehOL9WFFxsDy3Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzDELaAloYxQKZPqygq3APk93zOASThKjhPXjurLeaWyLpDUdLD1Eqs4kmm%2FvNiq8zZglfWtopGAzellSHbq0xFlvjkRNkmL3AB2m6OX8b7jZlMtuxDd1%2Ft3tb5mVnV8Ht8OWA1TdasiVoJk6ZRfuEpoqHZkgBGrNkFSwRz1mUOlRLT5RlLd75OsbP%2BboKvzdQDPV1ELk5wIn0qfOY%2B%2F92ewIFzF%2Bcn5h42dh%2FC4KbqrIqg9vTbbYf6p7wRgbYq%2FtVRHVMoh97jDx1uXeWcMXEbia09OJCjpRmUpZ9ApksMElZQBbRXcU1QzTocwegQk3tCYmvwnOaI8VIzEJ3Dv%2FXGcHi4touhR27TvbSa866Rc2ILbBX5Oy3Smid7jX8FBpL%2B4txBnlJUE9vNbu%2FKFlPI92wBczrwrhm4xRRFCw4Qyil%2BXqal1xu58m7%2FVPzV1TrlrDklbCgnJi0NuHUL0StzisxUq%2F9CkASuL1jIMXw%2FuBn4S1T4xPSVdVafr%2FpBVcYS%2B%2FMj%2BsiB995gN%2B2NkPT4X606mfw5xWqW83tzbz0ozW4ggGjXKDTp5lWORGZDzhj1Uvk5YP7NbTu6pZRZXDrZeLUnUXSkTp9JM4Ji4SWBggyQyEUKwNJMXyljTA7Bex7sBwYXO2exlFc9%2FjDyvbPCBjqkAcaEwYStVZ99ApjlXUt1q%2BGqMPa2hBOVfnzCfAYcrnzb2hL6AIZbYPxYJC%2B33usKw2T6Elp56VWF7DnQaDQ81Ip%2BDjqsYqBY5XAdkpVvSXBDKtk53ny4FaaiGvUs6ZBrc2Xo%2Fs0D%2FTxR6AW8rgqLe1Hpd7ePclgUpKFcyV%2BjuKXfPpg2GLHLxEM4HglEy7m3QVP%2Fky%2FDr10Sl5%2BZSjWRFW4mwXJj&X-Amz-Signature=019b2e9b4dcbb99c5a66f1b600889919051bcfc396639acc644e69517e96d4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LTJQN4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeaW95wAAX7Y71sfNZUdGrY2P%2Bo7sa6xF%2B6Lm5rHTqbQIhAMNrdJ06xZqDX3N59z5xRmGHRiVihlYehOL9WFFxsDy3Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzDELaAloYxQKZPqygq3APk93zOASThKjhPXjurLeaWyLpDUdLD1Eqs4kmm%2FvNiq8zZglfWtopGAzellSHbq0xFlvjkRNkmL3AB2m6OX8b7jZlMtuxDd1%2Ft3tb5mVnV8Ht8OWA1TdasiVoJk6ZRfuEpoqHZkgBGrNkFSwRz1mUOlRLT5RlLd75OsbP%2BboKvzdQDPV1ELk5wIn0qfOY%2B%2F92ewIFzF%2Bcn5h42dh%2FC4KbqrIqg9vTbbYf6p7wRgbYq%2FtVRHVMoh97jDx1uXeWcMXEbia09OJCjpRmUpZ9ApksMElZQBbRXcU1QzTocwegQk3tCYmvwnOaI8VIzEJ3Dv%2FXGcHi4touhR27TvbSa866Rc2ILbBX5Oy3Smid7jX8FBpL%2B4txBnlJUE9vNbu%2FKFlPI92wBczrwrhm4xRRFCw4Qyil%2BXqal1xu58m7%2FVPzV1TrlrDklbCgnJi0NuHUL0StzisxUq%2F9CkASuL1jIMXw%2FuBn4S1T4xPSVdVafr%2FpBVcYS%2B%2FMj%2BsiB995gN%2B2NkPT4X606mfw5xWqW83tzbz0ozW4ggGjXKDTp5lWORGZDzhj1Uvk5YP7NbTu6pZRZXDrZeLUnUXSkTp9JM4Ji4SWBggyQyEUKwNJMXyljTA7Bex7sBwYXO2exlFc9%2FjDyvbPCBjqkAcaEwYStVZ99ApjlXUt1q%2BGqMPa2hBOVfnzCfAYcrnzb2hL6AIZbYPxYJC%2B33usKw2T6Elp56VWF7DnQaDQ81Ip%2BDjqsYqBY5XAdkpVvSXBDKtk53ny4FaaiGvUs6ZBrc2Xo%2Fs0D%2FTxR6AW8rgqLe1Hpd7ePclgUpKFcyV%2BjuKXfPpg2GLHLxEM4HglEy7m3QVP%2Fky%2FDr10Sl5%2BZSjWRFW4mwXJj&X-Amz-Signature=3bf8bc4a559494c5079c70ab05473f8618ff62540ef1d8ecec3d94f19d8254ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
