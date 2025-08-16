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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM36NIIF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGrYRGhGng3Sf8ONpUrHCQ4AGZfxpiIMWRgmCKSsklf2AiEA1BXozGeAs4Hy8WERdeVxL2qHKX%2FWc4JUI1ElfvTtDfcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIeHVqraYYmn84XbJSrcA51vyXpmtk7B76xXKfMLCKQyAt28p3V0a24mF%2FbAhDbbspG2BXfqTkIZvJ6FBM7c5%2FDrL3x0MNzw%2FXs5%2BHhZBxY3gYUki2DwJ7YLGgF2WRcw0Y8C03RYlaWWZG6A88RBwpfit0PswKtxnk9JcyvM1WGtAV1puco12xBh5OC7depGivpLi96dTC85kYI8%2F32%2BX76DJXMB%2Fy97EiminrG3rGFJ%2BIcYbvDYtqDvda3oZJt1nsVofsgqsS%2FY22W3x7s9sgJsfulPqfR6C3NYYyESAhc%2FZhnncVXiS%2FJq9E9n4L5R%2F1O3t2WClxF6c6E5BgWhDG3k0yrWc%2F9sZ8Yc2Nnh%2FHzzvGoQXqtkS61F%2BhBAztDAPYCnIgphZ9g5M7pWbQE1E4not6oo%2Fp7yMFiHwvo743fvmkO59CBuH0sUliQcGT6fKhVVbjaaaDLKoz6G%2FKezRUuTwtgmmHOEVWKNWGvnaHAtJyv7fUWNEgwdZ8wHcJwikdF4MCqluAJoHCwepjn4yFvL4eR4MwxgRG%2BK4C0xaFWUVsk9NOqEP0LyHszPayoQYDcH54aQFrMofExvmstO6lbkbsAbCS%2BPEuSozkNdj8n7WRJtKuiZb2xVEXv1UK7Pp%2BEwRkEdha0zPlNgMLOdgsUGOqUBKiKhjRn1fb%2BYcvRSGjdrR3I3JXPYDMMTamHjbT4sNjdwkGnC2Lw5sC%2B7B%2BdVd9E%2Bpf9jpTzqoHgA4hbDQUcS9d0kEqAg0mb4XoM2uJ5m0fq844Du2288PxnRg4yO07eoP9wnr61y02FTjnfCrvc1MC2Hxqk269ywXSP%2B%2B7ER0S%2Fn8X9KJt6FuZrhnjtvyODyDfppYkLOHvjKzXZ0%2B4G33DsdgroF&X-Amz-Signature=4d05e4028b8a8dbf71f6f796a11c9d0b69fc30f7f8ecf7161666cb96f6ce655b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM36NIIF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGrYRGhGng3Sf8ONpUrHCQ4AGZfxpiIMWRgmCKSsklf2AiEA1BXozGeAs4Hy8WERdeVxL2qHKX%2FWc4JUI1ElfvTtDfcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIeHVqraYYmn84XbJSrcA51vyXpmtk7B76xXKfMLCKQyAt28p3V0a24mF%2FbAhDbbspG2BXfqTkIZvJ6FBM7c5%2FDrL3x0MNzw%2FXs5%2BHhZBxY3gYUki2DwJ7YLGgF2WRcw0Y8C03RYlaWWZG6A88RBwpfit0PswKtxnk9JcyvM1WGtAV1puco12xBh5OC7depGivpLi96dTC85kYI8%2F32%2BX76DJXMB%2Fy97EiminrG3rGFJ%2BIcYbvDYtqDvda3oZJt1nsVofsgqsS%2FY22W3x7s9sgJsfulPqfR6C3NYYyESAhc%2FZhnncVXiS%2FJq9E9n4L5R%2F1O3t2WClxF6c6E5BgWhDG3k0yrWc%2F9sZ8Yc2Nnh%2FHzzvGoQXqtkS61F%2BhBAztDAPYCnIgphZ9g5M7pWbQE1E4not6oo%2Fp7yMFiHwvo743fvmkO59CBuH0sUliQcGT6fKhVVbjaaaDLKoz6G%2FKezRUuTwtgmmHOEVWKNWGvnaHAtJyv7fUWNEgwdZ8wHcJwikdF4MCqluAJoHCwepjn4yFvL4eR4MwxgRG%2BK4C0xaFWUVsk9NOqEP0LyHszPayoQYDcH54aQFrMofExvmstO6lbkbsAbCS%2BPEuSozkNdj8n7WRJtKuiZb2xVEXv1UK7Pp%2BEwRkEdha0zPlNgMLOdgsUGOqUBKiKhjRn1fb%2BYcvRSGjdrR3I3JXPYDMMTamHjbT4sNjdwkGnC2Lw5sC%2B7B%2BdVd9E%2Bpf9jpTzqoHgA4hbDQUcS9d0kEqAg0mb4XoM2uJ5m0fq844Du2288PxnRg4yO07eoP9wnr61y02FTjnfCrvc1MC2Hxqk269ywXSP%2B%2B7ER0S%2Fn8X9KJt6FuZrhnjtvyODyDfppYkLOHvjKzXZ0%2B4G33DsdgroF&X-Amz-Signature=f503ab3a833d483f469c8c9784627be91a5177f4b6bf73f80fde373fae6da820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
