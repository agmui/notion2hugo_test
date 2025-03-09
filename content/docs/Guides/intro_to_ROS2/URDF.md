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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVXSTNK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDplUhqUnPPQU2FN6KMwQ5szg11M6%2BVji71SduMu9XsQAiEA3a7PW9sAsHNAwA5ACJDdDMuktcnd6V2JWm55p9fWbtsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGGDdX6uBymT%2FQHGsSrcA0GGtSdzUo83lznHajyHEnRqxwFyoc5z2WZdc7uXjyi0G%2BNeY%2FD9pbsBg3ZteuMw6IHd0Zl2BMiGwlqxJPX05iB5Kis84QoUvV7ych9c1GhYYc7SXn0Kb1REkuz5BKkdaRgwjfuoO3PZ4aYm8ZYzvSg%2FefTLFP38ryYOpHmcyJZhOsAhBO81l8ZjSAVY3DhylJGVfz16GkOXKAIis3CfnfYrcvSQ8JOyzxKZXixfjPdpuIZptR51jv8u2pXaz75oPJNMRGP5gzL7b8mJ68K1QuCpQXmaP9IYIq8k%2B6jEb4ggzFyik5HUQMcIUTrL4q2175%2ByszTkGZEVIf0JxgdNV3W780IM5o4xZ6920h2%2BebVId%2Fw0FnQD9f%2BWGPfBtx9WuksjYGzxlIPCPe5AjBMjKpNC%2BfsRTBRi%2F8BKTh4VjUdisnL22fa9tAJtMikreHgqND0FLv7UGLEefgzT1qoRMYCZZowylgrwByhapxTxI35MS7dpAdj3BbsX19gJ6jj7S5xxRIJN%2BjOoWdBiHGM5hGS0S1EgcwN%2Bby70j1MUgC7prPEqa5iHUSPs%2FMTzdix34ReN2%2B%2BAQoiNyA5s2BwtAE8NU7hLjxNTxUJJd2jqJxHGaFrZs%2FUpHtJ6mlxHMN3rtL4GOqUBTeK6ckcgrKY9BmYZcZx2xUAIVMltAUR5KvqCWJ2wN08xW1OE5LOmLvbbCLq2vw0D5KcW%2FJgRzqVI7MzuXXBNiszUzhznXogGcL0zR%2BWXOuxNOJ4xNfbWp0ewPFySNeYfyGL4O5dqcv2raxAY%2BrYmIHGeoLaJSfkZ%2BDy%2FXGQrYlQc8wUTi%2B1qNrPmCXX93jrkK0dUBKouqlhZfEo3ward%2BXOZKUBh&X-Amz-Signature=459588f9e83014a702b4e7fba413401ec5451b74a7f8c8702165903734c8e4da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAVXSTNK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIDplUhqUnPPQU2FN6KMwQ5szg11M6%2BVji71SduMu9XsQAiEA3a7PW9sAsHNAwA5ACJDdDMuktcnd6V2JWm55p9fWbtsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGGDdX6uBymT%2FQHGsSrcA0GGtSdzUo83lznHajyHEnRqxwFyoc5z2WZdc7uXjyi0G%2BNeY%2FD9pbsBg3ZteuMw6IHd0Zl2BMiGwlqxJPX05iB5Kis84QoUvV7ych9c1GhYYc7SXn0Kb1REkuz5BKkdaRgwjfuoO3PZ4aYm8ZYzvSg%2FefTLFP38ryYOpHmcyJZhOsAhBO81l8ZjSAVY3DhylJGVfz16GkOXKAIis3CfnfYrcvSQ8JOyzxKZXixfjPdpuIZptR51jv8u2pXaz75oPJNMRGP5gzL7b8mJ68K1QuCpQXmaP9IYIq8k%2B6jEb4ggzFyik5HUQMcIUTrL4q2175%2ByszTkGZEVIf0JxgdNV3W780IM5o4xZ6920h2%2BebVId%2Fw0FnQD9f%2BWGPfBtx9WuksjYGzxlIPCPe5AjBMjKpNC%2BfsRTBRi%2F8BKTh4VjUdisnL22fa9tAJtMikreHgqND0FLv7UGLEefgzT1qoRMYCZZowylgrwByhapxTxI35MS7dpAdj3BbsX19gJ6jj7S5xxRIJN%2BjOoWdBiHGM5hGS0S1EgcwN%2Bby70j1MUgC7prPEqa5iHUSPs%2FMTzdix34ReN2%2B%2BAQoiNyA5s2BwtAE8NU7hLjxNTxUJJd2jqJxHGaFrZs%2FUpHtJ6mlxHMN3rtL4GOqUBTeK6ckcgrKY9BmYZcZx2xUAIVMltAUR5KvqCWJ2wN08xW1OE5LOmLvbbCLq2vw0D5KcW%2FJgRzqVI7MzuXXBNiszUzhznXogGcL0zR%2BWXOuxNOJ4xNfbWp0ewPFySNeYfyGL4O5dqcv2raxAY%2BrYmIHGeoLaJSfkZ%2BDy%2FXGQrYlQc8wUTi%2B1qNrPmCXX93jrkK0dUBKouqlhZfEo3ward%2BXOZKUBh&X-Amz-Signature=57fdb12a0f93a8c6899881e344801f8df6447544750cb006c0db77f7f35ea608&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
