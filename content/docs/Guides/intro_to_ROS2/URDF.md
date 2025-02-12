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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGYDYKC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGnSM8esAeDOx%2FNiiZZEFyzGcpWQ43dmRYwaMqJCArJAiEAwM5QSvsXNiD5N74wnaj13pOn%2Fre8NZWNOjN5Kz8AQTEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdlCCR4QEXyO89slSrcAxqF9IdHKcBS4lUyvpZMhUA%2FG7R9gsc1NYXE%2FO2e4GJedlBUaTy5V4arczTS6BU8PZBpjX13%2BDz42KDSAAALhIQIElbyCHLcaRP47maPeL6QniRQChvgw75CZJnGywQSuVz3e4A64zSF4j9b0HUKCgVuX4A4o9z4xC8m1rajrK2%2BQFZStrf88QD57C4YVeBsTr6%2BhVgBbViJOp747bdwif0i8ZnDCaYLEF3IP%2FPCeQ5jFOc1sF00kskVlKTficAxkaJTNlwB%2FLrmrjWPW8W%2BgROlr4XvdjtVaxpwXfOJ1wmzTtoB6vudwfGNG%2FqMyqt6xOi%2FcNEEDvUVPSLQDx8M3i7V80ueHmC4Y6srzv1GTBVaFoZmuW91Kvmshffs%2FNCmJIpY8ZpStCH%2FXUYcUTnTXWT2ZhFeyrYlwVtSgG9Or7ClM70Mangwqu221vb7j0DvCA5wocAPEp0lGZ99jvOWCrkLq5cgLNanjZRqMtlmhtis4GOSGBYQ1iifcrjg7WdmkwDAQMgsDUuDGdQfRxJaVNdyvDOXIDrFXCE0TOyZs%2Fm9CYdleL84g%2FB2zJNgM16MmNbpGPwN8T%2BcVMEgwQ0tV3auOHkQOYyFCu3KMfisZAz9hDFP8e%2BD54TEnkw3MOiusr0GOqUBNhM4BLMg60%2F11RsFDhCbRdcLFDptjyp1pJ%2BnuV0v4TFIL72%2BHbpE%2BYtH5kCQJxnXNTXseoZNi%2F5rZBXG%2FnB7P2bZHEYoXkxLIqmMxVQMXgnPpLjhlyHteulH30Wo%2BClXhItPkKxirU%2FMZDywoqHNe3MaPQ4gSX9r0RPFA%2BoZxiWC8I2FYUNqJL7SVLvZOG4sI22%2Fech3Z%2B4ecoOY66YSKmq4yC%2BX&X-Amz-Signature=4ff68c203a05cb282029b6efc1b5a2294994bafc73922ce34f992331b7232548&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CGYDYKC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGnSM8esAeDOx%2FNiiZZEFyzGcpWQ43dmRYwaMqJCArJAiEAwM5QSvsXNiD5N74wnaj13pOn%2Fre8NZWNOjN5Kz8AQTEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdlCCR4QEXyO89slSrcAxqF9IdHKcBS4lUyvpZMhUA%2FG7R9gsc1NYXE%2FO2e4GJedlBUaTy5V4arczTS6BU8PZBpjX13%2BDz42KDSAAALhIQIElbyCHLcaRP47maPeL6QniRQChvgw75CZJnGywQSuVz3e4A64zSF4j9b0HUKCgVuX4A4o9z4xC8m1rajrK2%2BQFZStrf88QD57C4YVeBsTr6%2BhVgBbViJOp747bdwif0i8ZnDCaYLEF3IP%2FPCeQ5jFOc1sF00kskVlKTficAxkaJTNlwB%2FLrmrjWPW8W%2BgROlr4XvdjtVaxpwXfOJ1wmzTtoB6vudwfGNG%2FqMyqt6xOi%2FcNEEDvUVPSLQDx8M3i7V80ueHmC4Y6srzv1GTBVaFoZmuW91Kvmshffs%2FNCmJIpY8ZpStCH%2FXUYcUTnTXWT2ZhFeyrYlwVtSgG9Or7ClM70Mangwqu221vb7j0DvCA5wocAPEp0lGZ99jvOWCrkLq5cgLNanjZRqMtlmhtis4GOSGBYQ1iifcrjg7WdmkwDAQMgsDUuDGdQfRxJaVNdyvDOXIDrFXCE0TOyZs%2Fm9CYdleL84g%2FB2zJNgM16MmNbpGPwN8T%2BcVMEgwQ0tV3auOHkQOYyFCu3KMfisZAz9hDFP8e%2BD54TEnkw3MOiusr0GOqUBNhM4BLMg60%2F11RsFDhCbRdcLFDptjyp1pJ%2BnuV0v4TFIL72%2BHbpE%2BYtH5kCQJxnXNTXseoZNi%2F5rZBXG%2FnB7P2bZHEYoXkxLIqmMxVQMXgnPpLjhlyHteulH30Wo%2BClXhItPkKxirU%2FMZDywoqHNe3MaPQ4gSX9r0RPFA%2BoZxiWC8I2FYUNqJL7SVLvZOG4sI22%2Fech3Z%2B4ecoOY66YSKmq4yC%2BX&X-Amz-Signature=fd846d9e488465a523d636ff56c8b7a03ccca990c2b4bf87e5ce5780abafc586&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
