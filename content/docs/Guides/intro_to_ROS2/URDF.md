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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3K2DWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlmos3XzanBThSZSrirbmKWb%2FoQdrWaRGB7yQyLaNunAiEAyeZKO69bI4k9jhkclWdPrUQEEkjP8yyJqFSx0gcw0HMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTaU3nYH7qFr6qztSrcA39OtRUiIueRJEnwIwUt18baqhgoepbFG68gbDLwzuDahtPqYs6bdOvj3Y3MQGNI%2B59uIq3pFFhMpWkM1l5qY6U70DJezzOKeEdp1WruyOWwwvPGbS3KYr0N7xS8i9r22yT8u%2BerE1ARmyrnZ4D%2F3V4mrXKe7JSCllGCF2J9IitlKKSE6keDebIuXhnt64%2BQ2MUxUCfoiOSIi%2FsnX61gM0OPMwRakSaKzKtkeXrEDROFfI9hXqtxDpjnSALW0jVuUo%2Fus%2BAxMQTP9F1jmqbFIY4k1kAqeL%2Bqc8pd7yH9d4yIVYvQQeIyB6o5Er0e0HiOqKkGaU5dBxADXhrPTOPPl6Jy6pdoCkRKVK90R1golmvVO4MDnSVDO2jCw9Vy9ubuNhpdCaQS0y3PcjzNVzslDueYJxA5M3OuqP55RoWmeOXSc65UtxdmElso5A9JE%2B3sOwvvmeJJt6EA8b73DIW8RSxkUCUKyECJNpmD0KLSh7Y0yRlQ2XfIKz80TFg1ItsZcHfoRyMCTyIU3oCpz0jwSKMMkCl5ozr2kRE51%2B315I4eZ3D9Ikv2mhaOd0cWEpKRXdO7DEk79H7jcK%2Fb6Xs%2F5Brg9hQ5P8RHpMYuQfbUGf7lNu%2FHNwe0tPu%2FWXZeMJr90skGOqUBs04jF4tz3ti%2FeCnJHQUCh5bUBctax%2B2abQZpCn76UtgX5yz%2BfABpv8GAWBUGHwiGy26GB5pgaO3%2BwI1zH43O4Lsw80BSA9tV1TNgcQRnXxOZ%2F6R0HcTxRl5z%2FFZe36JUrvqfrHoyD8mdZ3UOR75zsvz%2BGfeNqx3mXJHi7fgRkO88jTBlc8c3aLSi76ghcLG8SD%2Fd8TD92H53Jf%2F1T5%2FA2Q56q2ez&X-Amz-Signature=578b8e16116d5bbd96482bc4d87ed58845ed67fcb3608d05adfed64948961f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3K2DWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlmos3XzanBThSZSrirbmKWb%2FoQdrWaRGB7yQyLaNunAiEAyeZKO69bI4k9jhkclWdPrUQEEkjP8yyJqFSx0gcw0HMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTaU3nYH7qFr6qztSrcA39OtRUiIueRJEnwIwUt18baqhgoepbFG68gbDLwzuDahtPqYs6bdOvj3Y3MQGNI%2B59uIq3pFFhMpWkM1l5qY6U70DJezzOKeEdp1WruyOWwwvPGbS3KYr0N7xS8i9r22yT8u%2BerE1ARmyrnZ4D%2F3V4mrXKe7JSCllGCF2J9IitlKKSE6keDebIuXhnt64%2BQ2MUxUCfoiOSIi%2FsnX61gM0OPMwRakSaKzKtkeXrEDROFfI9hXqtxDpjnSALW0jVuUo%2Fus%2BAxMQTP9F1jmqbFIY4k1kAqeL%2Bqc8pd7yH9d4yIVYvQQeIyB6o5Er0e0HiOqKkGaU5dBxADXhrPTOPPl6Jy6pdoCkRKVK90R1golmvVO4MDnSVDO2jCw9Vy9ubuNhpdCaQS0y3PcjzNVzslDueYJxA5M3OuqP55RoWmeOXSc65UtxdmElso5A9JE%2B3sOwvvmeJJt6EA8b73DIW8RSxkUCUKyECJNpmD0KLSh7Y0yRlQ2XfIKz80TFg1ItsZcHfoRyMCTyIU3oCpz0jwSKMMkCl5ozr2kRE51%2B315I4eZ3D9Ikv2mhaOd0cWEpKRXdO7DEk79H7jcK%2Fb6Xs%2F5Brg9hQ5P8RHpMYuQfbUGf7lNu%2FHNwe0tPu%2FWXZeMJr90skGOqUBs04jF4tz3ti%2FeCnJHQUCh5bUBctax%2B2abQZpCn76UtgX5yz%2BfABpv8GAWBUGHwiGy26GB5pgaO3%2BwI1zH43O4Lsw80BSA9tV1TNgcQRnXxOZ%2F6R0HcTxRl5z%2FFZe36JUrvqfrHoyD8mdZ3UOR75zsvz%2BGfeNqx3mXJHi7fgRkO88jTBlc8c3aLSi76ghcLG8SD%2Fd8TD92H53Jf%2F1T5%2FA2Q56q2ez&X-Amz-Signature=548b269692e6bcbfdf26070723197c26554d892abc60441fd887ba4707a9cc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
