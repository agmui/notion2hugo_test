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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZZAJLN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC4vh0bJP02qI7vVo3yTfjs7b6jKFpl41PFl1NUdgTqrwIgIU84j0vdZvdE167cbuq%2BHo%2FdmARVKCofkffhoQ2a6TUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAwBjY4h3fpmFXGY4ircA05CDDsvnwt1yMU4w6bC4yOS97hGKyCcmrjI%2BsoMoNvMg7XYKDg6YtodqPtztGyxAWfApP1wgGVRx%2B5Inw6SPFdYghKEQ%2Frv6XfWE9%2F2My5yg7pFjhjvbibPDerozwSPjH3qBxIh53%2FQIXR6RNihQhOesZK2bTNElyDDnNMmQTUD%2FOLmYqDOH5EztZEWx6TuLzL0qivcELfamPE777UMYbMN7zjmk5LZ6kKfP2ZCmezmNP9ZL1l%2B%2FZ7PGaLL22lbX%2BEiYPqHUtjs1WzNZ%2FoccZsLujNZWbhqlWb1yRzr8Be1hXQnu4t6VtwLhPEaPaweTb%2FpyWUvaJvzjkuR3l4ejWjxYe2mK1LJTryqwenxQ7PHsR%2F%2FalyMVxAn3xZ%2BzsD17T9xJm0AP5SAKINY%2Bo0KrtPE2rzDnnD%2Bt5xCxIQIq%2F5Q60fyjpBIeCXoilllu%2BrvOdPGnpM3yP4yPzFXyZXTxfLh0zqasHsltTjN3G7WtJGNIMnyHqqMlMREDJIkdbZSSKzTcuBBPeF0gWtaV2RwW13MrkbSfJJ7gG5OMw%2FNNChz%2BGAJnjl349sAoAovIx8wg9B8z4lP1rZQIriMYfihQDwRkv7NZjkkxu5Y7oiDWjAoq8ywnLQK9fEZosvkMPS7jr0GOqUBr9Mop3EAFKUhz%2BP1OsjA8%2Bdk3cpH5xCsdx8NMf%2FHGRsZBmo5%2F4Jt3d5XNUZFOmEcL81SkLkNF5%2BVTKqtSMWhDdQ3G1hVark60mMGG3pjPNEbn1ysNDectX1bI4Of6ZO9ckhJV7eiLs8TaX9XWbyH29atJMVxLnWrN2SzpzF01nOLFKii2gDOR0iHCrce2OcYZFY%2F4%2FivYbrweRV3FD64eapKqdER&X-Amz-Signature=01625d47b162713622595f802f4ea966c8e3146eb92978ede4421229999e5782&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZZAJLN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC4vh0bJP02qI7vVo3yTfjs7b6jKFpl41PFl1NUdgTqrwIgIU84j0vdZvdE167cbuq%2BHo%2FdmARVKCofkffhoQ2a6TUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAwBjY4h3fpmFXGY4ircA05CDDsvnwt1yMU4w6bC4yOS97hGKyCcmrjI%2BsoMoNvMg7XYKDg6YtodqPtztGyxAWfApP1wgGVRx%2B5Inw6SPFdYghKEQ%2Frv6XfWE9%2F2My5yg7pFjhjvbibPDerozwSPjH3qBxIh53%2FQIXR6RNihQhOesZK2bTNElyDDnNMmQTUD%2FOLmYqDOH5EztZEWx6TuLzL0qivcELfamPE777UMYbMN7zjmk5LZ6kKfP2ZCmezmNP9ZL1l%2B%2FZ7PGaLL22lbX%2BEiYPqHUtjs1WzNZ%2FoccZsLujNZWbhqlWb1yRzr8Be1hXQnu4t6VtwLhPEaPaweTb%2FpyWUvaJvzjkuR3l4ejWjxYe2mK1LJTryqwenxQ7PHsR%2F%2FalyMVxAn3xZ%2BzsD17T9xJm0AP5SAKINY%2Bo0KrtPE2rzDnnD%2Bt5xCxIQIq%2F5Q60fyjpBIeCXoilllu%2BrvOdPGnpM3yP4yPzFXyZXTxfLh0zqasHsltTjN3G7WtJGNIMnyHqqMlMREDJIkdbZSSKzTcuBBPeF0gWtaV2RwW13MrkbSfJJ7gG5OMw%2FNNChz%2BGAJnjl349sAoAovIx8wg9B8z4lP1rZQIriMYfihQDwRkv7NZjkkxu5Y7oiDWjAoq8ywnLQK9fEZosvkMPS7jr0GOqUBr9Mop3EAFKUhz%2BP1OsjA8%2Bdk3cpH5xCsdx8NMf%2FHGRsZBmo5%2F4Jt3d5XNUZFOmEcL81SkLkNF5%2BVTKqtSMWhDdQ3G1hVark60mMGG3pjPNEbn1ysNDectX1bI4Of6ZO9ckhJV7eiLs8TaX9XWbyH29atJMVxLnWrN2SzpzF01nOLFKii2gDOR0iHCrce2OcYZFY%2F4%2FivYbrweRV3FD64eapKqdER&X-Amz-Signature=6db1ac5673f5a2747e9969341d975d810c0f5b50e5c07aa16de1a3ccf778f84c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
