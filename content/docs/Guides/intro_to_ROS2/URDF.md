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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SSYGHN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEHj1vgt0%2FizaC7eNiRx%2B66Sv8XfBo1tEYXY0nKasdnnAiAR%2Bv4lanBsy11h0s3t%2BbNCIFIZg4965%2FprozchC0p1%2Byr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIManasgR2GfWbc9GlmKtwDvBoTbo1amFeiTVFL9NkQh2%2FLr0JlEo4xw5b%2F8vCDdrYfRf%2BITrz8VEW8vlka%2BjOCms%2Fvcixp5GWmAg%2B6TOzdpBEIDbCn5pmmBLaUorILGQM5OSrHg4cp80tPMDzoDgmh%2BK2rBimEUn0lgoPLwBxMGsPD1fffFdTT8grQHV7iAWNd8cRsRtlz5wQesr%2BPY9cN%2FE9P%2BNonxiR0Wxz3CIYaE7Dpf70NlmKKGDafd4qHWguBk8TZpnqYXnNyfrSWf3SxZJfnSW%2BYgedtScSdeQnCirbtyOi7K9bqq6fVkkCwlqGfYGPP0PcV4QkoWw3KLombmFtLdG8RvrPbvs8ujJQEgxLQ3RT1Jp1FRN8GrnMKZlo1jrSr%2Fu7ZbjsHSDv5pV0RLcauWBUVKAY8MRdH%2FHLtBKySpjbR8vF%2FQuA2ulYb9ZZ9jMHYQwEuJ%2B%2BM3Hd9DwVmOAieuvDcQ0RnHMpVhJi2hXqjInaHereh9YzGZSjiOIr0RMLLzT53%2FsMHqNEEm4naJdpEXzIdZm2XdQyU%2F3HnYiyzXWbFptsFc6D10%2BCFL%2ByxvabuAzBHlK3OpQzKEOvXYUhFSHhF%2F3co9M9UHpeE8%2F47C3DiNR0h1Sqw3oOmjG88YPEv5qv3dwKiiEUwmJD1vQY6pgEd%2Bpxtg%2FdqAr71iw2URURMzQkUUjAu%2FmAR4l4fWVz8BDuP3eVUdr%2BrMKkzxdoKxysRK8o1JBI%2FnXOvkFSMK9FDHwGTjiDKson1Lb3dJhCogqsFmKEO5PmWnZiTnOtq5EACjWz30%2FoTMqrUnH2zPWDlZXY0Yy3%2F9OmxUsQDveb9uOx%2FTw8l2mcD29ZxYcF642SiCP0Tx1u%2Fa3xZK1yRtIpUY2LbQaOy&X-Amz-Signature=9a2d57e804757aad12be5d2d7ac337ab17b97ff0619f6bbae7a314405bc5ba58&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SSYGHN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEHj1vgt0%2FizaC7eNiRx%2B66Sv8XfBo1tEYXY0nKasdnnAiAR%2Bv4lanBsy11h0s3t%2BbNCIFIZg4965%2FprozchC0p1%2Byr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIManasgR2GfWbc9GlmKtwDvBoTbo1amFeiTVFL9NkQh2%2FLr0JlEo4xw5b%2F8vCDdrYfRf%2BITrz8VEW8vlka%2BjOCms%2Fvcixp5GWmAg%2B6TOzdpBEIDbCn5pmmBLaUorILGQM5OSrHg4cp80tPMDzoDgmh%2BK2rBimEUn0lgoPLwBxMGsPD1fffFdTT8grQHV7iAWNd8cRsRtlz5wQesr%2BPY9cN%2FE9P%2BNonxiR0Wxz3CIYaE7Dpf70NlmKKGDafd4qHWguBk8TZpnqYXnNyfrSWf3SxZJfnSW%2BYgedtScSdeQnCirbtyOi7K9bqq6fVkkCwlqGfYGPP0PcV4QkoWw3KLombmFtLdG8RvrPbvs8ujJQEgxLQ3RT1Jp1FRN8GrnMKZlo1jrSr%2Fu7ZbjsHSDv5pV0RLcauWBUVKAY8MRdH%2FHLtBKySpjbR8vF%2FQuA2ulYb9ZZ9jMHYQwEuJ%2B%2BM3Hd9DwVmOAieuvDcQ0RnHMpVhJi2hXqjInaHereh9YzGZSjiOIr0RMLLzT53%2FsMHqNEEm4naJdpEXzIdZm2XdQyU%2F3HnYiyzXWbFptsFc6D10%2BCFL%2ByxvabuAzBHlK3OpQzKEOvXYUhFSHhF%2F3co9M9UHpeE8%2F47C3DiNR0h1Sqw3oOmjG88YPEv5qv3dwKiiEUwmJD1vQY6pgEd%2Bpxtg%2FdqAr71iw2URURMzQkUUjAu%2FmAR4l4fWVz8BDuP3eVUdr%2BrMKkzxdoKxysRK8o1JBI%2FnXOvkFSMK9FDHwGTjiDKson1Lb3dJhCogqsFmKEO5PmWnZiTnOtq5EACjWz30%2FoTMqrUnH2zPWDlZXY0Yy3%2F9OmxUsQDveb9uOx%2FTw8l2mcD29ZxYcF642SiCP0Tx1u%2Fa3xZK1yRtIpUY2LbQaOy&X-Amz-Signature=5b60764cc6f0754cfa3397d3055637926493f0247668fc912c63b0aa9ce3bf92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
