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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQCJDCK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDelsVdenyo%2BLf5ykKRxZ6JjorcmXhB0zSXdW9Tb0xHcwIhALtJofsSTGgNlN8u5miS9uTzRxqCmfrES5SpuUUdUwyeKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzppxSxWmQFmXCzv1Mq3AOG9U%2FPdANI6qMF4z9ZQ6529Vy%2B%2FfnmQamaQS44FVPBUz5TU75EiX0j4Mzk7ASOqdoTLA%2F0QJe1MqUbDkqRuzwN%2Fj34bfEcv%2FMIe9t032a3RUHBDWh3V8Z6pqp11SBsHQ34BUhrlpvOsyvA2cnuBrQYE27fQaxlBt6XVdCcYJ3dlI00vNr08dBE%2BuJJfkdlgbyv3x3O8%2B4ftPquZjc9FyC3jXUvsfrjBfYhpmOodPqZiUOb1gdsX%2BrLUj8nH1BlWBvDkLQiU%2BPhnt06zbfMclTTp3bTA8uvNh1p2mw8MnywXkAvzaC1V9LkML2syryFkNPhy5ffU03jTcyko6T1qmTNgK%2Bkuq3gpL5LbrmbIlgVdm2VX3Ow8DVvo0zDkmKFav2ZOjOcBsCtVTpl8bv2R0XuKA7ius%2FdnEKTAuqwoDoJgb6URvhDAqStK%2Ffi7%2Bdum%2BMyyQoppADhCwyJ%2FLd4a2wZ71hXkHwaIIjWdzfMXI9ZHUpu0JHDRFPJOBn9PbIJBM6bbJa3Yq0%2Bd%2F1kfylSFJTROvPlsz2FNNfERn%2BCrXNpPL2rGurQv6VbuROXebdYUb4D5DEjTKn3lgPIwjs9nrFVlSxqpOChlx4bKb6l1y%2B%2B6Lh91hxv3zQnZgwzazCe16TABjqkAdrPjmfHwvAByBcJ0%2FmtpENsktCA6DGQOgfCFeGQ09eDwqTicndWpkZx0Iu8JLP3bbee4aFu61uLKXN9tbXmwy85v5GUIY0JpagDPUjxndL92IKWHTpZFpl7is7yYPcpKtQVIvbcB%2Fig3jD00cznW%2FljohQ280BJi739HDLYBXQ1eEO2SWZazj7o2ovXtf6Tq2nNz34j1ynj9Mn0I7A2UJFD5A%2Bd&X-Amz-Signature=332eed1f8e8d1dbe200a1d707a302fe29599fe324c73ba57e0df5ca2a2a2d929&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQCJDCK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDelsVdenyo%2BLf5ykKRxZ6JjorcmXhB0zSXdW9Tb0xHcwIhALtJofsSTGgNlN8u5miS9uTzRxqCmfrES5SpuUUdUwyeKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzppxSxWmQFmXCzv1Mq3AOG9U%2FPdANI6qMF4z9ZQ6529Vy%2B%2FfnmQamaQS44FVPBUz5TU75EiX0j4Mzk7ASOqdoTLA%2F0QJe1MqUbDkqRuzwN%2Fj34bfEcv%2FMIe9t032a3RUHBDWh3V8Z6pqp11SBsHQ34BUhrlpvOsyvA2cnuBrQYE27fQaxlBt6XVdCcYJ3dlI00vNr08dBE%2BuJJfkdlgbyv3x3O8%2B4ftPquZjc9FyC3jXUvsfrjBfYhpmOodPqZiUOb1gdsX%2BrLUj8nH1BlWBvDkLQiU%2BPhnt06zbfMclTTp3bTA8uvNh1p2mw8MnywXkAvzaC1V9LkML2syryFkNPhy5ffU03jTcyko6T1qmTNgK%2Bkuq3gpL5LbrmbIlgVdm2VX3Ow8DVvo0zDkmKFav2ZOjOcBsCtVTpl8bv2R0XuKA7ius%2FdnEKTAuqwoDoJgb6URvhDAqStK%2Ffi7%2Bdum%2BMyyQoppADhCwyJ%2FLd4a2wZ71hXkHwaIIjWdzfMXI9ZHUpu0JHDRFPJOBn9PbIJBM6bbJa3Yq0%2Bd%2F1kfylSFJTROvPlsz2FNNfERn%2BCrXNpPL2rGurQv6VbuROXebdYUb4D5DEjTKn3lgPIwjs9nrFVlSxqpOChlx4bKb6l1y%2B%2B6Lh91hxv3zQnZgwzazCe16TABjqkAdrPjmfHwvAByBcJ0%2FmtpENsktCA6DGQOgfCFeGQ09eDwqTicndWpkZx0Iu8JLP3bbee4aFu61uLKXN9tbXmwy85v5GUIY0JpagDPUjxndL92IKWHTpZFpl7is7yYPcpKtQVIvbcB%2Fig3jD00cznW%2FljohQ280BJi739HDLYBXQ1eEO2SWZazj7o2ovXtf6Tq2nNz34j1ynj9Mn0I7A2UJFD5A%2Bd&X-Amz-Signature=32b89a213056c37255d595cfba58aeee43fe65f89fd25923629960ab0598cffd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
