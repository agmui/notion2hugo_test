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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBUMCHE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDOqB1%2Bwao440BFXk%2BFRFW1tk7oDalW1Q%2BrHR5ntDkhxgIhANLjj3rbaKr%2F8qZuzq93lBJ8C3kiuxdyWhKq%2Bh8uPUMUKv8DCFcQABoMNjM3NDIzMTgzODA1IgxiponUrGhg4mx%2B1N4q3AO3rk3TFDOWiSPfKtSURt9OIYAGr3hyY04JCvHH2LvWI5Atvip8mE39bbqbmNHMpDmHXSSXMjxpTK7M0604PO5Opozwf7BOAHvpZzd6B%2Fnp01gDyrBo3gJnlyIVyKVkOndduWAThBfQ2WkhxHfiEhWlyvUsizptrdPst0kjD4yBFGPk694DaVq4jJK7LLTalKztrF1zK1FRYTwNnCQ9QVKc3NIov36F%2FyjME0ZfE%2BjSQa3Qki3VftL6Prm%2F9krUOBVSWZJcXHv%2BKVUXmJxxlCXtGs7cIuFE8Yzi2RsjPoSa43egHdsaIagKKekOdpVBl%2BnGQW0ErZmvunsBSZ9smrWnYmzuZOz9ZZurRLBHNgN1%2BQ8B6IRQfHVh7cx2KiK7DB653UDVHvacqGGNOmdBL20SiAONxHt6Vt9J7IV9TcF8YI%2FdNGV91Pvpb5aaFo8TgFuS0%2FyfXM5T6W5qiA3IhrY1QDEj4%2BsdBHRRi%2F0Zb38q9AvnM6YPSABemTh9QHj78taDhDyPvMnOvXmPUXVqlyxLrJZVduVHNkZIBQg8GdaPyCihkdaLL0q6z4cCjzo7n7pT8plRM87vAJI%2BXXAYtTL9eYLPbegq8KKEFPzSc6O%2FlfdwximrdB3di6T0qTDwiorCBjqkATfTayS%2B3ceORqeUkMDuDLwIylS2R%2Fa%2Bpp0kdgMI7%2BXyCt68UiffJo6m1NKqP%2FrGVW5SvSkfE6dy6a%2FQZNTe%2Buuj55S%2FP%2Fg%2FRtj70gcS7yz1ZtcYqUaN%2FgdbTIWY5euqHGXYBRauA3J6FD4gjyupli%2FAWBoIyxr7wn4EGlKmJ%2FuxCxy8tKb3hT3Df2kUEajg4Gs%2BUslKy3dG%2B8te9TGPu1jkGzof&X-Amz-Signature=51365b273eb6663ebe6c032c5838b9b6ec92ab3a16c6884600c76c4239dabf69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBUMCHE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDOqB1%2Bwao440BFXk%2BFRFW1tk7oDalW1Q%2BrHR5ntDkhxgIhANLjj3rbaKr%2F8qZuzq93lBJ8C3kiuxdyWhKq%2Bh8uPUMUKv8DCFcQABoMNjM3NDIzMTgzODA1IgxiponUrGhg4mx%2B1N4q3AO3rk3TFDOWiSPfKtSURt9OIYAGr3hyY04JCvHH2LvWI5Atvip8mE39bbqbmNHMpDmHXSSXMjxpTK7M0604PO5Opozwf7BOAHvpZzd6B%2Fnp01gDyrBo3gJnlyIVyKVkOndduWAThBfQ2WkhxHfiEhWlyvUsizptrdPst0kjD4yBFGPk694DaVq4jJK7LLTalKztrF1zK1FRYTwNnCQ9QVKc3NIov36F%2FyjME0ZfE%2BjSQa3Qki3VftL6Prm%2F9krUOBVSWZJcXHv%2BKVUXmJxxlCXtGs7cIuFE8Yzi2RsjPoSa43egHdsaIagKKekOdpVBl%2BnGQW0ErZmvunsBSZ9smrWnYmzuZOz9ZZurRLBHNgN1%2BQ8B6IRQfHVh7cx2KiK7DB653UDVHvacqGGNOmdBL20SiAONxHt6Vt9J7IV9TcF8YI%2FdNGV91Pvpb5aaFo8TgFuS0%2FyfXM5T6W5qiA3IhrY1QDEj4%2BsdBHRRi%2F0Zb38q9AvnM6YPSABemTh9QHj78taDhDyPvMnOvXmPUXVqlyxLrJZVduVHNkZIBQg8GdaPyCihkdaLL0q6z4cCjzo7n7pT8plRM87vAJI%2BXXAYtTL9eYLPbegq8KKEFPzSc6O%2FlfdwximrdB3di6T0qTDwiorCBjqkATfTayS%2B3ceORqeUkMDuDLwIylS2R%2Fa%2Bpp0kdgMI7%2BXyCt68UiffJo6m1NKqP%2FrGVW5SvSkfE6dy6a%2FQZNTe%2Buuj55S%2FP%2Fg%2FRtj70gcS7yz1ZtcYqUaN%2FgdbTIWY5euqHGXYBRauA3J6FD4gjyupli%2FAWBoIyxr7wn4EGlKmJ%2FuxCxy8tKb3hT3Df2kUEajg4Gs%2BUslKy3dG%2B8te9TGPu1jkGzof&X-Amz-Signature=3761bc4c056be49bfebf00b532950dbe64e3419e8fbb02f2bef7343e684653d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
