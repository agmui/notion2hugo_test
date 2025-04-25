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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSIMUOD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdGJRf2SyT%2Bt0QKaOtMlxay6dmQu65%2BhLi6NvF%2BXnTRAiEAlNsZUvNu%2FkWugIx1kXK5uNCW9MqmSPQbXlvFGoKsCjwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJzal23hl3CQodarFCrcA%2FEfmSjlPFTYF1h0tY%2FrGL8LC7N%2FnfFNxoOdJNdz5eJ5yNjJxlNFEF1TUp6QlAGakwIUU9BgGofO6MiABojref6C5NNkvCNhJdioe4nlOt%2FMFuTYpVUfdOBIfflU7MTSJfRzkUMhIS3F2kdOCXQVtDk6jFeKLrsa9q1xeWdyfue%2BZm8CKoyKRIrLgIV%2FT%2BWR19kpvpBMfGGwmxqybHqzJypoqB8KRKULiSgA1YuMb6VYFwLM3KXw1AwLsmszax7K4nj4gOtcbkJ4AboLbrKLldPmcuAp1PAM0EoBqiginO1Bb%2Fut%2BJzb8%2FlAacO5C8CEJrzXzCEUGc34rh4FMpiKbCHrtdrl9GH2PE3GnE6%2FivqFeJPfubOqAamNERWc9qFfGeff2lvidJl%2B4EigdlPy0FO2m%2BIaNtQVJDyRZuPbQNR6X%2Ff52hnFm4eAlty4XjiqV6vivVGch5W4ieNOp%2FvcSUHeegXBDoKwN0XDvg%2FzWh8p3WJxHiCeHDBYBGk8d%2FmEv8wHH7JwNoIrGrBMkT%2FS6p0i7LqORmnktALhU%2BNFZPB2vQ2ecoJ2HdZv%2FILLfqOwpAEtWnF2ttNwhxYkDQbDmmDIQVs7bexzxq6b1JCDPp7Tg8pksjmvAY6yD1DrMO%2FnrsAGOqUBxZCDpKdUGNqip20oABdF6SHPUKY2wST67adxHdY9tTKXYr0I2Pt7IgMlEK1JE8Kgr5sRclaCiK5DuZfNbr7TgAySyFQ2HT8lYONUXy17UUmAp%2BG2kLi6czo%2FoaxzkSrXw%2Bv8%2F8bNVm0SdXb9k2W83vwkozv%2BkHoKgzSRj7RLn9NRstas%2BlgkRwdXUtzkAOeALI%2BQSHr0020elaioAbF2mLp3YrxR&X-Amz-Signature=0edb67b8c3efed4f0a4ac1825f79fadb3e8ae3479280f788c8efb561de729448&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSIMUOD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdGJRf2SyT%2Bt0QKaOtMlxay6dmQu65%2BhLi6NvF%2BXnTRAiEAlNsZUvNu%2FkWugIx1kXK5uNCW9MqmSPQbXlvFGoKsCjwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJzal23hl3CQodarFCrcA%2FEfmSjlPFTYF1h0tY%2FrGL8LC7N%2FnfFNxoOdJNdz5eJ5yNjJxlNFEF1TUp6QlAGakwIUU9BgGofO6MiABojref6C5NNkvCNhJdioe4nlOt%2FMFuTYpVUfdOBIfflU7MTSJfRzkUMhIS3F2kdOCXQVtDk6jFeKLrsa9q1xeWdyfue%2BZm8CKoyKRIrLgIV%2FT%2BWR19kpvpBMfGGwmxqybHqzJypoqB8KRKULiSgA1YuMb6VYFwLM3KXw1AwLsmszax7K4nj4gOtcbkJ4AboLbrKLldPmcuAp1PAM0EoBqiginO1Bb%2Fut%2BJzb8%2FlAacO5C8CEJrzXzCEUGc34rh4FMpiKbCHrtdrl9GH2PE3GnE6%2FivqFeJPfubOqAamNERWc9qFfGeff2lvidJl%2B4EigdlPy0FO2m%2BIaNtQVJDyRZuPbQNR6X%2Ff52hnFm4eAlty4XjiqV6vivVGch5W4ieNOp%2FvcSUHeegXBDoKwN0XDvg%2FzWh8p3WJxHiCeHDBYBGk8d%2FmEv8wHH7JwNoIrGrBMkT%2FS6p0i7LqORmnktALhU%2BNFZPB2vQ2ecoJ2HdZv%2FILLfqOwpAEtWnF2ttNwhxYkDQbDmmDIQVs7bexzxq6b1JCDPp7Tg8pksjmvAY6yD1DrMO%2FnrsAGOqUBxZCDpKdUGNqip20oABdF6SHPUKY2wST67adxHdY9tTKXYr0I2Pt7IgMlEK1JE8Kgr5sRclaCiK5DuZfNbr7TgAySyFQ2HT8lYONUXy17UUmAp%2BG2kLi6czo%2FoaxzkSrXw%2Bv8%2F8bNVm0SdXb9k2W83vwkozv%2BkHoKgzSRj7RLn9NRstas%2BlgkRwdXUtzkAOeALI%2BQSHr0020elaioAbF2mLp3YrxR&X-Amz-Signature=5d8937b16811d3fdac5fb3d7c08b4769733b3d22c92b6b7f9cdfc2d294405911&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
