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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RLBEJPV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEH1BU4tHGDfQopsJCfkQ8Kgal0l3XXFOrYGaCd1uzLAiEAtacB60%2Fc%2F4uK37j5zFs%2FYWgX6P%2BORaVeBSdsUQRGU30qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD0YL00qMek1glrwSrcA06%2BYvUTBXZhdsFwESAWjWvAYWp0w4m5%2BHtUYTp7oVudmdpDG0mpd8MGMjdTwF30DdyQCcVROt5oEgpF9YSICBmfZTVEmG%2FQhNHJI5G8y0CcX6p%2FBAOraKJExIMWFFlcUiqg0UTXmFGDtIOJIw8j6hmETmN2tQK3fyqNAeBxOuR%2BzJ3%2Fny6FpJn7go7mVfE5JbOkuAySDWEpcBFJLuzoWD4f8nDIGSK1tj3zJHAPaqVZ93VQU2pV0%2Fy9%2B7oAflfpk7s8Kx%2BvOXfV4kYnI78bOEMa9l971Lz5YOYjVP%2FzgGVwKqcJygYy91tjBJxRzGuisnfi9GXVU5PAe%2Brx0v3NjR4IxycLi6fM0wHve76aPoUwAxT0lB5XRPyW5h%2Bb58VPMEsVfyAaKwFi2O2aueaqvybWRyAK%2FEUGt%2By8NWsE9kWCQazmj91C2MO28zPqCkzw%2BG3iwFVbzba%2Bq2K7MYQ8B4jx55rnexTE6e0dRT59SYjPdlBuBE26bEhZoSb7Gl25gUYRMaKA4RPKXzwdRNzBtw0iu8JjR0Z6EDQDd0zQcZH2qNM7hlSYQkYZj4Ni%2BBL7eOcfpwCGgIx%2Fx2xvV%2FFwdeU%2B1MhtKZ9Ln9un64LnjU4vpRIXojBkpMmkadchMIL938EGOqUB47TAMe9O7cNUQLxBGJIyFOs3vdslQQtRVV0ClkFxrdJNpomyB50b%2FDZqbqbvkdLCZYYhaE9X%2FstJBVeJBTF6ip%2FCgn%2BQ6l0ZFu4sI2GqztvBcah%2Bcio0flAlCQoT9O%2BSlUA2mGthoWBSsnJq4niz2p5mSEkhmCUTMEDMFJ%2FVzSHh5g1h8REEcl87B0Zv2duCzlkWctBriiwtVuXTbX25%2BUzEMuHF&X-Amz-Signature=829ab81193e30586624db515f8d0c78a4506e3cd85caa308c0061eb662a8a64a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RLBEJPV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEH1BU4tHGDfQopsJCfkQ8Kgal0l3XXFOrYGaCd1uzLAiEAtacB60%2Fc%2F4uK37j5zFs%2FYWgX6P%2BORaVeBSdsUQRGU30qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD0YL00qMek1glrwSrcA06%2BYvUTBXZhdsFwESAWjWvAYWp0w4m5%2BHtUYTp7oVudmdpDG0mpd8MGMjdTwF30DdyQCcVROt5oEgpF9YSICBmfZTVEmG%2FQhNHJI5G8y0CcX6p%2FBAOraKJExIMWFFlcUiqg0UTXmFGDtIOJIw8j6hmETmN2tQK3fyqNAeBxOuR%2BzJ3%2Fny6FpJn7go7mVfE5JbOkuAySDWEpcBFJLuzoWD4f8nDIGSK1tj3zJHAPaqVZ93VQU2pV0%2Fy9%2B7oAflfpk7s8Kx%2BvOXfV4kYnI78bOEMa9l971Lz5YOYjVP%2FzgGVwKqcJygYy91tjBJxRzGuisnfi9GXVU5PAe%2Brx0v3NjR4IxycLi6fM0wHve76aPoUwAxT0lB5XRPyW5h%2Bb58VPMEsVfyAaKwFi2O2aueaqvybWRyAK%2FEUGt%2By8NWsE9kWCQazmj91C2MO28zPqCkzw%2BG3iwFVbzba%2Bq2K7MYQ8B4jx55rnexTE6e0dRT59SYjPdlBuBE26bEhZoSb7Gl25gUYRMaKA4RPKXzwdRNzBtw0iu8JjR0Z6EDQDd0zQcZH2qNM7hlSYQkYZj4Ni%2BBL7eOcfpwCGgIx%2Fx2xvV%2FFwdeU%2B1MhtKZ9Ln9un64LnjU4vpRIXojBkpMmkadchMIL938EGOqUB47TAMe9O7cNUQLxBGJIyFOs3vdslQQtRVV0ClkFxrdJNpomyB50b%2FDZqbqbvkdLCZYYhaE9X%2FstJBVeJBTF6ip%2FCgn%2BQ6l0ZFu4sI2GqztvBcah%2Bcio0flAlCQoT9O%2BSlUA2mGthoWBSsnJq4niz2p5mSEkhmCUTMEDMFJ%2FVzSHh5g1h8REEcl87B0Zv2duCzlkWctBriiwtVuXTbX25%2BUzEMuHF&X-Amz-Signature=4944bc733665cd04ba6521fbb52796c19b78f15e33e52a03a730693953917c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
