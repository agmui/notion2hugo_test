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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRD4KDPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFruD1J76iTdxQPyHaMYPDAZUiuryNB3SgXzNyacgxbFAiEAgiK%2F7xivADjA0zOWkMXo0hSkwVGzA0tlzRpWgBBjUrkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMRmHZIj6IoOOpEUVSrcA8o9IXFWvsM5WIQCvOIMP8ggvm6CtoTnssA%2BmG4MZVZFADhu17HdA%2FpTZ0gf0VmWdwR4wCWIdLD6c4gK8UtaBfSs1A2tPuuCXlMTR1B%2B9zLihOhkoMwu59DaqBoUrDfQFy2xOpKoVnS6mxPsQpzPSEKWPNeBnNCdSRHQJJUXLOSnC1SVum3v0rf9YgsaGYHNj%2Bpss8IVEP%2FvPGc3wEOCoCksCeJgpFtKME5EMCOKtQrMdiG60NYDf%2FO7WyxGBS0%2FPJViLOyqaHoiBuWk7JbqVy3u2aEbtc9KnYuURJnVQ4ba6lOfrRI4jhwMcv0gRLlMRDmnQgV79DhdXC%2BR%2Bf1fv3y%2BPNDX72rfB6z5YkSBzki64Qh8KOArCcL4bdub9Bu1oLvk5rf1zDwTPsgp%2BxBPFSVROMf7cM2VYuuMnlj3P9BYawoMuvmbQpmSxIJamQdDf9UKjn%2Bn24q5eAGjGdyd6hDDtzDr%2BEvPxaPzKTKCAqUPL%2FwFkI7y0L6cxM9ytOr9ltuzN5jOMXXq4FwCM0L45J81FnlvHmekXlSput69OVIzGWEkV8Sp1OLN%2Fdccr7S78aM1w75Dtj8ENATNjWCLkp3hGEDc27frkaSlFGTkH7Qeh%2FVigFBxP5iS104sML3Bk8QGOqUBYRgksyeMJpx5%2FyD%2BYYfisrr%2F5H%2FevSt1GzvzxclxuwuX27pubjPFqBillOWdCF15vmORBzfN4oMu5fCPyPFnx9WNrbImZ2f9zjeOnMGF9RBONIBiag1lvv4H76T7hVEXvImjoynA6HcnDSBHMImVYNh%2BpQbGAGfMiE2T2PzMZ%2FgcWT2W1ATI6Do2XDMV769pin9L65OQfm6rQD%2BwmUlUZItYDn%2BM&X-Amz-Signature=25d715ab8e517295d884b5fc7084ad72394db4e3f9d136bab24ed0eb43fdf00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRD4KDPN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFruD1J76iTdxQPyHaMYPDAZUiuryNB3SgXzNyacgxbFAiEAgiK%2F7xivADjA0zOWkMXo0hSkwVGzA0tlzRpWgBBjUrkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMRmHZIj6IoOOpEUVSrcA8o9IXFWvsM5WIQCvOIMP8ggvm6CtoTnssA%2BmG4MZVZFADhu17HdA%2FpTZ0gf0VmWdwR4wCWIdLD6c4gK8UtaBfSs1A2tPuuCXlMTR1B%2B9zLihOhkoMwu59DaqBoUrDfQFy2xOpKoVnS6mxPsQpzPSEKWPNeBnNCdSRHQJJUXLOSnC1SVum3v0rf9YgsaGYHNj%2Bpss8IVEP%2FvPGc3wEOCoCksCeJgpFtKME5EMCOKtQrMdiG60NYDf%2FO7WyxGBS0%2FPJViLOyqaHoiBuWk7JbqVy3u2aEbtc9KnYuURJnVQ4ba6lOfrRI4jhwMcv0gRLlMRDmnQgV79DhdXC%2BR%2Bf1fv3y%2BPNDX72rfB6z5YkSBzki64Qh8KOArCcL4bdub9Bu1oLvk5rf1zDwTPsgp%2BxBPFSVROMf7cM2VYuuMnlj3P9BYawoMuvmbQpmSxIJamQdDf9UKjn%2Bn24q5eAGjGdyd6hDDtzDr%2BEvPxaPzKTKCAqUPL%2FwFkI7y0L6cxM9ytOr9ltuzN5jOMXXq4FwCM0L45J81FnlvHmekXlSput69OVIzGWEkV8Sp1OLN%2Fdccr7S78aM1w75Dtj8ENATNjWCLkp3hGEDc27frkaSlFGTkH7Qeh%2FVigFBxP5iS104sML3Bk8QGOqUBYRgksyeMJpx5%2FyD%2BYYfisrr%2F5H%2FevSt1GzvzxclxuwuX27pubjPFqBillOWdCF15vmORBzfN4oMu5fCPyPFnx9WNrbImZ2f9zjeOnMGF9RBONIBiag1lvv4H76T7hVEXvImjoynA6HcnDSBHMImVYNh%2BpQbGAGfMiE2T2PzMZ%2FgcWT2W1ATI6Do2XDMV769pin9L65OQfm6rQD%2BwmUlUZItYDn%2BM&X-Amz-Signature=44b3e96dfd166d788807fac5c4668ef462e596ee6083921400ef62c9c4659d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
