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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCNSX2M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F46Wp%2FS0VmYUxUu76ACSK%2BoJM3Sd9r%2BL7gtueinVEUAiEAn4wiXE%2FTw6wPF%2FuW6vAOtAb5Ksvz8nLiFe%2B6Z1hJ7ocq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMqz1SvQH0Qye298IyrcA8SfPcQETHGuTHtAExDXVJr7SYrVJc1hsOd6H613JIRL5GRBaSJdjjDg8J2HDN0Q3ubzYiyHZq5u9ZiSA2CoLDbIPGzaJylOdzYt85tNlRjmMRI7v1G6wBYragvgjac6Qtx3JgD5OZaG8MxHlw9am4ha1p4zYdqfUsY1i7znPSH4O6v1X8aKozg0Mc3N8mxZOIunmu0MZ2fZTH1gh148bIoVsJYyGXLchc0tEDaNhtVr99TXcYk8NtmNFT9e97vhqVJu4jLn1jxciRBDeIU99LN2x8WS%2FZhNqQqHXYlHc0YCYLh8%2FVSWRddv1Ysqxz%2FPinwP9Je57vW%2Fkvdsh5lbnN3Tt4FKbRffhLi1UPn%2B95BKlbj8Z%2FF5WyFtVAlA8k%2BscHZQ5FOtxDxJsmwAo4%2BUPEzm5GjLgqktnUguFA%2FvIRfUUTJBD1BscJ33d9dY%2BGaYWH4oCGxkU5bJ1UjhpxrnoigHPW5av87mu1lT6JImMvG1As%2Fv7SNRwHMJ4oNA7sTJJnZ3arjgfgczq9kHNzQlOolM81lMfDMO7LJ1Xwb4fWNByAfTS%2Fccuo7CSCb%2B72MwPzvQr%2BzUJERNK43WDm8fdOCWuf6H8JNf53mp%2BNr4OgxSyq8sGFMCp9a7%2BUjCMI%2BRpr4GOqUB2eqYqSQhjuODhCEUVfs5o%2BBO4PaWH%2FLdxDRJlgPLXPA0plZcybdQ9uWTiLDfsd1WcAKbudjGYIJTCEGOJYxxeZuue%2B2yCuAYukoAk50V8E3VEHBqHNyS7q61qHf4UquYQaa9Z%2FR7KHIL0Jhy%2FXmDhmkoO9w01epXzGsY7xpRsVq1yJFLWPc8liZ1%2Bl2xzAyQtDqia3XkPZC9yEitJASGcXUHcjq4&X-Amz-Signature=4eff18b339a76b287842c32dc1799a29e7a170058298a0fbb023cd3b813213a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCNSX2M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F46Wp%2FS0VmYUxUu76ACSK%2BoJM3Sd9r%2BL7gtueinVEUAiEAn4wiXE%2FTw6wPF%2FuW6vAOtAb5Ksvz8nLiFe%2B6Z1hJ7ocq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMqz1SvQH0Qye298IyrcA8SfPcQETHGuTHtAExDXVJr7SYrVJc1hsOd6H613JIRL5GRBaSJdjjDg8J2HDN0Q3ubzYiyHZq5u9ZiSA2CoLDbIPGzaJylOdzYt85tNlRjmMRI7v1G6wBYragvgjac6Qtx3JgD5OZaG8MxHlw9am4ha1p4zYdqfUsY1i7znPSH4O6v1X8aKozg0Mc3N8mxZOIunmu0MZ2fZTH1gh148bIoVsJYyGXLchc0tEDaNhtVr99TXcYk8NtmNFT9e97vhqVJu4jLn1jxciRBDeIU99LN2x8WS%2FZhNqQqHXYlHc0YCYLh8%2FVSWRddv1Ysqxz%2FPinwP9Je57vW%2Fkvdsh5lbnN3Tt4FKbRffhLi1UPn%2B95BKlbj8Z%2FF5WyFtVAlA8k%2BscHZQ5FOtxDxJsmwAo4%2BUPEzm5GjLgqktnUguFA%2FvIRfUUTJBD1BscJ33d9dY%2BGaYWH4oCGxkU5bJ1UjhpxrnoigHPW5av87mu1lT6JImMvG1As%2Fv7SNRwHMJ4oNA7sTJJnZ3arjgfgczq9kHNzQlOolM81lMfDMO7LJ1Xwb4fWNByAfTS%2Fccuo7CSCb%2B72MwPzvQr%2BzUJERNK43WDm8fdOCWuf6H8JNf53mp%2BNr4OgxSyq8sGFMCp9a7%2BUjCMI%2BRpr4GOqUB2eqYqSQhjuODhCEUVfs5o%2BBO4PaWH%2FLdxDRJlgPLXPA0plZcybdQ9uWTiLDfsd1WcAKbudjGYIJTCEGOJYxxeZuue%2B2yCuAYukoAk50V8E3VEHBqHNyS7q61qHf4UquYQaa9Z%2FR7KHIL0Jhy%2FXmDhmkoO9w01epXzGsY7xpRsVq1yJFLWPc8liZ1%2Bl2xzAyQtDqia3XkPZC9yEitJASGcXUHcjq4&X-Amz-Signature=076d760d48ac22bea1a14e6f5675c27dd14d1540ea3a37aa41938f1d7a409439&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
