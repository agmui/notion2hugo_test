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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXCXPSV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDDvP%2F2z5pIoaotJRev2WNiD7njPX2xezmT3Z%2B1EH2emAiEA9lqiUzbwzeUIsmLcjJ84gbQu%2FqxBLexOQAc6OhVMCJgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5Zsh%2FwowJQA%2FX5HyrcA74fTta21sF5y9LcM3x4ePx6L640o813Om0Z8FFSs%2BCMzSODxDCQqoq0LpvmjalTtq%2FADELS2BsDRQDReSoIWrKSVkqaiflTWK0Y2pXlTMJLnjIEmWgMHfoGrY80Bq4EyVrKHZht1bZtTbKPFVdVoD78BydoAf7b0FEY0ISr7Kzd8uVZNzyGYMRnD3IayzjBAJdhZoxGmBmx7eq7WMP8DkWqne%2B3FFDSkXEClfsravd33aXzV9PLzMXc0yChOSi4UYBgMtJKpJukmZ8x6NFYoYFXhhyKJBlaHXjBFSLbCFL4CZ8nhTGrBLsZu1I741EqLjhdtY3GH%2FO5cEFqsDS1uUgXRXwgt4QelNy0CbPsAjCar2Y3q4DzRCJYgs7PlRENq%2BMkwUL%2FRbdzZQzvDcEqzMSnU1uXp%2BnipR0Pr2FVdNQe7fAqzHdSrcBUccvivXCU4XJ70r2u8nql0BetxHAOAaMoyO6%2FesHUjEPlNgU0z9Iv8kmjTuAox81BQhcbxbIMSsycgbfRJjb7BefGgkjJs1lGeFbCsD3bWu1zVOuuTpdQPi4N2H68p2QQQSyUN1gV%2BbRST3Jiq%2FaYeKmcjlhxnxyNdxDLSjmFmWHqsoXzlvOXPXhI79oX606%2FG1PzMOPRv74GOqUBAyJQpuuNc4b5DG0xb5UvS2oiwf8VtVWZCS8qvkRgoWfpW0HbA9bcSigGhhEIiq%2BLIi2mQRR143QOH5u4fa25%2BypYSkFCvqvp3cF3%2Bj2TFPPDOT3Td0Wqb8K%2BqRJXIGrD8Kyy9A7tNWQjh5fe084xbDECTCDR8Xjd3UG013g5FTupoJetGqFN%2BLxPYBDYYXfkiQg20sBee4am50QoDibpX60EoC0r&X-Amz-Signature=6b2a0dfc107fd0428de80f8b786fbe8afad70b35257be159fb4baee3231f7b30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXCXPSV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDDvP%2F2z5pIoaotJRev2WNiD7njPX2xezmT3Z%2B1EH2emAiEA9lqiUzbwzeUIsmLcjJ84gbQu%2FqxBLexOQAc6OhVMCJgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5Zsh%2FwowJQA%2FX5HyrcA74fTta21sF5y9LcM3x4ePx6L640o813Om0Z8FFSs%2BCMzSODxDCQqoq0LpvmjalTtq%2FADELS2BsDRQDReSoIWrKSVkqaiflTWK0Y2pXlTMJLnjIEmWgMHfoGrY80Bq4EyVrKHZht1bZtTbKPFVdVoD78BydoAf7b0FEY0ISr7Kzd8uVZNzyGYMRnD3IayzjBAJdhZoxGmBmx7eq7WMP8DkWqne%2B3FFDSkXEClfsravd33aXzV9PLzMXc0yChOSi4UYBgMtJKpJukmZ8x6NFYoYFXhhyKJBlaHXjBFSLbCFL4CZ8nhTGrBLsZu1I741EqLjhdtY3GH%2FO5cEFqsDS1uUgXRXwgt4QelNy0CbPsAjCar2Y3q4DzRCJYgs7PlRENq%2BMkwUL%2FRbdzZQzvDcEqzMSnU1uXp%2BnipR0Pr2FVdNQe7fAqzHdSrcBUccvivXCU4XJ70r2u8nql0BetxHAOAaMoyO6%2FesHUjEPlNgU0z9Iv8kmjTuAox81BQhcbxbIMSsycgbfRJjb7BefGgkjJs1lGeFbCsD3bWu1zVOuuTpdQPi4N2H68p2QQQSyUN1gV%2BbRST3Jiq%2FaYeKmcjlhxnxyNdxDLSjmFmWHqsoXzlvOXPXhI79oX606%2FG1PzMOPRv74GOqUBAyJQpuuNc4b5DG0xb5UvS2oiwf8VtVWZCS8qvkRgoWfpW0HbA9bcSigGhhEIiq%2BLIi2mQRR143QOH5u4fa25%2BypYSkFCvqvp3cF3%2Bj2TFPPDOT3Td0Wqb8K%2BqRJXIGrD8Kyy9A7tNWQjh5fe084xbDECTCDR8Xjd3UG013g5FTupoJetGqFN%2BLxPYBDYYXfkiQg20sBee4am50QoDibpX60EoC0r&X-Amz-Signature=43a3772d6dde8620e1ac66267c48dfd23d636c89d886fbd80eae66d56cb5fbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
