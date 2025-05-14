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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2X6SLX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDP1%2F218bW3jqUtX6KVwQRlfGvBpaonASe4Dhk1d%2BoUVAIgZg49%2BFcMrjDhvM9qDzcKXz6uW28FuauYY25uoPrgPBYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMPtUpraLTqhddCZ1CrcA2x%2FbPhXZo1s%2BN8fy29Y51BYuhK6kHnSc8RRxUV9S8g7QQDjt5Ga%2FCbvj8Lc%2FUFBESK%2BE2X5KGRx17QHPaVc7SNIdjUDDm50MYI%2FXzdzTpp0TBtlzysnCheJa1wTX4ZbW0Fnim398LQ%2F3jR9L5%2FE53UnW47ug1OpUsKPPt%2BmQU3FEF4Nqu3K4u80nGTax3nC%2BwSxqJlmk7C9O2YCUxl6qTPQRATDmyvTLg8Mge3WS3NOxvwR7jwJbXQZDeRw9Yltea6XKQCQ3UWyAPRaCaNxzuPLEOYRLkJZJSEPj%2FUcIij7orF0wCz6N7DUJngnD66ny0RdRq6BcRiSQzh%2B838OBgdkrv6y4%2FoPK8fiGqk02TQxlDXkI%2FZoILAgaBRnrlNNW04Ulg8GEihf8WfQ%2FCL9gob3Am2mGd0ULRNiA81rT4fHebgf5qBjnVvAGzKxk%2Byle7aIl6Cm3YUvLhx7TZpM6KMDEMBJFoPSQMgE%2BFy90w8Vx3H32MvLucqE9LJ5a%2F3gktuXE0vVV8ZEQk3WL%2BUyEBICRwnOodEevI1RFVZlNZDb%2BqqV5%2Fpk7rvb%2B38l5bxlNkB%2F9orwHKlcVdGus9ha9oDL2tQbL4rjDwY%2F2H7cY6mokIoghDaV6rHYzk4eMMe6ksEGOqUBmk8b05CXfO%2Bwk8zI4dmGbTkQNQSzfC9hyrW5HTjnEtyUuK7RzGtRsSQ%2BJqLRYybbU2B4ZbcO4f605g2pwjS1HNQLu79bG5ltpGrm2YjmPxvHlIZDtKuXiChXb7Kr5nQOMKMXwZpyviimTilxuuzqs%2Ft0OUb90hfJyJj54YoKqK22moCFDZC8tzbmr6p4wPjvsJXfJmo7NFgomHKmLSTyQP%2BtUB5h&X-Amz-Signature=cc1408d0945fad493987c073259f6b85003496d74266186ef4cb495c191f2001&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2X6SLX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDP1%2F218bW3jqUtX6KVwQRlfGvBpaonASe4Dhk1d%2BoUVAIgZg49%2BFcMrjDhvM9qDzcKXz6uW28FuauYY25uoPrgPBYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMPtUpraLTqhddCZ1CrcA2x%2FbPhXZo1s%2BN8fy29Y51BYuhK6kHnSc8RRxUV9S8g7QQDjt5Ga%2FCbvj8Lc%2FUFBESK%2BE2X5KGRx17QHPaVc7SNIdjUDDm50MYI%2FXzdzTpp0TBtlzysnCheJa1wTX4ZbW0Fnim398LQ%2F3jR9L5%2FE53UnW47ug1OpUsKPPt%2BmQU3FEF4Nqu3K4u80nGTax3nC%2BwSxqJlmk7C9O2YCUxl6qTPQRATDmyvTLg8Mge3WS3NOxvwR7jwJbXQZDeRw9Yltea6XKQCQ3UWyAPRaCaNxzuPLEOYRLkJZJSEPj%2FUcIij7orF0wCz6N7DUJngnD66ny0RdRq6BcRiSQzh%2B838OBgdkrv6y4%2FoPK8fiGqk02TQxlDXkI%2FZoILAgaBRnrlNNW04Ulg8GEihf8WfQ%2FCL9gob3Am2mGd0ULRNiA81rT4fHebgf5qBjnVvAGzKxk%2Byle7aIl6Cm3YUvLhx7TZpM6KMDEMBJFoPSQMgE%2BFy90w8Vx3H32MvLucqE9LJ5a%2F3gktuXE0vVV8ZEQk3WL%2BUyEBICRwnOodEevI1RFVZlNZDb%2BqqV5%2Fpk7rvb%2B38l5bxlNkB%2F9orwHKlcVdGus9ha9oDL2tQbL4rjDwY%2F2H7cY6mokIoghDaV6rHYzk4eMMe6ksEGOqUBmk8b05CXfO%2Bwk8zI4dmGbTkQNQSzfC9hyrW5HTjnEtyUuK7RzGtRsSQ%2BJqLRYybbU2B4ZbcO4f605g2pwjS1HNQLu79bG5ltpGrm2YjmPxvHlIZDtKuXiChXb7Kr5nQOMKMXwZpyviimTilxuuzqs%2Ft0OUb90hfJyJj54YoKqK22moCFDZC8tzbmr6p4wPjvsJXfJmo7NFgomHKmLSTyQP%2BtUB5h&X-Amz-Signature=ff819a77432f6d46eb118d06f379291920badf8c8d3b248f370e38003f36c79e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
