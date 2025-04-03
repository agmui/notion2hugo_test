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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NK45GI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDYv4SLQm98IGnaZ7WfBZpf3lXajg7NATATEdkXI5s5ogIgZWt5Rsqi%2FUvXm8V1gVcJ0QoxOBjNQh9YcuZuuZkJW3MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbe1OTu6H8MSw%2FtXCrcAylKNdzWkPu%2F0N%2B8%2B6b5ZeMYYptTEk4KKWC61y8NGcYhEIizMr1OGAcRrvyZA1r4qrqgOSNljYMwhIauKdMw2nYB%2FJU2ZNkwmOjk5WzVk5M2fmlVBqmYzNvIk8dnjRHSxqYDW3N1UpbUtctpfNzrul0d58wG%2FO1yqPg13O1YoeiJRXC71EiHRUKCeTtyIoZ5q6xhzNr2tEhNXfgddR62tDbRDlxJ8jFUeLG9NPxlbzQdeI%2F%2BVHMjkSAn7h91GL7kF2w3%2FgY5VKyzCRags08QhBp7zkQPRsyjq8tjUFugLMUROW%2Bmmxo2PQrk8kxH9TUDusspZpFvGGiDeeDqQJmvq6EndumeHrjhPICmcUF5tYxqdwSkvDnT6cQ8gMuU9fezyZTIgNKw079OqaCcPXejV9PplGf8dGYdAa2M4WxFzYPM%2B1z%2BUubBWMO9aWo6zWfE%2FwXLLsbsSaCx4%2Fo8QdcFDOBAz7De%2F0bk4pb0kpSQd9PAxxxMBtkR3BZE4l0eTH2eaV2WRRiOKn%2FE%2BKLMg9XrhHISX6rEN%2B6OcWvv2hNWTbO15WYUAAV7dvFDpFztRkCjvgYkrIUsi5z8GdntRORYHRVBiwV1TrOyblqx4952NBj8ub1Lvv4p9fy11Z33MK37t78GOqUBimJQlbBNZHquL2DunwDoTiZa1CZObCmwUOq1nkfAuMWMoWinKLpgX1Y9O8To1GE8kXzWFbkC5H7%2FnNkkSza0QA7Xo%2BMjY41WWdEQ3ei9yjHjzWj6oxtWUrKTYcVkgV3OSoKQkCUBmg7waW%2BxBYhZD2pCUoz%2BXFMscz1lPsWxAoLCASgNKuVzwUZtOwgpzK%2FAIWo4lz2DnXWXDDnN15SsMuPo7jUo&X-Amz-Signature=29215edef835d348b93837eb33aa0da88cb3d353f83143e0a81e1be58f684352&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NK45GI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDYv4SLQm98IGnaZ7WfBZpf3lXajg7NATATEdkXI5s5ogIgZWt5Rsqi%2FUvXm8V1gVcJ0QoxOBjNQh9YcuZuuZkJW3MqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbe1OTu6H8MSw%2FtXCrcAylKNdzWkPu%2F0N%2B8%2B6b5ZeMYYptTEk4KKWC61y8NGcYhEIizMr1OGAcRrvyZA1r4qrqgOSNljYMwhIauKdMw2nYB%2FJU2ZNkwmOjk5WzVk5M2fmlVBqmYzNvIk8dnjRHSxqYDW3N1UpbUtctpfNzrul0d58wG%2FO1yqPg13O1YoeiJRXC71EiHRUKCeTtyIoZ5q6xhzNr2tEhNXfgddR62tDbRDlxJ8jFUeLG9NPxlbzQdeI%2F%2BVHMjkSAn7h91GL7kF2w3%2FgY5VKyzCRags08QhBp7zkQPRsyjq8tjUFugLMUROW%2Bmmxo2PQrk8kxH9TUDusspZpFvGGiDeeDqQJmvq6EndumeHrjhPICmcUF5tYxqdwSkvDnT6cQ8gMuU9fezyZTIgNKw079OqaCcPXejV9PplGf8dGYdAa2M4WxFzYPM%2B1z%2BUubBWMO9aWo6zWfE%2FwXLLsbsSaCx4%2Fo8QdcFDOBAz7De%2F0bk4pb0kpSQd9PAxxxMBtkR3BZE4l0eTH2eaV2WRRiOKn%2FE%2BKLMg9XrhHISX6rEN%2B6OcWvv2hNWTbO15WYUAAV7dvFDpFztRkCjvgYkrIUsi5z8GdntRORYHRVBiwV1TrOyblqx4952NBj8ub1Lvv4p9fy11Z33MK37t78GOqUBimJQlbBNZHquL2DunwDoTiZa1CZObCmwUOq1nkfAuMWMoWinKLpgX1Y9O8To1GE8kXzWFbkC5H7%2FnNkkSza0QA7Xo%2BMjY41WWdEQ3ei9yjHjzWj6oxtWUrKTYcVkgV3OSoKQkCUBmg7waW%2BxBYhZD2pCUoz%2BXFMscz1lPsWxAoLCASgNKuVzwUZtOwgpzK%2FAIWo4lz2DnXWXDDnN15SsMuPo7jUo&X-Amz-Signature=e032d35db83e8b287f001164be4df74c1f7a0dd5702df0b8d4b53f373bdbfe77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
