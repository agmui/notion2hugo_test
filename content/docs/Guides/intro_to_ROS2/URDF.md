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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH7VWEZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaaKQqLscLC%2FCNNasO00cVWrgyEw9PtHEHmXZrmZksjAiAVfVhXNgczMZezseFeI3jHPNBEBiA7p%2BDGnO70d8Betir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FfUtBA%2Fm4L067yX2KtwDN7lrovK6CmgRqcu3tncflK1h%2BeBpykX8rata9jk1pz%2FmVf%2F6k8J%2B97eThqxGmsNNbwN%2FffBe83zMijuUtxZUT5wPGB8O0yKSUgu%2FDaXGOgJTgGdhs%2BR2csnvVo%2BxzHozxo2vPhVkQRQnjmEafvPm8bTcO6zB85wsLmJbjns4Ih81SGh6xcQazWFLSTtDpQq8%2F6T2zCMb8ciY5IC7yw%2BEUmiSgdytWSufv%2Fu0cICONQTJfQLY41VFDXW1U1hjUcBZ443JMMov9gT8JyC8PBUE2QCcz6UFYlB1jPQmiHm4IA9DHJKZbFJVei8aXJ4120K7XcqXqMVFyFTfWCEPtj6LnoW5Q%2FrKiTYwdXxo8VjuyArLNHccaJexB%2B4JMaHLO05vifXk6Y65MmXYkMRYQZrWbAP%2B2OX71cz0PyXKsuy5TikrQAgisSv3SCqkGPOoYkpv5X%2B01KsQ%2Fei4veJcG9iOEhy4e7A%2BI7Igrb4I1m8z8nbuu%2FtGc4pl3EY30MCdTVhXChhrgW%2F7pVRnEnKyh0CD05fXTceh7wND3zEd6XO%2BqpsiL8uGyjOsWclWFjsmK%2F%2FmEmaxzipXRVyTjFvVSOqBZeFlfkrNbaV9r2GohmbRoQR%2F20G2dZp9a8Vr8N8w45ytwAY6pgGnU5KcmU81Uc8MQitt0pRva0s7IIH%2FWBUri9ATj9xo0r%2BC8PmBeAuGJPmJtEq9mEgIpYJSGZzKblpbTzP8nj2UIOsJUPr%2FXd7bGuxZoJkWSzVZ%2FpiFpVeP75tTFzY93VMEK51GJi9KsDH%2BoQkdmNjB3lvMKx849FJOhWs7jQ7lHQ522GntwGyJpSg9z3YDxPWMyrJRbfSgweGlRRvsy8d2Bx%2F0TFfT&X-Amz-Signature=ba2a3551613e7bcc41117e79112ed74b1d001450f5f18f3a6bf528f4af938f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKH7VWEZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaaKQqLscLC%2FCNNasO00cVWrgyEw9PtHEHmXZrmZksjAiAVfVhXNgczMZezseFeI3jHPNBEBiA7p%2BDGnO70d8Betir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FfUtBA%2Fm4L067yX2KtwDN7lrovK6CmgRqcu3tncflK1h%2BeBpykX8rata9jk1pz%2FmVf%2F6k8J%2B97eThqxGmsNNbwN%2FffBe83zMijuUtxZUT5wPGB8O0yKSUgu%2FDaXGOgJTgGdhs%2BR2csnvVo%2BxzHozxo2vPhVkQRQnjmEafvPm8bTcO6zB85wsLmJbjns4Ih81SGh6xcQazWFLSTtDpQq8%2F6T2zCMb8ciY5IC7yw%2BEUmiSgdytWSufv%2Fu0cICONQTJfQLY41VFDXW1U1hjUcBZ443JMMov9gT8JyC8PBUE2QCcz6UFYlB1jPQmiHm4IA9DHJKZbFJVei8aXJ4120K7XcqXqMVFyFTfWCEPtj6LnoW5Q%2FrKiTYwdXxo8VjuyArLNHccaJexB%2B4JMaHLO05vifXk6Y65MmXYkMRYQZrWbAP%2B2OX71cz0PyXKsuy5TikrQAgisSv3SCqkGPOoYkpv5X%2B01KsQ%2Fei4veJcG9iOEhy4e7A%2BI7Igrb4I1m8z8nbuu%2FtGc4pl3EY30MCdTVhXChhrgW%2F7pVRnEnKyh0CD05fXTceh7wND3zEd6XO%2BqpsiL8uGyjOsWclWFjsmK%2F%2FmEmaxzipXRVyTjFvVSOqBZeFlfkrNbaV9r2GohmbRoQR%2F20G2dZp9a8Vr8N8w45ytwAY6pgGnU5KcmU81Uc8MQitt0pRva0s7IIH%2FWBUri9ATj9xo0r%2BC8PmBeAuGJPmJtEq9mEgIpYJSGZzKblpbTzP8nj2UIOsJUPr%2FXd7bGuxZoJkWSzVZ%2FpiFpVeP75tTFzY93VMEK51GJi9KsDH%2BoQkdmNjB3lvMKx849FJOhWs7jQ7lHQ522GntwGyJpSg9z3YDxPWMyrJRbfSgweGlRRvsy8d2Bx%2F0TFfT&X-Amz-Signature=7d54eab35a26fa4e61317b2b59f0c5326ce89b9ac87d2341733dc3133fd3420f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
