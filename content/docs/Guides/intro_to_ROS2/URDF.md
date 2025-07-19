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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGGN5FJ6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnQUjeFZgbAhwr7rT4Sln0j3j4x7FblKQmB1Jb5hPu4gIgObaV%2FC5l%2F8S8iWIo0cH%2BMdMCTvnBT6xzTg2wbKbn7lQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfrtXk2ULI%2Br4hMgyrcAzlRhiIeanP9jdXgZcKGKDkOEJtPmfrwnwARfyBM36wfA1qTjPU2KvSiaIJfQrKiCrFxhiPm6SsxZqq1SDfqdWWQT60AZAAk%2B9gRMpHD%2BjbCsuJYwdmId0ynwIDAKrRY0Io66HgJV1ZzUYJgXssWCpmxisB5x3kT3ycmVE88FVEWZzXRCt1zWNnmcEax4SkLw4W1sDFr6ujHXIpitMvdFgB9sJf1DYYla4KIMftYico%2FW91UrybheLgyTpOWNO8bU4ZvAPdzUnWcfvXkUBxKykmLOJfQLLriYbyHQMCp8ZFE1C23JrjYWX9sgxWovr2CN6FA%2FuuUWmcFxL8EQxef2gLhXgci%2FiqsogsbLnSF6S%2BgXbW%2F9clc880IjSenOMdWyNNVyFirwybd6d93G5ATV%2FsZ0XUgO8ylvmpeeJRMLoww0f0NHfhvSGRLyK7AK%2F7ueqqvMVe6Dw5pyim41b4JsNnH8TIp3vArox%2FDkHgt9tU%2BlI0a5%2BjtjBgJ1ijX67F24xLlF5R5g6an0TnO275oLtkj592lvcDimJY1LEDSu7n0g9RCkRj2wZOgaHx0AUw4SPnVH4vvmuuyhXny6quWw1lDbQxXr3m40T5ay4OvezfAIGwbCaya9%2BRcvOV2MKe47sMGOqUB14X5Uyf8Je5%2BH4RvQ10SRYR75EitUNkB3twRG3AQRzYkNanzjdJ832A80zaykOZVs3eEI7uYenQbvx%2FYrSjcOgnxM228H2Lo0hb2bJ8JercAex48OHXLXRcVgVCgk4JvpmDDVPFrc84kJgj8W02IFE6qR4OGLeOx%2BUTHUW%2BADDeI%2FTiQUUVipflgP0XWXeoahy%2BE7luZPY1m2l3X3i%2B60G%2BUCYL2&X-Amz-Signature=f847cf102182ad6c39adcb2e611d2ed0171730011a1fa7098262d447463319d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGGN5FJ6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnQUjeFZgbAhwr7rT4Sln0j3j4x7FblKQmB1Jb5hPu4gIgObaV%2FC5l%2F8S8iWIo0cH%2BMdMCTvnBT6xzTg2wbKbn7lQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfrtXk2ULI%2Br4hMgyrcAzlRhiIeanP9jdXgZcKGKDkOEJtPmfrwnwARfyBM36wfA1qTjPU2KvSiaIJfQrKiCrFxhiPm6SsxZqq1SDfqdWWQT60AZAAk%2B9gRMpHD%2BjbCsuJYwdmId0ynwIDAKrRY0Io66HgJV1ZzUYJgXssWCpmxisB5x3kT3ycmVE88FVEWZzXRCt1zWNnmcEax4SkLw4W1sDFr6ujHXIpitMvdFgB9sJf1DYYla4KIMftYico%2FW91UrybheLgyTpOWNO8bU4ZvAPdzUnWcfvXkUBxKykmLOJfQLLriYbyHQMCp8ZFE1C23JrjYWX9sgxWovr2CN6FA%2FuuUWmcFxL8EQxef2gLhXgci%2FiqsogsbLnSF6S%2BgXbW%2F9clc880IjSenOMdWyNNVyFirwybd6d93G5ATV%2FsZ0XUgO8ylvmpeeJRMLoww0f0NHfhvSGRLyK7AK%2F7ueqqvMVe6Dw5pyim41b4JsNnH8TIp3vArox%2FDkHgt9tU%2BlI0a5%2BjtjBgJ1ijX67F24xLlF5R5g6an0TnO275oLtkj592lvcDimJY1LEDSu7n0g9RCkRj2wZOgaHx0AUw4SPnVH4vvmuuyhXny6quWw1lDbQxXr3m40T5ay4OvezfAIGwbCaya9%2BRcvOV2MKe47sMGOqUB14X5Uyf8Je5%2BH4RvQ10SRYR75EitUNkB3twRG3AQRzYkNanzjdJ832A80zaykOZVs3eEI7uYenQbvx%2FYrSjcOgnxM228H2Lo0hb2bJ8JercAex48OHXLXRcVgVCgk4JvpmDDVPFrc84kJgj8W02IFE6qR4OGLeOx%2BUTHUW%2BADDeI%2FTiQUUVipflgP0XWXeoahy%2BE7luZPY1m2l3X3i%2B60G%2BUCYL2&X-Amz-Signature=bcc0d0e806095c3a56b4d7145313e2bbd548999a60c13dede50bd6a1ee1ffbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
