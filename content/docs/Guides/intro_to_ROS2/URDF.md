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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZMVBK6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCFcjT3lhzo5f5sigRlbp29y3BnF5hSIEBFNnRF2Qd4lQIgN5e0zCh6AMfqadBy%2FKAG0yJbm01vaAcmroxMQGcNQ74q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNg%2BAFgyAe%2FAoDACbSrcA%2FNMfpLjGvFRPcAS4vB%2FXM9W3Teso6xKQXI8PLXGRjXmo7MwX9gDW%2BsUc43ngaBIecsEwxntFGQ1Tun0UPBBqIQ0VrLmYR6DEi1d1CDOKUKmeyr9wayLSs3%2BhRUFFIQnd1ex3xYBKZmDDyUt6XjOrbmySZ2M%2FNemb6EFa8XmfhfRZsCKQbSM2Ky1cTf4q1Rnebde5TQPrPOiq3s4HuGUWEOj2C7uGcITwiDoxtAyw1qr5zAMxvan9D4HOPhXM8zp0F2p%2FL9qe8UZ8kG%2Fpa1Xb5amZdpeL441uJQL9xgCYp11oWVlGXKUYTahop39GyOZ3xnUfXNI6E9XFdcKvgBvmIL2FY%2FnnO%2BjmnqPQHJw6dewHCPNgNoN75I8B7Ay4FefCId7Uo98GHbYzHnQZH%2FTzdtM3O1uA1YcvNurxXGlg8D7XBL0AeX02cOqdJUXBe%2Br6kQ9vTppwsIPsiOMMuCke61sKrcuhxz5VuNUQ4epBl5%2BpuXA3LykRvp8FwYXn7mBoLrGTbclVFD96t9WZJ2GmBQFyZ88wI7o7ioUKeNQTpcDym1J2qEAYdPjxELky3kJYwUe2V%2B33BXF1o%2FHec%2Fhz%2FVoZg9KiKC43Ysp7FmOfbubypKFQRjBxFvJ%2FDNEMI%2Bh98IGOqUBWsHxKPe0tFIoeA8YTYmlN7ivAD7xcFuSs2MWTBmwomjo%2Bywmvjfs5%2BWaiiXn1WVJuMc8Scjn8kWcZ%2BjerachmR6YOnURLkD9qxEmqDfxSS5a9U8xidBc7N94vatj3E%2F%2FEIs6joKCllXTJ7m%2B4wFoJjY9GJkVBxB0Ck98AtDUuU%2FO1GoL%2FEWRDdN3JuLV%2Bc9JJeTMSnwli8GDuG9PEbH2tjIEopnJ&X-Amz-Signature=8981fdf7d2a7c9003f5d03f6ba01dc7555f5d84a1f830badc12f5b593fa5b20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZMVBK6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCFcjT3lhzo5f5sigRlbp29y3BnF5hSIEBFNnRF2Qd4lQIgN5e0zCh6AMfqadBy%2FKAG0yJbm01vaAcmroxMQGcNQ74q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNg%2BAFgyAe%2FAoDACbSrcA%2FNMfpLjGvFRPcAS4vB%2FXM9W3Teso6xKQXI8PLXGRjXmo7MwX9gDW%2BsUc43ngaBIecsEwxntFGQ1Tun0UPBBqIQ0VrLmYR6DEi1d1CDOKUKmeyr9wayLSs3%2BhRUFFIQnd1ex3xYBKZmDDyUt6XjOrbmySZ2M%2FNemb6EFa8XmfhfRZsCKQbSM2Ky1cTf4q1Rnebde5TQPrPOiq3s4HuGUWEOj2C7uGcITwiDoxtAyw1qr5zAMxvan9D4HOPhXM8zp0F2p%2FL9qe8UZ8kG%2Fpa1Xb5amZdpeL441uJQL9xgCYp11oWVlGXKUYTahop39GyOZ3xnUfXNI6E9XFdcKvgBvmIL2FY%2FnnO%2BjmnqPQHJw6dewHCPNgNoN75I8B7Ay4FefCId7Uo98GHbYzHnQZH%2FTzdtM3O1uA1YcvNurxXGlg8D7XBL0AeX02cOqdJUXBe%2Br6kQ9vTppwsIPsiOMMuCke61sKrcuhxz5VuNUQ4epBl5%2BpuXA3LykRvp8FwYXn7mBoLrGTbclVFD96t9WZJ2GmBQFyZ88wI7o7ioUKeNQTpcDym1J2qEAYdPjxELky3kJYwUe2V%2B33BXF1o%2FHec%2Fhz%2FVoZg9KiKC43Ysp7FmOfbubypKFQRjBxFvJ%2FDNEMI%2Bh98IGOqUBWsHxKPe0tFIoeA8YTYmlN7ivAD7xcFuSs2MWTBmwomjo%2Bywmvjfs5%2BWaiiXn1WVJuMc8Scjn8kWcZ%2BjerachmR6YOnURLkD9qxEmqDfxSS5a9U8xidBc7N94vatj3E%2F%2FEIs6joKCllXTJ7m%2B4wFoJjY9GJkVBxB0Ck98AtDUuU%2FO1GoL%2FEWRDdN3JuLV%2Bc9JJeTMSnwli8GDuG9PEbH2tjIEopnJ&X-Amz-Signature=453a272d50b8e1366d66a1e7fbb3bbe99db854102427255983171486f8969ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
