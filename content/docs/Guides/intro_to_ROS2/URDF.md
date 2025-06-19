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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3NWKHS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdomuR2Q8KFow7Rpr4P4dFsK6xJvD4BWLOnhmUUHibwAiEAnmDabSv4dBk9KAW2r4ELccwOtHrXJ7f2afv5%2FOG6rvQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVt3z9tWZoe%2BmOUeircAxRBjAsfKq%2Fk4QGDJUb%2BeHAggi7klLVME744nD%2F1%2FA6iTJFdWEEQdsVY%2BdbXGGblKyqcelE1dNk4K2H4tz47UJzS14egLcqtPXuFPXKvGCrkRqKZ%2FqoFvIxMZncz%2FG7VyxFRGyFd5Dz5Pyqcy%2BMae30SRBFDLLLqyyrBro8xZDyE8MMv5LW%2FZZauymTiqoJSg25bHF38tD83R3bXm4kHNEO2qhEIQ9t80NHqr45GtmXvyS7WGiA1JR4dPKfPbQ5rTlxqn56cYytthWZA8qtKnOlvh5%2F3gob3B8q93kdUSPF18JKk%2FkRMjfcgD2gX6b%2Bvuq6hwUt6BQhnwWmRQ%2Fd%2B7RxiGBd52bdrlFAgLHkWS4J64TX4qLGY650eXIAW%2B%2BZvXl9uYOOojSzlT7Jbb%2BzvIPjX%2BZZ09YmvcrIOWPdy7oe1mh2Z2yu3r4MUxcJDUHuulqTXLlufeZeBfnOTWV6L0wYyWVfW%2Bcd2gw9iey5jOPo0t07gfZxM6yeWwKqNe%2BYvOaTG%2BinKtQ2uVIa9a1tO%2B0avE1miM7DXw2lY6EQPa5hkkhWANiwxteCSbIYdjLezDF%2BLC6JmUBT0rEsNj2Xo3WD6WfPbunQSLirORQjGemEaVjrQyfwXoRg%2F4wKcMPSzzsIGOqUBC2V4NQq0ASS27CJPKmCnrtUmOK9AZO1Af%2FzQCWc589RDOcS9JR6M4mXlNbuWoAkx9mYlF3Nd3RhXuoZBHHyvWumSJPphegOndZ6wCe9jYz%2Be1eusfcQsCAeV%2FXX%2FkyV%2FbnVyBVuTDpeuFlJYvsv2gH7rSNhZh%2BUPdfsULDKH%2BL9sdpzGTWkxVIJLQkS8dOBvFD1SgV0YbQaFjWjzpu6qby1%2F12If&X-Amz-Signature=da950d435f25a64dbf6f71393d346816e069925657851bb7dc9bc0469432801b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3NWKHS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdomuR2Q8KFow7Rpr4P4dFsK6xJvD4BWLOnhmUUHibwAiEAnmDabSv4dBk9KAW2r4ELccwOtHrXJ7f2afv5%2FOG6rvQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVt3z9tWZoe%2BmOUeircAxRBjAsfKq%2Fk4QGDJUb%2BeHAggi7klLVME744nD%2F1%2FA6iTJFdWEEQdsVY%2BdbXGGblKyqcelE1dNk4K2H4tz47UJzS14egLcqtPXuFPXKvGCrkRqKZ%2FqoFvIxMZncz%2FG7VyxFRGyFd5Dz5Pyqcy%2BMae30SRBFDLLLqyyrBro8xZDyE8MMv5LW%2FZZauymTiqoJSg25bHF38tD83R3bXm4kHNEO2qhEIQ9t80NHqr45GtmXvyS7WGiA1JR4dPKfPbQ5rTlxqn56cYytthWZA8qtKnOlvh5%2F3gob3B8q93kdUSPF18JKk%2FkRMjfcgD2gX6b%2Bvuq6hwUt6BQhnwWmRQ%2Fd%2B7RxiGBd52bdrlFAgLHkWS4J64TX4qLGY650eXIAW%2B%2BZvXl9uYOOojSzlT7Jbb%2BzvIPjX%2BZZ09YmvcrIOWPdy7oe1mh2Z2yu3r4MUxcJDUHuulqTXLlufeZeBfnOTWV6L0wYyWVfW%2Bcd2gw9iey5jOPo0t07gfZxM6yeWwKqNe%2BYvOaTG%2BinKtQ2uVIa9a1tO%2B0avE1miM7DXw2lY6EQPa5hkkhWANiwxteCSbIYdjLezDF%2BLC6JmUBT0rEsNj2Xo3WD6WfPbunQSLirORQjGemEaVjrQyfwXoRg%2F4wKcMPSzzsIGOqUBC2V4NQq0ASS27CJPKmCnrtUmOK9AZO1Af%2FzQCWc589RDOcS9JR6M4mXlNbuWoAkx9mYlF3Nd3RhXuoZBHHyvWumSJPphegOndZ6wCe9jYz%2Be1eusfcQsCAeV%2FXX%2FkyV%2FbnVyBVuTDpeuFlJYvsv2gH7rSNhZh%2BUPdfsULDKH%2BL9sdpzGTWkxVIJLQkS8dOBvFD1SgV0YbQaFjWjzpu6qby1%2F12If&X-Amz-Signature=48412651728d995dc96b62810fc15d93966c301f829179177171e5c8da0b973f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
