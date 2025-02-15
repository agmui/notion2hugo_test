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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7G6J6Q%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA%2Fz83AnKF62lNPvJZzkgmIwLbchOjoJWOop7hw9DQb9AiEArBKbx9XK05loEG%2BO%2FvByeP2dmkzH%2FkOKbXBdW%2FTTaOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEHbnE103msYAgYYlyrcAxf5hUFc3La68tGMI8X0uIFwecz7iFlxpldTgab0TMQIzC8s6u8XlwRzSnHJZOpISvuEOT4EGHleTtMKXQ5tCsZiaIpCZoQE2nFaNBTEvToiORJ30vD7DFmpRSohQhp3X3tSjVA%2Bmo%2BKuR5C%2BL73M%2Bs%2BqJusDl8WtNMiNnqrFapdwjNifyooHRzUnjDn%2Fks8dm6Wygo9J0oyf%2FN%2B260GLK5KmdWmXodVCQHBA8tuJM5ABmXKFuyl0uilI1P%2BGZahXQzNb8ZHEuPDxPi6qI26JDgpbbfsHX0025cRvBipY70qSSlcr%2BQ87CRSgWkCDaU9xPbXBW1uq76ofqkBidLnsgoowHCgZqIBq31KINDK8RBMZ34xb%2FiqRf2WAEdokghc7C5LhiCvsgkph7NmZeZmXstVGY32EE%2FLgif8riAs24ajad5oj7%2FzeTsSRO2s8ADDRWGEuF8p26m5KFPwXZLEuxu%2FW1keZXjvprh2ld88X%2BKCWna2FDq%2FW6TqFJFngXwI%2BUeHAX5%2BJ8NgZfcIXt%2Fszxyq6X6xwbbtywRGq%2FV3bDhLtkFyyQA8OL04UjGvB%2BqZj9blYaAvot7ikBOlS9TJoNoRvBzPJL5I3p3vVDZkvUJo3lQGESQgJso5DTsoMM31w70GOqUBvjsGdL0Hzlk%2FmC4hmYPXNAEQdaTqLbxeyBrkbt8T44iSduWU1KTHFDOCyYr2xtHlmXRWLUKO1MRfFIK2ETnDy1WqxfSF16HfeG6Xgt3RhWuw4Xk1kX0gIcrP74rIEZ0CGmhPvtDKFt4edij5dT27GQJFCM5QQUjGyRn2htZq0NYM%2BahaM6U2Ar3J%2B4F%2FOJ3P9QwC%2FoeywY1DWzWa%2BrIdAWOJSJYC&X-Amz-Signature=c8e9c2d2585dfa9d480d12ac680280f46677b49c88c9579500aec2161ce71cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7G6J6Q%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIA%2Fz83AnKF62lNPvJZzkgmIwLbchOjoJWOop7hw9DQb9AiEArBKbx9XK05loEG%2BO%2FvByeP2dmkzH%2FkOKbXBdW%2FTTaOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEHbnE103msYAgYYlyrcAxf5hUFc3La68tGMI8X0uIFwecz7iFlxpldTgab0TMQIzC8s6u8XlwRzSnHJZOpISvuEOT4EGHleTtMKXQ5tCsZiaIpCZoQE2nFaNBTEvToiORJ30vD7DFmpRSohQhp3X3tSjVA%2Bmo%2BKuR5C%2BL73M%2Bs%2BqJusDl8WtNMiNnqrFapdwjNifyooHRzUnjDn%2Fks8dm6Wygo9J0oyf%2FN%2B260GLK5KmdWmXodVCQHBA8tuJM5ABmXKFuyl0uilI1P%2BGZahXQzNb8ZHEuPDxPi6qI26JDgpbbfsHX0025cRvBipY70qSSlcr%2BQ87CRSgWkCDaU9xPbXBW1uq76ofqkBidLnsgoowHCgZqIBq31KINDK8RBMZ34xb%2FiqRf2WAEdokghc7C5LhiCvsgkph7NmZeZmXstVGY32EE%2FLgif8riAs24ajad5oj7%2FzeTsSRO2s8ADDRWGEuF8p26m5KFPwXZLEuxu%2FW1keZXjvprh2ld88X%2BKCWna2FDq%2FW6TqFJFngXwI%2BUeHAX5%2BJ8NgZfcIXt%2Fszxyq6X6xwbbtywRGq%2FV3bDhLtkFyyQA8OL04UjGvB%2BqZj9blYaAvot7ikBOlS9TJoNoRvBzPJL5I3p3vVDZkvUJo3lQGESQgJso5DTsoMM31w70GOqUBvjsGdL0Hzlk%2FmC4hmYPXNAEQdaTqLbxeyBrkbt8T44iSduWU1KTHFDOCyYr2xtHlmXRWLUKO1MRfFIK2ETnDy1WqxfSF16HfeG6Xgt3RhWuw4Xk1kX0gIcrP74rIEZ0CGmhPvtDKFt4edij5dT27GQJFCM5QQUjGyRn2htZq0NYM%2BahaM6U2Ar3J%2B4F%2FOJ3P9QwC%2FoeywY1DWzWa%2BrIdAWOJSJYC&X-Amz-Signature=d31bfd4c47fc79086f28a4f9e1c904a62a57d43112f1bc0a130660fa9a207f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
