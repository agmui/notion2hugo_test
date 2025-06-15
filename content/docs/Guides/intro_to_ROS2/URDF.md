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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWONT4I%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCo5fB7FQ%2BIk5QdZ2wLcrjyUUP3uZhz%2BiEpoPpHN0Gm3QIhAOoiZhhrBXfX0HOznbNiN0vFLB%2BZL1PEyJubprbGDXQ3Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLXUSDD3A1jTUQ%2FjMq3AOl3Y1rRiaZzHg6%2F3ghSGYMdo5XJqqm2rna01DgdVL7xzH%2Fqh6eNfdcHEjTf6n8XAYHXhcJ3Gv8HQyx5JOGgSQWXKBV%2F0RS6rbLBZ%2BzQMb3QA%2B0RwrQwXUqp8ChJ1BAtCMCFRTw2MGKOSVMdbKzpl1zzJh%2BApFv%2BceZDaGyg0Bo75MfhyFm%2BvRVLnh66ohyNqL1IwwQ11V4e2zcz%2BG01yDo9MsyCUTRZuY6Jdl3cV%2FkwUxwkarMKqtw1KDoCjNxzCfhr2J35eujV4i5GjCmtRIU2jJ4SRESKXtJuYkilpxadGNeBAGkJMjUVVVYF5OrUzWIL95u%2FberqVuzMlha7DDPAqgiptW%2B%2FF5R9qaAsMpN%2F9fswUMIO%2FCAwl8Vo2qZ0rXIqDV5RsWSPm6h5nN9pJagmleCLSE87Se1vTXSLMarSAWQX6tcrDDMbpFRSynkb85N0nzZY38EgUotdkSJocEX3bzLvaZcqHfUaUg4xz7BT4OVN%2B2%2F1sio0X0doX8Z%2Ff9DD3ANisd85G3nagmVv5SQyhK54EFZVSUkgh4T82EX5rNZFW7Thb%2FDjSxbx%2Fml%2BXG0ojOnD9sU7hNkHTWiHVHkHqeroV7ggP5nEnAvSlQwQaKzGGGFwtbJw3qJijDhh7vCBjqkAVy5Jszq%2BfdQ%2BIX%2B3FflfIvEp8EyVMz2g0ZWrqyV2awKuvA2LFIWfqr2rlaAWTjcweJXrnpZqbGXPpnceOdFTrKkP%2BAfT6SzHe7CIyzX0fqM%2BessofG02TijMkmE1uCkZ6VJukux%2FDRJohWUb0dBLhLab2PcVaDwPcbq0ih8QqeoeMTSeipJxksYLGIGbqkiPyuGb3fmc9xT5O%2BQE%2FjEHfKsdRSm&X-Amz-Signature=e3e9cd88e8ff83efe585a585e2ea6dd754b0c9993bf5d7cbcdf4483d60ef57bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWONT4I%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCo5fB7FQ%2BIk5QdZ2wLcrjyUUP3uZhz%2BiEpoPpHN0Gm3QIhAOoiZhhrBXfX0HOznbNiN0vFLB%2BZL1PEyJubprbGDXQ3Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwLXUSDD3A1jTUQ%2FjMq3AOl3Y1rRiaZzHg6%2F3ghSGYMdo5XJqqm2rna01DgdVL7xzH%2Fqh6eNfdcHEjTf6n8XAYHXhcJ3Gv8HQyx5JOGgSQWXKBV%2F0RS6rbLBZ%2BzQMb3QA%2B0RwrQwXUqp8ChJ1BAtCMCFRTw2MGKOSVMdbKzpl1zzJh%2BApFv%2BceZDaGyg0Bo75MfhyFm%2BvRVLnh66ohyNqL1IwwQ11V4e2zcz%2BG01yDo9MsyCUTRZuY6Jdl3cV%2FkwUxwkarMKqtw1KDoCjNxzCfhr2J35eujV4i5GjCmtRIU2jJ4SRESKXtJuYkilpxadGNeBAGkJMjUVVVYF5OrUzWIL95u%2FberqVuzMlha7DDPAqgiptW%2B%2FF5R9qaAsMpN%2F9fswUMIO%2FCAwl8Vo2qZ0rXIqDV5RsWSPm6h5nN9pJagmleCLSE87Se1vTXSLMarSAWQX6tcrDDMbpFRSynkb85N0nzZY38EgUotdkSJocEX3bzLvaZcqHfUaUg4xz7BT4OVN%2B2%2F1sio0X0doX8Z%2Ff9DD3ANisd85G3nagmVv5SQyhK54EFZVSUkgh4T82EX5rNZFW7Thb%2FDjSxbx%2Fml%2BXG0ojOnD9sU7hNkHTWiHVHkHqeroV7ggP5nEnAvSlQwQaKzGGGFwtbJw3qJijDhh7vCBjqkAVy5Jszq%2BfdQ%2BIX%2B3FflfIvEp8EyVMz2g0ZWrqyV2awKuvA2LFIWfqr2rlaAWTjcweJXrnpZqbGXPpnceOdFTrKkP%2BAfT6SzHe7CIyzX0fqM%2BessofG02TijMkmE1uCkZ6VJukux%2FDRJohWUb0dBLhLab2PcVaDwPcbq0ih8QqeoeMTSeipJxksYLGIGbqkiPyuGb3fmc9xT5O%2BQE%2FjEHfKsdRSm&X-Amz-Signature=ea4140dac33570d0c67b31fbaa315109d998ce6e3f10db9e0a2902f11518904d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
