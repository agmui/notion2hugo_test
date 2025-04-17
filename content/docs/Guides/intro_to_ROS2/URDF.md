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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TQ4RWE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICefZMnkSOUh7cs4Ony3CyJrzhoa7ZoD9qi9jeMLg49qAiEAzKR363qobZpg41cmtybbgmCyyrm%2FsyzC3PBAEWoicH4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBa54EloA5qKaer32yrcA0d4sR%2B3qY2CarUr3ZkuFv8%2FeAFAgeLwTXQ%2BNqDPTbggDyeT%2FDejv5eT1wrTSWu0yDcvG9Bj%2F6U%2BV3uGZRkCLJsnTZNjPmAbQEx50swzqv0pcFcgp9HSCbp%2Bt8%2Bv0H9Ul3MemW3fJClsVOiyoTEeT4aQvgV6wWE5gpaj8I0zOVG%2BmhmVmlNBBHJT1cS7NKaEr%2BzthhLkC71QJU8kJnJo08Ef%2BGLuLgjab%2FoKFOqzbK54d76%2FenlSKZ%2BtqHaKJjwk8Lpthkv4qqdJlcAU2Ugya1RHEHZlh1C9xOANOJtRPOWmPAvSyKNP7YQVpBOTZaTHEUt%2B4K9BHTPDD9oE5oOkfJn57IBcFi9nXMVmqTRd%2FP4Yf0%2FIhmsjZpg%2BY9uZ2dOtoPt0xqqSeSLll%2BCy6upDrzm%2FeU9BcltBTjTXj%2F1URPyWQ0UXw78sAJGyOFWqzMTWY7DDNPCIXZP5ZGwVcbOKsmeAbQ7%2B0M%2BOW25%2BGJLE7Sq29uTFBgbk7LTpwpr%2Bf06DAE96pMTKh19TVjDNAubayXdf2%2BeTe1sLHGSvOjj3A80sFnql9blyZtPJkITAp4Cqc3pOoO3Xj%2BVyOby4WZrZQHnMMi4GXNs06ENHJJuannd9K4e0wHCbFaJJc2cKMLawgsAGOqUB9QCju%2FRVwsv1mLhlHeZZkgpISsdsNHs%2BlrFvi%2FCAtv0nxxsG3VXlRcHFKFAOlwvNu9TD73IVbbZBMb%2F2DDJQhCv0uWaz2B79ynxnn8JrQ%2BuHWIPBtW3s7nL0OcKQDXUlZiLK7DpRQPIKDeDbQSBg9Thq9pEyUdufyhdlbY7cbKi7edoPp1dAN%2F49ZT6W4fjFoqRbZIPGY57NCr4ys8XvhoYO5HqX&X-Amz-Signature=be6eb0f1581a19facd60d317f30a3e923c880adefe0f94bbb7d8ef4c4d959b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TQ4RWE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICefZMnkSOUh7cs4Ony3CyJrzhoa7ZoD9qi9jeMLg49qAiEAzKR363qobZpg41cmtybbgmCyyrm%2FsyzC3PBAEWoicH4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBa54EloA5qKaer32yrcA0d4sR%2B3qY2CarUr3ZkuFv8%2FeAFAgeLwTXQ%2BNqDPTbggDyeT%2FDejv5eT1wrTSWu0yDcvG9Bj%2F6U%2BV3uGZRkCLJsnTZNjPmAbQEx50swzqv0pcFcgp9HSCbp%2Bt8%2Bv0H9Ul3MemW3fJClsVOiyoTEeT4aQvgV6wWE5gpaj8I0zOVG%2BmhmVmlNBBHJT1cS7NKaEr%2BzthhLkC71QJU8kJnJo08Ef%2BGLuLgjab%2FoKFOqzbK54d76%2FenlSKZ%2BtqHaKJjwk8Lpthkv4qqdJlcAU2Ugya1RHEHZlh1C9xOANOJtRPOWmPAvSyKNP7YQVpBOTZaTHEUt%2B4K9BHTPDD9oE5oOkfJn57IBcFi9nXMVmqTRd%2FP4Yf0%2FIhmsjZpg%2BY9uZ2dOtoPt0xqqSeSLll%2BCy6upDrzm%2FeU9BcltBTjTXj%2F1URPyWQ0UXw78sAJGyOFWqzMTWY7DDNPCIXZP5ZGwVcbOKsmeAbQ7%2B0M%2BOW25%2BGJLE7Sq29uTFBgbk7LTpwpr%2Bf06DAE96pMTKh19TVjDNAubayXdf2%2BeTe1sLHGSvOjj3A80sFnql9blyZtPJkITAp4Cqc3pOoO3Xj%2BVyOby4WZrZQHnMMi4GXNs06ENHJJuannd9K4e0wHCbFaJJc2cKMLawgsAGOqUB9QCju%2FRVwsv1mLhlHeZZkgpISsdsNHs%2BlrFvi%2FCAtv0nxxsG3VXlRcHFKFAOlwvNu9TD73IVbbZBMb%2F2DDJQhCv0uWaz2B79ynxnn8JrQ%2BuHWIPBtW3s7nL0OcKQDXUlZiLK7DpRQPIKDeDbQSBg9Thq9pEyUdufyhdlbY7cbKi7edoPp1dAN%2F49ZT6W4fjFoqRbZIPGY57NCr4ys8XvhoYO5HqX&X-Amz-Signature=ad3d291f4afd3708065f81414fd532ca723a483323208301cf55d2134a1c7b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
