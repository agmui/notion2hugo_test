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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOS45AO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaBhguOPOevFAwh9xOCqZ4QHrcqWOiNyvm4nTmHInDFAiAJSpJOY8wVJTys11QL7usQNb8qHbBE1agkgxZhnuQ6ASqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7zoz3PN86lA3Br0aKtwDX5CBQW9s59LIZjReXntywUAWNx9ihWGIaa09OKuu0YdLYhIV7c%2BXUX1QT7sOgSZg%2F0xrgOrypyAWleXk6HA%2B8Pkijbi%2BW0dXO4d0oj4BRkPfbErwWiAIkUzO9VoibZytOxri0bqHhJ%2FlicR5YnyIv0terfYPmcsK3guv9b3u5Xg4ihcn8CBqiIVWjFo1t3KxJen%2Fz4ZRYmbOLsGnznbbY6Ut%2FXBCWD2fuu4j5Q%2FrDJqlB%2BCQnlRI5qaTHGhGTSxJj%2FhENYOdmtVersDz%2BXMWoZEnl1ju1pJaFkRiqoyR2egcOucKcL6jPOFU6OcB8KFn%2BZaN9%2BGrSPeBhYnL1rme7YK9oxAouliTQCJN3Mtdbi7HW54gOx0RZcpHnAoNE7JQpsv41X9HXo5ixorkSucK0So%2Fy0o8EV3ny7ryjUnOIEfOaUSuUCWqZ16pinNRcTSOURoR9gOG969xN2RIFwEwliN3mf9HJEIelSHzI0qB45tOKY2Fd6bEyxR9Du1IO66yO2ETDjf7llmYM4v15XllRcU9dP5D0yP22dpVoPI9Lp%2B%2FJKzwsOCRyWRU7h4SVqviTofbIDjZuOd%2B1oIk%2F5g4PAfq7Az91VZL%2BfwBnYhOODIOsNF57XLxV9AJT2UwmK21xAY6pgGc2azuCnWby%2F5KDfGa0VPykgBPfyiM1hQXAekktVaFYqng26arYFQKZLuR44CmdfcnCxWgIVM35ABI6H0rB9d039%2BElWH4fUyUM%2BaKKtRhIjrtpl7ontF82XgINAUwpFG1qocCIPSUav53khlWCCt0MxiNuBQNgzLU%2B4Rfk3TLzQz%2FaUv3%2BptxQBIdsh%2BqYXjTBxNMZTw9Wu3K5h%2BxrJ8k6DCK%2Bkyy&X-Amz-Signature=1d5a043dce2e6b91cbeabd4223dde51989e1951e44afc2e28308bf86c4367fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOS45AO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaBhguOPOevFAwh9xOCqZ4QHrcqWOiNyvm4nTmHInDFAiAJSpJOY8wVJTys11QL7usQNb8qHbBE1agkgxZhnuQ6ASqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7zoz3PN86lA3Br0aKtwDX5CBQW9s59LIZjReXntywUAWNx9ihWGIaa09OKuu0YdLYhIV7c%2BXUX1QT7sOgSZg%2F0xrgOrypyAWleXk6HA%2B8Pkijbi%2BW0dXO4d0oj4BRkPfbErwWiAIkUzO9VoibZytOxri0bqHhJ%2FlicR5YnyIv0terfYPmcsK3guv9b3u5Xg4ihcn8CBqiIVWjFo1t3KxJen%2Fz4ZRYmbOLsGnznbbY6Ut%2FXBCWD2fuu4j5Q%2FrDJqlB%2BCQnlRI5qaTHGhGTSxJj%2FhENYOdmtVersDz%2BXMWoZEnl1ju1pJaFkRiqoyR2egcOucKcL6jPOFU6OcB8KFn%2BZaN9%2BGrSPeBhYnL1rme7YK9oxAouliTQCJN3Mtdbi7HW54gOx0RZcpHnAoNE7JQpsv41X9HXo5ixorkSucK0So%2Fy0o8EV3ny7ryjUnOIEfOaUSuUCWqZ16pinNRcTSOURoR9gOG969xN2RIFwEwliN3mf9HJEIelSHzI0qB45tOKY2Fd6bEyxR9Du1IO66yO2ETDjf7llmYM4v15XllRcU9dP5D0yP22dpVoPI9Lp%2B%2FJKzwsOCRyWRU7h4SVqviTofbIDjZuOd%2B1oIk%2F5g4PAfq7Az91VZL%2BfwBnYhOODIOsNF57XLxV9AJT2UwmK21xAY6pgGc2azuCnWby%2F5KDfGa0VPykgBPfyiM1hQXAekktVaFYqng26arYFQKZLuR44CmdfcnCxWgIVM35ABI6H0rB9d039%2BElWH4fUyUM%2BaKKtRhIjrtpl7ontF82XgINAUwpFG1qocCIPSUav53khlWCCt0MxiNuBQNgzLU%2B4Rfk3TLzQz%2FaUv3%2BptxQBIdsh%2BqYXjTBxNMZTw9Wu3K5h%2BxrJ8k6DCK%2Bkyy&X-Amz-Signature=940839268f77497f1ce063c0a0828b61141131b1d930e694202e4c365b78ffac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
