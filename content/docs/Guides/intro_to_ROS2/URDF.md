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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYHRBKW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRRUWr5CPMsF8KfewNMHmS6mUAWw%2FQXJFf7NYDDex8AIhAMsbELPyoUAaJhNXYN0NRDgcbHc2HDxGF3ayHeX10zGSKv8DCCkQABoMNjM3NDIzMTgzODA1Igxanr0dOj030%2F0tj%2BMq3ANC6QLJ7JJk7j2jDt6MOMOtRIooLNr%2FQpyfpAa0ftWIhALHn3AkvALZJQh%2F5SY3zQhNOXUnCOBB6kHCHUQPw0KMqnS%2FAbXbPcIx8J4oQ6SHRCNiIflPqC0bNDqmSwxYMn3wpNJtP6Ch5SJyswCcZry5yP7%2FL3IjRt8OlL9xA0g2Vpus1ydBCNZgqc7NYbm5T1XLIDoL4C0P5AwAHwSLIe9%2Fx9E%2BzqVNPTZgrhb9uKerT%2BrjDrKrPm1V3%2BgEIR3wfijmRNGhos%2B85GHO3SmlTTGQYTZItoAtQVQolaV%2B4SSbvEuyV9TMTjX4woPij4l8oOd9hDKhtqf9P1MMe2eUFtJYuZeP4lUNh2GbdileC7TVMj5ohYO2Al6qoHtLtyGw4XcHSG1FQrXIaurvmqjBk1pkDx817WqmtDkbCYnGh8qOb3eY1Mf9lCYW8iC7Wzh%2FTgokVdA1q6mUh8ZSmD61YHPG%2FC%2FEPftARaC2%2FvL5VR140jV%2FtARk6pz0zY2Q4ebDUVTS7T6w8sFrxMWwpIBBod4Wi%2FSQLZyavzsvZuZ9idfmjE5PB1NmIQjJUoRSI%2FH0M1d%2F4UiJ5QwsAkOLZntcBEOTIpw4JdqplzWXWjloDYyUH9tvhoz5T6HaUx8u5zDrzfC9BjqkAYPfvMv%2Bu2CxhUw%2FAeWgh%2FudxTGR2pLNwJR2UrHVeNpdLSmvcd7SmRvx11Eb%2BWR2xO9zH0IprRUxTM3ImVNTbba69EoHDTgYFwpSGfvsSULdFPLHlKa59iVhey6xp1VEn%2BI9LYLPs3BJXHt2YTlq2tbL33EFYos6C50y4o8GQDMkwiw9FuKEZbHrJvItPxOA6PBrqLmt3GRVbS9iRU8oogtkGRhv&X-Amz-Signature=e56d8a10c0399590e8309186af3c6f5c70c27e7db3ae1cb0172dd98f89523317&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYHRBKW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRRUWr5CPMsF8KfewNMHmS6mUAWw%2FQXJFf7NYDDex8AIhAMsbELPyoUAaJhNXYN0NRDgcbHc2HDxGF3ayHeX10zGSKv8DCCkQABoMNjM3NDIzMTgzODA1Igxanr0dOj030%2F0tj%2BMq3ANC6QLJ7JJk7j2jDt6MOMOtRIooLNr%2FQpyfpAa0ftWIhALHn3AkvALZJQh%2F5SY3zQhNOXUnCOBB6kHCHUQPw0KMqnS%2FAbXbPcIx8J4oQ6SHRCNiIflPqC0bNDqmSwxYMn3wpNJtP6Ch5SJyswCcZry5yP7%2FL3IjRt8OlL9xA0g2Vpus1ydBCNZgqc7NYbm5T1XLIDoL4C0P5AwAHwSLIe9%2Fx9E%2BzqVNPTZgrhb9uKerT%2BrjDrKrPm1V3%2BgEIR3wfijmRNGhos%2B85GHO3SmlTTGQYTZItoAtQVQolaV%2B4SSbvEuyV9TMTjX4woPij4l8oOd9hDKhtqf9P1MMe2eUFtJYuZeP4lUNh2GbdileC7TVMj5ohYO2Al6qoHtLtyGw4XcHSG1FQrXIaurvmqjBk1pkDx817WqmtDkbCYnGh8qOb3eY1Mf9lCYW8iC7Wzh%2FTgokVdA1q6mUh8ZSmD61YHPG%2FC%2FEPftARaC2%2FvL5VR140jV%2FtARk6pz0zY2Q4ebDUVTS7T6w8sFrxMWwpIBBod4Wi%2FSQLZyavzsvZuZ9idfmjE5PB1NmIQjJUoRSI%2FH0M1d%2F4UiJ5QwsAkOLZntcBEOTIpw4JdqplzWXWjloDYyUH9tvhoz5T6HaUx8u5zDrzfC9BjqkAYPfvMv%2Bu2CxhUw%2FAeWgh%2FudxTGR2pLNwJR2UrHVeNpdLSmvcd7SmRvx11Eb%2BWR2xO9zH0IprRUxTM3ImVNTbba69EoHDTgYFwpSGfvsSULdFPLHlKa59iVhey6xp1VEn%2BI9LYLPs3BJXHt2YTlq2tbL33EFYos6C50y4o8GQDMkwiw9FuKEZbHrJvItPxOA6PBrqLmt3GRVbS9iRU8oogtkGRhv&X-Amz-Signature=a9e8aeb0c61e78b0632bcb3d386970f2e995fd9d595c1f0e90732ac73c04f7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
