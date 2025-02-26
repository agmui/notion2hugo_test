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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5J4NRI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGqDNe05g5BuEMvsfc5iCbT41ErOCUeq7g246FD1EZ%2B5AiEAzKeBUa15DR396068qyiJwyijJyhy52l%2B%2F993OP3kk2wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHnfaJeGk5JAwdjwXircAyt3oOwjXCDn1qcP3AnncKX1Qng0CdmPpI4XvcWyp17Jlj0ExXu8zK4CUS2fH7w%2FUw%2F9raoFTyFsCfb%2F239OhmRWJECpfZx6O9Qt%2FP7fFwu8p9ek%2BzqHZXGbcwHJuB9FVxcATCMfVe5fXtJr7AtDGv6T3c%2Byp8qnTsexzpPyIcVB7Jt2zsrdWHIKDZu4vyG10h6rIa6mEiNlnUw%2BzhzxRH95eTlRZXWIKQXvK6ObZ%2FOTvZ4zwck0Spn6ysAGrxagBOHHagMEcK1iiBpE0AX0%2BDpgyoHfVWtOAuUbCNeg2YROF4QlYWQzCgPghv2e4EvIzYKTKKyWkaul5J4BO%2FG%2FKSX85kTmGx%2FtQxaq3VDEIWaSs%2FGD8YckFh%2BjzKRTr68p4bkilN283a0NMLlFqDdlbfS4cnHbDIn0GsRUjsfj7VkATxvozc8b9iIVHfFy2VEoH0nVseQFC4UGDdAt4YAu9VqAYiT0cvva9yloqgKZPZyEkU%2FEwOFsn4dhuphkyINCdomkk%2BcsVUVn457165TAmN1HWASX7tU0t4DT3OSUy3DvFeHNGtZcgt3ttJBfrkcw9neAfHw74I068lVJ4dgmHAqTuM857wSJmpmoxeLjAZBfL3KlcQOFJPE0tQpTMM%2B8%2Bb0GOqUB98ZEvxRTBC3Rf52To978cIxMpYGhqUFX9PUMv17JJpMVk3Ft7gYDTTXsnFeG8LFFSkI5GpxXLp4lgkpER572llI0D8H8lTU3m6nDQAgIBeLlY4vkkl9SbnPLaH5bYoFP0%2F3aSONPIOsnFVktSrHihmK2wGAAP4HZbOfNSXRy0Ym7%2Fqsa88qjbYhIIbbeWpTK6tLtCCmFIPFwPhCVCo%2FVa2RdpImo&X-Amz-Signature=a1975b65e024ae8b3595f1ab2df4afb312acc86b23dae2bbcd43ebe1cfe2e527&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5J4NRI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGqDNe05g5BuEMvsfc5iCbT41ErOCUeq7g246FD1EZ%2B5AiEAzKeBUa15DR396068qyiJwyijJyhy52l%2B%2F993OP3kk2wq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHnfaJeGk5JAwdjwXircAyt3oOwjXCDn1qcP3AnncKX1Qng0CdmPpI4XvcWyp17Jlj0ExXu8zK4CUS2fH7w%2FUw%2F9raoFTyFsCfb%2F239OhmRWJECpfZx6O9Qt%2FP7fFwu8p9ek%2BzqHZXGbcwHJuB9FVxcATCMfVe5fXtJr7AtDGv6T3c%2Byp8qnTsexzpPyIcVB7Jt2zsrdWHIKDZu4vyG10h6rIa6mEiNlnUw%2BzhzxRH95eTlRZXWIKQXvK6ObZ%2FOTvZ4zwck0Spn6ysAGrxagBOHHagMEcK1iiBpE0AX0%2BDpgyoHfVWtOAuUbCNeg2YROF4QlYWQzCgPghv2e4EvIzYKTKKyWkaul5J4BO%2FG%2FKSX85kTmGx%2FtQxaq3VDEIWaSs%2FGD8YckFh%2BjzKRTr68p4bkilN283a0NMLlFqDdlbfS4cnHbDIn0GsRUjsfj7VkATxvozc8b9iIVHfFy2VEoH0nVseQFC4UGDdAt4YAu9VqAYiT0cvva9yloqgKZPZyEkU%2FEwOFsn4dhuphkyINCdomkk%2BcsVUVn457165TAmN1HWASX7tU0t4DT3OSUy3DvFeHNGtZcgt3ttJBfrkcw9neAfHw74I068lVJ4dgmHAqTuM857wSJmpmoxeLjAZBfL3KlcQOFJPE0tQpTMM%2B8%2Bb0GOqUB98ZEvxRTBC3Rf52To978cIxMpYGhqUFX9PUMv17JJpMVk3Ft7gYDTTXsnFeG8LFFSkI5GpxXLp4lgkpER572llI0D8H8lTU3m6nDQAgIBeLlY4vkkl9SbnPLaH5bYoFP0%2F3aSONPIOsnFVktSrHihmK2wGAAP4HZbOfNSXRy0Ym7%2Fqsa88qjbYhIIbbeWpTK6tLtCCmFIPFwPhCVCo%2FVa2RdpImo&X-Amz-Signature=2acc4be0051f556bdbfb4d05ef8571ef8683ad99647c94556ed40f88364b0ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
