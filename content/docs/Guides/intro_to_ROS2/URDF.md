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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHHD4OR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGtAGgp8nZn8qFj4af2si3IuCbawDBuFz98m0AXGsIOBAiEA38WbZEWItsi8JgAMNCc6AcRSkMsJL6IYvH0SOYsO5jgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBog63WFGOFlOGugYircA5bHPYJTQxoQknzRiaoGVLF3ouLz9bZYfepggQCfF42SMNOF9aR7DLioge6UeU8YayFeIYgSut82Gv0ssEm0u5SKZF3DVIsRr6az2NUAv97W%2FdQF3i0w%2BN51SAZeqd1xGM26gx7EoFFVbXrdDyXfUK0UhERRSeKDyjuOSkOBZzu%2BSePxEJ0JhaoHVVV1NFlzgoECGj2gQxJ7DKjF70DIfOKjJXgS1b7zaeZrk%2FeFU4tJXrUK3Ltv9mOSLTigucyRD%2BXE7jBsDkVWvRQn8myr9ojBPsPB2gK7SrmAIZOxgJMT95aO5yo7IMwKH%2Fllm1ekroLFD8EvM%2BFmeIfMFDLMEjycZMZRLp4e1PzS3V38udcrK0gYDzl8yBlAlczlr3eP0UMaoCCqXAFsQICt2WwcK5jqQJjq5GlctUCI1tEogonvhxhSTT%2F%2FqP2KqTvPF6NU6bXOkgHskVIQFZPPLSmTt06VVeAVwYTHFKPtDHrzwohW%2FI6i81o8HHNJFpZjGX%2BdASIoPNRQcsKAE3oDacQ7T1LYyW1T9leTfoVXeVwkjaOOSfGZ3g1vMFLVsnJa5ZBJ1SR4BYTP2xc%2FyPnvysuX6w%2FpJXpwJsEqSoniVUsGga1hA0frVTAW5eOCfMWvMJXv%2B8QGOqUB8qv6CqNtw47ZFAgyN6FUPc%2BOpr4xcl44qNM4wlCyD7JsCYwEPhVBCifymAwmJHxLrkvDNL%2FDBq5906ue63BuMNPW%2B2EP59JfwaAxasRyxw5PNCOiC5S7W0HY9f94eRvjg2aFX56JHX5Y0%2FP2W7tszDxJxBt%2ByFdJtQ%2FzFtW2MkHVEbEx2yMbHqMOgvaIFhlLNWU%2FqMknScO177F7Td4xtzNgX%2F16&X-Amz-Signature=c74fe495be7f2eb0e06e97fe326f7dfb5197568899881efeee8757257c18017a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHHD4OR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGtAGgp8nZn8qFj4af2si3IuCbawDBuFz98m0AXGsIOBAiEA38WbZEWItsi8JgAMNCc6AcRSkMsJL6IYvH0SOYsO5jgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBog63WFGOFlOGugYircA5bHPYJTQxoQknzRiaoGVLF3ouLz9bZYfepggQCfF42SMNOF9aR7DLioge6UeU8YayFeIYgSut82Gv0ssEm0u5SKZF3DVIsRr6az2NUAv97W%2FdQF3i0w%2BN51SAZeqd1xGM26gx7EoFFVbXrdDyXfUK0UhERRSeKDyjuOSkOBZzu%2BSePxEJ0JhaoHVVV1NFlzgoECGj2gQxJ7DKjF70DIfOKjJXgS1b7zaeZrk%2FeFU4tJXrUK3Ltv9mOSLTigucyRD%2BXE7jBsDkVWvRQn8myr9ojBPsPB2gK7SrmAIZOxgJMT95aO5yo7IMwKH%2Fllm1ekroLFD8EvM%2BFmeIfMFDLMEjycZMZRLp4e1PzS3V38udcrK0gYDzl8yBlAlczlr3eP0UMaoCCqXAFsQICt2WwcK5jqQJjq5GlctUCI1tEogonvhxhSTT%2F%2FqP2KqTvPF6NU6bXOkgHskVIQFZPPLSmTt06VVeAVwYTHFKPtDHrzwohW%2FI6i81o8HHNJFpZjGX%2BdASIoPNRQcsKAE3oDacQ7T1LYyW1T9leTfoVXeVwkjaOOSfGZ3g1vMFLVsnJa5ZBJ1SR4BYTP2xc%2FyPnvysuX6w%2FpJXpwJsEqSoniVUsGga1hA0frVTAW5eOCfMWvMJXv%2B8QGOqUB8qv6CqNtw47ZFAgyN6FUPc%2BOpr4xcl44qNM4wlCyD7JsCYwEPhVBCifymAwmJHxLrkvDNL%2FDBq5906ue63BuMNPW%2B2EP59JfwaAxasRyxw5PNCOiC5S7W0HY9f94eRvjg2aFX56JHX5Y0%2FP2W7tszDxJxBt%2ByFdJtQ%2FzFtW2MkHVEbEx2yMbHqMOgvaIFhlLNWU%2FqMknScO177F7Td4xtzNgX%2F16&X-Amz-Signature=98b5b9199e683727aaf00338e721fe0fbfaeec65e08d7d526242bb69ca6c2edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
