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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JVBCV4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIxsLxuMDEYVUdK0AjzF6xomqotf3a%2FiYsHoaV2hPYJAIhAOFS%2FeQTi1oUjNuTUs32YOApOm9rUUX%2F0pKOLKdE%2F%2BjPKv8DCBAQABoMNjM3NDIzMTgzODA1IgxU8T4QpEgOq4X7PT0q3AOFpXzxHUtdMTzyu9u25sg88rP%2FX5hMhz0YI%2B1GMlXPLo66MJdsm0npjs0h%2F%2BIViqFCryhXhhFZcUCaAK15cmsmnewFL6ugUCH1SqqNUVyNJ55JjqmZBLA7Nuqah2%2Bvb2oj8J0JmebWEyyrTovtfcopjYSnEbFDrC%2FsR5tvC5x5xjPCYgoHmwSvdnPGq41gi2DWJCU60bmk1HMbw2B8OR%2FC3MOo7AZseFb2RPXk%2FOUGz5L%2FeJ8vI6evKMuP9WYnYu4s3o%2BhWQAoEyv4fbLGxG6mJYAA1NqpCMwjUkAmcU%2F1RAVqH7xdfIQLChyI8lUzYZnGo2GjiTbw1P5aLDV%2BTyoERHoSXOTkvC%2FcAeDAPw5Ts6se7hM7QS57qx2zMQWmFaS3pGlCTkMQY3x68E%2BwUEb3rm%2BPXAnAxU2X0WDW%2FwB4wp8yORthDSDdj0PslGLnjL5wuxWqGmzQErufZBDhe3DPZZf8v8oHXrx%2BEv9LoKISGIBwU4Ba%2BCqmefTjP1qtBqF638q0jEe9gIrnFCIBngTOGX6P5STR2OwnvoVoJaLyx6km28JOlS1Ka7ZeST9SJTaHi1Zjb6bmbI4yaQkPBweNON5Rx8K4bx5GgHajv55SfAoIiW4GkRcq2Q0NXzDIpM3DBjqkAeNYlmib20cVwOB5sUsOKhF6xKkunqQq692ixW8Gas8aQRvYDgcbhSnXYAM9U6ZMTUtjlhNJsLrB6GYe7TX6KV1%2FX15nobNkFhzP3Uf76CgXehNCRTfJvKePTYrOcxbiAEJYsHz5vXeazd8t6ajLm7B9502nvObtSQeJT0za%2B50mxd2wL7tbEA5J383mqNWanl463RQQWbkmAZOvdLal%2F3mspqPL&X-Amz-Signature=54160b8a4b66eef73d2026acd63c5fbaa02e5e3a7a9b28f9a3d42cac7e3132c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JVBCV4U%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIxsLxuMDEYVUdK0AjzF6xomqotf3a%2FiYsHoaV2hPYJAIhAOFS%2FeQTi1oUjNuTUs32YOApOm9rUUX%2F0pKOLKdE%2F%2BjPKv8DCBAQABoMNjM3NDIzMTgzODA1IgxU8T4QpEgOq4X7PT0q3AOFpXzxHUtdMTzyu9u25sg88rP%2FX5hMhz0YI%2B1GMlXPLo66MJdsm0npjs0h%2F%2BIViqFCryhXhhFZcUCaAK15cmsmnewFL6ugUCH1SqqNUVyNJ55JjqmZBLA7Nuqah2%2Bvb2oj8J0JmebWEyyrTovtfcopjYSnEbFDrC%2FsR5tvC5x5xjPCYgoHmwSvdnPGq41gi2DWJCU60bmk1HMbw2B8OR%2FC3MOo7AZseFb2RPXk%2FOUGz5L%2FeJ8vI6evKMuP9WYnYu4s3o%2BhWQAoEyv4fbLGxG6mJYAA1NqpCMwjUkAmcU%2F1RAVqH7xdfIQLChyI8lUzYZnGo2GjiTbw1P5aLDV%2BTyoERHoSXOTkvC%2FcAeDAPw5Ts6se7hM7QS57qx2zMQWmFaS3pGlCTkMQY3x68E%2BwUEb3rm%2BPXAnAxU2X0WDW%2FwB4wp8yORthDSDdj0PslGLnjL5wuxWqGmzQErufZBDhe3DPZZf8v8oHXrx%2BEv9LoKISGIBwU4Ba%2BCqmefTjP1qtBqF638q0jEe9gIrnFCIBngTOGX6P5STR2OwnvoVoJaLyx6km28JOlS1Ka7ZeST9SJTaHi1Zjb6bmbI4yaQkPBweNON5Rx8K4bx5GgHajv55SfAoIiW4GkRcq2Q0NXzDIpM3DBjqkAeNYlmib20cVwOB5sUsOKhF6xKkunqQq692ixW8Gas8aQRvYDgcbhSnXYAM9U6ZMTUtjlhNJsLrB6GYe7TX6KV1%2FX15nobNkFhzP3Uf76CgXehNCRTfJvKePTYrOcxbiAEJYsHz5vXeazd8t6ajLm7B9502nvObtSQeJT0za%2B50mxd2wL7tbEA5J383mqNWanl463RQQWbkmAZOvdLal%2F3mspqPL&X-Amz-Signature=24354e3b3c5d74264bc1242b0024293119a5188b054e213d04da17135878cd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
