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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEB3LUL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQacG5KuVVHe119ZOR%2Bb%2BA25yBARm3xvokKSMDXbOVIQIhAOeLzswLrTpGnsnTnDbDqXRyfg73HPnstahLZAaHZ5SIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FfnU%2BGFH5vT1Ife8q3AOG0o0hm6lsrQvJqfMgOZeDm50FQO6%2BKBgPWp8XJyXYG0DcVLyqECZ0sIab9sOoDCJ1aFC%2F1ReMAFvKG6Guo2uGvUnYOSmf1gwDvtYoEwGncH%2FOsryX2889Bl18CH7B3F3zlMhmsihihMx%2FqSAdbyJ0sLyqsvP9fkN468%2F%2Bj2cIAlE2sATl%2BWQooaX0AozBzZ0z9bSuCUD30g8MliuJUI6blJy27TTXDWBvpsEqptxubl9CgV0aDZXRyesqu%2BVTLeJ%2B2bPp2Yv9D6%2B06bu1ibpXP92y%2BbKvMMsO6jQBcV92JdsOs%2BvsjMbiAlQITsvBX%2Fnyio0MfNppCNrl9LLWSefNrJXpu3tbRxGk%2F1EN91ZmMS6dITpGPPwD6a8HduRvrCNtHb19%2BcelrxP6RRlXs6eOY22vQnTZPBuYUPcz%2Ff%2FCHv1VhzQzRF1X5%2F4QYXSDCZBaGQM2Y2ymFGislzTJGUXRpZ2cBxWfwUJ5KU3QioDWmmo10GHz3IBmkNFFyFIva015rs0qORoNN%2BeJ1y6Igbh%2FchXQ4L7P9KWSNqGsvgW8lL2l8LG3Jw9sJtlnIi6MRnlURXV42hx5JSFsw0I0ok16821Z9hrvzSP5fwrjfRVG5mW0OSPF5wuC0LnHJTDX15%2B9BjqkAciGU7zKKdyK1k3vTya7JIlWe7uaVXoVPJjbea0YFOnXBjbzTYRsfWO5G%2BnSIGl8xpNQWvbSzjltVke02Flbj8w7RKLlJFMhs6KQoaHFAwSpXXzDXIBsDz8mXj8DCNjAgF1DSSDP1zRPjkguU1k8WzpPW%2BwixbDZTidKp%2FmMoUQ0KI6NQT9G8fuQSQPi%2BOZ9rHkeMh2qtgRlLDYfsJJeMIgnzmaf&X-Amz-Signature=e42397bbadc4b8d4eafc482d7f9b8e49fbceff63ae4a9db4285ed4e555bf9c64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEB3LUL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQacG5KuVVHe119ZOR%2Bb%2BA25yBARm3xvokKSMDXbOVIQIhAOeLzswLrTpGnsnTnDbDqXRyfg73HPnstahLZAaHZ5SIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FfnU%2BGFH5vT1Ife8q3AOG0o0hm6lsrQvJqfMgOZeDm50FQO6%2BKBgPWp8XJyXYG0DcVLyqECZ0sIab9sOoDCJ1aFC%2F1ReMAFvKG6Guo2uGvUnYOSmf1gwDvtYoEwGncH%2FOsryX2889Bl18CH7B3F3zlMhmsihihMx%2FqSAdbyJ0sLyqsvP9fkN468%2F%2Bj2cIAlE2sATl%2BWQooaX0AozBzZ0z9bSuCUD30g8MliuJUI6blJy27TTXDWBvpsEqptxubl9CgV0aDZXRyesqu%2BVTLeJ%2B2bPp2Yv9D6%2B06bu1ibpXP92y%2BbKvMMsO6jQBcV92JdsOs%2BvsjMbiAlQITsvBX%2Fnyio0MfNppCNrl9LLWSefNrJXpu3tbRxGk%2F1EN91ZmMS6dITpGPPwD6a8HduRvrCNtHb19%2BcelrxP6RRlXs6eOY22vQnTZPBuYUPcz%2Ff%2FCHv1VhzQzRF1X5%2F4QYXSDCZBaGQM2Y2ymFGislzTJGUXRpZ2cBxWfwUJ5KU3QioDWmmo10GHz3IBmkNFFyFIva015rs0qORoNN%2BeJ1y6Igbh%2FchXQ4L7P9KWSNqGsvgW8lL2l8LG3Jw9sJtlnIi6MRnlURXV42hx5JSFsw0I0ok16821Z9hrvzSP5fwrjfRVG5mW0OSPF5wuC0LnHJTDX15%2B9BjqkAciGU7zKKdyK1k3vTya7JIlWe7uaVXoVPJjbea0YFOnXBjbzTYRsfWO5G%2BnSIGl8xpNQWvbSzjltVke02Flbj8w7RKLlJFMhs6KQoaHFAwSpXXzDXIBsDz8mXj8DCNjAgF1DSSDP1zRPjkguU1k8WzpPW%2BwixbDZTidKp%2FmMoUQ0KI6NQT9G8fuQSQPi%2BOZ9rHkeMh2qtgRlLDYfsJJeMIgnzmaf&X-Amz-Signature=aa56420b5f1fab0a66c487b02f48b81c875d7d4148009b0a8816f51bb54fa4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
