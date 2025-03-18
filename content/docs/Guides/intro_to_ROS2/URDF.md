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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAV4TEUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFQK4E%2Fl9drFEL1DtVQipUJHiPL62d0LohtqzItuF8d6AiEA6Z4cYiOkm4dbARAjsIt1nltqnVq2ZEwV%2FkEsMMX5TfAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHTRTPEcM4Lp3u%2BKcircA0YPJhzgMseONesm7%2BXpukt5mBs4xoSzDttF2KrnfIuDJXedK5XXyqiOUVlfui%2BmsJ%2FvmrvFu3pCOF0CGHJWABKwXiEg6K5hantTdSiZU1X4oPcqeHPGLJ4%2BhoRB0VR9DyC1RkliWhVzfnsZTPO9O3ZTblsVCIv17ZoYuI05FZ3wLSfjdmW1Yxv%2BY3pbPEgLq6ho5C%2F7BoeT6E9Q1W04K3K%2BvllB4bYlj9IVuTVCwZAZ%2FwTG9r4xS23xNh%2FDFrsR15ns4kH2%2BW3b3LKn6KylHCto0u67SocdPDLRBqDOqX7HmPiK%2FXTAK3pWnVhB9FU667nHsRDrRip0TnLIilnmmtfLOALTsObXL1A08KqGSRBqndOqkz8Cmb%2Bm9Oq%2BxJpiAVy5kbn8MZuavoyj5jMXk0wo4xkY00foMHC1Ujnh93ig30IeJq0pYIW0uONSaIUakrDnmWIGHFo28x7PlJSJT2noqK8wKe8Oui13qQVCGS39s%2Fguxy0K2SiVghi5LG%2B8tFao1JId%2FSioIyPKWzPaXpX5GvUBSyFirsfDQep0O%2Bmd%2BjhryT3AjaaFTqz4C3r%2B6MELY%2Fz%2Be6s%2FiEHwGJDcL2kd8x9OapZaDWfZoE89MFSwxLUprn3HHbgtvk8nMNDU5r4GOqUBdcHnCPNlzNU1l05vWFPpQTFdPTSxzoPCS4xfOzB%2B05YU%2FrM54NTt3xA4o4nVle03R6Vz%2FpcoMjw6YXEGLE6GaD0bBoCpjd9flsPR3bCW6ookrRFjCc%2BuBE24cgDrA2vjWk0Qoeyni61wlik6UAlCej79rRNrSjH6ZmyTOgKkviq6jiD5120k8BW0eF7%2BEd10HhLYCbpk8qgdcuz%2B0R%2FkptlAptRq&X-Amz-Signature=06a22076bf08df0b5db4c99ae06bac9a654e8cad2724fd66bc3d5704403f20be&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAV4TEUJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFQK4E%2Fl9drFEL1DtVQipUJHiPL62d0LohtqzItuF8d6AiEA6Z4cYiOkm4dbARAjsIt1nltqnVq2ZEwV%2FkEsMMX5TfAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHTRTPEcM4Lp3u%2BKcircA0YPJhzgMseONesm7%2BXpukt5mBs4xoSzDttF2KrnfIuDJXedK5XXyqiOUVlfui%2BmsJ%2FvmrvFu3pCOF0CGHJWABKwXiEg6K5hantTdSiZU1X4oPcqeHPGLJ4%2BhoRB0VR9DyC1RkliWhVzfnsZTPO9O3ZTblsVCIv17ZoYuI05FZ3wLSfjdmW1Yxv%2BY3pbPEgLq6ho5C%2F7BoeT6E9Q1W04K3K%2BvllB4bYlj9IVuTVCwZAZ%2FwTG9r4xS23xNh%2FDFrsR15ns4kH2%2BW3b3LKn6KylHCto0u67SocdPDLRBqDOqX7HmPiK%2FXTAK3pWnVhB9FU667nHsRDrRip0TnLIilnmmtfLOALTsObXL1A08KqGSRBqndOqkz8Cmb%2Bm9Oq%2BxJpiAVy5kbn8MZuavoyj5jMXk0wo4xkY00foMHC1Ujnh93ig30IeJq0pYIW0uONSaIUakrDnmWIGHFo28x7PlJSJT2noqK8wKe8Oui13qQVCGS39s%2Fguxy0K2SiVghi5LG%2B8tFao1JId%2FSioIyPKWzPaXpX5GvUBSyFirsfDQep0O%2Bmd%2BjhryT3AjaaFTqz4C3r%2B6MELY%2Fz%2Be6s%2FiEHwGJDcL2kd8x9OapZaDWfZoE89MFSwxLUprn3HHbgtvk8nMNDU5r4GOqUBdcHnCPNlzNU1l05vWFPpQTFdPTSxzoPCS4xfOzB%2B05YU%2FrM54NTt3xA4o4nVle03R6Vz%2FpcoMjw6YXEGLE6GaD0bBoCpjd9flsPR3bCW6ookrRFjCc%2BuBE24cgDrA2vjWk0Qoeyni61wlik6UAlCej79rRNrSjH6ZmyTOgKkviq6jiD5120k8BW0eF7%2BEd10HhLYCbpk8qgdcuz%2B0R%2FkptlAptRq&X-Amz-Signature=8ea16f5191c99b996a2970f43653d47a1d8df55c38a46e8891f1e39e6f3eea06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
