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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLLID2T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxSb4ze%2F6Z9FgoT9YCKWEyTYfOyeRMb9KHINDCoBAbWgIgRtxBJVjCwJDYEbreUFwgcvI1inbidbyEibMP7gLNQA8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAu2bdlPqxYKWkVGQCrcA2Of2ebZUJkWzXL471rIqzJ04FvtQ5RyZpAR0%2Fi52N2HdvwZqJgNyMnEdlA07TkgTAWuVE7QBUXHC0Y9tpgXhnF1ll49A378t2egSMApJ%2BWl7cZoGYlmLzLWGK%2Fx7myjKGLuV%2FS%2BrpVLvxpafAgYVs03UZvWRYoye%2FCpvdrULuMvXn56rx%2BfPUBRtBmmjiJrh2OFc2r5AKm8agEuoxAIrufunICoXAqdyMfHIJCSUierzK9YhXxvLjJ%2BSwJp%2BfTf%2Bpih5ivT7fQC5hNxa6oOhRbqrez0xU6qP6d7Bal9dgrXojkE9w042hRNavWdc9Mz%2FFQL8bTI5fGkkr81UbF%2BnTMFy%2B3Q%2Bsu5paF7EYbmEVSSTnDJvY%2F5YAhr264TAkS6eEyl9bKL3qVIHOM1NwVpOQcP2%2FuTQqClIO7PsY004sXLXHFtWJq1q7lw03MgmdYogw77nlHuiRgrmdMfNP8JxQe35YAW6Q0kzvWEBOskb3N8KQyrQuCJRTjDflxJMFdgiVyybFamleGDsuNTT9NxWRcv74nqs2gRvFt2F9rYN6t%2F%2B18DO0SPiFOAxFWnwbv9kGB09%2BLznEJR3UDycN9H%2BDvDxRhWYBoErh72QX2AqbawMFWecD8vPVKOCdVIMN%2Bz6cAGOqUB1aoSEVMiCPg43FHl5fkxrtyGcncf%2BhsmF0U6zi%2F%2BaUcT2KZo9cB77kJEqNW90ZtVQ0utYfvDiRvING4RqU4SV9FusT2HmMrZCPUvAKpbLo8JCKI1%2B%2BFksjnM2mS06EK2VyzTZk%2BkbbYDoGVBPYVxw0sh9EGXbLdE3xTe1%2Fjpmxl0pRBIkWZGrrNxsRQaOzRLIT6n2oaLlDRWJYkzrO%2Blh%2BsFYaDG&X-Amz-Signature=067cb18c4fd24e78ab562ebefa09e114b0b2754bc07c70f04ad6d5f5937e8e38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLLID2T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxSb4ze%2F6Z9FgoT9YCKWEyTYfOyeRMb9KHINDCoBAbWgIgRtxBJVjCwJDYEbreUFwgcvI1inbidbyEibMP7gLNQA8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAu2bdlPqxYKWkVGQCrcA2Of2ebZUJkWzXL471rIqzJ04FvtQ5RyZpAR0%2Fi52N2HdvwZqJgNyMnEdlA07TkgTAWuVE7QBUXHC0Y9tpgXhnF1ll49A378t2egSMApJ%2BWl7cZoGYlmLzLWGK%2Fx7myjKGLuV%2FS%2BrpVLvxpafAgYVs03UZvWRYoye%2FCpvdrULuMvXn56rx%2BfPUBRtBmmjiJrh2OFc2r5AKm8agEuoxAIrufunICoXAqdyMfHIJCSUierzK9YhXxvLjJ%2BSwJp%2BfTf%2Bpih5ivT7fQC5hNxa6oOhRbqrez0xU6qP6d7Bal9dgrXojkE9w042hRNavWdc9Mz%2FFQL8bTI5fGkkr81UbF%2BnTMFy%2B3Q%2Bsu5paF7EYbmEVSSTnDJvY%2F5YAhr264TAkS6eEyl9bKL3qVIHOM1NwVpOQcP2%2FuTQqClIO7PsY004sXLXHFtWJq1q7lw03MgmdYogw77nlHuiRgrmdMfNP8JxQe35YAW6Q0kzvWEBOskb3N8KQyrQuCJRTjDflxJMFdgiVyybFamleGDsuNTT9NxWRcv74nqs2gRvFt2F9rYN6t%2F%2B18DO0SPiFOAxFWnwbv9kGB09%2BLznEJR3UDycN9H%2BDvDxRhWYBoErh72QX2AqbawMFWecD8vPVKOCdVIMN%2Bz6cAGOqUB1aoSEVMiCPg43FHl5fkxrtyGcncf%2BhsmF0U6zi%2F%2BaUcT2KZo9cB77kJEqNW90ZtVQ0utYfvDiRvING4RqU4SV9FusT2HmMrZCPUvAKpbLo8JCKI1%2B%2BFksjnM2mS06EK2VyzTZk%2BkbbYDoGVBPYVxw0sh9EGXbLdE3xTe1%2Fjpmxl0pRBIkWZGrrNxsRQaOzRLIT6n2oaLlDRWJYkzrO%2Blh%2BsFYaDG&X-Amz-Signature=5cef6d585343ea3df3f2c0dac3cec97bf51eb377a26b9aeaeff0cc09074cbde1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
