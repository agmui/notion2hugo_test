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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBOI2R7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTfh12c%2B01eNgb9nB06GhLnqP9qsUPaDqmEXkjUwRN2QIgON3cVE1TmoVjwEcIln38h%2B15Q6JVMoX89ZwOVM3%2FwyAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3DrdMlutsicZ3ywSrcA10oxGS8Is5k6kwuG8FuxQH0OPIpOGpjW733Z6uuHkM9NsOmncDFynAkD3KXG92St%2BH7LTomNbFi5Q%2BbVuzJvg22t5XyyeRLIy%2Fce%2BlZNmTMfH%2Bg%2Bx2TYuMWGcjfonfzLJ3JsRZWxMrcLXti3F2lbweJSoMzykQiuKhrSUfPeoB9jcp3AA85f5mhCXY6qgRms%2FFXORHHgMhm2q3%2FtBw9og1zvK4aAFzuwivpg%2BF7mbcRf8ukzHMGXnZ%2Bst72uBBHLdEGievVq7hRpw8%2FmZVAGc7frZUgH4uSQZzQ8LbTpg5bbOJgsPbQhke4vLWWsS2B%2Fcfs9Uv7SUPL5oatxlnhMyX%2F%2BJQChLReZbdQIVXoHmnb7cKZVd4xPuYHhvlIcwqp2hPzaKRuwr7rG5oln66T4Rv1WC2Npx0EQFiTpdCaj%2FXzTsAH2KxV7phwLRFSkhBvhlLEjD5%2BaDoAXnbk5gSXmFOKFqS6PY3pJ87SUusRt9kPUKVJIo0a3O3iZlCScXCcj6QcoQrUBtUQPYhOyYexrEViArmnEQD2b5BCFUawnK64YGxyLjk85%2B0%2FU3eybAFN3l8mQ7J8SG%2FyMPyT7WetKReWNyh%2BMZEQ0li2BrjY1%2FRRBxL9pC7Zz7SvhHQgMJDr2cEGOqUBLdV0bVQi5e7%2FyBrxsmL9OUv3hWh%2FYEimrJpbzpeZr5s1BJ43VD9RkdRLOwd%2Fue%2BQTewLQDTKwAx9TccQtICLI1otMNg4%2FYZhGABW71m0HQBEBxk1GwY8FDD0qpp%2BU%2Bkf1eAqZhAyzlRHi8CVIpnChWxC%2F05Uijjp4CYywFtJuWCmDAuHxaij%2BY7t7Nf%2Fw2%2BrqPon1JyXQyElF6Xj2B3tA0sA%2F3Ym&X-Amz-Signature=fa6dbd76896b84fce377ce03ec576678de5b035f44554cd24ba7243ea1265017&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBOI2R7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTfh12c%2B01eNgb9nB06GhLnqP9qsUPaDqmEXkjUwRN2QIgON3cVE1TmoVjwEcIln38h%2B15Q6JVMoX89ZwOVM3%2FwyAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN3DrdMlutsicZ3ywSrcA10oxGS8Is5k6kwuG8FuxQH0OPIpOGpjW733Z6uuHkM9NsOmncDFynAkD3KXG92St%2BH7LTomNbFi5Q%2BbVuzJvg22t5XyyeRLIy%2Fce%2BlZNmTMfH%2Bg%2Bx2TYuMWGcjfonfzLJ3JsRZWxMrcLXti3F2lbweJSoMzykQiuKhrSUfPeoB9jcp3AA85f5mhCXY6qgRms%2FFXORHHgMhm2q3%2FtBw9og1zvK4aAFzuwivpg%2BF7mbcRf8ukzHMGXnZ%2Bst72uBBHLdEGievVq7hRpw8%2FmZVAGc7frZUgH4uSQZzQ8LbTpg5bbOJgsPbQhke4vLWWsS2B%2Fcfs9Uv7SUPL5oatxlnhMyX%2F%2BJQChLReZbdQIVXoHmnb7cKZVd4xPuYHhvlIcwqp2hPzaKRuwr7rG5oln66T4Rv1WC2Npx0EQFiTpdCaj%2FXzTsAH2KxV7phwLRFSkhBvhlLEjD5%2BaDoAXnbk5gSXmFOKFqS6PY3pJ87SUusRt9kPUKVJIo0a3O3iZlCScXCcj6QcoQrUBtUQPYhOyYexrEViArmnEQD2b5BCFUawnK64YGxyLjk85%2B0%2FU3eybAFN3l8mQ7J8SG%2FyMPyT7WetKReWNyh%2BMZEQ0li2BrjY1%2FRRBxL9pC7Zz7SvhHQgMJDr2cEGOqUBLdV0bVQi5e7%2FyBrxsmL9OUv3hWh%2FYEimrJpbzpeZr5s1BJ43VD9RkdRLOwd%2Fue%2BQTewLQDTKwAx9TccQtICLI1otMNg4%2FYZhGABW71m0HQBEBxk1GwY8FDD0qpp%2BU%2Bkf1eAqZhAyzlRHi8CVIpnChWxC%2F05Uijjp4CYywFtJuWCmDAuHxaij%2BY7t7Nf%2Fw2%2BrqPon1JyXQyElF6Xj2B3tA0sA%2F3Ym&X-Amz-Signature=c516a37c95ffcd91208db1eb5533b095d2d185e54ff2e69ab39cf554fb21d2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
