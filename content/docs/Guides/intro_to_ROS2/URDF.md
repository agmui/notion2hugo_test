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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5X55C3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6H6NO3nM4QHlTW4mg5Z087pxWfX%2FEfq5MisVPLBk2uwIgIk7l2SoauAlND%2FotwcZvxiY%2FAMDibu1C2rd1iE5JxhIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzScBaHjbwkDA2GgyrcA1ov%2BrLlMQa9dKdaSHaAuE%2FdGaiaX8s%2BRBoVzuvhXltlacmeih86HOAYa10K4VnQFsTlM5R5rB12VBu%2BZawdNgn7PkfRJIYzoA1Fx7iGSOCoNE2tEsqHaBFdBhOdWhm9qWS%2BjCW7FGJlmJsTCaaFv17boyx0wtZm8xpIuDczwf%2BeMl0Ji4S4hfWuh9pkKPsDJHckGP0Dw8%2BIHuclAi8zCidgQlUxXmJasBrls%2FQaU58ml54jzIJb%2F4uAbefQdU2%2FNUUs9Zk44BADqBGNarJKr2qVhcesOcy9wnpqADU1byCLaFVWG1YXosv6axQDsk1Cy5BO8ltxSgcMgsUdvx%2BoAedZRFb%2FKdeHp75bLvdPcum4k5PVUbuhI5Afx2iVGIba2xP1IiODmKl1JHCM7kqnS%2BzeuXxO8%2FDUSolly4jjxxRgfPNt%2FOR6i0X0%2FwXbPflgCt%2B3i683jWBouuDlG8%2Bu0YM5pu0CotIwOZ5snFtp4IuaoOn1Gsvf%2FSTjaZtcKSovPlXJWlbtvVOeVIWN0FYf21PFUPSyNr5UnUUqe7L%2F459FEwQHd%2FtoGLIn1O0cl6UbSQrTzPqRugRFioXzokxItD1b6PMVMEP1vGceQ0a54SmigI3G4y1H1ixCe%2F1rMPaoxMMGOqUBWIv3m0%2FL%2BWxMU2uQvaarGMmdym39Zorsl6kJ0jhEOLUlrlQLOLMrjOvWbPfiG1TzBbTdkYNqrK8ZX4V75qphHe8yVPdtej7lRPOLp3Niwd1mzpjLBrCYQz5u9HzpWHNMRCSaDzxH8AzG0ytq0lRn8%2FteCz67oAJvOKR8sHxjDZTF%2BX5m80QtNLR2nVLypk3D%2F%2FM%2B9wAtr8muH4SfGzGvTYUaFWaC&X-Amz-Signature=077254eac86788fe6faa40e0bcb9189967936993e4668dffed9fffaace4c4ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5X55C3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6H6NO3nM4QHlTW4mg5Z087pxWfX%2FEfq5MisVPLBk2uwIgIk7l2SoauAlND%2FotwcZvxiY%2FAMDibu1C2rd1iE5JxhIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzScBaHjbwkDA2GgyrcA1ov%2BrLlMQa9dKdaSHaAuE%2FdGaiaX8s%2BRBoVzuvhXltlacmeih86HOAYa10K4VnQFsTlM5R5rB12VBu%2BZawdNgn7PkfRJIYzoA1Fx7iGSOCoNE2tEsqHaBFdBhOdWhm9qWS%2BjCW7FGJlmJsTCaaFv17boyx0wtZm8xpIuDczwf%2BeMl0Ji4S4hfWuh9pkKPsDJHckGP0Dw8%2BIHuclAi8zCidgQlUxXmJasBrls%2FQaU58ml54jzIJb%2F4uAbefQdU2%2FNUUs9Zk44BADqBGNarJKr2qVhcesOcy9wnpqADU1byCLaFVWG1YXosv6axQDsk1Cy5BO8ltxSgcMgsUdvx%2BoAedZRFb%2FKdeHp75bLvdPcum4k5PVUbuhI5Afx2iVGIba2xP1IiODmKl1JHCM7kqnS%2BzeuXxO8%2FDUSolly4jjxxRgfPNt%2FOR6i0X0%2FwXbPflgCt%2B3i683jWBouuDlG8%2Bu0YM5pu0CotIwOZ5snFtp4IuaoOn1Gsvf%2FSTjaZtcKSovPlXJWlbtvVOeVIWN0FYf21PFUPSyNr5UnUUqe7L%2F459FEwQHd%2FtoGLIn1O0cl6UbSQrTzPqRugRFioXzokxItD1b6PMVMEP1vGceQ0a54SmigI3G4y1H1ixCe%2F1rMPaoxMMGOqUBWIv3m0%2FL%2BWxMU2uQvaarGMmdym39Zorsl6kJ0jhEOLUlrlQLOLMrjOvWbPfiG1TzBbTdkYNqrK8ZX4V75qphHe8yVPdtej7lRPOLp3Niwd1mzpjLBrCYQz5u9HzpWHNMRCSaDzxH8AzG0ytq0lRn8%2FteCz67oAJvOKR8sHxjDZTF%2BX5m80QtNLR2nVLypk3D%2F%2FM%2B9wAtr8muH4SfGzGvTYUaFWaC&X-Amz-Signature=4debbfd8ba3225252beceebe8f985d61de9293a81327876e5ff7bc0e9e372ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
