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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIBHXQU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd%2Bxm%2FeJOWgCJ2ZXvssMWtklte52RqBCAJiL6iTXIICAiB8VhJzSnMbA9MTcZQn%2Fr92JelGHJLLVxBI7ZOYakJF9yqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslQrDzyGLKvCi3a8KtwDgh87CL%2B547ouGE6HOC0keZiOxKHhGrjNejvUg9fyRKA3GSf%2BXSqf2slSH0AMmINpmIZLI06J3vWq6sOSMtkEt0qfmjL0Lu1GQCWupQNeoFeoRGyQzPIQD2cLVtgU0ZJ3xv6yyct3vAH%2Fa%2BQ1%2BN7onT8ag5IQ8BxvnmljD6fASt%2BqtC%2BoO4iyDyd2HK34URGZLEeXHHBsHtLVtEpyRo2V6y%2BVa%2BUNd1gNVHX4T3YCDza5dxLy0X7A0ENJPAWoJK6zcsvAqIbnoqpl2bA4S6cLuQTvqLyVMzinV7haah3ACVcu5Qj%2F%2F4EN2MF110moWUXv6dwxpIrt6jl2FvHYOXaRSTFULL2Smfnn5knzxA270nvOtjCcDgnXBD2%2FO9NDFpD9I7Yl98hbjJ5FyMDKZTBzliW3BSVMLuUbtCm6DrYFz6%2Fw8%2FC0JzCHsywRtkXytACjCo6T6OPvWj%2F%2B1t4qEL6OpzbZnatOLqYAJhf1BkIfbBOkxoXMWX%2BfcAgzRUSZ6twbAR86sNJBbevL61SDFc1hn66IWztya81y7Z%2BswxFhUsY7nTP9OhrQVM67H3uMzun3sBMkbhF6nVBTm6g0NSJ2HhYa2bQNfSMd2XIUsN%2FGpbgEe5KVhcXJYHh0D3gwpKmfvgY6pgEbPlUPHkVpl%2FlSgOwmVss8yUq8%2Bj%2Fs3ZQmZj6ukhNAzk1mCmKInVEgYPTm%2F7T6naK5zYis1F98K0g4Rou0Ox9H%2BJebT5Ds50yhd2ZQY576PS5YQju1oFN8wBXiNjE%2FGYx2UiiKoxECfTEj1H0lgkSd29v83%2BqyoE6chk%2FpiNexlUK3w4EsEQWwj9zdpqW3j67cps%2FdLXU0280%2BhppnTYkVA54aU9Tp&X-Amz-Signature=0a49d569909b6f2c14c079e6b115bc152eddf62a916c90a3f255264c7ce698a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIBHXQU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd%2Bxm%2FeJOWgCJ2ZXvssMWtklte52RqBCAJiL6iTXIICAiB8VhJzSnMbA9MTcZQn%2Fr92JelGHJLLVxBI7ZOYakJF9yqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslQrDzyGLKvCi3a8KtwDgh87CL%2B547ouGE6HOC0keZiOxKHhGrjNejvUg9fyRKA3GSf%2BXSqf2slSH0AMmINpmIZLI06J3vWq6sOSMtkEt0qfmjL0Lu1GQCWupQNeoFeoRGyQzPIQD2cLVtgU0ZJ3xv6yyct3vAH%2Fa%2BQ1%2BN7onT8ag5IQ8BxvnmljD6fASt%2BqtC%2BoO4iyDyd2HK34URGZLEeXHHBsHtLVtEpyRo2V6y%2BVa%2BUNd1gNVHX4T3YCDza5dxLy0X7A0ENJPAWoJK6zcsvAqIbnoqpl2bA4S6cLuQTvqLyVMzinV7haah3ACVcu5Qj%2F%2F4EN2MF110moWUXv6dwxpIrt6jl2FvHYOXaRSTFULL2Smfnn5knzxA270nvOtjCcDgnXBD2%2FO9NDFpD9I7Yl98hbjJ5FyMDKZTBzliW3BSVMLuUbtCm6DrYFz6%2Fw8%2FC0JzCHsywRtkXytACjCo6T6OPvWj%2F%2B1t4qEL6OpzbZnatOLqYAJhf1BkIfbBOkxoXMWX%2BfcAgzRUSZ6twbAR86sNJBbevL61SDFc1hn66IWztya81y7Z%2BswxFhUsY7nTP9OhrQVM67H3uMzun3sBMkbhF6nVBTm6g0NSJ2HhYa2bQNfSMd2XIUsN%2FGpbgEe5KVhcXJYHh0D3gwpKmfvgY6pgEbPlUPHkVpl%2FlSgOwmVss8yUq8%2Bj%2Fs3ZQmZj6ukhNAzk1mCmKInVEgYPTm%2F7T6naK5zYis1F98K0g4Rou0Ox9H%2BJebT5Ds50yhd2ZQY576PS5YQju1oFN8wBXiNjE%2FGYx2UiiKoxECfTEj1H0lgkSd29v83%2BqyoE6chk%2FpiNexlUK3w4EsEQWwj9zdpqW3j67cps%2FdLXU0280%2BhppnTYkVA54aU9Tp&X-Amz-Signature=37645bee0854a1c8d716a2fa84473831ad22f0708b241266276db21846fa2764&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
