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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTBJOEI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICd8KbAdIfWa9l5LN4Ezi%2BXCauNmDw12NF3zsfQ8f5saAiBtKlk%2FUuQy27QfrFrtls0bfbot%2BueSJIKlljeR%2BqPyiCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqAMR8zHNYu93b%2BvrKtwDCiNptGNNPT42j%2FQEy6kgrbm2hVzoFt3UKl2FF67fYDaCAxKb81WHY0ehZ75zEBwDfWThXDDfGG7GvLr%2FmZdLUAD%2B9wuDHw5OU474atPyt4Qs0O8jebOo7xikbIKp0OhhXdpk1bkTjQrH1maaIxHKPBAGndH6vZN96LTT59Ea3%2Boue18I4G1ZfQY8qVTBUHpQvfwpWhm6Qa2mRtfgGPkYs1dWKXAEhX3t6OKDJNxESFefnGUopAumWove0qiJv%2BIbflWOfwraRo0tmVgKFe5sjYqFDMgihJFIKs%2BF5ENkJtTFmBld%2FbErueBOkIlLoh22lhNdVKsqBIyXwHVQNFGfhBs%2BhjTtvJknnSOOsD2qb%2BXWmJ6GhYu6%2FYCs98NIxNXOhT6GlJA7WVP8u%2Fr0AhBsRMJczmwpPbFLCFCTFYcsiadq%2B5U%2F1mGER%2BzcXfvuzhMe97nEcSSYK%2BRSPAAOOg0U9PcTod1P6aeybRyCtXNiiJ9IutM3t%2FL8DghUPgLEoE2PD6XJ%2FK1w986c8Ls63FVyEj5ZqEWRziuk5TFnwc6%2FKVkDZCx7JDI09niUd2QOvQf9QWEvkNlIszG2ZwYQ4hkNruaB1Wbwo4CUSlvvXkXREZpZqtXktb%2FEoA7UUhgw4ITUwwY6pgEw14zubpgUUmYOjvGteIRCzywDvzKmOI41g3DvIrb5KVTL19Ss0briu0RpxHaOW%2FTd2oMwNkyY0UxG0nztwitdD0wxMURK5u8RdxoZQCnzsLOn%2FDhpKMbPDDZUll0s6xOqYmc6AwUcRh8a73%2FPdqD3nPoXtYd0kDMICm7NKLYZs59J4%2F3%2BDz%2F6qbRqkMQ5Hk5FvaeRGdsbTvtlNXS%2FF7%2F8ow5TY%2BSZ&X-Amz-Signature=6a7c1b4cbd48c813a17965fffb94644cb5f8b291de1b9ef36e03d08de888bdaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTBJOEI%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICd8KbAdIfWa9l5LN4Ezi%2BXCauNmDw12NF3zsfQ8f5saAiBtKlk%2FUuQy27QfrFrtls0bfbot%2BueSJIKlljeR%2BqPyiCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMqAMR8zHNYu93b%2BvrKtwDCiNptGNNPT42j%2FQEy6kgrbm2hVzoFt3UKl2FF67fYDaCAxKb81WHY0ehZ75zEBwDfWThXDDfGG7GvLr%2FmZdLUAD%2B9wuDHw5OU474atPyt4Qs0O8jebOo7xikbIKp0OhhXdpk1bkTjQrH1maaIxHKPBAGndH6vZN96LTT59Ea3%2Boue18I4G1ZfQY8qVTBUHpQvfwpWhm6Qa2mRtfgGPkYs1dWKXAEhX3t6OKDJNxESFefnGUopAumWove0qiJv%2BIbflWOfwraRo0tmVgKFe5sjYqFDMgihJFIKs%2BF5ENkJtTFmBld%2FbErueBOkIlLoh22lhNdVKsqBIyXwHVQNFGfhBs%2BhjTtvJknnSOOsD2qb%2BXWmJ6GhYu6%2FYCs98NIxNXOhT6GlJA7WVP8u%2Fr0AhBsRMJczmwpPbFLCFCTFYcsiadq%2B5U%2F1mGER%2BzcXfvuzhMe97nEcSSYK%2BRSPAAOOg0U9PcTod1P6aeybRyCtXNiiJ9IutM3t%2FL8DghUPgLEoE2PD6XJ%2FK1w986c8Ls63FVyEj5ZqEWRziuk5TFnwc6%2FKVkDZCx7JDI09niUd2QOvQf9QWEvkNlIszG2ZwYQ4hkNruaB1Wbwo4CUSlvvXkXREZpZqtXktb%2FEoA7UUhgw4ITUwwY6pgEw14zubpgUUmYOjvGteIRCzywDvzKmOI41g3DvIrb5KVTL19Ss0briu0RpxHaOW%2FTd2oMwNkyY0UxG0nztwitdD0wxMURK5u8RdxoZQCnzsLOn%2FDhpKMbPDDZUll0s6xOqYmc6AwUcRh8a73%2FPdqD3nPoXtYd0kDMICm7NKLYZs59J4%2F3%2BDz%2F6qbRqkMQ5Hk5FvaeRGdsbTvtlNXS%2FF7%2F8ow5TY%2BSZ&X-Amz-Signature=98e105112a45cfae226329a9a6b5bbb030e761670135acc6c5580ac436295be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
