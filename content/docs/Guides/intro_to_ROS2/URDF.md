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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVS57VH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBchCWV2oXCzc2Vu7uXqpvY2lyVj9tkeQHVnyI4qgyg3AiAC4Hf4Al9f9suifK%2Ble4AS2zcVaH8dWbOZyJgKG%2Bwx7CqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxc9h6DZaYgsQxzNJKtwD7QVOAUK1edaUHxUR2uDLrB26AeAtYOFTWTdGqn1BOwHDk5DRQY0h8yLIQI3NTgkfCnrIb8ccY6HotLV%2FbsY7Iy5FtMsSBiHr5Um%2FOlWO7nsfb8xffx4%2BxocpUOCzjKwbcUMb89Etv2LNcI48hlWmqrv33ry%2B2crTGeZINrRy%2FIICMIXId03Lhiyar5R7ID%2FLddEtPFMV0K1Tpj4LxBOINrG7Fmku04XJa7jeDUDOPmAsB1Kk8cwPCqWZPABj1X54w%2F%2By845VWcRGcP2BDfY6NiaQ56yBAZoSDZN6Uz8ctlm2TR3B4Zz41hcEDCfNwLNzK19omraRxDD55VDWKkEo9PxtwL%2FFTD4X6Y1pSLV0bZnRRh6%2F9FP4qdj6mmC6V%2BpuNf4nrfCdV%2BDeBgXqfAD7KpURrn3HNuGefD0kqVM3i%2Bko2N9drCBWwNsRFG4l8KEiuciGjaxPwU9n5ktIYybP0kzYkSvl60rjrtrEL1P%2F4VVIkLuHrTLBiyuxdenza0zhy0NCP4%2FKBO%2Byu6exbFB67OPmay1LYAqnNK2wO8wC0sx4lW7HmkyoBeajg9B9ddVrLgJCDEPkNTjtGzEFxWOr14RuTeZvEMnDtK5pS4bKBP5ov%2FqCdP78vYR5mMcw1Ku0vwY6pgHzS0t7kQBL2TS4h7WwS1KgnVVgNofgMSBggwJdoFnS7nkumWeM3U8bh9bjvAXTSgfSZJFLe3uHH7z7AVganttM03GaHWmrQf5325YatV9JWspjXbdVIXRvuQSqd7Lj1wpZoyil4NmVfkI8y9dhk8Es7dzaF68S3f%2BsZqxYNeCVoVb6Icv%2FWn4hXbMb0KBqSgJ4l5SCtyepmNo9KBFfISPaML1YEst7&X-Amz-Signature=6f69e7f4f7cd55e4a21c6403829a918f5662b899b876c5c1bad4fba33abae97b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVS57VH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBchCWV2oXCzc2Vu7uXqpvY2lyVj9tkeQHVnyI4qgyg3AiAC4Hf4Al9f9suifK%2Ble4AS2zcVaH8dWbOZyJgKG%2Bwx7CqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxc9h6DZaYgsQxzNJKtwD7QVOAUK1edaUHxUR2uDLrB26AeAtYOFTWTdGqn1BOwHDk5DRQY0h8yLIQI3NTgkfCnrIb8ccY6HotLV%2FbsY7Iy5FtMsSBiHr5Um%2FOlWO7nsfb8xffx4%2BxocpUOCzjKwbcUMb89Etv2LNcI48hlWmqrv33ry%2B2crTGeZINrRy%2FIICMIXId03Lhiyar5R7ID%2FLddEtPFMV0K1Tpj4LxBOINrG7Fmku04XJa7jeDUDOPmAsB1Kk8cwPCqWZPABj1X54w%2F%2By845VWcRGcP2BDfY6NiaQ56yBAZoSDZN6Uz8ctlm2TR3B4Zz41hcEDCfNwLNzK19omraRxDD55VDWKkEo9PxtwL%2FFTD4X6Y1pSLV0bZnRRh6%2F9FP4qdj6mmC6V%2BpuNf4nrfCdV%2BDeBgXqfAD7KpURrn3HNuGefD0kqVM3i%2Bko2N9drCBWwNsRFG4l8KEiuciGjaxPwU9n5ktIYybP0kzYkSvl60rjrtrEL1P%2F4VVIkLuHrTLBiyuxdenza0zhy0NCP4%2FKBO%2Byu6exbFB67OPmay1LYAqnNK2wO8wC0sx4lW7HmkyoBeajg9B9ddVrLgJCDEPkNTjtGzEFxWOr14RuTeZvEMnDtK5pS4bKBP5ov%2FqCdP78vYR5mMcw1Ku0vwY6pgHzS0t7kQBL2TS4h7WwS1KgnVVgNofgMSBggwJdoFnS7nkumWeM3U8bh9bjvAXTSgfSZJFLe3uHH7z7AVganttM03GaHWmrQf5325YatV9JWspjXbdVIXRvuQSqd7Lj1wpZoyil4NmVfkI8y9dhk8Es7dzaF68S3f%2BsZqxYNeCVoVb6Icv%2FWn4hXbMb0KBqSgJ4l5SCtyepmNo9KBFfISPaML1YEst7&X-Amz-Signature=eb8c2ea5e22644eafedf0e62ea36cccf7425abc2cbb7c97549c3b91f6daa069c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
