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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKS7R7Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHZtTXst2mQzqBMLLGEHEmkKdw4TF6QYfQO%2FxeK9Nf4QIgIzs4YABf7Co693NHctXV35B%2F3Z5sNBIo2xSQnMgogAYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGr1IvIVtZYp4x18yrcA0aHpTJIY%2FFyrUy0K8BrXxsf3NwayZRfb3NVtwC4C2IU%2FCOST9SeKv487MqP235o7IvStkG1BFuJ3fGRcpZ44YT3hpb%2Btpzv5FswfS9nAYZgYatGpvmWsfrrzkQe209h5bvr%2BS82glnV8T9SBrQpvUcF0B71IseTkOKpMeC0TINfiB%2FWbA7TBUEssLtva%2BIc6LXXCfnpxqu%2FsfARUcqSxd3nRdtohu%2BP%2FuNz%2BzMBCVzLuYfgEjjlsxncxyx5idlb6c92pqbnfsO1ulp2FrhfMcDv7G25IOwkaxifwoWDIBjGwZ%2B%2FY6TCRAJPBQ85l1n0wrvQNvhOk95kWh%2BHbD4xQnzKxNSWJrqfRDUbcDQ50%2FMfLFhJJefvisvw1Y5d3Xli9zQ4JjYVAZP%2BSl7nAXNXgD4AnSSigTWEV1k2XMrJTHWoxdIoIxA6G8IJnKGgj3nsG1h6mQCCs%2FICMqG%2FI%2FY84MPPAhtUMCuX8%2Fsc2Qi6nJyvoYAUY1gboGNv00Ln%2F5MZBPRZRfZeh3AA9d4xmOR4t7fDKvLn1TvNj0wR5ArS5JBC99lEsS5v%2BZN77tqaeS148QTbUC%2Fi2V000wdL6SgcEiqun9PfHZD6qesbSFDWkf5MNecP5PMwkBcyWuvCMPWUqL8GOqUBCikdKOUOCpM7ULif8zbctlX6eEpD1zVkK6yLqKIPtPprbSL84oilmbXvTa3GZ0ofkedjCWVFMOQnoyrZW6DKtI5SlKOCXkuKwyZ2y4xBiLe0tMtAKCpFd%2FonVwm64DyqQdqwo9JzTwjxeZtlrETHPfCffG83fzGuFNuAw%2FBPP5yRCBPPkAYGtcz8t2xZ2lBDBvS%2FNilWPdqn0DDQE7MzZOUGUWmw&X-Amz-Signature=c98c24c7a428d93b2eb7770e4037d5e9a18d6354d28ce08fa69c4880767fe421&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKS7R7Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDHZtTXst2mQzqBMLLGEHEmkKdw4TF6QYfQO%2FxeK9Nf4QIgIzs4YABf7Co693NHctXV35B%2F3Z5sNBIo2xSQnMgogAYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGr1IvIVtZYp4x18yrcA0aHpTJIY%2FFyrUy0K8BrXxsf3NwayZRfb3NVtwC4C2IU%2FCOST9SeKv487MqP235o7IvStkG1BFuJ3fGRcpZ44YT3hpb%2Btpzv5FswfS9nAYZgYatGpvmWsfrrzkQe209h5bvr%2BS82glnV8T9SBrQpvUcF0B71IseTkOKpMeC0TINfiB%2FWbA7TBUEssLtva%2BIc6LXXCfnpxqu%2FsfARUcqSxd3nRdtohu%2BP%2FuNz%2BzMBCVzLuYfgEjjlsxncxyx5idlb6c92pqbnfsO1ulp2FrhfMcDv7G25IOwkaxifwoWDIBjGwZ%2B%2FY6TCRAJPBQ85l1n0wrvQNvhOk95kWh%2BHbD4xQnzKxNSWJrqfRDUbcDQ50%2FMfLFhJJefvisvw1Y5d3Xli9zQ4JjYVAZP%2BSl7nAXNXgD4AnSSigTWEV1k2XMrJTHWoxdIoIxA6G8IJnKGgj3nsG1h6mQCCs%2FICMqG%2FI%2FY84MPPAhtUMCuX8%2Fsc2Qi6nJyvoYAUY1gboGNv00Ln%2F5MZBPRZRfZeh3AA9d4xmOR4t7fDKvLn1TvNj0wR5ArS5JBC99lEsS5v%2BZN77tqaeS148QTbUC%2Fi2V000wdL6SgcEiqun9PfHZD6qesbSFDWkf5MNecP5PMwkBcyWuvCMPWUqL8GOqUBCikdKOUOCpM7ULif8zbctlX6eEpD1zVkK6yLqKIPtPprbSL84oilmbXvTa3GZ0ofkedjCWVFMOQnoyrZW6DKtI5SlKOCXkuKwyZ2y4xBiLe0tMtAKCpFd%2FonVwm64DyqQdqwo9JzTwjxeZtlrETHPfCffG83fzGuFNuAw%2FBPP5yRCBPPkAYGtcz8t2xZ2lBDBvS%2FNilWPdqn0DDQE7MzZOUGUWmw&X-Amz-Signature=7eec49b09e27148bb9c2035428f746087f648071a903f10c4b060c0a085a0e76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
