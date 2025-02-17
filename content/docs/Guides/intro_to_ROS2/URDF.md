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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNCNRM4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDwvO9JIxIiRJ4ncqT5R7JK6d%2BZe5hagqPJQ%2BWrm%2B2nJAIhAIjHG0uONO0jvVM6X6qXtB3t5vFl6VX8CfgrwWwtek2hKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGmV%2B5Xa009gBYwo0q3ANIVaD3W%2B%2Bu4TEFwZlMoTQZaELA%2BPec8Alwd6%2FAYMaAUC4DVTbJ4xamJXlqhPKOttD2aX8WtNQ2cvPQ7mbNxeIdyfA%2Flwlfkcs6hVM7ZVGATFJ1aNcHo7zIaluXhWSplnMpyXVv6c3XGemVwi2oGMV0037NIIZpCBLHAPBNZOBZr%2BsdTDQ0bcqVhVI9%2FBlDWlyFEnDKKsWG2tFIqL6%2Fz9HjQt2L56aO0VyUkqp%2FjywZselOJbET5%2FuZUeYXhd8K46ZELgbfU9347aJrLwwng5gpIj8feitJ1PnavhBPNhIa%2BzGXRI9UQtCzT%2BkGQXeq9BNcFHthTSBhzVbwUCyuB1x8QgkhJ0C97mTo6J5JfOaAPNSKuemtgjAbzkMYJI1ZtYMCI1222DmOzXzz0UFW%2BmbVknegB8rFPcWglidvKD2TTK0SZVuY%2Fqf6bmCp3I555TJ9v8kFMOkahL1YnN6bAmXBliL5Wy5sAE%2FjLvEN4QFr%2FNOVKOvqMOBzTtcd3GGBSZBke72BNwqZEZNk13eWQyFgSX6vvtDKoga%2FA3M87k4WEcL9mltCy22yOxYigijrS%2FMv2oSAqDe%2BZXpisFzeew3fWsU%2FRsosrmR%2FRq%2B7gCdyWTKuVaHOk73pOgYnjzCHps69BjqkAfCznJGgTwGxtFLUcdS9U4VWPLmVZTrsW2uiujU0NP2C%2FuZ%2FwENW2BwUmMEVBUrgIZardeatSKYh8BU2xwckXJnK%2FuACm5Fy9j2AeFtnZKOBRMr%2BjZMnDVzO0Vkuv%2BMlYrQ8GDupayLSWulN61QtSf0xv89LioU6b0YHpwUiH%2B9CvdLbV6XvJTzfS6RmZoFh2mh3tFZMgl7xdRTYmL00bP04xRTO&X-Amz-Signature=97a02f5c1d2e158482a422e6a85cb11a66acff00c604fd7ab0beb56a3ac138e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNCNRM4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDwvO9JIxIiRJ4ncqT5R7JK6d%2BZe5hagqPJQ%2BWrm%2B2nJAIhAIjHG0uONO0jvVM6X6qXtB3t5vFl6VX8CfgrwWwtek2hKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGmV%2B5Xa009gBYwo0q3ANIVaD3W%2B%2Bu4TEFwZlMoTQZaELA%2BPec8Alwd6%2FAYMaAUC4DVTbJ4xamJXlqhPKOttD2aX8WtNQ2cvPQ7mbNxeIdyfA%2Flwlfkcs6hVM7ZVGATFJ1aNcHo7zIaluXhWSplnMpyXVv6c3XGemVwi2oGMV0037NIIZpCBLHAPBNZOBZr%2BsdTDQ0bcqVhVI9%2FBlDWlyFEnDKKsWG2tFIqL6%2Fz9HjQt2L56aO0VyUkqp%2FjywZselOJbET5%2FuZUeYXhd8K46ZELgbfU9347aJrLwwng5gpIj8feitJ1PnavhBPNhIa%2BzGXRI9UQtCzT%2BkGQXeq9BNcFHthTSBhzVbwUCyuB1x8QgkhJ0C97mTo6J5JfOaAPNSKuemtgjAbzkMYJI1ZtYMCI1222DmOzXzz0UFW%2BmbVknegB8rFPcWglidvKD2TTK0SZVuY%2Fqf6bmCp3I555TJ9v8kFMOkahL1YnN6bAmXBliL5Wy5sAE%2FjLvEN4QFr%2FNOVKOvqMOBzTtcd3GGBSZBke72BNwqZEZNk13eWQyFgSX6vvtDKoga%2FA3M87k4WEcL9mltCy22yOxYigijrS%2FMv2oSAqDe%2BZXpisFzeew3fWsU%2FRsosrmR%2FRq%2B7gCdyWTKuVaHOk73pOgYnjzCHps69BjqkAfCznJGgTwGxtFLUcdS9U4VWPLmVZTrsW2uiujU0NP2C%2FuZ%2FwENW2BwUmMEVBUrgIZardeatSKYh8BU2xwckXJnK%2FuACm5Fy9j2AeFtnZKOBRMr%2BjZMnDVzO0Vkuv%2BMlYrQ8GDupayLSWulN61QtSf0xv89LioU6b0YHpwUiH%2B9CvdLbV6XvJTzfS6RmZoFh2mh3tFZMgl7xdRTYmL00bP04xRTO&X-Amz-Signature=b3c92e47c4a3019eebd6441fb05137b2bbe8ac7bdfb0d4ce001a3873837af554&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
