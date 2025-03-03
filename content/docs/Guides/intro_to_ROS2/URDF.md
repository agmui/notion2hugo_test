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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCY3TG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Pek9ShijuCc5ELobVrFnXWdz1bBzzpY%2FxAQz7SVbVwIgN5LcglbSJMDFDHEsl6Bsc7T5Tgy9%2Bf9tB7NF2Nzsc9AqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7jzBhfDsNL1IsDrSrcAzLww9Lo%2B0TDkCJZCxDyMBSZXcTqsOsIcEt4RDUNx1do5xPiOs4dHI4G13gAuvl9HGcUXsLzXCP7wn99wYYlQJm9uxF7x3VtVga%2B4q1lj2sjZFGy5ZV%2FEjFkwYNES9TeX6iIe4Zzx6Zah5c0zC2a0L21j5iGnQBw5EYdsbWqvjoIWz2nQ4%2F7XQpnEq6hAk%2Blz41H%2F6AcFVTquGfB%2BYQGXpFK0p%2FHuW05Ww5b%2B3KTuBFuHIziol5DRxEj1XZ%2FAWasTynBcw%2BHjGNjrATdr%2BUN75%2FjbzrXx9tGpidgxbwGQSUKEVTxdqU8Aa9M2dqY0o%2F%2FZhsrv2DqDbxQimI98OLyINWEf8D8myEANWqqJOes0cZ9pEIbpSIVRGmjM9G83D1p4kZqYV50AXrctuUXQ92fUfyHPx6GgKS2cE70VF%2BnBhSt4WdoY7RaZPauZOL4v4CkDyLfwzBXYgUEEvRz5ph8FxVXzDJza6%2FYWwJXPRpu%2B%2B4hYen%2FmVHG%2BQUfvjB7uCV2aDdCvwWbMLKNutDIE00p0iSbmo5sMwfmq0giiR0%2BfH5vFs7zHHbGhAjpDXpP2jcL88cizhhvBK8GuQ2GsbNzygd5MRuKTRy%2FOZWedJ9UKYUz%2BO0YH24VZdjFB%2FdoMJLKk74GOqUBkybSNcl5jz%2FmbuqIMNmZEeAKjzBYCu%2BSdxTZUG9Iawp2WfwGVOIbYwfjzQsx7eLKQeoOtxZTPCKQDvptvu5gixYxdYxfq%2BTr5mY35i55WQ9I7v9CePRxvn%2FXrLOApzsbu11ahOUmtFUqHKWn%2F67BDMfGUxF7Ttc%2F5bXhSkBRWY1tiAa9E6U3rRCCMrtm%2B5uZdDL%2Bodkrq645ZmpmVfttnEHv4MXi&X-Amz-Signature=00af662c079385941ee44f36513122d64da5f13ad928eef535911e95de8bb123&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCY3TG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Pek9ShijuCc5ELobVrFnXWdz1bBzzpY%2FxAQz7SVbVwIgN5LcglbSJMDFDHEsl6Bsc7T5Tgy9%2Bf9tB7NF2Nzsc9AqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7jzBhfDsNL1IsDrSrcAzLww9Lo%2B0TDkCJZCxDyMBSZXcTqsOsIcEt4RDUNx1do5xPiOs4dHI4G13gAuvl9HGcUXsLzXCP7wn99wYYlQJm9uxF7x3VtVga%2B4q1lj2sjZFGy5ZV%2FEjFkwYNES9TeX6iIe4Zzx6Zah5c0zC2a0L21j5iGnQBw5EYdsbWqvjoIWz2nQ4%2F7XQpnEq6hAk%2Blz41H%2F6AcFVTquGfB%2BYQGXpFK0p%2FHuW05Ww5b%2B3KTuBFuHIziol5DRxEj1XZ%2FAWasTynBcw%2BHjGNjrATdr%2BUN75%2FjbzrXx9tGpidgxbwGQSUKEVTxdqU8Aa9M2dqY0o%2F%2FZhsrv2DqDbxQimI98OLyINWEf8D8myEANWqqJOes0cZ9pEIbpSIVRGmjM9G83D1p4kZqYV50AXrctuUXQ92fUfyHPx6GgKS2cE70VF%2BnBhSt4WdoY7RaZPauZOL4v4CkDyLfwzBXYgUEEvRz5ph8FxVXzDJza6%2FYWwJXPRpu%2B%2B4hYen%2FmVHG%2BQUfvjB7uCV2aDdCvwWbMLKNutDIE00p0iSbmo5sMwfmq0giiR0%2BfH5vFs7zHHbGhAjpDXpP2jcL88cizhhvBK8GuQ2GsbNzygd5MRuKTRy%2FOZWedJ9UKYUz%2BO0YH24VZdjFB%2FdoMJLKk74GOqUBkybSNcl5jz%2FmbuqIMNmZEeAKjzBYCu%2BSdxTZUG9Iawp2WfwGVOIbYwfjzQsx7eLKQeoOtxZTPCKQDvptvu5gixYxdYxfq%2BTr5mY35i55WQ9I7v9CePRxvn%2FXrLOApzsbu11ahOUmtFUqHKWn%2F67BDMfGUxF7Ttc%2F5bXhSkBRWY1tiAa9E6U3rRCCMrtm%2B5uZdDL%2Bodkrq645ZmpmVfttnEHv4MXi&X-Amz-Signature=f2ec5c3072f74239be522d8ada5fe9612cd16b5a879cbad1f0e4a83de8810ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
