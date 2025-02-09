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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNY4B6P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBigGjJH%2Fnz2qBD5E3rf3Q11mniUXURwc9vGHGx8w65XAiAPmAk61eThA5NXBzQFHRV8nFp142AFwGK7C8R78qENASqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYknsx%2Fcqq9w2iQegKtwDyDElkPrOcDtJYZonXzGqMHgnB%2FhYgMrEx6RvMd%2BuMUUY65BfHDDHg5ykl1GChPNKDc7O93UK%2BXDNKyHkLi0P0TMSqBJw0todZXaHWZK8bCoCqnr1ziAByPzaxD9920vn5WB51%2FxMUrVpFyvEdJ07jiPbg3bHcNTjp8yIn1yXua8S5aBIeObaP%2F1KkvZjGwYX6YTxC1Bkkfj4C7HXSM6%2Be%2Bci%2FQRjv%2FdIFJyVbqbNONq4aekltFLQ4q6h4FhxEjC6bKxjMVHWsSEAxOERtoJrnFXzF3U98itUYtrJJNnG8N4VbuldH%2BwOfYQIuEZTY%2FNkzEYrEOWuW5ptN%2FATJoDBoPf7vXL9oEyJGNda9lCY4mmKDAzm1CQ82iurNbVTAgCwegLIPi%2BjFPnc1u1jCM%2F4diIXFB3bjHqY02OmzUeEkhz8MmV%2FM993PtO3TzuQdobFWmSbePY3yzNO78tNF4PU0VrzQdSQi2bWMKtTF7cb6u2pyu9AuiAJUWmVtq%2B4Kw6aLwYEC6UDBKxdcPDCy%2FoqkLw2KpOWfv81Dyj%2BuTc4vRFJspYj6iCLxv6%2F6pdIWqanqL41X9WqhByfD1%2FlJ8WY0Jd8GQtj1Z%2BVG26q2mx8ovzUCjoBeunwbgyCw0sw8r6gvQY6pgHUwOENale4k7orjXA3qbHgDLpWhf3r5PoCkTUQA4KyL1pGDw7AaIrkvjx6iukXSBKJAcA40Rz4guCSSR8lWDdHt3xhBKb3RTXri8jCagzxWhugsKreTDsF98jWJSx2fGHvxjZP1DQxKJeJAs83NGoEpOIRY1N5%2Fz%2BHpAf5%2FRkNQ873%2FNw3peuEMxYXk4EfdWgj8SZkVFm95cuoNa0wv5syI5iC6Ktw&X-Amz-Signature=ddf19d44b9e411ec5869499f01e8a1b250bc5ec3ac888673053b8b506e0516dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LNY4B6P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBigGjJH%2Fnz2qBD5E3rf3Q11mniUXURwc9vGHGx8w65XAiAPmAk61eThA5NXBzQFHRV8nFp142AFwGK7C8R78qENASqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYknsx%2Fcqq9w2iQegKtwDyDElkPrOcDtJYZonXzGqMHgnB%2FhYgMrEx6RvMd%2BuMUUY65BfHDDHg5ykl1GChPNKDc7O93UK%2BXDNKyHkLi0P0TMSqBJw0todZXaHWZK8bCoCqnr1ziAByPzaxD9920vn5WB51%2FxMUrVpFyvEdJ07jiPbg3bHcNTjp8yIn1yXua8S5aBIeObaP%2F1KkvZjGwYX6YTxC1Bkkfj4C7HXSM6%2Be%2Bci%2FQRjv%2FdIFJyVbqbNONq4aekltFLQ4q6h4FhxEjC6bKxjMVHWsSEAxOERtoJrnFXzF3U98itUYtrJJNnG8N4VbuldH%2BwOfYQIuEZTY%2FNkzEYrEOWuW5ptN%2FATJoDBoPf7vXL9oEyJGNda9lCY4mmKDAzm1CQ82iurNbVTAgCwegLIPi%2BjFPnc1u1jCM%2F4diIXFB3bjHqY02OmzUeEkhz8MmV%2FM993PtO3TzuQdobFWmSbePY3yzNO78tNF4PU0VrzQdSQi2bWMKtTF7cb6u2pyu9AuiAJUWmVtq%2B4Kw6aLwYEC6UDBKxdcPDCy%2FoqkLw2KpOWfv81Dyj%2BuTc4vRFJspYj6iCLxv6%2F6pdIWqanqL41X9WqhByfD1%2FlJ8WY0Jd8GQtj1Z%2BVG26q2mx8ovzUCjoBeunwbgyCw0sw8r6gvQY6pgHUwOENale4k7orjXA3qbHgDLpWhf3r5PoCkTUQA4KyL1pGDw7AaIrkvjx6iukXSBKJAcA40Rz4guCSSR8lWDdHt3xhBKb3RTXri8jCagzxWhugsKreTDsF98jWJSx2fGHvxjZP1DQxKJeJAs83NGoEpOIRY1N5%2Fz%2BHpAf5%2FRkNQ873%2FNw3peuEMxYXk4EfdWgj8SZkVFm95cuoNa0wv5syI5iC6Ktw&X-Amz-Signature=6f83b4fbb3faa14b6da951855dbda070ee78b338880633b7354c26132c655689&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
