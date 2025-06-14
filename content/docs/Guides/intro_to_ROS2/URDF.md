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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUI427M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFSm0aSvqAz0SVf%2Bo8x7B%2B%2FAFyotoXVepV3YdY4gyIfEAiEA9clQ9Hgjr%2FnJpnNcnW0PLB0rCNnPJMX0svJbW14Yc3sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBVO%2F5Ppecnhj9dJVCrcA%2FjBL0TrzEJaZ17FMA85hAEDixmRUBoc8X%2BxCDbWF1i3I%2BRFwy5rEgSS2cVxH%2F1F2HNOMYNSpUlEvCxm%2F3VQ1a82j95TKVdot9AhhH6bKB92DX3LVub1VDYfnW2yhp3PJcbreBuXdxK3Dcq0X4AYz%2F6%2FN6kwfbMxDjUMmtGjOvcg6mns%2BpHSHCe7RqH5qapha2su%2FoYmkwTbGi6mlVtT3sYFm9Au92ctMgbH%2BNzP7gtAHBp85Zq%2F9zlDeaOeWQhS5UGNQM6EwnazcUrSjlHUtZhJrUaVoH3V0nmVKTUpVven03z7bslWSUji8X4s5saIyNBipaRNbhYCXa1ru6YIdoLfD5c%2FAfBSFYxhYNPNbno0kNituALoPnjlrES4K0%2Be9J7qfJuXh3zxU2IMCByrQ1Y8PAm4s3l4AcNiuczIZxVIXZWVi6Ae72VAUfqP9IZOnizrDMleP1E8AJsGdmwYBDjWrnad0Xz4yMOLhXKlFIE%2BJusX6Cp25IXggCN0AZmO3IgDvaea4JJv2eg1oO16yoeos70sAiZL0FpkIp%2FYcFRP1mKyPgTdx5ONgTFpLX%2F%2BPo2cM2MEzyJlgMLPOqSoF5YUQdGEUTgCrLJogSFiEhkrRA4GARsJj4tPEed7MPDBtcIGOqUBGAUsU2NhVK46vOKFKfWkDwfwiz73ITSGdPRm7VDf5ESQ9x3meVLfMv0M1xibDtldL%2FehGgEiuEeMkqAmLT1klRIuOWWqXsxX%2BzLYp9H2bXIEJDmGhkGHoxBu6iqbY2veZIUAn4Aa3xkeOAb6OhOQSNVCLRRFhGQQ1kzYl%2B%2BdKDtHXrsqDH9GIHIr37DnmZgDZCJTy%2FHt9iVBrIxSUAxeF0fU9rah&X-Amz-Signature=e65edd100aaa4f7af144a6fa808e311f061604e507d93523f7bc2febbf4bd15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQUI427M%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFSm0aSvqAz0SVf%2Bo8x7B%2B%2FAFyotoXVepV3YdY4gyIfEAiEA9clQ9Hgjr%2FnJpnNcnW0PLB0rCNnPJMX0svJbW14Yc3sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBVO%2F5Ppecnhj9dJVCrcA%2FjBL0TrzEJaZ17FMA85hAEDixmRUBoc8X%2BxCDbWF1i3I%2BRFwy5rEgSS2cVxH%2F1F2HNOMYNSpUlEvCxm%2F3VQ1a82j95TKVdot9AhhH6bKB92DX3LVub1VDYfnW2yhp3PJcbreBuXdxK3Dcq0X4AYz%2F6%2FN6kwfbMxDjUMmtGjOvcg6mns%2BpHSHCe7RqH5qapha2su%2FoYmkwTbGi6mlVtT3sYFm9Au92ctMgbH%2BNzP7gtAHBp85Zq%2F9zlDeaOeWQhS5UGNQM6EwnazcUrSjlHUtZhJrUaVoH3V0nmVKTUpVven03z7bslWSUji8X4s5saIyNBipaRNbhYCXa1ru6YIdoLfD5c%2FAfBSFYxhYNPNbno0kNituALoPnjlrES4K0%2Be9J7qfJuXh3zxU2IMCByrQ1Y8PAm4s3l4AcNiuczIZxVIXZWVi6Ae72VAUfqP9IZOnizrDMleP1E8AJsGdmwYBDjWrnad0Xz4yMOLhXKlFIE%2BJusX6Cp25IXggCN0AZmO3IgDvaea4JJv2eg1oO16yoeos70sAiZL0FpkIp%2FYcFRP1mKyPgTdx5ONgTFpLX%2F%2BPo2cM2MEzyJlgMLPOqSoF5YUQdGEUTgCrLJogSFiEhkrRA4GARsJj4tPEed7MPDBtcIGOqUBGAUsU2NhVK46vOKFKfWkDwfwiz73ITSGdPRm7VDf5ESQ9x3meVLfMv0M1xibDtldL%2FehGgEiuEeMkqAmLT1klRIuOWWqXsxX%2BzLYp9H2bXIEJDmGhkGHoxBu6iqbY2veZIUAn4Aa3xkeOAb6OhOQSNVCLRRFhGQQ1kzYl%2B%2BdKDtHXrsqDH9GIHIr37DnmZgDZCJTy%2FHt9iVBrIxSUAxeF0fU9rah&X-Amz-Signature=e9d21cffcccaa22420e9a9b4f9186f8d82b34c679b7215ea583e31156c820531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
