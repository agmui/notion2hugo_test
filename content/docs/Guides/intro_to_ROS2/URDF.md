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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSB53TL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA7lQJP4LpA2oND3%2Bn%2B05tTXHHtoxveVTDaNNcyfI5MQIhAOia1%2FF%2FW4dWoGVfJzEGMWkPPtlWehCKs95YFYTEw%2B%2BkKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxufKT3FCBVIbhh4PIq3AMQy2JMM7c%2FVuTTdFcmyyBr%2FE49rVTWI7Z3NMYA0JfnED%2Bg5%2F2KXXik%2FA3JdIc0lASI9AS3e3xzfxT%2FZrXs5cMTCbaTY3BpFhOktLW37k4cP0EkJmiT8MXGvjse1%2BdnwaaRnxzrWcJc260mbfDRmhkQF6PKU%2F%2FskNO4LCdVk3PFQDmwPRNkoEt2PPPNv8Xysw%2BSMh2HiBnPiq0SIIh%2BncDcSqcharXOM8l5c7wNmu%2FQ17K5X5zXu4pxZ1BvFMMG2amr6bZpJ8m%2FycAaz7AY5KrKqjAzZsFiu1QBpM1r7PDMvb%2FqpTfloUdsGoia7h23Femd2MLTMlGLlXIE8Wbma5yJZrcaV0Y5PuLVKLj8QAaQ3quphySbzFX9fa2yCZRbhC23h%2FnTXSa%2FEnVPNZoKesM8oU6WSDEEEJLt%2B5%2BJjXusIJnSUPUKs3r1lraIWxkvGWZfb5EQsd5h6iz5VuddRM6mbkZQ%2BYtzCJ%2B2EzjUZVo2Mznjlo4IMa4pZ8d4NCiYnp%2F6T6Tr68XzVe%2BzRazJb3laNwYgfYLuwwe%2FHL2ZxZy4SpeVLz%2Bdxe1NP%2BKLbBCt5%2BxmJ7TXRudZ%2FqZyzpTwwer1s7173EgHdkrQ%2FR9PxtCdyTSUKWxp3MwR8Oe22zDciKvBBjqkAdOYxCgN4Y5W6tLDebwyjFzdjlNlk1%2BmsI8kLM3WzFNewQbkVMuu3k1C0D4vKH0vPiqtYEo%2BalSnTRR2Rh4hKIIB8mhZW%2B7O5YX6LYJbIi7ic2pP%2BhQkrQ9vhWDoQ%2FraBZa8FpOXwOB7aWFn573qi1yBsmIG4smMmvDw%2FZt363AwwP%2FaipuzQSg8S%2BxC0RfXi4vJUZjpoWnFa%2BCOYhlR1EHIVzFT&X-Amz-Signature=afd5ae8f5421c9a1d0a1f0098707a7b43f3fa8b759179e513232d6bd39f62f46&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSB53TL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA7lQJP4LpA2oND3%2Bn%2B05tTXHHtoxveVTDaNNcyfI5MQIhAOia1%2FF%2FW4dWoGVfJzEGMWkPPtlWehCKs95YFYTEw%2B%2BkKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxufKT3FCBVIbhh4PIq3AMQy2JMM7c%2FVuTTdFcmyyBr%2FE49rVTWI7Z3NMYA0JfnED%2Bg5%2F2KXXik%2FA3JdIc0lASI9AS3e3xzfxT%2FZrXs5cMTCbaTY3BpFhOktLW37k4cP0EkJmiT8MXGvjse1%2BdnwaaRnxzrWcJc260mbfDRmhkQF6PKU%2F%2FskNO4LCdVk3PFQDmwPRNkoEt2PPPNv8Xysw%2BSMh2HiBnPiq0SIIh%2BncDcSqcharXOM8l5c7wNmu%2FQ17K5X5zXu4pxZ1BvFMMG2amr6bZpJ8m%2FycAaz7AY5KrKqjAzZsFiu1QBpM1r7PDMvb%2FqpTfloUdsGoia7h23Femd2MLTMlGLlXIE8Wbma5yJZrcaV0Y5PuLVKLj8QAaQ3quphySbzFX9fa2yCZRbhC23h%2FnTXSa%2FEnVPNZoKesM8oU6WSDEEEJLt%2B5%2BJjXusIJnSUPUKs3r1lraIWxkvGWZfb5EQsd5h6iz5VuddRM6mbkZQ%2BYtzCJ%2B2EzjUZVo2Mznjlo4IMa4pZ8d4NCiYnp%2F6T6Tr68XzVe%2BzRazJb3laNwYgfYLuwwe%2FHL2ZxZy4SpeVLz%2Bdxe1NP%2BKLbBCt5%2BxmJ7TXRudZ%2FqZyzpTwwer1s7173EgHdkrQ%2FR9PxtCdyTSUKWxp3MwR8Oe22zDciKvBBjqkAdOYxCgN4Y5W6tLDebwyjFzdjlNlk1%2BmsI8kLM3WzFNewQbkVMuu3k1C0D4vKH0vPiqtYEo%2BalSnTRR2Rh4hKIIB8mhZW%2B7O5YX6LYJbIi7ic2pP%2BhQkrQ9vhWDoQ%2FraBZa8FpOXwOB7aWFn573qi1yBsmIG4smMmvDw%2FZt363AwwP%2FaipuzQSg8S%2BxC0RfXi4vJUZjpoWnFa%2BCOYhlR1EHIVzFT&X-Amz-Signature=8bb953bcbb6e8a12f4bb3dda4da3084f73e7ea1812df1e70e8063e2cc8da9f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
