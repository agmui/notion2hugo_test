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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OD3NTL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANYyhDqmAxKGvtShRXMgLO2SL88DBCLysLakW5m9OlUAiEAi09mJ6C799tsNWvjQSubSD%2FBcrx%2BpoW6cy%2FLxCw0DK8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDUR2PW1eh0n4SiInCrcAxAvIarXm2MOrYKB0IL5B5WsGTfBFT%2BXwgKF4vswbxh%2FsBTC6dQTwWmvfMmLGp5eRcTx80caEtF1cbtS1rDWLalRrWs%2BaHx4jfL0EZS1KOgtQNAFicJqjIj8ADER5QqeghxXfFVOvIufO%2B2G1YZRt%2FnBEW6S5ds8cFSqVdBdHnwAJiR9Ex1I0q8WcxKTa85xu5QkZxhpsyGScHMswgRdlqLtGp%2B3oTIsg%2Fff2zEXo4XFjyHv1cZN3WoqkMBaxnGOTgbH38JPXSEBENKg4XMbsCcAD7qFByj%2BhAU47v4jh2unO5hbYCv94iirJJmF3oX9xC5qRBulA%2FiTthFeaKHEkpZuwDumaZ7AQQ5iG3%2BgfxmkuQ5Aj005eB76x8i5XXGu%2FLL6t7%2F0jwptzlDKne2WjfQ5Y7lraVC%2FeQiwaKVKFG%2FhLccr%2BT%2Bg5DyEaunNGQVcgjFZvgl69YzsurmA3klOpA6k3RQ%2B%2Fuyn1kG6DyTNXS9d8Wk%2F8oExWCabEXpi7eYngvKjFOUI9%2Bh9i2w3tn1arEt5a7alnAJV9G46vepk17tJx6n%2BtUI%2BPHrdC5JKaJn4ocGB6HaPQhwSDNJI4ak5a4yt67kSKZpEwwzGt9d68JJDiDDimJW59OxxrFcLMNrXpMEGOqUBcTEoZ7tnNzczA5fSuWndkpzqzkTTTPOwuyjcvkHIjMsoWvpfcCSAwHzcxj9GiZQny%2Fs5LHZ5k8slwIJYOXeMYVXoDsBqKYQwWWmkdDF%2ByHvnRBL42i5SBAqZx3FwxfaKoxP2jqVG6mrXbXH61oi2QJiaw19ZjWHm2BPtSKzTKaIuzuA%2BObF9%2BUlBn7hi9eiBPw7MadfQwKOIBpAr5DLWbLdFRzCg&X-Amz-Signature=d20c23664776007a5d029b9184454261b96df4616170e5984303bacb40741731&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OD3NTL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANYyhDqmAxKGvtShRXMgLO2SL88DBCLysLakW5m9OlUAiEAi09mJ6C799tsNWvjQSubSD%2FBcrx%2BpoW6cy%2FLxCw0DK8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDUR2PW1eh0n4SiInCrcAxAvIarXm2MOrYKB0IL5B5WsGTfBFT%2BXwgKF4vswbxh%2FsBTC6dQTwWmvfMmLGp5eRcTx80caEtF1cbtS1rDWLalRrWs%2BaHx4jfL0EZS1KOgtQNAFicJqjIj8ADER5QqeghxXfFVOvIufO%2B2G1YZRt%2FnBEW6S5ds8cFSqVdBdHnwAJiR9Ex1I0q8WcxKTa85xu5QkZxhpsyGScHMswgRdlqLtGp%2B3oTIsg%2Fff2zEXo4XFjyHv1cZN3WoqkMBaxnGOTgbH38JPXSEBENKg4XMbsCcAD7qFByj%2BhAU47v4jh2unO5hbYCv94iirJJmF3oX9xC5qRBulA%2FiTthFeaKHEkpZuwDumaZ7AQQ5iG3%2BgfxmkuQ5Aj005eB76x8i5XXGu%2FLL6t7%2F0jwptzlDKne2WjfQ5Y7lraVC%2FeQiwaKVKFG%2FhLccr%2BT%2Bg5DyEaunNGQVcgjFZvgl69YzsurmA3klOpA6k3RQ%2B%2Fuyn1kG6DyTNXS9d8Wk%2F8oExWCabEXpi7eYngvKjFOUI9%2Bh9i2w3tn1arEt5a7alnAJV9G46vepk17tJx6n%2BtUI%2BPHrdC5JKaJn4ocGB6HaPQhwSDNJI4ak5a4yt67kSKZpEwwzGt9d68JJDiDDimJW59OxxrFcLMNrXpMEGOqUBcTEoZ7tnNzczA5fSuWndkpzqzkTTTPOwuyjcvkHIjMsoWvpfcCSAwHzcxj9GiZQny%2Fs5LHZ5k8slwIJYOXeMYVXoDsBqKYQwWWmkdDF%2ByHvnRBL42i5SBAqZx3FwxfaKoxP2jqVG6mrXbXH61oi2QJiaw19ZjWHm2BPtSKzTKaIuzuA%2BObF9%2BUlBn7hi9eiBPw7MadfQwKOIBpAr5DLWbLdFRzCg&X-Amz-Signature=4cce6ca549dfea34d70f5ed6f088506e1aeec53985f1a5340c9f4573fcb344ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
