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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOEITK4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCmBamPIaDNRsYN0FPiic1HDL9pShveDlhiFU6pecaHZgIhAMXfhIH%2F9BZiNhEv9OqR%2F2k50sS0xI1%2FEGL%2FN7Z7YLF5Kv8DCBUQABoMNjM3NDIzMTgzODA1Igy%2BhJyi%2BiUBoMCpUr0q3AOP7MONZ90aHAp29%2BjGlQmJDBxVCgJqnzkyjAgkbeRX8YC5gpNyAXVqpV3Sc29prJsgkPdLdjjK9WggLYWCAPOvuoSMLINjRFIl0aiayS2wpuyYXqEbyHgpWiOPbe9CtBCgOlDZHQ%2F3SZVk4s2rNgx4ifMxFxtRMRhwFQMx99DsXdcIJjvTRv8h2KU4l43z7Kazusd1HejSK1rnkTg3KgDW8%2BxhOdtERLz5qOJkZdo2JiksYAN5SL%2FtCW7NiNuVtEzUFgDo6UMd2BM3D0JaAlgVx07QeteGHPaUt63CZX2GM4DFNuoj64tOJwHBvLaSyO9PntfDOavWGUJveJKJhu7cMuNKhz0nMOblOsTV9PB6oTK26QlzAXdFmCGBgcAWejy4bjulIJC3%2BvnkmQoUsrUCq3%2FpCk%2BhCmmE%2FbxJ9oarvDU9eC0XgNJHI23yR52AYyr1w63aVnNDtgONRWssTgKy%2FS3dgysgiSmm5rwpuFclHnlpjM6zfotvUF%2FdETVzign24DBUlOKPaHMsxmw7bqE7VJpks0NxdA9SCioFt%2BbPXZvzyfpvxT%2FKr%2FrHNfGn%2Bjgv5e1m%2F1kBCx2wwz5kuks4v6D1TCRYOGgmzuTEaWUjyS8XPW%2BpoKqXr2O7cDDGqbDCBjqkAbaFKJpKHKzdgg3L8sE8%2BZ%2FUyHKykVnfxYrAurbH11pQOrFu%2BjRXJrd0zpN%2BkhLh6VApBUvyYaOMbKPvPhjXzaKX3gr7P%2FUmadz3nIDDrSeoHeQIa4Zb9OQ%2FvSjkXUM90rN3arr2ubHrbihHyD87M5SLjZsHGQg8A4YMDTRPEBqySE96YzFkClma397VYkYrSXyjAt845Od79EKL8C4j5fbfwdPt&X-Amz-Signature=f4b1ccb5ed8b19c2d75e6cd34b05e1c09301f502bf08ea7aa4cbe83806068093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOEITK4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCmBamPIaDNRsYN0FPiic1HDL9pShveDlhiFU6pecaHZgIhAMXfhIH%2F9BZiNhEv9OqR%2F2k50sS0xI1%2FEGL%2FN7Z7YLF5Kv8DCBUQABoMNjM3NDIzMTgzODA1Igy%2BhJyi%2BiUBoMCpUr0q3AOP7MONZ90aHAp29%2BjGlQmJDBxVCgJqnzkyjAgkbeRX8YC5gpNyAXVqpV3Sc29prJsgkPdLdjjK9WggLYWCAPOvuoSMLINjRFIl0aiayS2wpuyYXqEbyHgpWiOPbe9CtBCgOlDZHQ%2F3SZVk4s2rNgx4ifMxFxtRMRhwFQMx99DsXdcIJjvTRv8h2KU4l43z7Kazusd1HejSK1rnkTg3KgDW8%2BxhOdtERLz5qOJkZdo2JiksYAN5SL%2FtCW7NiNuVtEzUFgDo6UMd2BM3D0JaAlgVx07QeteGHPaUt63CZX2GM4DFNuoj64tOJwHBvLaSyO9PntfDOavWGUJveJKJhu7cMuNKhz0nMOblOsTV9PB6oTK26QlzAXdFmCGBgcAWejy4bjulIJC3%2BvnkmQoUsrUCq3%2FpCk%2BhCmmE%2FbxJ9oarvDU9eC0XgNJHI23yR52AYyr1w63aVnNDtgONRWssTgKy%2FS3dgysgiSmm5rwpuFclHnlpjM6zfotvUF%2FdETVzign24DBUlOKPaHMsxmw7bqE7VJpks0NxdA9SCioFt%2BbPXZvzyfpvxT%2FKr%2FrHNfGn%2Bjgv5e1m%2F1kBCx2wwz5kuks4v6D1TCRYOGgmzuTEaWUjyS8XPW%2BpoKqXr2O7cDDGqbDCBjqkAbaFKJpKHKzdgg3L8sE8%2BZ%2FUyHKykVnfxYrAurbH11pQOrFu%2BjRXJrd0zpN%2BkhLh6VApBUvyYaOMbKPvPhjXzaKX3gr7P%2FUmadz3nIDDrSeoHeQIa4Zb9OQ%2FvSjkXUM90rN3arr2ubHrbihHyD87M5SLjZsHGQg8A4YMDTRPEBqySE96YzFkClma397VYkYrSXyjAt845Od79EKL8C4j5fbfwdPt&X-Amz-Signature=7490ce4438904cd705151b0fb8aa4db22823be2edf731d7d0b8ce1fd69101114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
