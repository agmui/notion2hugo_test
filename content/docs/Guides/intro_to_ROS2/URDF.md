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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGZBODF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxAmb5Dne8oi%2BJTrhyzwI%2Bfz624YCgNKqLRWzuc7beGAIgU7%2B5R3ZGSIXwXY9VMqHDYyyjBT11tw6Gsm%2FVGFjOehUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeEGsVJijDoqRnsjyrcA4ZB%2FuiI3DmSYzRxySRJ4RFhzJMwQ6l%2BT0NhuGPwksSNNCUfwDDl2SibCdogKg1Yk1rNDu8AaLf4XRr9J0ZTVtT3UFcPYYiP7lT%2F8H94i11Wr51NNvzFvS4H7JMp3alOYHwIVgomFDzbbAN7%2FtPfp5YsizTt9jSPRa2sgKpvo4i53kC0fXOKxDvDKiESnIyPOcl%2BOH6rb%2FhHB0CHygGt4K4kcNrnAZKGkFKscV7Yi%2BnkAD9E6ovlMWkh98y4mURkGCJPbpTuj%2FbdNvJoPy3Mh27R%2FsQfAVtvc80Kg%2FP8WT2%2FHymUfrXFMxUaJiqU1lreYl8k9HH04595LrWQ%2Fvv6379kGw1x8DFTyKvF6gc%2BCvp2q%2FlyhP5NoPm3JH48%2BnPnb%2FyJOcocL2MvvfBXPc9wTrMjVcdHAZ%2Fc4Qa0ulw3YezW3BBlADtlI%2BOPM7DSXntyHMvRgFlHhNyl1LBBMaiJIrj0yB%2FaZOT%2BjqEI6ilYOB1lX4DeD5oC3B5CzEN9%2Bm61B%2FODajQ%2BxbzmdYA%2BPMuCd%2BMNYRTA0ghxdOA4UyVUQT%2Bgp5S%2BjqVtp78%2Bg1K4%2BtP6rv0YS010m4Vv4FJBc7TCD9hcnzqnHmYL4KOlg2KvmoR3nFMYidNJv0Owt7UkMOjv%2BMAGOqUBtuM7ezri%2FU00YF3TRh8bVVg1VFcRBCwfBeFMcnjfgTgNIt4qNbKoJgzqTBRVmfC%2FO6kg33amFRFCI%2BjNH7GkqGpTN6wSVpPTlNGewedB9G%2FOm%2BkaidxeXn6WjOz2USRMwmHANEAFyETlyLxRmjC%2BFnrTVPgYptLTXQN00YihtKLni4WfeQ6%2Fn9e8L3HQXVupcFUJ91iNhTPJHCoA%2Fdu1X3CZgOOT&X-Amz-Signature=cbaaaf9e31697d60b89a67ea52834e0089e246b316557604d874e1745a429615&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGZBODF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxAmb5Dne8oi%2BJTrhyzwI%2Bfz624YCgNKqLRWzuc7beGAIgU7%2B5R3ZGSIXwXY9VMqHDYyyjBT11tw6Gsm%2FVGFjOehUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeEGsVJijDoqRnsjyrcA4ZB%2FuiI3DmSYzRxySRJ4RFhzJMwQ6l%2BT0NhuGPwksSNNCUfwDDl2SibCdogKg1Yk1rNDu8AaLf4XRr9J0ZTVtT3UFcPYYiP7lT%2F8H94i11Wr51NNvzFvS4H7JMp3alOYHwIVgomFDzbbAN7%2FtPfp5YsizTt9jSPRa2sgKpvo4i53kC0fXOKxDvDKiESnIyPOcl%2BOH6rb%2FhHB0CHygGt4K4kcNrnAZKGkFKscV7Yi%2BnkAD9E6ovlMWkh98y4mURkGCJPbpTuj%2FbdNvJoPy3Mh27R%2FsQfAVtvc80Kg%2FP8WT2%2FHymUfrXFMxUaJiqU1lreYl8k9HH04595LrWQ%2Fvv6379kGw1x8DFTyKvF6gc%2BCvp2q%2FlyhP5NoPm3JH48%2BnPnb%2FyJOcocL2MvvfBXPc9wTrMjVcdHAZ%2Fc4Qa0ulw3YezW3BBlADtlI%2BOPM7DSXntyHMvRgFlHhNyl1LBBMaiJIrj0yB%2FaZOT%2BjqEI6ilYOB1lX4DeD5oC3B5CzEN9%2Bm61B%2FODajQ%2BxbzmdYA%2BPMuCd%2BMNYRTA0ghxdOA4UyVUQT%2Bgp5S%2BjqVtp78%2Bg1K4%2BtP6rv0YS010m4Vv4FJBc7TCD9hcnzqnHmYL4KOlg2KvmoR3nFMYidNJv0Owt7UkMOjv%2BMAGOqUBtuM7ezri%2FU00YF3TRh8bVVg1VFcRBCwfBeFMcnjfgTgNIt4qNbKoJgzqTBRVmfC%2FO6kg33amFRFCI%2BjNH7GkqGpTN6wSVpPTlNGewedB9G%2FOm%2BkaidxeXn6WjOz2USRMwmHANEAFyETlyLxRmjC%2BFnrTVPgYptLTXQN00YihtKLni4WfeQ6%2Fn9e8L3HQXVupcFUJ91iNhTPJHCoA%2Fdu1X3CZgOOT&X-Amz-Signature=53d90347fde8ec4bbae5649d94041d1bc4ecef6394e099e410cee436fab83a27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
