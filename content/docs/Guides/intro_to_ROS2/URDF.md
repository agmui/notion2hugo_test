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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAHRIGJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD6LP9H3AgbQp%2BOOH9aEjPf6CXi%2BPsH%2Fh0iU7MuKDvQYgIgNwBP72%2FXfVFRyfnmfR2rCfCVOzkexrdm788cDyeeMOUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGfxw2vSsXDZrFbOVCrcAxX41H%2BndEF6u9OnKelarHhnWUWMtIvvFB%2BeMydImrlfh8YR5ZkzC3nexS0S8v1ha5tJTW5PjRTXUoTVzNT%2BAnQi%2FqU%2Fulh8oO4NSeiXP6QSUkay3IdfLtYKVCUIj2AFa28aBMqEWrJFkXryrNcff8MxGPxrzBEnFx7Wa9CNSwCZCC1D46uudq8W23QmOrxkWggnAAerQb1dwF2ftwSzRwhcKcOcGaYdI4tw64rHbnNUlWJNmR22XarCHg%2FbT3eJs12TRCwrJcfXi8tv8te56h4I1b6U1WpHXtm5fiVPUZ%2BINTe%2FQyKmkcabzzlNPW99E2V2oiUmtBpzQ2y42l4tJHDEPilGPiEvmTsVETIi5WmK9dt714DHnW2zeXbzZF79Vydy6tkA8AJwisl5MmxbRIOvePbw61t2y%2BBFG2jvRjcjY%2B57CmIHKr1asLVHXtyicSpx1yFsWMCJy7wSMKdcQsXa7hk8SPypI1o9WOr9WkqlmpSw%2BjALFe%2FbjTr79mwr7ThUA6KIKhHu5c%2FTHe0uqjnWeI2OSlI22TyoCAY7%2FK7%2FueclHiFBpN5TCN6AsZgIO%2BG3Zm4bhyR%2BCoOqsr4RveSB7NuYd%2FBGubyI%2B%2BfcOmPYslK6NJvXCF0mPesZMJux0sMGOqUBaXTvt6iomDOv6TSy9%2BeVf9vyQmhp3je6vBpCVc0DC6Ar1%2B85HIj9NZxuviXLWjbage8nWV83cr%2Fz7bXaRbD39vQRv2rHtQTwgRgzSz%2Fo2N00MGlkb4BrVFmb3lQzQrB876c2Yx2pkKB3F2p8HJpZZ6KFQRhK7V9oyq%2BPYknMaysBCCYI0y17cxJhkcPHXPBlNt62Z5dscdIKuFFCHTzibc2sAqsz&X-Amz-Signature=f3f030de264e69a6f8b8d788db8d9180f2d192e37688d6a48ac9cb40089a9a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAHRIGJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD6LP9H3AgbQp%2BOOH9aEjPf6CXi%2BPsH%2Fh0iU7MuKDvQYgIgNwBP72%2FXfVFRyfnmfR2rCfCVOzkexrdm788cDyeeMOUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGfxw2vSsXDZrFbOVCrcAxX41H%2BndEF6u9OnKelarHhnWUWMtIvvFB%2BeMydImrlfh8YR5ZkzC3nexS0S8v1ha5tJTW5PjRTXUoTVzNT%2BAnQi%2FqU%2Fulh8oO4NSeiXP6QSUkay3IdfLtYKVCUIj2AFa28aBMqEWrJFkXryrNcff8MxGPxrzBEnFx7Wa9CNSwCZCC1D46uudq8W23QmOrxkWggnAAerQb1dwF2ftwSzRwhcKcOcGaYdI4tw64rHbnNUlWJNmR22XarCHg%2FbT3eJs12TRCwrJcfXi8tv8te56h4I1b6U1WpHXtm5fiVPUZ%2BINTe%2FQyKmkcabzzlNPW99E2V2oiUmtBpzQ2y42l4tJHDEPilGPiEvmTsVETIi5WmK9dt714DHnW2zeXbzZF79Vydy6tkA8AJwisl5MmxbRIOvePbw61t2y%2BBFG2jvRjcjY%2B57CmIHKr1asLVHXtyicSpx1yFsWMCJy7wSMKdcQsXa7hk8SPypI1o9WOr9WkqlmpSw%2BjALFe%2FbjTr79mwr7ThUA6KIKhHu5c%2FTHe0uqjnWeI2OSlI22TyoCAY7%2FK7%2FueclHiFBpN5TCN6AsZgIO%2BG3Zm4bhyR%2BCoOqsr4RveSB7NuYd%2FBGubyI%2B%2BfcOmPYslK6NJvXCF0mPesZMJux0sMGOqUBaXTvt6iomDOv6TSy9%2BeVf9vyQmhp3je6vBpCVc0DC6Ar1%2B85HIj9NZxuviXLWjbage8nWV83cr%2Fz7bXaRbD39vQRv2rHtQTwgRgzSz%2Fo2N00MGlkb4BrVFmb3lQzQrB876c2Yx2pkKB3F2p8HJpZZ6KFQRhK7V9oyq%2BPYknMaysBCCYI0y17cxJhkcPHXPBlNt62Z5dscdIKuFFCHTzibc2sAqsz&X-Amz-Signature=e8a1b0d24c32e3bcc914a437c58024c8434e41ed253aeed476fa89f5da9a6724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
