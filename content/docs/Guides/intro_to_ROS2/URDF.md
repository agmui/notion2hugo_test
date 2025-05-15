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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFTH3EF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCniZzWKg4em7DmDz0KkohxjwzxRWJvuwcYkqXiKe9jfAIgBUDv6Z4non24dV9jTroBsUAIzfSp%2BmOz9N%2Fd5uoAgWAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPrOck0nuhOYcX%2BlMCrcAxJG5FdE97otC%2F62vbbG%2FHsg371aAmFZSu7pajXSPAGllvKSOY6j5NTpBFLm1Xrw7qVT%2BKknaXd2vcaowp4KB%2BcHK%2F6GkIKmYX9Iy%2BnOeFkt01nAwfpX7H53NOCJprMNoPXkQUpqXbPYaStige5CzQLeC6QmAZroPC6DUXD77cUgys9RUF4mni81Rjs3DkeHyDsqpIzDemAzMwBJIjs6HuAOHz7yrA4SGPDPlX83fP2sRYIM4KFQ7oXHmdCrX52ZSu3OW6C1JnQgOYrmZoJbuvsaAGG6fLzzG4xqE3eD0Gm8s%2BvPub4PMp1QwfDYYTASSEAhcHWjPwsdfgyA7PQkpGhQUoLWwoQbCu21HqkB%2Bydcyk5FUMk13idMKrEgH79KJtcFbqVmYMkq5q2Sh84dBWQ1TMJZq5C2xLdmc8IVucDt7fl521Yw6KIrA8H%2BbIzv%2FId7%2B%2FViCDKkt1PilLdoOMvUPa6QvlTyTRNYDhfEtVtMvOgBhHozQTmAkaOiyye9nMNffMg4W23XzaiqmvHmkE5aSmEa%2FqLClCvEXcJ%2BSCOyNHDRwKo1MFNzNCNBhXmVVXV4AeNwqIh7s9denF7%2FIqlFUf%2FTlr6pTjj18CJneuPHa88KvqB0PpugoLzHMN37mMEGOqUBEIyqh8C%2BgRJycaX8DhguECmVLYbbMHhrJt8KMKMQcabqeF9fO8cDj1zeULUhtT9burAzNjdZ%2FT8eZMA8omz%2FKUHiGY882n4LRMTxl2BCDccLa51vNKYUiVLZqSbmqtHbVYvNrV6B1SqVzdtS3q3DB8lR70IP3IdlUH44RRI3RjWwEiiHGw9rAFsd9flNDJCbgnlqJi3QEv5VcpuZw3N%2FeYLASi51&X-Amz-Signature=41647612f30df02dbdda06b11b5ab026f38d8ad0cff2324637a85ecc1c5be203&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFTH3EF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCniZzWKg4em7DmDz0KkohxjwzxRWJvuwcYkqXiKe9jfAIgBUDv6Z4non24dV9jTroBsUAIzfSp%2BmOz9N%2Fd5uoAgWAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPrOck0nuhOYcX%2BlMCrcAxJG5FdE97otC%2F62vbbG%2FHsg371aAmFZSu7pajXSPAGllvKSOY6j5NTpBFLm1Xrw7qVT%2BKknaXd2vcaowp4KB%2BcHK%2F6GkIKmYX9Iy%2BnOeFkt01nAwfpX7H53NOCJprMNoPXkQUpqXbPYaStige5CzQLeC6QmAZroPC6DUXD77cUgys9RUF4mni81Rjs3DkeHyDsqpIzDemAzMwBJIjs6HuAOHz7yrA4SGPDPlX83fP2sRYIM4KFQ7oXHmdCrX52ZSu3OW6C1JnQgOYrmZoJbuvsaAGG6fLzzG4xqE3eD0Gm8s%2BvPub4PMp1QwfDYYTASSEAhcHWjPwsdfgyA7PQkpGhQUoLWwoQbCu21HqkB%2Bydcyk5FUMk13idMKrEgH79KJtcFbqVmYMkq5q2Sh84dBWQ1TMJZq5C2xLdmc8IVucDt7fl521Yw6KIrA8H%2BbIzv%2FId7%2B%2FViCDKkt1PilLdoOMvUPa6QvlTyTRNYDhfEtVtMvOgBhHozQTmAkaOiyye9nMNffMg4W23XzaiqmvHmkE5aSmEa%2FqLClCvEXcJ%2BSCOyNHDRwKo1MFNzNCNBhXmVVXV4AeNwqIh7s9denF7%2FIqlFUf%2FTlr6pTjj18CJneuPHa88KvqB0PpugoLzHMN37mMEGOqUBEIyqh8C%2BgRJycaX8DhguECmVLYbbMHhrJt8KMKMQcabqeF9fO8cDj1zeULUhtT9burAzNjdZ%2FT8eZMA8omz%2FKUHiGY882n4LRMTxl2BCDccLa51vNKYUiVLZqSbmqtHbVYvNrV6B1SqVzdtS3q3DB8lR70IP3IdlUH44RRI3RjWwEiiHGw9rAFsd9flNDJCbgnlqJi3QEv5VcpuZw3N%2FeYLASi51&X-Amz-Signature=3dab22a075788d6d962f0a6cf16b98394376627d29cd283c6052b67875d1798d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
