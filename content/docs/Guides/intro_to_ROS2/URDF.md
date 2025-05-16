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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RNM2CM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZTdWn94ODw7dQf9L%2F9MX7vIyXThlrZX8n71D7bwPR7AiBNUruwHFs%2F8YZjIHEyzOIgutqKMc%2FI4HAhok6RUd%2BhpCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM8nSgeTxOL04fwcvLKtwDp1dSBR3Vdji3iBGu%2FYA8yMD8KQexAZhZNNpyjtW6Y3TourBSB6Cbrz8ItjxA4gVA6vpKDmXxpc0J%2Bw2G7eMVmeYCIFTqegsHBA8eZGphIjWxti7HPV5ONjp5MMvLMUeoXtrJIjuu%2FD%2FbKvRuz%2F1YTEdunZCuRJl8WeSmtLqncsUTEZi8%2FppjF6Fx7pNcOMpT1WUIprS0YECuVx4otZvVl4ST6c5ZLbxpSgHan1e0%2BT%2B2nDUYAveNiGoiFZ5Zjk5ighERzvqTLqw9ZeQopBAGfY%2B6LPvhR5BuehrPq41L9WFKWnYirINJL0YWtKYpJdCHrT6rLRk9V%2BICQmcaXST1ikhIl8yHeUYSDeVlWf%2Fo7nyl1MQU8hvlqLelRwYFkGeRVgx4Sm60JOUR1fRKiDx%2FlzO0gN1FSmBT3L51M0sogmpcTaUOhrRfzGDSJgRvlw%2FsFvewCBvxvpu4NQLAX81q0JZ%2FGYMDilSQa0jTW%2B3iwjnwtXY8w8KTtjXal%2BRZL60UwhKp9y33Ia4jHanhqv%2BsiHGl1MGCBb%2Bn5BycptupN6jPk4wiTbw%2Fk9n4J5pkNknhbxGbhDvEmzwE9oa8FOvBztkLxjq391p96I82cgmdSo%2FRdIgWa9Zz1N%2By9HAwy5CewQY6pgF7NyOknqd7C1y7EPw7hWCF7R4ULM%2FqdetV0zg%2FXYZjxw4RXd7LzloATZjitRMtfTpqpN0d01L0vCi29b4oVbG1y8owix9mxlLlhVFunDmLvL%2FNyTcYv4ZblQxb%2BSX5BXE7KSwVe2ozavNfnJEs65HhzsliyS3eWuWjE683LR%2BkE9ppnwXaN18ipDyxHt5LKEyaN8r9l8XxdnjLfuSPAqkot1Wh81XO&X-Amz-Signature=8818874243016dea69a10d99326f93d0c86cbf3975fd3347ffb2e2745fd38efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RNM2CM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZTdWn94ODw7dQf9L%2F9MX7vIyXThlrZX8n71D7bwPR7AiBNUruwHFs%2F8YZjIHEyzOIgutqKMc%2FI4HAhok6RUd%2BhpCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM8nSgeTxOL04fwcvLKtwDp1dSBR3Vdji3iBGu%2FYA8yMD8KQexAZhZNNpyjtW6Y3TourBSB6Cbrz8ItjxA4gVA6vpKDmXxpc0J%2Bw2G7eMVmeYCIFTqegsHBA8eZGphIjWxti7HPV5ONjp5MMvLMUeoXtrJIjuu%2FD%2FbKvRuz%2F1YTEdunZCuRJl8WeSmtLqncsUTEZi8%2FppjF6Fx7pNcOMpT1WUIprS0YECuVx4otZvVl4ST6c5ZLbxpSgHan1e0%2BT%2B2nDUYAveNiGoiFZ5Zjk5ighERzvqTLqw9ZeQopBAGfY%2B6LPvhR5BuehrPq41L9WFKWnYirINJL0YWtKYpJdCHrT6rLRk9V%2BICQmcaXST1ikhIl8yHeUYSDeVlWf%2Fo7nyl1MQU8hvlqLelRwYFkGeRVgx4Sm60JOUR1fRKiDx%2FlzO0gN1FSmBT3L51M0sogmpcTaUOhrRfzGDSJgRvlw%2FsFvewCBvxvpu4NQLAX81q0JZ%2FGYMDilSQa0jTW%2B3iwjnwtXY8w8KTtjXal%2BRZL60UwhKp9y33Ia4jHanhqv%2BsiHGl1MGCBb%2Bn5BycptupN6jPk4wiTbw%2Fk9n4J5pkNknhbxGbhDvEmzwE9oa8FOvBztkLxjq391p96I82cgmdSo%2FRdIgWa9Zz1N%2By9HAwy5CewQY6pgF7NyOknqd7C1y7EPw7hWCF7R4ULM%2FqdetV0zg%2FXYZjxw4RXd7LzloATZjitRMtfTpqpN0d01L0vCi29b4oVbG1y8owix9mxlLlhVFunDmLvL%2FNyTcYv4ZblQxb%2BSX5BXE7KSwVe2ozavNfnJEs65HhzsliyS3eWuWjE683LR%2BkE9ppnwXaN18ipDyxHt5LKEyaN8r9l8XxdnjLfuSPAqkot1Wh81XO&X-Amz-Signature=82a4eee266f18825695591ef3ff91f32f0057341ec65f06779157d166a9d6103&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
