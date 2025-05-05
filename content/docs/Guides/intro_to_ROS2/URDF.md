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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZS2XLG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgyDzUxl0jqVeaAa9be4CwKOoCXB7oLdiL4EWuze%2FttwIhAIv1KB3CaBN0FP9HG8EOufb2tqMrnpBPVS%2BB2Anrlu6CKv8DCDQQABoMNjM3NDIzMTgzODA1IgwNuCK4QZ7ktZRKKtoq3AOS9Cjo8bT6%2B%2B8SjlmmkJz6YpSEMjs7Bom%2ByJ0Y1clQFPCrxJuNyS9ncz2eOf01ZoUCw1DoR2n2CrlltmVJ67XehVPHaLCZH9qpYpG3LkYKs6Lw1eBsdhvmeDjOlOqPVebxxy%2Bor9F5YrDayOiATKUkAKS8suDhzWy8KzEghk3OlXjENp8kVisZ78gt1TK%2F7MQ9H0ihYM2FA5ie%2BHjjQRkY75ALH6uSaPp2S%2FFUZ%2FnyawkaQysIBY%2BY0z9z4uiI4laAzEfVmzA6mb4uVPJAvOzblSyX3TA1y%2FMX50Y%2BFuqSfyGLQgty%2FcV2BZYfVCAn5PDeUqssbsuoW4Rj6AgHS7UlXIL%2Faa8pBhjn8ESEQOabmzUdqBy%2BsWPejx9aKIzRjQyxTHmiqySOT4eybQy8RCrWy2U8ZlWQSN%2BBKG%2B%2BbfBlI%2F3kJ9Wxy11uzPMT9zpZVp7ufHncjx4fbD66zLpTxv6%2Buo6ab7beMvhyBBTu4BzwncL8nUmsWTTPJtkrTCskcVUGQ%2FzgYA65HHVKait0CJd%2F67j0X8JZ1wFndlCdqFn%2B%2FGC0t9AXh9GIS%2B29ptH4%2F2KYSXjeJvpdE1iiCLRj3GBeAGPpw5uaM25Rvif8jWfQxyRrR0Yrt4bbOu3jWzDgleTABjqkAQbKI7qGCRYDEUu14asM%2Fazqm8k02yNPeHO9MmxOGTVXmcNA%2FeO%2B7itGTQiLKTkJhupwsVR3KdWzOebrZGqhmEKDg3ASAwWC8%2Fjn6qrdQ9hCJxcLhMUuPhs1FmD4SIurRG%2FwPFIxd4GAffTEDUXIyhgHn4rxY3lulYc2qHt7Fkts4NRPwms0cr2XoIEJ1BediEdTKJTScKGzSgXxUQ963G4pjPpG&X-Amz-Signature=dfeb79b0e102044586710873fde14163d2e40c5fd365ee5981484ef19490bf39&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZS2XLG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgyDzUxl0jqVeaAa9be4CwKOoCXB7oLdiL4EWuze%2FttwIhAIv1KB3CaBN0FP9HG8EOufb2tqMrnpBPVS%2BB2Anrlu6CKv8DCDQQABoMNjM3NDIzMTgzODA1IgwNuCK4QZ7ktZRKKtoq3AOS9Cjo8bT6%2B%2B8SjlmmkJz6YpSEMjs7Bom%2ByJ0Y1clQFPCrxJuNyS9ncz2eOf01ZoUCw1DoR2n2CrlltmVJ67XehVPHaLCZH9qpYpG3LkYKs6Lw1eBsdhvmeDjOlOqPVebxxy%2Bor9F5YrDayOiATKUkAKS8suDhzWy8KzEghk3OlXjENp8kVisZ78gt1TK%2F7MQ9H0ihYM2FA5ie%2BHjjQRkY75ALH6uSaPp2S%2FFUZ%2FnyawkaQysIBY%2BY0z9z4uiI4laAzEfVmzA6mb4uVPJAvOzblSyX3TA1y%2FMX50Y%2BFuqSfyGLQgty%2FcV2BZYfVCAn5PDeUqssbsuoW4Rj6AgHS7UlXIL%2Faa8pBhjn8ESEQOabmzUdqBy%2BsWPejx9aKIzRjQyxTHmiqySOT4eybQy8RCrWy2U8ZlWQSN%2BBKG%2B%2BbfBlI%2F3kJ9Wxy11uzPMT9zpZVp7ufHncjx4fbD66zLpTxv6%2Buo6ab7beMvhyBBTu4BzwncL8nUmsWTTPJtkrTCskcVUGQ%2FzgYA65HHVKait0CJd%2F67j0X8JZ1wFndlCdqFn%2B%2FGC0t9AXh9GIS%2B29ptH4%2F2KYSXjeJvpdE1iiCLRj3GBeAGPpw5uaM25Rvif8jWfQxyRrR0Yrt4bbOu3jWzDgleTABjqkAQbKI7qGCRYDEUu14asM%2Fazqm8k02yNPeHO9MmxOGTVXmcNA%2FeO%2B7itGTQiLKTkJhupwsVR3KdWzOebrZGqhmEKDg3ASAwWC8%2Fjn6qrdQ9hCJxcLhMUuPhs1FmD4SIurRG%2FwPFIxd4GAffTEDUXIyhgHn4rxY3lulYc2qHt7Fkts4NRPwms0cr2XoIEJ1BediEdTKJTScKGzSgXxUQ963G4pjPpG&X-Amz-Signature=0ed8e2d79de022cb77e12e42ca8ca7dd22e01b7096db04e42e7f2bb2d1c7151d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
