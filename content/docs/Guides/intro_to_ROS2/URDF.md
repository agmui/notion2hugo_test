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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPHLUVK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErkxTYzUzgoZrsJOPVlfVMUu5h258ZJo2LNtGynNuNwAiEAhwi%2FrQ6mqUfsGPbeImax1Aa9vtTBm4ULD5JV6BJ4bOIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNNZTsbeMVT3HK0GLSrcA1Sg7yOPLCJBFkit7wzwrZHmcRkRxB0y5XyKJUax5gqiNpIkbCVB33SqXcisTmivkiEryCnYhGzDdj3FLKifWcM9hOUzH%2FhJBt6SXvVePZeLMt%2FJdweMt8EQQV5%2BAon%2Bv%2FnS1DEgmsABdFMR78QtWv%2BClzm8REp5xemQxZwcUN%2F%2FXmChE%2BuifU62QgkeHE%2Fg5p9X3vB6H5E5izwiC5Di%2BBeve7GvN4UbaRggvDrkmeZ1tmpnA4HP3qCyA9USt4cHoo5x8uo6IqJ5kQuHLNsXrCSABc5zcvR5CNdSxQkZHPopF%2FGLcxTnxmF8mEOSJGsuGlmr2xemWN7ALAEVbyrliRUJphU63gR2bzHSHCIva8kV8Ok89fBz0S4cQ2FhSB0lBRY5HcrNEAnwb8U5YccHGE5Hs2xZOHlON59zTp%2F3G9PIDZqPW6HrOG4kO9Rm0Dqlx2T336wtsOxrHoTIE6Zpfp4OU%2BjWhNrq%2F9UHj4mG%2B%2F%2FG7FuU2YybZhEYGo6yZN0f62cZ4Z0or6sBatClzVvAud9znNvkpVwqT4RSMD9FjUdX2xZutFQUBTB50w4UKXpp6dY%2FlsfyF70LKQEizIvzLf5pUYk1pHU75UMvVHobZP%2F%2BDXG9r7DyFKmkkhACMKj42MEGOqUBAPJEFjezjjaKWkdhGLobtgKvz8tOiZq6x0t46WIeOYmMXQFi2HYaZn%2BLLmJDlRuZPs1W72w%2F3uk2RHmF7I6HkG8fvh0h8ma1NofRXHuasM1Hnvwa%2BgvrV0iZoTUR4KG57ctvhdY6UU0eG54x1O6wohdk7K1%2FGuKHj3UX1n6ibu5G67vG7NaCMWrhX4u2KgtkUBJq%2BS7XzuKeddW%2FnQqU4zktCy4B&X-Amz-Signature=ea29fbf6ef8ab5b54c7ae469f4bc301c78db93df5010e3fd9eaae2eb1cdd567c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TPHLUVK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErkxTYzUzgoZrsJOPVlfVMUu5h258ZJo2LNtGynNuNwAiEAhwi%2FrQ6mqUfsGPbeImax1Aa9vtTBm4ULD5JV6BJ4bOIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNNZTsbeMVT3HK0GLSrcA1Sg7yOPLCJBFkit7wzwrZHmcRkRxB0y5XyKJUax5gqiNpIkbCVB33SqXcisTmivkiEryCnYhGzDdj3FLKifWcM9hOUzH%2FhJBt6SXvVePZeLMt%2FJdweMt8EQQV5%2BAon%2Bv%2FnS1DEgmsABdFMR78QtWv%2BClzm8REp5xemQxZwcUN%2F%2FXmChE%2BuifU62QgkeHE%2Fg5p9X3vB6H5E5izwiC5Di%2BBeve7GvN4UbaRggvDrkmeZ1tmpnA4HP3qCyA9USt4cHoo5x8uo6IqJ5kQuHLNsXrCSABc5zcvR5CNdSxQkZHPopF%2FGLcxTnxmF8mEOSJGsuGlmr2xemWN7ALAEVbyrliRUJphU63gR2bzHSHCIva8kV8Ok89fBz0S4cQ2FhSB0lBRY5HcrNEAnwb8U5YccHGE5Hs2xZOHlON59zTp%2F3G9PIDZqPW6HrOG4kO9Rm0Dqlx2T336wtsOxrHoTIE6Zpfp4OU%2BjWhNrq%2F9UHj4mG%2B%2F%2FG7FuU2YybZhEYGo6yZN0f62cZ4Z0or6sBatClzVvAud9znNvkpVwqT4RSMD9FjUdX2xZutFQUBTB50w4UKXpp6dY%2FlsfyF70LKQEizIvzLf5pUYk1pHU75UMvVHobZP%2F%2BDXG9r7DyFKmkkhACMKj42MEGOqUBAPJEFjezjjaKWkdhGLobtgKvz8tOiZq6x0t46WIeOYmMXQFi2HYaZn%2BLLmJDlRuZPs1W72w%2F3uk2RHmF7I6HkG8fvh0h8ma1NofRXHuasM1Hnvwa%2BgvrV0iZoTUR4KG57ctvhdY6UU0eG54x1O6wohdk7K1%2FGuKHj3UX1n6ibu5G67vG7NaCMWrhX4u2KgtkUBJq%2BS7XzuKeddW%2FnQqU4zktCy4B&X-Amz-Signature=b24fec9e141f81a314b96320edf6e16de656fbb15ea8694d31b472357d995ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
