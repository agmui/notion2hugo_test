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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUFTEAL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4PGahq8PAIPVXetQX9vlFYCFeR5XXMuaH7k%2FbY7JrXAIgBVzaV8QRl7Np7%2FMqF2fhltKmAoYpmjGjVcvYLO6ScOkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOgolZvIa5jXYNYTyrcA6AcXQ4ARczSKkZOSpkCm2oAJsI57E%2BaytfKGtreEXXkJRZ5vJA%2FPvZCC3Ydauwrbbdh9B5QC12HpgowUae5lPBXHMIh%2ByiIJGIswQk6l5C63QQDPStGirHEcKDgY3mfjkdYbAxnzBvK8vGk3wRVd6DN8q%2BBIaUn1gO4%2F1kARfKbVNZ%2B8gA0MKKDM1BAHx1IQu%2Fc0snoCyVKofKxT1DzWmLwiba2yD0NLjtkDJ5K4lICVxS2GsbUXz7teL82FACRMrC%2BdJSImzFvyD7%2BBaLrR%2BRYNr%2Fc5YEgG1SGd9OHXDw4N%2BJlVGN56Nf%2FYE3IOPGzqutMedPm3dXr2IWJfzpUq0dilcewMxKG93b9%2F27Nu3GSo%2FxfQSaHDsNemMecZrtysGFCvbbZJ1k%2Bjip5XAk2chTNvoc%2BiB816GbbwEbXLXg1bE0rWIshDpKqIXGbdR1IBpmQvWpvkAD79HR8JQ9pkkOXopIwDmShaWFVazXIamKVdWkkZpEKP1HvAeejgYlbUFoGiev6XZi8U%2Bf1%2F1Wur8EzUKuV54GC5ViqlwHSrywh8wIpEDwe7Tv0ZEEMQEBUknLO67LcrVLGVP%2BP18o2yAq6LwM3GFkoHWIFGbJB6ZDEpaFFnwLCnL6Al1WzMLG08sMGOqUB%2BWoLujVUsCaaIrFEUMf83TnMdqJbLekDZr7DRQMoFnHu4JcsAK%2F9qA2Cld39gFc17yX60IMOuFVLZxIZEnqwmQqsnvXqqvECeBDFQKMuXIiOCJRUB3PVRcXc%2FCAkv5vK9YlgksHWEKmudIAbElGxszKy9LgxtfBvzaq4J5DSnic6whiN7ReaDfKH4Q3laVkJrpTwz8eTlzgKThDkdDT30zV%2FWBGg&X-Amz-Signature=da696012ede145a60783681d89dd03203ea8b8988f35941f5fc4239084428038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IUFTEAL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4PGahq8PAIPVXetQX9vlFYCFeR5XXMuaH7k%2FbY7JrXAIgBVzaV8QRl7Np7%2FMqF2fhltKmAoYpmjGjVcvYLO6ScOkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOgolZvIa5jXYNYTyrcA6AcXQ4ARczSKkZOSpkCm2oAJsI57E%2BaytfKGtreEXXkJRZ5vJA%2FPvZCC3Ydauwrbbdh9B5QC12HpgowUae5lPBXHMIh%2ByiIJGIswQk6l5C63QQDPStGirHEcKDgY3mfjkdYbAxnzBvK8vGk3wRVd6DN8q%2BBIaUn1gO4%2F1kARfKbVNZ%2B8gA0MKKDM1BAHx1IQu%2Fc0snoCyVKofKxT1DzWmLwiba2yD0NLjtkDJ5K4lICVxS2GsbUXz7teL82FACRMrC%2BdJSImzFvyD7%2BBaLrR%2BRYNr%2Fc5YEgG1SGd9OHXDw4N%2BJlVGN56Nf%2FYE3IOPGzqutMedPm3dXr2IWJfzpUq0dilcewMxKG93b9%2F27Nu3GSo%2FxfQSaHDsNemMecZrtysGFCvbbZJ1k%2Bjip5XAk2chTNvoc%2BiB816GbbwEbXLXg1bE0rWIshDpKqIXGbdR1IBpmQvWpvkAD79HR8JQ9pkkOXopIwDmShaWFVazXIamKVdWkkZpEKP1HvAeejgYlbUFoGiev6XZi8U%2Bf1%2F1Wur8EzUKuV54GC5ViqlwHSrywh8wIpEDwe7Tv0ZEEMQEBUknLO67LcrVLGVP%2BP18o2yAq6LwM3GFkoHWIFGbJB6ZDEpaFFnwLCnL6Al1WzMLG08sMGOqUB%2BWoLujVUsCaaIrFEUMf83TnMdqJbLekDZr7DRQMoFnHu4JcsAK%2F9qA2Cld39gFc17yX60IMOuFVLZxIZEnqwmQqsnvXqqvECeBDFQKMuXIiOCJRUB3PVRcXc%2FCAkv5vK9YlgksHWEKmudIAbElGxszKy9LgxtfBvzaq4J5DSnic6whiN7ReaDfKH4Q3laVkJrpTwz8eTlzgKThDkdDT30zV%2FWBGg&X-Amz-Signature=8682ad2df1313685c88c12f5a54e7593f2a0b41b441126c74eb162ff6b23c742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
