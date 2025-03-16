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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MEFZHD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvJntKVm%2F%2BuSbI8HdDJ1PIg2hauv5scqz%2BDrv40B0AuAiEAkkZKsx3tqop1NOxaMrJzpHakvTPVJ5uFleWJGIB8Pksq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPe9%2BZr7Cpsbq6SDKyrcA8M7AANdKzcZKvdxrfdSQwCWtczzDH5zH6rjG6OaYwFDGnaXtaURYnyoqrquYmBMR2yDTdxCi5uCg9OHj5Kb%2Fr%2BT4zJCkyZwpTeSjoN%2BiOWeljpPGTSiVmMvtUkl2f52%2B3Wrf%2BH1T1G3CHIp8%2Bl1j009hrCEbBlms7uuK8ns6uk82WRYZQQG4%2Ffv3TtS%2F0Qx3PkcsHPOdKzI%2BgYtaZftFUzyw96y2txys0yiwAVr96IF8vqmAOHfh11JYncMUueKdXl9Wa0abkSTsBpaJg7fc2HsP2RvGHzkafhpLwtKJu8vl%2FQIWgpFxv80KMLQQz8%2FG7Ah7gMS1BzIPSiAH4pjqHAFHmQHadXrpsWA3eme7B1s%2FKO%2BiRTp1pYWarjqfWpdQE8THSb1WgX5xlmFkci16CnzwLsctqwajv4O5yRt5jZHPcDh%2BEbuzoUs6deIUmRYoekQuAH%2B4GuCsJ2Q0y11fCzpsqQmss1TqPiGXI%2B8Df7fsPIrs01i6JqEAUi8huG0RjSfAQgRC8zh0TTyF%2BaQJyKLg37vBk1%2BKeucxvppB23CrkwDaZFQmF8bjpAUwCYe4V8qNDKi1jbzDJTWzcmXEJUksGb5GpuP44LIwLOptIFHPp10shXiZWKkDT6%2FMP2T2r4GOqUBV4g4qvEwWaRUoUP99actjExryogjHnv6Qo%2B03nG%2BepBfh68IT3Cp3t4suVcgVspgdFO%2FHnF3Sbj41QRmNJB1WLcus%2B3UiA6Q6syj60%2BSCPIDyfVvBUkall7N9gKflIlmGq3%2F8xoHKgJ0%2FysZEx%2BOBXvN%2F6xZmZpYhOzeb9Dio1jCklPvRlo%2FGA7s7VBOQ0uZJk0FSly7RtBK7bQaRqkmLLDM9TEj&X-Amz-Signature=ed7b92e70a193834f25f7937e2125c469a0b943d2ed101d8b86ad878067b34db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MEFZHD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvJntKVm%2F%2BuSbI8HdDJ1PIg2hauv5scqz%2BDrv40B0AuAiEAkkZKsx3tqop1NOxaMrJzpHakvTPVJ5uFleWJGIB8Pksq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPe9%2BZr7Cpsbq6SDKyrcA8M7AANdKzcZKvdxrfdSQwCWtczzDH5zH6rjG6OaYwFDGnaXtaURYnyoqrquYmBMR2yDTdxCi5uCg9OHj5Kb%2Fr%2BT4zJCkyZwpTeSjoN%2BiOWeljpPGTSiVmMvtUkl2f52%2B3Wrf%2BH1T1G3CHIp8%2Bl1j009hrCEbBlms7uuK8ns6uk82WRYZQQG4%2Ffv3TtS%2F0Qx3PkcsHPOdKzI%2BgYtaZftFUzyw96y2txys0yiwAVr96IF8vqmAOHfh11JYncMUueKdXl9Wa0abkSTsBpaJg7fc2HsP2RvGHzkafhpLwtKJu8vl%2FQIWgpFxv80KMLQQz8%2FG7Ah7gMS1BzIPSiAH4pjqHAFHmQHadXrpsWA3eme7B1s%2FKO%2BiRTp1pYWarjqfWpdQE8THSb1WgX5xlmFkci16CnzwLsctqwajv4O5yRt5jZHPcDh%2BEbuzoUs6deIUmRYoekQuAH%2B4GuCsJ2Q0y11fCzpsqQmss1TqPiGXI%2B8Df7fsPIrs01i6JqEAUi8huG0RjSfAQgRC8zh0TTyF%2BaQJyKLg37vBk1%2BKeucxvppB23CrkwDaZFQmF8bjpAUwCYe4V8qNDKi1jbzDJTWzcmXEJUksGb5GpuP44LIwLOptIFHPp10shXiZWKkDT6%2FMP2T2r4GOqUBV4g4qvEwWaRUoUP99actjExryogjHnv6Qo%2B03nG%2BepBfh68IT3Cp3t4suVcgVspgdFO%2FHnF3Sbj41QRmNJB1WLcus%2B3UiA6Q6syj60%2BSCPIDyfVvBUkall7N9gKflIlmGq3%2F8xoHKgJ0%2FysZEx%2BOBXvN%2F6xZmZpYhOzeb9Dio1jCklPvRlo%2FGA7s7VBOQ0uZJk0FSly7RtBK7bQaRqkmLLDM9TEj&X-Amz-Signature=449db78de9057df93885f2f3cd2f550b3e48dd0b5aa2a0209acbb0309c8a4787&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
