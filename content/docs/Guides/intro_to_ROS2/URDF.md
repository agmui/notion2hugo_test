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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTIDLPJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD8NzQeFU4FKBa%2FReSCUAUJ7AvZRWowz4Jhy9aAxXiq2QIgVwuzhp%2FfCAPFAIZy8%2B0weCeqDGhY%2F5cbwLKUAgauNRAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOY%2BTLz2FZlu3v6dsCrcA94HC4222Pr241CYgNkNeKJSMiKEdPyH9yIXFhaWEWUXZAI86Vukoe2G5tE1n39qBwR5hl0IOtyAodPYWXuqSEjIOZz4Smft%2Fw4UKPJtbX64kAVhTpN2dgKdIcuLuBYYKTszbvk5J1BtrgFaVuTusG6tvzfjcULkFti7G1Vafle9rNKi7oUdyTpH%2BLPdswkG8ewQpy%2BM0Qt5cIma6HK5FFmkqF9c1EGkmXgc%2BKaXhJkN%2BwoLlClZewLC6W%2FIN1GbNZcI21P1P295xXOKsc5NdFtcYGn2k6RZAarNHq8uvAWc0YYdrDPkOx8zNTQ8yHwJKFj8uYGxY7bGB5%2FHDQUzDtaIRwkxyLmDylctgycEP9yuUbwX2Qoq7nKFxXctV1%2FL0s%2BUJwnjXzfGohqXpHKQisKP%2Bqbn8ZeM56zBQ2Xaia65R%2FE62BPItHLo1RCCEB%2FzgOG14KhlT1xmq%2F0AGSpMJjyIro4qcGJVmIP%2BK5TG4WGN6LoNGHXpX2V3Nb%2BoqD5xFoSoupAe1qIimJhVmSI1Pqwc%2F4i6l0lmO7q23WphlrqTdknKW%2FxnZ2vwmX%2FUf6JlVkY1OKXU7zBAGXGuXijKLWuuTgbtpEYz6B%2FtD8mU15GcamI8dxpevsBn1jJRMNyi0cMGOqUBhzt%2BBYcJWI03KDYUus93z1m2VNhmirdKkWSG7gwgq%2FpJRjSFXhzAWGXTcgYUJNepR%2B3c%2Fl%2BLqRORj2LNh1CeDNkMLxmYmUD5bhQDCbvz%2BJyLE7oSXl2IjPArNdYtnJoWL61bo2f5ryKXaynrkcuC0b9OcumXpS04lbb5j3t7nslTcj2q6za%2Fwf1iHkcqc%2BYJb9hMbO7%2BBbU2GVP6T1iZmUSZCFGy&X-Amz-Signature=bee04133297722ee53972af695d4432953001c8c86f266c90e588ac433de6858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTIDLPJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD8NzQeFU4FKBa%2FReSCUAUJ7AvZRWowz4Jhy9aAxXiq2QIgVwuzhp%2FfCAPFAIZy8%2B0weCeqDGhY%2F5cbwLKUAgauNRAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOY%2BTLz2FZlu3v6dsCrcA94HC4222Pr241CYgNkNeKJSMiKEdPyH9yIXFhaWEWUXZAI86Vukoe2G5tE1n39qBwR5hl0IOtyAodPYWXuqSEjIOZz4Smft%2Fw4UKPJtbX64kAVhTpN2dgKdIcuLuBYYKTszbvk5J1BtrgFaVuTusG6tvzfjcULkFti7G1Vafle9rNKi7oUdyTpH%2BLPdswkG8ewQpy%2BM0Qt5cIma6HK5FFmkqF9c1EGkmXgc%2BKaXhJkN%2BwoLlClZewLC6W%2FIN1GbNZcI21P1P295xXOKsc5NdFtcYGn2k6RZAarNHq8uvAWc0YYdrDPkOx8zNTQ8yHwJKFj8uYGxY7bGB5%2FHDQUzDtaIRwkxyLmDylctgycEP9yuUbwX2Qoq7nKFxXctV1%2FL0s%2BUJwnjXzfGohqXpHKQisKP%2Bqbn8ZeM56zBQ2Xaia65R%2FE62BPItHLo1RCCEB%2FzgOG14KhlT1xmq%2F0AGSpMJjyIro4qcGJVmIP%2BK5TG4WGN6LoNGHXpX2V3Nb%2BoqD5xFoSoupAe1qIimJhVmSI1Pqwc%2F4i6l0lmO7q23WphlrqTdknKW%2FxnZ2vwmX%2FUf6JlVkY1OKXU7zBAGXGuXijKLWuuTgbtpEYz6B%2FtD8mU15GcamI8dxpevsBn1jJRMNyi0cMGOqUBhzt%2BBYcJWI03KDYUus93z1m2VNhmirdKkWSG7gwgq%2FpJRjSFXhzAWGXTcgYUJNepR%2B3c%2Fl%2BLqRORj2LNh1CeDNkMLxmYmUD5bhQDCbvz%2BJyLE7oSXl2IjPArNdYtnJoWL61bo2f5ryKXaynrkcuC0b9OcumXpS04lbb5j3t7nslTcj2q6za%2Fwf1iHkcqc%2BYJb9hMbO7%2BBbU2GVP6T1iZmUSZCFGy&X-Amz-Signature=ad2e228be7ab45cfd7f4215ecd289823f6b1a44033f1770683bba784bc79122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
