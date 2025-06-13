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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ANF2QU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDt%2Bqiu7SZ5x0C26rCd3Ack%2BmDWX9sNJE5wlLzKqA65dgIgaAwz0RpB%2F9k%2BiSlEu93mL8dh%2BRNAXala9A%2FTdbylz8MqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB5y09%2FT7wQPpHp%2FSrcA3fo3pnG1tIuPUIyXx7YkNFkotF8m3yzOcVJXEx5pr7A0DR8LOyJmhqsugVT%2FfgnPe83sT5P%2B%2FKwnUDncotsQBzBa0nEWcFPxiTEXzmwBt%2Ba6gNqB3ouO6EfAN4DeTtQFHuiPDbXWzkr4jn%2FlikgokvNXjiU04vCyCj0dhT50vuV6%2Ben3iphSuUzfeOyZ1EtP3Kf68WrE5c2BA61leTeIRcFRbiPcUJcpUbw79h2OqnFocMMhLfzLJc48ZNJcUSf5t5h5LaJfRHQeKRWmmF98Ctc7fF16bb%2Fknv0zAP4DbA5jJUrojo1fT8K6za6MeWF1tWzsvsPeBD%2FqR5g6duSPMv9JwqbcvoMQv08UoqOLPBrPmtYuWt6K0guTipALnzPw2eGPah5HD1ZopjEY3%2BsUjTbm%2FinRBEzpEnLhT%2BCkRQgA1iB0vKKVK3r1y%2B08HGspLxr6yaEnsu%2BZWqwN3Vt4FoAgbOR%2BZ7bW6qHfEoV4U38gzpeoL57D7lIBKsCYSuQGdmdlKbE0gQM1weDWNps70ufqp6ZwXKdOkA7zoQPMgB%2F57k3gVaA5abw0z4m1loHb2j4gi19NfexUJZ2a78Qt00ffEq7TjOFOasleEF5%2FdL0hcBZCC8OnSIQqjuJMJm5rcIGOqUBSeQ47Tx%2FRxmtvBbobZOL9ha2AZkK9U01DIjez3YYu4I1PHHKVwRGE%2Fqk%2Fi52mx7AceeAf8Lc0Zh8055E0OJ%2FUNThkPM4a90I7gyKAkqnYuPbIqMCMqGihdwg1KoOu8G9mf1bV5UaEj90aIOsepBBo%2F3GtaL2sVTw1JiC6jsE8NL1GQAw734PJfc4yoFsQ0eGOT%2BKxzUvVDznfWIp88B5d4fm6QZB&X-Amz-Signature=12ce576895fb89bda09d66af0e442482dfdcb79c1152140c618fa7d6e0d0b743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ANF2QU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDt%2Bqiu7SZ5x0C26rCd3Ack%2BmDWX9sNJE5wlLzKqA65dgIgaAwz0RpB%2F9k%2BiSlEu93mL8dh%2BRNAXala9A%2FTdbylz8MqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJB5y09%2FT7wQPpHp%2FSrcA3fo3pnG1tIuPUIyXx7YkNFkotF8m3yzOcVJXEx5pr7A0DR8LOyJmhqsugVT%2FfgnPe83sT5P%2B%2FKwnUDncotsQBzBa0nEWcFPxiTEXzmwBt%2Ba6gNqB3ouO6EfAN4DeTtQFHuiPDbXWzkr4jn%2FlikgokvNXjiU04vCyCj0dhT50vuV6%2Ben3iphSuUzfeOyZ1EtP3Kf68WrE5c2BA61leTeIRcFRbiPcUJcpUbw79h2OqnFocMMhLfzLJc48ZNJcUSf5t5h5LaJfRHQeKRWmmF98Ctc7fF16bb%2Fknv0zAP4DbA5jJUrojo1fT8K6za6MeWF1tWzsvsPeBD%2FqR5g6duSPMv9JwqbcvoMQv08UoqOLPBrPmtYuWt6K0guTipALnzPw2eGPah5HD1ZopjEY3%2BsUjTbm%2FinRBEzpEnLhT%2BCkRQgA1iB0vKKVK3r1y%2B08HGspLxr6yaEnsu%2BZWqwN3Vt4FoAgbOR%2BZ7bW6qHfEoV4U38gzpeoL57D7lIBKsCYSuQGdmdlKbE0gQM1weDWNps70ufqp6ZwXKdOkA7zoQPMgB%2F57k3gVaA5abw0z4m1loHb2j4gi19NfexUJZ2a78Qt00ffEq7TjOFOasleEF5%2FdL0hcBZCC8OnSIQqjuJMJm5rcIGOqUBSeQ47Tx%2FRxmtvBbobZOL9ha2AZkK9U01DIjez3YYu4I1PHHKVwRGE%2Fqk%2Fi52mx7AceeAf8Lc0Zh8055E0OJ%2FUNThkPM4a90I7gyKAkqnYuPbIqMCMqGihdwg1KoOu8G9mf1bV5UaEj90aIOsepBBo%2F3GtaL2sVTw1JiC6jsE8NL1GQAw734PJfc4yoFsQ0eGOT%2BKxzUvVDznfWIp88B5d4fm6QZB&X-Amz-Signature=53f60e1b8fcb044fffecfeeec47b5e6c64a72dcfee2a9865b3345415f78c24ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
