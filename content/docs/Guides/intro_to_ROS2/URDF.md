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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBQSSP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJLkcxG3m0Hd%2Fv1kKJAvzPOLmF503oWrQBdJbrT8%2FPGAiEArcyPVYY7Z5MVjChfXR7e0zvTasYvKxr47u3jOL2NXRIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoQWM2pao%2Bqr%2FOVCrcA79Q8gU4I3afunTE%2FCyi2TV56Foxuk1RAwTHWoDJFKUgFfcNJUs6eB6znc5IVhFEsO4G%2BBVy%2Bx38yF%2F3JTGvhGP2f6Qi1A1AGDGSgJM9Zotiu%2FvtkKNVTBteQY8ZgbC2vmjZ1xOgV9k3oMV7zM3ZJlMGQK5MhA8uuUhjjqpBAjKY8o%2FeJOfHUDW785H5878IFApRtiFGG%2BjsZaCh0zPG1gqR%2FiWAkT1DF4oaMAZ16XCW4xW19dfJES3XObP4ERHo5TDZrksDjWpF%2BjNY3254uxNGGUaQNWEaONuviUqdK23KLiSlrEOS%2FC35wq2CMmaeYpdzGBTzKieltl1Pz76lu7RO%2B9KFm%2Boqvnblc2eV0mC%2FuK9RpmhNBomsvec1Su7S5qYuqnlWdHynksKhflDeLFPyIDeG3KB5Zvr%2FYaPcQkqzFRWB97CYmBBrQrUCrcKyTwKTEkCfennxoSLy8HcjGVyemrDbY3a5efBhMfFUC3V4kTnJck6nIQoZw2N9bcFQuTdBJy0p4fJ8xP25Gn27svmipyNUog4ie5qM38tiG%2FkVLk%2FzQb4Pgth5OjXeJe4x6hjHyBEvXrdo9FM%2FcD2CcY0uZlJQGKiwbIerGsuBbf%2F6tbZL%2Fb8ZbtL7W%2Fc6MJO1xsMGOqUBFGhCj%2BkAZXwgRRW9WhxIeTXNIahHVmh8DyBnpeQuW0GtppxdTMoKaqAdAOS0%2BIKqq%2FHyfsg%2FIFublKHWuqv6Qg5yybsqAKsBqdHH9%2ByfCnZr29LfhcJFwj0zN%2BIxxc2GgQ8ujzsiq%2BNf6giFfhVAfDt9BqcYA2JlC8fRNYAGdblbUJug26NKerDl3%2FMvIvBtgeaEtbSWNRNYnXtxLF4XSlYwpaAN&X-Amz-Signature=5a221fd61fc30c44f0c75f1106dd34935adeb16d5219e93087fe7bd123ff9c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOBQSSP%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJLkcxG3m0Hd%2Fv1kKJAvzPOLmF503oWrQBdJbrT8%2FPGAiEArcyPVYY7Z5MVjChfXR7e0zvTasYvKxr47u3jOL2NXRIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoQWM2pao%2Bqr%2FOVCrcA79Q8gU4I3afunTE%2FCyi2TV56Foxuk1RAwTHWoDJFKUgFfcNJUs6eB6znc5IVhFEsO4G%2BBVy%2Bx38yF%2F3JTGvhGP2f6Qi1A1AGDGSgJM9Zotiu%2FvtkKNVTBteQY8ZgbC2vmjZ1xOgV9k3oMV7zM3ZJlMGQK5MhA8uuUhjjqpBAjKY8o%2FeJOfHUDW785H5878IFApRtiFGG%2BjsZaCh0zPG1gqR%2FiWAkT1DF4oaMAZ16XCW4xW19dfJES3XObP4ERHo5TDZrksDjWpF%2BjNY3254uxNGGUaQNWEaONuviUqdK23KLiSlrEOS%2FC35wq2CMmaeYpdzGBTzKieltl1Pz76lu7RO%2B9KFm%2Boqvnblc2eV0mC%2FuK9RpmhNBomsvec1Su7S5qYuqnlWdHynksKhflDeLFPyIDeG3KB5Zvr%2FYaPcQkqzFRWB97CYmBBrQrUCrcKyTwKTEkCfennxoSLy8HcjGVyemrDbY3a5efBhMfFUC3V4kTnJck6nIQoZw2N9bcFQuTdBJy0p4fJ8xP25Gn27svmipyNUog4ie5qM38tiG%2FkVLk%2FzQb4Pgth5OjXeJe4x6hjHyBEvXrdo9FM%2FcD2CcY0uZlJQGKiwbIerGsuBbf%2F6tbZL%2Fb8ZbtL7W%2Fc6MJO1xsMGOqUBFGhCj%2BkAZXwgRRW9WhxIeTXNIahHVmh8DyBnpeQuW0GtppxdTMoKaqAdAOS0%2BIKqq%2FHyfsg%2FIFublKHWuqv6Qg5yybsqAKsBqdHH9%2ByfCnZr29LfhcJFwj0zN%2BIxxc2GgQ8ujzsiq%2BNf6giFfhVAfDt9BqcYA2JlC8fRNYAGdblbUJug26NKerDl3%2FMvIvBtgeaEtbSWNRNYnXtxLF4XSlYwpaAN&X-Amz-Signature=badb3c99c6c7bc4c5978c1b68b36492135d2a0b67ece89e1883bc1384c35af38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
