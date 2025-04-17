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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCARIOKA%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWqgccVmatZyAWOqngMyRm7OUyHRE2XkNEY7%2Bv9Ve19AIhAJXHmdb9a05v9gXDlBDxbw80nJSx%2BqbxgSzI9pDb605PKv8DCGUQABoMNjM3NDIzMTgzODA1IgwXuJP7WcExKcSlXGkq3AOfMextIWbWz8%2B4XRP91IfqXWerjwnyH4AVvwq8PITCVwRf34WHskKvRzhI3e8Cm7roTuDvM1dOaPHUNkqRgFOpMKnZNDRI1HbvazJMjo8AmZEnxkLS66fOowRirIyKnCw1IrMYspfYRVoDtttaSp0f9E3CUb4d50%2FY2pjR1Eu23RYGE%2Bvaz3k%2B1Ttts%2FleCWAhVKj1pTti1ufueQNA%2FTbr3paEzJXe%2FIhy7g0Vrs1Xbihks5uFV4oEJJXlaSKe3oJYvNkUv7jBSsyjIhiOG2o83gozYoob6qrxvpGqDYgMcTqbogVBpwc7tT8koCDGGfAPnH9AGWzcHJh5CM%2FJ02HCO8ZU76SgaKMDxmLxZmHEiRSYcvFBeCAHowMh11O9GABJmAvN1yLyHX85nSgiSGNt5Uma6ITTlu9X1LmQM331Mqh%2FJ5YVaFuHZDjdWT9zPAz1t5YzPNeaRwPdy%2BFYLl1RoYwOIaVJPdlE18hvrlp1hFjOiNIETaPiYoBL1vbsq8FOTQnZS6UM%2F7wA9mXPQOqoE10ksGjNuaEGfkiaVdbuXPUsHwKn5IGkgHkyKz9IoWRlP%2BzoAaCW3lbbIgeixL2Cp98iOFpVwKnEq5YMHl5QvhH32LBaIJI%2BjBpYxjDZtoXABjqkAVlk0UTAfW5W9CEzRCT%2FSWCRPvih5GBkjM0lTq6VSxuargauUFWy4acDV3ug3NQEtIZUNkPgVTUFo8ZJRhStmD33wUkga1NDGTL9dSOqc%2BbnxMNiiZnHfpD670kSn%2FtXWOR154T9pl78DV%2FYKw9jchKrycxhsANY7vGSQ9SWdV17CXiZtTfdfRzsHb%2FFAwMxwjeG2pB2PX5W5nKgylEy%2BS4k%2Bpkh&X-Amz-Signature=c2bd813234574528d5da0118264a53b6aacaa992df3374943824833e72c28dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCARIOKA%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWqgccVmatZyAWOqngMyRm7OUyHRE2XkNEY7%2Bv9Ve19AIhAJXHmdb9a05v9gXDlBDxbw80nJSx%2BqbxgSzI9pDb605PKv8DCGUQABoMNjM3NDIzMTgzODA1IgwXuJP7WcExKcSlXGkq3AOfMextIWbWz8%2B4XRP91IfqXWerjwnyH4AVvwq8PITCVwRf34WHskKvRzhI3e8Cm7roTuDvM1dOaPHUNkqRgFOpMKnZNDRI1HbvazJMjo8AmZEnxkLS66fOowRirIyKnCw1IrMYspfYRVoDtttaSp0f9E3CUb4d50%2FY2pjR1Eu23RYGE%2Bvaz3k%2B1Ttts%2FleCWAhVKj1pTti1ufueQNA%2FTbr3paEzJXe%2FIhy7g0Vrs1Xbihks5uFV4oEJJXlaSKe3oJYvNkUv7jBSsyjIhiOG2o83gozYoob6qrxvpGqDYgMcTqbogVBpwc7tT8koCDGGfAPnH9AGWzcHJh5CM%2FJ02HCO8ZU76SgaKMDxmLxZmHEiRSYcvFBeCAHowMh11O9GABJmAvN1yLyHX85nSgiSGNt5Uma6ITTlu9X1LmQM331Mqh%2FJ5YVaFuHZDjdWT9zPAz1t5YzPNeaRwPdy%2BFYLl1RoYwOIaVJPdlE18hvrlp1hFjOiNIETaPiYoBL1vbsq8FOTQnZS6UM%2F7wA9mXPQOqoE10ksGjNuaEGfkiaVdbuXPUsHwKn5IGkgHkyKz9IoWRlP%2BzoAaCW3lbbIgeixL2Cp98iOFpVwKnEq5YMHl5QvhH32LBaIJI%2BjBpYxjDZtoXABjqkAVlk0UTAfW5W9CEzRCT%2FSWCRPvih5GBkjM0lTq6VSxuargauUFWy4acDV3ug3NQEtIZUNkPgVTUFo8ZJRhStmD33wUkga1NDGTL9dSOqc%2BbnxMNiiZnHfpD670kSn%2FtXWOR154T9pl78DV%2FYKw9jchKrycxhsANY7vGSQ9SWdV17CXiZtTfdfRzsHb%2FFAwMxwjeG2pB2PX5W5nKgylEy%2BS4k%2Bpkh&X-Amz-Signature=9b7c8c74a7233fd0074933e199df92508aa97f1b62454acfdcb0c4447aaec0db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
