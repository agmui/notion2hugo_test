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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWA2JET%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC9MiYPkIpgit7P8PyviRuPWTqNwjxAF%2F0U07merygnggIhAIZLJUIz%2FqmwCfEsNg2Lf%2FGKRS5FUQCAX5WGB5mvoWjcKv8DCBAQABoMNjM3NDIzMTgzODA1IgwLd8HFSWhGsfwLLiUq3ANabSsUG8oknkTx1inz8nUAZVIUaZTLyXABsldanu%2BqMkX4APN%2F8%2FwgqzQ4YaJATU5aYBodUgQsoRPQETEnvXLQbgUQ%2F0O55K9RY9sWeC9rQI88VFNjPTVw2Zod7jMKtZvvQZotaObrZ7Ze%2F%2FT%2Br8btTUtP2yJPO2pVUudS3eOT%2BbaZuTyzdb%2BKWYK8FPFxNGU8r%2FrrhIqD%2BLwAkedLrHpQEymYPHpVUxY%2FwUowtwgjnfghxYQmd9Sa85DIIeDRwuHhMbqcL9q1eEtx2O2kUVk7fOABPblRVron7gCI1pyyXCwoce0DqpNKwbBDxJgBqkfan2NxlTfll1HGTH0kvnblS9VVa0lZDtqw84EmdMnu2HeF%2B4RPnqXhLkYPpQTRI99qDoJQZ9EJMBqZ1zMSosG4gHfikOtoYt1f%2FP296EJgv2auS2N4ghZm4jOsGcDqyq7%2F04NIMjssm7Q4e%2FAxQ8wVg4I7Dan%2FMYEVv7wOlNhBmRxLd4sHsVCSXLhCI%2BZgRj67GTZiT06VHx%2BlJk%2FjxvlO5tx7pt6vv7tBXVxQR13p8FhGjg7fojLbrIjkx6NTK%2FA%2BCdzZRr4Qj9eooOJzR%2FjLxp3%2Fm3Nd5TuVS14Gp2OsGS26tddltRwp8RPHgjDd3pjDBjqkAWS23Vkj3mrk3cQLlm9iWEAhN3a7%2FmvHPPmmbiYcXGPQDcD%2FTTFaXt6L8pc3vcdlN2eBps0proK3IzpygCPPL2xwaFhrLf1RumR2VtAHJogfcS22VTmBLa9KE%2BZ6QDHD2BO0k8qFKKuetOjFUR5QNQ%2F7F%2BM%2BEk%2FBYK7CkxhY7CELdxpV4lGjlr8G2yaZHR%2BCpG1O3sKPK7SAKCSbbpbACi9IQQ0Y&X-Amz-Signature=73ce7c13d7b7970f253a37eb8a2952557c44d7a9df271618ee40ef9e550fc0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWA2JET%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQC9MiYPkIpgit7P8PyviRuPWTqNwjxAF%2F0U07merygnggIhAIZLJUIz%2FqmwCfEsNg2Lf%2FGKRS5FUQCAX5WGB5mvoWjcKv8DCBAQABoMNjM3NDIzMTgzODA1IgwLd8HFSWhGsfwLLiUq3ANabSsUG8oknkTx1inz8nUAZVIUaZTLyXABsldanu%2BqMkX4APN%2F8%2FwgqzQ4YaJATU5aYBodUgQsoRPQETEnvXLQbgUQ%2F0O55K9RY9sWeC9rQI88VFNjPTVw2Zod7jMKtZvvQZotaObrZ7Ze%2F%2FT%2Br8btTUtP2yJPO2pVUudS3eOT%2BbaZuTyzdb%2BKWYK8FPFxNGU8r%2FrrhIqD%2BLwAkedLrHpQEymYPHpVUxY%2FwUowtwgjnfghxYQmd9Sa85DIIeDRwuHhMbqcL9q1eEtx2O2kUVk7fOABPblRVron7gCI1pyyXCwoce0DqpNKwbBDxJgBqkfan2NxlTfll1HGTH0kvnblS9VVa0lZDtqw84EmdMnu2HeF%2B4RPnqXhLkYPpQTRI99qDoJQZ9EJMBqZ1zMSosG4gHfikOtoYt1f%2FP296EJgv2auS2N4ghZm4jOsGcDqyq7%2F04NIMjssm7Q4e%2FAxQ8wVg4I7Dan%2FMYEVv7wOlNhBmRxLd4sHsVCSXLhCI%2BZgRj67GTZiT06VHx%2BlJk%2FjxvlO5tx7pt6vv7tBXVxQR13p8FhGjg7fojLbrIjkx6NTK%2FA%2BCdzZRr4Qj9eooOJzR%2FjLxp3%2Fm3Nd5TuVS14Gp2OsGS26tddltRwp8RPHgjDd3pjDBjqkAWS23Vkj3mrk3cQLlm9iWEAhN3a7%2FmvHPPmmbiYcXGPQDcD%2FTTFaXt6L8pc3vcdlN2eBps0proK3IzpygCPPL2xwaFhrLf1RumR2VtAHJogfcS22VTmBLa9KE%2BZ6QDHD2BO0k8qFKKuetOjFUR5QNQ%2F7F%2BM%2BEk%2FBYK7CkxhY7CELdxpV4lGjlr8G2yaZHR%2BCpG1O3sKPK7SAKCSbbpbACi9IQQ0Y&X-Amz-Signature=87ba59eda9862e054e6404bdcf8544259cb409b476d809baf3fe397bda40d759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
