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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC75R36I%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU5iO3keZgnqDWc6KOq2%2BVsFbeb%2BzM9ibfA2X5bFviEAiEArscmko0faTjp5KfS%2F%2Fd22%2FErIfTIxvF%2Fe4laALrLsOEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCmbdS%2FUWX0MMXB2yrcA4n7dvbt3PcLI%2FynKtQ67Xnu3zgXbu2YtAsH4vcEzzySac%2FQDRIaPaStZQA87vwyMYTocAL03i0TdnoQlbxdMXxM%2BVTYQQSXlOkBlcEno%2FekSiFEQlFxkQSXGkdquVye3R4cv5vddNKzXJlerd3edbBdjMmLjQTXlI3rpr3vo%2BOA5Sn846AYFZ1I9dsDsVQ85V4ZGlnvlNuU%2BA%2BQ3%2BtNXfGXW%2FafsRuarqmdPaofIPp5sY7q0vQ88040Rd8woh8ui%2FK56TJk1mUPXWPtUwLqCyeGUVsrbqu4hS9Va6IgkNLGBLQNvpMoFNGAuCnriEUuYYfdjVYsgwAJp4y%2Fx9PM8ChO4gO%2FXbEDQHdaOG6SGhOrIxjlYFkw6s8yu74qez1AW%2Fao%2BgDD0AcPm7m8NDZCbQpeceVS3Ptb3KMPgnVzlUpG224TnYh1rxMzRPQlX9jALwR1OCpEIRHWFNcKkt4OLqlBHWt9NYOS5tCy%2B%2B%2Bu%2B5zJGjbgDa1uowYa%2FZXftbMUFMmILoef0mh4D2dWTA9mPQQmxLnzPWU16uBVas%2F0yBFVentQysjLOdk%2BnM4cqay4PhrLSBIeV%2BCoCZUGy1nQNNsCrWHHM7bwz13StMr%2FkFwhQeX%2FywAJJgXjA1LaMNSF6bwGOqUBC8%2F2iCs%2B8Clnt%2FGQpbZ05SbmKs3f8ft53BY%2BDkIZgReppxuan%2BCZpuVcLHgXfT71gewKHlFJCAGuansa7aMbrEcsCyrFiLA4ejwBfU91W7%2FdOkxnzWFenCN%2BIokKDHKlbMH9IT7sbKHC9YSJm8IXl3ARXkBua2x%2BoNfoc2fy274hXX68L8%2BC%2FkjO8CXfi8FvFY72auNbR258wTSVPb0cpMjr7V%2BX&X-Amz-Signature=af091229bbef19c34b32c60f7a6c255e208c51594ef15734fbbf74a4ec49fd49&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC75R36I%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAU5iO3keZgnqDWc6KOq2%2BVsFbeb%2BzM9ibfA2X5bFviEAiEArscmko0faTjp5KfS%2F%2Fd22%2FErIfTIxvF%2Fe4laALrLsOEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCmbdS%2FUWX0MMXB2yrcA4n7dvbt3PcLI%2FynKtQ67Xnu3zgXbu2YtAsH4vcEzzySac%2FQDRIaPaStZQA87vwyMYTocAL03i0TdnoQlbxdMXxM%2BVTYQQSXlOkBlcEno%2FekSiFEQlFxkQSXGkdquVye3R4cv5vddNKzXJlerd3edbBdjMmLjQTXlI3rpr3vo%2BOA5Sn846AYFZ1I9dsDsVQ85V4ZGlnvlNuU%2BA%2BQ3%2BtNXfGXW%2FafsRuarqmdPaofIPp5sY7q0vQ88040Rd8woh8ui%2FK56TJk1mUPXWPtUwLqCyeGUVsrbqu4hS9Va6IgkNLGBLQNvpMoFNGAuCnriEUuYYfdjVYsgwAJp4y%2Fx9PM8ChO4gO%2FXbEDQHdaOG6SGhOrIxjlYFkw6s8yu74qez1AW%2Fao%2BgDD0AcPm7m8NDZCbQpeceVS3Ptb3KMPgnVzlUpG224TnYh1rxMzRPQlX9jALwR1OCpEIRHWFNcKkt4OLqlBHWt9NYOS5tCy%2B%2B%2Bu%2B5zJGjbgDa1uowYa%2FZXftbMUFMmILoef0mh4D2dWTA9mPQQmxLnzPWU16uBVas%2F0yBFVentQysjLOdk%2BnM4cqay4PhrLSBIeV%2BCoCZUGy1nQNNsCrWHHM7bwz13StMr%2FkFwhQeX%2FywAJJgXjA1LaMNSF6bwGOqUBC8%2F2iCs%2B8Clnt%2FGQpbZ05SbmKs3f8ft53BY%2BDkIZgReppxuan%2BCZpuVcLHgXfT71gewKHlFJCAGuansa7aMbrEcsCyrFiLA4ejwBfU91W7%2FdOkxnzWFenCN%2BIokKDHKlbMH9IT7sbKHC9YSJm8IXl3ARXkBua2x%2BoNfoc2fy274hXX68L8%2BC%2FkjO8CXfi8FvFY72auNbR258wTSVPb0cpMjr7V%2BX&X-Amz-Signature=d3dc0cc775ab0cdcd8a3bcbf921a3e869770f345b8ffa6c0554bdaabedd341b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
