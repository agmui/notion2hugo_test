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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3C47PSW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnAuVrHMfPjEYEIsDgg1hIguYh4vQSke20a7whuQ6vZAiBB%2FJp6TcU%2BAhl%2Boom2SGFt7lc25SHMdbwprcIbv%2FyEeSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTDVhomQjlgN8bckeKtwDvUtf0GMifc0BDpOTiAyHDam7IO5XOeCyhH%2FzeqfAAUlzoEW9K2X1RoaNG6XZF6aTZvvPJEAF2U5sSReGSks%2FzxBD3%2BDZRLwQ3vU3jgl1AMVll9jJ8ADiyWvj38PU%2FdyIfcXB6eXsKDcq%2FW9Bsnzgk%2BreGdhOsIj4B2Eaj7dZnLhXfNmHKIySYYXro0%2F%2FNjkLJHfdZQZdBFeZ0MLVDUijuOHACErN3%2Fd5rKT3MXc6MI190Zjv8VpvuzhKuLoNHpQo0%2BZBCBW3%2FliBppE4z94nHSPakuHaIxdwmNYhQktYRV3UZ9yZvsEl%2F38FW1ubUpotNP1NuKw4oRmhD9vRPxE76QaK5b6M4jpcMjsrQmFJPfGtwnLp7uBUxdrBRW%2BUsddZd7Czm7%2FreYUaiE42r7HySuCEdBLQcXJMwYgHPb1nQJcxZ84iXE7s4jeOSbL%2BK4uxzLZ9M9Iy1nTW3Vg9CcIncLzFhsd9I4gHN9Nnxh0rLeR9NFR3GMoHMh%2FM82EqI68ELsBicTAvnormF78MF3UAQ83uIM42OyOM%2F9SNDZEuu0jQsMCoEZ3ZqdTfu9nbOs2nfqVxXWl8OgiCRJ%2BhZTlVbVQ9wiYTht%2BRVc0q1thb1enAXYJlimFwYB%2F%2FmyQw7p7KvwY6pgGzPzwS9OjaZcNKNiNu5k81JqHSeERS1X9aW4KLA1xy7XHH08KR3Ka3gOEfODD7G0eaVsO3D35JdXZBFpOUGTcn55zFSsqcJQchFyEuxCJ5X0jODpLUVoe0j35XHFkWW%2FR85Cbl5pI%2BhNAtSy6FdzOcdP5Od%2FvuPE59sSIxLhXopoMa9GICioy0G0ziOBwpWmG969vo%2B%2F17iMupRfWeg1XPtWSsfxkQ&X-Amz-Signature=4fa133ddc0d459ace637c784ba1f79d55ba85275a208c1910c1acdb7d52d2f20&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3C47PSW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnAuVrHMfPjEYEIsDgg1hIguYh4vQSke20a7whuQ6vZAiBB%2FJp6TcU%2BAhl%2Boom2SGFt7lc25SHMdbwprcIbv%2FyEeSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMTDVhomQjlgN8bckeKtwDvUtf0GMifc0BDpOTiAyHDam7IO5XOeCyhH%2FzeqfAAUlzoEW9K2X1RoaNG6XZF6aTZvvPJEAF2U5sSReGSks%2FzxBD3%2BDZRLwQ3vU3jgl1AMVll9jJ8ADiyWvj38PU%2FdyIfcXB6eXsKDcq%2FW9Bsnzgk%2BreGdhOsIj4B2Eaj7dZnLhXfNmHKIySYYXro0%2F%2FNjkLJHfdZQZdBFeZ0MLVDUijuOHACErN3%2Fd5rKT3MXc6MI190Zjv8VpvuzhKuLoNHpQo0%2BZBCBW3%2FliBppE4z94nHSPakuHaIxdwmNYhQktYRV3UZ9yZvsEl%2F38FW1ubUpotNP1NuKw4oRmhD9vRPxE76QaK5b6M4jpcMjsrQmFJPfGtwnLp7uBUxdrBRW%2BUsddZd7Czm7%2FreYUaiE42r7HySuCEdBLQcXJMwYgHPb1nQJcxZ84iXE7s4jeOSbL%2BK4uxzLZ9M9Iy1nTW3Vg9CcIncLzFhsd9I4gHN9Nnxh0rLeR9NFR3GMoHMh%2FM82EqI68ELsBicTAvnormF78MF3UAQ83uIM42OyOM%2F9SNDZEuu0jQsMCoEZ3ZqdTfu9nbOs2nfqVxXWl8OgiCRJ%2BhZTlVbVQ9wiYTht%2BRVc0q1thb1enAXYJlimFwYB%2F%2FmyQw7p7KvwY6pgGzPzwS9OjaZcNKNiNu5k81JqHSeERS1X9aW4KLA1xy7XHH08KR3Ka3gOEfODD7G0eaVsO3D35JdXZBFpOUGTcn55zFSsqcJQchFyEuxCJ5X0jODpLUVoe0j35XHFkWW%2FR85Cbl5pI%2BhNAtSy6FdzOcdP5Od%2FvuPE59sSIxLhXopoMa9GICioy0G0ziOBwpWmG969vo%2B%2F17iMupRfWeg1XPtWSsfxkQ&X-Amz-Signature=bd5dfd4f162bdc15a37a4e0f55328d8fa5992da0ecc1611cd2ba53dfcaa2fa36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
