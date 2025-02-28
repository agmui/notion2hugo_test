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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHXVUFX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFHvRphoVcSfUpew5wg9xLhMAQZcROEg7VgjMZP8%2BoDJAiEAj%2FRG6eIy%2BmyksEcTJlB9Qo%2FXScEZIBe0urkbp%2BpG228qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FDXPI1QDW%2BZiyYuyrcA%2FIxk3MPwl4kHajn6A1GR1SwZ0FHoeHQq1C3imBbGi8iJJrJOsOv%2BouEdG0YFWVde0nWLneZDhTCG3USmd6QuWuCuYs%2B0r3vTWHIVjbCctawCG9Nskb56pJmmy%2BdG9P1jcnKQiZYyfcs2HYHPkEy0nk%2B5Gpafgu%2Ftdg7JOZkU3h0iBqtHn3Uego2ZgAOLj0HnY1wPhe0u%2FNInJSknkDEEib%2BeTgA%2B5AbhN9LMwefcAktW7W3x%2BgfGz2MDZoAlURye2gYmSJNrGQiWSl83rhepfRc0wgrr9Ewo655gGjAtjCf%2BckqddFwBS%2FmWRm8Ekdq%2FHPv%2FQDxWF3X5mKy00JAVBQvY8p16dvzd2wx93y1mkcb0K8lEZ1cJd5LhA5rK7wQDGbXQoZHIY3J%2FLB9Y1pHLFmp0P2Gh3X%2BrIlj8hqIF9c8%2Ffa83yOnEnZcSt7wYZiEzCK%2FJe3KbgJ966uvp9qWn58rTMtWYMBFg3AgrjbsR4LfPaWrmlR3tXNxvlDLxaIgafiaAhxtXLCATOb9%2F6OGFJB2paS2%2B6IDuPPQPYP%2FmJ1YUVeKGPyVNEvhBB%2FLvfyvT3Ktmaal712rXC8UlL37pyitmCRE1jOqOWS5KICo6zRXgUPFP5dXphFu9k2iMNiLiL4GOqUBJVXpMRPuqdZ5C1%2FjPmhBsrnEm3wDdcOo%2BLrTaWi45eFpx3xfzrOcuaNo1cfqOhWsPRiF0BdQK1sm0g4gbUfEnb4pdh%2FvSxgF%2Bkwqa5oOIIsZeE2v7GUcWkWeldPCaJA2yX9RfIuu9TECBipwXJt%2BKYdbErinZMAalikVnTiP%2FzknANAywHxGbBda5EJo9tXccqOc0aaRndB1UpzhVdUzGV69Wsou&X-Amz-Signature=e113ac7866a536e13312a2c6bc3e12e263243d938d5ca465691c0dba393f17da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOHXVUFX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFHvRphoVcSfUpew5wg9xLhMAQZcROEg7VgjMZP8%2BoDJAiEAj%2FRG6eIy%2BmyksEcTJlB9Qo%2FXScEZIBe0urkbp%2BpG228qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FDXPI1QDW%2BZiyYuyrcA%2FIxk3MPwl4kHajn6A1GR1SwZ0FHoeHQq1C3imBbGi8iJJrJOsOv%2BouEdG0YFWVde0nWLneZDhTCG3USmd6QuWuCuYs%2B0r3vTWHIVjbCctawCG9Nskb56pJmmy%2BdG9P1jcnKQiZYyfcs2HYHPkEy0nk%2B5Gpafgu%2Ftdg7JOZkU3h0iBqtHn3Uego2ZgAOLj0HnY1wPhe0u%2FNInJSknkDEEib%2BeTgA%2B5AbhN9LMwefcAktW7W3x%2BgfGz2MDZoAlURye2gYmSJNrGQiWSl83rhepfRc0wgrr9Ewo655gGjAtjCf%2BckqddFwBS%2FmWRm8Ekdq%2FHPv%2FQDxWF3X5mKy00JAVBQvY8p16dvzd2wx93y1mkcb0K8lEZ1cJd5LhA5rK7wQDGbXQoZHIY3J%2FLB9Y1pHLFmp0P2Gh3X%2BrIlj8hqIF9c8%2Ffa83yOnEnZcSt7wYZiEzCK%2FJe3KbgJ966uvp9qWn58rTMtWYMBFg3AgrjbsR4LfPaWrmlR3tXNxvlDLxaIgafiaAhxtXLCATOb9%2F6OGFJB2paS2%2B6IDuPPQPYP%2FmJ1YUVeKGPyVNEvhBB%2FLvfyvT3Ktmaal712rXC8UlL37pyitmCRE1jOqOWS5KICo6zRXgUPFP5dXphFu9k2iMNiLiL4GOqUBJVXpMRPuqdZ5C1%2FjPmhBsrnEm3wDdcOo%2BLrTaWi45eFpx3xfzrOcuaNo1cfqOhWsPRiF0BdQK1sm0g4gbUfEnb4pdh%2FvSxgF%2Bkwqa5oOIIsZeE2v7GUcWkWeldPCaJA2yX9RfIuu9TECBipwXJt%2BKYdbErinZMAalikVnTiP%2FzknANAywHxGbBda5EJo9tXccqOc0aaRndB1UpzhVdUzGV69Wsou&X-Amz-Signature=fff0f913235e5ca7557940ee95c0aed5950dfecfb1d818f743087a4826ce7f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
