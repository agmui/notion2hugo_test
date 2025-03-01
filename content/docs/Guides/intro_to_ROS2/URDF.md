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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIOTFP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCRRDitC4QidNIAORDWVRupXSuolxYEnAW%2B1ZCdMY8IfwIgZIeSVKCSvSh2sSfpmW%2BJttrSJyUbs0g1Hnh8BB2Zm2sqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB3GmQ%2Bkx4MTdQ1kSrcA2SL29iQtGyxAKk8XmLZhcu01Th%2FiUj0%2BIczhn%2B7PTUA%2FqDWv0DpL%2B%2F20gXFrMKdj1n4slmPsviY0PjbWe8phrllemjsZJebpB78k52I3N7WGchxK4YkJTr1mYUK3CEofMG5cF4u7KJoK9j9bVlrzlY8%2BDlVQLQRuTGPcihddARZ0xNu%2ByyzIX7tNUrytLTS0ogwaC1x5IATFImCb9osfWt2eUiZS9BYxEsqMymNGa2SAEgfh0aOiDAojPXnMHIByxtQTyyO1GjnghuSJ3BwGJhd%2BfQ27VlV8mI3HHeymEW45jGsbeV2vVHlVt4dABRQNwEVmBX8UxsYPRDMtkCO0QTr2ux62CqKsGTs5QiLr7bDovt5z%2BE5QV1uB6hUWCJBrf0llUxvfU82zTJH%2F8yeO%2BiBMjboWGXzSWSqCmHG5KZRvc0dSK4afvBAGTCqzeBB7l6%2FoVlYRugmPmRXxbw60bCgRcWyq%2BseiX9ogFf%2F35W0iJzXbM47E8E7EW8tzn0F6K8alE1dJu1qgzgr6JOYLZcywLnq1dnu2cfCynSYqvyNGvJVPKxmO%2BfoTSsJYEqBvd%2BePCBUyf5grnB5Ks7xHnvKrG3vj2gZ7zwi%2BvCPGqPhCO5G1aC0Bgumg7cAMImFib4GOqUB3GeZ9NruB%2FhBUTN4NzAbRFBaIKher8O3ZYJLv8H%2F2CKbRBUylP1uwnSprzpA6KZW7%2FybtSfIKOZkoGqVb4j5Nie3x7uxFieT3yHaFWDgckldvKGuI5y9fp%2FPkdDgi2T6xMA4uWLyQhiR6oCl%2BRJDyvUNfEuBwXFdwXt1CEFbPpcohYD0P%2FKvN4Vxp8sSlmkeM6pX9OHJNhWlsPV2hE8CkmcdG5ym&X-Amz-Signature=447d92e6ea5281a5e195213594c5ce4721b4bf33c70f60120cb57fa12a9211dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKIOTFP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCRRDitC4QidNIAORDWVRupXSuolxYEnAW%2B1ZCdMY8IfwIgZIeSVKCSvSh2sSfpmW%2BJttrSJyUbs0g1Hnh8BB2Zm2sqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB3GmQ%2Bkx4MTdQ1kSrcA2SL29iQtGyxAKk8XmLZhcu01Th%2FiUj0%2BIczhn%2B7PTUA%2FqDWv0DpL%2B%2F20gXFrMKdj1n4slmPsviY0PjbWe8phrllemjsZJebpB78k52I3N7WGchxK4YkJTr1mYUK3CEofMG5cF4u7KJoK9j9bVlrzlY8%2BDlVQLQRuTGPcihddARZ0xNu%2ByyzIX7tNUrytLTS0ogwaC1x5IATFImCb9osfWt2eUiZS9BYxEsqMymNGa2SAEgfh0aOiDAojPXnMHIByxtQTyyO1GjnghuSJ3BwGJhd%2BfQ27VlV8mI3HHeymEW45jGsbeV2vVHlVt4dABRQNwEVmBX8UxsYPRDMtkCO0QTr2ux62CqKsGTs5QiLr7bDovt5z%2BE5QV1uB6hUWCJBrf0llUxvfU82zTJH%2F8yeO%2BiBMjboWGXzSWSqCmHG5KZRvc0dSK4afvBAGTCqzeBB7l6%2FoVlYRugmPmRXxbw60bCgRcWyq%2BseiX9ogFf%2F35W0iJzXbM47E8E7EW8tzn0F6K8alE1dJu1qgzgr6JOYLZcywLnq1dnu2cfCynSYqvyNGvJVPKxmO%2BfoTSsJYEqBvd%2BePCBUyf5grnB5Ks7xHnvKrG3vj2gZ7zwi%2BvCPGqPhCO5G1aC0Bgumg7cAMImFib4GOqUB3GeZ9NruB%2FhBUTN4NzAbRFBaIKher8O3ZYJLv8H%2F2CKbRBUylP1uwnSprzpA6KZW7%2FybtSfIKOZkoGqVb4j5Nie3x7uxFieT3yHaFWDgckldvKGuI5y9fp%2FPkdDgi2T6xMA4uWLyQhiR6oCl%2BRJDyvUNfEuBwXFdwXt1CEFbPpcohYD0P%2FKvN4Vxp8sSlmkeM6pX9OHJNhWlsPV2hE8CkmcdG5ym&X-Amz-Signature=65845e7fdf8c5c2cff4121ae34b51339e77627c0c1c60fdcac1bf48b4d8d92c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
