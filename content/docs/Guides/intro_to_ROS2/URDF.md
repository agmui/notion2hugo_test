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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HK4BQXG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnLLw8luQd8ek%2BmsRNMVO4MHB0SO3CWxWMNX2oBj52IQIgNSWAL68R8DXRnEUpZrs4PLLLeOPwexLd1pba6mikfgUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlfPiF4Q9pm0RJZ8CrcA5EQhC36KQ0bW3rQZAFiTLJ4mTnEHr7tQyGoGpmqE6lJTSnCoylrl6R23T0P2KQSgICKQQYUbCvedYO1cOF5zyLg4fjW31Pc5BgtJaEdGy%2BPz5BiFHJr9QZHy1f7XjHAWnglR%2Fu9LUa98xQHVlUyCsQ8VgdLMkxqFG5gFTSR7qxyAYjaYFcRhK3lFNL2LGajO%2BuhF38D26yaPvTkP2ENABZIYuN5XvNtvR6du907ZKUs1aOHrFHqmLkZhareKttWs01u3sFUPaqlFqNdo5H2d84Z53WMxtRhLVEwBsr%2BYBV8J7j3K2nJm0Wxs5REhcZwjn73W3rMBozUtwcw%2ByRZ4gJRxCinJmjT1LwfgfE0tj%2F5yUBOhESDz4VxOxg%2Fzs1N1jGduWPMq1xBkQgDoOfmOtk4H%2BblNHT4Z6Jds7hzaB2%2FTlxxNyFLS6ypowLu5UO90mtPrJJmwISxO4lMjEapS6jSBpsnUjmti0CyOPXOSr37RsxLnt8qbP484SKM6puXKRLse1pmegZL5Ex4N8jsiyaHCx5pE%2FsoO1navFuIiD3KKxdCiHyD2WXU%2FO2OGv9hJtDguPCLX9bAiXDBLo7Bp2cMew2Zy1V8uFQFIRnN%2FXkaLS59kyaLbTWnOmrnMNOQhb8GOqUBDOroBBtB7nzcD1SKORcPCpWpGJWwCA1NUO%2FNEP883ZDfyWzRwxwddusPhqLEF%2Bk1Ad%2BaNiLE758uB1FrHqJU%2F6Hz%2Fc2ZQKQnZPIFvGoEBZ5%2Bgw3wLl84LUycRUQgeNT7Cksm8GBsP03a2H9Y38ZWRqYayo6shwbXhPzZlqp4bXeHtmIK3L90cApHGrlY%2BSCt0wBuJO0rQ5px%2BBHmRCRpFC%2FKqFgW&X-Amz-Signature=1cebd4109f66178c86f87d1073bd316a3095daf6de332ae39ba28ba183a0854e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HK4BQXG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnLLw8luQd8ek%2BmsRNMVO4MHB0SO3CWxWMNX2oBj52IQIgNSWAL68R8DXRnEUpZrs4PLLLeOPwexLd1pba6mikfgUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlfPiF4Q9pm0RJZ8CrcA5EQhC36KQ0bW3rQZAFiTLJ4mTnEHr7tQyGoGpmqE6lJTSnCoylrl6R23T0P2KQSgICKQQYUbCvedYO1cOF5zyLg4fjW31Pc5BgtJaEdGy%2BPz5BiFHJr9QZHy1f7XjHAWnglR%2Fu9LUa98xQHVlUyCsQ8VgdLMkxqFG5gFTSR7qxyAYjaYFcRhK3lFNL2LGajO%2BuhF38D26yaPvTkP2ENABZIYuN5XvNtvR6du907ZKUs1aOHrFHqmLkZhareKttWs01u3sFUPaqlFqNdo5H2d84Z53WMxtRhLVEwBsr%2BYBV8J7j3K2nJm0Wxs5REhcZwjn73W3rMBozUtwcw%2ByRZ4gJRxCinJmjT1LwfgfE0tj%2F5yUBOhESDz4VxOxg%2Fzs1N1jGduWPMq1xBkQgDoOfmOtk4H%2BblNHT4Z6Jds7hzaB2%2FTlxxNyFLS6ypowLu5UO90mtPrJJmwISxO4lMjEapS6jSBpsnUjmti0CyOPXOSr37RsxLnt8qbP484SKM6puXKRLse1pmegZL5Ex4N8jsiyaHCx5pE%2FsoO1navFuIiD3KKxdCiHyD2WXU%2FO2OGv9hJtDguPCLX9bAiXDBLo7Bp2cMew2Zy1V8uFQFIRnN%2FXkaLS59kyaLbTWnOmrnMNOQhb8GOqUBDOroBBtB7nzcD1SKORcPCpWpGJWwCA1NUO%2FNEP883ZDfyWzRwxwddusPhqLEF%2Bk1Ad%2BaNiLE758uB1FrHqJU%2F6Hz%2Fc2ZQKQnZPIFvGoEBZ5%2Bgw3wLl84LUycRUQgeNT7Cksm8GBsP03a2H9Y38ZWRqYayo6shwbXhPzZlqp4bXeHtmIK3L90cApHGrlY%2BSCt0wBuJO0rQ5px%2BBHmRCRpFC%2FKqFgW&X-Amz-Signature=148797e05306b9d0ddfeb8dca400b1ad665c87cf87c1487f8e05e2cf148be47c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
