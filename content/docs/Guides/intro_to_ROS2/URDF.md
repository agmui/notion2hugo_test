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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTZYEP6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqJTgAyKpvJlOIQYrD%2BpSXNQT7JgAnuRLCyQlp5a85uwIhANQLqmB8dEssZ8mo95%2B%2FXHsLbuSFp9DdmklKe9eOHUj0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsWgopsohXr2akWbkq3APRK%2BP6EXTrG7D%2FOxZ4JJYpDO%2F560sMv7mrLkfczDV%2BAeOy9j8aYXGy47aLF8kksz5NybiYPRrYQAUDTQZi6MCmd5RQAM4qqsi1o%2Bt3BwL7xE1cYgNpsMUPa6c%2BqHOOt3UuAHMb5bI0nwEMK2AX901pZvCiavNMZx6l2A3MBBwTAKfYHfmlmLI%2BSuh6ih42Yny%2Bd5jc6ZSAKMT58KporthwoTLrPh7vox2%2Fjlm9VTa17w43iWmfkZkpG54XotHVyAzv4U3Hgq0zPoDD2psr5SvLxibfQn9xcssQgXEDlfennbNi0Ylc3%2BAnynDEVBOrESC7iXjm42oBmDQCT9PEcO3kXgZCIQUpdPxVqQ42K5VebRnJ9K94G6MulEEUzf8JGLIz%2Fnf%2FncEELSOpbHdEXPmz1crVRB4VOXR1D6thFu45zgaGtoiG11kiYJFOcEibMDGIPMHy5GHpfJVWN%2Bw6EUnorIgniyKGSjy6kB3zxsJUV6Cq1A0Czt3QzDWS8LHum7g6r7mxgHlPC2HM%2FO5KtbqtcWsnoI9VIil0hR82PCzzQjCMQw8Egr1%2BgiV1GwZ2zTLS1onmkwyr%2BsWRZqB84TJvHgmFKqMEob2OExiX7svtshDFjYiLqlbqQYZSYTCxw56%2BBjqkAbnHEpqgmMXC6Wc8U95HCcg2SwBSflRPLhep0zkPkKZTZwRyFTYYiBqjUsYCz1FycB5Es3VrLmtgAppU%2BPJjuLbwcrrZabtNIdnwyWcvkP%2BQzUfBRA4C%2FFSnmNwG5bEtrx5DR7WDY%2FLBJlu1zILBXtd69pNVEFrM1cg6amzBDTznZ%2FPdfRldrnfiECLjbOWf2sPijdFYpvpRC8q4DLexTedhQdlY&X-Amz-Signature=5e728ffa9674b55fb7ad550d978b2d93ac0fcfd828abf11b9467b8dfa0465b87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTZYEP6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqJTgAyKpvJlOIQYrD%2BpSXNQT7JgAnuRLCyQlp5a85uwIhANQLqmB8dEssZ8mo95%2B%2FXHsLbuSFp9DdmklKe9eOHUj0KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsWgopsohXr2akWbkq3APRK%2BP6EXTrG7D%2FOxZ4JJYpDO%2F560sMv7mrLkfczDV%2BAeOy9j8aYXGy47aLF8kksz5NybiYPRrYQAUDTQZi6MCmd5RQAM4qqsi1o%2Bt3BwL7xE1cYgNpsMUPa6c%2BqHOOt3UuAHMb5bI0nwEMK2AX901pZvCiavNMZx6l2A3MBBwTAKfYHfmlmLI%2BSuh6ih42Yny%2Bd5jc6ZSAKMT58KporthwoTLrPh7vox2%2Fjlm9VTa17w43iWmfkZkpG54XotHVyAzv4U3Hgq0zPoDD2psr5SvLxibfQn9xcssQgXEDlfennbNi0Ylc3%2BAnynDEVBOrESC7iXjm42oBmDQCT9PEcO3kXgZCIQUpdPxVqQ42K5VebRnJ9K94G6MulEEUzf8JGLIz%2Fnf%2FncEELSOpbHdEXPmz1crVRB4VOXR1D6thFu45zgaGtoiG11kiYJFOcEibMDGIPMHy5GHpfJVWN%2Bw6EUnorIgniyKGSjy6kB3zxsJUV6Cq1A0Czt3QzDWS8LHum7g6r7mxgHlPC2HM%2FO5KtbqtcWsnoI9VIil0hR82PCzzQjCMQw8Egr1%2BgiV1GwZ2zTLS1onmkwyr%2BsWRZqB84TJvHgmFKqMEob2OExiX7svtshDFjYiLqlbqQYZSYTCxw56%2BBjqkAbnHEpqgmMXC6Wc8U95HCcg2SwBSflRPLhep0zkPkKZTZwRyFTYYiBqjUsYCz1FycB5Es3VrLmtgAppU%2BPJjuLbwcrrZabtNIdnwyWcvkP%2BQzUfBRA4C%2FFSnmNwG5bEtrx5DR7WDY%2FLBJlu1zILBXtd69pNVEFrM1cg6amzBDTznZ%2FPdfRldrnfiECLjbOWf2sPijdFYpvpRC8q4DLexTedhQdlY&X-Amz-Signature=f6d5dde31e7d865307d67bc218c3497830b782f9b1ffac7a6f694786b66705e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
