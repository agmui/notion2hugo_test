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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULVNCIE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy%2BsjcPzbtXPoKjguE37VtKQ%2BXRuA39DMA0CD636iCPAiEAxxD%2F2rmEv3yoMyIQakMsm7XY7FbfpVHK%2F12nuYO9YX0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHHfao7BlZfaFzVfSrcAwZWODmxYe%2BeuErKpZjtRPKHqKpb2JeWTNQ9ii2tmj0MCt8O0ncaCIottiAO3dKJLzwY%2FLjVDScMcPUUdi0Td3zcYaNyesEnsFBg1cgDrzTQwzIGXSOCtTMdEooEWnvyknl%2FIOnkJsptlto9rSO8cJ3S8R9dBCgiMGW7uwkSjYGeTCX3cfHv10ZV8lOAcsjV0waDnzIYQLZCyX84k%2FFqFUqgwZDITLHJWumpeJ0qc9Ox4cem4xTr46H9GEvA50Gj%2FIaIneiAbwqZNS1bWuD8qNFdIc0iLeMZd7SS1M4zYTB3yPC2j8nNpCytaH%2BCOrzF%2B3x1fGTqcKfSJ%2FrF3FxLcCqRRgX4lpm9jrKdEv3vPAgRhd8WQI%2Fj6hvBf%2BOCzDgd4yQGR44%2B85hsNAmCkuJ7dYUh9jvYq250QsWgd%2BBiK1XilBW69inhder7O1rtE%2FW9CLCBZEqAvqS%2F1XJmECGGUrGGPL1SSScnfdP0fZ2g%2BfQpK5T6nmRmRURB7GJiV7pr0zAJxf1JANWVzlkg2uZ5U6KN8a73t6VZOO%2BN1X3kNmYtWkW6GZhXXycCqwEqVtqu3NmqwkCrgrxDkCSSVuo%2BI37kVy6PWLhpXyH%2BILXViubDNnmFF04FJKw2ECDXMO2v2MIGOqUBGFcWbKiVlZOChqv17lc9%2BpQ01vhFcy7gz%2FaTOhdkOFKSpGrasgfdwl3V5Gmq8MuI%2BjtEh%2FNYbdAdQyTdM3jeVPqrPSWPUsf4Tie3FyKZB0dqi9v9TXls%2BM4Qgf3lsjJTTYsNVhlK32rxEANyRzLVP1v%2Fe0hZxKsSKuoMmeHSk5rLkt%2FM1ATUuYYkWtHaQhP2CYlDNvVnV71HXsxDHXK9kix3UFLl&X-Amz-Signature=559a75f6b6bb4527096d065319c8091d9f3e2bb5b513c0d3313ca217d1bc43e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VULVNCIE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy%2BsjcPzbtXPoKjguE37VtKQ%2BXRuA39DMA0CD636iCPAiEAxxD%2F2rmEv3yoMyIQakMsm7XY7FbfpVHK%2F12nuYO9YX0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHHfao7BlZfaFzVfSrcAwZWODmxYe%2BeuErKpZjtRPKHqKpb2JeWTNQ9ii2tmj0MCt8O0ncaCIottiAO3dKJLzwY%2FLjVDScMcPUUdi0Td3zcYaNyesEnsFBg1cgDrzTQwzIGXSOCtTMdEooEWnvyknl%2FIOnkJsptlto9rSO8cJ3S8R9dBCgiMGW7uwkSjYGeTCX3cfHv10ZV8lOAcsjV0waDnzIYQLZCyX84k%2FFqFUqgwZDITLHJWumpeJ0qc9Ox4cem4xTr46H9GEvA50Gj%2FIaIneiAbwqZNS1bWuD8qNFdIc0iLeMZd7SS1M4zYTB3yPC2j8nNpCytaH%2BCOrzF%2B3x1fGTqcKfSJ%2FrF3FxLcCqRRgX4lpm9jrKdEv3vPAgRhd8WQI%2Fj6hvBf%2BOCzDgd4yQGR44%2B85hsNAmCkuJ7dYUh9jvYq250QsWgd%2BBiK1XilBW69inhder7O1rtE%2FW9CLCBZEqAvqS%2F1XJmECGGUrGGPL1SSScnfdP0fZ2g%2BfQpK5T6nmRmRURB7GJiV7pr0zAJxf1JANWVzlkg2uZ5U6KN8a73t6VZOO%2BN1X3kNmYtWkW6GZhXXycCqwEqVtqu3NmqwkCrgrxDkCSSVuo%2BI37kVy6PWLhpXyH%2BILXViubDNnmFF04FJKw2ECDXMO2v2MIGOqUBGFcWbKiVlZOChqv17lc9%2BpQ01vhFcy7gz%2FaTOhdkOFKSpGrasgfdwl3V5Gmq8MuI%2BjtEh%2FNYbdAdQyTdM3jeVPqrPSWPUsf4Tie3FyKZB0dqi9v9TXls%2BM4Qgf3lsjJTTYsNVhlK32rxEANyRzLVP1v%2Fe0hZxKsSKuoMmeHSk5rLkt%2FM1ATUuYYkWtHaQhP2CYlDNvVnV71HXsxDHXK9kix3UFLl&X-Amz-Signature=b7e7509de00950d2a5d89ac8f5addfd1ef04c3bed2667698c9ca5b7d5d49be5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
