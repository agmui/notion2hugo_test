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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGIG7AH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDha%2Bonvm0ApBDxUX9713%2FWhj%2FSahOWaEK4WWk2xlwmMgIhANow9v%2BFcN5lz1zSfEkRucWYy1uwqtS%2FZm8cf%2FbGMW7FKv8DCEIQABoMNjM3NDIzMTgzODA1IgzDo5wPzGYNEMs467Uq3APW5GJMZAsAXGQDw%2FESt0ioZltcSWTE7T4FnS2A9xVPTljgcxl3SNvlcNpj%2F14Tg7J6%2BEHTqHCJ0iRI0Mxy40toLUF80KxxZHmIJFWjtvMZbgKyFJYn%2Ft1AKQ%2BJUYbqBXW1LbFVa9O0gdFpX6uTfpnlPZ1bsFHUCbwkFabVPu5wa7IsJ4hUoALw1exdeJ6dL6SKq93xLa2gIhBiQEWezcvjVHEl2wdaOz%2FFtzb3bTHz7BN6aRf%2BcmP5%2B97Ipt577MFp6tUxu2Eo4iMYkaFxb2irLyBLqywbHo4TNcRfKZIMLly0yNRjQi%2Bimk9fbFBf0%2FVMNyvQMRt9nlWtt5mtuUJ0POkHbilpQZrVyy0oe3M28xRzdXVjLUhDx59gEX7rIeFeOkp7gY0NhQIN56z8zaOMBrWJTjSu249%2FKcfr8dt1R4%2F%2FJVj%2B5shlMc72Hwxy00c%2FVn%2FdlBJ%2FrUT7AzE2Ot3tFp8wV5nq3xMxUFEjSf%2BSFojZ%2B3AmlcRf%2BiIMUbt0vP2caFlu2l%2BznYVX3bADrLLzx8%2F8E8k0fObLMSURhG%2FVSqI85mC3elNB4XKuxCXy3ryh82%2FeMt%2FIIfNAYQ1%2F9GVVs1kpo%2FYVpkmR3p9bwqY69MeGTe4RC1p36t9A7zCa5qq%2BBjqkAQjRqORW8cjpN%2FFw7qjkrrZmHsOQDKoW3Pm6QlsSDv2sS%2FN%2F%2BOvdDOPj7jUG3CE2PzfEwqYHYc7rid9W48z6XSMqWFgcvqDhVxyaKyie%2Fw67KPXdvJnBUN07eWVkCVqRRZaiWOnw9iK1EqdPBr9y9hhV9Pk%2B0RERYVuSdmb%2BuCLz1UkxOoIjtJ3Y5kFYYn%2FnrFJ9esDts6XjEXBUVqNeiIAeLyXl&X-Amz-Signature=e0279f6fbc6da66457b486c3391b5020ce17762de495a517743ef241f377ad45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGIG7AH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDha%2Bonvm0ApBDxUX9713%2FWhj%2FSahOWaEK4WWk2xlwmMgIhANow9v%2BFcN5lz1zSfEkRucWYy1uwqtS%2FZm8cf%2FbGMW7FKv8DCEIQABoMNjM3NDIzMTgzODA1IgzDo5wPzGYNEMs467Uq3APW5GJMZAsAXGQDw%2FESt0ioZltcSWTE7T4FnS2A9xVPTljgcxl3SNvlcNpj%2F14Tg7J6%2BEHTqHCJ0iRI0Mxy40toLUF80KxxZHmIJFWjtvMZbgKyFJYn%2Ft1AKQ%2BJUYbqBXW1LbFVa9O0gdFpX6uTfpnlPZ1bsFHUCbwkFabVPu5wa7IsJ4hUoALw1exdeJ6dL6SKq93xLa2gIhBiQEWezcvjVHEl2wdaOz%2FFtzb3bTHz7BN6aRf%2BcmP5%2B97Ipt577MFp6tUxu2Eo4iMYkaFxb2irLyBLqywbHo4TNcRfKZIMLly0yNRjQi%2Bimk9fbFBf0%2FVMNyvQMRt9nlWtt5mtuUJ0POkHbilpQZrVyy0oe3M28xRzdXVjLUhDx59gEX7rIeFeOkp7gY0NhQIN56z8zaOMBrWJTjSu249%2FKcfr8dt1R4%2F%2FJVj%2B5shlMc72Hwxy00c%2FVn%2FdlBJ%2FrUT7AzE2Ot3tFp8wV5nq3xMxUFEjSf%2BSFojZ%2B3AmlcRf%2BiIMUbt0vP2caFlu2l%2BznYVX3bADrLLzx8%2F8E8k0fObLMSURhG%2FVSqI85mC3elNB4XKuxCXy3ryh82%2FeMt%2FIIfNAYQ1%2F9GVVs1kpo%2FYVpkmR3p9bwqY69MeGTe4RC1p36t9A7zCa5qq%2BBjqkAQjRqORW8cjpN%2FFw7qjkrrZmHsOQDKoW3Pm6QlsSDv2sS%2FN%2F%2BOvdDOPj7jUG3CE2PzfEwqYHYc7rid9W48z6XSMqWFgcvqDhVxyaKyie%2Fw67KPXdvJnBUN07eWVkCVqRRZaiWOnw9iK1EqdPBr9y9hhV9Pk%2B0RERYVuSdmb%2BuCLz1UkxOoIjtJ3Y5kFYYn%2FnrFJ9esDts6XjEXBUVqNeiIAeLyXl&X-Amz-Signature=f4e819d5b37f96bbf75c2f3150dd6c8efa68715aa2f89a65b0dffddb3bba749f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
