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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2ZEPGY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD5h6sdDkMJr89Lz9BTJU47VWdGPInxkgsDHVEg1JLQFgIhAMIm%2BspuEIY69d3gZotj64szxW%2FygNkHF53%2BSzUQbG0SKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFj%2FmudV8W%2BWaI%2Fhkq3AOv93r30O8b8456Ex6aolsAyfymDlXn6SCX5GMrzkXzE4CcpgiP25LAQvfJDsjxCwXokI23dkZFDFv7%2BmsNf%2FAcWLmsK2Dh8OAvNNQrDk1VibaXwEBq8h0nLmgMPdJm4yDfUQNydf2Wd7NsmNNsmZYJDwOXAw3ZWy76muVpAPkPto%2BFFoJQI3MsJptyebwDo0bMqWy%2BOcKMo2vzhn3tbLqOtOH2GBONEJlrebRo8zNT%2BvKmMqmg4mJ%2BnjfDprN2%2FicpTVxWLhE1%2FohcgWxilDrnH%2FCYaJLjJ97zPj9v%2BlPXRjtzKhWXXuFI4Qsy5b53hVW%2FY6PyMUzvLgRcf3kfwhwXaDIEs19JWPApiS1yZATsTTy%2F1vs1eDUCrvuDvD8jzWl4QGpQCNVEtrcOQtQKYAEWlqs9X6OPxibSl%2Bu9u92r0nyuhitXYuDMIoykiuZ%2B1Z%2BgRKsVTEeWsHt8R61sS%2F8N68RsNqeJ3FhfI1X0pEEnq6UHNCx%2BtfD9W8yTkrOqthgtadTBfiqzOCAqcmV75VO3MrAMKXuTkSG8fj%2FGVCxyHSvRYgpNV1rzLofc23ODph2%2B0jYGz6%2BNUfiZj1GQInxQJgf33UT5ch%2FS8X4ZL04f2ZxejsNwMOa6olHU1jC7ianUBjqkAdgtrZsy%2FttRdK%2BdcWRgcSmCTGYO0AbQjdxgTqGJZR8YdTPzkXDcpAR6mgqJeLbXZfO6hXATiSkhwgEkgEBiLY35uXUh4Tana%2BHL%2BB9%2BAzjgQx9BRRHIytQC5wJA2Y%2Fuqhds0NCv%2BJbnbH6j2DAQ9ldyyPcctlY37Jia4P3QS6b6Y5gY2ZSRgEp0vw00NVe8NCrbqIGs7k9jXcIrUYdB2GTTS6yN&X-Amz-Signature=4f8154807fea363f1b433a9708bf4c36713b030039cc48d6a6afede7f47a708a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2ZEPGY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD5h6sdDkMJr89Lz9BTJU47VWdGPInxkgsDHVEg1JLQFgIhAMIm%2BspuEIY69d3gZotj64szxW%2FygNkHF53%2BSzUQbG0SKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFj%2FmudV8W%2BWaI%2Fhkq3AOv93r30O8b8456Ex6aolsAyfymDlXn6SCX5GMrzkXzE4CcpgiP25LAQvfJDsjxCwXokI23dkZFDFv7%2BmsNf%2FAcWLmsK2Dh8OAvNNQrDk1VibaXwEBq8h0nLmgMPdJm4yDfUQNydf2Wd7NsmNNsmZYJDwOXAw3ZWy76muVpAPkPto%2BFFoJQI3MsJptyebwDo0bMqWy%2BOcKMo2vzhn3tbLqOtOH2GBONEJlrebRo8zNT%2BvKmMqmg4mJ%2BnjfDprN2%2FicpTVxWLhE1%2FohcgWxilDrnH%2FCYaJLjJ97zPj9v%2BlPXRjtzKhWXXuFI4Qsy5b53hVW%2FY6PyMUzvLgRcf3kfwhwXaDIEs19JWPApiS1yZATsTTy%2F1vs1eDUCrvuDvD8jzWl4QGpQCNVEtrcOQtQKYAEWlqs9X6OPxibSl%2Bu9u92r0nyuhitXYuDMIoykiuZ%2B1Z%2BgRKsVTEeWsHt8R61sS%2F8N68RsNqeJ3FhfI1X0pEEnq6UHNCx%2BtfD9W8yTkrOqthgtadTBfiqzOCAqcmV75VO3MrAMKXuTkSG8fj%2FGVCxyHSvRYgpNV1rzLofc23ODph2%2B0jYGz6%2BNUfiZj1GQInxQJgf33UT5ch%2FS8X4ZL04f2ZxejsNwMOa6olHU1jC7ianUBjqkAdgtrZsy%2FttRdK%2BdcWRgcSmCTGYO0AbQjdxgTqGJZR8YdTPzkXDcpAR6mgqJeLbXZfO6hXATiSkhwgEkgEBiLY35uXUh4Tana%2BHL%2BB9%2BAzjgQx9BRRHIytQC5wJA2Y%2Fuqhds0NCv%2BJbnbH6j2DAQ9ldyyPcctlY37Jia4P3QS6b6Y5gY2ZSRgEp0vw00NVe8NCrbqIGs7k9jXcIrUYdB2GTTS6yN&X-Amz-Signature=bebb8b10e624455b00bee6a39c8a1fb72ddc43fc4a92a284e53c0bf53e6ac6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
