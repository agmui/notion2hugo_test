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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NK5TCW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDvVnI%2Fl6X63UgXg4hFkJKdqVerAxGzzXYRVMy5tpt0GwIhALCKjONGjLCtsOxYXAV7sm8qCNcekYFvxuqANbXc9TotKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1kbMdixiJAnCLWNcq3ANPa02FdVp9xAyaZxjoPJVbdleBXT%2BgI5SiJVJndjhxie2xVHljrskuODwbi5aGTPyMQDEuiB3I1X9sVjczX6K6x5mo31CRfiQCSKq4ZkCM7PRdr3QC2fu39TQNYE9CsO2iaWr73xo6BLYUDhsNrUHqnxVp1yUDv0PO0WcGgKPXMGaoyof6XiSj6hzG%2FYHjZ9eG7YzIXmeQXREXn3y8u02nryIs8PyxRJZijN19ouBauodab1t9gLRLcv82iUvXJooIz98LzmxPk4rpg2h8Plt406u%2BvBcav6krOfjgwdW5z3lGr%2F25HUuM%2FONKSo2jNNJBLizD4%2FhdKsKH%2Flsb4h05gxfHq0onI%2F3Jn62nPep2KWyzMfm%2FyHOL%2FtE8RBXDGW94mwJiuff%2BwhLNa%2BJVoPt68pHIEsYjRfzkMKMon6Oqnx2k2uIm9sT6QAi3DbN327uRm%2ByCw6E0xkn4PyFqixPUlYV1wcO0JHsfGFlo8Hg1yUIbWqtmdwxCZkg7RwAo19HsI4IYkl11XFo6SHxHq0Adm3ZoynXXQXJWjyJMBVYTsgHW%2F1fELuiqFKGCMsYeRAkSXEKhHHIEVSyPK6%2FKT4Z06Jmtnc3%2BgsUKa9x5P%2BlwKtDk9h11i1YmFuRSATC%2B5prDBjqkAdvXjUd4WcfmBZDyz%2F2IbdXetSKH43Pnnh2RuWjx9F9kpos9FetNaJj154%2BJgvkzBaiuSHbg%2BR2Urk8yv92HQekSfp7g0Tz8JFMP4Q5tDoEt4I13%2Bv8P4gc6QKmB9B28%2F34ABq1R0sNhNXGmZ%2B0UL4AR07ASiFBaCBVow7WagGnkeucbq%2F8VFEFy7FgTWDY73ZzeRCKwhGil0OQ5PIs0%2FCkG9MDw&X-Amz-Signature=35898dc4faa5b63575d0e4508f0e212fcb89744976cf6c4a7a973ae2bbf5d15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NK5TCW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDvVnI%2Fl6X63UgXg4hFkJKdqVerAxGzzXYRVMy5tpt0GwIhALCKjONGjLCtsOxYXAV7sm8qCNcekYFvxuqANbXc9TotKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1kbMdixiJAnCLWNcq3ANPa02FdVp9xAyaZxjoPJVbdleBXT%2BgI5SiJVJndjhxie2xVHljrskuODwbi5aGTPyMQDEuiB3I1X9sVjczX6K6x5mo31CRfiQCSKq4ZkCM7PRdr3QC2fu39TQNYE9CsO2iaWr73xo6BLYUDhsNrUHqnxVp1yUDv0PO0WcGgKPXMGaoyof6XiSj6hzG%2FYHjZ9eG7YzIXmeQXREXn3y8u02nryIs8PyxRJZijN19ouBauodab1t9gLRLcv82iUvXJooIz98LzmxPk4rpg2h8Plt406u%2BvBcav6krOfjgwdW5z3lGr%2F25HUuM%2FONKSo2jNNJBLizD4%2FhdKsKH%2Flsb4h05gxfHq0onI%2F3Jn62nPep2KWyzMfm%2FyHOL%2FtE8RBXDGW94mwJiuff%2BwhLNa%2BJVoPt68pHIEsYjRfzkMKMon6Oqnx2k2uIm9sT6QAi3DbN327uRm%2ByCw6E0xkn4PyFqixPUlYV1wcO0JHsfGFlo8Hg1yUIbWqtmdwxCZkg7RwAo19HsI4IYkl11XFo6SHxHq0Adm3ZoynXXQXJWjyJMBVYTsgHW%2F1fELuiqFKGCMsYeRAkSXEKhHHIEVSyPK6%2FKT4Z06Jmtnc3%2BgsUKa9x5P%2BlwKtDk9h11i1YmFuRSATC%2B5prDBjqkAdvXjUd4WcfmBZDyz%2F2IbdXetSKH43Pnnh2RuWjx9F9kpos9FetNaJj154%2BJgvkzBaiuSHbg%2BR2Urk8yv92HQekSfp7g0Tz8JFMP4Q5tDoEt4I13%2Bv8P4gc6QKmB9B28%2F34ABq1R0sNhNXGmZ%2B0UL4AR07ASiFBaCBVow7WagGnkeucbq%2F8VFEFy7FgTWDY73ZzeRCKwhGil0OQ5PIs0%2FCkG9MDw&X-Amz-Signature=68133fd464d1c1c211ee93e8a18847d75c0d1ce5eb3b8034a773b581f32633fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
