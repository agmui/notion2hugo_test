---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGC6YFC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCb8yBMKLxONnEStRfGinh6ONLTjiJjHxCZbYBwFDEv6gIhAPhrGS1kNoXug6wlC%2Fsugk73czacD7gsa8gTXTy4M4BuKv8DCGcQABoMNjM3NDIzMTgzODA1IgyHsy%2Fm3PS9yziIdV8q3AMXIJeTwMoyO0Z3zNhNjc7PQxzpSszB%2Frm%2Fq%2F9LiEnMyoNj78S4OkuzQH8LzmW%2BJy471c4yO4FDgNJtips%2Fqarm%2FIXV1ffqj3BODrEHI1QZDHsutiLESPEk3rIFgooJcNUAaGEm5fkDLcn8Fzhzaky%2FwgTaDHhPVkk4XX8rmaX2uQdydZS84WEfgHj3Ife6f40kl3e4PEbil1tEf61LSG%2Ft3dNtOPM3IDgN6V20PIw2QAWcqN%2FBQrCmVVCdv9ufLmQL6mWLWuE8Y7tz2QHIkOaxRC0oz37Tqx4FwL%2BZDznWHJxTf7IsRf7sBb%2FOdKwLblywR%2BRonKGV9AQu7Y4qmTe4%2F%2BzMW6n%2FkbRWDz3Wab%2FgSCxSfZlJtBqLWLL9SoGSE4nLHfx5xdMWVG2LoMEpMcvHU0R6FI4mLew%2BvJ2McAFBHi4178O6mhVaSXEH6r0%2Fe3DvCyyB5YPU0r0d5Fz%2Bj1jFogGD3dmf9L5QwZsGOrnyqOqJSlRRa5PLgdO8juQWoVu0KzNXVrxQ89xlP26toqcFZMSOhKjUZghdFQFDYzKoWvXFSFWyOBR%2F5RqELKqh22S2rzbwVjihMaw4Id1el6iXbAsBMKeB6mE%2FCcVb%2Fofj0WkaMZbTRTVdgG18oDCd2P7EBjqkAdcHWytwdbuoxkSCLLhDiYPUiWqsJ36sBPcEK%2Fmuh%2Fc%2FxKJBazrgZnPvlElfTSAGUcrS436l0j33rPjj1ulFRrYQwIAOo4UulDviiL5Fai3zv3Cjf6JGy%2FI6opQIr19xS7ru%2FD8i4Piba0PF6sYpazy5oAq09%2BZ3ezl3NVzKJhZkmJbNHlOc81ig4sGqtThyzCsw75PMselM2Z1oaYXQ6asxYIeb&X-Amz-Signature=53ac8532faed55ff05a79dad10ea080cc147bc4e9919a08346741475384f71ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGC6YFC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCb8yBMKLxONnEStRfGinh6ONLTjiJjHxCZbYBwFDEv6gIhAPhrGS1kNoXug6wlC%2Fsugk73czacD7gsa8gTXTy4M4BuKv8DCGcQABoMNjM3NDIzMTgzODA1IgyHsy%2Fm3PS9yziIdV8q3AMXIJeTwMoyO0Z3zNhNjc7PQxzpSszB%2Frm%2Fq%2F9LiEnMyoNj78S4OkuzQH8LzmW%2BJy471c4yO4FDgNJtips%2Fqarm%2FIXV1ffqj3BODrEHI1QZDHsutiLESPEk3rIFgooJcNUAaGEm5fkDLcn8Fzhzaky%2FwgTaDHhPVkk4XX8rmaX2uQdydZS84WEfgHj3Ife6f40kl3e4PEbil1tEf61LSG%2Ft3dNtOPM3IDgN6V20PIw2QAWcqN%2FBQrCmVVCdv9ufLmQL6mWLWuE8Y7tz2QHIkOaxRC0oz37Tqx4FwL%2BZDznWHJxTf7IsRf7sBb%2FOdKwLblywR%2BRonKGV9AQu7Y4qmTe4%2F%2BzMW6n%2FkbRWDz3Wab%2FgSCxSfZlJtBqLWLL9SoGSE4nLHfx5xdMWVG2LoMEpMcvHU0R6FI4mLew%2BvJ2McAFBHi4178O6mhVaSXEH6r0%2Fe3DvCyyB5YPU0r0d5Fz%2Bj1jFogGD3dmf9L5QwZsGOrnyqOqJSlRRa5PLgdO8juQWoVu0KzNXVrxQ89xlP26toqcFZMSOhKjUZghdFQFDYzKoWvXFSFWyOBR%2F5RqELKqh22S2rzbwVjihMaw4Id1el6iXbAsBMKeB6mE%2FCcVb%2Fofj0WkaMZbTRTVdgG18oDCd2P7EBjqkAdcHWytwdbuoxkSCLLhDiYPUiWqsJ36sBPcEK%2Fmuh%2Fc%2FxKJBazrgZnPvlElfTSAGUcrS436l0j33rPjj1ulFRrYQwIAOo4UulDviiL5Fai3zv3Cjf6JGy%2FI6opQIr19xS7ru%2FD8i4Piba0PF6sYpazy5oAq09%2BZ3ezl3NVzKJhZkmJbNHlOc81ig4sGqtThyzCsw75PMselM2Z1oaYXQ6asxYIeb&X-Amz-Signature=7063573b96c5e42d79dc357fb6504846452ed81ae521d568955973f7567d3355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
