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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXP5V3Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDsa%2BsClacrCQCvOJaFtbK2K4ZZRpUq%2FrErSCmhrW392AiEAsV6dGmmhHTB50ehJCaVfyltZNkavP56y1V4f9DSvRDUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkS%2FpMFoG4vTVKJ7yrcA6f5%2BoiQSFulAM1bcw1D6nEjrDgiwgMx0lWeE5Gwbzs2dQkqCUjXd2no1Ekf1NBvJLWjBS2gKxZvgDh9Q3psYX82xsAfySGs45EyVSlO%2FJW%2BdBCxSimQTKlnkfCAzSrmKTAMkRc3sLY3bRA%2FkwSgqGfH0fygycOcBvA87bcbv998BDf4trnadgqNrYpLHbF6uiSCjAYDPB8tEVmKCwjs0Q%2F6Pj5KpPV%2BHeuDnlpX1SFGKJui9NgtCQ60OWvhJaOuNxS70omovUCk4NIJ%2Fmf6q6eUyyjLUHDpNp6Bj6yiBhBFnobJdbJXVhFkMSMffGspcRuI0fFvXySEAR9CMq0tMUzU8j3CW2n9KxPtrhUuSWMAS4b2ioiBLcKp0FVjZ20Ltk1tSnFOJISYpuS6wRBYoZz33kQ9il3kYisrTqdmC10hr4oS%2BItBxj4EGzUt%2BoyP1UGS0FVxeFegVth%2BFzu1YgNrJxDn%2B2D8gYvFNqZcoXyIP1zfVEy%2B27tlPw29ala8QU5dvgNr%2FOtZITSmTs%2BH%2FDXpqGfPNj7jT1NIvuBDJS1eYy%2FwyhhFlGRtSHG8hMWQRo2JEaqGp5fq3%2FlSm4S6ODZKCgPgP0p%2BdSzxsWanOcVhDPoOdelclcnDIbv9MMr00cAGOqUB%2Fa6xE2dRrBIWpzFx5M2dTHlbwIZnlu1xH4H3oacArwh%2BbNxsfU5oxEnNExmbUpV%2BLm%2BsKumgNJOsP38hsShFlBK9E0fqlWmLmLWNKcf%2FJkGhp6gf1XoIvS7USaTBeTOgAMcm%2FnxIq%2F2vEZoFGxFCd%2FYoxL1AHL3ztADiRhpw2zxu10fXkzJzziPv7QnQIgaS4dR8546pGn7aC9%2ByW5VlGuNSDEWx&X-Amz-Signature=9d20b0bd9191905c30a72da1ef62a7e3df2b696a3766b50726e5dec5bb3b680d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXP5V3Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDsa%2BsClacrCQCvOJaFtbK2K4ZZRpUq%2FrErSCmhrW392AiEAsV6dGmmhHTB50ehJCaVfyltZNkavP56y1V4f9DSvRDUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkS%2FpMFoG4vTVKJ7yrcA6f5%2BoiQSFulAM1bcw1D6nEjrDgiwgMx0lWeE5Gwbzs2dQkqCUjXd2no1Ekf1NBvJLWjBS2gKxZvgDh9Q3psYX82xsAfySGs45EyVSlO%2FJW%2BdBCxSimQTKlnkfCAzSrmKTAMkRc3sLY3bRA%2FkwSgqGfH0fygycOcBvA87bcbv998BDf4trnadgqNrYpLHbF6uiSCjAYDPB8tEVmKCwjs0Q%2F6Pj5KpPV%2BHeuDnlpX1SFGKJui9NgtCQ60OWvhJaOuNxS70omovUCk4NIJ%2Fmf6q6eUyyjLUHDpNp6Bj6yiBhBFnobJdbJXVhFkMSMffGspcRuI0fFvXySEAR9CMq0tMUzU8j3CW2n9KxPtrhUuSWMAS4b2ioiBLcKp0FVjZ20Ltk1tSnFOJISYpuS6wRBYoZz33kQ9il3kYisrTqdmC10hr4oS%2BItBxj4EGzUt%2BoyP1UGS0FVxeFegVth%2BFzu1YgNrJxDn%2B2D8gYvFNqZcoXyIP1zfVEy%2B27tlPw29ala8QU5dvgNr%2FOtZITSmTs%2BH%2FDXpqGfPNj7jT1NIvuBDJS1eYy%2FwyhhFlGRtSHG8hMWQRo2JEaqGp5fq3%2FlSm4S6ODZKCgPgP0p%2BdSzxsWanOcVhDPoOdelclcnDIbv9MMr00cAGOqUB%2Fa6xE2dRrBIWpzFx5M2dTHlbwIZnlu1xH4H3oacArwh%2BbNxsfU5oxEnNExmbUpV%2BLm%2BsKumgNJOsP38hsShFlBK9E0fqlWmLmLWNKcf%2FJkGhp6gf1XoIvS7USaTBeTOgAMcm%2FnxIq%2F2vEZoFGxFCd%2FYoxL1AHL3ztADiRhpw2zxu10fXkzJzziPv7QnQIgaS4dR8546pGn7aC9%2ByW5VlGuNSDEWx&X-Amz-Signature=2f1824de1ef447210b0fbe15777d7dc0dc28eae5c753a19cd7599d08fc722b94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
