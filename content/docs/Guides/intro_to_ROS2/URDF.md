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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHZFRI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCov6cmXGlXjP2KV6kCU5Ba2%2FnyDSjT3%2FE5CccsFhy1EAIgO5tmew5ii6Y%2F%2B%2Ffe2NOENe6nteYb7V7Nt75%2BCt4cJIsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF24zwtWsWVD76zRKyrcAyWgui3yNS%2BsivDUInjKMu5iTpqq1Q5vMUtY32VvhxP0mTPz0G2SiYxBEDjWmGGy7%2FzSnYROZtVvFnDXPXtekXviOB7aN0eLFus0mC9hVoSulJS381rc1tFX7YS1vvLdSe19%2BjBAMVrpi0uw3s9WhNc1CirQyeGvcEkrloDG4RwBrf6wTo%2BqS1pcvarC5gGYc0itP5TQm6W0xqNv%2ByDknUhBBOJPamLFVX3ao54obKEBT4Eynq3OoXNj0RcbdmrQn%2FoEEX9fgB77Gp5R2GCufztuqVFlKEWF4%2FzTM88RTHOzUnQydWPZ61TaUzJpvCTOMjAEXBTgcmNhS2FnmGCAD8UHG%2BqKSJ5ZEYURjJK2ynZPHW80vTi85ov0UncCMAYDaE56lL5RYn4uWHb4IWuEwqINYTSXcahusIa2VdahFsxWoPyBtob8mauDqWSvrvaZ2Idw6jomQYiZrKil1VAp4kJRSJXxUxGPAoVfgva6zibpGyuVAcGY%2FsRKTXOlwwwvUeO%2Fp%2FHEzyduaA6PtceLkFVEowg9ip0fWnU9AsaYj1MBEwXOM%2Br%2BRQLtgO5P59KTIvenOnuQLrOxRCVrQS2%2BT2g8WeXKKH%2FDDovj9WhCcVrDpKmCyyFfUg98FkmhMPzd3L8GOqUBx6bRCj81R1%2B8Fo2hU0GXNghpEedTHiO83A8ABDYxfYW8TPV0FQvDyaJeri1RA4Jms3nxEcY8xUgKqR3Mf20AQaJtPeSSZ1IvEJoE0Wr5gK49bn5euB29Oz1eJxgJ1mGyXchUZoD2DEbPrNrRDOHEcxdgr9nklyzaDfcNn2td7DXpElIR%2BtqXP5Jus56qLgFaVDPaSLUQFgoHaBtiw%2BzN4FBaWfxM&X-Amz-Signature=700ec0d5b08a5811c6afcde36dac5ef49e6fbccbf207a5fc157dd9f59cb8c07c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNHZFRI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCov6cmXGlXjP2KV6kCU5Ba2%2FnyDSjT3%2FE5CccsFhy1EAIgO5tmew5ii6Y%2F%2B%2Ffe2NOENe6nteYb7V7Nt75%2BCt4cJIsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF24zwtWsWVD76zRKyrcAyWgui3yNS%2BsivDUInjKMu5iTpqq1Q5vMUtY32VvhxP0mTPz0G2SiYxBEDjWmGGy7%2FzSnYROZtVvFnDXPXtekXviOB7aN0eLFus0mC9hVoSulJS381rc1tFX7YS1vvLdSe19%2BjBAMVrpi0uw3s9WhNc1CirQyeGvcEkrloDG4RwBrf6wTo%2BqS1pcvarC5gGYc0itP5TQm6W0xqNv%2ByDknUhBBOJPamLFVX3ao54obKEBT4Eynq3OoXNj0RcbdmrQn%2FoEEX9fgB77Gp5R2GCufztuqVFlKEWF4%2FzTM88RTHOzUnQydWPZ61TaUzJpvCTOMjAEXBTgcmNhS2FnmGCAD8UHG%2BqKSJ5ZEYURjJK2ynZPHW80vTi85ov0UncCMAYDaE56lL5RYn4uWHb4IWuEwqINYTSXcahusIa2VdahFsxWoPyBtob8mauDqWSvrvaZ2Idw6jomQYiZrKil1VAp4kJRSJXxUxGPAoVfgva6zibpGyuVAcGY%2FsRKTXOlwwwvUeO%2Fp%2FHEzyduaA6PtceLkFVEowg9ip0fWnU9AsaYj1MBEwXOM%2Br%2BRQLtgO5P59KTIvenOnuQLrOxRCVrQS2%2BT2g8WeXKKH%2FDDovj9WhCcVrDpKmCyyFfUg98FkmhMPzd3L8GOqUBx6bRCj81R1%2B8Fo2hU0GXNghpEedTHiO83A8ABDYxfYW8TPV0FQvDyaJeri1RA4Jms3nxEcY8xUgKqR3Mf20AQaJtPeSSZ1IvEJoE0Wr5gK49bn5euB29Oz1eJxgJ1mGyXchUZoD2DEbPrNrRDOHEcxdgr9nklyzaDfcNn2td7DXpElIR%2BtqXP5Jus56qLgFaVDPaSLUQFgoHaBtiw%2BzN4FBaWfxM&X-Amz-Signature=3e12b1c6882d468f1edcb99b29d9f815b04f26901e2cfb0fce732f953b8de243&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
