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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG77AJQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyiT1cJRH2ifPSLj5yXiWMHZDxNUVj1t0ZoicVsWWZwIhALkwfkz8eJN9XCJXEu49Q7MFE3N87uqmzL5CWR1N7YgGKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxgf7spvD0dDRioLsq3APZzk5bjWIcEKvZljQbg9PrGbyCWTKsRa92DPu%2B%2F9CCdBzp%2FXtt1bp8AnaCVSMw5nUmTm9b18vvSqmFDe7DOltlmBxoA43ytPKs4zwyJMp7jbSKIj30aTKiHuZaF0nHVk28mpwadODraBUII51m%2FUGxp69%2Bi5DSyeUqqm%2Fkjx1cBTol%2BuThLiXfjYX9wChFLCFKlejrmEsopcGGtJXnyib9YIDohe52fkSwjZ3Qimjxm9QYa%2BXyDYuKUcv8UnhEEAz3jWfpkSrbEs%2FKbEnks%2B4wnlnZJ6WDn6G4XGCEbLcNhXQy1Zhlvd4YZbbRjK%2F9oTqlsYT6Bumy7%2BHdOtshxjydyIN1Czhk5e%2BDuZuq4xFHvsotHdy44QAuCYS9sAT8pebwQngnADas1kbEu%2BpDeStdRlfVGWjJlVvlVAE9lJPCYo%2BvrWmzVZw64p1LtlsIlgZL40HU6rCozEeGEjYbWEpSp4cPl750iEFfqDskPquX8K%2BmphgEFTLmYeAjsjy2psAu%2BQGUh6jk3RJ34VdV2%2BMAS%2FRjYEFOT16iLAD3A8nV59GOwDrLMhtXevLF%2FfKRMmO1fqI%2Bos7EVqFN%2FoCMYc4BwGr6fY7huZT3bkGrsp%2B6cIWRfroV8Z3qWm8iczCo5v68BjqkAceo1HbRtEoWDBZn6h%2FQsruVpDJdLPNEpPYO22UVP2QzW8%2FB3ZSwR2xxv5aNl5CBZWtWD0Dbw56u%2BickmGV6%2FELvKDZdEK3dRHEuc64EL7kGtILWgTNRfdiwsbSwI%2BLWwOG7%2FhMr%2BuJiuu2JOZ3F3zIbVkHfdrA2kn%2BhrQevZ2t0tZwwhu7Z0QkmzYiSZUUxUnPipF4iYDzjEiIy7DTTm9%2Faikmh&X-Amz-Signature=8ff8bc6b6bd82be4c715a35110f8169481fcb257c20a5f81ef05f6dcbd69748a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG77AJQ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGyiT1cJRH2ifPSLj5yXiWMHZDxNUVj1t0ZoicVsWWZwIhALkwfkz8eJN9XCJXEu49Q7MFE3N87uqmzL5CWR1N7YgGKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxgf7spvD0dDRioLsq3APZzk5bjWIcEKvZljQbg9PrGbyCWTKsRa92DPu%2B%2F9CCdBzp%2FXtt1bp8AnaCVSMw5nUmTm9b18vvSqmFDe7DOltlmBxoA43ytPKs4zwyJMp7jbSKIj30aTKiHuZaF0nHVk28mpwadODraBUII51m%2FUGxp69%2Bi5DSyeUqqm%2Fkjx1cBTol%2BuThLiXfjYX9wChFLCFKlejrmEsopcGGtJXnyib9YIDohe52fkSwjZ3Qimjxm9QYa%2BXyDYuKUcv8UnhEEAz3jWfpkSrbEs%2FKbEnks%2B4wnlnZJ6WDn6G4XGCEbLcNhXQy1Zhlvd4YZbbRjK%2F9oTqlsYT6Bumy7%2BHdOtshxjydyIN1Czhk5e%2BDuZuq4xFHvsotHdy44QAuCYS9sAT8pebwQngnADas1kbEu%2BpDeStdRlfVGWjJlVvlVAE9lJPCYo%2BvrWmzVZw64p1LtlsIlgZL40HU6rCozEeGEjYbWEpSp4cPl750iEFfqDskPquX8K%2BmphgEFTLmYeAjsjy2psAu%2BQGUh6jk3RJ34VdV2%2BMAS%2FRjYEFOT16iLAD3A8nV59GOwDrLMhtXevLF%2FfKRMmO1fqI%2Bos7EVqFN%2FoCMYc4BwGr6fY7huZT3bkGrsp%2B6cIWRfroV8Z3qWm8iczCo5v68BjqkAceo1HbRtEoWDBZn6h%2FQsruVpDJdLPNEpPYO22UVP2QzW8%2FB3ZSwR2xxv5aNl5CBZWtWD0Dbw56u%2BickmGV6%2FELvKDZdEK3dRHEuc64EL7kGtILWgTNRfdiwsbSwI%2BLWwOG7%2FhMr%2BuJiuu2JOZ3F3zIbVkHfdrA2kn%2BhrQevZ2t0tZwwhu7Z0QkmzYiSZUUxUnPipF4iYDzjEiIy7DTTm9%2Faikmh&X-Amz-Signature=b25f25e5c85017f52a1616cf7d15642cd966c9a310c90ae107d4f78f24bed447&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
