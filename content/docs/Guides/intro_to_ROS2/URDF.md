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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNUGP2S%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpnBmW4AqX2ZLt0JeC3fkGvPKDwBVD2o0RlrRIsRF3AiEAvZJuDoqf7iFAIgFAHZjO2%2FMgVCSNLB1dB06vZHLt%2BtMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQJZlDwwClGS3FrUSrcA56DlAMjEBUE1pWdEzmqLmGL68dFaCt%2FwG2Zc%2FjBl3b1JcuA9Tx1RJ%2BcL77fDUPluTlbsOe43fRB8w11alhrRZg%2BVPC24hB8wG1IwnGETlfoNdPSidpWBwuHo6Bejva6UF8PO2KDcDzkuiaSlQPujx%2BX79Lh5I%2F1wlcAJVfvueI3x8IO33D%2BzrQQ%2F3xn%2BDRz5ZyUrgJ4miokp%2BWz2OkmSR2PWFLVespwYAaPGSgM%2F%2FTSdfb%2F0mXRX%2B3QVteRZpIZuJ7ifPCm%2F7oK8J6tnxiH7WG9Mh9cfBGa0jd%2FCuKE%2F8O10Oc7MsTnSq9MUTMaigeWGzc%2FW6FlBkypmYKIbEbWi25%2F3phTfyuTN4DkF262nelrxh4b0mB56IqBKn3I5y0fk4GzkuT0S9R9lfn7WJF5S5gP%2Fz17kAxp0aITCnUzivHgZt%2BxWW%2Fpd596%2Ffx5gP9IcZ9klQLJDK9PPTz5CGaqufmMezXCTqZibp7rOxsfDSWuyC8X%2BwYTS52sv%2BvFrRUlgEelm3P8lmfxI2rGnhURhrP143halxVAU0PqS3H4w5x3q6cVpsV%2BaxQ1FUpTiJ8flIPHoMkAZQk43R3UkNThcFy3r36T1LlunhxBhdKc0YF2vcVRjoO2%2FaP2SAgDMJHH5b0GOqUBeCfo7gRJ1729742USY%2BgqG%2B2uK92xpmrSs9e%2BFyyq87qmYaEJSAMeA6eCfKDilGAUvkJAdR6iRHDCfxnNFD4ZAC6qIY%2Buj9VBHDmvzKjO4gsaq%2F0%2FvGJ2LNtilQzr8NeDu7e1gz00nNhuuMiSPpMvY9dyX75iJyfU1wfv3riczB2NAWsDSwkaUz%2BlXnx5r5P8z9awJ8aLzdVluUVrpxm6Ao4Dqcv&X-Amz-Signature=30769479c8ebf160595fbf697e18ce0dd512c83a3984d29c974bd1b7a9904e80&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNUGP2S%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGpnBmW4AqX2ZLt0JeC3fkGvPKDwBVD2o0RlrRIsRF3AiEAvZJuDoqf7iFAIgFAHZjO2%2FMgVCSNLB1dB06vZHLt%2BtMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQJZlDwwClGS3FrUSrcA56DlAMjEBUE1pWdEzmqLmGL68dFaCt%2FwG2Zc%2FjBl3b1JcuA9Tx1RJ%2BcL77fDUPluTlbsOe43fRB8w11alhrRZg%2BVPC24hB8wG1IwnGETlfoNdPSidpWBwuHo6Bejva6UF8PO2KDcDzkuiaSlQPujx%2BX79Lh5I%2F1wlcAJVfvueI3x8IO33D%2BzrQQ%2F3xn%2BDRz5ZyUrgJ4miokp%2BWz2OkmSR2PWFLVespwYAaPGSgM%2F%2FTSdfb%2F0mXRX%2B3QVteRZpIZuJ7ifPCm%2F7oK8J6tnxiH7WG9Mh9cfBGa0jd%2FCuKE%2F8O10Oc7MsTnSq9MUTMaigeWGzc%2FW6FlBkypmYKIbEbWi25%2F3phTfyuTN4DkF262nelrxh4b0mB56IqBKn3I5y0fk4GzkuT0S9R9lfn7WJF5S5gP%2Fz17kAxp0aITCnUzivHgZt%2BxWW%2Fpd596%2Ffx5gP9IcZ9klQLJDK9PPTz5CGaqufmMezXCTqZibp7rOxsfDSWuyC8X%2BwYTS52sv%2BvFrRUlgEelm3P8lmfxI2rGnhURhrP143halxVAU0PqS3H4w5x3q6cVpsV%2BaxQ1FUpTiJ8flIPHoMkAZQk43R3UkNThcFy3r36T1LlunhxBhdKc0YF2vcVRjoO2%2FaP2SAgDMJHH5b0GOqUBeCfo7gRJ1729742USY%2BgqG%2B2uK92xpmrSs9e%2BFyyq87qmYaEJSAMeA6eCfKDilGAUvkJAdR6iRHDCfxnNFD4ZAC6qIY%2Buj9VBHDmvzKjO4gsaq%2F0%2FvGJ2LNtilQzr8NeDu7e1gz00nNhuuMiSPpMvY9dyX75iJyfU1wfv3riczB2NAWsDSwkaUz%2BlXnx5r5P8z9awJ8aLzdVluUVrpxm6Ao4Dqcv&X-Amz-Signature=b1bb1c1a83ab7fb649bf340bbcfc95995d081e264c68e5a9cd9cee5c5cc79910&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
