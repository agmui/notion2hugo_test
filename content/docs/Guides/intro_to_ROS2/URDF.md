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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFLM73N%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBUHJDrWbyuIVLSgpJNyZoo%2BwEi6E%2BT9gJeCGaCP0A3AiEAtE3OSpsxNgb3c%2F217yFgSrtSRhas3Zsilga8tViH44Uq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJUPFFC%2F%2Bpfi3ePPuSrcA2fwWMpOIVqXB6gjPDFxgG2jZzhlsGQYtk%2BeL97umI345MqrcY62LzQLK3CqWHizymCojwALOf8dx624bsPSLvHE1TjMMsNrqLt8mI8PBUYwsyreKkJzmC%2BcoRxHMySW0ah9CJ3ojKHpHEcSmUZM7VDtEFv0JHYQNcvotyArXjFyfbZ3Fz%2F0eIabiq7GASqGkDsJH0nEERbOYdp4pche1W0Fa1E5MinqqgcEmaJp18t5PKvaQwOiVhSr0Y115J4DEOCG8q704Nde5mzcU4wCrXdgenCIMAwVCay2teCKzxLmAjDPWv%2BHmdoI%2Fa4iOdIHSAw5Ay3Na6mUYiB%2BlQMCzedFXAvGJvfN6jKXwi%2BMq4Mdqt29eKQTj%2F5bOc1bGk6BXXPvD3vQZr4DTxkueSHQ%2FT8Y7qCcBLgANTeX13WF2Z0PPYbHo0PgYZ0XRD2PL1CBmwVJ6K%2FBxZKC93%2BjrPWVy%2B%2BHTrwBIl%2FFCxlzBDWU1p0hNuwvPvhbhkDPuA5nwNvKXC%2BY1WuAzkTNRjbF%2Fayai1D%2BH6IJrY6cXZzBVPY8rmXaX17M%2B6NsdfZCZyGUftbofK9T2vSJl4YH8vcd8Z4A232%2BfIr%2BqR4PsGjF2NGibjP93V%2BusrH9xikLCafVMKiakL8GOqUBjz9WL2DDlL04jdoDhXj4IsFA5I%2FPJyO4JLLWFNghLpUj999m%2F6c3YaIutD%2BDTp8LQRFPE5ZPUNRht45ncsYRblJfbHkvSYC%2BrgQ%2BKOyTg%2FZLgPixCnAoQk38hRqmkCWkqrVPabxee%2FmX3zzpUoHliGfP2vM6otT7FwzypEUlMi8ibc7if05ayTGBy4Kl%2B26D3L1cmvXbSHS9qyotca0IIk3SFFza&X-Amz-Signature=5bb96af1ef6dfa5588981a605ca3590f01f785b012504677e3293f1d679fb706&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFLM73N%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBUHJDrWbyuIVLSgpJNyZoo%2BwEi6E%2BT9gJeCGaCP0A3AiEAtE3OSpsxNgb3c%2F217yFgSrtSRhas3Zsilga8tViH44Uq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJUPFFC%2F%2Bpfi3ePPuSrcA2fwWMpOIVqXB6gjPDFxgG2jZzhlsGQYtk%2BeL97umI345MqrcY62LzQLK3CqWHizymCojwALOf8dx624bsPSLvHE1TjMMsNrqLt8mI8PBUYwsyreKkJzmC%2BcoRxHMySW0ah9CJ3ojKHpHEcSmUZM7VDtEFv0JHYQNcvotyArXjFyfbZ3Fz%2F0eIabiq7GASqGkDsJH0nEERbOYdp4pche1W0Fa1E5MinqqgcEmaJp18t5PKvaQwOiVhSr0Y115J4DEOCG8q704Nde5mzcU4wCrXdgenCIMAwVCay2teCKzxLmAjDPWv%2BHmdoI%2Fa4iOdIHSAw5Ay3Na6mUYiB%2BlQMCzedFXAvGJvfN6jKXwi%2BMq4Mdqt29eKQTj%2F5bOc1bGk6BXXPvD3vQZr4DTxkueSHQ%2FT8Y7qCcBLgANTeX13WF2Z0PPYbHo0PgYZ0XRD2PL1CBmwVJ6K%2FBxZKC93%2BjrPWVy%2B%2BHTrwBIl%2FFCxlzBDWU1p0hNuwvPvhbhkDPuA5nwNvKXC%2BY1WuAzkTNRjbF%2Fayai1D%2BH6IJrY6cXZzBVPY8rmXaX17M%2B6NsdfZCZyGUftbofK9T2vSJl4YH8vcd8Z4A232%2BfIr%2BqR4PsGjF2NGibjP93V%2BusrH9xikLCafVMKiakL8GOqUBjz9WL2DDlL04jdoDhXj4IsFA5I%2FPJyO4JLLWFNghLpUj999m%2F6c3YaIutD%2BDTp8LQRFPE5ZPUNRht45ncsYRblJfbHkvSYC%2BrgQ%2BKOyTg%2FZLgPixCnAoQk38hRqmkCWkqrVPabxee%2FmX3zzpUoHliGfP2vM6otT7FwzypEUlMi8ibc7if05ayTGBy4Kl%2B26D3L1cmvXbSHS9qyotca0IIk3SFFza&X-Amz-Signature=fc1ce10b403724d52b57fccc5494c042f404af9c4479a8ab32979fe653fd801c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
