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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSZT2CY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvNZq9G3qZb0OG04Fs%2FXH62odAH3%2Fs77Giz7h55UaFRAiEAphP2I3HQxhemrcAMflJLAzI7gS6XgGC9KAIt6XE%2BrMUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE05Ugattu3UcohWyrcA7lJb6tdJ9HHRzZ6CNVX6A9JPf7NF8%2FrXWYRf2uWO705fGSLpcj%2FZrOSZ7E12GGRnrdT2pM484noVSjc%2Bh%2BWecnS1rAFnyevcCB7btcEOqE1Wd1BtqSA5G%2FE0GowUQ6dMh9qB1pWhpHX12DgrkAyNJugFvor1TTyhoQd7WwsUKdrW%2F52o%2FAnZwBZXZVgI5HtA9oMxTVgFc4V%2FSGDrDQQPfR9Bb921HFz98EXzXVR7MuveHVZ94kq6zmnKdCV4O%2B72GsCCjdmUXmI9EIimr%2FsNabzOexZSidm6NHCTbJZ%2BK35ayLRvkUZGhHZg2PIxlbey2rzDEKdc8%2BLLdlunqaJp79oBeA3n8YUKzesgx7mepZvmZsdWU3gRZwZzf%2BTzcMJC4kNiD0%2Bx7pHDefacN4ghGaeu9Rybb3p7bYbyIn3VWA4DGMQAJDqJGpzpd7RaKhmzaGTG5vXdwiZoOCkxE3feArC2w%2Bw28CqZ56pErB6ajEk0ctIJVINfzKH3fXhM6sBfZL37KBIP0hK6Gew3OFpgb2KLbcBejo9kmv0ZUuuLbgrvVaSKTKfXSdDduMYeywfdnkQX2BKXvWYotHi1WaOCHfgf%2BHNJ0ZYHtRslBi1YO5JkLAHlGu7s5UAqftHMIuQpL0GOqUBu8OHIq6AatxIAuEhIi7yLPkheiAiwwcnwpXY04BY0Qr8D0ddm3SxNL7mES2wuHBUPCNff155TORJ9A88XItM1Gy4vIsuY3z4mIiXJzdDP7xJGEAozETPIT8hUS6q2TNvphMpHjHo0KJThopRjUA8txRoGQaBpvlrodCBPHH20cb7iamcV%2F%2FIZmZVx3CBCPNlgxmuk9bNXY5cbwAlRQDIiWo78ngO&X-Amz-Signature=61adb5663c14492a6a636ed9917f47a0a97bda2c46d02570b166e2ab7ea8f036&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFSZT2CY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvNZq9G3qZb0OG04Fs%2FXH62odAH3%2Fs77Giz7h55UaFRAiEAphP2I3HQxhemrcAMflJLAzI7gS6XgGC9KAIt6XE%2BrMUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKE05Ugattu3UcohWyrcA7lJb6tdJ9HHRzZ6CNVX6A9JPf7NF8%2FrXWYRf2uWO705fGSLpcj%2FZrOSZ7E12GGRnrdT2pM484noVSjc%2Bh%2BWecnS1rAFnyevcCB7btcEOqE1Wd1BtqSA5G%2FE0GowUQ6dMh9qB1pWhpHX12DgrkAyNJugFvor1TTyhoQd7WwsUKdrW%2F52o%2FAnZwBZXZVgI5HtA9oMxTVgFc4V%2FSGDrDQQPfR9Bb921HFz98EXzXVR7MuveHVZ94kq6zmnKdCV4O%2B72GsCCjdmUXmI9EIimr%2FsNabzOexZSidm6NHCTbJZ%2BK35ayLRvkUZGhHZg2PIxlbey2rzDEKdc8%2BLLdlunqaJp79oBeA3n8YUKzesgx7mepZvmZsdWU3gRZwZzf%2BTzcMJC4kNiD0%2Bx7pHDefacN4ghGaeu9Rybb3p7bYbyIn3VWA4DGMQAJDqJGpzpd7RaKhmzaGTG5vXdwiZoOCkxE3feArC2w%2Bw28CqZ56pErB6ajEk0ctIJVINfzKH3fXhM6sBfZL37KBIP0hK6Gew3OFpgb2KLbcBejo9kmv0ZUuuLbgrvVaSKTKfXSdDduMYeywfdnkQX2BKXvWYotHi1WaOCHfgf%2BHNJ0ZYHtRslBi1YO5JkLAHlGu7s5UAqftHMIuQpL0GOqUBu8OHIq6AatxIAuEhIi7yLPkheiAiwwcnwpXY04BY0Qr8D0ddm3SxNL7mES2wuHBUPCNff155TORJ9A88XItM1Gy4vIsuY3z4mIiXJzdDP7xJGEAozETPIT8hUS6q2TNvphMpHjHo0KJThopRjUA8txRoGQaBpvlrodCBPHH20cb7iamcV%2F%2FIZmZVx3CBCPNlgxmuk9bNXY5cbwAlRQDIiWo78ngO&X-Amz-Signature=0a1607b174594613d5eeceb5027dbcbf1b8f364a04c0a9ce47fc5e0ad5f83032&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
