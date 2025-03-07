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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEN6PFX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn9hyRz97Si5gmvNx2ZlS1ZO9I%2FV2zuCymBTEvoGcXUAIhALEktTVOrhIAvQs%2FvtCBsfZYQkb81Dgt%2FqY6rZOCP8aLKv8DCEEQABoMNjM3NDIzMTgzODA1IgxYVGlW3T%2BGFWDapIsq3ANWsAy02iUwT7Rw%2FQQaLSjtSyr%2FPG8u8Zv0Ke9k%2FCJnL2n9p%2F7DyEEf1h0rnt3tNOGKmyMXgjYLScp8FltlyAGc6710dRfLAoFvupOpFE57nbTRW0u4HQuJmzp8oXgRqqzWS0G5fuR26hYx4eEbax0ox41%2FpYpRwQNhXaBIXMIKePgy3vdlKUdMVs71dTWJQdT7GlpptVtO5NoOg0DTSw%2BPA9kvudKEuhsLmrmb2fwtChrbSh%2FvHjZdm0aUOIv9xglI3rtcTdcAWbPILhxLZXynbC0RZEZm0HnzijofzNi9BhxKfHwkLsvwiKJznpWffUIg0fr6crcJVjB%2FeSOTOY%2FbL1IiRnMFC2sidjnMGKSI5vOODEf8rJLgwurUuEd6wRsmXWLvr2n7d9t8DVak2sZTuWy4vt1XIiR3FQKSeWJAOsqW8mukiu4fjGqBucmGjO4MiZewg8uwIIsfleTESdmH5t9o%2FCMtE8BLeKPR53Btx61822TUQqpd2XP9k1SwNOR6wKB768NlPeVBnPktX8ZFxN2Nn6x%2BLp7uRRKt6cl31z2F3B6wXVs98AmxgbDiS%2FDN4CRtnYyxxTL6vBF0GOj%2F%2Fu75Dz7tdnShB0GCsGwXj2lMytWrtHJRPHgJhzDPx6q%2BBjqkAW9FCWNn6RVTvcAgMEshfAa7MsUsZ5AEAVyl%2FxK3FjWBfz%2FveZNUIGbnUWjZbgaiofWYH2pNcD394uSo160aC%2Fr1xHyp7ZF4eYrJkgoJc54KEh03n%2FmmsjMAUp2pBKd5yUmG6YY84vkDRybtI75EfbJzbUpxrqu16qECgc53Zg9FJLvg8c%2B52iPS23UKQzDyKBNn0rCgmJhX%2BP%2BxoNZrVtfdqpJU&X-Amz-Signature=df5cf7f074e1f651cd6543ad11393eab7242c4bae5a854e463c95b538ecf5e48&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEN6PFX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn9hyRz97Si5gmvNx2ZlS1ZO9I%2FV2zuCymBTEvoGcXUAIhALEktTVOrhIAvQs%2FvtCBsfZYQkb81Dgt%2FqY6rZOCP8aLKv8DCEEQABoMNjM3NDIzMTgzODA1IgxYVGlW3T%2BGFWDapIsq3ANWsAy02iUwT7Rw%2FQQaLSjtSyr%2FPG8u8Zv0Ke9k%2FCJnL2n9p%2F7DyEEf1h0rnt3tNOGKmyMXgjYLScp8FltlyAGc6710dRfLAoFvupOpFE57nbTRW0u4HQuJmzp8oXgRqqzWS0G5fuR26hYx4eEbax0ox41%2FpYpRwQNhXaBIXMIKePgy3vdlKUdMVs71dTWJQdT7GlpptVtO5NoOg0DTSw%2BPA9kvudKEuhsLmrmb2fwtChrbSh%2FvHjZdm0aUOIv9xglI3rtcTdcAWbPILhxLZXynbC0RZEZm0HnzijofzNi9BhxKfHwkLsvwiKJznpWffUIg0fr6crcJVjB%2FeSOTOY%2FbL1IiRnMFC2sidjnMGKSI5vOODEf8rJLgwurUuEd6wRsmXWLvr2n7d9t8DVak2sZTuWy4vt1XIiR3FQKSeWJAOsqW8mukiu4fjGqBucmGjO4MiZewg8uwIIsfleTESdmH5t9o%2FCMtE8BLeKPR53Btx61822TUQqpd2XP9k1SwNOR6wKB768NlPeVBnPktX8ZFxN2Nn6x%2BLp7uRRKt6cl31z2F3B6wXVs98AmxgbDiS%2FDN4CRtnYyxxTL6vBF0GOj%2F%2Fu75Dz7tdnShB0GCsGwXj2lMytWrtHJRPHgJhzDPx6q%2BBjqkAW9FCWNn6RVTvcAgMEshfAa7MsUsZ5AEAVyl%2FxK3FjWBfz%2FveZNUIGbnUWjZbgaiofWYH2pNcD394uSo160aC%2Fr1xHyp7ZF4eYrJkgoJc54KEh03n%2FmmsjMAUp2pBKd5yUmG6YY84vkDRybtI75EfbJzbUpxrqu16qECgc53Zg9FJLvg8c%2B52iPS23UKQzDyKBNn0rCgmJhX%2BP%2BxoNZrVtfdqpJU&X-Amz-Signature=5da63036c828b30ae765da5bdc40d55bc1092c6cd72924f4fdcf9ae0beecf01e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
