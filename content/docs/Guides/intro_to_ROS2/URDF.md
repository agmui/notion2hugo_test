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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMCFL5M%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC2BgBZSnqFTDgMUsUyztHx34WSNfBM%2FQkBMw5%2FNqvSQgIgTfQ%2BMLIUMyZszOQFlUThvqvE6bsDXMUx%2FgmENXjkrzEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOKdlt8TdFZGdxUztSrcA63kKLs6qEQX3ET2Xrdm9WpJANKT83Js8%2Brp86XACO9l%2FEKoVpgFQXGaUQa76VHsb%2FX%2BZZ07pFUxUxMIOLmMKvlxCTupLoPBE68r%2Bq4B8%2B4UqrJSHSyGXNG67VroKCuBh2NSoFv3sdpDgwPnVbG2hN5l%2Fi%2BOOC8Uxj3JeYJbuomYVEXfuDJRy86y7vxoqcKztdLNeubFV%2Ba45SlVj7X2g%2B%2FeL2SNGQ1r6wuHXtJ80%2FSNyOI8oSUXhtZHAEm3X%2Bl1Cl8%2FJCK2jfO%2F6ptMcssaLoZB4SCcrEdqEONUUHysMJZGuV%2FKVWbw0nN6oPpI5gSA1sIBvJn68f2R%2F5OePtMMES7ztJ8p9W3idhJG5fRH%2BqSNLmrbEG2LbuxnCv7z9%2F8dzdARLF9kn55uIpinc6CZfoEl9tSNDVhJTj9k4L%2FVlv4%2FfDf35R3Jn2BenRF71hMkjKCJuN2DO5MAw05m%2FJh8GtxK3X9etTjLWhpN6fqu%2FvN880FVZrY4VT%2BsXacCotfTMxvPKTjWgqSfvVsnc2uaGkfwZ0ZSbqIrlcDTvIoLQmRiY7gs8o%2BQZXAiAc2tg50XrHGQYT6FVfEVar51CQkSdM11jPnWhn2kBJAo1t3AYIO0AwMVcivssmUAHIqyMIuNrMMGOqUBfflaCKUwsBju6e2VosmiqFouBR80BgSx6X50pzVzjrOVwKnPB0cF6%2B5KMpz9i72EM2H1lFnvs1FLmfr2XgRD%2FpwiimebsB%2BJuAv%2BL1FSsSCC5cVkhRpSkExrK7QaIzaOdtm44tTguVItsVBuXSPWiTqnG5Fckue0o2%2BrKSalITWwmNf45Bg6XY1OW7FiJ0xEQRQYqehbx9wVsLm2oE6tNbcMiHIw&X-Amz-Signature=d8d0ff74aea1ef50f92a36079ce2df77d294c4c41d626c671c60a89ae7271878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMCFL5M%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC2BgBZSnqFTDgMUsUyztHx34WSNfBM%2FQkBMw5%2FNqvSQgIgTfQ%2BMLIUMyZszOQFlUThvqvE6bsDXMUx%2FgmENXjkrzEq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOKdlt8TdFZGdxUztSrcA63kKLs6qEQX3ET2Xrdm9WpJANKT83Js8%2Brp86XACO9l%2FEKoVpgFQXGaUQa76VHsb%2FX%2BZZ07pFUxUxMIOLmMKvlxCTupLoPBE68r%2Bq4B8%2B4UqrJSHSyGXNG67VroKCuBh2NSoFv3sdpDgwPnVbG2hN5l%2Fi%2BOOC8Uxj3JeYJbuomYVEXfuDJRy86y7vxoqcKztdLNeubFV%2Ba45SlVj7X2g%2B%2FeL2SNGQ1r6wuHXtJ80%2FSNyOI8oSUXhtZHAEm3X%2Bl1Cl8%2FJCK2jfO%2F6ptMcssaLoZB4SCcrEdqEONUUHysMJZGuV%2FKVWbw0nN6oPpI5gSA1sIBvJn68f2R%2F5OePtMMES7ztJ8p9W3idhJG5fRH%2BqSNLmrbEG2LbuxnCv7z9%2F8dzdARLF9kn55uIpinc6CZfoEl9tSNDVhJTj9k4L%2FVlv4%2FfDf35R3Jn2BenRF71hMkjKCJuN2DO5MAw05m%2FJh8GtxK3X9etTjLWhpN6fqu%2FvN880FVZrY4VT%2BsXacCotfTMxvPKTjWgqSfvVsnc2uaGkfwZ0ZSbqIrlcDTvIoLQmRiY7gs8o%2BQZXAiAc2tg50XrHGQYT6FVfEVar51CQkSdM11jPnWhn2kBJAo1t3AYIO0AwMVcivssmUAHIqyMIuNrMMGOqUBfflaCKUwsBju6e2VosmiqFouBR80BgSx6X50pzVzjrOVwKnPB0cF6%2B5KMpz9i72EM2H1lFnvs1FLmfr2XgRD%2FpwiimebsB%2BJuAv%2BL1FSsSCC5cVkhRpSkExrK7QaIzaOdtm44tTguVItsVBuXSPWiTqnG5Fckue0o2%2BrKSalITWwmNf45Bg6XY1OW7FiJ0xEQRQYqehbx9wVsLm2oE6tNbcMiHIw&X-Amz-Signature=95f08a971f5f5d24114a55ecf046f3e7da9ab7c95a958ad0dc646b6899cee909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
