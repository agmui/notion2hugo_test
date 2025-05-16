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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MIN2J4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVPsYcHbp078OHM42EmiPudWT4lEg7RlqweUjX2mb3OAiAB43rQ79QAG5Ej3PLMaGSomSMEoT3bCStnrTcZZo%2FD0yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM11vIOx2nzbPB3tUVKtwDWzcUb2WZB9YzwPlKH0x9YuaOnML24ZrZjCdx3YKHibMA%2FxKUd8%2B7YMH%2F9XSndVOv%2FIE5haSrVlwSuFaT1MHFuua4s%2FIPpBrzL6Fg4gtK0HKWiW3JOBKOFYVGR1G7MoJt4WugilARhKjFhCPiHz97%2FNhFLQKxRNCOybtdhU15gSnKFwFSCVIoD3mEvIeDRRL3etDC9VhtV2ERusZIkJQk7aSpEuulqptZD3TgYks34lfyHeHhPK8k0YEDTIFMxt8OB1NgR0N5jObuTUnHJ1oFuqdAkSQx0yTWaFMHfyK0TQ2NmT%2BWFaKZg7Qi2vuHA5gdFYvzgPHwuneY4JsqHxzfQ6dENg8wkKItx3hhuZX%2FRVnbmERZ%2FaFubJqPWK652F88AohTFXcU5UlFuHLR07NXRd%2FAs%2BeCbA261QjJiWAPRApyOa9RUHqRAHCDuwy%2FLNhwxdXO8swy7oSbXXKvk9OPFsUohTP1PqWmE6LX2TtEYo1oe4jAmpCgw00s5LBRV8B0e0VQKScZU%2B8MdYc69x856YCto63ZRe1thY7OjX2HZuy%2F7B03nr3byZzmMN8soyIhtgec09MLmqYEu8FOpNttOI0MlGiKzKUp1FpNMMh8aeThMArnc5A8mrcrWVQw5vWdwQY6pgGvTJX8CGkvRn6%2FScGPJZsAE8F0yn9ZjIS6OS8D8SESBmyfABTQSPA0C33wbZS5obkQUqTq3FhfT4U1riJQX9hCsUi8Bzl2ArJOrfIsHNLu4%2F7hGA0xSYlPFZkvkpOwjRty9JU7O0v4xEq9wP2VsaUG21r3nJ4PWw1MtKUb1OG66ewXNVvSXeggy8FL6QMPBlfV63WMsX8LgErwOXYTy6lGQMCI7lwM&X-Amz-Signature=51df2ebd40d9beb608bedd5b9bb95d091f94e2bddb614a14714996243c2fb81b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MIN2J4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVPsYcHbp078OHM42EmiPudWT4lEg7RlqweUjX2mb3OAiAB43rQ79QAG5Ej3PLMaGSomSMEoT3bCStnrTcZZo%2FD0yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM11vIOx2nzbPB3tUVKtwDWzcUb2WZB9YzwPlKH0x9YuaOnML24ZrZjCdx3YKHibMA%2FxKUd8%2B7YMH%2F9XSndVOv%2FIE5haSrVlwSuFaT1MHFuua4s%2FIPpBrzL6Fg4gtK0HKWiW3JOBKOFYVGR1G7MoJt4WugilARhKjFhCPiHz97%2FNhFLQKxRNCOybtdhU15gSnKFwFSCVIoD3mEvIeDRRL3etDC9VhtV2ERusZIkJQk7aSpEuulqptZD3TgYks34lfyHeHhPK8k0YEDTIFMxt8OB1NgR0N5jObuTUnHJ1oFuqdAkSQx0yTWaFMHfyK0TQ2NmT%2BWFaKZg7Qi2vuHA5gdFYvzgPHwuneY4JsqHxzfQ6dENg8wkKItx3hhuZX%2FRVnbmERZ%2FaFubJqPWK652F88AohTFXcU5UlFuHLR07NXRd%2FAs%2BeCbA261QjJiWAPRApyOa9RUHqRAHCDuwy%2FLNhwxdXO8swy7oSbXXKvk9OPFsUohTP1PqWmE6LX2TtEYo1oe4jAmpCgw00s5LBRV8B0e0VQKScZU%2B8MdYc69x856YCto63ZRe1thY7OjX2HZuy%2F7B03nr3byZzmMN8soyIhtgec09MLmqYEu8FOpNttOI0MlGiKzKUp1FpNMMh8aeThMArnc5A8mrcrWVQw5vWdwQY6pgGvTJX8CGkvRn6%2FScGPJZsAE8F0yn9ZjIS6OS8D8SESBmyfABTQSPA0C33wbZS5obkQUqTq3FhfT4U1riJQX9hCsUi8Bzl2ArJOrfIsHNLu4%2F7hGA0xSYlPFZkvkpOwjRty9JU7O0v4xEq9wP2VsaUG21r3nJ4PWw1MtKUb1OG66ewXNVvSXeggy8FL6QMPBlfV63WMsX8LgErwOXYTy6lGQMCI7lwM&X-Amz-Signature=3e12f892495d177e5e15bfc2b1a6cacc5cc4f9ba762c43a4d52de6d3977bec2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
