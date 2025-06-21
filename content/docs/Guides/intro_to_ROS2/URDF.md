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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XO2A74%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BP3focpog23Wf2YcUmvz5%2BUxEo1HMC7jCwucPZp1zyAiEAhyKsE7YD5jXZA6VOcLPoNfnoqa9KbR9sJJE8GuT8sGkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2EzG0ucuWlhVGMSrcA2ce%2BD4fYxg7VuX0d%2FgTAj1r6%2BDfbnaxeiiAcjl4IeoTHhRzyT8JnLSgMPS%2BZeG0dOCCoegHhdE3mo7UbhaOHlALtubdN%2B2tQsAzc6TYOakusyqRUJoko9vov20WVU8I9%2BPHH3DuLWvSwlXDHgDzreSO1XCyDB7YddsAUDFP3kPCp%2BfID5hfhrziUCkSz%2F12FAlREvFyz7d4spYAkpZJ0FrFF2Ov%2FDu86Kmh%2FDvSHMD7iF8t%2B4O%2FEObYt7gRR85QhM75STiz09gd%2FLgUiwuCyVVcz9dacM27grUNNIx9w0C2eg7%2BJnAPgAGf3TE%2FBdUVdmT9VVDmZ3L79fXdEaSjOsPagnl%2FR2aKsfV7VsbnS3tkCbfFxN9B2anFoXY%2Bp0YTmXEue701XVskQuimKlqqi03eDjE0XRzH1rK5b5PpG5T1M7PzgxxtiCTyfvt7P3G3bQkWuWoDg4aSmdgYE8zTZQXzRmvn7s%2FUtYmImTdEl8HNAaBojR9G9cnwaB0B%2F8eJXyyFYFQK%2Fto%2FRx5kxmSZgPnMyBHpcDrWqCJoQXLgLTGM1a%2FTjq%2F%2B1RIivhtirWmz%2FCfiIVCU5uyUS5fa%2BD%2B2iVPArUkISEbUj6TAV%2Ffnu5vXvOnMm2F0W4%2FZ2nw5MNiP28IGOqUBnTQrMmbEr%2FnLwFbkyYlA06jvdaTRhI0Qi4CpZbrOCefsLzz%2BjiVtKOAjwTxOzi7rg8oB55JZUejbYEL9SC4IaHcGtVWL6F0jKVafTjTYyW%2Bp4Vr0fmCOwU42MSRttrIB%2BE3cuq%2FMU6gJZOg8%2F1SuBfZg67oN7m8vo8%2FYV5NRth5f5YbgzGymcY8ZDhkrGZa%2FXq36CQ5jBgdEbg%2BGrQB4Z%2BoJUmac&X-Amz-Signature=4b5f31c46c05181359e0ca1c0050ebbe4c18c24ef638935e9dd654bd0c60d2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7XO2A74%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BP3focpog23Wf2YcUmvz5%2BUxEo1HMC7jCwucPZp1zyAiEAhyKsE7YD5jXZA6VOcLPoNfnoqa9KbR9sJJE8GuT8sGkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDv2EzG0ucuWlhVGMSrcA2ce%2BD4fYxg7VuX0d%2FgTAj1r6%2BDfbnaxeiiAcjl4IeoTHhRzyT8JnLSgMPS%2BZeG0dOCCoegHhdE3mo7UbhaOHlALtubdN%2B2tQsAzc6TYOakusyqRUJoko9vov20WVU8I9%2BPHH3DuLWvSwlXDHgDzreSO1XCyDB7YddsAUDFP3kPCp%2BfID5hfhrziUCkSz%2F12FAlREvFyz7d4spYAkpZJ0FrFF2Ov%2FDu86Kmh%2FDvSHMD7iF8t%2B4O%2FEObYt7gRR85QhM75STiz09gd%2FLgUiwuCyVVcz9dacM27grUNNIx9w0C2eg7%2BJnAPgAGf3TE%2FBdUVdmT9VVDmZ3L79fXdEaSjOsPagnl%2FR2aKsfV7VsbnS3tkCbfFxN9B2anFoXY%2Bp0YTmXEue701XVskQuimKlqqi03eDjE0XRzH1rK5b5PpG5T1M7PzgxxtiCTyfvt7P3G3bQkWuWoDg4aSmdgYE8zTZQXzRmvn7s%2FUtYmImTdEl8HNAaBojR9G9cnwaB0B%2F8eJXyyFYFQK%2Fto%2FRx5kxmSZgPnMyBHpcDrWqCJoQXLgLTGM1a%2FTjq%2F%2B1RIivhtirWmz%2FCfiIVCU5uyUS5fa%2BD%2B2iVPArUkISEbUj6TAV%2Ffnu5vXvOnMm2F0W4%2FZ2nw5MNiP28IGOqUBnTQrMmbEr%2FnLwFbkyYlA06jvdaTRhI0Qi4CpZbrOCefsLzz%2BjiVtKOAjwTxOzi7rg8oB55JZUejbYEL9SC4IaHcGtVWL6F0jKVafTjTYyW%2Bp4Vr0fmCOwU42MSRttrIB%2BE3cuq%2FMU6gJZOg8%2F1SuBfZg67oN7m8vo8%2FYV5NRth5f5YbgzGymcY8ZDhkrGZa%2FXq36CQ5jBgdEbg%2BGrQB4Z%2BoJUmac&X-Amz-Signature=7eee68feb75b580e95a08dc894648b7bd3df4301f469d1f324b7931f0006c5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
