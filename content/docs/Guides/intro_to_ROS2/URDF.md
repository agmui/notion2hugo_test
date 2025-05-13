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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBBL3OS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHnNoNeSK70LDtE7uruqXEKbax9SfXOsrWsmNA%2Bc%2BGF6AiA16JfwlU%2FEF6dcidlZjlbGj%2F5qVAyoCkYBOv2co4toqSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5yh%2BMX%2BkeTe1JTsSKtwDZCPLs6%2B7duA%2Fzucbi4rqZYJeYherq1JSMTVfhUa%2BSrIZH5SSuXVKNK%2BnJ1e9MG%2B3W%2F6GP%2BquZP4J11Dl2yIAK3w2Wg9NCTDBsbNmE1aGrVQSuDrwT12NO5a0OOa5T4HmoIH0f87XwO81XUopIE2ZCDPyjcldiSM6BWn2yhprg3IlM9LZ4M49x3xN1%2F%2FxTlKtzp54z30sT2ywjkPlIy1qcymM9eSwRNDHQzv%2BaXM1gOiE%2ByTKUrtD8DrD%2BT9VVMUufmDMXFs6xxG43Acv3Ny4Ad1ZNYn41uPsXkkgpunkYVgRCIeL6ACbImWoILnFjlWnSAl9vTgmGALZ0tMon28qvdcxgT7Ushzg6qqORPRjNUECDXzhqos%2BPdeFd9u1XEg6WC9iY2O2ZJK6V11SgRUvuCQSautEGKWyaq0whQtcu4CY2dGupBwHsUr5LOjhmre%2BE4Cq2w6sgkk0OpwCiwFGs1oFItTthFe5nuVOG22f%2BSmPoEn8WGhnh1ulj%2Btn5%2FS8nzsF1YxjLIW%2FXOeIazCFpdQVTVyIOefvkkJqSXrMZrG03hunr%2BSTjZaU%2B3waP3PDgDWOMWVc4LSTefhqox3y2VXi7HFQLpaArYwRJcYmoFZa5q99nBI7pgCYI0swjtqMwQY6pgGWpgqUjR5mFRSnleaKNPcMZ%2FpCuDAi9%2FyjeK%2BEDFYHs%2B16C2pJBtQhj%2BUqp95JnXmocRVnsFVFQhbBdoiCSCp2j2KsqwsE5SjBpfSzsmh7K34x%2Bl6vcDd9aXPTId9UQE3O4iqSSyYMkGgwr%2B7IMBngsM6BRk6aldI2HlmHMQLVQ47ahXgVbcwEZjcK4%2BfBXzzATP9mbx79SRZRQd0osaB6PVp%2BGVp5&X-Amz-Signature=c96e9a8fb5a22ef7704bbf9b4dd15ef4f46c75c4f9a93c77d9f13d3723ca7b44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBBL3OS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHnNoNeSK70LDtE7uruqXEKbax9SfXOsrWsmNA%2Bc%2BGF6AiA16JfwlU%2FEF6dcidlZjlbGj%2F5qVAyoCkYBOv2co4toqSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5yh%2BMX%2BkeTe1JTsSKtwDZCPLs6%2B7duA%2Fzucbi4rqZYJeYherq1JSMTVfhUa%2BSrIZH5SSuXVKNK%2BnJ1e9MG%2B3W%2F6GP%2BquZP4J11Dl2yIAK3w2Wg9NCTDBsbNmE1aGrVQSuDrwT12NO5a0OOa5T4HmoIH0f87XwO81XUopIE2ZCDPyjcldiSM6BWn2yhprg3IlM9LZ4M49x3xN1%2F%2FxTlKtzp54z30sT2ywjkPlIy1qcymM9eSwRNDHQzv%2BaXM1gOiE%2ByTKUrtD8DrD%2BT9VVMUufmDMXFs6xxG43Acv3Ny4Ad1ZNYn41uPsXkkgpunkYVgRCIeL6ACbImWoILnFjlWnSAl9vTgmGALZ0tMon28qvdcxgT7Ushzg6qqORPRjNUECDXzhqos%2BPdeFd9u1XEg6WC9iY2O2ZJK6V11SgRUvuCQSautEGKWyaq0whQtcu4CY2dGupBwHsUr5LOjhmre%2BE4Cq2w6sgkk0OpwCiwFGs1oFItTthFe5nuVOG22f%2BSmPoEn8WGhnh1ulj%2Btn5%2FS8nzsF1YxjLIW%2FXOeIazCFpdQVTVyIOefvkkJqSXrMZrG03hunr%2BSTjZaU%2B3waP3PDgDWOMWVc4LSTefhqox3y2VXi7HFQLpaArYwRJcYmoFZa5q99nBI7pgCYI0swjtqMwQY6pgGWpgqUjR5mFRSnleaKNPcMZ%2FpCuDAi9%2FyjeK%2BEDFYHs%2B16C2pJBtQhj%2BUqp95JnXmocRVnsFVFQhbBdoiCSCp2j2KsqwsE5SjBpfSzsmh7K34x%2Bl6vcDd9aXPTId9UQE3O4iqSSyYMkGgwr%2B7IMBngsM6BRk6aldI2HlmHMQLVQ47ahXgVbcwEZjcK4%2BfBXzzATP9mbx79SRZRQd0osaB6PVp%2BGVp5&X-Amz-Signature=a4815a9777c9354db0411963e3dffbf4ef6db19b8dd3e112a3dbc4f2a6cdc82c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
