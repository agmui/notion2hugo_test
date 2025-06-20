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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAU3XPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVRztsePmkDz%2BempsxxG0pAc116CchKfCANlj2Q4rhNwIgTjuXN4qZr7e1aWPAxYJq8QJkKa41i%2B7F5AFsXCaqPfYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCkml4oqr9KXqH8SircA4WaXeNOy5birwWTpX76%2FjpEb8uxxCO88K8p6rDGgMQ8Ws1WoMAzNe%2BTbwCGVMNtLhJ6yYvQv%2FvnbK4Z4BziZ0GDWNP7jS8dyXFmtrSJAYU42OenXrHkOAJR2hYSTEwGh%2FCtQv8GOfvccPkD%2FYURzBzdheEqt6s6Q0EsCFfJ79khz0lGECAmO0Wll6FN3uKZgh7AJjDe58J%2BJWMP8QbbydteTDvBYXW5nq2PWQ00uiA02mj7%2FVn%2BL5mE%2FcE7ftAeHrqBislR6%2BsCog%2FmXqjO8tmSY1%2FIQ10mSoqyZJdkkUpysp9U7KBo2oRjoRSJqqygNNERYXDOZq39kedpMuh3HN38WznZId0gD%2BSSQJdBgchRYbImoLeK4hyOQfbfIyAXz4PPW6cf%2FLzRbskC%2BnbGpM%2FMl67d2WefiC6UdBcesEh7TYkyk8GRXeVk72%2FK1EEAyWjBQbo2owS%2BIX%2Bej4xTtyU0Y5cBQM1XSAmoIo9jpELCk2olq4GHZFFCyBFHKASU1PMqtJl47EVxvNhezVmlrRuNTrGttsq4qhw13pQ6nZVKpvF8zFt2rg%2FDQNZSbVSDxBemDwbP3CEJ0G4bAT0F9iOeHR37zDsKybzk4Pkzhs77rBHbj3ESkryAryrPMKj008IGOqUB8g9FNTsOAOiMIabXaAv70odaCtAP35%2BenJE5qN5NaX2q86UbXKWkpsXmeL%2B7f3EsZvrTOIqCXpdJOgd17BpCamrQTfon6JHK%2FfdKnviVhCEwTWM%2Bu8KneI%2B8a%2BoXnJzAQPT2L98pSsR0cn4vQVeuGRun%2BgI4HTvBsQcgTmQypTCNZAHj1M7YvNnTyjb2uvPbDgSrAQff%2Btz1ysceZcZGm0%2BZjCD%2B&X-Amz-Signature=3f8cf1af4eb2874b66284e532b46ae8ffc7288bdaff5a52965d0114cce800460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAU3XPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVRztsePmkDz%2BempsxxG0pAc116CchKfCANlj2Q4rhNwIgTjuXN4qZr7e1aWPAxYJq8QJkKa41i%2B7F5AFsXCaqPfYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCkml4oqr9KXqH8SircA4WaXeNOy5birwWTpX76%2FjpEb8uxxCO88K8p6rDGgMQ8Ws1WoMAzNe%2BTbwCGVMNtLhJ6yYvQv%2FvnbK4Z4BziZ0GDWNP7jS8dyXFmtrSJAYU42OenXrHkOAJR2hYSTEwGh%2FCtQv8GOfvccPkD%2FYURzBzdheEqt6s6Q0EsCFfJ79khz0lGECAmO0Wll6FN3uKZgh7AJjDe58J%2BJWMP8QbbydteTDvBYXW5nq2PWQ00uiA02mj7%2FVn%2BL5mE%2FcE7ftAeHrqBislR6%2BsCog%2FmXqjO8tmSY1%2FIQ10mSoqyZJdkkUpysp9U7KBo2oRjoRSJqqygNNERYXDOZq39kedpMuh3HN38WznZId0gD%2BSSQJdBgchRYbImoLeK4hyOQfbfIyAXz4PPW6cf%2FLzRbskC%2BnbGpM%2FMl67d2WefiC6UdBcesEh7TYkyk8GRXeVk72%2FK1EEAyWjBQbo2owS%2BIX%2Bej4xTtyU0Y5cBQM1XSAmoIo9jpELCk2olq4GHZFFCyBFHKASU1PMqtJl47EVxvNhezVmlrRuNTrGttsq4qhw13pQ6nZVKpvF8zFt2rg%2FDQNZSbVSDxBemDwbP3CEJ0G4bAT0F9iOeHR37zDsKybzk4Pkzhs77rBHbj3ESkryAryrPMKj008IGOqUB8g9FNTsOAOiMIabXaAv70odaCtAP35%2BenJE5qN5NaX2q86UbXKWkpsXmeL%2B7f3EsZvrTOIqCXpdJOgd17BpCamrQTfon6JHK%2FfdKnviVhCEwTWM%2Bu8KneI%2B8a%2BoXnJzAQPT2L98pSsR0cn4vQVeuGRun%2BgI4HTvBsQcgTmQypTCNZAHj1M7YvNnTyjb2uvPbDgSrAQff%2Btz1ysceZcZGm0%2BZjCD%2B&X-Amz-Signature=7cd5c88cd39d4d628617d70cb41706088f090cca0aff10c360d1e3d095823e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
