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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUADNC3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtPbKjFaxPjPptCymurVJPjAyZdOwX1dz%2BobdDrgTKVAiBPNy5Wb320ZOLsnmXkbf%2FW0twW1zsDA4pTxot0iYotbyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMoPXV2J7gb9exfeGyKtwD5YoWbRDwzrlVb%2BSfbida99lN7WSjboGvJPoj6ZJpWuP%2BxBQib5R%2FI1TonpVYNGp8RfEwMT0vGohyP6WixJ8KT%2F8X5MDm5M%2F%2Bv1MEbfPGXY3OOOu8PfK0A36u9ux50JhSO0tOQ5D0JeQgOY%2FEv%2BzK9xlJRgvScQl18ZzK6pqIKJGDHDEwahQi8AnEF6Oji22c6zBgSXML9h8ePscz0WRzuA6pT3fOAxKalVR46NFnKXA5oX%2F3H68rk8dBLUvkpmwAHWX2%2BfWrMHUVtFUh2EjlsWyHTZNWyCRrZbqQCuMGAPDZX6K%2BHcMt9hOhlUoJEJzHU1Knw6MZEuT0zbEkO9Mn374IU6Kj52Iezwr6%2BmUfiMkkPK3KT6lRDMp2P4vGcAcz5FA0GwB6IPmJCmupgAh8S6bYNmFuhzzdszUArt8UvxDC36im%2Fasqo4TgFKgABQlbD8Nw06cz5yW0DtP9rWnJL0IWvSrrdYwMoCdUV7fD7mKKpnvv6edwwfV4YzgrKR5V5g%2BqFwSQHc0mL5N6L08jDAK1Mj4wVSiS8OtUa6YOzxgqezZ87pMWif3HxJx8TOOICR2HLtkNM8dI8mVz6CFpZy2H1p3XinxewK70%2FeNbkDx6hkQc7VZbPgci4Egw2bWCvQY6pgEowgtUUrrDobSSFgGueQsHwjp%2FJajFSMONDLNb9r1ffB%2Ba8s9BaaCHTfN8EHceua5EXZM4JqcpdYC2Ix%2FbLzcQ%2BF0FzOVnC0seL5FGDAkWPt592D2rW7len1%2BD1MUsEnB6tyzEYkbs886TYx%2FS2myVSIasuTiLvcipFlnXI48XEORhxQF7bqtDVPiiwGX%2FaZXorDd7W6Vf5CiJNXS79m93L1WW49zG&X-Amz-Signature=da5960062181ecb476ec24bab7dc904a2b98e37ad178d761445ec65a80a007ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUADNC3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtPbKjFaxPjPptCymurVJPjAyZdOwX1dz%2BobdDrgTKVAiBPNy5Wb320ZOLsnmXkbf%2FW0twW1zsDA4pTxot0iYotbyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMoPXV2J7gb9exfeGyKtwD5YoWbRDwzrlVb%2BSfbida99lN7WSjboGvJPoj6ZJpWuP%2BxBQib5R%2FI1TonpVYNGp8RfEwMT0vGohyP6WixJ8KT%2F8X5MDm5M%2F%2Bv1MEbfPGXY3OOOu8PfK0A36u9ux50JhSO0tOQ5D0JeQgOY%2FEv%2BzK9xlJRgvScQl18ZzK6pqIKJGDHDEwahQi8AnEF6Oji22c6zBgSXML9h8ePscz0WRzuA6pT3fOAxKalVR46NFnKXA5oX%2F3H68rk8dBLUvkpmwAHWX2%2BfWrMHUVtFUh2EjlsWyHTZNWyCRrZbqQCuMGAPDZX6K%2BHcMt9hOhlUoJEJzHU1Knw6MZEuT0zbEkO9Mn374IU6Kj52Iezwr6%2BmUfiMkkPK3KT6lRDMp2P4vGcAcz5FA0GwB6IPmJCmupgAh8S6bYNmFuhzzdszUArt8UvxDC36im%2Fasqo4TgFKgABQlbD8Nw06cz5yW0DtP9rWnJL0IWvSrrdYwMoCdUV7fD7mKKpnvv6edwwfV4YzgrKR5V5g%2BqFwSQHc0mL5N6L08jDAK1Mj4wVSiS8OtUa6YOzxgqezZ87pMWif3HxJx8TOOICR2HLtkNM8dI8mVz6CFpZy2H1p3XinxewK70%2FeNbkDx6hkQc7VZbPgci4Egw2bWCvQY6pgEowgtUUrrDobSSFgGueQsHwjp%2FJajFSMONDLNb9r1ffB%2Ba8s9BaaCHTfN8EHceua5EXZM4JqcpdYC2Ix%2FbLzcQ%2BF0FzOVnC0seL5FGDAkWPt592D2rW7len1%2BD1MUsEnB6tyzEYkbs886TYx%2FS2myVSIasuTiLvcipFlnXI48XEORhxQF7bqtDVPiiwGX%2FaZXorDd7W6Vf5CiJNXS79m93L1WW49zG&X-Amz-Signature=97d4ebb1b6099b8afc3ffe73f43db027128c2640d157632b923f6a265ae7b921&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
