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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR66RVZ5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BaMxg%2F%2Bnu7jnjjRIUv%2BpQc5g8xIE4j4LSVoh0jVMiwAiBQY0FevHfk7q56B8BSORl56lWM%2FIB1dhuFqQ%2BjkE7Y%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1clEeflDtG%2BLZxltKtwDjCu31hV5NBoXl788o5QS%2Bxx7tNIXTNdIa7XKBEB8yTRZekjQ26VPKArQidehy22ihFYU%2Bf788C9P6fYSRAtC1IWtFeciAettdbmJ5fnfXzdLyqiAZIdNbe%2FyQrK4tU3IiOFQ2EIH047TnEO4ZLMDLn0rfb40yp5tQJyf2a1zx8olqC%2Fv0%2FnSiL7zmlk6gOHK2ja4HU5RUmQBdmhRalHnRgaU%2FhZvEHLSvJC2u95qFGf8FXtrQpVdpBqWClaIpY1hBx40kx%2FnRac9fx%2BUSFWXw4PSS%2FsIOPzFC4tE65Zy3Q%2FefTZNoejrhdspELib%2B8CLEECf%2FG7BDWbIji02qyF91kT8xUtjNwReg3SPvBw70NcKfDt0Tew635I1YiRhxF7H8D9NuOTNNXzw4xtCeJioLDd8yNGkLO2RVgwS32BL8IyS%2Bg8ZYrHs7FWGwGTi7z9lBv7dkjMfRN0ifc%2B1ckCDzjqw4fSBpYqjFcZkNFu%2BArGxkLdt2mwByL7YiU97KSFHuuNv6iIWDXlzZAcchUjrzCrjHIj6CQAzODp41Z1%2FqgyuuOM4W31DyYE04lECeL638XYU0QvkLObyogObI1RogNrkIlc3BWat1oyka32gZBgwkMDON8rUnCG0ic4wq%2BTcxAY6pgHwQbIro9ctT7bUsiPWN4wue1%2BU5N%2B6bxTxwSwxT87eHDneMmqVy%2FGJWZ2En2XZQgBVb8aOkm%2FHdAo2eX2z2y%2BUpbHIiHfXCFZyBukEhEvpY3koQA5h7sjljDa6euodFCvqgMzuLaZRkLfLd%2B0jyhfSAJBoVxrZ3R9EIdvWUnXVzoYpuLfQFmG7SKn%2BwaeRM%2BtEH0XW9x3P5asBcLoFw%2FdXZP0MxV3v&X-Amz-Signature=cdea89ef52c0e9f3f69102f2ea11c1988f782c8f49ee853e36ba7ded37b72672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR66RVZ5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BaMxg%2F%2Bnu7jnjjRIUv%2BpQc5g8xIE4j4LSVoh0jVMiwAiBQY0FevHfk7q56B8BSORl56lWM%2FIB1dhuFqQ%2BjkE7Y%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1clEeflDtG%2BLZxltKtwDjCu31hV5NBoXl788o5QS%2Bxx7tNIXTNdIa7XKBEB8yTRZekjQ26VPKArQidehy22ihFYU%2Bf788C9P6fYSRAtC1IWtFeciAettdbmJ5fnfXzdLyqiAZIdNbe%2FyQrK4tU3IiOFQ2EIH047TnEO4ZLMDLn0rfb40yp5tQJyf2a1zx8olqC%2Fv0%2FnSiL7zmlk6gOHK2ja4HU5RUmQBdmhRalHnRgaU%2FhZvEHLSvJC2u95qFGf8FXtrQpVdpBqWClaIpY1hBx40kx%2FnRac9fx%2BUSFWXw4PSS%2FsIOPzFC4tE65Zy3Q%2FefTZNoejrhdspELib%2B8CLEECf%2FG7BDWbIji02qyF91kT8xUtjNwReg3SPvBw70NcKfDt0Tew635I1YiRhxF7H8D9NuOTNNXzw4xtCeJioLDd8yNGkLO2RVgwS32BL8IyS%2Bg8ZYrHs7FWGwGTi7z9lBv7dkjMfRN0ifc%2B1ckCDzjqw4fSBpYqjFcZkNFu%2BArGxkLdt2mwByL7YiU97KSFHuuNv6iIWDXlzZAcchUjrzCrjHIj6CQAzODp41Z1%2FqgyuuOM4W31DyYE04lECeL638XYU0QvkLObyogObI1RogNrkIlc3BWat1oyka32gZBgwkMDON8rUnCG0ic4wq%2BTcxAY6pgHwQbIro9ctT7bUsiPWN4wue1%2BU5N%2B6bxTxwSwxT87eHDneMmqVy%2FGJWZ2En2XZQgBVb8aOkm%2FHdAo2eX2z2y%2BUpbHIiHfXCFZyBukEhEvpY3koQA5h7sjljDa6euodFCvqgMzuLaZRkLfLd%2B0jyhfSAJBoVxrZ3R9EIdvWUnXVzoYpuLfQFmG7SKn%2BwaeRM%2BtEH0XW9x3P5asBcLoFw%2FdXZP0MxV3v&X-Amz-Signature=36118afccae67877cc725296c1c6e4ec1f98bd899b20db7c8a77a0e2b73dffac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
