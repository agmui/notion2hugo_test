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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3V5HQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCj%2BxQ7RpKJ2r4q2W7nOAylM%2BsmwDYkhxw3%2BhUmFUn9lwIhAPJWmulg06Al0ZqsNBioSKP5E7a4FLMI98ahvGYiRKcOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlMjNewwct95CFvA4q3APolE4czZGaTcWyM6QbY5EhtJGOvOchD5tRamUlOKKZKhcaLph4ij8olRXl5Y0aj17BLkEvu%2FAgbNUgxwzNEvThtnTb4qGPNUEAzw8w7YIDpeqtBOavxBe8vshiha4YaOCgK7x6Ihoz3kQhd%2FDOBN%2BKJpfEb%2FFYOwhjXJSumW3RD%2ByIqT%2BuFUYHkMSM4d6b%2Bz7KOBE%2Bmo9zI6%2FmIxsmTvVvlhBQNQ5ulTyprOA6wzFlZmXdoJ46ovktlCfLw9YdD4vJvDBEZakZ3F1gVRqyEfgGTas5aQq9Ef38%2BmrrKt17dVD8D7kMUUmgWy7x2PrAs8gpJey%2BEfNRBcQ%2FGX4gwaeG87EvcrGMN6XGe5%2B1tkc8TzLXmqFPMd4J3uF1ln5AH7xRsS9c2L5rNeJHT4hfMjXlnyus5K%2FMzDIIBXvKQSPxRtlpHkNwc%2By%2FjK1bsS1uDvvlFAXFhUjJW8z8zCtXUPRNK3ExJpZGqOyzKdIBDZQNJbfYvYHibFyk5bWpumRTXVxvggqYPRQmf9NK%2BRml0oVLFg0NAwzCwZAI9VYVjbiD6h6cPvHSSrnEDg%2BLrUx6uUh8O5yrbeZuL8kYI00Dz5MKQ2dUDuhccqmrbbkhhfX9Mrmg%2F4%2FQ8IXiFiChcDC99tO9BjqkATj7qkRgshElhU3l%2B%2BpYuiNlpJ4ECEEiU2jgMXobJZu1pu2GESIiPGL%2FeSc1sob3r%2FAlfNIg9bIjAVse%2Btm%2BiwJGdHjSZzRMPEYGpXl2uGBHQ1ykgcH7XWMTdzcyzOEvNjyU3FsnJvCtANGLnkv6Vuumt6hoTVuF1607yu8nbqxmy26KCDV4lIlzx4PBn42II6XZ7Msnu6w8%2FIRFRie5LaraBKvO&X-Amz-Signature=1f76c4048a217ebf0dc5c9016c9fabf6d424043eecc523933b0a123927ef8c69&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAE3V5HQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCj%2BxQ7RpKJ2r4q2W7nOAylM%2BsmwDYkhxw3%2BhUmFUn9lwIhAPJWmulg06Al0ZqsNBioSKP5E7a4FLMI98ahvGYiRKcOKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlMjNewwct95CFvA4q3APolE4czZGaTcWyM6QbY5EhtJGOvOchD5tRamUlOKKZKhcaLph4ij8olRXl5Y0aj17BLkEvu%2FAgbNUgxwzNEvThtnTb4qGPNUEAzw8w7YIDpeqtBOavxBe8vshiha4YaOCgK7x6Ihoz3kQhd%2FDOBN%2BKJpfEb%2FFYOwhjXJSumW3RD%2ByIqT%2BuFUYHkMSM4d6b%2Bz7KOBE%2Bmo9zI6%2FmIxsmTvVvlhBQNQ5ulTyprOA6wzFlZmXdoJ46ovktlCfLw9YdD4vJvDBEZakZ3F1gVRqyEfgGTas5aQq9Ef38%2BmrrKt17dVD8D7kMUUmgWy7x2PrAs8gpJey%2BEfNRBcQ%2FGX4gwaeG87EvcrGMN6XGe5%2B1tkc8TzLXmqFPMd4J3uF1ln5AH7xRsS9c2L5rNeJHT4hfMjXlnyus5K%2FMzDIIBXvKQSPxRtlpHkNwc%2By%2FjK1bsS1uDvvlFAXFhUjJW8z8zCtXUPRNK3ExJpZGqOyzKdIBDZQNJbfYvYHibFyk5bWpumRTXVxvggqYPRQmf9NK%2BRml0oVLFg0NAwzCwZAI9VYVjbiD6h6cPvHSSrnEDg%2BLrUx6uUh8O5yrbeZuL8kYI00Dz5MKQ2dUDuhccqmrbbkhhfX9Mrmg%2F4%2FQ8IXiFiChcDC99tO9BjqkATj7qkRgshElhU3l%2B%2BpYuiNlpJ4ECEEiU2jgMXobJZu1pu2GESIiPGL%2FeSc1sob3r%2FAlfNIg9bIjAVse%2Btm%2BiwJGdHjSZzRMPEYGpXl2uGBHQ1ykgcH7XWMTdzcyzOEvNjyU3FsnJvCtANGLnkv6Vuumt6hoTVuF1607yu8nbqxmy26KCDV4lIlzx4PBn42II6XZ7Msnu6w8%2FIRFRie5LaraBKvO&X-Amz-Signature=da252805fb7e1f89e19ef7796428f8eab605cf7824625901265b88e764250eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
