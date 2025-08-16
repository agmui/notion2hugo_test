---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJYAJE7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAnx4TQTZJCQH1Ka1usi%2BDO6CvNycR37ZrbsFB6QfBoXAiEA3W5fbCebFUaxPwG1Ab%2Bql%2BHJyjqpHRc7Ticl6sfaeF0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF0x8Y6CpkOII5NpqircA13VYVIrClz6OyE1cQikC7oDRTN227T71pXFAr6K9%2BsgQpTtCAuSaSp2bBPS1R0OtU1BemWMXNRYHc7lndGDsLV3B4mqQVKKomL9jVWvpm2lpo3RvQp1mx1ib3SruMBLF6F%2By7nmT%2F5G4Uv74k36N0ln%2BRAyUlYXvwGbbXItoNpINk%2FVj2QsPRlk13ZxvfhU90%2Bxq%2FZ8k1NbGRK13jWOqSNRoSIg5cNI6ZlJXOTH1Fm8XSDWao3WVnB54lRouKQh7yhdJmwROY7ShA00pFhDf75JX9tLdW%2F97LtgXpTUBEcNAgCc2FdM2f7jK49lMFVsLzvnNYz2y9HRLMsS6zgPyrhw5RpyRgdp3jrl0S%2BhN341ci3oPOYB%2ByI8ZR%2FcAG9Ys48w0580BCpvoIqdnOL7T7oOpwWc6o%2B%2B9RTMXJudKyF2l5%2F4zrKnD8%2F3QnNVDStrhTIMiPIGjPxP4%2BMQTCgTMPeamhSJcT54Wdn%2BCM9oIrLwUdFufi7xitSDVo%2FIEqWBuw9%2F%2B8W1LWYmEtYy%2FjcbIrqJfeR1wVFLAqt0sisOnHwQTkG6P5zhUDwx7kEaL9b1Et4AIm2tQXDYI8g6jRmsy5yQIucb79S%2F6UZIpBhG1oAuwegmYayTl5WdfyqwMKeKgsUGOqUB%2FUZi1rzawr%2BMtOSGUzZf19LIlXB%2BvXy94DunufRYoLVHMfXpaXpNoxG2LghWShBxFT11eL2sFNXHOoWcCpApl0BDkl9AZvQLRpRxB3vosgBViP1cwOmGngD28UfVm3w2fni8AsSvJ8jqkV89y2fuLD8NXpbMCz2rHYdAUXdCzMj7lLp3Gzo3gXebegDf%2Bt6PR0AJYRL2P5VEMj%2F6QrhaHLYwJGcw&X-Amz-Signature=cdf5b96a68ea77040b9dc1ff932bcf25aa6aaf8d93e6756ba40ccc74921e08e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJYAJE7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAnx4TQTZJCQH1Ka1usi%2BDO6CvNycR37ZrbsFB6QfBoXAiEA3W5fbCebFUaxPwG1Ab%2Bql%2BHJyjqpHRc7Ticl6sfaeF0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF0x8Y6CpkOII5NpqircA13VYVIrClz6OyE1cQikC7oDRTN227T71pXFAr6K9%2BsgQpTtCAuSaSp2bBPS1R0OtU1BemWMXNRYHc7lndGDsLV3B4mqQVKKomL9jVWvpm2lpo3RvQp1mx1ib3SruMBLF6F%2By7nmT%2F5G4Uv74k36N0ln%2BRAyUlYXvwGbbXItoNpINk%2FVj2QsPRlk13ZxvfhU90%2Bxq%2FZ8k1NbGRK13jWOqSNRoSIg5cNI6ZlJXOTH1Fm8XSDWao3WVnB54lRouKQh7yhdJmwROY7ShA00pFhDf75JX9tLdW%2F97LtgXpTUBEcNAgCc2FdM2f7jK49lMFVsLzvnNYz2y9HRLMsS6zgPyrhw5RpyRgdp3jrl0S%2BhN341ci3oPOYB%2ByI8ZR%2FcAG9Ys48w0580BCpvoIqdnOL7T7oOpwWc6o%2B%2B9RTMXJudKyF2l5%2F4zrKnD8%2F3QnNVDStrhTIMiPIGjPxP4%2BMQTCgTMPeamhSJcT54Wdn%2BCM9oIrLwUdFufi7xitSDVo%2FIEqWBuw9%2F%2B8W1LWYmEtYy%2FjcbIrqJfeR1wVFLAqt0sisOnHwQTkG6P5zhUDwx7kEaL9b1Et4AIm2tQXDYI8g6jRmsy5yQIucb79S%2F6UZIpBhG1oAuwegmYayTl5WdfyqwMKeKgsUGOqUB%2FUZi1rzawr%2BMtOSGUzZf19LIlXB%2BvXy94DunufRYoLVHMfXpaXpNoxG2LghWShBxFT11eL2sFNXHOoWcCpApl0BDkl9AZvQLRpRxB3vosgBViP1cwOmGngD28UfVm3w2fni8AsSvJ8jqkV89y2fuLD8NXpbMCz2rHYdAUXdCzMj7lLp3Gzo3gXebegDf%2Bt6PR0AJYRL2P5VEMj%2F6QrhaHLYwJGcw&X-Amz-Signature=4d4381b3628da77514c7aaece7c2ea70ab8bdf87f445877e5562978387a1d1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
