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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6D746C%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfxceVUEwBBKCRPGXFf0PSkDJYPjnEYJ3Gyqobv7laaAiBtduedmibPU18%2BxBHM3qsqjnXBMzjSXvGywEbJ3gRdaCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1ZTvUsad%2BA6OpOrKtwDveaunSXEZ8JH%2Bp1Q%2By8NrhpDv9WRlFvQcSfmmwl4a8zqK7BzoOff%2FzNhTCF9ipBsYje0VZ%2FgdZ8Yepr8xtb0LIpXBG5u%2Fujn4SsMZLhta99nmHVtMl%2F%2BreDX%2B6jRfBJgmQCzb1NsJ75yUypGgtH8o%2Bdwy54WDpMEL0fBJ5x6KpPrefWpHfzOmWQPLhbxNinNGVh2n1LSGMV%2F%2BgR3GRKTf1TyVNpOHNlfGYeomqlT%2BoHux7WahdNIe99iaUCBzkatikFm1G3lU1H%2B9Z77syBciiV45LHKBoakjhFJ8xzbwsQJJyB1MSzWIuvRosedCLKoKcxJZRF6TZFCKrdz8YBJQMXFsK4dl66tWkwxAV%2BYp5u5obv1UtchGoVwQOiQusbNCEVP9QxtowQXaBk88VJt4iXaCB7f81YLicoEniBAVc5HxmmTRQWuVDqXdNQhGIKuJ7ST2qIdPzoWD2eOnQ1h2LX4iLUrVBcDBQ1oWwn%2F%2BPkK0aRQaTQoTKehrqJqz769UlkHLO%2FVqHHwduAD3xxBOz8SsDIsTIJiLpXqGJgC%2B%2F%2BFUUxD5d4nNkTxAROiSj7UxUf%2BrNHd7%2BO9PvEDB1iKg3LJbRZHFy7WcF591LqCGvOuj0RnvaxTNUYf6aUwi%2FSRwwY6pgEVFsDY3S3VY%2BCBkMTNzoqM4LAk2HDN0bqgdQH58bE8Kyqxmg7AcYt357EHWy1LD0zC5%2BdRMRson6%2BH6Fl6fFkx4s0azElW8aXYmxKzyo3Ra1SdHmJW%2F4iNtnz0GknGM5FKH4mIAWgNVwOr2OwLe71JdJKNXhaj%2FoCsYEX8yI7iTlV%2BpNC7144wtcqWxpywFOYOe%2Fneku7diCY1OcNEqzASW5k%2BRAtY&X-Amz-Signature=160f93bf7736c01bee6300ccc82544fedb877208c374a08d87fb968e55cbfa82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6D746C%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfxceVUEwBBKCRPGXFf0PSkDJYPjnEYJ3Gyqobv7laaAiBtduedmibPU18%2BxBHM3qsqjnXBMzjSXvGywEbJ3gRdaCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj1ZTvUsad%2BA6OpOrKtwDveaunSXEZ8JH%2Bp1Q%2By8NrhpDv9WRlFvQcSfmmwl4a8zqK7BzoOff%2FzNhTCF9ipBsYje0VZ%2FgdZ8Yepr8xtb0LIpXBG5u%2Fujn4SsMZLhta99nmHVtMl%2F%2BreDX%2B6jRfBJgmQCzb1NsJ75yUypGgtH8o%2Bdwy54WDpMEL0fBJ5x6KpPrefWpHfzOmWQPLhbxNinNGVh2n1LSGMV%2F%2BgR3GRKTf1TyVNpOHNlfGYeomqlT%2BoHux7WahdNIe99iaUCBzkatikFm1G3lU1H%2B9Z77syBciiV45LHKBoakjhFJ8xzbwsQJJyB1MSzWIuvRosedCLKoKcxJZRF6TZFCKrdz8YBJQMXFsK4dl66tWkwxAV%2BYp5u5obv1UtchGoVwQOiQusbNCEVP9QxtowQXaBk88VJt4iXaCB7f81YLicoEniBAVc5HxmmTRQWuVDqXdNQhGIKuJ7ST2qIdPzoWD2eOnQ1h2LX4iLUrVBcDBQ1oWwn%2F%2BPkK0aRQaTQoTKehrqJqz769UlkHLO%2FVqHHwduAD3xxBOz8SsDIsTIJiLpXqGJgC%2B%2F%2BFUUxD5d4nNkTxAROiSj7UxUf%2BrNHd7%2BO9PvEDB1iKg3LJbRZHFy7WcF591LqCGvOuj0RnvaxTNUYf6aUwi%2FSRwwY6pgEVFsDY3S3VY%2BCBkMTNzoqM4LAk2HDN0bqgdQH58bE8Kyqxmg7AcYt357EHWy1LD0zC5%2BdRMRson6%2BH6Fl6fFkx4s0azElW8aXYmxKzyo3Ra1SdHmJW%2F4iNtnz0GknGM5FKH4mIAWgNVwOr2OwLe71JdJKNXhaj%2FoCsYEX8yI7iTlV%2BpNC7144wtcqWxpywFOYOe%2Fneku7diCY1OcNEqzASW5k%2BRAtY&X-Amz-Signature=af70ff9bcc8959b0780586cc28a13065ad8eeeff1dd1b991a86b484ca020b94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
