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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQ2GKN4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGoVglUh%2F1dRZJsQpsUrfDmA%2B63OB9Th4bELYr1iV0sBAiEAueO%2FRkBtw33S%2BtiCNDF6xsPR%2FoErF3sU%2FARS86nxosoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDL%2BUha%2Fb8xHjS5lUmircAypT5Fw9Gk2jPdwH6OESQS%2Bh%2FXGSenDIjMswqTANjQVwGmZdozOv7ekjsXAy8InKBJxzKajgYg0zjs0uVUjEbTw9kvl507fLkU8y%2F2oKiEqqRtG25CnvqEVYdFuvmwBq1rGsxkOPVXeG%2FrPBkt1zzlzI6Q9frzEWug5m4uUMf2ygcA8zZ1UVu5rcaq0kKJaIseYnhL4k4afZJ59IjWUQCH0Cw7Ci5oHeG7Tmjs4vMAYnPYBjvu%2BrI8RrKRca1H7%2FZjJp3ZEbsIBCXTOITbSWuLgXWNPHRt9NDlLXrWVLuYGSUzxCUbGiNIgmHcBJq%2BI9Zr3SXy09qSKxguhYZ76PwT6Ou71ts7EIl2l7rwSreSiOv3C33jIDSIMK5G1WcrxYi9k61Sk5woFmyLPaakAk2tu69jHxCkeN7jIFvBh31XKoLf14wKxz545onvbGMmDgTrSkBle13I1G5yky0ltdVsfY%2BAPOUA2AjG%2FS7Ce19yt4eV09R%2BuGiYYy1dFdeNXEjsCOsxuLHxU74pDoSW3hci8fQKDORPtIg0cEWdhOkmcYW5AUtXCDsXcL2Ul89hCBDxFOufQV9A9xHV3JYwdWWbq1z4C5RxruPdzmp71NSvmZ9aerxauj%2Fb6dnO%2F1MIO73sAGOqUBnaa7iHNkTiX4GYCXF0sWhx5DCZmiBdfisRldu44KNn4BhyD%2FoYUtA%2Bb6z0LH%2FudNqgOeFA3YtCTxWeQx14bSoJVfrTCtH4u2l1qVpnRG1LezwR4wIcpfsY2SKeysXm04CMEpapiZn4tTllR51IaBQuy6zTBidR623Sm07dfJvdlI%2F6Nn%2FVNuKOhIrKBfwtuDzujCvRyefwyop3gnkRhTzKGjLo1s&X-Amz-Signature=15c4bf53149080ab0876db7fcd75a165b27b8c1ae15ff24a83788bed2e344896&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQ2GKN4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGoVglUh%2F1dRZJsQpsUrfDmA%2B63OB9Th4bELYr1iV0sBAiEAueO%2FRkBtw33S%2BtiCNDF6xsPR%2FoErF3sU%2FARS86nxosoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDL%2BUha%2Fb8xHjS5lUmircAypT5Fw9Gk2jPdwH6OESQS%2Bh%2FXGSenDIjMswqTANjQVwGmZdozOv7ekjsXAy8InKBJxzKajgYg0zjs0uVUjEbTw9kvl507fLkU8y%2F2oKiEqqRtG25CnvqEVYdFuvmwBq1rGsxkOPVXeG%2FrPBkt1zzlzI6Q9frzEWug5m4uUMf2ygcA8zZ1UVu5rcaq0kKJaIseYnhL4k4afZJ59IjWUQCH0Cw7Ci5oHeG7Tmjs4vMAYnPYBjvu%2BrI8RrKRca1H7%2FZjJp3ZEbsIBCXTOITbSWuLgXWNPHRt9NDlLXrWVLuYGSUzxCUbGiNIgmHcBJq%2BI9Zr3SXy09qSKxguhYZ76PwT6Ou71ts7EIl2l7rwSreSiOv3C33jIDSIMK5G1WcrxYi9k61Sk5woFmyLPaakAk2tu69jHxCkeN7jIFvBh31XKoLf14wKxz545onvbGMmDgTrSkBle13I1G5yky0ltdVsfY%2BAPOUA2AjG%2FS7Ce19yt4eV09R%2BuGiYYy1dFdeNXEjsCOsxuLHxU74pDoSW3hci8fQKDORPtIg0cEWdhOkmcYW5AUtXCDsXcL2Ul89hCBDxFOufQV9A9xHV3JYwdWWbq1z4C5RxruPdzmp71NSvmZ9aerxauj%2Fb6dnO%2F1MIO73sAGOqUBnaa7iHNkTiX4GYCXF0sWhx5DCZmiBdfisRldu44KNn4BhyD%2FoYUtA%2Bb6z0LH%2FudNqgOeFA3YtCTxWeQx14bSoJVfrTCtH4u2l1qVpnRG1LezwR4wIcpfsY2SKeysXm04CMEpapiZn4tTllR51IaBQuy6zTBidR623Sm07dfJvdlI%2F6Nn%2FVNuKOhIrKBfwtuDzujCvRyefwyop3gnkRhTzKGjLo1s&X-Amz-Signature=379141da99582bfafc82dff70f734a93c00e3bff9cb4bc776ea3c95dd40b1c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
