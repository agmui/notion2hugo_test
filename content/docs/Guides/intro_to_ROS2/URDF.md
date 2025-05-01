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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZBQUXD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDh%2BGDHUkzl%2FwG7t7Q1iN4%2FnA5hO%2Fl32MOU6pMqD1NFLgIhALdKBvY3I4JXNiqQ6%2BGDo1ydZHdH0s2oSFIixFJZtouBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2Fn63vlOJC7EyR9gq3AOYEj8tCtgDiXg%2Fuh3o48%2B6VLaPuUEJAE92ljJvLdsHIc4esCgDjrZqUsdon6q1u334LuMdFic%2BN6hKpt3Rlnh%2FlyiuWICiuL5902RC%2FWlVuUO2U7kqy2RzPU9h8oLyMzZ%2Bt3ptmYphCnRfN3G5nBu%2BCDgZ7VhvQJqlvCwI4g8j5X9MZNAfr1Y1if6FJn3cOrXu6%2BPcgVMSZ6ko9O8GJoT5TjoaVwX2nRSCOIeIpA8xRlMu3YG76LD8t6jIy73GjoXyYQEsii7BVS5DoVVYHUz6%2F7ZJCgvYMggnKhuxEfZ%2BLKNfsjzQCru6Kb%2BE5Z3RfadV0O0XUOSDMcUMvlLLqdZ794ogFIio8Z3jh2N68u7skTGpFPeTqdN9GvP1pR%2BaECc8xrqVydwm0c38b9Y8WziShx883cNUDPROkr%2FwkdKJt7GZixtupu8%2BOMDwadcEn6ROVfUdDxbFl1wB3BrQCp9JP8y0PMYsInkrCvMWyl79F7c%2B533NCngNrbRHGbwJs1yUoL6l96sZyAGmEcn9Ofv8Ls5rpmXMb8KLhsUitVTPCM8ionR%2F8PBICM%2BELnlcTxK14Ch3utImEke1M73HlrumkbHFqtQeCw8asU0YfvbMxNaGvBOUTVDSSjK3%2FzDY887ABjqkAVZXtwFOW3YhKRLIVsgjDjUln3wGXxjsoLbPOrot0002YeNBbULD6fX234Kty1hyPLvCrO%2FgZSd0FW%2FLSjazNEBSjQdSB4upw3WO64KmtEBBv0G0eyBjfmS4jddtvS20Dw7DH89e9%2FlCQyx5q7etcK5ke8GOk7%2FmEeppmtBxoCPY%2BIwySf9FhpSSzd3mpzSsYfaeyoZuFgn4F1bn%2FhqNrWk%2BJwKL&X-Amz-Signature=be5153d653afdca186f065c539ed09a1ebaed6b9944ac150a7d8320a5b6c6ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZBQUXD%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDh%2BGDHUkzl%2FwG7t7Q1iN4%2FnA5hO%2Fl32MOU6pMqD1NFLgIhALdKBvY3I4JXNiqQ6%2BGDo1ydZHdH0s2oSFIixFJZtouBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2Fn63vlOJC7EyR9gq3AOYEj8tCtgDiXg%2Fuh3o48%2B6VLaPuUEJAE92ljJvLdsHIc4esCgDjrZqUsdon6q1u334LuMdFic%2BN6hKpt3Rlnh%2FlyiuWICiuL5902RC%2FWlVuUO2U7kqy2RzPU9h8oLyMzZ%2Bt3ptmYphCnRfN3G5nBu%2BCDgZ7VhvQJqlvCwI4g8j5X9MZNAfr1Y1if6FJn3cOrXu6%2BPcgVMSZ6ko9O8GJoT5TjoaVwX2nRSCOIeIpA8xRlMu3YG76LD8t6jIy73GjoXyYQEsii7BVS5DoVVYHUz6%2F7ZJCgvYMggnKhuxEfZ%2BLKNfsjzQCru6Kb%2BE5Z3RfadV0O0XUOSDMcUMvlLLqdZ794ogFIio8Z3jh2N68u7skTGpFPeTqdN9GvP1pR%2BaECc8xrqVydwm0c38b9Y8WziShx883cNUDPROkr%2FwkdKJt7GZixtupu8%2BOMDwadcEn6ROVfUdDxbFl1wB3BrQCp9JP8y0PMYsInkrCvMWyl79F7c%2B533NCngNrbRHGbwJs1yUoL6l96sZyAGmEcn9Ofv8Ls5rpmXMb8KLhsUitVTPCM8ionR%2F8PBICM%2BELnlcTxK14Ch3utImEke1M73HlrumkbHFqtQeCw8asU0YfvbMxNaGvBOUTVDSSjK3%2FzDY887ABjqkAVZXtwFOW3YhKRLIVsgjDjUln3wGXxjsoLbPOrot0002YeNBbULD6fX234Kty1hyPLvCrO%2FgZSd0FW%2FLSjazNEBSjQdSB4upw3WO64KmtEBBv0G0eyBjfmS4jddtvS20Dw7DH89e9%2FlCQyx5q7etcK5ke8GOk7%2FmEeppmtBxoCPY%2BIwySf9FhpSSzd3mpzSsYfaeyoZuFgn4F1bn%2FhqNrWk%2BJwKL&X-Amz-Signature=11e1cb9c76469dccddd89a21d12751ca45067a1366488ca2fef6c86993fca605&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
