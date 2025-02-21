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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQGIIVF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIOioNF6YSvFuQ8Qgi%2Fe9ocZQLu%2Fmebbf1Jba9tFOEgAiEA%2FqEfGwuBc%2F2PRr6kJpIfNpayhsjG3Rryk7X6zJRpTx0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtNZeLyK%2B%2FmiPUkgCrcA%2Bl3wPtKfWBt1rrguV9LykRaSMFplMfFhqJglG%2B2wuGRxLXAgdatDo%2Bzuilkgj68LrXnVgXR%2B0T7F900DxIg35csxXmbTZNTcqCt1TgO6panD4OZGgI77KpRJ0ORigMDuiPgftA4JTtQ2jvyGpRspuuCz4Ac37BnKDFs3RXHoju4C860E8o1u8D1qKDb8lpReWnZgub0ZklfvmuzVms%2FoX7jQxBiDw5BmPB8Ck%2FntX0%2FPhwUx325TSut3CbB31Ffi4AzNfLgo1whr6nPb4wqCkZVsT2YapkirivXmxllLb7JZ6%2F6vtc4IyjvllFQTJPAdHndx%2BiKpDelYdHWZIBKmiyZqPQ%2BsSLNyVPWT6par3blE3s7vcfbVMOgXbR65JN%2FzWxbEZ2dELzT5WQnmelG%2BYpelvon625rOIlgUOgK6ynh0qJ6S7kb8IFRlJNC%2BUGCQT2JSXwAdLNBUbOJJmRGxvkdstOVrXZ0CgmavKQQ7gN0u9hTWgu1lGU3yoi3WSVGHLld9B094rkX1mrhVMsamknmF4UBLlFyCZRh4GFFn7pj2BRKNHMTHCCXG24X1O14iHSE%2BdF4mCOMj%2BSt%2F7Km37bW4ZEf1ID4vzplE81ympKiT4fIn0yyxMR7ALONMPSE370GOqUBwMvoV0aYZt08YDeoTF7ZRDnyUbzfbvOqO41%2FgpZSMb2QlaXHvl4S5SJeHTsWQVJ0ZFkw6Cw6uCm4%2Bpm83njeoDg6Ah8scWhHibm1S5Wc7I7MAtxGu4TzBiYcEaqfTyZCoKG9SCwljMItEPO9SAjzqBAfOAJimsXkLWZ6KH6ERCXLuxVQT9Wjw%2BsiwCrLXwigSfOxojJlidF9q%2BAvohQq217CqvJ7&X-Amz-Signature=7a25c4ee2b566d03bed3aa377d9cf06cee7d21f82d277b243ad7dee3e2e97481&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQGIIVF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIOioNF6YSvFuQ8Qgi%2Fe9ocZQLu%2Fmebbf1Jba9tFOEgAiEA%2FqEfGwuBc%2F2PRr6kJpIfNpayhsjG3Rryk7X6zJRpTx0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtNZeLyK%2B%2FmiPUkgCrcA%2Bl3wPtKfWBt1rrguV9LykRaSMFplMfFhqJglG%2B2wuGRxLXAgdatDo%2Bzuilkgj68LrXnVgXR%2B0T7F900DxIg35csxXmbTZNTcqCt1TgO6panD4OZGgI77KpRJ0ORigMDuiPgftA4JTtQ2jvyGpRspuuCz4Ac37BnKDFs3RXHoju4C860E8o1u8D1qKDb8lpReWnZgub0ZklfvmuzVms%2FoX7jQxBiDw5BmPB8Ck%2FntX0%2FPhwUx325TSut3CbB31Ffi4AzNfLgo1whr6nPb4wqCkZVsT2YapkirivXmxllLb7JZ6%2F6vtc4IyjvllFQTJPAdHndx%2BiKpDelYdHWZIBKmiyZqPQ%2BsSLNyVPWT6par3blE3s7vcfbVMOgXbR65JN%2FzWxbEZ2dELzT5WQnmelG%2BYpelvon625rOIlgUOgK6ynh0qJ6S7kb8IFRlJNC%2BUGCQT2JSXwAdLNBUbOJJmRGxvkdstOVrXZ0CgmavKQQ7gN0u9hTWgu1lGU3yoi3WSVGHLld9B094rkX1mrhVMsamknmF4UBLlFyCZRh4GFFn7pj2BRKNHMTHCCXG24X1O14iHSE%2BdF4mCOMj%2BSt%2F7Km37bW4ZEf1ID4vzplE81ympKiT4fIn0yyxMR7ALONMPSE370GOqUBwMvoV0aYZt08YDeoTF7ZRDnyUbzfbvOqO41%2FgpZSMb2QlaXHvl4S5SJeHTsWQVJ0ZFkw6Cw6uCm4%2Bpm83njeoDg6Ah8scWhHibm1S5Wc7I7MAtxGu4TzBiYcEaqfTyZCoKG9SCwljMItEPO9SAjzqBAfOAJimsXkLWZ6KH6ERCXLuxVQT9Wjw%2BsiwCrLXwigSfOxojJlidF9q%2BAvohQq217CqvJ7&X-Amz-Signature=ff80e2de3bd2ba2966a1887b30c48d823da5f02b25e4b7abeaa2c0394ab0f730&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
