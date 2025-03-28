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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHFYBJY6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FaCHVQ4iWIZG3HrJ9vG4IQEgoZz5JkMc9t8Kg3C0ipAIgEIc2IAWv8urFetoNCXL5Kq9TGVd6d8wmxFdKXEWLL7Iq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDChdZqbfhK9dcFERiSrcAxpkeWkFwfKUWG5GYchYZCzPoMd52ec66Jnm0%2BwgedRzI%2Fey3N5VEuWhy%2FtO%2F4RRchbtQdxIjhZmeaprtM0KtqlSOhfbGL0MFo4HtCiAxhzSG5s%2FYjOHI1T0p0bpt%2FuhRbW5LPUfHK7psNRP%2BuJNoUTMdYolvdtn%2FAGtQDiFebugChhiiNAhdZ%2FFYfd9qjWDpXoDaWNDDiKh%2B2hoZGNsY6YylcMJxe9cxDNCFCBvQEGtBhsLVdljeLaZxKF75SuxKCtFCActVlAmUWnFmU7guwKJ8%2BjJRXQ%2B6BKqUc838wLEHwdMzu3%2F1DxPhxNXrgYOaiHSQwDLODnF6lICK8LV4M0kxLuMdikC68Zo0Hd8txp5Z99eYhagAxpf4Og4dLrZmsVzgKOobHB72Fj8nDhbsHdw%2F0v2jAkgO%2BwiDaGz4NxctVTkjGbGoRwo4LUi%2Fkw%2BOTcQe6eV4fuqQWcrKwIURFIEM4m30O2AdxcXNWLoUlxTFNv1688AJtVRoBJO8%2BJzmfFjj7Wy7ZuOZ680rvRTTLG1dIbFTc9jbpZrE9iHr3Dy1VboX8p4sgofXt165pKvbPKgyWTI5dwTTzEpjTwavPQIMsXzb07qmu7XPM2AMEzEbQZGgZ9d2LqnpwJ1MNGJm78GOqUBJEnFzxIQdNmPwvQOqrG5aIFEJsNbLQXm2vluGXg9OsnPtH4S%2BnnlUwBp%2BNgg%2FG0GeMV7MaflDoK%2F6nQ%2BfzxKoAkL%2B7b7Kpu%2FK5W29C%2B151XGZPi4FeTlmXqSM3GrgRRMRVraFKnmD6Moh2RLBID6m9pGun5qQJYVRwBWtj%2FwoGxxRVgmINxtogPMHjmiksREUhpHKDjiqaKeslicm6QuwmQjNPoK&X-Amz-Signature=f07d2f755f95eb7ed3d737cb892bce5d52a3f1b1913bb03fc828c09741b1f6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHFYBJY6%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FaCHVQ4iWIZG3HrJ9vG4IQEgoZz5JkMc9t8Kg3C0ipAIgEIc2IAWv8urFetoNCXL5Kq9TGVd6d8wmxFdKXEWLL7Iq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDChdZqbfhK9dcFERiSrcAxpkeWkFwfKUWG5GYchYZCzPoMd52ec66Jnm0%2BwgedRzI%2Fey3N5VEuWhy%2FtO%2F4RRchbtQdxIjhZmeaprtM0KtqlSOhfbGL0MFo4HtCiAxhzSG5s%2FYjOHI1T0p0bpt%2FuhRbW5LPUfHK7psNRP%2BuJNoUTMdYolvdtn%2FAGtQDiFebugChhiiNAhdZ%2FFYfd9qjWDpXoDaWNDDiKh%2B2hoZGNsY6YylcMJxe9cxDNCFCBvQEGtBhsLVdljeLaZxKF75SuxKCtFCActVlAmUWnFmU7guwKJ8%2BjJRXQ%2B6BKqUc838wLEHwdMzu3%2F1DxPhxNXrgYOaiHSQwDLODnF6lICK8LV4M0kxLuMdikC68Zo0Hd8txp5Z99eYhagAxpf4Og4dLrZmsVzgKOobHB72Fj8nDhbsHdw%2F0v2jAkgO%2BwiDaGz4NxctVTkjGbGoRwo4LUi%2Fkw%2BOTcQe6eV4fuqQWcrKwIURFIEM4m30O2AdxcXNWLoUlxTFNv1688AJtVRoBJO8%2BJzmfFjj7Wy7ZuOZ680rvRTTLG1dIbFTc9jbpZrE9iHr3Dy1VboX8p4sgofXt165pKvbPKgyWTI5dwTTzEpjTwavPQIMsXzb07qmu7XPM2AMEzEbQZGgZ9d2LqnpwJ1MNGJm78GOqUBJEnFzxIQdNmPwvQOqrG5aIFEJsNbLQXm2vluGXg9OsnPtH4S%2BnnlUwBp%2BNgg%2FG0GeMV7MaflDoK%2F6nQ%2BfzxKoAkL%2B7b7Kpu%2FK5W29C%2B151XGZPi4FeTlmXqSM3GrgRRMRVraFKnmD6Moh2RLBID6m9pGun5qQJYVRwBWtj%2FwoGxxRVgmINxtogPMHjmiksREUhpHKDjiqaKeslicm6QuwmQjNPoK&X-Amz-Signature=503bdbf066573a434ea5b149d8ae0934cfc8b5ddb48fa5eb2709ff23c91faae8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
